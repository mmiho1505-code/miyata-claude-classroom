# スライド2本（Claude基本・頼み方）と、A4の早見表3枚・準備チェック表を作る
import os, sys, html
from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = sys.argv[1]
os.makedirs(OUT, exist_ok=True)
FONTS = """
<link rel="stylesheet" href="node_modules/@fontsource/m-plus-rounded-1c/800.css" />
<link rel="stylesheet" href="node_modules/@fontsource/noto-sans-jp/400.css" />
<link rel="stylesheet" href="node_modules/@fontsource/noto-sans-jp/700.css" />
"""
e = html.escape
ICON = {
    "check": '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2f7d62" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    "warn": '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#c0562b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17v.5"/></svg>',
}


# ---------- スライドの部品（文字は b() で太字にできる） ----------
def b(t):
    return t.replace("【", "<b>").replace("】", "</b>")


class Deck:
    def __init__(self, series, name):
        self.series, self.name, self.slides = series, name, []

    def foot(self):
        return f'<p class="foot">{e(self.series)} {e(self.name)} ｜ {len(self.slides) + 1}</p>'

    def add(self, inner, cls=""):
        self.slides.append(f'<section class="slide {cls}">{inner}{self.foot() if "cover" not in cls else ""}</section>')

    def cover(self, title_html, sub):
        self.slides.append(
            f'<section class="slide dark cover"><p class="kicker">{e(self.series)} ｜ {e(self.name)}</p>'
            f'<h1>{title_html}</h1><p class="sub">{e(sub)}</p><p class="who">講師：宮田 久雄</p></section>')

    def head(self, kicker, title, warn=False):
        style = ' style="color:#c0562b"' if warn else ""
        return f'<p class="kicker"{style}>{e(kicker)}</p><h1>{e(title)}</h1>'

    def cards(self, kicker, title, items, cls="", note="", green=False, dark=False):
        n = 2 if len(items) in (2, 4) else 3
        cards = "".join(f'<div class="card{" green" if green else ""}"><h2>{e(h)}</h2><p>{b(e(p))}</p></div>' for h, p in items)
        self.add(self.head(kicker, title) + f'<div class="cards c{n}">{cards}</div>' + (f'<p class="note">{b(e(note))}</p>' if note else ""), ("dark " if dark else "") + cls)

    def table(self, kicker, title, heads, rows, cls="", note="", hint=""):
        th = "".join(f"<th>{e(h)}</th>" for h in heads)
        K = ' class="k"'
        tr = "".join("<tr>" + "".join(f'<td{K if i == 0 else ""}>{b(e(c))}</td>' for i, c in enumerate(r)) + "</tr>" for r in rows)
        self.add(self.head(kicker, title) + f"<table><tr>{th}</tr>{tr}</table>" + (f'<p class="note">{b(e(note))}</p>' if note else "") + (f'<p class="hint">{b(e(hint))}</p>' if hint else ""), cls)

    def ask(self, kicker, title, lines, cls="", note="", pre=""):
        body = "<br />".join(b(e(l)) for l in lines)
        self.add(self.head(kicker, title) + (f'<p class="note" style="margin:0 0 12px">{b(e(pre))}</p>' if pre else "") + f'<div class="ask">{body}</div>' + (f'<p class="note">{b(e(note))}</p>' if note else ""), cls)

    def quotes(self, kicker, title, quotes, cls="", note=""):
        q = "".join(f'<div class="quote">{b(e(t))}</div>' for t in quotes)
        self.add(self.head(kicker, title) + q + (f'<p class="note">{b(e(note))}</p>' if note else ""), cls)

    def items(self, kicker, title, items, warn=False, cls="", note=""):
        ic = ICON["warn"] if warn else ICON["check"]
        rows = "".join(f'<div class="item{" warn" if warn else ""}">{ic}<span>{b(e(t))}</span></div>' for t in items)
        self.add(self.head(kicker, title, warn) + f'<div class="list">{rows}</div>' + (f'<p class="note">{b(e(note))}</p>' if note else ""), cls)

    def summary(self, title, items, note=""):
        rows = "".join(f"<div><span>{i + 1}</span><p>{b(e(t))}</p></div>" for i, t in enumerate(items))
        self.add(self.head("まとめ", title) + f'<div class="sum">{rows}</div>' + (f'<p class="note" style="margin-top:26px">{b(e(note))}</p>' if note else ""))

    def html(self):
        return f'<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8" /><title>{e(self.series)} {e(self.name)}</title>{FONTS}<link rel="stylesheet" href="deck.css" /></head><body>{"".join(self.slides)}</body></html>'


# ---------- スライド1：Claude基本 ----------
d1 = Deck("はじめての Claude", "基本設定編")
d1.cover("Claude に入って、<br />自分用に整えよう", "ログイン、プランの確認、設定、便利な機能まで")
d1.cards("今日のゴール", "帰るときに、この3つができるように", [
    ("① 入る", "claude.ai に、自分のアカウントで入る"),
    ("② 整える", "プランを確かめ、「Claudeへの指示」を書く"),
    ("③ 使う", "ファイルを入れて聞く。業務ごとにプロジェクトを作る"),
])
d1.table("ステップ 1", "claude.ai に自分のアカウントで入る", ["すること", "ポイント"], [
    ("開く", "パソコンのブラウザ（Chrome / Edge / Safari）のアドレス欄に claude.ai と打って Enter"),
    ("続ける", "会社の Gmail なら「Googleで続ける」。メールなら、届いた番号やリンクを入力"),
    ("名前", "聞かれたら、普段使う名前で大丈夫"),
], hint="パスワード、カード番号、APIキーは、チャットにも教室にも貼りません。カード番号は公式の入力欄だけです。")
d1.table("ステップ 2", "プランを確かめる", ["見る所", "中身"], [
    ("設定 → プラン", "今のプラン名（Pro など）を見る。Free のままだと、Claude Code のログインで止まりやすい"),
    ("無料でできること", "チャットの相談や下書き"),
    ("Claude Code", "無料では使えない。Pro などの有料プランが必要"),
    ("請求／使用量", "請求は「払う・やめる・領収書」。使用量は「今月どれくらい使ったか」のメーター"),
], cls="pale", note="金額やボタンの文言は、公式の画面が正しいです。")
d1.table("画面の地図", "左のメニュー、入力欄の「＋」、設定", ["場所", "できること"], [
    ("左のメニュー", "新規チャット、プロジェクト、アーティファクト、カスタマイズ"),
    ("入力欄の「＋」", "ファイルや写真、プロジェクトへの追加、コネクタ、Web検索のオン／オフ"),
    ("送る・改行", "Enter で送信。改行は Shift ＋ Enter"),
    ("モデル", "簡単ですぐなら Haiku、少し難しいなら Sonnet、高度なら Opus（消費が多い）"),
], note="設定は、自分の名前 → 設定。全部いじらなくて大丈夫です。")
d1.ask("ステップ 3（いちばん大事）", "「Claudeへの指示」に、職業・道具・答え方を書く", [
    "職業：〔事務／飲食／建設 など〕",
    "使っている道具：〔Excel、ChatGPT、会計ソフト など〕",
    "答え方：",
    "・結論を最初に",
    "・分からないことは分からないと言う",
    "・あいまいな点は聞き返す",
    "・専門用語は短く説明する",
], pre="設定 → 一般 → プロフィール →「Claudeへの指示」に貼り、〔　〕を自分の言葉に変えて保存します。", note="見本の文は、そのまま真似しません。最初はざっくりで大丈夫です。")
d1.cards("ステップ 4", "学習に使うか。覚えるか", [
    ("プライバシー", "「AIモデルの改善に協力」。学習に使われたくなければオフにする"),
    ("メモリー", "別のチャットでも覚えること。間違った覚えはここで消す。社外秘は覚えさせない"),
    ("後回しでよい", "機能、拡張機能、Claude in Chrome、デスクトップアプリなど"),
], cls="pale", note="「開発者」に出る APIキーは、パスワードと同じ扱いです。チャットに貼らず、人に渡しません。")
d1.items("便利な機能 ①", "ファイルを入れて聞く。検索は出典つきで", [
    "【ファイル：】「＋」から PDF や Excel を入れ、「何が書いてある？」と聞く",
    "【写真：】手書きメモの写真も読める。元のメモと必ず見比べる",
    "【Web検索：】「出典のURLをつけて」と頼む。分からないことは分からないと言わせる",
    "【アーティファクト：】「Webページにして」と頼むと、右側にページが出る",
], note="機密・口座・パスワードは入れません。公開してよいかは、人が決めます。")
d1.ask("便利な機能 ②", "プロジェクト：業務ごとの箱で、毎回同じ形に", [
    "このプロジェクトの指示：",
    "日時・参加者・議題・要点・決定事項・ToDo・確認事項の形式でまとめる。",
    "500〜800字。あいまいな表現はしない。不明な点は「不明」と書く。",
    "過去の議事録は参照せず、今回貼ったメモだけで作成する。",
], pre="左の「プロジェクト」で箱を作り、箱の指示に貼ります。", note="走り書きのメモを貼るだけで、同じ見出しの議事録になります。", cls="pale")
d1.items("注意点", "使い始める前の3つの約束", [
    "【貼らないもの：】パスワード、カード番号、APIキー、口座番号",
    "【人が確認：】もっともらしい嘘が混じることがある。数字と固有名詞は人が確かめる",
    "【取り消せない操作：】退会や公開は、注意書きを最後まで読んでから",
], warn=True)
d1.cards("演習", "実際にやってみましょう", [
    ("1. 入る", "claude.ai に入り、設定でプランを見る"),
    ("2. 指示を書く", "「Claudeへの指示」に、職業・道具・答え方を書いて保存"),
    ("3. 聞く", "PDF か Excel を1つ入れて、「何が書いてある？」と聞く"),
    ("4. 箱を作る", "プロジェクトを1つ作り、議事録の指示を貼る"),
], dark=True)
d1.summary("覚えておくのは、この3つだけ", [
    "自分のアカウントで入り、【プランを確かめる】",
    "【「Claudeへの指示」】に、職業・道具・答え方を書く",
    "業務ごとに【プロジェクト】。数字と固有名詞は人が確認する",
], note="次は「チャットとお願い文の書き方」へ進みましょう。")

# ---------- スライド2：頼み方 ----------
d2 = Deck("はじめての Claude", "頼み方編")
d2.cover("無難ではない答えを<br />もらう頼み方", "目的・前提・形式と、仮説")
d2.cards("今日のゴール", "帰るときに、この3つができるように", [
    ("① 1回頼む", "チャットに日本語で頼み、返事をもらう"),
    ("② 型で頼む", "目的・前提・形式の3つを書いて頼む"),
    ("③ 仮説を置く", "「私はこう思う」を先に書いて、指摘をもらう"),
])
d2.ask("ステップ 1", "日本語で1回、返事をもらう", [
    "小学生にも分かる言葉で、請求書と見積書の違いを5行で教えてください。",
    "専門用語が出たら、すぐ言い換えてください。",
], pre="claude.ai で「新しいチャット」を押し、入力欄に貼って Enter で送ります。", note="気に入らなければ、「もっと短く」「例を1つ」と続けて書きます。")
d2.cards("なぜ型がいるのか", "あいまいだと、無難な答えになる", [
    ("あいまいな頼み方", "「営業メールの文を考えて」→ だれ向けとも分からない定型文が返る"),
    ("伝わる頼み方", "「新規顧客向けの、初回訪問後のお礼メールを考えて」→ 場面に合った文が返る"),
], cls="pale", note="AIは、あなたの会社も宛先も知りません。だれ向けか、何のあとかを書きます。")
d2.cards("ステップ 2", "目的・前提・形式の3つを書く", [
    ("目的", "役割、だれ向けか、何に使うか"),
    ("前提", "背景、制約、参考資料。資料を渡すと、嘘が大きく減る"),
    ("形式", "見た目、長さ、トーン"),
], green=True, note="見出しは付けず、普通の文章で書いて構いません。")
d2.ask("型の例", "3つを入れたお願い文", [
    "【目的：】社内の非エンジニア向けに、3分で要点がわかるメモを作る",
    "【前提：】昨日の会議メモを使う。専門用語には一言説明を付ける",
    "【形式：】見出しと箇条書き。決定事項とタスクに分ける",
    "",
    "わからない点は「不明」と書いてください。",
])
d2.items("ステップ 3", "1か所ずつ直す。使えたら型にする", [
    "【直す：】「宛先だけ直して」のように、1か所ずつ。一発で完璧を狙わない",
    "【根拠：】結論の前に、考える過程を短く書かせる。足りないときは「不明」と書かせる",
    "【大きな仕事：】いきなり全部ではなく、骨子から頼む",
    "【型にする：】うまくいったお願い文は、とっておいて次も使う",
], cls="pale")
d2.cards("ステップ 4", "差がつくのは、問いの立て方", [
    ("イシュー", "いま本当に結論を出す価値がある問いを、1つに絞る"),
    ("仮説", "「私はこう思う」を先に書く。間違っていてよい"),
    ("ファクトベース", "「外れている点を、根拠つきで指摘して」と頼む"),
], note="要約・翻訳・言い換え・ラフなアイデア出しは、丸投げで大丈夫です。選ぶ・人に見せる・原因を探るときに、仮説を置きます。")
d2.quotes("仮説ありの例", "同じテーマでも、答えが変わる", [
    "「私は経理です。数字を集める作業はAIに置き換わり、数字を読んで判断する仕事が残ると思っています。外れている点を、根拠つきで指摘してください。」",
    "「私は中小企業の総務です。まず変わるのは問い合わせ対応だと思っています。順番が違うなら、根拠つきで指摘してください。」",
], cls="pale", note="条件を細かく付けすぎると、発想が狭まります。")
d2.table("ステップ 5", "毎回書くことは、設定とスキルへ", ["こんなとき", "置く場所"], [
    ("全部のチャットで守らせたい", "「Claudeへの指示」やメモリーに書く"),
    ("呼び出したときだけ使う約束", "Skills にする（「これを Skill として保存して」と頼める）"),
    ("AIに出来ばえを見てもらう", "「改善点だけ」出させる"),
])
d2.items("注意点", "入力欄に書かないもの", [
    "【認証に使うもの：】パスワード、暗証番号、APIキー",
    "【お金と番号：】口座番号、マイナンバー",
    "【名簿：】お客さんの名簿そのもの",
], warn=True, note="送る前に、入力欄をもう一度見ます。")
d2.cards("演習", "実際にやってみましょう", [
    ("1. 1回頼む", "見本のお願い文を貼って、返事をもらう"),
    ("2. 型で頼む", "自分の仕事を、目的・前提・形式で頼み直す"),
    ("3. 仮説を置く", "「私はこう思う。外れたら指摘して」で頼む"),
    ("4. 直す", "返ってきた文を、1か所だけ直させる"),
], dark=True)
d2.summary("覚えておくのは、この3つだけ", [
    "【目的・前提・形式】。資料を渡す。なければ「不明」と書かせる",
    "選ぶ・見せる・原因を探るときは、【「私はこう思う。外れたら指摘して」】",
    "直すときは【1か所ずつ】。毎回のルールは設定、型になったら Skills",
])

# ---------- A4の早見表（1枚もの） ----------
SHEET_CSS = """
@page { size: A4; margin: 0; }
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body { font-family: "Noto Sans JP", sans-serif; color: #2b3345; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.page { width: 210mm; height: 297mm; padding: 14mm 15mm 12mm; position: relative; overflow: hidden; }
.top { border-left: 6px solid #f3c14e; background: #1f2b45; color: #fff; padding: 12px 18px; border-radius: 0 6px 6px 0; }
.top small { display: block; color: #f3c14e; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; margin-bottom: 2px; }
.top h1 { margin: 0; font-family: "M PLUS Rounded 1c", sans-serif; font-weight: 800; font-size: 23px; letter-spacing: 0.02em; }
.lead { font-size: 12.5px; line-height: 1.8; margin: 10px 2px 2px; }
h2 { font-family: "M PLUS Rounded 1c", sans-serif; font-weight: 800; font-size: 15px; color: #1f2b45; margin: 15px 0 7px; padding-left: 9px; border-left: 4px solid #2f7d62; }
h2.warn { border-left-color: #c0562b; }
table { width: 100%; border-collapse: collapse; font-size: 11.5px; }
th { background: #1f2b45; color: #fff; text-align: left; padding: 5px 10px; font-size: 11px; }
td { border: 1px solid #d3d8e0; padding: 5px 10px; line-height: 1.6; vertical-align: top; }
td.k { width: 30%; font-weight: 700; color: #1f2b45; background: #f3f5f8; }
td.c { font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 11px; white-space: nowrap; width: 34%; background: #f3f5f8; color: #1f2b45; font-weight: 700; }
.box { border: 1.5px solid #2f7d62; border-radius: 6px; padding: 9px 14px; font-size: 11.5px; line-height: 1.85; background: #fff; }
.box.mono { font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 11px; background: #f3f5f8; border-color: #c9d0db; }
.cols { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.cols.half { gap: 14px; align-items: start; }
.cols.half td.c { width: 43%; }
.cols.half h2:first-child { margin-top: 15px; }
.cols3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
.cell { border: 1px solid #d3d8e0; border-radius: 6px; padding: 9px 12px; font-size: 11.5px; line-height: 1.7; }
.cell b { display: block; color: #2f7d62; font-size: 13px; margin-bottom: 2px; font-family: "M PLUS Rounded 1c", sans-serif; }
ul { margin: 0; padding-left: 1.3em; font-size: 11.5px; line-height: 1.85; }
ul.chk { list-style: none; padding-left: 0; }
ul.chk li { padding-left: 26px; position: relative; margin-bottom: 3px; }
ul.chk li::before { content: ""; position: absolute; left: 2px; top: 4px; width: 13px; height: 13px; border: 1.5px solid #1f2b45; border-radius: 2px; }
.warnbox { background: #fdf3d3; border-radius: 6px; padding: 9px 14px; font-size: 11.5px; line-height: 1.8; margin-top: 10px; }
.big { font-size: 13px; line-height: 1.9; }
.big li { margin-bottom: 4px; }
.foot { position: absolute; left: 15mm; right: 15mm; bottom: 8mm; font-size: 10px; color: #6b7385; display: flex; justify-content: space-between; }
b { color: #1f2b45; }
"""


def sheet(small, title, body):
    return (f'<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8" /><title>{e(title)}</title>{FONTS}<style>{SHEET_CSS}</style></head><body>'
            f'<div class="page"><div class="top"><small>{e(small)}</small><h1>{e(title)}</h1></div>{body}'
            f'<div class="foot"><span>はじめてのClaude 教室｜株式会社 宮田財務</span><span>最終判断・送信・公開は、必ずご自身で</span></div></div></body></html>')


def tbl(heads, rows, code=False):
    th = "".join(f"<th>{e(h)}</th>" for h in heads)
    K = ' class="c"' if code else ' class="k"'
    tr = "".join("<tr>" + "".join(f'<td{K if i == 0 else ""}>{b(e(c))}</td>' for i, c in enumerate(r)) + "</tr>" for r in rows)
    return f"<table><tr>{th}</tr>{tr}</table>"


S_PROMPT = sheet("早見表 ①", "お願い文の型", f"""
<p class="lead">あいまいに頼むと、無難な答えが返ります。3つを書いて頼み、1か所ずつ直します。</p>
<h2>3つを書く</h2>
<div class="cols3">
  <div class="cell"><b>目的</b>役割、だれ向けか、何に使うか</div>
  <div class="cell"><b>前提</b>背景、制約、参考資料。資料を渡すと、嘘が大きく減る</div>
  <div class="cell"><b>形式</b>見た目、長さ、トーン</div>
</div>
<h2>すぐ使える一言（〔　〕を自分の言葉に）</h2>
<div class="box">〔データアナリスト〕として、〔社内の非エンジニア〕向けに〔役員提案〕のための〔3分メモ〕を作って。<br />背景は〔昨日の会議〕、参考は〔この資料〕。形式は〔決定事項とタスクの箇条書き〕、トーンは〔丁寧で短い〕。<br />わからない点は「不明」と書いて。</div>
<h2>直すとき・確かめるとき</h2>
{tbl(["こんなとき", "こう書く"], [
    ("1か所だけ直したい", "「宛先だけ直して。ほかは変えないで」"),
    ("根拠があやしい", "「結論の前に、考える過程を短く書いて。足りないときは『不明』と書いて」"),
    ("直す前に案を見たい", "「まず改善案を出して。まだ変えないで」"),
    ("出来ばえを見てほしい", "「改善点だけ挙げて」"),
    ("無い数字を埋めさせない", "「データに無い数字は埋めず、『不明』と書いて」"),
    ("やる前に段取りを見たい", "「始める前に、何をどの順でやるか見せて。私がOKしてから進めて」"),
])}
<h2>仮説を置く（選ぶ・人に見せる・原因を探るとき）</h2>
<div class="box">私は〔こう思っています〕。外れている点を、根拠つきで指摘してください。</div>
<p class="lead">要約・翻訳・言い換え・ラフなアイデア出しは、丸投げで大丈夫です。</p>
<h2 class="warn">入力欄に書かないもの</h2>
<div class="warnbox">パスワード、暗証番号、APIキー、口座番号、マイナンバー、お客さんの名簿そのもの。送る前に、入力欄をもう一度見ます。</div>
""")

S_SAFETY = sheet("早見表 ②", "安全に使うための約束", f"""
<p class="lead">AIはまちがえることがあります。教室全体で、次の5つを守ります。</p>
<h2>5つの約束</h2>
<ul class="chk big">
  <li>作業の前に「何をするか」を出させ、<b>確認してから</b>進める</li>
  <li>元のファイルは<b>コピーを取ってから</b>任せる。最初は練習用フォルダで小さく試す</li>
  <li>個人情報・口座・パスワード・APIキーは<b>渡さない</b></li>
  <li>出てきた数字は<b>元データと照合</b>する（請求書の金額・宛名は特に）</li>
  <li>送信・購入・削除・公開・提出の<b>最終判断は、自分で</b>行う</li>
</ul>
<h2 class="warn">渡さないもの</h2>
<div class="cols">
  <div class="cell"><b>認証に使うもの</b>パスワード、暗証番号、APIキー</div>
  <div class="cell"><b>お金と番号</b>口座番号、カード番号、マイナンバー</div>
  <div class="cell"><b>人の情報</b>お客さんの名簿そのもの、社員の住所や携帯番号</div>
  <div class="cell"><b>会社の約束</b>秘密保持を約束した資料。扱ってよいかを先に確かめる</div>
</div>
<h2>送る前・出す前の指差し確認</h2>
{tbl(["もの", "見る所"], [
    ("請求書・見積書", "宛名（正式な会社名）、金額、税率と消費税、日付と番号、登録番号と振込先"),
    ("給料・集計の表", "1人分・1件分を電卓で検算。先月とも比べる"),
    ("メール・返信", "宛名と敬称、書いていない約束が足されていないか"),
    ("公開するページ", "住所・電話・営業時間。秘密の情報が入っていないか"),
])}
<h2>お願い文に入れておく一言</h2>
<div class="box">送信・削除・公開はしないでください。下書きまでです。<br />データに無い数字は埋めず、「不明」と書いてください。<br />作業の前に計画を見せて、私がOKしてから進めてください。</div>
<h2>困ったとき</h2>
<ul>
  <li>会社のパソコンで止められたら、無断で制限を外さない。担当者に相談する</li>
  <li>画面に出た文は、そのまま残す（写真でも可。パスワードは写さない）</li>
  <li>教室の「つまずき一覧」と「チャット」から、先生に聞ける</li>
</ul>
""")

S_CODE = sheet("早見表 ③", "Claude Code コマンド早見表", f"""
<p class="lead">ターミナル（Windows は PowerShell、Mac はターミナル）で使います。指示は日本語でそのまま書けます。</p>
<h2>入れる（自分のOSの1行）</h2>
{tbl(["打つもの", "どこで"], [
    ("irm https://claude.ai/install.ps1 | iex", "Windows の PowerShell（行頭が PS C:\\）"),
    ("curl -fsSL https://claude.ai/install.sh | bash", "Mac のターミナル"),
], code=True)}
<div class="cols half">
<div>
<h2>起動・確認（ターミナルで打つ）</h2>
{tbl(["打つもの", "何が起きるか"], [
    ("claude", "作業したいフォルダで打つと始まる"),
    ("claude --version", "番号が出れば、入っている"),
    ("claude doctor", "状態を自動でチェックする"),
    ("claude update", "新しい版にする"),
    ("claude --continue", "直前の会話から再開する"),
], code=True)}
<h2>キーと書き方</h2>
{tbl(["打つもの", "何が起きるか"], [
    ("Shift ＋ Tab", "動き方（権限モード）を切り替える"),
    ("@ファイル名", "見てほしいファイルを指定する"),
    ("/名前", "作っておいた Skill を呼ぶ"),
], code=True)}
</div>
<div>
<h2>会話の中で打つ（/ で始まる）</h2>
{tbl(["打つもの", "何が起きるか"], [
    ("/help", "コマンドの一覧を見る"),
    ("/init", "CLAUDE.md の下書きを作る"),
    ("/memory", "CLAUDE.md が読まれているか確かめる"),
    ("/context", "会話にどれだけ詰まっているか見る"),
    ("/clear", "別の作業に移るとき、会話を空にする"),
    ("/resume", "前の会話に戻る"),
    ("/model", "モデルを切り替える"),
    ("/usage", "使用量を見る"),
    ("/permissions", "許可・禁止の設定を見る"),
    ("/config", "モデルや設定を変える"),
    ("/mcp", "外のサービスとの接続を見る"),
], code=True)}
</div>
</div>
<h2>決まりごとの置き場所</h2>
{tbl(["場所", "中身"], [
    ("~/.claude/CLAUDE.md", "自分用。どのフォルダでも読まれる"),
    ("./CLAUDE.md", "このフォルダ用。名前は大文字で、フォルダの直下に置く"),
    (".claude/rules/〈名前〉.md", "特定の場所だけのルール"),
    (".claude/skills/〈名前〉/SKILL.md", "くり返す作業の手順（Skill）"),
], code=True)}
<div class="warnbox">大きな変更は、計画だけ先に出させて、読んでから進めます。うまくいかないときは、ターミナルを閉じて開き直す。赤い文字は省略せず全部貼り、「原因と直し方を、専門用語を使わずに」と頼みます。パスワードやAPIキーは貼りません。</div>
""")

S_JUNBI = sheet("講義の前に", "準備チェック表", f"""
<p class="lead">講義の前日までに、□ にチェックを入れてください。分からない所は、空けたままで構いません。当日いっしょに確かめます。</p>
<h2>全員</h2>
<ul class="chk big">
  <li>ブラウザで <b>claude.ai</b> を開き、自分のアカウントで入れる</li>
  <li>ログインに使う<b>メールアドレス</b>が分かる（会社の Google か、個人の Gmail か）</li>
  <li>パスワードは、<b>自分で入力できる</b>ようにしておく（人に見せない。紙に書いて持ち歩かない）</li>
  <li>ノートパソコンと<b>充電器</b>を持っていく</li>
  <li>会社のパソコンの人は、インストールやログインが<b>許可されているか</b>を担当者に確かめる</li>
  <li>練習に使うファイルは、<b>架空のもの</b>か、使ってよいと確かめたものにする</li>
</ul>
<h2>事務コース（チャットで作業）の人</h2>
<ul class="chk big">
  <li>教室の<b>受講コード</b>を、マイページに入れてある</li>
  <li>練習用のフォルダを<b>1つ</b>作ってある（例：デスクトップに「Claude練習」）</li>
  <li>教室のマイページ「資料ダウンロード」から、<b>練習用データ</b>を取り出してある</li>
  <li>フォルダをつないで使う人は、Claude の<b>デスクトップアプリ</b>を入れてある</li>
</ul>
<h2>道具コース（Claude Code）の人</h2>
<ul class="chk big">
  <li>Claude の<b>有料プラン</b>（Pro など）になっている（設定 → プラン）</li>
  <li>パソコンが <b>Windows 10（1809）以降</b>、または <b>Mac</b>。メモリは 4GB 以上</li>
  <li>教室の「はじめての Claude Code」の手順で、<b>インストール</b>まで済ませてある</li>
  <li>ターミナルで <b>claude --version</b> と打つと、番号が出る</li>
  <li>サイトを公開する回に出る人は、<b>GitHub のアカウント</b>がある</li>
</ul>
<h2>当日</h2>
{tbl(["こんなとき", "どうする"], [
    ("途中で止まった", "画面はそのまま。手を挙げるか、教室の「つまずき一覧」を開く"),
    ("ログインできない", "ブラウザで claude.ai に入れるかを先に見る。Free のままになっていないかも見る"),
    ("会社のパソコンで止められた", "無断で制限を外さない。その回は、見て覚える"),
])}
<div class="warnbox">パスワード・口座番号・マイナンバー・お客さんの名簿は、講義でも使いません。</div>
""")

JOBS = [("claudebase.pdf", d1.html(), "deck"), ("promptskill.pdf", d2.html(), "deck"),
        ("cheat-prompt.pdf", S_PROMPT, "a4"), ("cheat-safety.pdf", S_SAFETY, "a4"),
        ("cheat-code.pdf", S_CODE, "a4"), ("junbi-check.pdf", S_JUNBI, "a4")]

with sync_playwright() as p:
    br = p.chromium.launch()
    for name, src, kind in JOBS:
        tmp = os.path.join(HERE, "_" + name.replace(".pdf", ".html"))
        open(tmp, "w", encoding="utf-8").write(src)
        pg = br.new_page(viewport={"width": 960, "height": 540} if kind == "deck" else {"width": 794, "height": 1123})
        pg.goto("file://" + tmp)
        pg.evaluate("document.fonts.ready")
        pg.wait_for_timeout(700)
        if kind == "deck":
            info = pg.evaluate("""() => [...document.querySelectorAll('.slide')].map((s, i) => {
              const foot = s.querySelector('.foot'); const ft = foot ? foot.getBoundingClientRect().top : s.getBoundingClientRect().bottom;
              let mb = 0; s.querySelectorAll(':scope > *:not(.foot):not(.who)').forEach(el => { mb = Math.max(mb, el.getBoundingClientRect().bottom); });
              return [i + 1, Math.round(ft - mb), s.scrollWidth > s.clientWidth]; })""")
            bad = [x for x in info if x[1] < 14 or x[2]]
            pg.pdf(path=os.path.join(OUT, name), width="960px", height="540px", print_background=True, prefer_css_page_size=True)
            print(name, "slides", len(info), "tight/overflow:", bad)
        else:
            m = pg.evaluate("""() => { const pgEl = document.querySelector('.page'); const foot = document.querySelector('.foot').getBoundingClientRect().top;
              let mb = 0; pgEl.querySelectorAll(':scope > *:not(.foot)').forEach(el => { mb = Math.max(mb, el.getBoundingClientRect().bottom); });
              return [Math.round(foot - mb), document.documentElement.scrollHeight]; }""")
            pg.pdf(path=os.path.join(OUT, name), format="A4", print_background=True, prefer_css_page_size=True)
            print(name, "余白(px):", m[0], "高さ:", m[1])
        pg.close()
    br.close()
