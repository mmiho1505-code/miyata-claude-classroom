(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.invoice = {
    id: "invoice",
    title: "請求書と経費の自動化ツール",
    subtitle: "リストから請求書PDFを一括で作り、領収書を科目ごとに月次集計する",
    duration: "約50分",
    audience: "Claude Code インストール済み／初心者向け・手順つき",
    lessons: [
      {
        id: "goal",
        title: "請求書：材料をそろえて作る",
        practice: true,
        was: [
          "invoice/goal",
          "invoice/words",
          "invoice/setup",
          "invoice/flow",
          "invoice/step1",
          "invoice/step2"
        ],
        body: `
            <p class="kicker">請求書　1／5</p>
            <h1>リストとひな形から、請求書PDFを作るツール</h1>
            <p>月末です。clients.xlsx を開いて、1社ずつPDFを作っています。ひな形は同じなのに、手作業が続きます。</p>
            <p>取引先リストとひな形を渡して、1社1PDFで一括生成するツールを Claude Code に作ってもらいます。まだ Code が入っていない人は <a href="#/course/code" data-link>Claude Code講座</a> から。</p>
            <div data-pic="invoice" data-cap="リストから1社1PDF。フォルダに整理して出力"></div>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>フォルダに置く</h3><p>取引先リスト（clients.xlsx）と請求書ひな形（invoice_template.xlsx）。PDFの保存先も決める</p></article>
              <article class="op"><span class="num">2</span><h3>中身を確認させる</h3><p>Claude Code を起動して、下の1つ目を貼る</p></article>
              <article class="op"><span class="num">3</span><h3>ツールを作らせる</h3><p>「いつ・どの形式・どこに保存」まで書いた2つ目を貼る</p></article>
            </div>
            ${box(`請求書を一括で作るツールを作りたいです。まず、用意した取引先リスト(clients.xlsx)とひな形(invoice_template.xlsx)の中身を確認して、作れそうか教えて。`)}
            ${box(`clients.xlsx の取引先リストと invoice_template.xlsx を使い、月を指定すると全社ぶんの請求書をPDFで作るツールを作って。1社1ファイルで invoices/年-月 に保存。まずは自分のPCで動く形で。`)}
          `
      },
      {
        id: "run",
        title: "1社で試して、全件、毎月ツールに",
        practice: true,
        was: ["invoice/step3", "invoice/step4", "invoice/step5"],
        body: `
            <p class="kicker">請求書　2／5</p>
            <h1>1社で検品してから全件。毎月は呼び出すだけ</h1>
            <p>いきなり全社ぶんは作りません。1社のPDFで宛名と金額を確かめてから広げます。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>1社だけ作る</h3><p>金額・宛名・日付・体裁を自分の目で見る</p></article>
              <article class="op"><span class="num">2</span><h3>全件を作る</h3><p>作った件数が合っているかを必ず見る</p></article>
              <article class="op"><span class="num">3</span><h3>保存して毎月使う</h3><p>見積書にも同じ仕組みを使う</p></article>
            </div>
            ${box(`まず1社ぶんだけ作って。金額・宛名・日付が合っているか、体裁がひな形どおりか、私が確認できるように見せて。`)}
            ${box(`問題なければ、9月分の全社ぶんを一括で作って invoices/2026-09 に保存して。作った件数と、うまくいかなかったものがあれば教えて。`)}
            ${box(`この手順を“いつもの請求書作成”として保存して、毎月呼び出せるようにして。日付は実行する月を自動で入れて。同じ仕組みで見積書も作れるようにして。`)}
          `
      },
      {
        id: "expense",
        title: "経費：材料と仕分けルール",
        practice: true,
        was: [
          "expense/goal",
          "expense/words",
          "expense/setup",
          "expense/flow",
          "expense/step1",
          "expense/step2"
        ],
        body: `
            <p class="kicker">経費　3／5</p>
            <h1>領収書と明細を、科目ごとに仕分ける</h1>
            <p>レシート画像と明細CSVを keihi フォルダにまとめ、分け方のルールを先に伝えます。</p>
            <div data-pic="expense" data-cap="読み取り → 自動仕分け → 月次集計"></div>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>keihi フォルダにまとめる</h3><p>レシート画像はできるだけ鮮明に。明細は日付・金額・内容があるもの</p></article>
              <article class="op"><span class="num">2</span><h3>読み取れるか聞く</h3><p>下の1つ目を貼る</p></article>
              <article class="op"><span class="num">3</span><h3>ルールを伝える</h3><p>交通費・会議費などの分け方。迷う費目はまとめず聞いてもらう</p></article>
            </div>
            ${box(`経費を仕分けして集計するツールを作りたいです。keihiフォルダの中の領収書画像と明細CSVを確認して、読み取れそうか教えて。`)}
            ${box(`仕分けのルールはこうです。交通費＝電車・タクシー、会議費＝打合せの飲食、消耗品費＝文具など。迷う費目はまとめず、コメントで私に聞いて。`)}
          `
      },
      {
        id: "tally",
        title: "経費：集計・確認・毎月",
        practice: true,
        was: ["expense/step3", "expense/step4", "expense/step5"],
        body: `
            <p class="kicker">経費　4／5</p>
            <h1>科目別にExcelで集計し、自分で確認して、毎月回す</h1>
            <p>出力はExcelにすると、あとで自分でも直せます。分類の最終判断は自分です。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>集計させる</h3><p>科目別の合計・総合計・先月比</p></article>
              <article class="op"><span class="num">2</span><h3>確認して直す</h3><p>合計と分類ミス、迷った費目を見る</p></article>
              <article class="op"><span class="num">3</span><h3>保存して毎月実行</h3><p>月末作業が実行1回になる</p></article>
            </div>
            ${box(`keihiフォルダのレシート画像と明細CSVを読み取って、決めたルールで勘定科目ごとに9月の経費一覧(Excel)を作って。各科目の合計・総合計・先月比のメモも付けて。`)}
            ${box(`合計が合っているか確認して。この費目は交際費に分類し直して。判断に迷ったと言っていたものは、一覧にして見せて。`)}
            ${box(`この集計手順を保存して、毎月まとめて実行できるようにして。先月分を対象に、合計と前月比まで出す形で。`)}
          `
      },
      {
        id: "check",
        title: "つまずいた時と、送る前の確認",
        was: [
          "invoice/trouble",
          "invoice/safety",
          "invoice/summary",
          "expense/trouble",
          "expense/safety",
          "expense/summary"
        ],
        body: `
            <p class="kicker">確認　5／5</p>
            <h1>ずれたら列を具体的に伝える。最後は人が見る</h1>
            <p>うまくいかない時は、エラー文やずれた箇所をそのまま貼って直してもらいます。</p>
            <ul>
              <li><strong>金額・読み取りがずれる</strong> … どの列が金額・数量・日付かを具体的に伝える。画像は鮮明に</li>
              <li><strong>体裁が崩れる</strong> … ひな形を見せて「この通りの見た目で」</li>
              <li><strong>文字化けする</strong> … 「日本語が崩れない形式で」とフォントや形式を指定</li>
              <li><strong>分類・合計が違う</strong> … ルールを具体的にし、対象の期間を確認。「数値として集計して」と指定</li>
              <li><strong>ファイルが見つからない</strong> … フォルダとファイル名（拡張子まで）を確認</li>
            </ul>
            <div class="callout warn">請求書の金額・宛名と経費の合計は、送る前・出す前に必ず自分の目で確認します。送付は自分で行い、AIに勝手に送信させません。取引先や経費のデータは外部に出さず、領収書の原本は保管します。まずは1〜2社、1か月ぶんで試します。</div>
          `
      }
    ]
  };
})();
