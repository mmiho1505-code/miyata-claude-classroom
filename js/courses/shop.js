(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.shop = {
    id: "shop",
    title: "店舗サイト・ポートフォリオ公開",
    subtitle: "紹介ページ＋予約フォーム、自己紹介の1ページを作ってネットに出す",
    duration: "約60分",
    audience: "Claude Code インストール済み／GitHubアカウントがある人",
    lessons: [
      {
        id: "goal",
        title: "作るものと準備",
        was: ["shop/goal", "shop/words", "shop/setup", "shop/flow", "portfolio/goal", "portfolio/prep"],
        body: `
            <p class="kicker">GOAL　1／7</p>
            <h1>紹介ページを作って、URLで見せる</h1>
            <p>店の紹介は紙。予約は電話です。今日は紹介ページに予約フォームを付けて、ネットに公開します。</p>
            <div data-pic="shop" data-cap="紹介・アクセス・予約フォーム。スマホでも見やすく"></div>
            <p>前半は店舗・事務所サイト（トップ・サービス・アクセス・お問い合わせの4ページ＋フォーム）。後半は自己紹介の1ページ（ポートフォリオ）です。</p>
            <h2>準備</h2>
            <ul>
              <li>Claude Code（Claude の Pro 以上）。ターミナルで <code>claude</code> と打ち、キャラクターのアイコンが出ればOK。まだの人は <a href="#/course/code" data-link>Claude Code講座</a></li>
              <li>Node.js</li>
              <li>GitHubアカウント（無料）</li>
              <li>掲載内容：店名・住所・電話・営業時間・地図・写真</li>
              <li>フォームの受取先メール</li>
            </ul>
            <div class="callout warn">公開したページは、URLを知れば誰でも見られます。住所・電話・営業時間は公開前に人が読みます。パスワードは自分で入れ、公開リポジトリにパスワードや顧客名簿を入れません。公開・削除の前は人が見ます。</div>
          `
      },
      {
        id: "make",
        title: "店舗サイトを作る",
        practice: true,
        was: ["shop/step1", "shop/step2", "shop/step4"],
        body: `
            <p class="kicker">作る　2／7　練習</p>
            <h1>4ページを作って、見た目を整える</h1>
            <p>載せたい情報と写真をフォルダにそろえてから、順に貼ります。</p>
            ${box(`うちの事務所の紹介サイトを作りたいです。トップ・サービス・アクセス・お問い合わせの4ページ構成で考えています。まず全体の作り方を教えて。`)}
            ${box(`トップ・サービス・アクセス・お問い合わせの4ページのサイトを作って。スマホでも見やすく。載せる文章のたたき台も一緒に書いて。`)}
            ${box(`全体を落ち着いた雰囲気に整えて。写真を大きめに、文字を読みやすく、ボタンは押しやすい大きさに。スマホでの見え方も整えて。`)}
            <p>文章のたたき台は、あとで自分の言葉に直します。見た目は「もっと明るく」など感覚の言葉で、気に入るまで直せます。</p>
          `
      },
      {
        id: "form",
        title: "予約フォームを付ける",
        practice: true,
        was: ["shop/step3", "portfolio/cans"],
        body: `
            <p class="kicker">フォーム　3／7　練習</p>
            <h1>名前・連絡先・希望日・内容を受け付ける</h1>
            <p>入力項目を決めて、送信がメールに届くようにします。テスト送信まで確かめます。</p>
            ${box(`予約・問い合わせフォームを付けて。名前・連絡先・希望日・内容を入力でき、送信されたら私のメールに届くようにする方法を教えて。`)}
            <p>メールに届くには外部サービスとの連携が必要です。手順は Claude が案内します。迷惑送信を防ぐ設定も入れます。</p>
            <p>HTML・CSS・JavaScript だけの静的なサイトなら、無料で公開できます。データベースやサーバー側の処理が必要なサイト（WordPress など）は向きません。フォームは Googleフォームや Tally を埋め込む方法もあります。</p>
          `
      },
      {
        id: "publish",
        title: "GitHub＋Cloudflareで公開",
        practice: true,
        was: ["shop/step5", "shop/step6", "shop/trouble", "shop/safety"],
        body: `
            <p class="kicker">公開　4／7　練習</p>
            <h1>GitHubに保存して、Cloudflare Pagesで出す</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>GitHubを準備</h3><p>アカウント作成、Claude Codeと連携、コードを保存</p></article>
              <article class="op"><span class="num">2</span><h3>公開</h3><p>Cloudflare Pagesと連携。URLを確認。独自ドメインは任意</p></article>
            </div>
            ${box(`このサイトを公開したいので、GitHubのアカウント作成とClaude Codeとの連携、コードのアップロードまで案内して。`)}
            ${box(`GitHubとCloudflare Pagesを連携して公開して。更新するたびに自動で反映されるように。独自ドメインを後から設定する方法も教えて。`)}
            <p>一度つなげば、直すたびに公開サイトが自動で最新になります。公開の最終判断は自分でします。</p>
            <h2>うまくいかないとき</h2>
            <ul>
              <li>フォームが送れない … 受取サービスの設定（送信先メール）を確認</li>
              <li>公開が反映されない … 少し待って再確認。失敗時は状況をClaudeに相談</li>
              <li>スマホで崩れる … 「スマホでも見やすく」と伝えて調整</li>
              <li>写真が重い … 画像を軽くする方法をClaudeに聞く</li>
            </ul>
          `
      },
      {
        id: "portfolio",
        title: "自己紹介の1ページを書く",
        practice: true,
        was: ["portfolio/vscode", "portfolio/kit", "portfolio/images", "portfolio/md", "portfolio/fill"],
        body: `
            <p class="kicker">ポートフォリオ　5／7　練習</p>
            <h1>portfolio.md は人が書く</h1>
            <p>講義で配る portfolio フォルダを開いて、中身を人が書きます。この教室サイトからは、ZIP は配っていません。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>開く</h3><p>解凍した <strong>portfolio</strong> フォルダを、Claude デスクトップの <strong>Code タブ</strong>（または <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VS Code</a> に「Claude Code for VS Code」拡張）で開く。Windows で文字化けして見えても、ダウンロード後は直ります</p></article>
              <article class="op"><span class="num">2</span><h3>画像</h3><p>顔写真や作品を <code>images</code> に入れる。名前は半角英数字（例 <code>work01.jpg</code>）。なければ avatar1・avatar2</p></article>
              <article class="op"><span class="num">3</span><h3>書く（約15分）</h3><p>メモ帳で <code>portfolio.md</code> を開き、各項目の「：」のあとに書く。見本は 記入例_Penta</p></article>
            </div>
            ${box(`名前：
肩書き：
自己紹介：
目指すこと：
顔写真のファイル名：（例 face.jpg）
作品1の名前：自分のポートフォリオサイト
作品1の説明：
作品1の画像ファイル名：`)}
            <p>テンプレートの【　】は、普段使っている Claude や ChatGPT に貼って埋めてもらう手もあります。</p>
            ${box(`上記のプロンプトに私の情報を反映させてください。知らない項目は「不明」のままにしてください。パスワードや口座は書かないでください。まだサイトは作らないでください。`)}
          `
      },
      {
        id: "build",
        title: "Codeに作らせて仕上げる",
        practice: true,
        was: ["portfolio/make", "portfolio/polish"],
        body: `
            <p class="kicker">ポートフォリオ　6／7　練習</p>
            <h1>index.html の1ファイルにまとめる</h1>
            <p>フォルダで Code を開いて貼ります。このフォルダの作業なら「許可しますか？」は許可してOKです（送る・消す・別の場所を触る話は別）。</p>
            ${box(`自己紹介と作品を並べた1ページのポートフォリオサイトを index.html という名前で作ってください。
守ってほしいこと：
・HTML・CSS・JavaScriptは index.html の1ファイルにまとめる（ファイルが増えると混乱するため）
・画像は images フォルダのものを使う
・スマホでもパソコンでも見やすいレイアウトにする（ここが最重要）`)}
            <p>初稿のあと、数回だけ足します。画像が出ないときは「画像を表示するようにして」。</p>
            ${box(`画像を差し替えて。ファビコンを設定して。お問い合わせはGoogleフォームのリンクにして。まだ公開しないでください。`)}
          `
      },
      {
        id: "pages",
        title: "Pages か Netlify で出す",
        practice: true,
        was: ["portfolio/ghpages", "portfolio/netlify", "portfolio/qa", "portfolio/summary", "shop/summary"],
        body: `
            <p class="kicker">公開　7／7　練習</p>
            <h1>GitHub Pages、またはフォルダをドロップ</h1>
            <h2>GitHub Pages</h2>
            <p>GitHub MCP をつなぐと、git コマンドを打たずに済みます。<code>/mcp</code> で接続状況を確認できます。</p>
            ${box(`GitHubをMCPで接続したいです。今の画面に合わせて、押す場所を日本語で1つずつ教えてください。パスワードは私が自分で入れます。入力欄には書かないでください。`)}
            <p>〔portfolio-namae〕を自分用に変えて送ります。</p>
            ${box(`GitHub MCPを使ってこのサイトを公開する準備をして。〔portfolio-namae〕という名前でpublicのリポジトリを作成し、今のフォルダのファイル一式をmainブランチにpushして。完了したらURLを教えて。秘密の値は入れないで。まだ Settings の Pages は、私が自分で押します。`)}
            <p>最後に GitHub で「Settings」→「Pages」→「Branch: main」→「Save」。数分で <code>ユーザー名.github.io/portfolio-〇〇</code> に出ます。</p>
            <h2>Netlify</h2>
            <ol>
              <li><a href="https://www.netlify.com/" target="_blank" rel="noopener">Netlify</a> で Sign up（Google アカウントでよい）</li>
              <li>名前とチーム名を入れて「Continue to deploy」</li>
              <li>portfolio フォルダを画面にドラッグ＆ドロップ</li>
              <li>表示された URL を開けば完成。トップのファイル名は必ず <code>index.html</code></li>
            </ol>
            <p>載せるのは、人に見せて自信があるものに絞ります。一発目より、あとの手直しで良し悪しが決まります。</p>
          `
      }
    ]
  };
})();
