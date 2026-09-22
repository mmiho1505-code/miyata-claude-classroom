window.CLASSROOM = {
  courses: {
    cowork: {
      id: "cowork",
      title: "はじめての Claude Cowork",
      subtitle: "やり方ガイドつき。請求書・経費から、資料・連携・定期実行まで",
      duration: "約55分",
      audience: "経営者・個人事業主／パソコン作業をAIに任せたい人",
      lessons: [
        {
          id: "goal",
          title: "今日のゴール",
          body: `
            <p class="kicker">GOAL</p>
            <h1>この講座が終わると、できること</h1>
            <p>チャットは少し使ったことがある方向けの実践講座です。むずかしい設定より、「任せて、ラクをする」体験を大事にします。</p>
            <div class="steps">
              <ol>
                <li><strong>Coworkが何かわかる</strong> … チャットとの違いと、何を任せられるかを理解する</li>
                <li><strong>請求書・経費のツールを自分で作れる</strong> … 毎月のひな形作業をAIに指示して仕上げる</li>
                <li><strong>くり返し作業を自動化する第一歩</strong> … 一度作った手順を毎月くり返し使えるようにする</li>
              </ol>
            </div>
            <p>ゴールは、自分専用の作業ツールを一度作って、毎月ラクをすることです。</p>
          `
        },
        {
          id: "what",
          title: "Coworkとは",
          body: `
            <p class="kicker">WHAT</p>
            <h1>Cowork（コワーク）とは？</h1>
            <p>Claudeアプリの中にある、パソコンのファイルや作業を<strong>任せられるモード</strong>です。</p>
            <ul>
              <li><strong>ファイルを読む・作る</strong> … Excel・Word・PDF・スライドなどを実際に作成</li>
              <li><strong>作業を最後までやる</strong> … 下ごしらえから仕上げ・保存まで代行</li>
              <li><strong>つながる・くり返す</strong> … フォルダやGmail等と連携し、毎月自動でも実行</li>
            </ul>
            <div class="callout">たとえるなら、チャットは「相談相手」、Coworkは実際に手を動かす「作業アシスタント」です。</div>
          `
        },
        {
          id: "compare",
          title: "チャットとの違い",
          body: `
            <p class="kicker">COMPARE</p>
            <h1>「チャット」と「Cowork」の違い</h1>
            <p class="lead">同じ日本語で頼んでも、返ってくるものが違います。チャットは<strong>相談相手</strong>、Coworkは<strong>作業を代行する相棒</strong>です。</p>
            <div class="vs-board">
              <article class="vs-card is-chat">
                <span class="vs-badge muted">相談する</span>
                <h3>チャット</h3>
                <p class="vs-one">答えを文章で教えてくれる</p>
                <div class="pic" data-pic="chat"></div>
                <ul>
                  <li>その場で会話が完結する</li>
                  <li>作った内容はコピペして自分で仕上げる</li>
                  <li>毎回、最初から頼み直す</li>
                </ul>
              </article>
              <article class="vs-card is-work">
                <span class="vs-badge hot">任せる</span>
                <h3>Cowork</h3>
                <p class="vs-one">仕上がったファイルで返してくれる</p>
                <div class="pic" data-pic="cowork"></div>
                <ul>
                  <li>フォルダやアプリ（Gmail等）につながる</li>
                  <li>仕上げ・保存まで作業を代行する</li>
                  <li>手順を保存し、毎月くり返せる</li>
                </ul>
              </article>
            </div>
            <h2>くらべてみると</h2>
            <div class="vs-table" role="table">
              <div class="vs-head" role="row">
                <span role="columnheader">見るところ</span>
                <span role="columnheader">チャット</span>
                <span role="columnheader">Cowork</span>
              </div>
              <div class="vs-row" role="row">
                <span role="rowheader">返ってくるもの</span>
                <span class="dim" data-label="チャット" role="cell">文章の答え</span>
                <span class="hl" data-label="Cowork" role="cell">できたファイル</span>
              </div>
              <div class="vs-row" role="row">
                <span role="rowheader">自分の作業</span>
                <span class="dim" data-label="チャット" role="cell">コピペして仕上げる</span>
                <span class="hl" data-label="Cowork" role="cell">保存まで任せる</span>
              </div>
              <div class="vs-row" role="row">
                <span role="rowheader">つながるもの</span>
                <span class="dim" data-label="チャット" role="cell">会話の画面だけ</span>
                <span class="hl" data-label="Cowork" role="cell">フォルダ・Gmailなど</span>
              </div>
              <div class="vs-row" role="row">
                <span role="rowheader">くり返し</span>
                <span class="dim" data-label="チャット" role="cell">毎回、最初から</span>
                <span class="hl" data-label="Cowork" role="cell">手順を保存して毎月</span>
              </div>
            </div>
            <div class="callout ok">いちばん覚えたいこと：Coworkは「答え」ではなく<strong>仕上がったファイル</strong>で返ってきます。</div>
          `
        },
        {
          id: "cando",
          title: "できること",
          body: `
            <p class="kicker">CAN DO</p>
            <h1>Coworkでできること</h1>
            <ul>
              <li><strong>資料作成</strong> … Excel・Word・PDF・スライドをゼロから作成</li>
              <li><strong>ファイル整理</strong> … フォルダの中を分類・リネーム・まとめる</li>
              <li><strong>データ集計</strong> … CSVや明細を表・グラフに集計する</li>
              <li><strong>アプリ連携</strong> … Gmail・Googleドライブ・カレンダー等と接続</li>
              <li><strong>自分専用ツール作成</strong> … よく使う作業をツール化して再利用</li>
              <li><strong>定期実行</strong> … 毎月◯日に自動で実行するよう予約</li>
            </ul>
            <p>この講座では、できることを4つに分けて見てから、請求書と経費で体験します。</p>
          `
        },
        {
          id: "map",
          title: "できること4つ",
          body: `
            <p class="kicker">MAP</p>
            <h1>コワークでできる4つのこと</h1>
            <p>黒い画面は不要です。日本語で「〇〇して」と頼むだけです。Codeは本格的な開発、Coworkは日々の事務、という住み分けです。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>資料を作る</h3><p>財務資料・セミナー教材・提案書・ひな形</p></article>
              <article class="op"><span class="num">2</span><h3>ファイルを整理する</h3><p>仕分け・PDF検索・集計・文字起こし</p></article>
              <article class="op"><span class="num">3</span><h3>つないで使う</h3><p>Gmail・カレンダー・ドライブ</p></article>
              <article class="op"><span class="num">4</span><h3>自動でくり返す</h3><p>毎朝ブリーフィング・毎月レポート</p></article>
            </div>
            <div class="callout">画面で完結し、今あるファイルやGmailをそのまま扱えます。事務作業向きです。</div>
          `
        },
        {
          id: "docs",
          title: "資料・ドキュメントを作る",
          practice: true,
          body: `
            <p class="kicker">CATEGORY 1</p>
            <h1>数値や要点を渡すだけで、ドラフト完成</h1>
            <h2>銀行提出用の財務分析資料</h2>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>この試算表(Excel)から、銀行提出用の財務分析資料をWordで作って。売上・利益の推移グラフと、資金繰りのコメントも入れて。</pre>
            </div>
            <h2>セミナーのレジュメ・配布資料</h2>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>添付の内容で、経営者向けセミナー(90分・初心者向け)のレジュメと配布資料を作って。</pre>
            </div>
            <h2>提案書・報告書・お礼状・案内文</h2>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>〇〇様への提案書のドラフトを作って。丁寧だけど堅すぎない文体で、A4・1枚に。</pre>
            </div>
            <h2>契約書・請求書のひな形＋差し込み</h2>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>この顧客リストを使って、請求書のひな形に差し込み、1社1PDFで作って。</pre>
            </div>
          `
        },
        {
          id: "finance",
          title: "深掘り：毎月の財務資料",
          practice: true,
          body: `
            <p class="kicker">DEEP DIVE 1</p>
            <h1>銀行提出用の財務資料を毎月ドラフト</h1>
            <ol>
              <li>試算表を渡す（添付 または フォルダ接続）</li>
              <li>作ってほしい体裁を伝える</li>
              <li>数字とコメントを自分で確認</li>
              <li>「毎月1日に」と定期実行に登録</li>
            </ol>
            <h2>Claudeへのお願い（例）</h2>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>毎月の試算表(Excel)から、銀行提出用の財務分析資料をWordで作って。売上・粗利・利益の推移グラフ、前年同月比、資金繰りの所見コメントも。フォーマットは毎回同じで。</pre>
            </div>
            <h2>毎月くり返すには</h2>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>毎月1日に、先月分の試算表からこの資料を作って、と定期実行に登録して。</pre>
            </div>
            <div class="callout warn">数字とコメントは必ず自分で最終チェック。体裁を一度決めれば毎月同じ形で出せます。</div>
          `
        },
        {
          id: "files",
          title: "ファイル・データを整理する",
          practice: true,
          body: `
            <p class="kicker">CATEGORY 2</p>
            <h1>散らかったファイルも、頼むだけで整う</h1>
            <h2>フォルダの仕分け・リネーム・日付付け</h2>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>このフォルダを種類ごとに整理して、ファイル名に日付(YYYY-MM-DD)を付けて。</pre>
            </div>
            <h2>PDFの中身を検索・要約</h2>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>契約書フォルダで、arbitration（仲裁）に触れているものを教えて。該当箇所の要点も。</pre>
            </div>
            <h2>Excel / CSVの集計・グラフ化・整形</h2>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>この売上CSVを月別・商品別に集計してグラフにして。空欄や表記ゆれも直して。</pre>
            </div>
            <h2>スキャン書類の文字起こし</h2>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>このスキャンPDF(領収書)から、日付・金額・宛名を読み取って一覧表(Excel)にして。</pre>
            </div>
          `
        },
        {
          id: "apps",
          title: "つないで使う（アプリ連携）",
          practice: true,
          body: `
            <p class="kicker">CATEGORY 3</p>
            <h1>GmailやカレンダーもチャットからOK</h1>
            <p>Gmail・カレンダー・ドライブなどを一度“接続”すると使えます。設定は画面の案内どおりです。パスワード入力は自分で行ってください。</p>
            <h2>Gmailの受信整理・返信下書き</h2>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>今日の未読メールを重要度順にまとめて。返信が要るものは下書きも作って（送信はしないで）。</pre>
            </div>
            <h2>カレンダーの予定調整・リマインド</h2>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>来週の予定を教えて。空き時間に〇〇の打合せ候補を3つ出して。</pre>
            </div>
            <h2>ドライブの資料検索・整理</h2>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>ドライブから必要な資料を探して、最新版のリンクを教えて。</pre>
            </div>
            <div class="callout">返信は「送信はしないで」と添えると、下書きまでで止められます。</div>
          `
        },
        {
          id: "schedule",
          title: "自動でくり返す（定期実行）",
          practice: true,
          body: `
            <p class="kicker">CATEGORY 4</p>
            <h1>一度決めれば、あとは勝手に動く</h1>
            <p>「毎朝7時に」「毎月1日に」のように時間を指定して、定期タスクとして登録します。</p>
            <h2>毎朝のブリーフィング</h2>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>毎朝7時に、今日の予定と重要メールの要約を送って。</pre>
            </div>
            <h2>毎月の請求・経費・月次レポート</h2>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>毎月1日に、先月の請求・経費・月次レポートをまとめて作って。</pre>
            </div>
            <h2>定期的なニュース・情報収集</h2>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>毎週月曜に、〇〇業界の新しいニュースを3件、要点つきでまとめて。</pre>
            </div>
          `
        },
        {
          id: "briefing",
          title: "深掘り：毎朝ブリーフィング",
          practice: true,
          body: `
            <p class="kicker">DEEP DIVE 2</p>
            <h1>毎朝ブリーフィングを設定する</h1>
            <ol>
              <li>Gmailとカレンダーを接続</li>
              <li>届けてほしい内容を伝える</li>
              <li>「毎朝7時に」と時間を指定</li>
              <li>定期タスクとして登録・確認</li>
            </ol>
            <h2>Claudeへのお願い（例）</h2>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>毎朝7時に“今日のブリーフィング”を送って。内容は、今日の予定一覧、返信が必要そうな重要メールの要約、今日やるべきことの提案。忙しい朝でも1分で読める長さで。</pre>
            </div>
            <div class="callout">時間・内容・長さを伝えるだけ。合わなければ「もっと短く」などと後から調整できます。</div>
          `
        },
        {
          id: "theme",
          title: "今日の題材",
          body: `
            <p class="kicker">THEME</p>
            <h1>毎月くり返す、この“あるある”を任せる</h1>
            <ul>
              <li>請求書を毎月1件ずつ手作業で作成している</li>
              <li>取引先ごとに金額・日付を打ち直している</li>
              <li>経費のレシート・明細がバラバラ</li>
              <li>月末にまとめてやって時間が消える</li>
            </ul>
            <div class="compare">
              <div>
                <h3>BEFORE</h3>
                <p>手作業で毎月、目安30分〜。請求書を1件ずつ作り、経費を後でまとめる。</p>
              </div>
              <div>
                <h3>AFTER</h3>
                <p>指示1回で数分。請求書PDF＋経費集計が、まとめて仕上がる。</p>
              </div>
            </div>
            <p>効果は業務量により変わります。まずは<strong>1社ぶんから</strong>試すのがおすすめです。</p>
          `
        },
        {
          id: "setup",
          title: "準備（4ステップ）",
          body: `
            <p class="kicker">SETUP</p>
            <h1>Coworkの始め方</h1>
            <div data-pic="desktop" data-cap="まずは自分のパソコン（デスクトップ）で作業します"></div>
            <ol>
              <li>Claudeデスクトップアプリを開く（スマホでも使えますが、フォルダ接続はパソコンが便利）</li>
              <li>「Cowork」を選ぶ。チャットではなくCoworkモードで新しい会話を始める</li>
              <li>自分のパソコンのフォルダを接続する。請求書・経費を入れておくフォルダを許可する</li>
              <li>素材を用意する。ひな形・取引先リスト・明細CSV・レシート画像など</li>
            </ol>
            <div class="ops">
              <article class="op"><span class="num">2</span><h3>Coworkをクリック</h3><div data-pic="cowork" data-cap="左メニューの Cowork を押す"></div></article>
              <article class="op"><span class="num">3</span><h3>フォルダを接続</h3><div data-pic="folder" data-cap="作業フォルダを許可する"></div></article>
            </div>
            <div class="callout">フォルダの接続ができていないと、「ファイルが見つからない」と言われます。次の実践の前に、ここを済ませてください。</div>
          `
        },
        {
          id: "step1",
          title: "STEP1 請求書を作る",
          practice: true,
          body: `
            <p class="kicker">STEP 1</p>
            <h1>請求書を自動で作る</h1>
            <h2>やること</h2>
            <ol>
              <li>取引先リストとひな形を用意する</li>
              <li>「今月分を作って」と指示する</li>
              <li>1社1ファイルでPDF保存させる</li>
              <li>金額・宛名を自分で最終チェックする</li>
            </ol>
            <p>「いつ・どの形式・どこに保存」を具体的に伝えるほど、仕上がりが安定します。</p>
            <div data-pic="copy" data-cap="下の文の「コピー」を押し、Coworkの入力欄に貼ります"></div>
            <h2>そのままマネできる指示例</h2>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>添付の取引先リスト（clients.xlsx）をもとに、9月分の請求書を作ってください。ひな形は invoice_template.xlsx を使い、取引先ごとに1ファイルずつPDFで、invoices/2026-09 フォルダに保存して。</pre>
            </div>
            <div class="callout warn">できた請求書は、送る前に金額と宛名を必ず自分の目で確認します。</div>
            <div data-pic="check" data-cap="操作：PDFを開いて、宛名と金額を指差し確認してから送る"></div>
          `
        },
        {
          id: "step2",
          title: "STEP2 経費を整理する",
          practice: true,
          body: `
            <p class="kicker">STEP 2</p>
            <h1>経費を整理・集計する</h1>
            <h2>やること</h2>
            <ol>
              <li>レシート画像・明細CSVを集める</li>
              <li>科目（勘定科目）ごとに集計させる</li>
              <li>合計・先月比まで出してもらう</li>
              <li>Excelで受け取り、必要なら微修正する</li>
            </ol>
            <p>分類のルールを一言添える（例：交通費と会議費の分け方）と、精度がぐっと上がります。判断に迷う費目は「コメントで教えて」と頼むと、自分の判断を残せます。</p>
            <h2>そのままマネできる指示例</h2>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>keihi フォルダのレシート画像と明細CSVを読み取って、勘定科目ごとに9月の経費一覧（Excel）を作ってください。各科目の合計と総合計、先月比のメモも付けて。判断に迷う費目はコメントで教えて。</pre>
            </div>
          `
        },
        {
          id: "step3",
          title: "STEP3 毎月自動化する",
          practice: true,
          body: `
            <p class="kicker">STEP 3</p>
            <h1>毎月くり返す“ツール化”</h1>
            <ul>
              <li><strong>手順を保存する</strong> … STEP1・2の指示を「いつもの依頼」として保存。次回は呼び出すだけ</li>
              <li><strong>毎月に予約する</strong> … 「毎月1日に先月分の請求書と経費集計を作って」と定期実行を設定</li>
              <li><strong>確認して仕上げる</strong> … できた成果物をチェックして送付・保存。人の目は最後に必ず入れる</li>
            </ul>
            <p>イメージは、一度作れば毎月“ボタンひとつ”感覚です。ただし送信・保存の最終判断は自分です。</p>
          `
        },
        {
          id: "tips",
          title: "頼み方のコツ",
          body: `
            <p class="kicker">TIPS</p>
            <h1>うまく頼むための4つのコツ</h1>
            <ol>
              <li><strong>ゴールを先に伝える</strong> … 「何を・どんな形で」ほしいかを最初に。例：9月分・請求書・PDFで</li>
              <li><strong>素材の場所を伝える</strong> … ファイル名・フォルダ名・接続アプリを具体的に</li>
              <li><strong>形式・長さを指定する</strong> … Word／Excel／PDF、A4・1枚、1分で読める など</li>
              <li><strong>できたら少しずつ直す</strong> … 一度で完璧を求めず、対話で仕上げる</li>
            </ol>
            <p>困ったら基本は「もっと具体的に伝える」です。</p>
          `
        },
        {
          id: "safety",
          title: "安全に使う",
          body: `
            <p class="kicker">SAFETY</p>
            <h1>安心して使うための約束</h1>
            <ul>
              <li>メール送信や支払い、ファイル削除は、自分がOKしてから実行させる</li>
              <li>請求書の数字と宛先は、送る前に必ず自分の目で確認する</li>
              <li>口座番号・マイナンバー等は入力しない／扱い方に気をつける</li>
              <li>定期タスクは、内容と時間を把握しておく（自動で動くものほど確認する）</li>
              <li>いきなり全件ではなく、1社・1か月から試して慣れる</li>
            </ul>
          `
        },
        {
          id: "trouble",
          title: "つまずき対策",
          body: `
            <p class="kicker">Q&amp;A</p>
            <h1>よくあるつまずきと対処</h1>
            <div class="qa"><p><strong>Q. ファイルが見つからないと言われる</strong></p><p>フォルダの「接続」ができているか確認。ファイル名も正確に伝える。</p></div>
            <div class="qa"><p><strong>Q. 思っていた形式と違う</strong></p><p>「PDFで」「1社1ファイルで」など形式を具体的に指定して作り直す。</p></div>
            <div class="qa"><p><strong>Q. 途中で止まる・時間がかかる</strong></p><p>一度に頼みすぎず、STEP1→2と手順を分けてお願いする。</p></div>
            <div class="qa"><p><strong>Q. 日本語の表示が崩れる</strong></p><p>フォントやExcelの設定を確認。必要なら「◯◯フォントで」と指定する。</p></div>
          `
        },
        {
          id: "summary",
          title: "まとめ",
          body: `
            <p class="kicker">SUMMARY</p>
            <h1>今日のまとめと、次の一歩</h1>
            <ol>
              <li>Coworkは“作業を任せる”モード。資料作成・整理・アプリ連携・定期実行の4つが使い道</li>
              <li>頼み方は日本語でOK。ゴール・素材・形式を伝える。まずは「今日のメールを整理して」から</li>
              <li>請求書は1社ぶんから。次に経費、最後に自動化。一度決めれば毎朝・毎月がラクになる</li>
            </ol>
            <p>理解できたかは、右上の確認クイズで確かめてください。</p>
          `
        }
      ]
    },
    code: {
      id: "code",
      title: "はじめての Claude Code",
      subtitle: "Windows編：ターミナルでのセットアップ",
      duration: "約35分",
      audience: "Windowsパソコンで、AIをコマンドで動かしたい人",
      lessons: [
        {
          id: "goal",
          title: "今日のゴール",
          body: `
            <p class="kicker">GOAL</p>
            <h1>この講座が終わると、できること</h1>
            <p>ターミナル（PowerShell）を使ってClaude Codeをインストールし、ログインと初期設定まで進めます。Macの人は <a href="#/course/codemac" data-link>Mac編</a> を使ってください。</p>
            <ol>
              <li><strong>自分のパソコンにセットアップ完了</strong> … ターミナルからインストールし、claude が起動する状態に</li>
              <li><strong>ログインして使い始められる</strong> … Claudeアカウントでログインし、最初の一言を送れる</li>
              <li><strong>初期設定のポイントがわかる</strong> … モデル選択・権限・CLAUDE.md など最初に触る設定を理解</li>
            </ol>
          `
        },
        {
          id: "what",
          title: "Claude Codeとは",
          body: `
            <p class="kicker">WHAT</p>
            <h1>Claude Code とは？</h1>
            <p>“ターミナル”という黒い画面から、コマンドでClaudeに作業を頼めるツールです。ひとことで言えば、<strong>日本語でお願いすると、代わりに作ってくれるAIの相棒</strong>です。</p>
            <ul>
              <li><strong>コマンドで動かす</strong> … マウスではなく文字（コマンド）で指示する</li>
              <li><strong>フォルダごと理解</strong> … プロジェクトのファイルを読んで、まとめて作業</li>
              <li><strong>AIが手を動かす</strong> … コードや資料の作成・修正を対話しながら進める</li>
            </ul>
            <div class="callout">むずかしそうに見えますが、やることは「決まったコマンドを打つ」だけです。順番に一緒にやります。</div>
          `
        },
        {
          id: "compare",
          title: "Coworkとの使い分け",
          body: `
            <p class="kicker">COMPARE</p>
            <h1>Cowork と Claude Code の違い</h1>
            <div class="compare">
              <div>
                <h3>Cowork</h3>
                <ul>
                  <li>アプリの画面で使う（GUI）</li>
                  <li>クリック中心でやさしい</li>
                  <li>資料作成・ファイル整理が得意</li>
                  <li>事務作業を任せたい人向け</li>
                </ul>
              </div>
              <div>
                <h3>Claude Code</h3>
                <ul>
                  <li>ターミナルで使う（コマンド）</li>
                  <li>少し玄人向けだが、より強力</li>
                  <li>コード・大きめの制作が得意</li>
                  <li>開発や自動化に踏み込みたい人向け</li>
                </ul>
              </div>
            </div>
            <p>どちらが上ではなく、目的で使い分けます。今日はもう一歩踏み込んだ Claude Code を触ります。</p>
          `
        },
        {
          id: "prep",
          title: "事前準備",
          body: `
            <p class="kicker">CHECK</p>
            <h1>始める前に、必要なもの</h1>
            <ul>
              <li>Windows 10（1809）以降のパソコン（メモリ4GB以上・インターネット接続）。CPUが x64 か Arm64 かは、パソコンの「システム」画面で確認できます</li>
              <li>ターミナル（PowerShell）。Windowsに最初から入っています</li>
              <li>Claudeの有料プラン（Pro / Max / Team など）</li>
              <li>Claudeアカウントのログイン情報（メールアドレスとパスワード）</li>
            </ul>
            <div class="callout warn"><strong>注意：</strong>無料プランでは Claude Code は使えません。まず有料プラン（Pro など）の契約を確認しましょう。</div>
          `
        },
        {
          id: "words",
          title: "用語ミニ辞典",
          body: `
            <p class="kicker">WORDS</p>
            <h1>その前に：ことばを3つだけ</h1>
            <ol>
              <li><strong>ターミナル</strong> … コマンドを打つための黒い画面。Windowsでは「PowerShell」がよく使われます</li>
              <li><strong>コマンド</strong> … パソコンへの命令文。今日はこれをコピーして貼るだけでOK</li>
              <li><strong>PowerShell と CMD</strong> … 似た2種類の画面。行頭が <code>PS C:\\</code> なら PowerShell、<code>C:\\</code> だけなら CMD</li>
            </ol>
            <p>今日は PowerShell を使います。画面を取り違えると、インストールコマンドが動きません。</p>
          `
        },
        {
          id: "flow",
          title: "全体の流れ",
          body: `
            <p class="kicker">FLOW</p>
            <h1>セットアップは、この4ステップ</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>ターミナル</h3><div data-pic="start"></div><p>スタートから PowerShell を開く</p></article>
              <article class="op"><span class="num">2</span><h3>インストール</h3><div data-pic="copy"></div><p>1行を貼って Enter</p></article>
              <article class="op"><span class="num">3</span><h3>ログイン</h3><div data-pic="browser"></div><p>ブラウザでアカウントに入る</p></article>
              <article class="op"><span class="num">4</span><h3>設定</h3><div data-pic="desktop"></div><p>モデル・権限・CLAUDE.md</p></article>
            </div>
            <ol>
              <li>ターミナルを開く（PowerShellを起動する）</li>
              <li>インストール（コマンド1行で導入）</li>
              <li>起動・ログイン（claude で開始しログイン）</li>
              <li>初期設定（モデルや設定を整える）</li>
            </ol>
            <p>任意：<strong>Git for Windows</strong> を入れると、変更の履歴が残り、やり直しがしやすくなります。次の「Git for Windows（任意）」で手順を見られます。</p>
          `
        },
        {
          id: "step1",
          title: "STEP1 ターミナルを開く",
          practice: true,
          body: `
            <p class="kicker">STEP 1</p>
            <h1>PowerShell を起動する</h1>
            <div data-pic="start" data-cap="操作：左下のスタート → 「PowerShell」と入力 → Windows PowerShell をクリック"></div>
            <ol>
              <li>画面左下の「スタート」（Windowsのマーク）を押す</li>
              <li>キーボードで「PowerShell」と入力して検索</li>
              <li>「Windows PowerShell」を左クリックして開く</li>
              <li>黒い画面が出れば準備OK</li>
            </ol>
            <div data-pic="powershell" data-cap="この黒い画面が出たら成功です。行頭が PS C:\\ になっているか見ます"></div>
            <div class="code-wrap">
              <pre># こんな画面が出ればOK
PS C:\\Users\\you&gt;
_</pre>
            </div>
            <div class="callout ok">行頭に <code>PS C:\\</code> と出ていれば PowerShell です。</div>
          `
        },
        {
          id: "step2",
          title: "STEP2 インストール",
          practice: true,
          body: `
            <p class="kicker">STEP 2</p>
            <h1>コマンド1行で導入する</h1>
            <p>PowerShell に、次の1行を貼り付けて Enter します。管理者権限は不要です。以後は自動で最新版に更新されます。</p>
            <div data-pic="copy" data-cap="操作：コピー → PowerShellの画面で右クリック（貼り付け）→ Enterキー"></div>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>irm https://claude.ai/install.ps1 | iex</pre>
            </div>
            <p>余裕があれば、次のレッスンの <strong>Git for Windows</strong> も入れておくと、変更の履歴を残したり、やり直しがしやすくなります（必須ではありません）。</p>
            <p>別ルート（今日は使わなくてもよい）：</p>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>winget install Anthropic.ClaudeCode</pre>
            </div>
            <p>npm（Node.js 22以降）を使う場合は <code>npm install -g @anthropic-ai/claude-code</code> です。この教室では推奨の PowerShell 版で進めます。</p>
          `
        },
        {
          id: "gitwin",
          title: "Git for Windows（任意）",
          practice: true,
          body: `
            <p class="kicker">OPTIONAL</p>
            <h1>Git for Windows を入れておくと、何が増える？</h1>
            <p>Claude Code のインストールそのものには、Git は<strong>必須ではありません</strong>。ただし入れておくと、パソコンの中に「変更の記録（履歴）」が残るので、Claude Code がより安全に、より便利に使えます。</p>
            <div data-pic="git" data-cap="Git＝ファイルの変化を、日付つきの記録として残す道具"></div>
            <h2>たとえると</h2>
            <ul>
              <li><strong>Git なし</strong> … 上書き保存だけ。前の状態に戻すのがむずかしい</li>
              <li><strong>Git あり</strong> … セーブポイントが増える。失敗したら「ひとつ前」に戻しやすい</li>
            </ul>
            <h2>Claude Code で増えること</h2>
            <ol>
              <li><strong>変更内容が分かりやすい</strong> … 「今日どのファイルを、どう直したか」を一覧にできる</li>
              <li><strong>やり直しがしやすい</strong> … 思いどおりでない修正を、履歴から戻せる</li>
              <li><strong>作業前のバックアップが確実</strong> … フォルダごとコピーする方法に加えて、履歴として残せる</li>
              <li><strong>AIへの頼み方が具体的になる</strong> … 「差分を見て説明して」「今の状態を履歴に残して」と頼める</li>
            </ol>
            <div class="callout">今日わからなくて大丈夫です。コミットやブランチなどの用語を全部覚える必要はありません。「履歴が残る道具」と覚えておけば十分です。</div>
            <h2>入れ方（操作）</h2>
            <p><strong>方法A：公式サイトから（いちばんわかりやすい）</strong></p>
            <ol>
              <li>ブラウザで <a href="https://git-scm.com/downloads/win" target="_blank" rel="noopener">https://git-scm.com/downloads/win</a> を開く</li>
              <li>Windows 用のインストーラーをダウンロードする</li>
              <li>ダウンロードしたファイル（例：Git-…-64-bit.exe）をダブルクリックする</li>
              <li>途中の画面は、基本的に <strong>Next（次へ）</strong> で進めて大丈夫です</li>
              <li>「Adjusting your PATH environment」という画面が出たら、<strong>Git from the command line and also from 3rd-party software</strong> を選ぶ（PowerShell で <code>git</code> が使えるようにする設定です）</li>
              <li>最後に Install → Finish。終わったら PowerShell を<strong>一度閉じて、開き直す</strong></li>
            </ol>
            <p><strong>方法B：PowerShell で1行（WinGet が使える人）</strong></p>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>winget install --id Git.Git -e --source winget</pre>
            </div>
            <p>終わったら、こちらも PowerShell を閉じて開き直します。</p>
            <h2>入ったか確認する</h2>
            <p>新しい PowerShell で、次を貼って Enter します。</p>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>git --version</pre>
            </div>
            <p><code>git version 2.…</code> のように番号が出ればOKです。</p>
            <div class="callout warn">確認のとき <code>git</code> が認識されない場合は、インストーラーで PATH の項目を選べていないか、PowerShell を開き直していないことが多いです。パソコンの再起動でも直ることがあります。</div>
            <h2>Claude Code での使い方（最初の3つ）</h2>
            <p>Git が入ったあと、作業フォルダで Claude Code に日本語でこう頼めます。</p>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>このフォルダを Git の管理下にしてください。まだなら git init から始めて、何をするか先に説明してください。私がOKしてから進めてください。</pre>
            </div>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>今の変更点を、専門用語を使わずに一覧にしてください。まだコミットしないでください。</pre>
            </div>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>作業を始める前に、今の状態を履歴として残してください。メッセージは「作業前のバックアップ」でお願いします。</pre>
            </div>
            <p>GitHub（インターネット上の保管庫）へのアップロードは、今日はやらなくて構いません。まず自分のパソコンの中だけで履歴が残れば十分です。</p>
          `
        },
        {
          id: "step3",
          title: "STEP3 起動・ログイン",
          practice: true,
          body: `
            <p class="kicker">STEP 3</p>
            <h1>claude で始めて、ログインする</h1>
            <p>① 作業したいフォルダで <code>claude</code> と打つ</p>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>claude</pre>
            </div>
            <p>② ブラウザが開くので、Claudeアカウントでログインする。ログインには有料プラン（Pro / Max など）が必要です。</p>
            <div data-pic="browser" data-cap="操作：ブラウザが開いたらメールとパスワードを入力してログイン"></div>
            <p>うまく入ったか確認するコマンド：</p>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>claude --version</pre>
            </div>
            <p>バージョン番号が出ればOK（例：2.1.x）。状態の自動チェックは次です。</p>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>claude doctor</pre>
            </div>
          `
        },
        {
          id: "step4",
          title: "STEP4 初期設定",
          practice: true,
          body: `
            <p class="kicker">STEP 4</p>
            <h1>最初に触っておきたい設定</h1>
            <ul>
              <li><strong>モデルを選ぶ</strong> … <code>/config</code> でモデルや自動更新チャンネルを設定できる</li>
              <li><strong>権限を確認</strong> … 変更やコマンド実行の前に「確認する」設定にしておくと安心</li>
              <li><strong>CLAUDE.md を作る</strong> … プロジェクトの説明メモ。置いておくと毎回の指示がラクに</li>
            </ul>
            <p>起動後は <code>/</code> から始まるコマンドが使えます。<code>/help</code> で一覧。指示は日本語でそのままOKです。</p>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>/help</pre>
            </div>
          `
        },
        {
          id: "trouble",
          title: "つまずき対策",
          body: `
            <p class="kicker">TROUBLE</p>
            <h1>うまくいかない時は？</h1>
            <div class="qa"><p><strong>Q. 'claude' が認識されない</strong></p><p>ターミナルを一度閉じて開き直す。それでも駄目なら <code>claude doctor</code> で確認。</p></div>
            <div class="qa"><p><strong>Q. irm が動かない / &amp;&amp; のエラー</strong></p><p>画面を間違えているサイン。行頭が <code>PS C:\\</code> の PowerShell で実行する。</p></div>
            <div class="qa"><p><strong>Q. インストールが失敗する</strong></p><p>ネット接続を確認。時間をおいて再実行、または WinGet ルートを試す。</p></div>
            <div class="qa"><p><strong>Q. ログインできない</strong></p><p>有料プランか、正しいアカウントかを確認する。</p></div>
            <div class="qa"><p><strong>Q. git が認識されない</strong></p><p>Git for Windows のインストール後、PowerShell を閉じて開き直す。<code>git --version</code> で番号が出るか確認。PATH の画面では「Git from the command line and also from 3rd-party software」を選ぶ。</p></div>
          `
        },
        {
          id: "safety",
          title: "安全に使う",
          body: `
            <p class="kicker">SAFETY</p>
            <h1>安心して使うための約束</h1>
            <ul>
              <li>ファイルの変更やコマンド実行は、内容を見てからOKを出す</li>
              <li>まずはテスト用フォルダで。大事なデータのフォルダでは、いきなり作業させない</li>
              <li>APIキー・パスワード等はうかつに貼らない／共有しない</li>
              <li>こまめに保存・バックアップ。<strong>Git for Windows</strong> が入っていると履歴が残り、元に戻せて安心（任意。くわしくは「Git for Windows（任意）」のレッスン）</li>
            </ul>
          `
        },
        {
          id: "summary",
          title: "まとめ",
          body: `
            <p class="kicker">SUMMARY</p>
            <h1>今日のまとめと、次の一歩</h1>
            <ol>
              <li>PowerShellで1行インストール。<code>irm https://claude.ai/install.ps1 | iex</code> を貼るだけ</li>
              <li><code>claude</code> で起動してログイン。有料プランでログインし、<code>--version</code> と <code>doctor</code> で確認</li>
              <li>初期設定はこの3つ。モデル選択・権限確認・CLAUDE.md を用意する</li>
              <li>任意で Git for Windows。履歴が残ると、やり直しと「何を変えたか」の確認がしやすい</li>
            </ol>
            <p>まずは小さなフォルダで <code>claude</code> と打ってみましょう。使い方の文章は「プロンプト集」にまとめてあります。慣れたら <a href="#/course/applied" data-link>応用編（使いこなし）</a> で、CLAUDE.md と Skills を育てます。</p>
          `
        }
      ]
    },
    poster: {
      id: "poster",
      title: "はじめての求人ポスター",
      subtitle: "デザインが苦手でも、AIに質問してもらいながら1枚つくる",
      duration: "約50分",
      audience: "はじめての人向け／求人ポスターを作りたい人",
      lessons: [
        {
          id: "goal",
          title: "今日のゴール",
          body: `
            <p class="kicker">GOAL</p>
            <h1>デザインが苦手でも、求人ポスターは作れます</h1>
            <p>今日は、AIに質問してもらいながらポスターを1枚つくります。むずかしい言葉や、デザインの知識は要りません。聞かれたことに答えるだけです。</p>
            <div data-pic="poster" data-cap="A4縦の求人ポスターを、1枚仕上げます"></div>
            <h2>使う道具は3つ。それぞれ役割がちがいます</h2>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>Pinterest</h3><p>お手本さがし係。いろいろなポスターの画像が見られるサイト。「こんな感じにしたい」を1枚えらびます。</p><div data-pic="pinterest"></div></article>
              <article class="op"><span class="num">2</span><h3>ChatGPT</h3><p>ことばを考える係。文字で話しかけると答えてくれるAI。ポスターに何を書くかを一緒に決めます。</p><div data-pic="chat"></div></article>
              <article class="op"><span class="num">3</span><h3>Canva</h3><p>紙に仕上げる係。ポスターやチラシを作るサイト。最後の手直しはここで。</p><div data-pic="canva"></div></article>
            </div>
          `
        },
        {
          id: "prompt",
          title: "プロンプトとは",
          body: `
            <p class="kicker">WORDS</p>
            <h1>「プロンプト」ってなに？</h1>
            <p><strong>プロンプト ＝ AIへの注文書</strong>です。お店でいえば「オーダー票」。サイズ、色、書く中身が書いてあります。</p>
            <p>今日は、この注文書もAIに書いてもらいます。自分で一から書かなくて大丈夫です。</p>
            <div class="callout">枠の中の文は、そのまま打てばOK。自分の言葉に変えなくて大丈夫です。コピーして貼ってもかまいません。</div>
          `
        },
        {
          id: "flow",
          title: "今日の流れ（9手順）",
          body: `
            <p class="kicker">FLOW</p>
            <h1>さがす → きめる → つくる → なおす</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>さがす</h3><p>お手本の画像を1枚えらぶ（手順1）</p></article>
              <article class="op"><span class="num">2</span><h3>きめる</h3><p>AIの質問に答えて注文書をつくる（手順2〜4）</p></article>
              <article class="op"><span class="num">3</span><h3>つくる</h3><p>注文書からポスターを出す（手順5〜8）</p></article>
              <article class="op"><span class="num">4</span><h3>なおす</h3><p>AIにダメ出しを聞いて直す（手順9）</p></article>
            </div>
          `
        },
        {
          id: "notes",
          title: "先に知っておく4つのこと",
          body: `
            <p class="kicker">NOTES</p>
            <h1>あわてないために</h1>
            <ol>
              <li><strong>文字は崩れることがあります。</strong>あなたの操作ミスではありません。最後に読んで、Canvaで打ち直せば直ります。</li>
              <li><strong>電話番号と住所は、最後に人が読みます。</strong>いちばん間違えると困る所なので、崩れていたらCanvaで打ち直します。</li>
              <li><strong>一度で完成しなくて普通です。</strong>AIが出すのは「骨組み」。直して仕上げるところまでが今日の作業です。</li>
              <li><strong>枠の中の文は、そのまま打てばOK。</strong>自分の言葉に変えなくて大丈夫です。</li>
            </ol>
          `
        },
        {
          id: "step1",
          title: "手順1 お手本を1枚えらぶ",
          practice: true,
          body: `
            <p class="kicker">さがす</p>
            <h1>お手本にするポスターを、1枚だけえらぶ</h1>
            <div data-pic="pinterest" data-cap="操作：Pinterestで探す → 画像の上で右クリック →「画像を保存」"></div>
            <ol>
              <li>Pinterestで、いいなと思うポスターを探す</li>
              <li>画像の上で右クリック →「画像を保存」</li>
            </ol>
            <div class="callout ok">こうなればOK：「こんな感じにしたい」と思える画像が1枚、パソコンに保存できた。</div>
            <div class="callout warn">1枚だけ。2枚以上だと、AIがどっちに寄せるか迷って中途半端になります。</div>
          `
        },
        {
          id: "step2",
          title: "手順2〜4 注文書をつくる",
          practice: true,
          body: `
            <p class="kicker">きめる</p>
            <h1>ChatGPTで、何を書くかを決める</h1>
            <h2>手順2：この文を貼って送る</h2>
            <p>ここではまだ画像は付けません。先に「何を書くか」を決めます。</p>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>求人ポスターを作りたいです。デザインは苦手なので、まず必要なことを一問一答で聞いてください。
聞き終わったら、ポスターを作るためのプロンプトを日本語で組み立てて見せてください。
私が答えたこと以外は書かないでください。分からないところは空けてください。
色は3色だけ。4色目と、余計な装飾の色は使わないでください。
紙はA4の縦（210×297mm）。プロンプトの中では「チラシ」ではなく「A4縦のポスター」と書いてください。</pre>
            </div>
            <h2>手順3：ふつうの言葉で答える</h2>
            <p>「何のお仕事の求人ですか？」のように、1問ずつ聞いてきます。お客さんに話すような言葉で答えればOKです。</p>
            <div class="callout warn">答えを短くしすぎない。「3,000円」だけでなく「時給3,000円」。AIは分からないところを勝手に埋めず、空けたまま出します。</div>
            <div class="callout ok">こうなればOK：質問が終わると、AIが「プロンプト（注文書）」を見せてくれる。</div>
            <h2>手順4：お手本画像を付けて送る</h2>
            <p>入力欄の「＋」から、保存した画像を選んで付けます。それから下の文を送ります。</p>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>この画像を参考にします。
この画像の並び方を【レイアウト】の欄に文章で書いて、プロンプトを作り直してください。</pre>
            </div>
            <div class="callout ok">こうなればOK：注文書の中に【レイアウト】という欄ができて、並び方が文章で書いてある。</div>
            <div class="callout warn">【掲載内容】に、お手本の画像の文字がまざっていないか読む。まざっていたら「お手本の文字は使わないで」と送る。</div>
          `
        },
        {
          id: "step5",
          title: "手順5〜8 ポスターを出す",
          practice: true,
          body: `
            <p class="kicker">つくる</p>
            <h1>注文書から、ポスターを出してもらう</h1>
            <div data-pic="canva" data-cap="最後は Canva で文字を打ち直せます"></div>
            <h2>手順5</h2>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>そのプロンプトで、CanvaでA4縦のポスターを1枚つくってください。</pre>
            </div>
            <div class="callout warn">英語の枠（Select a design style）が出ても、読まなくて大丈夫。何も選ばずに、右下の紫の「Generate」ボタンを1回押します。</div>
            <h2>手順6</h2>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>Canvaで編集できるデザインにしてください。</pre>
            </div>
            <div class="callout ok">「日本語が崩れている場合があるので確認を」という注意が出る。これは正常です。</div>
            <h2>手順7</h2>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>この紙の直すべき点を挙げてください。そのうえで直してください。</pre>
            </div>
            <h2>手順8：「保存して」と送る</h2>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>保存して</pre>
            </div>
            <div class="callout warn">これを送らないと、Canvaに入りません。「Canvaを開いたのに無い！」はほぼこれです。手順6で「編集できるデザインに」と頼んだだけでは、まだ下書きです。「保存して」と送って初めてCanvaに入り、文字を打ち直せるようになります。</div>
            <div class="callout ok">こうなればOK：Canvaで開けたら、電話番号と住所を1字ずつ読む。</div>
          `
        },
        {
          id: "step9",
          title: "手順9 Canvaで直す",
          practice: true,
          body: `
            <p class="kicker">なおす</p>
            <h1>Canva AIに、ダメ出しを聞いて直す</h1>
            <p>Canvaの画面でCanva AIを開き、下の3つを順番に送ります。</p>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>改善点を教えて、編集して</pre>
            </div>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>他は？</pre>
            </div>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>改善して</pre>
            </div>
            <div class="callout warn">「他は？」を飛ばさない。1回目は見た目の話だけ。2回目で給与の書き方・時間・電話番号など、中身の間違いを教えてくれます。</div>
            <div class="callout warn">AIの言うことを全部聞かなくていい。「いいデザインのコツ」に合うものだけ採用します。</div>
          `
        },
        {
          id: "design",
          title: "いいデザインのコツ5つ",
          body: `
            <p class="kicker">TIPS</p>
            <h1>この5つだけ見ればOK</h1>
            <ol>
              <li><strong>言いたいことは1つ</strong> … いちばん大きい文字は1か所だけ。求人なら「時給」など。全部を目立たせると、何も目立ちません。</li>
              <li><strong>大きさに差をつける</strong> … 見出しは思い切って大きく、説明は小さく。</li>
              <li><strong>端をそろえる</strong> … 文字の左の端を、たて1本の線にそろえます。</li>
              <li><strong>余白を残す</strong> … 紙の端までぎっしり詰めないこと。</li>
              <li><strong>色は3色だけ</strong> … 背景・文字・目立たせる色の3つ。割合はだいたい 6：3：1。目立たせる色は、見せたい所にだけ。</li>
            </ol>
            <h2>印刷する前に、声に出して読む</h2>
            <ul>
              <li>電話番号は正しい？（1けたずつ）</li>
              <li>給与は「時給」など、何の金額か書いてある？</li>
              <li>勤務時間・曜日は合っている？</li>
              <li>住所・店名の字は崩れていない？</li>
              <li>自分が書いていない情報が増えていない？</li>
              <li>お手本の画像の文字がまざっていない？</li>
            </ul>
            <p>思っていたのと全然ちがう → Canvaで直すより、手順4の注文書を直して作り直すほうが早い。細かいズレだけCanvaで。</p>
            <p>変な文字が出た → よくあることです。Canvaでその文字をクリックして打ち直せば直ります。</p>
          `
        },
        {
          id: "canva",
          title: "Canvaで仕上げるコツ",
          body: `
            <p class="kicker">CANVA</p>
            <h1>きれいに見える・失敗しても戻れる</h1>
            <h2>こわがらずに触るために</h2>
            <ul>
              <li>触る前に「コピーを作成」。元が残るので、安心していじれます。</li>
              <li>失敗したら1つ戻す。Windowsは <code>Ctrl ＋ Z</code>（Macは ⌘ ＋ Z）。何回でも戻れます。</li>
              <li>崩れた字は、ダブルクリックで打ち直す。AIが作った文字も、Canvaに入れば普通の文字です。</li>
            </ul>
            <h2>そろえる</h2>
            <ul>
              <li>線が出たら、そこで手を離す。それが「そろった」合図です。</li>
              <li>まとめてそろえる。Shift を押しながら複数クリック →「配置」から左揃えなど。</li>
              <li>いっしょに動かすものは「グループ化」。</li>
            </ul>
            <h2>飾りすぎない</h2>
            <ul>
              <li>フォントは2種類まで（見出し用と本文用）。</li>
              <li>影やふちどりは見出しだけ。</li>
              <li>目立たせたいときは、色より先に「大きさ」。色は3色のまま。</li>
            </ul>
            <h2>Canva AIに頼むとき</h2>
            <ul>
              <li>直したい所を選んでから頼む。「もっと大きく」「はみ出しを直して」。</li>
              <li>1回に1つだけ頼む。まとめて頼むと、頼んでいない所まで変わりやすい。</li>
            </ul>
            <h2>仕上げと、次回のために</h2>
            <ul>
              <li>印刷は「共有」→「ダウンロード」→ <strong>PDF（印刷）</strong>。まず1枚、試しに刷る。</li>
              <li>できた1枚は、次の土台にする。「コピーを作成」→ 文字だけ打ち替え。</li>
            </ul>
            <p>ボタンの名前や場所は、Canvaの更新で変わることがあります。見つからないときは、周りの人か講師に聞いてください。</p>
          `
        },
        {
          id: "appeal",
          title: "応募したくなるコツ",
          body: `
            <p class="kicker">COPY</p>
            <h1>見た人が応募したくなるか</h1>
            <p>見た目の5つのコツに加えて、中身の話です。目はだいたい左上 → 右上 → 左下 → 右下（Zの字）に動きます。左上に一番言いたいこと、右下に「どうすれば応募できるか」。</p>
            <ol>
              <li><strong>3秒でわかるか</strong> … 「誰に」「何の募集か」「どうすればいいか」</li>
              <li><strong>読む人に話しかける</strong> … 「スタッフ募集中」より「子育てが一段落したあなたへ」</li>
              <li><strong>ふわっとした言葉より、数字</strong> … 「高時給」より「時給○○円／○時〜○時／週○日〜」</li>
              <li><strong>応募する人が気にすることを書く</strong> … 時間・曜日・交通費・資格。聞かれそうなことは先に。</li>
              <li><strong>お店の「ほかと違う所」を1つ</strong> … 全部並べず、いちばん強い1つを見出しの近くに。</li>
              <li><strong>してほしいことは1つだけ</strong> … 連絡方法は1つにしぼって大きく。受付の時間も一緒に。</li>
              <li><strong>絵や写真は、1つを大きく</strong></li>
              <li><strong>文は短く、ぶつ切りでいい</strong> … 「週3日〜。交通費全額。」</li>
              <li><strong>貼る場所で、離れて見る</strong> … 試し刷りを実際に貼って、数歩はなれて見る。</li>
              <li><strong>他の人に3秒だけ見せる</strong> … 「何のチラシ？」と聞いて、答えられればOK。</li>
            </ol>
          `
        },
        {
          id: "summary",
          title: "まとめ",
          body: `
            <p class="kicker">SUMMARY</p>
            <h1>今日のまとめ</h1>
            <ol>
              <li>お手本はPinterestで1枚だけ保存する</li>
              <li>ChatGPTに一問一答してもらい、注文書（プロンプト）を作る</li>
              <li>Canvaでポスターを出し、「保存して」と送ってから文字を直す</li>
              <li>電話番号・住所・時給は、人が1字ずつ読む。色は3色、言いたいことは1つ</li>
            </ol>
            <p>一度で完成しなくて普通です。骨組みを出して、直して仕上げるところまでが今日の作業です。</p>
          `
        }
      ]
    },
    intro: {
      id: "intro",
      title: "Claude Code はじめて勉強会",
      subtitle: "初心者向け・全体像編。雰囲気をつかむのがゴール",
      duration: "約45分",
      audience: "プログラミング未経験でもOK／これからClaude Codeを知る人",
      lessons: [
        {
          id: "goal",
          title: "今日のゴール",
          body: `
            <p class="kicker">GOAL</p>
            <h1>今日が終わると、こうなれます</h1>
            <p>覚えることより、「わくわくする」ことを大事にします。プログラミング未経験でも大丈夫です。</p>
            <ol>
              <li><strong>Claude Codeが“何か”わかる</strong> … むずかしい言葉ではなく、イメージでつかめる</li>
              <li><strong>何ができるかイメージできる</strong> … 自分の仕事で使えそうな場面が思い浮かぶ</li>
              <li><strong>「やってみたい」と思える</strong> … はじめの一歩の踏み出し方がわかる</li>
            </ol>
          `
        },
        {
          id: "what",
          title: "Claude Codeって、なに？",
          body: `
            <p class="kicker">WHAT</p>
            <h1>ひとことで言うと</h1>
            <p><strong>日本語でお願いすると、代わりに作ってくれるAIの相棒</strong>です。</p>
            <ul>
              <li><strong>話しかけるだけ</strong> … 「〇〇を作って」と日本語で頼むだけでOK</li>
              <li><strong>ファイルごと任せる</strong> … パソコンのフォルダを見て、まとめて作業</li>
              <li><strong>何度でも直せる</strong> … 「ここ直して」と対話しながら仕上げる</li>
            </ul>
            <div class="callout">たとえるなら、“何でも作ってくれる、とても優秀な新人スタッフ”。指示は日本語でOKです。</div>
          `
        },
        {
          id: "modes",
          title: "3つの入り口",
          body: `
            <p class="kicker">MODES</p>
            <h1>Claude の3つの使い方</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>チャット</h3><p>質問や相談に文章で答えてくれる。いちばん気軽。調べもの・文章作成に。</p></article>
              <article class="op"><span class="num">2</span><h3>Cowork</h3><p>画面上でファイル作成や整理を代行。クリック中心。事務作業をラクに。</p></article>
              <article class="op"><span class="num">3</span><h3>Code</h3><p>本格的な制作・開発・自動化。もう一歩先。今日の主役はコレ。</p></article>
            </div>
            <p>くわしいセットアップは <a href="#/course/code" data-link>Claude Code講座（Windows編）</a>、事務の自動化は <a href="#/course/cowork" data-link>Cowork講座</a> です。</p>
          `
        },
        {
          id: "cando",
          title: "できること3つ",
          body: `
            <p class="kicker">CAN DO</p>
            <h1>大きく3つのことができます</h1>
            <ul>
              <li><strong>Web制作</strong> … ホームページやLPを作って公開できる</li>
              <li><strong>アプリ開発</strong> … 便利なWebアプリ・スマホアプリを作れる</li>
              <li><strong>業務効率化</strong> … 毎日の面倒な作業を自動化できる</li>
            </ul>
            <p>しかも、どれも“日本語でお願いするだけ”。専門のコードを覚える必要はありません。</p>
          `
        },
        {
          id: "make",
          title: "実際に作る3つ",
          body: `
            <p class="kicker">EXAMPLE</p>
            <h1>入門コースで実際に作るもの</h1>
            <ol>
              <li><strong>会社ホームページ</strong> … 会社の紹介サイトを作って、ネットに公開するまで</li>
              <li><strong>自分専用ツール（やさしい順）</strong> … <a href="#/course/snspost" data-link>投稿文</a>・<a href="#/course/survey" data-link>アンケート</a>・<a href="#/course/expense" data-link>経費</a>・<a href="#/course/invoice" data-link>請求書</a>・<a href="#/course/abc" data-link>ABC分析</a>・<a href="#/course/sns" data-link>SNS投稿分析</a>・<a href="#/course/crm" data-link>ミニCRM</a>・<a href="#/course/shop" data-link>店舗サイト</a>・<a href="#/course/secretary" data-link>秘書アプリ</a>・<a href="#/course/appedit" data-link>画面の編集</a></li>
              <li><strong>秘書アプリ</strong> … 予定やメモを助けてくれる自分専用のWebアプリ（手順は <a href="#/course/secretary" data-link>秘書アプリの作り方</a>）</li>
              <li><strong>漫画制作アプリ</strong> … AIで画像を作る機能まで入った、ちょっと本格的なアプリ</li>
            </ol>
            <p>むずかしそうに見えますが、順番にお願いしていくだけ。だんだん“作れる”が広がります。</p>
          `
        },
        {
          id: "job",
          title: "仕事での活用",
          body: `
            <p class="kicker">WORK</p>
            <h1>毎日の作業が、こんなにラクに</h1>
            <ul>
              <li><strong>ファイル整理</strong> … たくさんのファイル名を、日本語の指示で一括で変更</li>
              <li><strong>資料修正</strong> … 表記の統一や誤字直しを、まとめて自動で</li>
              <li><strong>画像を一括生成</strong> … リストを渡すだけで、複数の画像をまとめて作成</li>
              <li><strong>くり返し作業</strong> … 毎月・毎回の定型作業を“自分専用の道具”に</li>
            </ul>
            <p>自分の仕事に置き換えて、「どれが一番面倒か」を思い浮かべてみてください。</p>
          `
        },
        {
          id: "talk",
          title: "ワーク：何を作りたい？",
          practice: true,
          body: `
            <p class="kicker">TALK</p>
            <h1>あなたなら、何を作りたい？</h1>
            <p>3分だけ、メモしてから近くの人と話してみましょう。</p>
            <ul>
              <li>今の仕事で「面倒だな」と感じる作業は？</li>
              <li>あったらいいな、と思うサイトやアプリは？</li>
            </ul>
            <div class="callout">自分ごとにすると、このあとの話が入りやすくなります。答えは正解・不正解ではありません。</div>
          `
        },
        {
          id: "tools",
          title: "使う道具は2つ",
          body: `
            <p class="kicker">HOW</p>
            <h1>使うのは、この2つだけ</h1>
            <div data-pic="powershell" data-cap="ターミナル＝お願いを打ち込む黒い画面"></div>
            <ul>
              <li><strong>ターミナル</strong> … 文字でお願いを打ち込む“黒い画面”。むずかしい操作は不要で、決まった文を打つだけ</li>
              <li><strong>フォルダ</strong> … 作ったものを入れておく“箱”。Claudeはこの中を見て作業してくれる</li>
            </ul>
            <p>イメージは「メモ帳にお願いを書く」感覚。黒い画面にビビらなくて大丈夫です。</p>
          `
        },
        {
          id: "vibe",
          title: "バイブコーディング",
          body: `
            <p class="kicker">KEYWORD</p>
            <h1>合言葉は「バイブコーディング」</h1>
            <p>むずかしいコードを書かず、AIと会話しながら“ノリ”で作っていく進め方のことです。</p>
            <ol>
              <li><strong>まずざっくり頼む</strong> … 「こんなの作って」と大まかにお願い</li>
              <li><strong>出てきたものを見る</strong> … 実際に動かして、良し悪しを確認</li>
              <li><strong>対話で直す</strong> … 「ここをこうして」と少しずつ調整</li>
            </ol>
            <div class="callout">最初から完璧を目指さず、“作って→見て→直す”をくり返すのがコツです。</div>
          `
        },
        {
          id: "words",
          title: "用語ミニ辞典",
          body: `
            <p class="kicker">WORDS</p>
            <h1>これだけ押さえればOK</h1>
            <ul>
              <li><strong>プロンプト</strong> … AIへのお願いの文章のこと</li>
              <li><strong>プロジェクト／フォルダ</strong> … 作業をまとめて入れておく“箱”</li>
              <li><strong>API（エーピーアイ）</strong> … 外部のサービスと機能をつなぐ“連絡口”</li>
              <li><strong>GitHub（ギットハブ）</strong> … コードを保存・共有するクラウドの倉庫。Git（自分のパソコンの履歴）とは別物</li>
              <li><strong>デプロイ</strong> … 作ったものをネット上に公開すること</li>
              <li><strong>CLAUDE.md</strong> … AIへの“前提メモ”。毎回の説明を省ける</li>
            </ul>
          `
        },
        {
          id: "start",
          title: "始め方（4ステップ）",
          body: `
            <p class="kicker">START</p>
            <h1>はじめるのは、この4ステップ</h1>
            <ol>
              <li><strong>準備する</strong> … パソコンと、Claudeの有料プランを用意</li>
              <li><strong>インストール</strong> … 案内どおりコマンドを1行入れるだけ</li>
              <li><strong>ログイン</strong> … claude と打って、アカウントでログイン</li>
              <li><strong>作ってみる</strong> … 「〇〇を作って」と日本語でお願い</li>
            </ol>
            <p>詳しいインストール手順は <a href="#/course/code" data-link>Claude Code講座（Windows編）</a> にまとめています。Git for Windows は任意です。</p>
          `
        },
        {
          id: "safety",
          title: "安全に使う",
          body: `
            <p class="kicker">SAFETY</p>
            <h1>安心して使うための約束</h1>
            <ul>
              <li><strong>勝手に実行させない</strong> … 送信・削除などは、内容を見てからOKを出す</li>
              <li><strong>秘密の情報に注意</strong> … パスワードやAPIキーはうかつに貼らない</li>
              <li><strong>まずは小さく試す</strong> … 大事なデータではなく、練習用フォルダで</li>
              <li><strong>最後は自分で確認</strong> … AIの成果物は人の目でチェックしてから使う</li>
            </ul>
          `
        },
        {
          id: "tips",
          title: "うまく頼む3つのコツ",
          body: `
            <p class="kicker">TIPS</p>
            <h1>AIに“うまく頼む”コツ</h1>
            <ol>
              <li><strong>ゴールを先に</strong> … 「何を・どんな形で」ほしいかを最初に伝える</li>
              <li><strong>具体的に</strong> … 「9月分を」「PDFで」など、はっきり指定する</li>
              <li><strong>少しずつ直す</strong> … 一度で完璧を求めず、対話で仕上げていく</li>
            </ol>
            <p>コツは“優秀な新人スタッフ”へのお願いと同じ。ゴール・具体・対話が合言葉です。</p>
          `
        },
        {
          id: "promptwork",
          title: "ワーク：お願い文を書く",
          practice: true,
          body: `
            <p class="kicker">WORK</p>
            <h1>“お願い文”を書いてみよう</h1>
            <p>5分。作ってみたいものを1つ決める（例：自己紹介サイト）。「〜を作って。〜も入れて」と書いてみます。</p>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>自己紹介サイトを作ってください。
・目的：初めて会う人に、何をしているか分かってもらう
・ページ：トップ／自己紹介／お問い合わせ
・デザイン：読みやすく、スマホでも見やすく
・進め方：作る前に計画を見せて、私がOKしてから作る</pre>
            </div>
            <p>ゴール・具体・対話を意識して、自分の言葉に書き換えてください。書けたら数人でシェアしましょう。</p>
          `
        },
        {
          id: "recap",
          title: "ふりかえりと次の一歩",
          body: `
            <p class="kicker">RECAP</p>
            <h1>今日のポイント</h1>
            <ol>
              <li>Claude Codeは“作ってくれるAIの相棒”。日本語でお願いするだけ。コードは覚えなくていい</li>
              <li>Web制作・アプリ・業務効率化ができる。仕事の面倒な作業も自動化できる</li>
              <li>進め方は“作って→見て→直す”。完璧を目指さず、対話で少しずつ仕上げる</li>
            </ol>
            <h2>次の一歩</h2>
            <ol>
              <li><a href="#/course/code" data-link>Windows編</a>でセットアップする</li>
              <li>慣れたら <a href="#/course/applied" data-link>応用編</a> で CLAUDE.md を1枚書く</li>
              <li><a href="#/course/invoice" data-link>請求書ツール</a>など、自分専用ツールを1つ作ってみる。小さくてOK</li>
              <li>できたらシェアする。うまくいっても、つまずいても、みんなで共有</li>
            </ol>
            <p><a class="btn-orange" href="#/course/code" data-link>Windowsでセットアップする</a>
            <a class="btn-dark" href="#/course/invoice" data-link>請求書ツールの作り方へ</a></p>
          `
        }
      ]
    },
    secretary: {
      id: "secretary",
      title: "秘書アプリの作り方",
      subtitle: "実践②：自分専用の秘書Webアプリを作って、公開まで",
      duration: "約50分",
      audience: "Claude Code インストール済み／初心者向け・手順つき",
      lessons: [
        {
          id: "goal",
          title: "完成イメージ",
          body: `
            <p class="kicker">GOAL</p>
            <h1>どんなアプリを作る？</h1>
            <p>予定・やること・メモを管理できる、自分専用の“秘書”Webアプリです。ゼロから全部書くのではなく、Claudeに“お願い”しながら少しずつ育てていきます。</p>
            <div data-pic="secretary" data-cap="予定・メモ・振り返りがひと目で分かるダッシュボード"></div>
            <ul>
              <li><strong>予定・タスク管理</strong> … 今日やること・予定をひと目で</li>
              <li><strong>メモ機能</strong> … 思いついたことをすぐ記録</li>
              <li><strong>振り返りダッシュボード</strong> … 1日の終わりに記録・見える化</li>
            </ul>
            <p>セットアップがまだの人は、先に <a href="#/course/code" data-link>Claude Code講座（Windows編）</a> を済ませてください。</p>
          `
        },
        {
          id: "words",
          title: "作る前の3つのことば",
          body: `
            <p class="kicker">BASIC</p>
            <h1>知っておく“3つのことば”</h1>
            <ul>
              <li><strong>フォルダ構成</strong> … アプリは複数のファイルの集まり。ひとつの“箱（フォルダ）”にまとめて管理する</li>
              <li><strong>ローカルサーバー</strong> … 完成前に、自分のPC内だけでアプリを動かして確認する仕組み</li>
              <li><strong>機密情報</strong> … パスワードやAPIキーなど、外に出してはいけない情報。安全に分けて管理する</li>
            </ul>
            <p>この3つが分かれば十分。あとはClaudeが面倒な部分をやってくれます。</p>
          `
        },
        {
          id: "setup",
          title: "始める前に必要なもの",
          body: `
            <p class="kicker">SETUP</p>
            <h1>準備チェック</h1>
            <ul>
              <li><strong>Claude Code</strong> … インストール済み・ログイン済み（有料プラン）</li>
              <li><strong>Node.js</strong> … アプリを動かすための土台。案内どおり導入（つまずいたらClaudeに聞く）</li>
              <li><strong>GitHubアカウント</strong> … コードの保存と公開に使う（無料でOK）</li>
              <li><strong>作業フォルダ</strong> … 秘書アプリを入れる空のフォルダを1つ用意</li>
            </ul>
            <div class="callout">Node.jsやGitHubの導入も、つまずいたらClaudeに聞けば案内してくれます。</div>
          `
        },
        {
          id: "flow",
          title: "全体の流れ（6ステップ）",
          body: `
            <p class="kicker">FLOW</p>
            <h1>作り方は、この6ステップ</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>作る</h3><p>アプリの土台を生成</p></article>
              <article class="op"><span class="num">2</span><h3>デザイン</h3><p>見た目を整える</p></article>
              <article class="op"><span class="num">3</span><h3>機能追加</h3><p>便利機能を足す</p></article>
              <article class="op"><span class="num">4</span><h3>GitHub準備</h3><p>保存先を用意</p></article>
              <article class="op"><span class="num">5</span><h3>アップロード</h3><p>コードを保存</p></article>
              <article class="op"><span class="num">6</span><h3>公開</h3><p>ネットに出す</p></article>
            </div>
            <p>STEP1〜3で“作る”、STEP4〜6で“公開する”。ひとつずつ進みます。</p>
          `
        },
        {
          id: "step1",
          title: "STEP1 土台を作る",
          practice: true,
          body: `
            <p class="kicker">STEP 1</p>
            <h1>アプリの土台を作る</h1>
            <ol>
              <li>作業フォルダでClaude Codeを起動</li>
              <li>「秘書アプリを作って」とお願い</li>
              <li>Node.jsの導入もClaudeが案内</li>
              <li>ローカルで動かして表示を確認</li>
            </ol>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>Node.jsで動く“秘書アプリ”を作ってください。予定・やること・メモを管理でき、トップにダッシュボードを表示。まずは自分のPCで動く最小構成で。完成したら起動方法も教えて。</pre>
            </div>
            <p>ローカルで起動（Claudeの案内どおりに）。よくある例：</p>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>npm install
npm run dev</pre>
            </div>
            <div class="callout">「何を管理したいか」を具体的に伝えるほど、思い通りの土台になります。</div>
          `
        },
        {
          id: "step2",
          title: "STEP2 デザインを整える",
          practice: true,
          body: `
            <p class="kicker">STEP 2</p>
            <h1>見た目を整える</h1>
            <ol>
              <li>見た目の希望を言葉で伝える</li>
              <li>色・文字・余白を調整</li>
              <li>スマホでの見え方も確認</li>
              <li>気に入るまで対話でくり返す</li>
            </ol>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>全体をやさしい色合いにして、文字を読みやすく、余白を広めに。スマホでも見やすいレイアウトに整えてください。ボタンは押しやすい大きさで。</pre>
            </div>
            <div class="callout">専門用語は不要。「もっと明るく」「文字を大きく」など、感覚の言葉でOKです。</div>
          `
        },
        {
          id: "step3",
          title: "STEP3 機能を足す",
          practice: true,
          body: `
            <p class="kicker">STEP 3</p>
            <h1>便利な機能を足す</h1>
            <ol>
              <li>追加したい機能を1つずつ頼む</li>
              <li>「振り返り」機能を追加</li>
              <li>ダッシュボードに反映</li>
              <li>動作を確認し、不具合は相談</li>
            </ol>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>1日の終わりに“振り返り”を記録できる機能を追加してください。良かったこと・改善点を書けて、ダッシュボードに今週の振り返り一覧も表示して。</pre>
            </div>
            <div class="callout warn">機能は一度に詰め込まず、1つずつ追加すると不具合が起きにくいです。</div>
          `
        },
        {
          id: "step4",
          title: "STEP4 GitHubを準備",
          practice: true,
          body: `
            <p class="kicker">STEP 4</p>
            <h1>GitHub を準備する</h1>
            <p><strong>GitHub</strong> とは、作ったコードを保存・管理できる“クラウドの倉庫”です。変更履歴も残せます。自分のパソコンの Git（履歴）とは別物です。</p>
            <ol>
              <li>GitHubアカウントを作る（無料。メールアドレスで登録）</li>
              <li>Claude Codeと連携（案内に沿って安全に認証する）</li>
              <li>端末を認証（GitHub CLI）。「連携して」と頼めばClaudeが手順を案内</li>
            </ol>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>GitHubと連携する手順を、画面の操作順に教えてください。私がOKしてから進めてください。パスワードは私が自分で入力します。</pre>
            </div>
          `
        },
        {
          id: "step5",
          title: "STEP5 アップロード",
          practice: true,
          body: `
            <p class="kicker">STEP 5</p>
            <h1>コードをアップロード</h1>
            <ol>
              <li>保存先リポジトリを用意</li>
              <li>「アップロードして」と頼む</li>
              <li>プライベート（非公開）で管理</li>
              <li>変更履歴を残していく</li>
            </ol>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>このアプリを、GitHubのプライベート（非公開）リポジトリにアップロードしてください。以降は変更したら、その都度アップロードして。</pre>
            </div>
            <div class="callout ok">“プライベート”で保存すれば、コードが勝手に他人に見られる心配はありません。</div>
          `
        },
        {
          id: "step6",
          title: "STEP6 ネットに公開",
          practice: true,
          body: `
            <p class="kicker">STEP 6</p>
            <h1>ネットに公開する</h1>
            <ol>
              <li>Cloudflare Pagesと連携</li>
              <li>GitHubのリポジトリを指定</li>
              <li>自動でビルド・公開される</li>
              <li>発行URLでアクセス確認</li>
            </ol>
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>GitHubと Cloudflare Pages を連携して、このアプリをネットに公開する手順を教えてください。アップロードするたびに自動で更新されるように設定したい。</pre>
            </div>
            <div class="callout">一度つなげば、コードをアップロードするたびに公開サイトが自動で最新になります。公開の操作やパスワード入力は、自分で行ってください。</div>
          `
        },
        {
          id: "trouble",
          title: "つまずき対策",
          body: `
            <p class="kicker">TROUBLE</p>
            <h1>うまくいかない時は？</h1>
            <p>基本は、エラー文や画面の内容をそのままClaudeに伝えることです。</p>
            <div class="qa"><p><strong>Q. アプリが起動しない</strong></p><p>エラー文をそのままClaudeに貼って相談。Node.jsの導入も再確認。</p></div>
            <div class="qa"><p><strong>Q. 思った見た目にならない</strong></p><p>「どこを・どう変えたいか」を具体的に伝えて作り直し。</p></div>
            <div class="qa"><p><strong>Q. GitHub連携でつまずく</strong></p><p>「連携でエラーが出た」と画面の内容を伝えると案内してくれる。</p></div>
            <div class="qa"><p><strong>Q. 公開が反映されない</strong></p><p>少し待って再確認。デプロイ失敗時はClaudeに状況を相談。</p></div>
          `
        },
        {
          id: "safety",
          title: "安全に作る",
          body: `
            <p class="kicker">SAFETY</p>
            <h1>安心して作るための約束</h1>
            <ul>
              <li>パスワードやAPIキーはコードに直接書かない</li>
              <li>公開前のコードは、リポジトリをプライベート（非公開）で保存する</li>
              <li>公開前に、秘密情報がアップロードされていないかチェック</li>
              <li>AIの作ったものを、動かして最終チェックする</li>
            </ul>
          `
        },
        {
          id: "summary",
          title: "まとめ",
          body: `
            <p class="kicker">SUMMARY</p>
            <h1>秘書アプリ、こう作る</h1>
            <ol>
              <li>作る→デザイン→機能追加。日本語のお願いで、少しずつ育てる</li>
              <li>GitHubで保存し、Cloudflareで公開。プライベート管理→自動デプロイ</li>
              <li>困ったらエラーごとClaudeに相談。つまずきも対話で乗り越えられる</li>
            </ol>
            <p>まずは“土台を作る”ところから。できたら <a href="#/course/appedit" data-link>アプリ画面の編集</a> で、文字や色を直してみましょう。</p>
          `
        }
      ]
    }
  },
  quizzes: {
    cowork: [
      {
        q: "Coworkをたとえると、いちばん近いのはどれですか？",
        choices: ["文章で相談に乗ってくれる相手", "ファイルを作って仕上げまで動く作業アシスタント", "パソコンのウイルス対策ソフト"],
        a: 1,
        explain: "チャットは相談相手、Coworkは手を動かす作業アシスタントです。"
      },
      {
        q: "チャットと比べた Cowork の最大の違いは？",
        choices: ["日本語が使えること", "答えではなく、仕上がったファイルで返ってくること", "無料で無制限に使えること"],
        a: 1,
        explain: "同じお願いでも、Coworkは保存された成果物として返します。"
      },
      {
        q: "請求書づくりで、仕上がりを安定させる頼み方は？",
        choices: ["「いい感じにお願い」と短く頼む", "いつ・どの形式・どこに保存するかを具体的に伝える", "一度に全年分・全取引先を頼む"],
        a: 1,
        explain: "日付、PDF、1社1ファイル、保存フォルダまで指定します。"
      },
      {
        q: "できた請求書を送る前に、必ず自分で確認するものは？",
        choices: ["フォントの種類だけ", "金額と宛名", "ファイルサイズだけ"],
        a: 1,
        explain: "数字と宛先の最終チェックは人の仕事です。"
      },
      {
        q: "うまくいかないときの基本は？",
        choices: ["一度に全部頼む", "もっと具体的に伝え、手順を分ける", "パスワードを貼って権限を上げる"],
        a: 1,
        explain: "フォルダ接続・ファイル名・形式指定・手順分割が基本です。"
      },
      {
        q: "コワークでできる4つのことに含まれないものは？",
        choices: ["資料を作る", "ファイルを整理する", "ウイルス駆除ソフトとして使う"],
        a: 2,
        explain: "使い道は、資料作成・整理・アプリ連携・定期実行です。黒い画面は不要です。"
      },
      {
        q: "Gmailの返信を頼むとき、安全な言い方は？",
        choices: ["全部送っておいて", "下書きも作って（送信はしないで）", "パスワードを貼って自動送信"],
        a: 1,
        explain: "送信は自分がOKしてから。下書きまでで止めるのが基本です。"
      }
    ],
    code: [
      {
        q: "無料プランで Claude Code は使えますか？",
        choices: ["使える", "使えない（有料プランが必要）", "週末だけ使える"],
        a: 1,
        explain: "Pro / Max / Team などの有料プランが必要です。"
      },
      {
        q: "今日の教室で使う画面はどれですか？",
        choices: ["行頭が PS C:\\ の PowerShell", "行頭が C:\\ だけの CMD", "メモ帳"],
        a: 0,
        explain: "irm のインストールは PowerShell 向けです。CMDだと失敗しやすいです。"
      },
      {
        q: "PowerShell での推奨インストールコマンドは？",
        choices: ["irm https://claude.ai/install.ps1 | iex", "format C:", "claude install now"],
        a: 0,
        explain: "1行を貼って Enter。管理者権限は不要です。"
      },
      {
        q: "'claude' が認識されないときの最初の対処は？",
        choices: ["パソコンを廃棄する", "ターミナルを一度閉じて開き直す", "パスワードをチャットに貼る"],
        a: 1,
        explain: "それでも駄目なら claude doctor で確認します。"
      },
      {
        q: "最初に触っておきたい設定に含まれないものは？",
        choices: ["モデル選択", "実行前に確認する権限", "他人の口座番号をCLAUDE.mdに書く"],
        a: 2,
        explain: "機密情報は貼らない。CLAUDE.mdはプロジェクトの説明メモです。"
      },
      {
        q: "Git for Windows は必須ですか？ 入れると主に何が増えますか？",
        choices: ["必須。入れないと Claude Code が起動しない", "任意。ファイル変更の履歴が残り、やり直しや説明がしやすくなる", "有料の別サービスなので契約が必要"],
        a: 1,
        explain: "必須ではありません。入れるとセーブポイントのように履歴が残り、差分の確認や作業前のバックアップがしやすくなります。"
      }
    ],
    poster: [
      {
        q: "お手本の画像は、何枚保存しますか？",
        choices: ["できるだけたくさん", "1枚だけ", "色ごとに3枚"],
        a: 1,
        explain: "2枚以上だと、AIがどっちに寄せるか迷って中途半端になります。"
      },
      {
        q: "Canvaに入らないときの、いちばん多い原因は？",
        choices: ["パソコンが古い", "「保存して」と送っていない", "色が4色以上"],
        a: 1,
        explain: "編集できるデザインにしただけでは下書きです。「保存して」と送って初めてCanvaに入ります。"
      },
      {
        q: "Canva AIにダメ出しを聞くとき、飛ばしてはいけない言葉は？",
        choices: ["他は？", "よろしく", "おわり"],
        a: 0,
        explain: "1回目は見た目、2回目の「他は？」で給与・時間・電話番号など中身の間違いが出ます。"
      },
      {
        q: "色の使い方で正しいものは？",
        choices: ["できるだけたくさんの色を使う", "背景・文字・目立たせる色の3色だけ", "全部をローズ色にする"],
        a: 1,
        explain: "割合はだいたい 6：3：1。目立たせる色は見せたい所にだけ使います。"
      },
      {
        q: "印刷する前に、人が必ず読むものは？",
        choices: ["フォントの名前だけ", "電話番号と住所（1字ずつ）", "Pinterestのアカウント名"],
        a: 1,
        explain: "いちばん間違えると困る所なので、崩れていたらCanvaで打ち直します。"
      }
    ],
    intro: [
      {
        q: "Claude Codeをひとことで言うと？",
        choices: ["ウイルス対策ソフト", "日本語でお願いすると、代わりに作ってくれるAIの相棒", "写真だけを編集するアプリ"],
        a: 1,
        explain: "優秀な新人スタッフに、日本語で指示する感覚です。"
      },
      {
        q: "Claudeの3つの入り口に含まれないものは？",
        choices: ["チャット", "Cowork", "Excelのマクロ専用ソフト"],
        a: 2,
        explain: "チャット・Cowork・Codeの3つです。今日の主役はCodeです。"
      },
      {
        q: "バイブコーディングの進め方は？",
        choices: ["最初から完璧な設計図を書いてから一度だけ実行する", "ざっくり頼む → 見る → 対話で直す、をくり返す", "コードを暗記してから始める"],
        a: 1,
        explain: "最初から完璧を目指さず、作って見て直すのがコツです。"
      },
      {
        q: "Git と GitHub のちがいは？",
        choices: ["同じもの", "Gitは自分のパソコンの履歴、GitHubはネット上の倉庫", "GitHubは無料プラン専用"],
        a: 1,
        explain: "用語ミニ辞典どおり、クラウドの倉庫がGitHubです。"
      },
      {
        q: "うまく頼むときの合言葉は？",
        choices: ["できるだけ長く、一度に全部頼む", "ゴールを先に・具体的に・少しずつ直す", "専門用語だけで指示する"],
        a: 1,
        explain: "優秀な新人スタッフへのお願いと同じです。ゴール・具体・対話が合言葉です。"
      }
    ],
    secretary: [
      {
        q: "秘書アプリの土台づくりで、いちばん大切な頼み方は？",
        choices: ["コードを自分で全部書く", "何を管理したいかを具体的に日本語で伝える", "いきなり本番のサーバーに上げる"],
        a: 1,
        explain: "予定・やること・メモなど、管理したいものを具体的に伝えるほど土台が決まります。"
      },
      {
        q: "機能を足すときのコツは？",
        choices: ["一度に全部入れる", "1つずつ追加して、動くか確認する", "デザインは後回しにして公開だけ先にする"],
        a: 1,
        explain: "一度に詰め込むと不具合が増えます。"
      },
      {
        q: "GitHubに上げるとき、初心者におすすめの設定は？",
        choices: ["最初から全世界に公開", "プライベート（非公開）で保存する", "パスワードをREADMEに書く"],
        a: 1,
        explain: "プライベートなら、コードが勝手に他人に見られる心配はありません。"
      },
      {
        q: "Cloudflare Pagesと連携すると、どうなりますか？",
        choices: ["パソコンの電源を切るとサイトも消える", "GitHubにアップロードするたびに公開サイトが自動で最新になる", "有料プランが必須で無料では使えない"],
        a: 1,
        explain: "一度つなげば、アップロードのたびに自動で更新されます。"
      },
      {
        q: "アプリが起動しないときの基本は？",
        choices: ["パソコンを初期化する", "エラー文をそのままClaudeに貼って相談する", "パスワードをチャットに貼る"],
        a: 1,
        explain: "エラー文や画面の内容を伝えると、一緒に解決できます。"
      }
    ]
  },
  prompts: [
    {
      title: "使い方",
      intro: "灰色（黒）の枠の文章をコピーして、Claude Codeの入力欄に貼り付けます。〔　〕の部分は、自分の会社やファイルの名前に書き換えてください。一度に頼むのは1〜3個まで。大事なファイルはコピーを取ってから。最初は練習用フォルダと、権限「手動」が安心です。",
      items: []
    },
    {
      title: "① はじめの一歩",
      items: [
        { name: "フォルダの中身を知る", text: "このフォルダに何が入っているか、初心者にも分かるように一覧で説明してください。" },
        { name: "先に計画を出してもらう", text: "作業を始める前に、何をどの順番でやるか計画を見せてください。私がOKと言ってから進めてください。" },
        { name: "分からない点は質問してもらう", text: "この作業で分からない点があれば、推測せずに私に質問してください。" },
        { name: "やさしく説明してもらう", text: "今やったことを、専門用語を使わずに3行でまとめてください。" }
      ]
    },
    {
      title: "② ホームページ：構成を決めて作る",
      items: [
        { name: "構成案をもらう", text: "「〔会社情報.txt〕」を読んで、会社紹介ホームページのページ構成案を3パターン出してください。それぞれの狙いも書いてください。まだ作成はしないでください。" },
        { name: "文章を整える", text: "私のメモをもとに、トップページのキャッチコピー案を5つと、会社紹介文（200字程度）を作ってください。対象のお客様は〔地域の個人・中小企業など〕です。" },
        { name: "サイトを作る（5項目で指示する）", text: "構成案〔B〕で、当社のホームページを作ってください。\\n・目的：〔地域のお客様に当社を知ってもらい、お問い合わせを増やす〕\\n・ページ：〔トップ／サービス／会社概要／お問い合わせ〕\\n・デザイン：〔清潔感と信頼感。色は紺と白〕。スマホでも見やすく\\n・材料：このフォルダの「〔会社情報.txt〕」と「写真」フォルダを使う\\n・進め方：作る前に全体の計画を見せて、私のOKを待ってから作る。完成したら確認の仕方を教えてください" },
        { name: "参考サイトの雰囲気に寄せる", text: "〔参考サイトのURL〕のような落ち着いた雰囲気にしてください。ただし、文章やデザインをそのまま真似しないでください。" }
      ]
    },
    {
      title: "③ ホームページ：見ながら直す",
      items: [
        { name: "見た目を直す", text: "トップの写真を画面いっぱいに大きくして、上に白い文字でキャッチコピーを重ねてください。" },
        { name: "スクリーンショットで指示する", text: "添付した画像の赤丸の部分を直してください。〔文字が小さくて読みにくい／余白が狭い など〕" },
        { name: "スマホで崩れないようにする", text: "スマホの幅で見たときに崩れている所がないか確認して、あれば直してください。" },
        { name: "誤りを一覧にしてもらう（まだ直さない）", text: "全ページの電話番号・住所・リンク切れ・誤字を確認して、見つかったものを一覧にしてください。まだ直さないでください。" },
        { name: "ひとつ前に戻す", text: "今の修正は取り消して、ひとつ前の状態に戻してください。" }
      ]
    },
    {
      title: "④ ホームページ：公開して育てる",
      intro: "公開やドメイン設定の操作は自分で行い、AIには手順を聞く形が安全です。パスワードは入力欄に貼らないでください。",
      items: [
        { name: "公開の手順を聞く", text: "このサイトを〔Netlify Drop／Cloudflare Pages〕で公開したいです。私がやる手順を、画面の操作順に番号付きで教えてください。公開用にどのフォルダを使えばよいかも教えてください。" },
        { name: "独自ドメインを設定する", text: "独自ドメイン〔example.co.jp〕をこのサイトに設定したいです。ドメイン会社の画面（スクリーンショットを添付）で、どこに何を入力すればよいか教えてください。" },
        { name: "公開前の最終確認", text: "会社のホームページを公開する前のチェックリストを作って、このサイトが満たしているか一つずつ確認してください。足りないものは、直し方も書いてください。" },
        { name: "お問い合わせフォームを動かす", text: "お問い合わせフォームから送信された内容が、〔私のメールアドレス〕に届くようにしたいです。初心者でもできる方法を、費用も含めて教えてください。" },
        { name: "お知らせを更新する", text: "「お知らせ」に次の文章を追加してください。日付は今日にしてください。\\n〔ここにお知らせの内容〕" }
      ]
    },
    {
      title: "⑤ CLAUDE.md（ルールブック）を作って育てる",
      items: [
        { name: "頼んで作ってもらう", text: "このフォルダで作業するときのルールをまとめたCLAUDE.mdを作ってください。作る前に、会社名・目的・守ってほしいことを私に質問してください。" },
        { name: "自動で下書きを作る", text: "/init" },
        { name: "記入例をもとに作る", text: "次の内容でCLAUDE.mdを作ってください。見出しと箇条書きで、短くまとめてください。\\n・会社名：〔株式会社〇〇〕（〔〇〇市〕）\\n・目的：〔会社のホームページを作って更新する〕\\n・色は〔紺と白〕、スマホで見やすくする\\n・作る前に計画を見せて、私の承認を待つ\\n・元のファイルは上書きしない\\n・専門用語を使わずに説明する" },
        { name: "ルールを書き足す", text: "今の注意点（〔電話番号は変更しない〕）をCLAUDE.mdに追加してください。" },
        { name: "中身を見直してもらう", text: "CLAUDE.mdを読んで、長すぎる所・あいまいな所・ルール同士が矛盾している所を一覧にしてください。まだ直さないでください。" },
        { name: "読み込まれているか確認する", text: "/memory" }
      ]
    },
    {
      title: "⑥ 困ったとき・仕上げに使う",
      items: [
        { name: "作業前にバックアップを取る", text: "作業を始める前に、このフォルダの中身を「〔バックアップ_今日の日付〕」という別フォルダにコピーしてください。元のファイルには触らないでください。" },
        { name: "エラーが出たとき", text: "次のエラーが出ました。原因と直し方を、専門用語を使わずに説明してください。直す前に、何を変更するか教えてください。\\n〔ここにエラーの文章、または画面のスクリーンショットを添付〕" },
        { name: "何を変えたか確認する", text: "今日このフォルダで変更したファイルと、その内容を一覧にしてください。" },
        { name: "プライバシーポリシーの下書きを作る", text: "お問い合わせフォームで〔氏名・メールアドレス・電話番号〕を受け取ります。当社のホームページに載せるプライバシーポリシーの下書きを作ってください。会社名は〔株式会社〇〇〕です。最終的な内容は専門家に確認する前提で作ってください。" },
        { name: "利用量を節約して進める", text: "利用量をなるべく使わずに進めたいです。この作業を小さな手順に分けて、1つずつ進めてください。" }
      ]
    },
    {
      title: "⑦ 応用編：自分仕様に育てる",
      intro: "基本操作のあとに使います。〔　〕は自分の作業名に書き換えてください。削除・送信・公開は、必ず自分でOKしてから。",
      items: [
        { name: "よく使う手順をSkillにする", text: "よく使う「〔請求書チェック〕の手順」をSkillにまとめて。次回から /invoice-check と打てば、同じ手順を実行できるようにして。" },
        { name: "必ず守るRulesを残す", text: "次の約束を、毎回必ず守るRulesとして残して。\\n・APIキー等の秘密情報は出さない\\n・削除／送信／公開は必ず確認を取る\\n・公開リポジトリに機密を含めない" },
        { name: "大きい作業を段階で進める", text: "「〔予約サイト〕」を作りたい。①構成の設計案を出す→②承認したら作る→③スマホ表示を確認→④公開手順、の順で。各段階でいったん止まって私の確認を待って。" },
        { name: "今の状態を保存する", text: "今の状態を保存（コミット）して。おかしくなったら、この時点に戻せるようにしておいて。大きく変えたい時は別ブランチで試して。" },
        { name: "連携先からレポートを作る", text: "連携済みの〔サービス名〕から最新データを取ってきて、今日のレポートにまとめて。足りない情報はブラウザで調べて補って。送信や公開はしないで。" },
        { name: "役割と形式を指定する", text: "あなたは中小企業の財務コンサルとして。この試算表を分析し、①要点3つ→②リスク→③打ち手、の順に、経営者向けのやさしい言葉で、A4・1枚にまとめて。" }
      ]
    }
  ]
};
