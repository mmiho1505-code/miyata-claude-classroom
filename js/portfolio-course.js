(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.portfolio = {
    id: "portfolio",
    title: "はじめてのClaude Code講座｜ポートフォリオサイトを作って公開",
    subtitle: "1ページを作る。GitHub Pages か Netlify で出す。公開前は人が確認",
    duration: "約55分",
    audience: "パソコン・Node.js・Claude Pro以上・GitHub。Codeが入っている人",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">GOAL　はじめてのCode</p>
            <h1>1ページを作って、URLで見せる</h1>
            <p>できあがりは1ページです。ファーストビュー → 自己紹介 → できること → 制作実績 → よくある質問 → お問い合わせ（Googleフォームに飛ぶ）。スマホでも見えます。</p>
            <p>GitHub Pages の URL は <code>ユーザー名.github.io/portfolio-〇〇</code> の形になります。名刺のQRなど、見せる用に使えます。売上や副業の成功を保証するものではありません。</p>
            <div class="ops">
              <article class="op"><span class="num">準</span><h3>事前</h3><p>パソコン、Node.js、Claude Pro以上、GitHub。ターミナルで <code>claude</code></p></article>
              <article class="op"><span class="num">作</span><h3>作る</h3><p>テンプレを埋めて Code に頼む。数回直す</p></article>
              <article class="op"><span class="num">出</span><h3>出す</h3><p>GitHub Pages、または Netlify にドロップ</p></article>
            </div>
            <div class="callout warn">まだ Code が入っていない人は <a href="#/course/nodejs" data-link>Node.js</a>、<a href="#/course/code" data-link>Windows編</a> ／ <a href="#/course/codemac" data-link>Mac編</a>、<a href="#/course/today/cursorcode" data-link>Cursor に Claude Code</a> です。パスワードは教室に書きません。</div>
            <p>講義配布の <code>portfolio.md</code> から作る上級の流れ（EP269）は、このあとの「配布物」からあります。どちらも最後は <code>index.html</code> です。</p>
          `
      },
      {
        id: "prep",
        title: "事前に準備するもの",
        body: `
            <p class="kicker">準備</p>
            <h1>パソコン、Node、Pro、GitHub</h1>
            <ul>
              <li>パソコン</li>
              <li>Node.js（<a href="#/course/nodejs" data-link>講座</a>。必須ではない入れ方もあります）</li>
              <li>Claude の Pro 以上</li>
              <li>GitHub アカウント</li>
            </ul>
            <p>Claude Code が入っているかは、ターミナルで <code>claude</code> と打てば確認できます。キャラクターのアイコンが出ればOKです。初回はブラウザでログインします。確認の英語（このフォルダを信頼しますか）はエラーではありません。<a href="#/course/today/cursorcode" data-link>今日の講義</a> に見方があります。</p>
          `
      },
      {
        id: "vscode",
        title: "① VS Codeを準備する",
        body: `
            <p class="kicker">画面</p>
            <h1>フォルダを開いて、拡張を入れる</h1>
            <ol>
              <li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener">Visual Studio Code</a> を入れる</li>
              <li>配布フォルダを、ウィンドウへドラッグ＆ドロップして開く</li>
              <li>拡張機能（左の四角が並んだアイコン。Windows は Ctrl＋Shift＋X、Mac は ⌘＋Shift＋X）で「Claude Code for VS Code」を検索して入れる</li>
            </ol>
            <p>生成されたコードを横に並べて見ながら指示できるのが、ターミナルだけより便利な点です。Cursor を使う人は、同じ Anthropic の Claude Code 拡張です。<a href="#/course/today/cursorcode" data-link>Cursor のページ</a>。</p>
          `
      },
      {
        id: "fill",
        title: "② プロンプトのテンプレートを埋める",
        practice: true,
        body: `
            <p class="kicker">中身　練習</p>
            <h1>【　】を、自分の言葉に変える</h1>
            <p>記入シートに名前・職種・拠点・自己紹介・実績・よくある質問などを書き、テンプレートの【　】部分を置き換えます。配布のシートは講義で渡します。</p>
            <p><strong>裏ワザ</strong>：テンプレートを、普段使っている Claude や ChatGPT に貼り、「上記のプロンプトに私の情報を反映させて」と頼みます。蓄積されている自分の情報で、中身を埋めてくれます。無い情報は「不明」のままにしてもらいます。秘密は渡しません。</p>
            ${box(`上記のプロンプトに私の情報を反映させてください。知らない項目は「不明」のままにしてください。パスワードや口座は書かないでください。まだサイトは作らないでください。`)}
          `
      },
      {
        id: "polish",
        title: "③ 生成して仕上げる",
        practice: true,
        body: `
            <p class="kicker">直す　練習</p>
            <h1>初稿のあと、数回だけ足す</h1>
            <p>最初の一回で、ほぼ完成形の初稿ができます。そのあと「画像を差し替えて」「ファビコンを設定して」「お問い合わせを付けて」などと追加で頼み、数回やり取りすれば公開できる品質になります。</p>
            <p>デザインを変えたいときは、カラーテーマやフォントの雰囲気を変えるよう頼みます。参考デザインを添付して、AIと壁打ちしながら固めるのがおすすめです。</p>
            ${box(`画像を差し替えて。ファビコンを設定して。お問い合わせはGoogleフォームのリンクにして。まだ公開しないでください。`)}
            <h2>動作モード</h2>
            <div class="ops">
              <article class="op"><span class="num">手</span><h3>マニュアル</h3><p>いちいち確認を求めてくる。安全だが作業が止まりがち</p></article>
              <article class="op"><span class="num">自</span><h3>オート</h3><p>どんどん進める。速いが、勝手に進んでしまうリスクがある</p></article>
            </div>
            <p>教室では、公開・削除の前は人が見ます。オートのときは、送る・消す・公開を先に許可しないでください。直す前は「まず改善案。コードはまだ変えないで」（<a href="#/course/trainapp" data-link>工程の講座</a>）。</p>
          `
      },
      {
        id: "ghpages",
        title: "GitHub Pages で公開する",
        practice: true,
        body: `
            <p class="kicker">公開</p>
            <h1>履歴が残る場所に置いて、Pages を押す</h1>
            <p>GitHub はコードの保管場所です。変更履歴が残るので、前の状態に戻せます。公開リポジトリには、パスワードや顧客名簿を入れません。</p>
            <p>GitHub MCP を Claude Code につなぐと、難しい git コマンドを打たなくて済みます。「GitHubをMCPで接続したい」と頼めば手順を教えてくれます。<code>/mcp</code> で接続状況を確認できます。</p>
            ${box(`GitHubをMCPで接続したいです。今の画面に合わせて、押す場所を日本語で1つずつ教えてください。パスワードは私が自分で入れます。入力欄には書かないでください。`)}
            <p>つながったら、〔portfolio-名前〕を自分用に変えて送ります。公開前に、表示やリンクのチェックも頼んでおくと安心です。</p>
            ${box(`GitHub MCPを使ってこのサイトを公開する準備をして。〔portfolio-namae〕という名前でpublicのリポジトリを作成し、今のフォルダのファイル一式をmainブランチにpushして。完了したらURLを教えて。秘密の値は入れないで。まだ Settings の Pages は、私が自分で押します。`)}
            <p>最後に GitHub で「Settings」→「Pages」→「Branch: main」→「Save」を押し、数分待つと公開されます。送る・消すは人が決めます。</p>
          `
      },
      {
        id: "cans",
        title: "Pagesでできること・できないこと",
        body: `
            <p class="kicker">向き不向き</p>
            <h1>静的なサイトは向く。データベースは向かない</h1>
            <p><strong>できる</strong>：HTML・CSS・JavaScript だけの静的なサイト（今回のポートフォリオなど）。無料です。</p>
            <p><strong>できない</strong>：WordPress のように、データベースやサーバー側の処理が必要なサイト。</p>
            <p>お問い合わせフォームは、Googleフォームや Tally を埋め込みます（教室では送信内容の確認は人）。サーバー側の処理が必要なら Cloudflare Pages など、WordPress ならレンタルサーバーを使います。</p>
            <p>フォルダをドロップするだけなら、このあとの Netlify でも出せます。</p>
          `
      },
      {
        id: "kit",
        title: "① 配布物を準備する",
        body: `
            <p class="kicker">EP269　配布フォルダ</p>
            <h1>portfolio フォルダを Code で開く</h1>
            <ol>
              <li>講義の配布リンクを開く。Mac 用と Windows 用が分かれています</li>
              <li>Windows は、ダウンロード前に文字が化けて見えることがあります。<strong>ダウンロードしたあと</strong>は直ります</li>
              <li>解凍した <strong>portfolio</strong> フォルダを、Claude デスクトップアプリの <strong>Code タブ</strong>で開く</li>
            </ol>
            <p>記入見本として <strong>記入例_Penta</strong> が同梱されています。迷ったら先にこれを見ます。</p>
            <div class="callout">配布リンクは講義で渡します。この教室サイトからは、ZIP は配っていません。</div>
          `
      },
      {
        id: "images",
        title: "② 画像を入れる",
        body: `
            <p class="kicker">手順2</p>
            <h1>images フォルダ。名前は半角英数字</h1>
            <p>顔写真や作品の画像は <code>images</code> フォルダに入れます。なければ、用意されている <strong>avatar1</strong>・<strong>avatar2</strong> を使います。</p>
            <div class="callout warn">ファイル名は <strong>半角英数字</strong> にします（例：<code>work01.jpg</code>）。日本語の名前だと、公開したときに絵が出ないことがあります。</div>
          `
      },
      {
        id: "md",
        title: "③ 設計書を人が書く",
        practice: true,
        body: `
            <p class="kicker">手順3　約15分　人が書く</p>
            <h1>portfolio.md の「：」のあと</h1>
            <p>メモ帳などで <code>portfolio.md</code> を開き、名前・肩書き・自己紹介・目指すこと・画像のファイル名・作品を、各項目の <strong>：</strong> のあとに書き込みます。ここは人が書きます。</p>
            <p>作品がなければ、見本の「作品1：自分のポートフォリオサイト」を使ってもOKです。</p>
            ${box(`名前：
肩書き：
自己紹介：
目指すこと：
顔写真のファイル名：（例 face.jpg）
作品1の名前：自分のポートフォリオサイト
作品1の説明：
作品1の画像ファイル名：`)}
            <p>記入例_Penta を見ながら、自分の言葉に差し替えます。</p>
          `
      },
      {
        id: "make",
        title: "④ Claude Codeに作らせる",
        practice: true,
        body: `
            <p class="kicker">手順4</p>
            <h1>index.html の1ファイルにまとめる</h1>
            <p>Code に、下を貼ります。</p>
            ${box(`自己紹介と作品を並べた1ページのポートフォリオサイトを index.html という名前で作ってください。
守ってほしいこと：
・HTML・CSS・JavaScriptは index.html の1ファイルにまとめる（ファイルが増えると混乱するため）
・画像は images フォルダのものを使う
・スマホでもパソコンでも見やすいレイアウトにする（ここが最重要）`)}
            <ul>
              <li>途中で「許可しますか？」と何度も聞かれます。今回のこのフォルダの作業では、<strong>許可してOK</strong>です（送る・消す・別の場所を触る話は別です）</li>
              <li>作品の画像が出ていないときは「画像を表示するようにして」と頼めば直してくれます</li>
              <li>できあがる速さとデザインの質は、選んだモデル（Sonnet は速い）とエフォート（作業量）の設定で変わります</li>
            </ul>
          `
      },
      {
        id: "netlify",
        title: "⑤ Netlifyで公開する",
        practice: true,
        body: `
            <p class="kicker">手順5</p>
            <h1>フォルダをドロップするだけ</h1>
            <ol>
              <li><a href="https://www.netlify.com/" target="_blank" rel="noopener">Netlify</a> を開き、Sign up（Google アカウントでログインでよい）</li>
              <li>名前とチーム名を入力し、「Continue to deploy」</li>
              <li>作った <strong>portfolio フォルダ</strong>を、画面にドラッグ＆ドロップする</li>
              <li>表示された URL を開けば完成です</li>
            </ol>
            <div class="callout warn">トップのファイル名は必ず <code>index.html</code> です。違う名前だとエラーになります。</div>
            <p>公開したページは、誰でも URL を知れば見られます。住所や電話を載せすぎないでください。</p>
          `
      },
      {
        id: "qa",
        title: "質疑応答から",
        body: `
            <p class="kicker">よくある質問</p>
            <h1>Codex・載せるもの・情報の集め方</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>Claude Code と Codex</h3><p>ポートフォリオ程度なら、差はほとんどありません。本格的なシステムを作るなら Claude 寄り、というのが講師の感想です。一発目の出来より、<strong>そのあと自分で手直しを重ねる</strong>ことで良し悪しが決まります。</p></article>
              <article class="op"><span class="num">2</span><h3>何を載せるか</h3><p>デザイン・システム開発など、分野ごとにセクションを分けるのがよいです。何でも載せるのではなく、<strong>人に見せて自信があるもの</strong>に厳選します。</p></article>
              <article class="op"><span class="num">3</span><h3>情報収集</h3><p>基本は Anthropic の公式発信（英文は Claude に日本語にしてもらう）と、YouTube で気になったものだけ。手当たり次第に集めると頭がパンクします。</p></article>
            </div>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">覚えておくこと</p>
            <h1>人が書く。Codeが作る。Pages かドロップ</h1>
            <ol>
              <li>事前：<code>claude</code> で入っているか確認。VS Code か Cursor でフォルダを開く</li>
              <li>テンプレの【　】を埋める。裏ワザは普段の Claude／ChatGPT に反映させる</li>
              <li>初稿のあと、画像・ファビコン・フォームを数回。公開・削除の前は人が見る</li>
              <li>GitHub Pages（MCP で push して Settings→Pages）か、Netlify にドロップ</li>
              <li>EP269：<code>portfolio.md</code> は人が書く。<code>index.html</code> の1ファイル。画像は半角英数字</li>
            </ol>
            <p>静的サイト向きです。WordPress の代わりにはなりません。</p>
            <p>画面の直し方は <a href="#/course/appedit" data-link>アプリ画面の編集</a> です。</p>
            <p><a class="btn-orange" href="https://www.netlify.com/" target="_blank" rel="noopener">Netlify を開く</a>
            <a class="btn-dark" href="#/course/shop" data-link>店舗サイト（公開）へ</a></p>
          `
      }
    ]
  };

  Object.assign(CLASSROOM.quizzes, {
    portfolio: [
      {
        q: "公開するとき、いちばん上のファイル名は？",
        choices: ["site.htm なら何でも", "index.html", "portfolio.md のまま"],
        a: 1,
        explain: "違う名前だと Netlify でエラーになります。"
      },
      {
        q: "画像のファイル名で気をつけることは？",
        choices: ["日本語の長い名前がよい", "半角英数字にする。日本語だと公開後に出ないことがある", "拡張子は付けない"],
        a: 1,
        explain: "例：work01.jpg。images フォルダに入れます。"
      },
      {
        q: "portfolio.md は誰が書く？",
        choices: ["必ず Claude に全部書かせる", "人が書く。：のあとに名前や作品を入れる", "Netlify が自動で作る"],
        a: 1,
        explain: "設計書は人。作るのは Code。約15分です。"
      },
      {
        q: "Claude Code と Codex の、この回での講師の見方は？",
        choices: ["ポートフォリオ程度なら差はほとんどない。あとの手直しが大事", "Codex じゃないと公開できない", "Claude は使ってはいけない"],
        a: 0,
        explain: "本格的なシステムなら Claude 寄り、というのが感想です。一発目より直しです。"
      },
      {
        q: "GitHub Pages 向きなのは？",
        choices: ["データベースが必要な会員サイト", "HTML・CSS・JavaScript だけの静的な1ページ", "WordPress そのもの"],
        a: 1,
        explain: "お問い合わせは Googleフォームや Tally。サーバー処理が必要なら Cloudflare Pages など。"
      },
      {
        q: "公開リポジトリに入れていけないものは？",
        choices: ["自己紹介の文章", "パスワードや顧客名簿", "index.html"],
        a: 1,
        explain: "履歴が残ります。秘密は入れません。"
      }
    ]
  });
})();
