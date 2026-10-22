(() => {
  const talk = CLASSROOM.talk;

  CLASSROOM.courses.pyapp = {
    id: "pyapp",
    title: "Python と API で AI アプリを作る：LangChain・RAG・エージェントまで",
    subtitle: "Python の基本から、API・LangChain・RAG・AI エージェント・画面づくり・評価と改善まで、作る順に地図を持つ",
    duration: "約60分",
    audience: "少しむずかしくてもよいので、Python で自分の AI アプリを作ってみたい人",
    lessons: [
      {
        id: "map",
        title: "全体の地図",
        body: `
            <p class="kicker">GOAL　1／8</p>
            <h1>AI アプリは、6つの段を順にのぼって作る</h1>
            <p>この講座のゴールは、「社内の資料を読んで答えるチャットボット（＝会話で答えるプログラム）」のような AI アプリを、自分で組み立てられるようになることです。いきなり全部は作りません。下の段から順にのぼります。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>Python の基本</h3><p>Google Colab（＝ブラウザで Python を動かせる無料の道具）で、短いコードを動かす</p></article>
              <article class="op"><span class="num">2</span><h3>API で AI を呼ぶ</h3><p>API（＝プログラム同士が話すための窓口）で、自分のプログラムから AI に質問する</p></article>
              <article class="op"><span class="num">3</span><h3>LangChain の部品</h3><p>LangChain（＝AI アプリを作るための部品の道具箱）で、お願い文・出力・処理のつなぎ方を整える</p></article>
              <article class="op"><span class="num">4</span><h3>Memory と RAG</h3><p>会話を思い出させる。RAG（＝外の資料を探して、答えに使うしくみ）で、AI が知らないことを補う</p></article>
              <article class="op"><span class="num">5</span><h3>AI エージェント</h3><p>エージェント（＝目標だけ伝えると、使う道具と順番を自分で選んで動く AI）にする</p></article>
              <article class="op"><span class="num">6</span><h3>画面と評価</h3><p>Streamlit（＝Python だけで Web の画面を作れる道具）で画面をつけ、使う人の目で直し続ける</p></article>
            </div>
            <h2>コードは「ゼロから書ける」より「読める」が先</h2>
            <p>今は、コードの多くを AI に書いてもらえます。それでも、<strong>どこで何をしているかを読めること</strong>は欠かせません。しくみを知らないと、AI に何を聞けばよいかも分からないからです。この講座は「どの部品が、何のためにあるか」を自分の言葉で言えることを目指します。</p>
            <h2>始める前にそろえるもの</h2>
            <ul>
              <li><strong>Google アカウント</strong>：Google Colab と Google ドライブを使います</li>
              <li><strong>OpenAI の API キー</strong>：API キー（＝AI のサービスを使うための、自分専用の合いことば）。使った分だけ料金がかかるので、使える金額の上限を先に決めておきます</li>
              <li><strong>AI に質問できる場所</strong>：Claude や ChatGPT。エラーが出たら、まずここで聞きます</li>
            </ul>
            <p>ことば（LLM・トークン・RAG など）に不安があれば、先に <a href="#/course/aiwords" data-link>AI のことばと道具の選び方</a> を読むと楽になります。</p>
            <div class="callout warn">練習のデータは、架空のものを使います。パスワード・カード番号・マイナンバー・お客さまの個人情報は、AI にもコードにも入れません。会社のデータで作るときは、先に会社のルールを確かめます。</div>
          `
      },
      {
        id: "python",
        title: "Colab と Python の基本",
        body: `
            <p class="kicker">Python　2／8</p>
            <h1>文法は全部覚えなくてよい。1行でも動かす</h1>
            <p>Python（＝AI づくりでいちばんよく使われるプログラムのことば）は、英語に近くて読みやすいことばです。AI のライブラリ（＝便利な機能をまとめた部品集）の多くも Python で書かれています。</p>
            <p>Google Colab では、「セル」（＝コードを書く1つの枠）にコードを書いて、再生ボタンのようなボタンで動かします。流れは<strong>書く → 動かす → 結果を見る → エラーなら直す</strong>のくり返しです。</p>
            <h2>まず読めるようにしたい形</h2>
            <div class="code-wrap"><button class="copy" type="button">コピー</button><pre># リスト（＝順番のある箱）。番号は 0 から数える
fruits = ["りんご", "バナナ"]
fruits.append("みかん")        # 最後に1つ足す

# 辞書（＝名前と中身の組の箱）
user = {"name": "太郎", "age": 25}
print(user["name"])            # 太郎

# if（＝条件で分ける）。= は「入れる」、== は「同じか比べる」
score = 75
if score &gt;= 80:
    print("よくできました")
elif score &gt;= 60:
    print("合格")
else:
    print("もう一度")

# for（＝1つずつくり返す）
for f in fruits:
    print(f)

# 関数（＝名前をつけた処理のまとまり）。名前は動詞から
def add_numbers(a, b):         # a と b が引数（＝渡す値）
    return a + b               # return で返す値が戻り値

# 例外処理（＝エラーが起きたときの動きを決める）
try:
    print(10 / 0)
except ZeroDivisionError as e:
    print("0 では割れません:", e)</pre></div>
            <p>Python では、行の頭の字下げ（インデント）に意味があります。ずれるとエラーになります。</p>
            <h2>あと3つ、ことばだけ覚える</h2>
            <table>
              <thead><tr><th>ことば</th><th>たとえると</th><th>使い方</th></tr></thead>
              <tbody>
                <tr><td>クラス（＝設計図）とインスタンス（＝設計図から作った実物）</td><td>たい焼きの型と、焼けたたい焼き</td><td>ライブラリはたいてい「クラスを読みこむ → 実物を作る → 機能を呼ぶ」の3つの形</td></tr>
                <tr><td>メソッド（＝その値専用の機能）</td><td>リストだけが持つ「足す」ボタン</td><td><code>fruits.append()</code> のように「値.名前()」で使う</td></tr>
                <tr><td>import と pip install</td><td>図書館から本を借りる／新しい本を図書館に入れる</td><td><code>pip install</code> で外の部品を入れ、<code>import</code> で読みこむ</td></tr>
              </tbody>
            </table>
            <h2>エラーは当たり前。最後の行を読む</h2>
            <p>エラーの文の<strong>最後の行</strong>に、原因の名前が出ます（SyntaxError＝書き方のまちがい、NameError＝名前のつづりちがい、TypeError＝文字と数字を足した、など）。まとめて全部を受け止める <code>except Exception</code> は、原因が分からなくなるので、なるべく種類ごとに分けます。</p>
            ${talk([
              { do: "エラーが出たら、コードとエラーの文をそのまま AI に見せます。" },
              { me: `Google Colab で Python を動かしたら、エラーが出ました。
初心者なので、原因と直し方を、やさしいことばで教えてください。
［コード］
［エラーの最後の数行］` },
              { ai: `最後の行の「TypeError」は、文字と数字をそのまま足そうとしたときに出るエラーです。\n\n3行目の age は数字なので、str(age) で文字にしてからつなげると動きます。…` }
            ])}
            <div class="callout">Colab は、しばらく使わないとつながりが切れて、入れた部品が消えます。そのときは、最初の <code>pip install</code> のセルからもう一度動かします。</div>
          `
      },
      {
        id: "api",
        title: "API で AI をプログラムに入れる",
        body: `
            <p class="kicker">API　3／8</p>
            <h1>AI は記憶を持たない。会話の履歴は自分で渡す</h1>
            <p>API は、レストランでたとえると分かりやすくなります。自分のプログラムがお客さん、API が店員さん、AI の会社のコンピューターが厨房です。注文（リクエスト＝お願い）を出すと、料理（レスポンス＝返事）が返ってきます。</p>
            <h2>API キーは .env に置く</h2>
            <p>API キーは、だれが使ったかを見分けて料金を計算するための合いことばです。人に知られると、勝手に使われて高い請求が来ることがあります。<strong>コードに直接書かない・チャットに貼らない・人に見せない</strong>が決まりです。</p>
            <div class="code-wrap"><button class="copy" type="button">コピー</button><pre># .env というファイル（このファイルは GitHub などに上げない）
OPENAI_API_KEY=ここに自分のキー</pre></div>
            <p>.env（＝秘密の値を、コードとは別に置いておくファイル）は、.gitignore（＝GitHub に上げないファイルの一覧）に必ず書きます。Google Colab なら、左の鍵のマークのような「シークレット」に入れて読みこみます。くわしくは <a href="#/course/ccbasics" data-link>Claude Code で作って、直して、守って、公開する</a> の「鍵と秘密を守る」のページへ。</p>
            <h2>会話を続けるプログラム</h2>
            <div class="code-wrap"><button class="copy" type="button">コピー</button><pre>import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()                                  # .env を読みこむ
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

history = [{"role": "system", "content": "あなたは［健康の相談役］です。"}]
total_tokens = 0                               # ここまでの合計

while True:
    text = input("あなた：")
    if text == "quit":                         # quit で終わる
        break
    history.append({"role": "user", "content": text})
    res = client.chat.completions.create(
        model="［使うモデルの名前］",
        messages=history,                      # 履歴をまるごと渡す
        temperature=0.7,
    )
    answer = res.choices[0].message.content
    history.append({"role": "assistant", "content": answer})
    total_tokens += res.usage.total_tokens     # 毎回の分を足していく
    print("AI：", answer)
    print("ここまでの合計トークン：", total_tokens)</pre></div>
            <div class="callout">ライブラリの書き方は、よく変わります。このとおりに動かないときは、公式の説明（ドキュメント）で今の書き方を確かめます。</div>
            <h2>読めるようにしたい3つの所</h2>
            <ul>
              <li><strong>role（＝話す人の役）は3つ</strong>：system（AI の役目や決まり）、user（使う人）、assistant（AI の返事）。system を変えるだけで、AI は編集者にも翻訳者にもなります</li>
              <li><strong>temperature（＝答えのばらつき）</strong>：一般に、低いほど毎回同じような答え（翻訳・分類など）、高いほど自由な答え（アイデア出しなど）。何回か試して決めます</li>
              <li><strong>履歴は毎回まるごと送る</strong>：API は1回ごとに前のことを忘れます。ChatGPT が覚えているように見えるのは、会話の履歴を毎回いっしょに送っているからです</li>
            </ul>
            <h2>トークンと料金を測る</h2>
            <p>料金は文字数ではなく、トークン（＝文を細かく切ったかたまりの数）で決まります。日本語は英語よりトークンが多くなりがちです。履歴を毎回送るので、<strong>会話が長くなるほど1回の料金がふくらみます</strong>。上のように合計を足して表示すると、どれくらい使っているかが見えます。</p>
            <p>節約の方法は、古い履歴を消す、古い履歴を要約する、AI への決まり（system）を短くする、かんたんな質問には安いモデルを使う、などです。</p>
          `
      },
      {
        id: "prompt",
        title: "LangChain のプロンプト部品",
        body: `
            <p class="kicker">LangChain　4／8</p>
            <h1>テンプレートで入力を整え、どの AI にも同じ書き方で渡す</h1>
            <p>かんたんな質問と答えだけなら、前のページの API だけで足ります。LangChain を使う大きな理由は2つです。<strong>RAG</strong>（社内の資料を読んで答える）と、<strong>エージェント</strong>（道具を選んで動く）を、少ないコードで組めることです。</p>
            <h2>6つの部品箱</h2>
            <table>
              <thead><tr><th>部品</th><th>役目</th></tr></thead>
              <tbody>
                <tr><td>Model I/O</td><td>AI への入力（お願い文）と出力をあつかう。このページと次のページ</td></tr>
                <tr><td>Chains</td><td>処理をつなぐ・ふり分ける</td></tr>
                <tr><td>Memory</td><td>会話を思い出させる</td></tr>
                <tr><td>Retrieval</td><td>資料を探して取ってくる（RAG）</td></tr>
                <tr><td>Agents</td><td>道具を自分で選んで動く</td></tr>
                <tr><td>Callbacks</td><td>途中の動きをのぞく・記録する</td></tr>
              </tbody>
            </table>
            <h2>AI の会社を変えても、書き方は同じ</h2>
            <p>LangChain の Chat Model（＝チャット用の AI を呼ぶ部品）は、変換プラグのような役目です。会社ごとのちがいを吸収するので、OpenAI から Claude や Gemini に変えるときも、変える所は少なくてすみます。</p>
            <div class="code-wrap"><button class="copy" type="button">コピー</button><pre>from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate

llm = ChatOpenAI(model="［使うモデルの名前］", temperature=0)

prompt = ChatPromptTemplate.from_messages([
    ("system", "あなたは{role}です。答えは3行以内にします。"),
    ("human", "{question}"),
])

messages = prompt.format_messages(role="旅行の相談役", question="雨の日の京都は？")
result = llm.invoke(messages)
print(result.content)    # 返事の本文だけ。print(result) だと、トークン数などまで出る</pre></div>
            <p>{role} や {question} は変数（＝あとで中身を入れかえる所）です。メールの定型文の、空らんを埋めるイメージです。ふつうのアプリでは、使う人の入力をそのまま渡さず、<strong>決まり＋使う人の入力＋答えの見本</strong>を整えてから渡します。</p>
            <div class="callout">LangChain は、書き方が新しくなるのがとても速い道具です。古い書き方が警告になったり、動かなくなったりします。動かないときは、公式の説明で今の書き方を確かめます。急に答え方が変わったときも、モデルや書き方の更新をうたがいます。</div>
            <h2>Few-shot：見本で答え方をそろえる</h2>
            <p>Few-shot（＝いくつかの見本を見せる方法）を使うと、答えの形がそろいます。たとえば「岡山県 → 中国地方」の見本を見せておくと、長い説明ではなく「中国地方」だけを返すようになります。見本は「入力と答え」の組で用意し、最初の指示（prefix）と、最後の入力らん（suffix）ではさみます。</p>
            <h2>Example Selector：見本を選んで入れる</h2>
            <p>見本が多すぎると、トークンのむだになり、かえって答えがぶれます。Example Selector（＝入れる見本を自動で選ぶ部品）は、図書館の司書のように、合う見本だけを選びます。</p>
            <ul>
              <li><strong>長さで選ぶ</strong>：お願い文が長くなりすぎないよう、見本の数を減らす。日本語は数え方がずれやすいので、トークンを数える部品（tiktoken など）で数えます</li>
              <li><strong>意味の近さで選ぶ</strong>：入力と意味が近い見本だけを選ぶ。「動物の種類」を聞かれたら、犬や猫の見本だけが入ります。しくみは RAG と同じ「意味の近さで探す」です</li>
            </ul>
            <p>選ぶ係（Example Selector）と、見本をお願い文に入れる係（Few-shot のテンプレート）は別です。2つを組み合わせて使い、最後に AI へ渡すところまで忘れずに書きます。</p>
          `
      },
      {
        id: "chain",
        title: "Output Parser と Chains",
        body: `
            <p class="kicker">出力　5／8</p>
            <h1>出力を「整える」、処理を「つなぐ」「ふり分ける」</h1>
            <h2>Output Parser：文の答えを、使える形に変える</h2>
            <p>AI の答えは、ただの文です。「田中さん（41歳）、…」という文より、名前と年齢に分かれた形のほうが、「30歳以下だけ選ぶ」などの処理がしやすくなります。Output Parser（＝AI の答えを、プログラムで使いやすい形に変える部品）は、変えたい形で選びます。</p>
            <table>
              <thead><tr><th>ほしい形</th><th>たとえると</th><th>使う場面</th></tr></thead>
              <tbody>
                <tr><td>辞書（項目が決まった形）</td><td>項目が決まったアンケート用紙</td><td>名前・年齢・住所のように、決まった項目で受け取る</td></tr>
                <tr><td>リスト</td><td>買い物メモ</td><td>候補をいくつか、カンマ区切りで受け取る</td></tr>
                <tr><td>選択肢から1つ</td><td>マークシート</td><td>在庫のある商品の中からだけ選ばせる</td></tr>
                <tr><td>型の決まったクラス（Pydantic など）</td><td>年れいのらんに文字を入れるとはじかれるフォーム</td><td>数字は数字、文字は文字と、形を厳しく決める</td></tr>
              </tbody>
            </table>
            <div class="code-wrap"><button class="copy" type="button">コピー</button><pre>from pydantic import BaseModel

class Song(BaseModel):     # 答えの形を先に決める
    title: str
    artist: str
    reason: str

# 新しい書き方では、形をそのまま AI に渡せることがある
song = llm.with_structured_output(Song).invoke("雨の日に合う曲を1つ")
print(song.title)</pre></div>
            <p>形を先に決めておくと、画面に出すときにくずれません。書き方は版によってちがうので、動かないときは公式の説明で確かめます。</p>
            <h2>形がちがったら、やり直してもらう</h2>
            <p>AI は、たまに決めた形を守りません。そのまま変えようとするとエラーになり、プログラムが止まります。そこで、<strong>「エラーの内容」「まちがった答え」「元のお願い文」</strong>の3つを AI に返して、直してもらいます。注文とちがうサイズのコーヒーを作り直してもらうイメージです。</p>
            <ul>
              <li>エラーは <code>except ValueError as e</code> のように種類をしぼって受け止め、中身（e）を表示する。中身が見えないと、どこを直すか分からない</li>
              <li><strong>やり直しの回数に上限</strong>（3回など）を決める。決めないと、終わらずにくり返してしまう</li>
            </ul>
            <h2>Chains：処理をつなぐ・ふり分ける</h2>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>1つの処理</h3><p>テンプレートと AI をセットにして、まとめて動かす</p></article>
              <article class="op"><span class="num">2</span><h3>順につなぐ</h3><p>工場のベルトコンベアのように、前の答えを次の処理に渡す（例：要約 → 英訳）</p></article>
              <article class="op"><span class="num">3</span><h3>安全チェック</h3><p>乱暴なことばなど、よくない入力をはじく。人に使ってもらうアプリには入れておく</p></article>
              <article class="op"><span class="num">4</span><h3>ふり分ける</h3><p>病院の受付のように、入力を見て、どの専門の処理に回すかを AI が決める（Router＝ふり分け役）</p></article>
            </div>
            <p>ふり分けの先を足したら、<strong>その先に回るはずの質問で必ず試します</strong>。思ったとおりに回らないときは、それぞれの先の説明文を直します。「子ども」のように人によって広さがちがうことばは、「0〜6歳」のように範囲を書き足すと、ふり分け役が迷いません。</p>
            <div class="callout">今の LangChain では、部品を記号（|）でつなぐ書き方が中心になっています。名前や書き方が変わっても、「整える・つなぐ・ふり分ける」という考え方は同じです。</div>
          `
      },
      {
        id: "rag",
        title: "Memory と RAG",
        body: `
            <p class="kicker">RAG　6／8</p>
            <h1>会話を思い出させ、外の資料で補う</h1>
            <h2>Memory：何を、どこまで思い出させるか</h2>
            <p>3ページ目のとおり、API は1回ごとに忘れます。名前を名乗ったあと、別のお願いで「名前を覚えてる？」と聞くと、「覚えています」と言いながら名前を聞き返すことさえあります。Memory（＝会話の履歴を、毎回お願い文に入れてくれる部品）は、「覚える」のではなく<strong>毎回「思い出させる」</strong>しくみです。</p>
            <table>
              <thead><tr><th>思い出させ方</th><th>よい所</th><th>気をつける所</th></tr></thead>
              <tbody>
                <tr><td>全部</td><td>正確</td><td>長くなるほど重く、料金がふくらむ</td></tr>
                <tr><td>直近の何回分だけ</td><td>軽い</td><td>古い話は忘れる</td></tr>
                <tr><td>トークンの上限まで</td><td>料金の上限が読める</td><td>上限をこえた古い話は忘れる</td></tr>
                <tr><td>古い話は要約、新しい話はそのまま</td><td>長い会話に向く</td><td>要約の質しだい。「地名や予算などの数字は必ず残す」と要約の仕方を指示する</td></tr>
                <tr><td>今の入力に関係する話だけ</td><td>話題が多くても軽い</td><td>関係の判断がずれることがある</td></tr>
              </tbody>
            </table>
            <p>どれが正解かは、作るアプリしだいです。先に「何を作るか」を決めてから選びます。</p>
            <h2>RAG：AI が知らないことを、資料で補う</h2>
            <p>AI には、知識の締め切り日があります。最近のニュースや、社内だけの資料は知りません。RAG は、質問に合う資料のかけらを探して、お願い文に入れてから答えさせるしくみです。手順は5つで、順番が大事です。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>読みこむ</h3><p>PDF・Word・Web ページなどを読む</p></article>
              <article class="op"><span class="num">2</span><h3>分ける</h3><p>チャンク（＝文書を小さく切ったかたまり）にする。大きさと重なりを決める</p></article>
              <article class="op"><span class="num">3</span><h3>数字にする</h3><p>ベクトル化（＝文の意味を数字の並びに変える）</p></article>
              <article class="op"><span class="num">4</span><h3>しまう</h3><p>ベクトルストア（＝意味で探せるデータベース）に保存する</p></article>
              <article class="op"><span class="num">5</span><h3>取り出す</h3><p>質問に意味が近いかけらを、上から何件か取り出す</p></article>
            </div>
            <p>お願い文に<strong>「資料に答えがなければ、『分かりません』と答えてください」</strong>と1行入れるだけで、もっともらしいうそ（ハルシネーション）がへります。</p>
            <h2>2回目の質問は「言いかえて」から探す</h2>
            <p>会話の2回目に「もう少しくわしく」とだけ聞かれると、その文だけで資料を探しても、関係ないかけらが出てきます。そこで、<strong>履歴と今の質問から、それだけで意味が通る質問に AI に言いかえてもらってから探します</strong>。</p>
            ${talk([
              { do: "言いかえのしくみを、AI に説明してもらうと分かりやすくなります。" },
              { me: `RAG で、会話の履歴を見て質問を言いかえてから探すしくみを、
［「有給休暇は何日？」→「もう少しくわしく」］という例で、3行で説明してください。` },
              { ai: `1. 履歴を見て「もう少しくわしく」を「有給休暇の日数と、取り方のくわしいルールは？」に言いかえます。\n2. 言いかえた文で資料を探します。\n3. 見つけた資料と履歴を合わせて、答えを作ります。` }
            ])}
            <h2>精度を上げる小さなコツ</h2>
            <ul>
              <li><strong>出どころを残す</strong>：資料に、ファイル名や URL などの情報（メタデータ＝データについての説明）をつけて、答えといっしょに出す。あとで確かめられます</li>
              <li><strong>Web ページの余計な文字</strong>：メニューや問い合わせの案内などがまざると、取り出す枠が関係ない文字でうまります</li>
              <li><strong>資料をテーマで分ける</strong>：全部を1か所に入れると、ほかのテーマの資料も引っかかります</li>
              <li><strong>探し方を組み合わせる</strong>：意味の近さで探す方法は言いかえに強く、ことばの一致で探す方法（キーワード検索）は商品番号などに強い。両方を使う方法もあります</li>
            </ul>
            <p>ことばのくわしい説明は <a href="#/course/aiwords" data-link>AI のことばと道具の選び方</a> の RAG のページへ。</p>
          `
      },
      {
        id: "agent",
        title: "AI エージェント",
        body: `
            <p class="kicker">エージェント　7／8</p>
            <h1>道具を選ぶ決め手は、description（説明書き）</h1>
            <p>ふつうの AI は、聞かれたことに答えるだけです。エージェントは、目標を伝えると、<strong>何をどの順でやるかを自分で考えて動きます</strong>。たとえば、メールの文を作るだけでなく、送るところまでやろうとします。</p>
            <div class="callout warn">エージェントの注意は3つです。① 思わぬ動き（ファイルを消す、データを書きかえるなど）。さわってよいフォルダやデータを限り、人が確かめる所をはさみます。② 何回も考え直すので、料金がふえる。くり返しの上限を決めます。③ 答えが出るまで時間がかかる。送信・公開・購入・支払いは<strong>下書きで止めて、ボタンは人が押す</strong>形にします。</div>
            <h2>ReAct：考える → 動く → 見る、をくり返す</h2>
            <p>ReAct（＝考える Reason と、動く Act を合わせたことば）は、エージェントの動き方の基本です。思ったとおりに動かないときは、途中の記録（ログ）を表示させて読みます。</p>
            <table>
              <thead><tr><th>ログのことば</th><th>意味</th></tr></thead>
              <tbody>
                <tr><td>Thought</td><td>AI の考え</td></tr>
                <tr><td>Action</td><td>選んだ道具の名前</td></tr>
                <tr><td>Action Input</td><td>道具に渡したもの（検索することばなど）</td></tr>
                <tr><td>Observation</td><td>道具を使った結果</td></tr>
                <tr><td>Final Answer</td><td>最後の答え</td></tr>
              </tbody>
            </table>
            <p>作る流れはいつも3つです。<strong>① 道具（ツール）を用意する → ② エージェントを動かす係を作る → ③ 入力を渡して動かす</strong>。エージェントが使えるのは、渡した道具だけです。</p>
            <h2>道具は「関数＋名前＋説明書き」</h2>
            <p>ツール（＝エージェントが使える機能）の中身は、ただの関数です。前に作った RAG のチェーンも、関数にして渡せば道具になります。エージェントは、<strong>name（名前）と description（説明書き）だけを見て</strong>、どの道具を使うかを決めます。</p>
            <div class="code-wrap"><button class="copy" type="button">コピー</button><pre>tools = [
    Tool.from_function(
        func=search_service_docs,
        name="service_docs",
        description="自社サービス［サービス名］の機能・料金・使い方の質問に使う。"
                    "例：「料金は？」「特徴は？」",
    ),
    Tool.from_function(
        func=search_hr_docs,
        name="hr_docs",
        description="休みの申請・人事・部署の異動など、社員のきまりの質問に使う。",
    ),
    Tool.from_function(
        func=search_all_docs,
        name="all_docs",
        description="いくつものテーマにまたがる質問や、テーマが分からない質問に使う。",
    ),
]</pre></div>
            <ul>
              <li><strong>一言だけの説明書きにしない</strong>：「開発の質問に使う」だけだと、両方にかかる質問で迷います。2〜3行で、対象と質問の例を書きます</li>
              <li><strong>またがる質問用の道具も用意する</strong>：テーマごとの道具だけだと、「開発と採用の両方にかかわる話は？」で迷います</li>
              <li><strong>想定の質問で試す</strong>：ちがう道具が選ばれたら、説明書きを直します。道具がふえるほど大事です</li>
              <li><strong>道具の一覧はくり返しで作る</strong>：手で1つずつ並べると、ふやしたときに入れ忘れます</li>
            </ul>
            <h2>Callbacks：途中をのぞいて、記録する</h2>
            <p>Callbacks（＝「始まった」「新しい文字が出た」「エラーが出た」「終わった」などのときに、決めた処理を自動で動かすしくみ）は、宅配便の「発送しました」のお知らせのようなものです。主な使いみちは3つです。</p>
            <ul>
              <li><strong>少しずつ表示する</strong>：ChatGPT のように、答えを順に出す（ストリーミング）</li>
              <li><strong>記録を残す</strong>：入力・かかった時間・使ったトークン・エラーをファイルに残す。人に使ってもらうなら、ほぼ必ず入れます</li>
              <li><strong>始まり・終わりに知らせる</strong>：「考えています」「答えを作っています」と画面に出す</li>
            </ul>
            <p>ログの表示は、作っている間はオン、人に使ってもらうときはオフにして、かわりにやさしい表示を出します。</p>
          `
      },
      {
        id: "wrap",
        title: "画面・レビュー・評価と改善・まとめ",
        body: `
            <p class="kicker">まとめ　8／8</p>
            <h1>画面をつけて、使う人の目で直し続ける</h1>
            <h2>Streamlit で画面を作る</h2>
            <p>Streamlit なら、HTML（＝Web ページを書くことば）を知らなくても、短い Python で画面が作れます。</p>
            <div class="code-wrap"><button class="copy" type="button">コピー</button><pre>import streamlit as st

st.title("［旅行の相談］アシスタント")
st.markdown("行き先・日数・予算を書くと、予定の案を出します。")

with st.form("ask"):                     # Enter で送られすぎない
    q = st.text_input("聞きたいこと")
    sent = st.form_submit_button("送る")

if sent and q:
    with st.spinner("答えを作っています…"):   # 待っている間の表示
        answer = ask_ai(q)                   # 前のページまでで作った処理
    st.write(answer)</pre></div>
            <p>画面のアプリでも、API キーはコードに書かず、.env か Streamlit の秘密の値の置き場に入れます。そのファイルも GitHub に上げません。キーが読めないときは、例外処理で「キーが設定されていません」と出します。</p>
            <h2>使う人の目でレビューする</h2>
            ${talk([
              { do: "作ったら、まず自分が使う人になって試します。チェックを AI に手伝ってもらうのも手です。" },
              { me: `この AI アプリを、［料理が苦手な一般の人］の目でレビューしたいです。
試す質問を、ふつうの質問・はんぱな質問・担当外の質問の3種類で5つずつ作ってください。` },
              { ai: `承知しました。\n\nふつうの質問：「鶏むね肉をパサパサにしない焼き方は？」…\n担当外の質問：「沖縄旅行のプランを作って」…` }
            ])}
            <ul>
              <li><strong>担当外の質問は断る</strong>：何でも答えると、料金がかさみ、悪用もされます。「専門外なのでお答えできません」と返すよう決めます</li>
              <li><strong>出典をつけさせる</strong>：本や実績などの事実は、出どころを出させて、本当にあるかを自分で確かめます</li>
              <li><strong>画面のことばはやさしく</strong>：一般の人向けなら「LangChain」「LLM」は書かず、何ができるかを書きます。答えに出る専門用語にも、言いかえを添えるよう指示します</li>
              <li><strong>連打と待ち時間</strong>：送るボタンを何度も押すと、そのたびに料金がかかります。待っている間の表示と、止まったときの時間切れの処理を入れます</li>
              <li><strong>説明と動きを合わせる</strong>：使い方に書いたボタンが本当に動くか、1つずつ試します。入力の例は、ちゃんと答えが出る例にします</li>
            </ul>
            <h2>評価と改善をくり返す</h2>
            <p>一回で完成するアプリは、まずありません。<strong>作る → 評価する → 直し方を決める → 作り直す → もう一度評価する</strong>をくり返します。作り始める前に、だれのためのアプリか・答えの速さや料金の上限・いちばん大事にすること（正しさか、自由な発想か）・「この質問にはこう答えてほしい」という見本の組を決めておきます。</p>
            <p>答えがおかしいときは、資料の質、チャンクの大きさ、取り出す件数、お願い文、会話の履歴、モデルと temperature、ふり分け役の順に、1つずつ疑います。数字を変えた結果は表に記録して比べます。調整する値は1つのファイルにまとめておくと、探す手間がへります。別の AI に答えを採点させる方法（LLM as a Judge）もありますが、採点の基準をはっきり書き、最後は人の目で確かめます。</p>
            <div class="callout warn">人に使ってもらうときは、作った人が責任を持ちます。お客さまの個人情報は入れない、API キーは見せない、公開や支払いのボタンは自分で押す。社内で使うときは、会社のルールを先に確かめます。</div>
            <h2>この講座のまとめ</h2>
            <ul>
              <li>Python は「読める」が先。エラーは最後の行を読み、AI に聞く</li>
              <li>API は記憶を持たない。履歴は自分で渡し、トークンの合計を測る</li>
              <li>API キーは .env に置き、コード・チャット・GitHub に出さない</li>
              <li>LangChain は、テンプレートで整え、出力の形を決め、処理をつなぐ・ふり分ける</li>
              <li>Memory は「思い出させる」。RAG は「探して補う」。2回目の質問は言いかえて探す</li>
              <li>エージェントは description で道具を選ぶ。送信や支払いは人が押す</li>
              <li>画面をつけたら、使う人の目で試し、評価と改善をくり返す</li>
              <li>ライブラリの書き方は変わる。動かないときは公式の説明で確かめる</li>
            </ul>
            <p><a class="btn-orange" href="#/course/code" data-link>はじめての Claude Code へ</a>
            <a class="btn-dark" href="#/" data-link>ホームへ</a></p>
          `
      }
    ]
  };
})();
