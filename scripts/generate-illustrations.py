#!/usr/bin/env python3
"""Generates AccelEye's original animated SVG illustrations into public/images.
Run: python3 scripts/generate-images.py"""
import os, math
OUT = os.path.join(os.path.dirname(__file__), "..", "public", "images", "illustrations")
os.makedirs(OUT, exist_ok=True)
W, H = 1200, 800
ACC, RED, GRN, AMB = "#2dd4ff", "#ff4d5e", "#34d399", "#fbbf24"

DEFS = f"""<defs>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#050d1a"/><stop offset=".55" stop-color="#0a2140"/><stop offset="1" stop-color="#0b3a5e"/></linearGradient>
<linearGradient id="floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#16324f"/><stop offset="1" stop-color="#06101d"/></linearGradient>
<linearGradient id="wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0f2a47"/><stop offset="1" stop-color="#0a1c33"/></linearGradient>
<linearGradient id="metal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fa5bd"/><stop offset=".5" stop-color="#4b6179"/><stop offset="1" stop-color="#26374b"/></linearGradient>
<linearGradient id="dark" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1b2c42"/><stop offset="1" stop-color="#0a1422"/></linearGradient>
<linearGradient id="scr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0d3150"/><stop offset="1" stop-color="#061427"/></linearGradient>
<linearGradient id="beam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="{ACC}" stop-opacity="0"/><stop offset="1" stop-color="{ACC}" stop-opacity=".55"/></linearGradient>
<radialGradient id="glow"><stop offset="0" stop-color="{ACC}" stop-opacity=".55"/><stop offset="1" stop-color="{ACC}" stop-opacity="0"/></radialGradient>
<radialGradient id="redglow"><stop offset="0" stop-color="{RED}" stop-opacity=".5"/><stop offset="1" stop-color="{RED}" stop-opacity="0"/></radialGradient>
<radialGradient id="sun"><stop offset="0" stop-color="#fff3b0"/><stop offset=".4" stop-color="{AMB}" stop-opacity=".7"/><stop offset="1" stop-color="{AMB}" stop-opacity="0"/></radialGradient>
<linearGradient id="vig" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#030812" stop-opacity=".0"/><stop offset="1" stop-color="#030812" stop-opacity=".55"/></linearGradient>
<pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="{ACC}" stroke-opacity=".08"/></pattern>
<filter id="blur"><feGaussianBlur stdDeviation="14"/></filter>
<filter id="soft"><feGaussianBlur stdDeviation="2.2"/></filter>
<filter id="shadow"><feDropShadow dx="0" dy="14" stdDeviation="14" flood-color="#000" flood-opacity=".5"/></filter>
</defs>"""

def svg(body, title, bg=True, extra_bg=""):
    title = title.replace('&', 'and').replace('<', '').replace('"', '')
    b = f'<rect width="{W}" height="{H}" fill="url(#bg)"/><rect width="{W}" height="{H}" fill="url(#grid)"/>' if bg else ""
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" role="img" aria-label="{title}">'
            f'<title>{title}</title>{DEFS}{b}{extra_bg}{body}'
            f'<rect width="{W}" height="{H}" fill="url(#vig)"/></svg>')

# ---------- motion helpers ----------
def anim(attr, vals, dur, begin="0s", extra=""):
    return f'<animate attributeName="{attr}" values="{vals}" dur="{dur}" begin="{begin}" repeatCount="indefinite" {extra}/>'
def pulse_ring(cx, cy, r=40, color=ACC, dur="2.4s", delay="0s"):
    return (f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="none" stroke="{color}" stroke-width="3">'
            f'{anim("r", f"{r};{r*2.6}", dur, delay)}{anim("opacity", ".8;0", dur, delay)}</circle>')
def scanline(x, y, w, h, dur="3s", color=ACC):
    return (f'<g><rect x="{x}" y="{y}" width="{w}" height="3" fill="{color}" opacity=".9"/>'
            f'<rect x="{x}" y="{y-40}" width="{w}" height="40" fill="url(#beam)" opacity=".7"/>'
            f'<animateTransform attributeName="transform" type="translate" values="0 0;0 {h};0 0" dur="{dur}" repeatCount="indefinite"/></g>')
def float_(inner, dy=10, dur="5s", delay="0s"):
    return f'<g>{inner}<animateTransform attributeName="transform" type="translate" values="0 0;0 {-dy};0 0" dur="{dur}" begin="{delay}" repeatCount="indefinite"/></g>'
def chip(x, y, text, color=ACC, w=None):
    w = w or (len(text) * 15 + 44)
    return (f'<g><rect x="{x}" y="{y}" width="{w}" height="46" rx="23" fill="#061427" fill-opacity=".88" stroke="{color}" stroke-width="2"/>'
            f'<circle cx="{x+24}" cy="{y+23}" r="7" fill="{color}">{anim("opacity","1;.25;1","1.4s")}</circle>'
            f'<text x="{x+42}" y="{y+31}" font-family="Arial,Helvetica,sans-serif" font-size="22" font-weight="700" fill="#fff">{text}</text></g>')
def bracket(x, y, w, h, color=RED, label=None, dur="1.6s"):
    c = 26
    p = (f'M{x} {y+c}V{y}H{x+c} M{x+w-c} {y}H{x+w}V{y+c} M{x+w} {y+h-c}V{y+h}H{x+w-c} M{x+c} {y+h}H{x} {y+h-c}')
    g = (f'<g><rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{color}" fill-opacity=".10">{anim("fill-opacity",".05;.25;.05",dur)}</rect>'
         f'<path d="{p}" fill="none" stroke="{color}" stroke-width="5" stroke-linecap="round">{anim("stroke-width","4;7;4",dur)}</path>')
    if label:
        lw = len(label) * 14 + 28
        g += (f'<rect x="{x}" y="{y-44}" width="{lw}" height="38" rx="6" fill="{color}"/>'
              f'<text x="{x+14}" y="{y-17}" font-family="Arial,Helvetica,sans-serif" font-size="21" font-weight="800" fill="#fff">{label}</text>')
    return g + "</g>"
def rec(x=70, y=70):
    return (f'<g><circle cx="{x}" cy="{y}" r="9" fill="{RED}">{anim("opacity","1;0;1","1.2s")}</circle>'
            f'<text x="{x+20}" y="{y+8}" font-family="Arial" font-size="22" font-weight="700" fill="#fff">LIVE</text></g>')
def flow(d, color=ACC, dur="2s", w=4):
    return (f'<path d="{d}" fill="none" stroke="{color}" stroke-width="{w}" stroke-dasharray="14 12" stroke-linecap="round">'
            f'{anim("stroke-dashoffset","52;0",dur)}</path>')
def label(x, y, t, size=26, fill="#fff", anchor="middle", weight=700, op=1):
    return f'<text x="{x}" y="{y}" text-anchor="{anchor}" font-family="Arial,Helvetica,sans-serif" font-size="{size}" font-weight="{weight}" fill="{fill}" opacity="{op}">{t}</text>'

# ---------- people (shaded, semi-realistic) ----------
SKINS = {"light": ("#f3cfb3", "#d9a583"), "tan": ("#d9a37a", "#b57a54"), "brown": ("#9c6a47", "#6f4429"), "dark": ("#6b4430", "#44281b")}
_pid = [0]
def person(cx, by, s=1.0, skin="tan", hair="#1b1410", top="#1f3a5c", style="short", fem=False, accent=None, tie=None, glasses=False, hijab=False, beard=False):
    _pid[0] += 1; i = _pid[0]
    s1, s2 = SKINS[skin]
    sh = 150 * s          # half shoulder width
    hy = by - 330 * s     # head center y
    r = 74 * s
    g = f'<g>'
    g += (f'<defs><radialGradient id="sk{i}" cx=".42" cy=".35" r=".8"><stop offset="0" stop-color="{s1}"/><stop offset="1" stop-color="{s2}"/></radialGradient>'
          f'<linearGradient id="tp{i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="{top}"/><stop offset="1" stop-color="#050c16"/></linearGradient></defs>')
    # torso
    g += f'<path d="M{cx-sh} {by} C{cx-sh} {by-150*s} {cx-90*s} {by-185*s} {cx} {by-190*s} C{cx+90*s} {by-185*s} {cx+sh} {by-150*s} {cx+sh} {by} Z" fill="url(#tp{i})"/>'
    g += f'<path d="M{cx-sh+20*s} {by-90*s} C{cx-sh+30*s} {by-150*s} {cx-70*s} {by-180*s} {cx-30*s} {by-188*s}" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="3"/>'
    # neck
    g += f'<path d="M{cx-34*s} {by-215*s} L{cx-38*s} {by-170*s} Q{cx} {by-140*s} {cx+38*s} {by-170*s} L{cx+34*s} {by-215*s} Z" fill="{s2}"/>'
    if hijab:
        g += f'<path d="M{cx-r-30*s} {hy+20*s} C{cx-r-34*s} {hy-r-40*s} {cx+r+34*s} {hy-r-40*s} {cx+r+30*s} {hy+20*s} C{cx+r+40*s} {hy+120*s} {cx+r+60*s} {by-150*s} {cx+r+70*s} {by-130*s} L{cx-r-70*s} {by-130*s} C{cx-r-60*s} {by-150*s} {cx-r-40*s} {hy+120*s} {cx-r-30*s} {hy+20*s} Z" fill="{hair}"/>'
    elif fem and style == "long":
        g += f'<path d="M{cx-r-8*s} {hy-10*s} C{cx-r-30*s} {hy+90*s} {cx-r-24*s} {by-170*s} {cx-r+10*s} {by-130*s} L{cx+r-10*s} {by-130*s} C{cx+r+24*s} {by-170*s} {cx+r+30*s} {hy+90*s} {cx+r+8*s} {hy-10*s} Z" fill="{hair}"/>'
    # collar / tie
    if tie:
        g += f'<path d="M{cx-34*s} {by-188*s} L{cx} {by-150*s} L{cx+34*s} {by-188*s} L{cx+10*s} {by-125*s} L{cx-10*s} {by-125*s} Z" fill="#e8eef5" opacity=".92"/>'
        g += f'<path d="M{cx-9*s} {by-150*s} L{cx+9*s} {by-150*s} L{cx+14*s} {by-70*s} L{cx} {by-52*s} L{cx-14*s} {by-70*s} Z" fill="{tie}"/>'
    else:
        g += f'<path d="M{cx-44*s} {by-186*s} Q{cx} {by-120*s} {cx+44*s} {by-186*s}" fill="none" stroke="{s2}" stroke-width="{10*s}" opacity=".0"/>'
    # ears + head
    g += f'<ellipse cx="{cx-r+4*s}" cy="{hy+6*s}" rx="{11*s}" ry="{19*s}" fill="{s2}"/><ellipse cx="{cx+r-4*s}" cy="{hy+6*s}" rx="{11*s}" ry="{19*s}" fill="{s2}"/>'
    g += f'<ellipse cx="{cx}" cy="{hy}" rx="{r}" ry="{r*1.17}" fill="url(#sk{i})"/>'
    # hair
    if not hijab:
        if style == "short":
            g += f'<path d="M{cx-r-3*s} {hy-6*s} C{cx-r-8*s} {hy-r*1.4} {cx+r+8*s} {hy-r*1.4} {cx+r+3*s} {hy-6*s} C{cx+r-8*s} {hy-46*s} {cx+30*s} {hy-60*s} {cx-r+20*s} {hy-34*s} Z" fill="{hair}"/>'
        elif style == "bald":
            g += f'<path d="M{cx-r+6*s} {hy-30*s} C{cx-40*s} {hy-r*1.15} {cx+40*s} {hy-r*1.15} {cx+r-6*s} {hy-30*s} C{cx+30*s} {hy-52*s} {cx-30*s} {hy-52*s} {cx-r+6*s} {hy-30*s}Z" fill="{hair}" opacity=".35"/>'
        elif style in ("long", "bob"):
            g += f'<path d="M{cx-r-8*s} {hy+10*s} C{cx-r-14*s} {hy-r*1.45} {cx+r+14*s} {hy-r*1.45} {cx+r+8*s} {hy+10*s} C{cx+r-4*s} {hy-40*s} {cx+10*s} {hy-62*s} {cx-r+8*s} {hy-20*s} Z" fill="{hair}"/>'
        elif style == "curly":
            for dx, dy, rr in [(-58,-52,34),(-28,-80,36),(10,-86,38),(46,-70,36),(66,-34,30),(-70,-18,28)]:
                g += f'<circle cx="{cx+dx*s}" cy="{hy+dy*s}" r="{rr*s}" fill="{hair}"/>'
    # face features
    ey = hy - 4 * s
    for dx in (-27, 27):
        g += (f'<ellipse cx="{cx+dx*s}" cy="{ey}" rx="{12*s}" ry="{7*s}" fill="#fff"/><circle cx="{cx+dx*s}" cy="{ey}" r="{5.4*s}" fill="#2a1a10"/>'
              f'<circle cx="{cx+dx*s+1.6*s}" cy="{ey-1.8*s}" r="{1.8*s}" fill="#fff"/>'
              f'<path d="M{cx+dx*s-17*s} {ey-17*s} Q{cx+dx*s} {ey-25*s} {cx+dx*s+17*s} {ey-16*s}" fill="none" stroke="{hair if style!="bald" else "#2a1a10"}" stroke-width="{5*s}" stroke-linecap="round"/>')
    if glasses:
        g += (f'<g fill="none" stroke="#0a0f18" stroke-width="{3.4*s}"><rect x="{cx-47*s}" y="{ey-16*s}" width="{40*s}" height="{30*s}" rx="{10*s}"/><rect x="{cx+7*s}" y="{ey-16*s}" width="{40*s}" height="{30*s}" rx="{10*s}"/><path d="M{cx-7*s} {ey-3*s}H{cx+7*s}"/></g>')
    g += f'<path d="M{cx-3*s} {ey+6*s} Q{cx-10*s} {ey+34*s} {cx} {ey+38*s} Q{cx+8*s} {ey+36*s} {cx+10*s} {ey+30*s}" fill="none" stroke="{s2}" stroke-width="{4*s}" stroke-linecap="round"/>'
    g += f'<path d="M{cx-24*s} {ey+56*s} Q{cx} {ey+70*s} {cx+24*s} {ey+56*s}" fill="none" stroke="#7a3b2e" stroke-width="{5*s}" stroke-linecap="round"/>'
    if beard:
        g += f'<path d="M{cx-r+8*s} {ey+30*s} C{cx-r+10*s} {ey+110*s} {cx+r-10*s} {ey+110*s} {cx+r-8*s} {ey+30*s} C{cx+34*s} {ey+62*s} {cx-34*s} {ey+62*s} {cx-r+8*s} {ey+30*s}Z" fill="{hair}" opacity=".9"/>'
    g += f'<ellipse cx="{cx-34*s}" cy="{ey+36*s}" rx="{15*s}" ry="{9*s}" fill="#e0836f" opacity=".18"/><ellipse cx="{cx+34*s}" cy="{ey+36*s}" rx="{15*s}" ry="{9*s}" fill="#e0836f" opacity=".18"/>'
    g += f'<ellipse cx="{cx-26*s}" cy="{hy-r*.55}" rx="{r*.55}" ry="{r*.3}" fill="#fff" opacity=".10"/>'
    if accent:
        g += accent
    return g + "</g>"

def monitor(x, y, w, h, content="", color=ACC):
    return (f'<g filter="url(#shadow)"><rect x="{x}" y="{y}" width="{w}" height="{h}" rx="12" fill="#0a1220" stroke="#2c4666" stroke-width="3"/>'
            f'<rect x="{x+8}" y="{y+8}" width="{w-16}" height="{h-16}" rx="6" fill="url(#scr)"/>{content}</g>')

def hallway(vx=600, vy=330, tint=ACC):
    g = f'<polygon points="0,0 {W},0 {vx+150},{vy-70} {vx-150},{vy-70}" fill="#0b1b31"/>'
    g += f'<polygon points="0,{H} {W},{H} {vx+150},{vy+110} {vx-150},{vy+110}" fill="url(#floor)"/>'
    g += f'<polygon points="0,0 {vx-150},{vy-70} {vx-150},{vy+110} 0,{H}" fill="url(#wall)"/>'
    g += f'<polygon points="{W},0 {vx+150},{vy-70} {vx+150},{vy+110} {W},{H}" fill="url(#wall)"/>'
    g += f'<rect x="{vx-150}" y="{vy-70}" width="300" height="180" fill="#173a5e"/>'
    # lockers
    for k in range(6):
        t = k / 6; x0 = 0 + t * (vx - 150); x1 = (k + 1) / 6 * (vx - 150)
        y0 = 120 + t * (vy - 190); y1 = 120 + (k + 1) / 6 * (vy - 190)
        g += f'<polygon points="{x0},{y0+60} {x1},{y1+40} {x1},{H-(H-vy-110)*((k+1)/6)-140} {x0},{H-(H-vy-110)*t-170}" fill="#1e4a78" stroke="#08121f" stroke-width="3" opacity="{.55+.05*k}"/>'
        xr0 = W - t * (W - vx - 150); xr1 = W - (k + 1) / 6 * (W - vx - 150)
        g += f'<polygon points="{xr0},{y0+60} {xr1},{y1+40} {xr1},{H-(H-vy-110)*((k+1)/6)-140} {xr0},{H-(H-vy-110)*t-170}" fill="#1e4a78" stroke="#08121f" stroke-width="3" opacity="{.55+.05*k}"/>'
    # ceiling lights
    for k in range(5):
        t = k / 5; yy = 30 + t * (vy - 120)
        wd = 360 * (1 - t) + 40
        g += f'<rect x="{vx-wd/2}" y="{yy}" width="{wd}" height="{14*(1-t)+4}" rx="4" fill="#d8f3ff" opacity="{.9-.1*k}"/>'
    g += f'<ellipse cx="{vx}" cy="{vy+120}" rx="260" ry="40" fill="url(#glow)"/>'
    return g

def walker(cx, by, s, top="#394b63", pants="#1a2536", skin="tan", hair="#1b1410"):
    return (f'<g><ellipse cx="{cx}" cy="{by+4*s}" rx="{70*s}" ry="{10*s}" fill="#000" opacity=".35"/>'
            f'<rect x="{cx-30*s}" y="{by-170*s}" width="{26*s}" height="{170*s}" rx="{8*s}" fill="{pants}"/><rect x="{cx+4*s}" y="{by-170*s}" width="{26*s}" height="{170*s}" rx="{8*s}" fill="{pants}"/>'
            f'<rect x="{cx-48*s}" y="{by-310*s}" width="{96*s}" height="{150*s}" rx="{22*s}" fill="{top}"/>'
            f'<rect x="{cx-70*s}" y="{by-300*s}" width="{24*s}" height="{130*s}" rx="{12*s}" fill="{top}"/><rect x="{cx+46*s}" y="{by-300*s}" width="{24*s}" height="{130*s}" rx="{12*s}" fill="{top}"/>'
            f'<circle cx="{cx}" cy="{by-350*s}" r="{34*s}" fill="{SKINS[skin][0]}"/><path d="M{cx-34*s} {by-356*s} Q{cx} {by-410*s} {cx+34*s} {by-356*s} Q{cx} {by-376*s} {cx-34*s} {by-356*s}Z" fill="{hair}"/></g>')

# ---------- scenes ----------
def scene_detect(title, label_text, conf, alert=True, people=2, infra=False, wide=False, cam_ui=True):
    vx = 600
    b = hallway(vx)
    b += walker(470, 640, 1.0, top="#4b5f7a")
    b += walker(760, 600, .82, top="#3a4a63", skin="brown", hair="#120c08")
    b += walker(620, 520, .5, top="#42546e", skin="light", hair="#5a3a22")
    if people > 2:
        b += walker(350, 560, .7, top="#365070", skin="dark", hair="#0b0806")
    # bracket on main subject's hand area
    if alert:
        b += f'<circle cx="520" cy="440" r="120" fill="url(#redglow)" filter="url(#blur)">{anim("opacity",".3;1;.3","1.6s")}</circle>'
        b += bracket(430, 330, 180, 230, RED, f"{label_text} {conf}%")
        b += bracket(700, 345, 150, 150, ACC, "Person 99%") if False else ""
    b += bracket(695, 290, 150, 330, ACC, "Person 99%", "2.4s") if cam_ui else ""
    b += scanline(0, 60, W, 680, "4s")
    b += rec(70, 74)
    b += f'<text x="{W-70}" y="82" text-anchor="end" font-family="monospace" font-size="22" fill="#cfe9ff">CAM 07 · MAIN HALL</text>'
    if infra:
        b += f'<rect width="{W}" height="{H}" fill="#2dd4ff" opacity=".10"/>'
    b += chip(70, H - 110, "AI alert → human verified", GRN) if cam_ui else ""
    return svg(b, title)

def person_scene(title, kind):
    b = ""
    if kind == "security":
        b += f'<rect x="0" y="520" width="{W}" height="280" fill="url(#floor)"/>'
        b += monitor(60, 150, 360, 230, bracket(110, 220, 120, 120, RED, None) + scanline(70, 160, 340, 210, "3.4s"))
        b += monitor(780, 120, 360, 230, bracket(860, 190, 110, 110, ACC, None) + scanline(790, 130, 340, 210, "4.2s"))
        b += person(600, 800, 1.35, "tan", "#14110d", "#16273f", "short", tie="#2dd4ff", beard=True,
                    accent='<path d="M474 470 q-24 40 -6 80" fill="none" stroke="#c9d6e3" stroke-width="5" stroke-linecap="round"/><rect x="462" y="540" width="14" height="22" rx="5" fill="#c9d6e3"/>')
        b += chip(70, 430, "Security director", ACC); b += pulse_ring(600, 330, 60, ACC, "3s")
    elif kind == "admin":
        b += f'<rect x="0" y="540" width="{W}" height="260" fill="url(#floor)"/>'
        b += monitor(780, 170, 340, 230, ''.join(f'<rect x="{800+(i%3)*100}" y="{200+(i//3)*70}" width="85" height="50" rx="8" fill="{ACC if i%2 else GRN}" opacity=".5">{anim("opacity",".25;.7;.25",f"{2+i*.3}s")}</rect>' for i in range(6)))
        b += person(560, 800, 1.35, "light", "#4a2c17", "#243b62", "long", fem=True, glasses=True,
                    accent=f'<g transform="translate(610 590) rotate(-12)"><rect width="200" height="140" rx="14" fill="#0a1220" stroke="#35557a" stroke-width="3"/><rect x="8" y="8" width="184" height="124" rx="8" fill="url(#scr)"/><path d="M24 100 L60 70 L96 86 L140 40 L176 52" fill="none" stroke="{GRN}" stroke-width="5" stroke-linecap="round"/></g>')
        b += chip(70, 150, "School administrator", ACC)
    elif kind == "teacher":
        b += f'<rect x="60" y="120" width="460" height="290" rx="10" fill="#0c3a2e" stroke="#7a5a3a" stroke-width="10"/>'
        b += label(120, 200, "Safety drill", 32, "#d4ffe8", "start", 400) + flow("M120 250H440", "#9ff0c8", "3s", 3) + flow("M120 300H380", "#9ff0c8", "4s", 3)
        b += person(700, 800, 1.35, "brown", "#1a110c", "#7a2f44", "curly",
                    accent=f'<g transform="translate(560 500)"><rect width="44" height="150" rx="14" fill="#7a2f44"/></g>')
        b += chip(660, 120, "Teachers", ACC) + pulse_ring(700, 330, 50, GRN, "3s")
    elif kind == "parent":
        b += f'<rect x="0" y="560" width="{W}" height="240" fill="url(#floor)"/>'
        b += person(600, 800, 1.35, "light", "#caa45b", "#2e4d6e", "bob", fem=True,
                    accent=f'<g transform="translate(540 520)"><rect width="110" height="190" rx="18" fill="#05101c" stroke="#35557a" stroke-width="3"/><rect x="8" y="14" width="94" height="160" rx="10" fill="url(#scr)"/><circle cx="55" cy="70" r="22" fill="{GRN}"><animate attributeName="r" values="20;27;20" dur="2s" repeatCount="indefinite"/></circle><path d="M44 70l8 9 15-18" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/>{label(55,134,"Safe",20)}</g>')
        b += chip(70, 150, "Parents notified instantly", GRN) + pulse_ring(600, 330, 55, GRN, "3.2s")
    elif kind == "team":
        b += f'<rect x="0" y="560" width="{W}" height="240" fill="url(#floor)"/>'
        b += monitor(80, 130, 420, 270, bracket(150, 210, 130, 140, RED, None) + scanline(90, 140, 400, 250, "3.6s"))
        b += monitor(700, 130, 420, 270, bracket(790, 220, 120, 130, ACC, None) + scanline(710, 140, 400, 250, "3s"))
        b += person(420, 800, 1.2, "brown", "#100b08", "#1d3558", "short", glasses=True,
                    accent='<path d="M333 480 q-18 30 -2 60" fill="none" stroke="#d7e3f0" stroke-width="5"/>')
        b += person(790, 800, 1.2, "light", "#7a3b1f", "#22476b", "long", fem=True)
        b += chip(380, 620, "24/7 human verification", GRN)
        b += f'<path d="M500 300 C560 250 640 250 700 300" fill="none" stroke="{ACC}" stroke-width="3"/>' + flow("M500 300 C560 250 640 250 700 300")
    return svg(b, title)

def device_scene(title, kind):
    b = f'<ellipse cx="600" cy="430" rx="380" ry="260" fill="url(#glow)"/>'
    if kind == "cctv":
        b += '<g filter="url(#shadow)"><rect x="470" y="140" width="40" height="40" rx="8" fill="url(#metal)"/><path d="M490 180 q0 90 110 120" fill="none" stroke="#5d7390" stroke-width="22" stroke-linecap="round"/>'
        b += '<g transform="rotate(-18 640 360)"><rect x="470" y="300" width="360" height="130" rx="30" fill="url(#metal)"/><rect x="780" y="290" width="120" height="150" rx="24" fill="#1b2a3d"/><circle cx="840" cy="365" r="46" fill="#05101c" stroke="#3a5675" stroke-width="6"/><circle cx="840" cy="365" r="24" fill="#0d3150"/><circle cx="832" cy="356" r="8" fill="#fff" opacity=".8"/></g></g>'
        b += f'<path d="M900 400 L1140 260 L1140 620 Z" fill="{ACC}" opacity=".12"/><path d="M900 400 L1140 260 L1140 620 Z" fill="none" stroke="{ACC}" stroke-dasharray="10 10"><animate attributeName="stroke-dashoffset" values="40;0" dur="2s" repeatCount="indefinite"/></path>'
        b += pulse_ring(840, 380, 40) + bracket(980, 380, 120, 150, RED, "ALERT")
    elif kind == "drone":
        b += '<g filter="url(#shadow)">'
        for x in (330, 870):
            b += f'<line x1="{x}" y1="330" x2="{600}" y2="420" stroke="#5d7390" stroke-width="16" stroke-linecap="round"/><ellipse cx="{x}" cy="305" rx="110" ry="14" fill="#9fb4cc" opacity=".55"><animate attributeName="rx" values="110;60;110" dur=".25s" repeatCount="indefinite"/></ellipse><rect x="{x-8}" y="305" width="16" height="30" fill="#2a3b50"/>'
        b += '<rect x="500" y="380" width="200" height="90" rx="30" fill="url(#metal)"/><circle cx="600" cy="500" r="34" fill="#05101c" stroke="#3a5675" stroke-width="6"/><circle cx="600" cy="500" r="16" fill="#0d3150"/></g>'
        b += f'<path d="M600 520 L430 740 L770 740 Z" fill="{ACC}" opacity=".14"/>' + bracket(520, 640, 160, 100, RED, "Threat") + pulse_ring(600, 500, 30)
    elif kind == "bodycam":
        b += person(600, 800, 1.5, "tan", "#14110d", "#1b2d4a", "short", beard=True)
        b += f'<g filter="url(#shadow)"><rect x="660" y="470" width="86" height="64" rx="14" fill="url(#metal)"/><circle cx="703" cy="502" r="18" fill="#05101c" stroke="{ACC}" stroke-width="4"/><circle cx="730" cy="480" r="5" fill="{RED}"><animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite"/></circle></g>'
        b += pulse_ring(703, 502, 24) + chip(760, 190, "Body-worn camera", ACC) + flow("M746 500 C880 420 900 300 960 240")
    elif kind in ("box_s", "box_p"):
        n = 1 if kind == "box_s" else 4
        if n == 1:
            b += '<g filter="url(#shadow)"><rect x="380" y="310" width="440" height="190" rx="22" fill="url(#metal)"/><rect x="400" y="330" width="400" height="150" rx="14" fill="#0b1626"/>'
            for i in range(14): b += f'<rect x="{420+i*26}" y="{350}" width="12" height="110" rx="4" fill="#16304d"/>'
            b += f'<circle cx="780" cy="455" r="8" fill="{GRN}"><animate attributeName="opacity" values="1;.2;1" dur="1.3s" repeatCount="indefinite"/></circle><text x="420" y="488" font-family="Arial" font-size="20" font-weight="800" fill="{ACC}">ACCELEYE AI BOX</text></g>'
            b += chip(430, 190, "Up to 10 cameras", ACC)
        else:
            b += '<g filter="url(#shadow)"><rect x="330" y="170" width="540" height="470" rx="14" fill="#0a1220" stroke="#2c4666" stroke-width="4"/>'
            for i in range(4):
                y = 195 + i * 112
                b += f'<rect x="352" y="{y}" width="496" height="92" rx="8" fill="url(#metal)"/><rect x="372" y="{y+14}" width="300" height="64" rx="6" fill="#0b1626"/>'
                for k in range(9): b += f'<rect x="{384+k*30}" y="{y+22}" width="14" height="48" rx="4" fill="#16304d"/>'
                b += f'<circle cx="{800}" cy="{y+30}" r="7" fill="{GRN}"><animate attributeName="opacity" values="1;.2;1" dur="{1+i*.25}s" repeatCount="indefinite"/></circle><circle cx="820" cy="{y+30}" r="7" fill="{ACC}"><animate attributeName="opacity" values=".2;1;.2" dur="{1.2+i*.2}s" repeatCount="indefinite"/></circle>'
            b += '</g>' + chip(900, 200, "40–240 cameras", ACC)
    elif kind == "ios":
        b += f'<g filter="url(#shadow)" transform="rotate(-6 600 420)"><rect x="470" y="150" width="260" height="520" rx="44" fill="#05101c" stroke="#3a5675" stroke-width="6"/><rect x="486" y="168" width="228" height="484" rx="32" fill="url(#scr)"/><rect x="560" y="178" width="80" height="22" rx="11" fill="#02060d"/>'
        b += f'<rect x="504" y="250" width="192" height="110" rx="16" fill="{RED}" opacity=".9"><animate attributeName="opacity" values=".6;1;.6" dur="1.5s" repeatCount="indefinite"/></rect>{label(600,300,"ALERT",30)}{label(600,336,"Weapon detected",20,weight=500)}'
        b += f'<rect x="504" y="380" width="192" height="60" rx="14" fill="#0d3150"/>{label(600,418,"Main Hall · 14:02",20,weight=500)}<rect x="504" y="456" width="192" height="60" rx="14" fill="{GRN}" opacity=".85"/>{label(600,495,"Verified by human",20)}</g>'
        b += pulse_ring(600, 300, 60, RED, "2.2s")
    elif kind == "chromebook":
        b += f'<g filter="url(#shadow)"><path d="M300 640 L900 640 L960 700 L240 700 Z" fill="url(#metal)"/><rect x="340" y="200" width="520" height="440" rx="18" fill="#0a1220" stroke="#35557a" stroke-width="4"/><rect x="356" y="216" width="488" height="408" rx="8" fill="url(#scr)"/></g>'
        b += f'<rect x="380" y="250" width="240" height="150" rx="10" fill="#0b2745"/>{bracket(430,290,80,80,RED,None)}{scanline(380,252,240,146,"3s")}'
        for i in range(4): b += f'<rect x="650" y="{250+i*38}" width="170" height="26" rx="6" fill="{ACC}" opacity="{.5-i*.08}"/>'
        b += f'<path d="M380 450 L440 430 L500 470 L560 420 L620 450 L680 410 L820 440" fill="none" stroke="{GRN}" stroke-width="5">{anim("stroke-dasharray","0 700;700 0","3s")}</path>'
    return svg(b, title)

def diagram(title, kind):
    b = ""
    if kind == "app":
        b += device_scene(title, "ios")[0:0]
        steps = [("Detect", "AI finds a threat", ACC, 190), ("Verify", "Human confirms", AMB, 450), ("Alert", "SaveAlert pushed", RED, 710), ("Respond", "Police and staff", GRN, 970)]
        b += flow("M190 400H970", ACC, "3s", 5)
        for n, (t, s_, c, x) in enumerate(steps):
            b += pulse_ring(x, 400, 56, c, "3s", f"{n*.6}s") + f'<circle cx="{x}" cy="400" r="56" fill="#061427" stroke="{c}" stroke-width="5"/>' + label(x, 412, str(n + 1), 40, c, weight=800) + label(x, 520, t, 34) + label(x, 560, s_, 22, "#b6cde6", weight=400)
    elif kind == "cost":
        b += f'<g transform="translate(230 150)"><rect width="740" height="480" rx="26" fill="#07162a" stroke="#2c4666" stroke-width="3"/>'
        for i in range(6): b += f'<line x1="40" y1="{70+i*66}" x2="700" y2="{70+i*66}" stroke="#fff" stroke-opacity=".07"/>'
        bars = [380, 340, 285, 240, 190, 150]
        for i, h in enumerate(bars):
            b += f'<rect x="{70+i*105}" y="{420-h}" width="62" height="{h}" rx="10" fill="{ACC}" opacity=".85"><animate attributeName="height" values="0;{h}" dur="1.4s" fill="freeze"/><animate attributeName="y" values="420;{420-h}" dur="1.4s" fill="freeze"/></rect>'
        b += f'<path d="M80 80 L700 330" stroke="{GRN}" stroke-width="6" stroke-dasharray="16 12" fill="none"><animate attributeName="stroke-dashoffset" values="56;0" dur="2s" repeatCount="indefinite"/></path>'
        b += f'<g>{chip(450,30,"Cost per camera ↓",GRN)}</g></g>'
        b += f'<text x="600" y="700" text-anchor="middle" font-family="Arial" font-size="30" font-weight="800" fill="{GRN}">−60% operating cost</text>'
    elif kind == "gunshot":
        b += f'<circle cx="600" cy="400" r="70" fill="{RED}" opacity=".9"/>' + label(600, 412, "!", 70, "#fff", weight=900)
        for i in range(5): b += pulse_ring(600, 400, 70, RED, "3s", f"{i*.6}s")
        wave = "M60 400" + "".join(f" L{60+i*14} {400+math.sin(i*.7)*(20+ (i%7)*14)}" for i in range(0, 82))
        b += f'<path d="{wave}" fill="none" stroke="{ACC}" stroke-width="4" opacity=".85"><animate attributeName="opacity" values=".3;1;.3" dur="1.2s" repeatCount="indefinite"/></path>'
        b += chip(430, 600, "Gunshot detected · 0.4 s", RED)
    elif kind == "violence":
        b += walker(500, 700, 1.0, top="#4b5f7a") + walker(680, 700, 1.0, top="#5a3a3a", skin="light", hair="#5a3a22")
        b += f'<circle cx="590" cy="470" r="160" fill="url(#redglow)" filter="url(#blur)">{anim("opacity",".2;1;.2","1.4s")}</circle>'
        b += bracket(400, 280, 380, 440, RED, "Fight 96%") + scanline(0, 60, W, 680, "4s") + rec(70, 74)
    elif kind == "intruder":
        b += f'<rect x="220" y="150" width="760" height="540" rx="14" fill="#0b1b31" stroke="#2c4666" stroke-width="4"/>'
        b += f'<path d="M220 560H980" stroke="#2c4666" stroke-width="3"/><rect x="480" y="230" width="240" height="330" fill="#102c4a" stroke="#4a6a8c" stroke-width="4"/>'
        b += walker(600, 690, .95, top="#2a3646", pants="#10161f")
        b += bracket(480, 270, 250, 420, AMB, "Intruder 94%") + f'<circle cx="600" cy="420" r="260" fill="url(#redglow)" filter="url(#blur)" opacity=".5"/>' + rec(260, 190)
        b += pulse_ring(600, 420, 50, AMB)
    elif kind == "digital":
        b += f'<g transform="translate(250 170)"><rect width="700" height="440" rx="22" fill="#07162a" stroke="#2c4666" stroke-width="3"/>'
        for i, (t, c) in enumerate([("Mood", GRN), ("Risk", AMB), ("Focus", ACC)]):
            b += f'<circle cx="{150+i*200}" cy="170" r="70" fill="none" stroke="#1c3a5c" stroke-width="16"/><circle cx="{150+i*200}" cy="170" r="70" fill="none" stroke="{c}" stroke-width="16" stroke-linecap="round" stroke-dasharray="0 440" transform="rotate(-90 {150+i*200} 170)">{anim("stroke-dasharray",f"0 440;{200+i*60} 440","2.4s")}</circle>' + label(150 + i * 200, 180, ["82%", "18%", "91%"][i], 34, "#fff", weight=800) + label(150 + i * 200, 290, t, 26, "#b6cde6", weight=600)
        b += f'<path d="M40 380 C140 330 200 400 300 350 S 480 320 660 360" fill="none" stroke="{ACC}" stroke-width="5">{anim("stroke-dasharray","0 900;900 0","3s")}</path></g>'
        b += chip(430, 640, "Digital wellness analytics", GRN)
    elif kind == "analysis":
        for i in range(8):
            x = 160 + (i % 4) * 250; y = 190 + (i // 4) * 220
            b += f'<rect x="{x}" y="{y}" width="210" height="170" rx="14" fill="#07162a" stroke="#2c4666" stroke-width="3"/><path d="M{x+16} {y+130} L{x+60} {y+80} L{x+100} {y+110} L{x+150} {y+50} L{x+194} {y+70}" fill="none" stroke="{[ACC,GRN,AMB,RED][i%4]}" stroke-width="4">{anim("stroke-dasharray","0 400;400 0",f"{2+i*.2}s")}</path>'
        b += chip(450, 650, "Behavior analysis", ACC)
    elif kind == "btam":
        b += f'<circle cx="600" cy="400" r="190" fill="url(#glow)"/><circle cx="600" cy="400" r="120" fill="#07162a" stroke="{ACC}" stroke-width="4"/>' + label(600, 420, "AI", 72, ACC, weight=900)
        for i, (t, a) in enumerate([("Observe", 0), ("Assess", 90), ("Intervene", 180), ("Follow-up", 270)]):
            x = 600 + 310 * math.cos(math.radians(a)); y = 400 + 230 * math.sin(math.radians(a))
            b += flow(f"M600 400 L{x} {y}", [ACC, AMB, RED, GRN][i], f"{2+i*.3}s", 3) + f'<circle cx="{x}" cy="{y}" r="58" fill="#061427" stroke="{[ACC,AMB,RED,GRN][i]}" stroke-width="4"/>' + label(x, y + 8, t, 20)
    elif kind == "access":
        b += f'<rect x="440" y="150" width="320" height="480" rx="10" fill="#10263f" stroke="#4a6a8c" stroke-width="6"/><rect x="470" y="180" width="260" height="420" rx="6" fill="#0b1b31"/>'
        b += f'<g><rect x="570" y="360" width="60" height="50" rx="10" fill="{GRN}"/><path d="M582 360 v-24 a18 18 0 0 1 36 0 v24" fill="none" stroke="{GRN}" stroke-width="9"/><animateTransform attributeName="transform" type="translate" values="0 0;0 -6;0 0" dur="2.4s" repeatCount="indefinite"/></g>'
        b += pulse_ring(600, 385, 40, GRN) + f'<rect x="790" y="330" width="90" height="140" rx="14" fill="#061427" stroke="{ACC}" stroke-width="3"/><circle cx="835" cy="380" r="20" fill="{ACC}" opacity=".6">{anim("opacity",".2;.9;.2","1.6s")}</circle>' + chip(380, 660, "Lockdown on detection", AMB)
    elif kind == "skyward":
        b += f'<rect x="150" y="260" width="360" height="260" rx="26" fill="#07162a" stroke="{ACC}" stroke-width="4"/>' + label(330, 405, "AccelEye", 54, ACC, weight=800)
        b += f'<rect x="690" y="260" width="360" height="260" rx="26" fill="#07162a" stroke="{AMB}" stroke-width="4"/>' + label(870, 405, "Skyward", 54, AMB, weight=800)
        b += flow("M510 390H690", "#fff", "1.6s", 5) + f'<circle cx="600" cy="390" r="30" fill="{GRN}">{anim("r","26;34;26","1.6s")}</circle>' + label(600, 402, "+", 40, "#04210f", weight=900)
        b += chip(400, 600, "AI threat assessment", GRN)
    elif kind == "metal":
        b += f'<rect x="150" y="190" width="400" height="420" rx="20" fill="#0c1c31" stroke="#4a6a8c" stroke-width="3"/><path d="M260 580V300a90 90 0 0 1 180 0v280" fill="none" stroke="#8fa5bd" stroke-width="20" stroke-linecap="round"/>' + label(350, 650, "Metal detector gate", 24, "#b6cde6")
        b += f'<rect x="650" y="190" width="400" height="420" rx="20" fill="#0c1c31" stroke="{ACC}" stroke-width="3"/>' + walker(850, 590, .72) + bracket(790, 340, 120, 240, GRN, "Cleared") + scanline(660, 200, 380, 400) + label(850, 650, "AI detection", 24, ACC)
        b += label(600, 410, "vs", 40, "#fff", weight=900)
    elif kind == "solar_field":
        b += f'<rect y="0" width="{W}" height="460" fill="#0d2a4d"/><circle cx="960" cy="150" r="170" fill="url(#sun)"><animate attributeName="r" values="160;185;160" dur="6s" repeatCount="indefinite"/></circle>'
        b += f'<rect y="440" width="{W}" height="360" fill="#14532d"/><rect y="440" width="{W}" height="360" fill="url(#vig)"/>'
        b += f'<ellipse cx="600" cy="620" rx="440" ry="120" fill="none" stroke="#e8fff1" stroke-width="3" opacity=".6"/><path d="M600 500V740M160 620H1040" stroke="#e8fff1" stroke-width="3" opacity=".5"/>'
        for x, s in [(240, .9), (950, .9)]:
            b += trailer(x, 520, s)
        b += pulse_ring(240, 380, 40, ACC) + pulse_ring(950, 380, 40, ACC, "2.8s")
        b += flow("M300 400 Q600 300 890 400", ACC, "3s", 3) + chip(430, 120, "Mobile 24/7 protection", GRN)
    elif kind == "solar_trailer":
        b += f'<circle cx="940" cy="170" r="160" fill="url(#sun)"/><rect y="560" width="{W}" height="240" fill="#14532d" opacity=".8"/>'
        b += trailer(560, 600, 1.7) + chip(80, 90, "Solar-powered", AMB) + pulse_ring(560, 250, 40, ACC)
    return svg(b, title)

def trailer(x, by, s):
    g = f'<g filter="url(#shadow)"><rect x="{x-8*s}" y="{by-260*s}" width="{16*s}" height="{200*s}" fill="url(#metal)"/>'
    g += f'<rect x="{x-34*s}" y="{by-290*s}" width="{68*s}" height="{40*s}" rx="{10*s}" fill="url(#metal)"/><circle cx="{x}" cy="{by-270*s}" r="{12*s}" fill="#05101c" stroke="{ACC}" stroke-width="{3*s}"/>'
    g += f'<g transform="rotate(-8 {x} {by-130*s})"><rect x="{x-120*s}" y="{by-200*s}" width="{240*s}" height="{70*s}" rx="{6*s}" fill="#0f3a66" stroke="#9fb4cc" stroke-width="{3*s}"/>'
    for i in range(1, 6): g += f'<line x1="{x-120*s+i*40*s}" y1="{by-200*s}" x2="{x-120*s+i*40*s}" y2="{by-130*s}" stroke="#9fb4cc" stroke-width="{2*s}"/>'
    g += f'</g><rect x="{x-90*s}" y="{by-70*s}" width="{180*s}" height="{38*s}" rx="{6*s}" fill="#e8eef5"/><rect x="{x-96*s}" y="{by-32*s}" width="{192*s}" height="{10*s}" rx="4" fill="#26374b"/>'
    g += f'<circle cx="{x-60*s}" cy="{by-14*s}" r="{18*s}" fill="#0a0f18" stroke="#5d7390" stroke-width="{4*s}"/><circle cx="{x+60*s}" cy="{by-14*s}" r="{18*s}" fill="#0a0f18" stroke="#5d7390" stroke-width="{4*s}"/></g>'
    return g

def about(title, kind):
    b = ""
    if kind == "mission":
        b += f'<circle cx="600" cy="400" r="230" fill="url(#glow)"/>'
        for r in (60, 130, 200): b += f'<circle cx="600" cy="400" r="{r}" fill="none" stroke="{ACC}" stroke-width="3" opacity="{.9-r/300}"/>'
        b += f'<circle cx="600" cy="400" r="26" fill="{RED}">{anim("r","22;30;22","1.8s")}</circle>' + pulse_ring(600, 400, 40, RED) + chip(430, 650, "Save lives with early detection", GRN)
        b += f'<path d="M600 140V260M600 540V660M340 400H460M740 400H860" stroke="{ACC}" stroke-width="4" stroke-linecap="round"/>'
    elif kind == "commit":
        for i, (t, c) in enumerate([("Accuracy", ACC), ("Privacy", GRN), ("Speed", AMB), ("Humans", RED)]):
            x = 210 + i * 260
            b += f'<circle cx="{x}" cy="400" r="86" fill="#061427" stroke="{c}" stroke-width="5"/><circle cx="{x}" cy="400" r="86" fill="url(#glow)" opacity=".4"/>' + label(x, 412, str(i + 1), 54, c, weight=900) + label(x, 540, t, 30)
            b += pulse_ring(x, 400, 86, c, "4s", f"{i*.7}s")
    else:
        pts = [(600, 230, "Integrity", ACC), (860, 400, "Care", GRN), (600, 570, "Innovation", AMB), (340, 400, "Courage", RED)]
        b += f'<polygon points="{" ".join(f"{x},{y}" for x,y,_,_ in pts)}" fill="none" stroke="{ACC}" stroke-width="3" stroke-dasharray="12 10"><animate attributeName="stroke-dashoffset" values="44;0" dur="3s" repeatCount="indefinite"/></polygon>'
        b += f'<circle cx="600" cy="400" r="62" fill="#061427" stroke="{ACC}" stroke-width="4"/>' + label(600, 414, "AccelEye", 24, ACC)
        for x, y, t, c in pts: b += f'<circle cx="{x}" cy="{y}" r="58" fill="#061427" stroke="{c}" stroke-width="4"/>' + label(x, y + 8, t, 20)
    return svg(b, title)


def faith(title, kind):
    b = ""
    def church(x, by, s):
        return (f'<g filter="url(#shadow)"><rect x="{x-110*s}" y="{by-200*s}" width="{220*s}" height="{200*s}" fill="#16385e" stroke="#4a6a8c" stroke-width="3"/>'
                f'<polygon points="{x-130*s},{by-200*s} {x},{by-330*s} {x+130*s},{by-200*s}" fill="#1d4a78"/>'
                f'<rect x="{x-6*s}" y="{by-420*s}" width="{12*s}" height="{100*s}" fill="#d8f3ff"/><rect x="{x-30*s}" y="{by-390*s}" width="{60*s}" height="{12*s}" fill="#d8f3ff"/>'
                f'<path d="M{x-34*s} {by} V{by-90*s} a{34*s} {34*s} 0 0 1 {68*s} 0 V{by}Z" fill="#fbbf24" opacity=".85"><animate attributeName="opacity" values=".6;1;.6" dur="3s" repeatCount="indefinite"/></path></g>')
    def mosque(x, by, s):
        return (f'<g filter="url(#shadow)"><rect x="{x-130*s}" y="{by-170*s}" width="{260*s}" height="{170*s}" fill="#16385e" stroke="#4a6a8c" stroke-width="3"/>'
                f'<path d="M{x-90*s} {by-170*s} a{90*s} {90*s} 0 0 1 {180*s} 0Z" fill="#1d4a78"/><rect x="{x-4*s}" y="{by-300*s}" width="{8*s}" height="{40*s}" fill="#d8f3ff"/>'
                f'<rect x="{x+150*s}" y="{by-300*s}" width="{34*s}" height="{300*s}" fill="#16385e" stroke="#4a6a8c" stroke-width="3"/><polygon points="{x+144*s},{by-300*s} {x+167*s},{by-360*s} {x+190*s},{by-300*s}" fill="#1d4a78"/>'
                f'<path d="M{x-30*s} {by} V{by-80*s} a{30*s} {30*s} 0 0 1 {60*s} 0 V{by}Z" fill="#fbbf24" opacity=".85"/></g>')
    if kind == "hero":
        b += f'<circle cx="600" cy="330" r="260" fill="url(#glow)"/><rect y="620" width="{W}" height="180" fill="url(#floor)"/>'
        b += church(400, 640, 1.0) + mosque(800, 640, 1.0)
        for i, (cx, cy) in enumerate([(400, 240), (800, 330)]): b += pulse_ring(cx, cy, 50, ACC, "3.4s", f"{i*.8}s")
        b += chip(450, 90, "Protecting every place of worship", GRN) + flow("M400 250 C520 120 680 120 800 330", ACC, "3s", 3)
        b += bracket(540, 600, 120, 100, ACC, "Welcome 99%") + scanline(0, 140, W, 520, "5s")
    elif kind == "care":
        b += f'<path d="M600 640 C330 470 330 280 470 250 C540 236 590 280 600 320 C610 280 660 236 730 250 C870 280 870 470 600 640Z" fill="#07162a" stroke="{RED}" stroke-width="5"><animateTransform attributeName="transform" type="scale" values="1;1.04;1" dur="2s" additive="sum" repeatCount="indefinite"/></path>'
        b += f'<path d="M420 430 H520 L550 360 L600 500 L640 400 H780" fill="none" stroke="{GRN}" stroke-width="6" stroke-linecap="round">{anim("stroke-dasharray","0 600;600 0","2.4s")}</path>'
        b += pulse_ring(600, 430, 60, RED, "2.6s") + chip(420, 90, "Early self-harm and bullying prevention", AMB)
    elif kind == "alert":
        b += church(300, 620, .8) + f'<rect y="640" width="{W}" height="160" fill="url(#floor)"/>'
        b += flow("M380 330 C520 200 700 200 860 330", RED, "2s", 5) + f'<g transform="translate(860 250)"><rect width="190" height="190" rx="22" fill="#07162a" stroke="{RED}" stroke-width="4"/>{label(95,90,"911",54,"#fff",weight=900)}{label(95,140,"Dispatched",22,"#b6cde6",weight=500)}</g>'
        b += pulse_ring(300, 300, 40, RED) + chip(380, 600, "Direct Connect alert in seconds", RED)
    return svg(b, title)

# ---------- post banners (no people) ----------
def banner(title, kind):
    b = f'<ellipse cx="600" cy="420" rx="420" ry="260" fill="url(#glow)"/>'
    if kind == "deployment":
        b += f'<rect y="610" width="{W}" height="190" fill="url(#floor)"/>'
        b += f'<g filter="url(#shadow)"><rect x="330" y="330" width="540" height="280" fill="#16385e" stroke="#4a6a8c" stroke-width="3"/><polygon points="300,330 600,200 900,330" fill="#1d4a78"/><rect x="560" y="470" width="80" height="140" fill="#fbbf24" opacity=".85"/>'
        for x in (380, 450, 700, 770): b += f'<rect x="{x}" y="390" width="60" height="60" fill="#0b2745" stroke="#4a6a8c" stroke-width="2"/>'
        b += '</g>'
        b += f'<g transform="translate(600 120)"><path d="M0 0 C-50 0 -70 40 -70 70 C-70 120 0 190 0 190 C0 190 70 120 70 70 C70 40 50 0 0 0Z" fill="{RED}" transform="scale(.9)"/><circle cx="0" cy="62" r="24" fill="#fff"/><animateTransform attributeName="transform" type="translate" values="600 120;600 100;600 120" dur="2.4s" repeatCount="indefinite"/></g>'
        b += pulse_ring(600, 560, 40) + chip(70, 70, "Deployed", GRN)
    elif kind == "event":
        b += f'<rect x="200" y="180" width="800" height="380" rx="16" fill="#07162a" stroke="#4a6a8c" stroke-width="4"/><rect x="224" y="204" width="752" height="332" rx="8" fill="url(#scr)"/>'
        b += label(600, 330, "AccelEye", 84, ACC, weight=900) + label(600, 400, "Live demo · Booth", 34, "#cfe9ff", weight=500)
        b += f'<rect x="560" y="560" width="80" height="60" fill="#26374b"/><rect x="440" y="620" width="320" height="26" rx="10" fill="url(#metal)"/>'
        b += flow("M240 480H960", ACC, "3s", 3) + chip(70, 70, "Event", AMB)
        for i in range(6): b += f'<circle cx="{260+i*136}" cy="{700}" r="10" fill="{ACC}" opacity=".5">{anim("opacity",".2;.9;.2",f"{2+i*.3}s")}</circle>'
    elif kind == "integration":
        b += flow("M330 400H870", ACC, "2s", 5)
        for x, t, c in ((250, "AccelEye", ACC), (950, "VMS", GRN)):
            b += f'<rect x="{x-130}" y="290" width="260" height="220" rx="26" fill="#07162a" stroke="{c}" stroke-width="5"/>' + label(x, 415, t, 46, c, weight=800)
        b += f'<circle cx="600" cy="400" r="46" fill="{GRN}">{anim("r","42;52;42","1.6s")}</circle>' + label(600, 416, "✓", 56, "#04210f", weight=900) + chip(70, 70, "Integration complete", GRN)
    elif kind == "media":
        b += f'<rect x="230" y="190" width="740" height="420" rx="18" fill="#0b1b31" stroke="#4a6a8c" stroke-width="4"/>'
        b += f'<rect x="270" y="230" width="300" height="190" rx="10" fill="url(#scr)"/><path d="M380 270 L480 325 L380 380Z" fill="{ACC}">{anim("opacity",".5;1;.5","2s")}</path>'
        for i in range(6): b += f'<rect x="610" y="{236+i*40}" width="{300-(i%3)*60}" height="16" rx="8" fill="#fff" opacity="{.5-i*.04}"/>'
        b += f'<rect x="270" y="450" width="640" height="14" rx="7" fill="#fff" opacity=".3"/><rect x="270" y="486" width="520" height="14" rx="7" fill="#fff" opacity=".2"/>' + chip(70, 70, "In the media", AMB)
    elif kind == "case-study":
        b += f'<path d="M600 160 L820 250 V430 C820 560 710 640 600 690 C490 640 380 560 380 430 V250 Z" fill="#07162a" stroke="{ACC}" stroke-width="6"/>'
        b += f'<path d="M500 420 L575 495 L710 340" fill="none" stroke="{GRN}" stroke-width="22" stroke-linecap="round" stroke-linejoin="round">{anim("stroke-dasharray","0 400;400 0","2.4s")}</path>'
        b += pulse_ring(600, 430, 200, ACC, "3.2s") + chip(70, 70, "Case study", RED)
    elif kind == "company":
        b += f'<circle cx="600" cy="360" r="170" fill="#07162a" stroke="{AMB}" stroke-width="6"/><circle cx="600" cy="360" r="130" fill="none" stroke="{AMB}" stroke-width="3" stroke-dasharray="10 10"><animateTransform attributeName="transform" type="rotate" values="0 600 360;360 600 360" dur="24s" repeatCount="indefinite"/></circle>'
        b += label(600, 385, "★", 120, AMB, weight=900) + f'<path d="M520 520 L480 700 L600 640 L720 700 L680 520Z" fill="{AMB}" opacity=".85"/>' + chip(70, 70, "Company news", AMB)
    elif kind == "insight":
        b += f'<rect x="300" y="180" width="600" height="440" rx="20" fill="#07162a" stroke="#4a6a8c" stroke-width="4"/>'
        bars = [150, 230, 190, 300, 260, 340]
        for i, h in enumerate(bars): b += f'<rect x="{350+i*85}" y="{560-h}" width="56" height="{h}" rx="8" fill="{ACC}" opacity=".85"><animate attributeName="height" values="0;{h}" dur="1.4s" fill="freeze"/><animate attributeName="y" values="560;{560-h}" dur="1.4s" fill="freeze"/></rect>'
        b += f'<path d="M350 380 L770 250" stroke="{GRN}" stroke-width="5" stroke-dasharray="14 10" fill="none"><animate attributeName="stroke-dashoffset" values="48;0" dur="2s" repeatCount="indefinite"/></path>' + chip(70, 70, "Insight", ACC)
    return svg(b, title)

BANNERS = {"deployment": "Deployment", "event": "Event", "integration": "Integration", "media": "Media", "case-study": "Case study", "company": "Company news", "insight": "Insight"}

JOBS = {
 "understandSafety": lambda t: scene_detect(t, "Weapon", 98, people=3),
 "aiUnderstandsSafety": lambda t: scene_detect(t, "Weapon", 97),
 "aiReducesCost": lambda t: diagram(t, "cost"),
 "collaboration": lambda t: person_scene(t, "team"),
 "roleSecurity": lambda t: person_scene(t, "security"),
 "roleAdmin": lambda t: person_scene(t, "admin"),
 "roleTeacher": lambda t: person_scene(t, "teacher"),
 "roleParent": lambda t: person_scene(t, "parent"),
 "roleSafety": lambda t: person_scene(t, "team"),
 "skyward": lambda t: diagram(t, "skyward"),
 "aiCamera": lambda t: device_scene(t, "cctv"),
 "gunshot": lambda t: diagram(t, "gunshot"),
 "gunBanner": lambda t: scene_detect(t, "Gun", 99),
 "liveTest": lambda t: scene_detect(t, "Weapon", 97, people=3),
 "cctv": lambda t: device_scene(t, "cctv"),
 "drone": lambda t: device_scene(t, "drone"),
 "saveAlertApp": lambda t: device_scene(t, "ios"),
 "saveAlertBanner": lambda t: diagram(t, "app"),
 "aiBoxStarter": lambda t: device_scene(t, "box_s"),
 "aiBoxPro": lambda t: device_scene(t, "box_p"),
 "aiAnalysis": lambda t: diagram(t, "analysis"),
 "digitalSafety": lambda t: diagram(t, "digital"),
 "collaborationSquare": lambda t: person_scene(t, "team"),
 "aiEnhance": lambda t: diagram(t, "btam"),
 "accessControl": lambda t: diagram(t, "access"),
 "iosDevice": lambda t: device_scene(t, "ios"),
 "chromebook": lambda t: device_scene(t, "chromebook"),
 "solarField": lambda t: diagram(t, "solar_field"),
 "solarTrailer": lambda t: diagram(t, "solar_trailer"),
 "faithHero": lambda t: faith(t, "hero"),
 "faithCare": lambda t: faith(t, "care"),
 "faithAlert": lambda t: faith(t, "alert"),
 "mission": lambda t: about(t, "mission"),
 "aboutCommitments": lambda t: about(t, "commit"),
 "coreValues": lambda t: about(t, "values"),
}

if __name__ == "__main__":
    import re
    src = open(os.path.join(os.path.dirname(__file__), "..", "src", "content", "imageSlots.ts")).read()
    slots = re.findall(r'  (\w+): \{ kind: "(\w+)", alt: "([^"]*)"', src)
    n = 0
    for key, kind, alt in slots:
        if kind != "illustration" or key not in JOBS:
            continue
        open(os.path.join(OUT, f"{key}.svg"), "w").write(JOBS[key](alt))
        n += 1
    print(n, "illustrations written to", os.path.abspath(OUT))
