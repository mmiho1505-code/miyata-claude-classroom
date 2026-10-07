(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.invoicemake = {
    id: "invoicemake",
    title: "請求書を作ろう（請求書編）",
    subtitle: "ひな形を一度作れば、毎月は明細を伝えるだけ",
    duration: "約30分",
    audience: "チャットで作業を任せる人／事務・経理",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">GOAL</p>
            <h1>ひな形を一度。毎月は宛先と明細だけ</h1>
            <p>毎月、同じ請求書の枠に、宛先と行を入れています。今日はひな形を一度作り、来月からは明細を伝えるだけにします。同じチャットで話します。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>ひな形</h3><p>自社情報入りの請求書のひな形を一度作る</p></article>
              <article class="op"><span class="num">2</span><h3>毎月作る</h3><p>取引先と明細を伝えて、今月の請求書を作る</p></article>
              <article class="op"><span class="num">3</span><h3>確かめて送る</h3><p>金額を検算し、PDFで送って保存する</p></article>
            </div>
            <p>Claude Code でリストからまとめて作る講座は、別の <a href="#/course/invoice" data-link>請求書（道具づくり）</a> です。今日は同じチャットで話しかけるやり方です。</p>
          `
      },
      {
        id: "flow",
        title: "全体の流れ",
        body: `
            <p class="kicker">5ステップ</p>
            <h1>最初だけひな形。あとは毎月くり返す</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>そろえる</h3><p>自社情報をそろえる</p></article>
              <article class="op"><span class="num">2</span><h3>ひな形</h3><p>ひな形を作る</p></article>
              <article class="op"><span class="num">3</span><h3>明細</h3><p>明細を伝える</p></article>
              <article class="op"><span class="num">4</span><h3>検算</h3><p>検算して確かめる</p></article>
              <article class="op"><span class="num">5</span><h3>PDF</h3><p>PDFで送り、保存する</p></article>
            </div>
            <p>1・2は最初の1回だけ。3〜5を毎月くり返します。</p>
          `
      },
      {
        id: "prep",
        title: "準備する3つ",
        body: `
            <p class="kicker">STEP 1</p>
            <h1>今使っている請求書を見ながら、3つ書き出す</h1>
            <table>
              <thead><tr><th>準備するもの</th><th>中身</th></tr></thead>
              <tbody>
                <tr><td>① 自社の情報</td><td>会社名・住所・電話、インボイス登録番号、振込先、（あればロゴ）</td></tr>
                <tr><td>② 取引先の一覧</td><td>正式な会社名、担当者名、締め切りと支払期限</td></tr>
                <tr><td>③ 今月の明細</td><td>品目・数量・単価・税率（手書きメモやExcelでOK）</td></tr>
              </tbody>
            </table>
            <div class="callout">①と②は、今使っている請求書を見ながら書き出すのが近道です。</div>
          `
      },
      {
        id: "rules",
        title: "インボイスの6項目",
        body: `
            <p class="kicker">基本ルール</p>
            <h1>お願い文に「インボイスの記載事項を満たすように」と書く</h1>
            <p>適格請求書に必要な6つです。Claude が入れてくれます。送る前に、自分の目でも見ます。</p>
            <table>
              <thead><tr><th>No.</th><th>書くこと</th></tr></thead>
              <tbody>
                <tr><td>1</td><td>発行する会社の名前と登録番号（T＋13桁）</td></tr>
                <tr><td>2</td><td>取引の年月日</td></tr>
                <tr><td>3</td><td>取引の内容（軽減税率8%の品目はその旨も）</td></tr>
                <tr><td>4</td><td>税率ごとに分けた合計金額と、適用する税率</td></tr>
                <tr><td>5</td><td>税率ごとの消費税額</td></tr>
                <tr><td>6</td><td>請求先（受け取る会社）の名前</td></tr>
              </tbody>
            </table>
          `
      },
      {
        id: "ask",
        title: "ひな形を作る",
        practice: true,
        body: `
            <p class="kicker">STEP 2　最初の1回だけ　練習</p>
            <h1>同じチャットに貼る。［　］は自社の数字に直す</h1>
            <p>claude.ai またはパソコンの Claude でチャットを開きます。演習では、このままの架空データで構いません。</p>
            ${box(`当社の請求書のひな形をExcelで作ってください。

・会社情報：株式会社 練習商事、東京都千代田区練習1-1-1、03-0000-0000
・登録番号：T1234567890123
・振込先：練習銀行 本店 普通 1234567 カ）レンシュウショウジ
・インボイス制度の記載事項を満たすように
・品目・数量・単価・税率を入れると、金額・消費税・合計が自動で計算される
・10%と8%は分けて集計。支払期限は翌月末
・社名は「株式会社 宮田財務」向けの練習用です

PDFにしたときA4縦1枚に収まるようにしてください。`)}
          `
      },
      {
        id: "monthly",
        title: "毎月は宛先と明細",
        practice: true,
        body: `
            <p class="kicker">STEP 3　毎月</p>
            <h1>宛先と行を伝える。写真の明細ならドラッグ</h1>
            ${box(`ひな形を使って、株式会社〇〇あての10月分の請求書を作ってください。

・請求書番号：2026-10-001
・発行日：10月31日
・明細：月次顧問料 1件 50,000円（10%）
　　　　資料作成費 2件 15,000円（10%）
・Excelと、送付用のPDFの両方でください`)}
            <p>明細がExcelやメモの写真なら、入力欄にドラッグして添付すればOKです。</p>
          `
      },
      {
        id: "image",
        title: "できあがりのイメージ",
        body: `
            <p class="kicker">完成形</p>
            <h1>ご請求金額 88,000円。電卓で見てから送る</h1>
            <p>数量×単価で金額が自動計算。税率ごとの合計と消費税も表示されます。数字・会社名は例です。</p>
            <table>
              <thead><tr><th>品目</th><th>数量</th><th>単価</th><th>金額</th></tr></thead>
              <tbody>
                <tr><td>月次顧問料</td><td>1</td><td>50,000</td><td>50,000</td></tr>
                <tr><td>資料作成費</td><td>2</td><td>15,000</td><td>30,000</td></tr>
              </tbody>
            </table>
            <p>10%対象 80,000円 ／ 消費税（10%）8,000円 ／ 合計 88,000円</p>
            <div class="callout">送る前に、自分の目と電卓で確かめます。</div>
          `
      },
      {
        id: "check",
        title: "送る前の5つの確認",
        body: `
            <p class="kicker">STEP 4</p>
            <h1>宛名、電卓、税率、日付、登録番号</h1>
            <ol>
              <li>宛名が正式な会社名か（株式会社の前後も）</li>
              <li>数量×単価と合計を電卓で検算したか</li>
              <li>税率と消費税額が正しいか（8%の品目はないか）</li>
              <li>日付・請求書番号が今月のものか（先月のままでないか）</li>
              <li>登録番号・振込先が1文字も違っていないか</li>
            </ol>
          `
      },
      {
        id: "batch",
        title: "まとめて作る",
        practice: true,
        body: `
            <p class="kicker">慣れてきたら</p>
            <h1>一覧と明細を添付して、取引先ごとに出す</h1>
            ${box(`添付の取引先一覧と今月の売上明細から、取引先ごとに10月分の請求書PDFを作ってください。最後に、請求書番号・宛先・金額の一覧表もください`)}
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>一覧表が便利</h3><p>送り漏れの確認と、入金確認に使える</p></article>
              <article class="op"><span class="num">2</span><h3>検算は全件</h3><p>一覧表の合計と、売上明細の合計が合うか</p></article>
            </div>
          `
      },
      {
        id: "send",
        title: "PDFで送って保存",
        body: `
            <p class="kicker">STEP 5</p>
            <h1>Excelのまま送らない。名前をそろえて残す</h1>
            <table>
              <thead><tr><th>すること</th><th>ポイント</th></tr></thead>
              <tbody>
                <tr><td>PDFで送る</td><td>Excelのままではなく、書き換えられないPDFで送る</td></tr>
                <tr><td>名前をそろえる</td><td>例：「2026-10_株式会社〇〇_請求書.pdf」</td></tr>
                <tr><td>データで保存</td><td>メールで送った請求書は、PDFのまま保存しておく</td></tr>
                <tr><td>入金を確認</td><td>支払期限の後、一覧表に入金済みの印をつける</td></tr>
              </tbody>
            </table>
          `
      },
      {
        id: "tips",
        title: "直したいとき",
        practice: true,
        body: `
            <p class="kicker">直し</p>
            <h1>行を足す、宛名を直す、期限を変える。続きに書く</h1>
            ${box(`交通費 1件 3,200円（10%）を追加して`)}
            ${box(`最後に『お値引き −5,000円』の行を入れて`)}
            ${box(`宛名を『〇〇株式会社 経理部 御中』に`)}
            ${box(`この取引先だけ支払期限を翌々月10日に`)}
            ${box(`右上にロゴを入れて`)}
            <p>ロゴは、お願いと一緒に画像を添付します。</p>
          `
      },
      {
        id: "tategaki",
        title: "縦書きにしたい",
        practice: true,
        body: `
            <p class="kicker">応用　練習</p>
            <h1>横書きのひな形を、縦書きに作り直してもらう</h1>
            <p>昔からのお客さまには、縦書きの請求書・見積書で出したい。そんなときも、作った会話の続きに頼みます。縦書きはExcelが苦手なので、Wordで作ってもらい、PDFにして送ります。</p>
            ${box(`今の請求書のひな形を、縦書きにしたものもWordで作ってください。
・右から左へ読む縦書き。宛名は右端、自社名と印の場所は左下
・合計金額は漢数字で「金八万八千円也」のように大きく
・明細の数字は縦にそろうように。数字は漢数字（例：五万円）
・横書きのひな形も残し、どちらも使えるようにする
・PDFにしたときA4縦1枚に収まるように`)}
            ${box(`見積書も同じ縦書きのひな形をWordで作ってください。題名は「御見積書」、有効期限は発行日から30日にしてください。`)}
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>明細が多い</h3><p>表紙（宛名・合計・自社名）だけ縦書きにして、明細は横書きの別紙にしてもらう</p></article>
              <article class="op"><span class="num">2</span><h3>数字の見落とし</h3><p>漢数字は読み違えやすい。横書き版と合計が同じか、電卓で見比べる</p></article>
              <article class="op"><span class="num">3</span><h3>送るときはPDF</h3><p>縦書きもWordのまま送らない。PDFにして見た目を確かめる</p></article>
            </div>
          `
      },
      {
        id: "mitsumori",
        title: "外壁塗装の松竹梅見積もり",
        practice: true,
        body: `
            <p class="kicker">応用　修理・工事の見積書　練習</p>
            <h1>面積と単価表を渡すと、3つの案を並べて出してくれる</h1>
            <p>外壁塗装のお客さまに「安い案・おすすめ・いちばん長持ち」を並べて見せると、選んでもらいやすくなります。現地で測った面積と、自社の単価表を渡して、松竹梅の3案を1つの見積書にまとめてもらいます。</p>
            <div class="ops">
              <article class="op"><span class="num">梅</span><h3>おさえめ</h3><p>例：シリコン塗料。耐用年数の目安が短めで、いちばん安い</p></article>
              <article class="op"><span class="num">竹</span><h3>おすすめ</h3><p>例：ラジカル塗料。値段と長持ちのつり合いがよい</p></article>
              <article class="op"><span class="num">松</span><h3>長持ち</h3><p>例：フッ素・無機塗料。いちばん高いが、塗り替えまでが長い</p></article>
            </div>
            <h2>1. 現地で測ったものと、単価表を用意する</h2>
            <ul>
              <li>外壁の塗る面積（㎡）、足場の面積（㎡）、シーリングの長さ（m）</li>
              <li>付帯部（雨どい・破風・軒天など）の有無</li>
              <li>自社の単価表（ExcelやメモをドラッグしてOK）</li>
            </ul>
            <h2>2. 同じチャットに頼む</h2>
            ${box(`外壁塗装の見積書を、松・竹・梅の3案を並べてExcelで作ってください。単価は添付の単価表だけを使い、表に無いものは空欄にして私に聞いてください。

・お客さま：［お客さまの名前］様邸
・外壁の塗装面積：150㎡
・足場の面積：220㎡
・シーリング打ち替え：120m
・付帯部：雨どい・破風・軒天あり

3案の違い
・梅：シリコン塗料
・竹：ラジカル塗料（おすすめの印をつける）
・松：フッ素塗料

各案に入れる項目：足場、飛散防止ネット、高圧洗浄、養生、下地補修、下塗り・中塗り・上塗り、シーリング、付帯部塗装、諸経費
・数量×単価で金額が自動で計算される
・案ごとに小計・消費税（10%）・合計
・いちばん上に3案の合計と、耐用年数の目安・保証年数を横に並べた比べる表
・工期の目安、有効期限（発行日から30日）、支払い条件の欄
・PDFにしたときA4に収まるように`)}
            <p><strong>［お客さまの名前］</strong> は穴埋めです。面積と塗料の名前は、自分の現場の数字に直します。単価表が無いまま頼むと、Claude が相場らしい数字を入れてしまうことがあります。単価は必ず自社のものを渡します。</p>
            <h2>3. 直すときも続きに書く</h2>
            ${box(`竹の案に、ベランダ防水（トップコート）20㎡を追加して`)}
            ${box(`3案とも、諸経費を合計の5%で計算して`)}
            ${box(`お客さま向けに、3案の違いを中学生にも分かる言葉で3行ずつ書き足して`)}
            ${box(`縦書きの御見積書の表紙もつけて。合計は竹の案の金額で`)}
            <div class="callout warn">面積・数量・単価は、現地の記録と単価表で1つずつ確かめます。3案の合計は電卓で検算してから出します。耐用年数や保証は、自社で約束できる年数だけを書きます。</div>
          `
      },
      {
        id: "safety",
        title: "3つの約束",
        body: `
            <p class="kicker">注意</p>
            <h1>送るのは人。番号は通帳で。扱ってよいか聞く</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>送るのは人</h3><p>Claudeが作るのは下書き。確認してから自分で送る</p></article>
              <article class="op"><span class="num">2</span><h3>番号は原本で</h3><p>登録番号・振込先は通帳や通知と照合</p></article>
              <article class="op"><span class="num">3</span><h3>社内ルール</h3><p>取引先の情報を Claude で扱ってよいか、社長に確認</p></article>
            </div>
          `
      },
      {
        id: "practice",
        title: "20分で練習する",
        practice: true,
        body: `
            <p class="kicker">演習</p>
            <h1>架空の会社でひな形、1枚、電卓、値引き、PDF</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>ひな形</h3><p>架空の会社情報で、請求書のひな形を作る</p></article>
              <article class="op"><span class="num">2</span><h3>1枚作る</h3><p>明細2〜3行で、今月の請求書を作る</p></article>
              <article class="op"><span class="num">3</span><h3>検算する</h3><p>合計と消費税を電卓で計算して比べる</p></article>
              <article class="op"><span class="num">4</span><h3>直してPDF</h3><p>値引きの行を足して、PDFで受け取る</p></article>
            </div>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">覚えておくこと</p>
            <h1>ひな形、明細、電卓、PDF</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>ひな形</h3><p>最初にひな形を作る（インボイスの記載事項入り）</p></article>
              <article class="op"><span class="num">2</span><h3>毎月</h3><p>毎月は宛先と明細を伝えるだけ</p></article>
              <article class="op"><span class="num">3</span><h3>検算してPDF</h3><p>送る前に電卓で検算し、PDFで送って保存</p></article>
            </div>
            <p>最初の数か月は、今までの請求書と比べて答え合わせしましょう。</p>
            <p><a href="materials/invoicemake.pdf" download>スライドPDF（請求書編）</a></p>
            <p><a class="btn-dark" href="#/" data-link>ホームへ</a></p>
          `
      }
    ]
  };

  Object.assign(CLASSROOM.quizzes, {
    invoicemake: [
      {
        q: "最初の1回だけ作るものは？",
        choices: ["毎月新しいデザイン", "自社情報入りの請求書のひな形", "パスワード付きのホームページ"],
        a: 1,
        explain: "ひな形にインボイスの記載事項を入れておけば、毎月は宛先と明細だけです。"
      },
      {
        q: "お願い文に書いておくとよい一文は？",
        choices: ["「いい感じに」", "「インボイス制度の記載事項を満たすように」", "「口座の暗証番号も入れて」"],
        a: 1,
        explain: "適格請求書に必要な項目を、Claude が入れてくれます。"
      },
      {
        q: "送る前に必ずすることは？",
        choices: ["宛名・数量×単価・税率・日付・登録番号を確かめる", "Excelのまま送る", "Claudeに送信まで任せる"],
        a: 0,
        explain: "作るのは下書き。電卓で検算し、PDFで自分から送ります。"
      },
      {
        q: "登録番号や振込先の確かめ方は？",
        choices: ["画面の見た目だけでOK", "通帳や通知など原本と照合する", "チャットにカード番号を貼る"],
        a: 1,
        explain: "大事な番号は原本で確認します。"
      },
      {
        q: "請求書や見積書を縦書きにしたいときは？",
        choices: ["Excelのセルを1文字ずつ自分で並べ直す", "会話の続きに「縦書きにしたものもWordで」と頼み、PDFにして横書き版と合計を見比べる", "縦書きは作れないので諦める"],
        a: 1,
        explain: "縦書きはWordが得意です。漢数字は読み違えやすいので、合計を電卓で確かめます。"
      },
      {
        q: "外壁塗装の松竹梅見積もりで、単価はどうしますか？",
        choices: ["Claudeに相場で決めてもらう", "自社の単価表を添付し、表に無いものは聞いてもらう", "お客さまに決めてもらう"],
        a: 1,
        explain: "単価表が無いと、相場らしい数字が入ることがあります。単価は自社のものを渡します。"
      }
    ]
  });
})();
