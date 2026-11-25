#!/usr/bin/env python3
"""Detection / scene illustrations with NO heads or faces.
People are shown only as chest-and-torso crops (the camera frame cuts them at the shoulders).
Run: python3 scripts/generate-detection-illustrations.py   (also run by `npm run illustrations`)"""
import importlib.util, os, random

_here = os.path.dirname(os.path.abspath(__file__))
_spec = importlib.util.spec_from_file_location("gen", os.path.join(_here, "generate-illustrations.py"))
g = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(g)

W, H = g.W, g.H
ACC, RED, GRN, AMB = g.ACC, g.RED, g.GRN, g.AMB
OUT = g.OUT


# ---------- headless people ----------
def torso(cx, w, bottom, color="#3a4e6b", pack=False, top=-60, shade="#0a1422", skin="#c58f68", arm_gap=0):
    """Chest/torso crop. The body starts above the top of the frame, so there is no neck, head or face."""
    h = bottom - top
    half = w / 2
    s = f'<g><ellipse cx="{cx}" cy="{bottom+4}" rx="{half*1.1}" ry="12" fill="#000" opacity=".3"/>'
    if pack:  # backpack behind shoulders
        s += f'<rect x="{cx-half*0.92}" y="{top+h*0.12}" width="{w*0.92}" height="{h*0.62}" rx="{w*0.12}" fill="#0c1626" stroke="#1d3350" stroke-width="3"/>'
    # arms
    s += f'<rect x="{cx-half-w*0.19+arm_gap}" y="{top+8}" width="{w*0.2}" height="{h*0.92}" rx="{w*0.1}" fill="{color}" stroke="#050c16" stroke-width="3"/>'
    s += f'<rect x="{cx+half-w*0.01-arm_gap}" y="{top+8}" width="{w*0.2}" height="{h*0.92}" rx="{w*0.1}" fill="{color}" stroke="#050c16" stroke-width="3"/>'
    # body
    s += f'<rect x="{cx-half}" y="{top}" width="{w}" height="{h}" rx="{w*0.16}" fill="{color}" stroke="#050c16" stroke-width="3"/>'
    s += f'<rect x="{cx-half}" y="{top}" width="{w}" height="{h}" rx="{w*0.16}" fill="url(#dark)" opacity=".25"/>'
    s += f'<path d="M{cx-half+w*0.12} {top} L{cx-half+w*0.08} {top+h*0.7}" stroke="#fff" stroke-opacity=".10" stroke-width="3" fill="none"/>'
    if pack:  # straps
        for dx in (-0.28, 0.28):
            s += f'<rect x="{cx+dx*w-9}" y="{top}" width="18" height="{h*0.62}" rx="8" fill="{shade}" opacity=".85"/>'
    # hands
    s += f'<circle cx="{cx-half-w*0.09+arm_gap}" cy="{bottom-8}" r="{w*0.09}" fill="{skin}"/><circle cx="{cx+half+w*0.09-arm_gap}" cy="{bottom-8}" r="{w*0.09}" fill="{skin}"/>'
    return s + "</g>"


def gun_icon(x, y, k=1.0, color="#0b1320", edge="#e9f1fa"):
    """Simple pistol silhouette icon (no detail), used inside the detection box."""
    d = "M0 10 H92 V30 H66 L60 40 H48 V74 Q48 80 42 80 H24 Q18 80 18 74 V30 H0 Z"
    return (f'<g transform="translate({x} {y}) scale({k})"><path d="{d}" fill="{color}" stroke="{edge}" stroke-width="3" stroke-linejoin="round"/>'
            f'<path d="M30 40 H58" stroke="{edge}" stroke-opacity=".4" stroke-width="3"/></g>')


def cam_ui(cam, color_chip=GRN, chip_text="AI alert → human verified", ir=False):
    t = "#b8ffd0" if ir else "#cfe9ff"
    b = g.rec(70, 74)
    b += f'<text x="{W-70}" y="82" text-anchor="end" font-family="monospace" font-size="22" fill="{t}">{cam}</text>'
    b += g.chip(70, H - 110, chip_text, color_chip)
    return b


# ---------- scenes ----------
def library(title):
    r = random.Random(7)
    pal = ["#2f6fb0", "#1f9d8b", "#c9684a", "#8a5fc7", "#d7a63f", "#4aa0d8", "#5d7d9c", "#b54a62"]
    b = '<rect x="0" y="470" width="1200" height="330" fill="url(#floor)"/><rect width="1200" height="470" fill="#0b1b31"/>'
    # book shelves
    for sx in (40, 660):
        b += f'<rect x="{sx}" y="70" width="500" height="380" rx="8" fill="#0f2a47" stroke="#25496f" stroke-width="4"/>'
        for row in range(4):
            y = 90 + row * 90
            x = sx + 16
            while x < sx + 470:
                bw = r.randint(14, 28); bh = r.randint(54, 78)
                b += f'<rect x="{x}" y="{y+78-bh}" width="{bw}" height="{bh}" rx="3" fill="{r.choice(pal)}" opacity=".85"/>'
                x += bw + 3
            b += f'<rect x="{sx+8}" y="{y+78}" width="484" height="8" rx="3" fill="#25496f"/>'
    # window glow between shelves
    b += '<rect x="560" y="70" width="80" height="380" fill="#173a5e" opacity=".8"/>'
    # reading tables with laptops
    for tx, ty in ((120, 560), (560, 620), (880, 560)):
        b += f'<rect x="{tx}" y="{ty}" width="260" height="22" rx="8" fill="#26405f"/><rect x="{tx+20}" y="{ty+22}" width="12" height="90" fill="#1a2c44"/><rect x="{tx+228}" y="{ty+22}" width="12" height="90" fill="#1a2c44"/>'
        b += f'<path d="M{tx+80} {ty} l14 -64 h72 l14 64 z" fill="#102338" stroke="#35557a" stroke-width="3"/><rect x="{tx+98}" y="{ty-52}" width="56" height="40" fill="url(#scr)"/>'
    # bag on the middle table with a flagged object
    bx, by = 600, 530
    b += f'<rect x="{bx}" y="{by}" width="170" height="92" rx="18" fill="#0d1726" stroke="#35557a" stroke-width="3"/><rect x="{bx+14}" y="{by-14}" width="142" height="22" rx="10" fill="#142238"/>'
    b += gun_icon(bx + 40, by + 4, .9, "#07101c", "#ff9aa5")
    b += f'<circle cx="{bx+85}" cy="{by+40}" r="130" fill="url(#redglow)" filter="url(#blur)">{g.anim("opacity",".3;1;.3","1.6s")}</circle>'
    b += g.bracket(bx - 26, by - 52, 222, 170, RED, "Gun 96%")
    b += g.bracket(130, 470, 280, 150, ACC, "Table 99%", "2.6s") if False else ""
    b += g.scanline(0, 60, W, 680, "4s")
    b += cam_ui("CAM 03 · LIBRARY")
    return g.svg(b, title)


def metal_gate(title):
    b = '<rect width="1200" height="800" fill="url(#bg)"/>'
    # left panel: metal detector
    b += '<rect x="30" y="120" width="560" height="620" rx="22" fill="#0a1a2e" stroke="#25496f" stroke-width="3"/>'
    b += g.label(310, 100, "Metal detector gate", 30, "#ffd27a")
    b += '<rect x="30" y="560" width="560" height="180" rx="0" fill="url(#floor)"/>'
    # gate frame
    b += '<rect x="200" y="190" width="30" height="400" rx="8" fill="url(#metal)"/><rect x="390" y="190" width="30" height="400" rx="8" fill="url(#metal)"/><rect x="190" y="170" width="240" height="40" rx="12" fill="url(#metal)"/>'
    b += f'<circle cx="310" cy="190" r="9" fill="{AMB}">{g.anim("opacity","1;.2;1","1s")}</circle>'
    # queue of headless torsos (cropped at shoulders)
    for i, (x, w, c) in enumerate(((105, 110, "#3a4e6b"), (500, 110, "#34506e"))):
        b += torso(x, w, 600 + (i % 2) * 20, c, pack=True, top=250 + (i % 2) * 20)
    b += g.chip(60, 640, "Slow lines · manual checks", AMB)
    # right panel: AI detection
    b += '<rect x="610" y="120" width="560" height="620" rx="22" fill="#0a1a2e" stroke="#2dd4ff" stroke-opacity=".6" stroke-width="3"/>'
    b += g.label(890, 100, "AccelEye AI detection", 30, ACC)
    b += '<rect x="610" y="560" width="560" height="180" fill="url(#floor)"/>'
    for i, (x, w, c) in enumerate(((700, 110, "#3a4e6b"), (880, 120, "#4a5d78"), (1060, 100, "#34506e"))):
        b += torso(x, w, 640 - (i % 2) * 14, c, pack=True, top=190 + (i % 2) * 14)
    b += g.bracket(800, 170, 170, 480, ACC, "Person 99%", "2.4s")
    b += g.bracket(990, 190, 150, 460, ACC, None, "3s")
    b += g.scanline(620, 150, 540, 400, "4s")
    b += f'<g transform="translate(720 90)"><rect width="34" height="22" rx="6" fill="#0a1220" stroke="{ACC}" stroke-width="2"/><circle cx="17" cy="11" r="6" fill="{ACC}"/></g>'
    b += g.chip(640, 650, "Walk in freely · AI watches", GRN)
    return g.svg(b, title)


def weapon_close(title, label_text="Weapon 98%", square=False, ir=False):
    b = '<rect width="1200" height="800" fill="url(#bg)"/>'
    b += '<rect x="0" y="600" width="1200" height="200" fill="url(#floor)"/>'
    # background torsos (blurred)
    b += '<g filter="url(#soft)" opacity=".55">' + torso(180, 150, 800, "#2c3d57", top=100) + torso(1030, 160, 800, "#2f4560", top=80) + "</g>"
    # main torso (hoodie) cut off at the shoulders by the frame
    cx = 600
    b += torso(cx, 380, 800, "#35507a", top=-80, arm_gap=0)
    # hoodie pocket and zipper
    b += f'<path d="M{cx} -80 V800" stroke="#0a1422" stroke-width="5" opacity=".6"/><path d="M{cx-120} 560 H{cx+120} L{cx+140} 700 H{cx-140} Z" fill="#1b2a42" stroke="#0a1422" stroke-width="3"/>'
    # right fist holding a gun icon at hip level
    fx, fy = cx + 215, 590
    b += f'<rect x="{fx-26}" y="{fy-10}" width="52" height="58" rx="22" fill="#c58f68"/>'
    b += gun_icon(fx - 18, fy - 62, 1.15, "#07101c", "#dfe9f4")
    b += f'<circle cx="{fx+20}" cy="{fy-10}" r="170" fill="url(#redglow)" filter="url(#blur)">{g.anim("opacity",".3;1;.3","1.6s")}</circle>'
    b += g.bracket(fx - 120, fy - 130, 250, 210, RED, label_text)
    b += g.bracket(cx - 210, 140, 420, 640, ACC, "Person 99%", "2.4s")
    b += g.scanline(0, 60, W, 680, "4s")
    b += cam_ui("CAM 12 · ENTRANCE")
    return g.svg(b, title)


def violence(title):
    b = g.hallway(600)
    # crowd of headless torsos
    spots = [(110, 150, "#43556f"), (1060, 160, "#2f4766")]
    for i, (x, w, c) in enumerate(spots):
        b += torso(x, w, 760 - i * 6, c, pack=(i % 2 == 0), top=210 + (i % 3) * 22)
    # two fighting torsos in the middle: leaning toward each other, arms up
    b += torso(480, 170, 770, "#5a4d82", top=150)
    b += torso(720, 170, 770, "#8a4f62", top=130)
    b += f'<path d="M570 430 l30 -16 l-6 28 l32 -6 l-26 26" transform="translate(0 -60)" fill="none" stroke="{AMB}" stroke-width="6" stroke-linejoin="round">{g.anim("opacity","1;.2;1","0.7s")}</path>'
    b += f'<circle cx="595" cy="450" r="170" fill="url(#redglow)" filter="url(#blur)">{g.anim("opacity",".3;1;.3","1.3s")}</circle>'
    b += g.bracket(340, 110, 520, 680, RED, "Fight 94%")
    b += g.scanline(0, 60, W, 680, "4s")
    b += cam_ui("CAM 05 · HALLWAY")
    return g.svg(b, title)


def intruder(title):
    b = '<rect width="1200" height="800" fill="#0b1b31"/><rect y="610" width="1200" height="190" fill="url(#floor)"/>'
    # wall panels + double door
    b += '<rect x="250" y="90" width="700" height="520" rx="10" fill="#0f2a47" stroke="#25496f" stroke-width="5"/>'
    b += '<rect x="280" y="120" width="310" height="490" fill="#173a5e" stroke="#35557a" stroke-width="4"/><rect x="610" y="120" width="310" height="490" fill="#173a5e" stroke="#35557a" stroke-width="4"/>'
    b += '<rect x="320" y="170" width="230" height="200" fill="#8fd8ff" opacity=".18"/><rect x="650" y="170" width="230" height="200" fill="#8fd8ff" opacity=".18"/>'
    b += '<rect x="560" y="360" width="80" height="14" rx="6" fill="url(#metal)"/>'
    # access panel on the wall
    b += f'<rect x="980" y="300" width="70" height="120" rx="12" fill="#0a1220" stroke="#35557a" stroke-width="3"/><circle cx="1015" cy="340" r="14" fill="{RED}">{g.anim("opacity","1;.2;1","1s")}</circle><rect x="995" y="372" width="40" height="30" rx="6" fill="url(#scr)"/>'
    b += g.label(1015, 285, "LOCKED", 16, RED)
    # unauthorized figure: dark hoodie torso with the head out of frame
    b += torso(600, 280, 800, "#2b374d", top=150, shade="#05080f")
    b += f'<path d="M600 150 V800" stroke="#05080f" stroke-width="4" opacity=".7"/>'
    b += f'<circle cx="600" cy="430" r="230" fill="url(#redglow)" filter="url(#blur)" opacity=".5">{g.anim("opacity",".2;.5;.2","1.8s")}</circle>'
    b += g.bracket(430, 130, 340, 670, RED, "Unauthorized 92%")
    b += g.scanline(0, 60, W, 680, "4s")
    b += cam_ui("CAM 01 · MAIN DOOR", RED, "Verified by a human · alert sent")
    return g.svg(b, title)


def infrared(title, multi=True):
    """Night-vision / thermal look: green monochrome frame with glowing heat signatures."""
    b = '<rect width="1200" height="800" fill="#031a0f"/><rect width="1200" height="800" fill="url(#grid)" opacity=".5"/>'
    b += '<rect y="600" width="1200" height="200" fill="#052a18"/>'
    if not multi:
        # fence and lamp
        for x in range(0, 1200, 60):
            b += f'<line x1="{x}" y1="260" x2="{x}" y2="600" stroke="#0f5a34" stroke-width="3"/>'
        b += '<line x1="0" y1="300" x2="1200" y2="300" stroke="#0f5a34" stroke-width="4"/><line x1="0" y1="540" x2="1200" y2="540" stroke="#0f5a34" stroke-width="4"/>'
        b += '<rect x="1060" y="100" width="12" height="500" fill="#0f5a34"/><circle cx="1066" cy="100" r="70" fill="#b8ffd0" opacity=".25"/>'
    def heat(cx, w, bottom, top):
        return (f'<g filter="url(#soft)"><rect x="{cx-w/2-w*0.19}" y="{top}" width="{w*1.38}" height="{bottom-top}" rx="{w*0.2}" fill="#3bd16f" opacity=".35" filter="url(#blur)"/>'
                f'<rect x="{cx-w/2}" y="{top}" width="{w}" height="{bottom-top}" rx="{w*0.16}" fill="#d9ffe6" stroke="#031a0f" stroke-width="6"/>'
                f'<rect x="{cx-w/2-w*0.19}" y="{top+8}" width="{w*0.2}" height="{(bottom-top)*0.9}" rx="{w*0.1}" fill="#9af0b8" stroke="#031a0f" stroke-width="5"/><rect x="{cx+w/2-w*0.01}" y="{top+8}" width="{w*0.2}" height="{(bottom-top)*0.9}" rx="{w*0.1}" fill="#9af0b8" stroke="#031a0f" stroke-width="5"/></g>')
    if multi:
        for cx, w, bt, tp, lab, col in ((230, 280, 800, -40, "Weapon 95%", RED), (640, 290, 800, -40, "Weapon 93%", RED), (1040, 220, 800, 60, None, ACC)):
            b += heat(cx, w, bt, tp)
            if lab:
                b += gun_icon(cx + w / 2 - 20, 520, 1.0, "#021208", "#ffffff")
                b += g.bracket(cx - w / 2 - 20, 410, w + 70, 230, col, lab)
            else:
                b += g.bracket(cx - w / 2 - 20, 140, w + 60, 660, col, "Person 98%", "2.4s")
    else:
        b += heat(560, 340, 800, -40)
        b += gun_icon(620, 480, 1.2, "#021208", "#ffffff")
        b += g.bracket(480, 380, 330, 270, RED, "Weapon 93%")
        b += g.bracket(380, 50, 360, 750, ACC, "Person 99%", "2.6s")
    b += g.scanline(0, 60, W, 680, "3.4s", "#7dffa8")
    b += f'<rect width="1200" height="800" fill="#04200f" opacity=".18"/>'
    b += cam_ui("CAM 09 · NIGHT · IR", GRN, "Infrared · detected in the dark", ir=True)
    return g.svg(b, title)


def bodycam(title):
    b = '<ellipse cx="600" cy="420" rx="420" ry="300" fill="url(#glow)"/>'
    # officer torso, head out of frame
    cx = 600
    b += torso(cx, 440, 800, "#25446c", top=-40, shade="#07101c", skin="#c58f68")
    # collar line / shirt panels
    b += f'<path d="M{cx} -40 V800" stroke="#0a1626" stroke-width="5"/><path d="M{cx-190} 60 L{cx-20} 160 M{cx+190} 60 L{cx+20} 160" stroke="#2b4666" stroke-width="5" fill="none"/>'
    # shoulder patches
    b += f'<rect x="{cx-196}" y="150" width="62" height="70" rx="10" fill="#0c1a2e" stroke="{ACC}" stroke-width="3"/><circle cx="{cx-165}" cy="185" r="14" fill="none" stroke="{ACC}" stroke-width="3"/>'
    b += f'<rect x="{cx+134}" y="150" width="62" height="70" rx="10" fill="#0c1a2e" stroke="#35557a" stroke-width="3"/>'
    # badge
    b += f'<path d="M{cx+90} 300 l26 -8 l26 8 l-4 36 q-22 20 -44 0 z" fill="#d9b44a" stroke="#8a6b1a" stroke-width="3"/>'
    # body-worn camera clipped on the chest
    bx, by = cx - 150, 280
    b += f'<g filter="url(#shadow)"><rect x="{bx}" y="{by}" width="130" height="150" rx="22" fill="#0a1220" stroke="#35557a" stroke-width="4"/>'
    b += f'<circle cx="{bx+65}" cy="{by+62}" r="38" fill="#05101c" stroke="{ACC}" stroke-width="4"/><circle cx="{bx+65}" cy="{by+62}" r="20" fill="url(#scr)"/><circle cx="{bx+58}" cy="{by+55}" r="6" fill="#fff" opacity=".6"/>'
    b += f'<rect x="{bx+38}" y="{by+116}" width="54" height="12" rx="6" fill="#16263e"/><circle cx="{bx+110}" cy="{by+22}" r="8" fill="{RED}">{g.anim("opacity","1;.2;1","1.2s")}</circle></g>'
    b += g.pulse_ring(bx + 65, by + 62, 40, ACC, "2.6s")
    # stream to AccelEye
    b += g.flow(f"M{bx+130} {by+60} C 760 220 860 160 940 160", ACC, "2s", 4)
    b += g.monitor(900, 110, 230, 150, g.bracket(930, 150, 80, 80, RED, None) + g.scanline(910, 120, 210, 130, "3s"))
    b += g.chip(820, 290, "Live to AccelEye AI", ACC)
    b += g.chip(70, 90, "Body-worn camera", ACC)
    return g.svg(b, title)


def rgb_low_light(title):
    """RGB camera in a dim corridor: noisy dark frame, enhanced detection."""
    r = random.Random(11)
    b = '<rect width="1200" height="800" fill="#050a14"/>'
    # dim corridor: perspective walls + floor
    b += '<polygon points="0,0 380,230 380,570 0,800" fill="#0a1424"/><polygon points="1200,0 820,230 820,570 1200,800" fill="#0a1424"/>'
    b += '<polygon points="380,230 820,230 820,570 380,570" fill="#070e1b"/><polygon points="0,800 380,570 820,570 1200,800" fill="#0b1626"/>'
    for x in (150, 300, 900, 1050):  # dim ceiling lights
        b += f'<ellipse cx="{x}" cy="{60 + abs(600-x)//9}" rx="70" ry="10" fill="#8fd8ff" opacity=".12"/>'
    # low-light noise grain
    for _ in range(420):
        x, y = r.randint(0, 1200), r.randint(0, 800)
        b += f'<rect x="{x}" y="{y}" width="3" height="3" fill="#6aa6d6" opacity="{r.choice([.10,.16,.22])}"/>'
    # dark torso in the corridor, cropped at the shoulders
    b += torso(600, 230, 800, "#16233a", top=250, shade="#05080f")
    b += f'<circle cx="600" cy="560" r="210" fill="url(#glow)" filter="url(#blur)" opacity=".55"/>'
    b += gun_icon(668, 560, 1.0, "#07101c", "#ffffff")
    b += g.bracket(450, 240, 430, 560, RED, "Weapon 96%")
    # exposure meter
    b += '<g transform="translate(70 150)"><rect width="190" height="40" rx="10" fill="#0a1220" stroke="#35557a" stroke-width="2"/><text x="14" y="26" font-family="monospace" font-size="18" fill="#9fb7d1">RGB · 0.3 lux</text></g>'
    b += g.scanline(0, 60, W, 680, "4s")
    b += cam_ui("CAM 14 · RGB LOW LIGHT", GRN, "Detected in low light")
    return g.svg(b, title)


def human_verification(title):
    """Analyst console: detection frame under review, verified stamp and a response timeline. No people."""
    b = '<ellipse cx="600" cy="420" rx="500" ry="320" fill="url(#glow)"/>'
    # large monitor
    b += '<g filter="url(#shadow)"><rect x="150" y="90" width="900" height="520" rx="26" fill="#0a1220" stroke="#35557a" stroke-width="5"/><rect x="176" y="116" width="848" height="468" rx="14" fill="url(#scr)"/></g>'
    b += '<rect x="520" y="610" width="160" height="60" fill="#16263e"/><rect x="400" y="670" width="400" height="22" rx="10" fill="#1d3350"/>'
    # video under review (left)
    b += '<rect x="200" y="150" width="520" height="330" rx="12" fill="#07101c" stroke="#25496f" stroke-width="3"/>'
    b += torso(380, 150, 480, "#2b4666", top=190, shade="#05080f")
    b += gun_icon(440, 380, .9, "#07101c", "#ff9aa5")
    b += g.bracket(300, 200, 250, 260, RED, "Weapon 98%")
    b += g.rec(220, 172)
    # review panel (right)
    b += '<rect x="745" y="150" width="255" height="330" rx="12" fill="#0b1b31" stroke="#25496f" stroke-width="3"/>'
    b += g.label(872, 190, "Human review", 22, ACC)
    for i, t in enumerate(("Real weapon?", "Location confirmed", "Responders notified")):
        y = 235 + i * 62
        b += f'<rect x="765" y="{y}" width="215" height="46" rx="10" fill="#102338"/><circle cx="792" cy="{y+23}" r="13" fill="{GRN}"/><path d="M785 {y+23} l5 5 l10 -11" stroke="#041" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><text x="814" y="{y+29}" font-family="sans-serif" font-size="15" fill="#e6f1fb">{t}</text>'
    # verified stamp
    b += f'<g transform="translate(655 470)"><circle r="62" fill="#04151a" stroke="{GRN}" stroke-width="6">{g.anim("opacity",".7;1;.7","2s")}</circle><path d="M-26 2 l16 18 l36 -40" stroke="{GRN}" stroke-width="12" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>'
    # timeline
    b += f'<rect x="200" y="520" width="440" height="10" rx="5" fill="#16263e"/><rect x="200" y="520" width="440" height="10" rx="5" fill="{ACC}">{g.anim("width","40;440;440","3s")}</rect>'
    for x, t in ((200, "Detect"), (350, "Verify"), (500, "Alert")):
        b += f'<circle cx="{x}" cy="525" r="11" fill="{ACC}"/><text x="{x}" y="556" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#cfe9ff">{t}</text>'
    # headset + 24/7 badge icons (no person)
    b += f'<g transform="translate(1075 150)"><circle r="46" fill="#0a1220" stroke="{ACC}" stroke-width="3"/><path d="M-22 6 v-10 a22 22 0 0 1 44 0 v10" fill="none" stroke="{ACC}" stroke-width="5" stroke-linecap="round"/><rect x="-30" y="-2" width="12" height="22" rx="5" fill="{ACC}"/><rect x="18" y="-2" width="12" height="22" rx="5" fill="{ACC}"/></g>'
    b += f'<g transform="translate(1075 270)"><circle r="46" fill="#0a1220" stroke="{GRN}" stroke-width="3"/><text y="9" text-anchor="middle" font-family="sans-serif" font-weight="800" font-size="26" fill="{GRN}">24/7</text></g>'
    b += g.chip(70, 90, "Verified by a trained analyst", GRN)
    return g.svg(b, title)


def data_privacy(title):
    """Locked data vault: database stack under a padlock and shield. No people."""
    b = '<ellipse cx="600" cy="420" rx="520" ry="330" fill="url(#glow)"/>'
    # data stack
    for i, y in enumerate((470, 540, 610)):
        b += f'<g filter="url(#shadow)"><rect x="380" y="{y}" width="440" height="56" rx="14" fill="#0b1b31" stroke="#35557a" stroke-width="3"/></g><circle cx="420" cy="{y+28}" r="7" fill="{GRN}">{g.anim("opacity","1;.3;1",f"{1.2+i*.3}s")}</circle><rect x="450" y="{y+22}" width="220" height="12" rx="6" fill="#16263e"/><rect x="720" y="{y+22}" width="64" height="12" rx="6" fill="{ACC}" opacity=".7"/>'
    # shield with padlock
    b += f'<path d="M600 90 L760 150 V300 Q760 400 600 470 Q440 400 440 300 V150 Z" fill="#0a1a2e" stroke="{ACC}" stroke-width="6"/>'
    b += f'<rect x="545" y="270" width="110" height="90" rx="14" fill="{ACC}"/><path d="M565 270 v-34 a35 35 0 0 1 70 0 v34" fill="none" stroke="{ACC}" stroke-width="14" stroke-linecap="round"/><circle cx="600" cy="312" r="12" fill="#04101c"/><rect x="594" y="318" width="12" height="26" rx="5" fill="#04101c"/>'
    b += g.pulse_ring(600, 300, 190, ACC, "3s")
    # side chips
    b += g.chip(120, 200, "Recorded only on a threat", GRN)
    b += g.chip(800, 230, "You own your data", ACC)
    b += g.chip(130, 330, "Encrypted in transit", ACC)
    return g.svg(b, title)


JOBS = {
    "library": library,
    "metalGate": metal_gate,
    "weapon": lambda t: weapon_close(t, "Weapon 98%"),
    "weaponSquare": lambda t: weapon_close(t, "Gun 97%", square=True),
    "violence": violence,
    "intruder": intruder,
    "infraDetect": lambda t: infrared(t, True),
    "infraredFrame": lambda t: infrared(t, False),
    "bodycam": bodycam,
    "rgbLowLight": rgb_low_light,
    "humanVerification": human_verification,
    "dataPrivacy": data_privacy,
}

if __name__ == "__main__":
    import re
    src = open(os.path.join(_here, "..", "src", "content", "imageSlots.ts")).read()
    alts = dict((k, a) for k, _, a in re.findall(r'  (\w+): \{ kind: "(\w+)", alt: "([^"]*)"', src))
    for key, fn in JOBS.items():
        open(os.path.join(OUT, f"{key}.svg"), "w").write(fn(alts.get(key, key)))
    print(len(JOBS), "headless illustrations written to", os.path.abspath(OUT))
