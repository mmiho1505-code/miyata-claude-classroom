# 講座「演習：レシートから経費精算を自動化する」のレシート画像10枚を作る（すべて架空）
# 使い方: python3 tools/practice/make_receipts.py materials/practice/receipts
# Google Chrome と Pillow を使う。レシートを HTML で描いて Chrome で画像にし、スマホで撮った写真のように加工する
import os, sys, random, subprocess, tempfile
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance

OUT = sys.argv[1]
os.makedirs(OUT, exist_ok=True)
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
random.seed(26)

CSS = """
body{margin:0;background:#fff;font-family:"Hiragino Sans","Hiragino Kaku Gothic ProN",sans-serif;color:#222}
.r{width:360px;padding:28px 26px 34px;box-sizing:border-box;font-size:15px;line-height:1.55}
.c{text-align:center}.b{font-weight:700}.big{font-size:22px;font-weight:700}
.row{display:flex;justify-content:space-between}.hr{border-top:1px dashed #555;margin:10px 0}
.s{font-size:12px;color:#444}.hand{font-family:"Klee","Hiragino Mincho ProN",serif;color:#1a2a6c}
.box{border:2px solid #333;padding:14px 16px}.fade{color:#ccc;filter:blur(2.6px)}
"""


def items(rows):
    return "".join(f'<div class="row"><span>{a}</span><span>¥{b:,}</span></div>' for a, b in rows)


def receipt(shop, sub, date, time, rows, pay="現金", extra="", shop_cls=""):
    total = sum(b for _, b in rows)
    tax = total - round(total / 1.1)
    return f"""<div class="r">
<div class="c big {shop_cls}">{shop}</div><div class="c s {shop_cls}">{sub}</div>
<div class="c s">TEL 03-0000-{random.randint(1000, 9999)}</div>
<div class="hr"></div><div class="row s"><span>{date}</span><span>{time}</span></div>
<div class="c b">領 収 証</div><div class="hr"></div>{items(rows)}<div class="hr"></div>
<div class="row big"><span>合計</span><span>¥{total:,}</span></div>
<div class="row s"><span>（内消費税等 10%）</span><span>¥{tax:,}</span></div>
<div class="row"><span>{pay}</span><span>¥{total:,}</span></div>{extra}
<div class="hr"></div><div class="c s">ご来店ありがとうございました</div></div>"""


HAND = """<div class="r" style="width:460px"><div class="box">
<div class="c big">領 収 書</div>
<div style="margin:14px 0 6px"><span class="hand" style="font-size:20px">株式会社みどり企画</span>　様</div>
<div class="row"><span>No. 0412</span><span class="hand">2026年 9月 9日</span></div>
<div class="c" style="font-size:28px;border-bottom:2px solid #333;margin:14px 0"><span class="hand">¥ 5,500 -</span></div>
<div>但し <span class="hand">会議室利用料として</span></div><div class="s">上記正に領収いたしました</div>
<div style="margin-top:14px;text-align:right">貸会議室 そよかぜ<br><span class="s">東京都千代田区内神田0-0-0</span></div>
</div></div>"""

TAXI = """<div class="r"><div class="c big">ひだまり交通</div><div class="c s">乗車券兼領収書</div>
<div class="hr"></div><div class="row s"><span>2026/09/08</span><span>18:42</span></div>
<div class="row"><span>乗車地</span><span>新宿駅西口</span></div><div class="row"><span>降車地</span><span>四谷三丁目</span></div>
<div class="row"><span>車番</span><span>品川 500 あ 00-00</span></div><div class="hr"></div>
<div class="row big"><span>料金</span><span>¥2,860</span></div><div class="row s"><span>クレジット</span><span>¥2,860</span></div>
<div class="hr"></div><div class="c s">またのご利用をお待ちしております</div></div>"""

CAT = """<div style="width:700px;height:1100px;background:linear-gradient(#cfe3f2,#f4e9d8 60%,#d9c3a5);position:relative;overflow:hidden">
<div style="position:absolute;left:0;right:0;bottom:0;height:300px;background:#b98a5e"></div>
<svg viewBox="0 0 300 300" style="position:absolute;left:150px;top:480px;width:400px;height:400px">
<ellipse cx="150" cy="210" rx="95" ry="70" fill="#8a6a50"/><circle cx="150" cy="120" r="62" fill="#8a6a50"/>
<polygon points="98,85 108,30 135,70" fill="#8a6a50"/><polygon points="202,85 192,30 165,70" fill="#8a6a50"/>
<polygon points="104,78 111,45 128,70" fill="#e8b8a8"/><polygon points="196,78 189,45 172,70" fill="#e8b8a8"/>
<ellipse cx="128" cy="118" rx="9" ry="12" fill="#2f3b2a"/><ellipse cx="172" cy="118" rx="9" ry="12" fill="#2f3b2a"/>
<polygon points="144,140 156,140 150,148" fill="#d98c8c"/>
<path d="M150 148 q-10 12 -22 6 M150 148 q10 12 22 6" stroke="#3a2a20" stroke-width="3" fill="none"/>
<path d="M240 230 q50 -10 40 -70" stroke="#8a6a50" stroke-width="18" fill="none" stroke-linecap="round"/>
</svg></div>"""

# (ファイル名, HTML, 加工, 正解の扱い)
RECEIPTS = [
    ("receipt-01.jpg", receipt("ミドリマート", "新宿三丁目店", "2026/09/01(火)", "08:12",
        [("ボールペン 黒", 165), ("クリアファイル 5枚", 330), ("お茶 500ml", 153)]), "ok", "処理済み"),
    ("receipt-02.jpg", receipt("珈琲ことり", "四谷店", "2026/09/02(水)", "14:35",
        [("ブレンドコーヒー ×2", 1100), ("チーズケーキ", 550)], "クレジット"), "ok", "処理済み"),
    ("receipt-03.jpg", receipt("文具のつばめ堂", "", "2026/09/03(木)", "11:20",
        [("コピー用紙 A4", 880), ("付せん", 330)]), "dark", "エラー（暗くてぶれて読めない）"),
    ("receipt-04.jpg", TAXI, "ok", "処理済み（タクシー）"),
    ("receipt-05.jpg", receipt("あおば書店", "本店", "2026/09/08(火)", "12:05",
        [("はじめての生成AI活用", 1980), ("ビジネス文書の書き方", 1540)], "電子マネー"), "ok", "処理済み"),
    ("receipt-06.jpg", receipt("コインパーク つきみ", "麹町第2", "2026/09/09(水)", "16:48",
        [("駐車料金 2時間", 900)], shop_cls="fade"), "ok", "処理済み（支払先は「要確認」）"),
    ("receipt-07.jpg", HAND, "ok", "処理済み（手書きの領収書）"),
    ("receipt-08.jpg", receipt("ドラッグ はなみずき", "", "2026/09/10(木)", "19:02",
        [("マスク 50枚", 1078), ("目薬", 748)]), "crumple", "エラー（しわくちゃで読めない）"),
    ("receipt-09.jpg", CAT, "photo", "エラー（レシートではない）"),
    ("receipt-10.jpg", receipt("100円ショップ きらり", "神保町店", "2026/09/11(金)", "13:30",
        [("ケーブルタイ", 110), ("電池 単3×4", 110), ("メモ帳", 110), ("封筒 長3", 220)]), "ok", "処理済み"),
]


def shoot(html, path, w=700, h=1100):
    with tempfile.TemporaryDirectory() as tmp:
        src = os.path.join(tmp, "r.html")
        with open(src, "w", encoding="utf-8") as fp:
            fp.write(f"<!doctype html><meta charset=utf-8><style>{CSS}</style>{html}")
        subprocess.run([CHROME, "--headless=new", "--disable-gpu", f"--user-data-dir={tmp}/prof",
                        "--hide-scrollbars", f"--window-size={w},{h}", "--force-device-scale-factor=2",
                        f"--screenshot={path}", "file://" + src],
                       check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    img = Image.open(path).convert("RGB")
    # 白い余白を切りおとす
    box = Image.eval(img.convert("L"), lambda x: 255 if x < 250 else 0).getbbox()
    return img.crop((max(box[0] - 30, 0), max(box[1] - 30, 0), min(box[2] + 30, img.width), min(box[3] + 30, img.height)))


def photo(paper, kind):
    # 机の上に置いたレシートを、スマホで少し斜めから撮ったように見せる
    W, H = 1200, 1600
    desk = Image.new("RGB", (W, H), (120, 98, 78))
    d = ImageDraw.Draw(desk)
    for y in range(0, H, 6):
        c = 110 + random.randint(-8, 8)
        d.line([(0, y), (W, y + random.randint(-4, 4))], fill=(c, c - 22, c - 40), width=3)
    if kind == "photo":
        img = paper.resize((W, int(paper.height * W / paper.width)))
        return img.crop((0, 0, W, min(H, img.height)))
    scale = min((W * 0.72) / paper.width, (H * 0.86) / paper.height)
    p = paper.resize((int(paper.width * scale), int(paper.height * scale)))
    if kind == "crumple":
        dr = ImageDraw.Draw(p)
        for _ in range(26):
            x1, y1 = random.randint(0, p.width), random.randint(0, p.height)
            x2, y2 = x1 + random.randint(-300, 300), y1 + random.randint(-300, 300)
            dr.line([(x1, y1), (x2, y2)], fill=(150, 150, 150), width=random.randint(3, 9))
        p = p.filter(ImageFilter.GaussianBlur(16))
        p = ImageEnhance.Contrast(p).enhance(0.3)
    ang = random.uniform(-6, 6)
    mask = Image.new("L", p.size, 255).rotate(ang, expand=True)
    p = p.rotate(ang, expand=True, fillcolor=(0, 0, 0))
    shadow = Image.new("RGB", p.size, (40, 30, 22))
    x, y = (W - p.width) // 2, (H - p.height) // 2
    desk.paste(shadow, (x + 14, y + 18), mask.filter(ImageFilter.GaussianBlur(10)))
    desk.paste(p, (x, y), mask)
    out = desk
    if kind == "dark":
        out = out.filter(ImageFilter.BoxBlur(22))
        out = ImageEnhance.Brightness(out).enhance(0.2)
    else:
        out = ImageEnhance.Brightness(out).enhance(random.uniform(0.92, 1.04))
    return out


for name, html, kind, answer in RECEIPTS:
    tmp = os.path.join(OUT, "_tmp.png")
    paper = shoot(html, tmp)
    os.remove(tmp)
    photo(paper, kind).save(os.path.join(OUT, name), quality=82)
    print(name, answer)
