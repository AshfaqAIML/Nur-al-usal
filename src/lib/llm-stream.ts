import ZAI from "z-ai-web-dev-sdk";

/**
 * Streaming chat completion over the z-ai-web-dev-sdk.
 *
 * The SDK's `stream: true` mode yields an async iterable of raw SSE frames
 * (Uint8Array chunks of `data: {...}\n\n` text). This helper performs the
 * newline-safe buffering, frame parsing, `[DONE]` handling and delta
 * extraction, exposing a simple async generator of text deltas.
 */

export interface LlmStreamOptions {
  temperature?: number;
  /** Called once per decoded text delta (may be empty strings — filtered out). */
  onDelta?: (delta: string) => void;
  /** Abort signal → stops consuming the upstream stream. */
  signal?: AbortSignal;
}

/** Incremental SSE frame parser: buffers partial lines across chunks. */
class SseLineBuffer {
  private buf = "";

  /** Feed a decoded text chunk; returns complete lines (without newline). */
  push(text: string): string[] {
    this.buf += text;
    const lines: string[] = [];
    let idx: number;
    while ((idx = this.buf.indexOf("\n")) >= 0) {
      lines.push(this.buf.slice(0, idx).replace(/\r$/, ""));
      this.buf = this.buf.slice(idx + 1);
    }
    return lines;
  }

  flush(): string | null {
    if (!this.buf) return null;
    const rest = this.buf;
    this.buf = "";
    return rest;
  }
}

/** Extract delta content from one SSE data payload (returns null to skip). */
function deltaFromPayload(payload: string): string | null {
  if (!payload || payload === "[DONE]") return null;
  try {
    const json = JSON.parse(payload) as {
      choices?: { delta?: { content?: string }; message?: { content?: string } }[];
    };
    const choice = json.choices?.[0];
    return choice?.delta?.content ?? choice?.message?.content ?? null;
  } catch {
    return null; // tolerate keep-alive comments / partial frames
  }
}

/**
 * Stream an LLM completion; resolves with the full accumulated text.
 * Deltas arrive via onDelta as they are produced.
 */
export async function llmStream(
  systemPrompt: string,
  userPrompt: string,
  opts?: LlmStreamOptions
): Promise<string> {
  const zai = await ZAI.create();
  const completion = await zai.chat.completions.create({
    messages: [
      { role: "assistant", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
    thinking: { type: "disabled" },
    stream: true,
    ...(opts?.temperature !== undefined ? { temperature: opts.temperature } : {}),
  } as Parameters<typeof zai.chat.completions.create>[0]);

  const decoder = new TextDecoder();
  const buffer = new SseLineBuffer();
  let full = "";

  for await (const raw of completion as unknown as AsyncIterable<Uint8Array | string>) {
    if (opts?.signal?.aborted) break;
    const text = typeof raw === "string" ? raw : decoder.decode(raw, { stream: true });
    for (const line of buffer.push(text)) {
      const trimmed = line.trim();
      if (!trimmed.startsWith("data:")) continue;
      const delta = deltaFromPayload(trimmed.slice(5).trim());
      if (delta) {
        full += delta;
        opts?.onDelta?.(delta);
      }
    }
  }

  // Flush any unterminated final line.
  const tail = buffer.flush();
  if (tail) {
    const trimmed = tail.trim();
    if (trimmed.startsWith("data:")) {
      const delta = deltaFromPayload(trimmed.slice(5).trim());
      if (delta) {
        full += delta;
        opts?.onDelta?.(delta);
      }
    }
  }

  return full;
}
