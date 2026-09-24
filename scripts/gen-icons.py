"""Generate Nur al-Usul PWA icons: emerald rounded square + white open book + 8-point star."""
from PIL import Image, ImageDraw
import math

def draw_icon(size: int, path: str):
    S = 4  # supersample
    px = size * S
    img = Image.new("RGBA", (px, px), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)

    emerald = (5, 105, 90, 255)       # emerald-800-ish
    white = (255, 255, 255, 255)
    amber = (245, 190, 96, 255)

    # Rounded square background
    r = int(px * 0.18)
    d.rounded_rectangle([0, 0, px - 1, px - 1], radius=r, fill=emerald)

    # Open book: two page quadrilaterals + spine
    cx, cy = px / 2, px * 0.56
    w = px * 0.62
    h = px * 0.34
    tilt = px * 0.055
    left_page = [(cx - w / 2, cy - h / 2 + tilt), (cx - px*0.02, cy - h/2 - tilt*0.2),
                 (cx - px*0.02, cy + h/2 - tilt*0.2), (cx - w / 2, cy + h/2 + tilt)]
    right_page = [(cx + px*0.02, cy - h/2 - tilt*0.2), (cx + w/2, cy - h/2 + tilt),
                  (cx + w/2, cy + h/2 + tilt), (cx + px*0.02, cy + h/2 - tilt*0.2)]
    d.polygon(left_page, fill=white)
    d.polygon(right_page, fill=(232, 248, 243, 255))
    d.line([(cx, cy - h/2 - tilt*0.2), (cx, cy + h/2 - tilt*0.2)], fill=(5, 80, 66, 255), width=int(px*0.012))
    for i in range(3):
        y = cy - h*0.22 + i * h * 0.28
        d.line([(cx - w*0.42, y), (cx - w*0.10, y)], fill=(120, 180, 160, 255), width=int(px*0.008))
        d.line([(cx + w*0.10, y), (cx + w*0.42, y)], fill=(120, 180, 160, 255), width=int(px*0.008))

    # 8-point star (rub el hizb style) top-center
    scx, scy, R = cx, px * 0.24, px * 0.085
    pts = []
    for i in range(16):
        ang = math.pi * i / 8 - math.pi / 2
        rad = R if i % 2 == 0 else R * 0.55
        pts.append((scx + rad * math.cos(ang), scy + rad * math.sin(ang)))
    d.polygon(pts, fill=amber)

    img = img.resize((size, size), Image.LANCZOS)
    img.save(path, "PNG")
    print(f"wrote {path} ({size}x{size})")

draw_icon(192, "public/icons/icon-192.png")
draw_icon(512, "public/icons/icon-512.png")
draw_icon(180, "public/icons/apple-touch-icon.png")
draw_icon(32, "public/icons/favicon-32.png")
