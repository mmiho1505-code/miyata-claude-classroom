(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.cowork = {
    id: "cowork",
    title: "はじめての Claude Cowork",
    subtitle: "同じチャットで。請求書・経費から、資料・連携・定期実行まで",
    duration: "約35分",
    audience: "経営者・個人事業主／パソコン作業をAIに任せたい人",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        was: ["cowork/goal", "cowork/what", "cowork/compare", "cowork/cando", "cowork/map"],
        body: `
            <p class="kicker">GOAL　1／7</p>
            <h1>月末の請求書を、同じチャットに任せる</h1>
            <p>月末です。取引先リストを開いて、請求書を1件ずつ作っています。机の上にはレシート。30分が、そのまま消えます。</p>
            <p>以前の Cowork は、今このチャットの中です。「このExcelから、9月分の請求書を作って」と頼むと、<strong>フォルダに入ったPDF</strong>で返ってきます。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>資料を作る</h3><p>財務資料・セミナー教材・提案書・ひな形</p></article>
              <article class="op"><span class="num">2</span><h3>ファイルを整理する</h3><p>仕分け・PDF検索・集計・文字起こし</p></article>
              <article class="op"><span class="num">3</span><h3>つないで使う</h3><p>Gmail・カレンダー・ドライブ</p></article>
              <article class="op"><span class="num">4</span><h3>自動でくり返す</h3><p>毎朝ブリーフィング・毎月レポート</p></article>
            </div>
          `
      },
      {
        id: "docs",
        title: "資料を作る・整理する",
        practice: true,
        was: ["cowork/docs", "cowork/finance", "cowork/files"],
        body: `
            <p class="kicker">練習　2／7</p>
            <h1>数値やフォルダを渡して、頼むだけ</h1>
            <p>近い文をコピーして貼ります。数字とコメントは、人が見てからです。</p>
            <h2>資料を作る</h2>
            ${box(`毎月の試算表(Excel)から、銀行提出用の財務分析資料をWordで作って。売上・粗利・利益の推移グラフ、前年同月比、資金繰りの所見コメントも。フォーマットは毎回同じで。`)}
            ${box(`添付の内容で、経営者向けセミナー(90分・初心者向け)のレジュメと配布資料を作って。`)}
            ${box(`〇〇様への提案書のドラフトを作って。丁寧だけど堅すぎない文体で、A4・1枚に。`)}
            <h2>ファイルを整理する</h2>
            ${box(`このフォルダを種類ごとに整理して、ファイル名に日付(YYYY-MM-DD)を付けて。`)}
            ${box(`契約書フォルダで、arbitration（仲裁）に触れているものを教えて。該当箇所の要点も。`)}
            ${box(`この売上CSVを月別・商品別に集計してグラフにして。空欄や表記ゆれも直して。`)}
            ${box(`このスキャンPDF(領収書)から、日付・金額・宛名を読み取って一覧表(Excel)にして。`)}
          `
      },
      {
        id: "apps",
        title: "つなぐ・くり返す",
        practice: true,
        was: ["cowork/apps", "cowork/schedule", "cowork/briefing"],
        body: `
            <p class="kicker">練習　3／7</p>
            <h1>Gmailやカレンダーにつなぎ、時間を決めて預ける</h1>
            <ol>
              <li>Gmail・カレンダー・ドライブを一度“接続”する（画面の案内どおり。パスワード入力は自分で）</li>
              <li>届けてほしい内容と時間を伝える</li>
              <li>定期タスクとして登録・確認する</li>
            </ol>
            ${box(`今日の未読メールを重要度順にまとめて。返信が要るものは下書きも作って（送信はしないで）。`)}
            ${box(`来週の予定を教えて。空き時間に〇〇の打合せ候補を3つ出して。`)}
            ${box(`ドライブから必要な資料を探して、最新版のリンクを教えて。`)}
            ${box(`毎朝7時に“今日のブリーフィング”を送って。内容は、今日の予定一覧、返信が必要そうな重要メールの要約、今日やるべきことの提案。忙しい朝でも1分で読める長さで。`)}
            ${box(`毎月1日に、先月分の試算表からこの資料を作って、と定期実行に登録して。`)}
            ${box(`毎週月曜に、〇〇業界の新しいニュースを3件、要点つきでまとめて。`)}
          `
      },
      {
        id: "setup",
        title: "準備",
        was: ["cowork/theme", "cowork/setup"],
        body: `
            <p class="kicker">SETUP　4／7</p>
            <h1>フォルダを接続して、素材を入れておく</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>開く</h3><p>claude.ai または Claude デスクトップアプリ（フォルダ接続はパソコンが便利）</p></article>
              <article class="op"><span class="num">2</span><h3>新しいチャット</h3><p>左に Cowork が無くても探さない</p></article>
              <article class="op"><span class="num">3</span><h3>フォルダを接続</h3><p>請求書・経費を入れておくフォルダを許可する</p></article>
              <article class="op"><span class="num">4</span><h3>素材を入れる</h3><p>ひな形・取引先リスト・明細CSV・レシート画像</p></article>
            </div>
            <div data-pic="folder" data-cap="作業フォルダを許可する"></div>
            <p>接続していないと「ファイルが見つからない」と言われます。まずは<strong>1社ぶんから</strong>試します。</p>
          `
      },
      {
        id: "step1",
        title: "請求書を作る",
        practice: true,
        was: ["cowork/step1"],
        body: `
            <p class="kicker">STEP 1　5／7</p>
            <h1>請求書を自動で作る</h1>
            <p>「いつ・どの形式・どこに保存」まで書くと、仕上がりが安定します。</p>
            ${box(`添付の取引先リスト（clients.xlsx）をもとに、9月分の請求書を作ってください。ひな形は invoice_template.xlsx を使い、取引先ごとに1ファイルずつPDFで、invoices/2026-09 フォルダに保存して。`)}
            <div data-pic="check" data-cap="操作：PDFを開いて、宛名と金額を指差し確認してから送る"></div>
          `
      },
      {
        id: "step2",
        title: "経費と毎月の自動化",
        practice: true,
        was: ["cowork/step2", "cowork/step3"],
        body: `
            <p class="kicker">STEP 2・3　6／7</p>
            <h1>経費を集計し、毎月1日に予約する</h1>
            ${box(`keihi フォルダのレシート画像と明細CSVを読み取って、勘定科目ごとに9月の経費一覧（Excel）を作ってください。各科目の合計と総合計、先月比のメモも付けて。判断に迷う費目はコメントで教えて。`)}
            <p>分類のルール（例：交通費と会議費の分け方）を一言添えると精度が上がります。</p>
            ${box(`毎月1日に、先月の請求・経費・月次レポートをまとめて作って。`)}
          `
      },
      {
        id: "summary",
        title: "安全とつまずき",
        was: ["cowork/tips", "cowork/safety", "cowork/trouble", "cowork/summary"],
        body: `
            <p class="kicker">まとめ　7／7</p>
            <h1>ゴール・素材・形式を伝える。最後は人が見る</h1>
            <div class="callout warn">メール送信・支払い・ファイル削除は、自分がOKしてから。請求書の宛名と金額は、送る前に必ず自分の目で確認します。口座番号・マイナンバーは入力しません。</div>
            <div class="qa"><p><strong>Q. ファイルが見つからない</strong></p><p>フォルダの接続を確認。ファイル名も正確に伝える。</p></div>
            <div class="qa"><p><strong>Q. 思っていた形式と違う</strong></p><p>「PDFで」「1社1ファイルで」と具体的に指定して作り直す。</p></div>
            <div class="qa"><p><strong>Q. 途中で止まる</strong></p><p>一度に頼みすぎず、STEP1→2と分けて頼む。</p></div>
            <div class="qa"><p><strong>Q. 日本語の表示が崩れる</strong></p><p>「◯◯フォントで」と指定する。</p></div>
          `
      }
    ]
  };
})();
