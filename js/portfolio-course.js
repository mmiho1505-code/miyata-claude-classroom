(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.portfolio = {
    id: "portfolio",
    title: "EP269 Claude Codeでポートフォリオサイトを公開しよう",
    subtitle: "自己紹介＋作品一覧を1ページで作り、Netlifyでネットに出す。上級",
    duration: "約40分",
    audience: "Claude Code（デスクトップ）が入っている人／上級",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">EP269　上級</p>
            <h1>プログラムを書かずに、公開まで</h1>
            <p>Claude Code で「自己紹介＋作品一覧」の1ページサイトを作り、<strong>Netlify</strong> でネットに公開するところまでやります。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>人が書く</h3><p>設計書 <code>portfolio.md</code>（約15分）</p></article>
              <article class="op"><span class="num">2</span><h3>Codeが作る</h3><p><code>index.html</code> の1ファイル</p></article>
              <article class="op"><span class="num">3</span><h3>ネットに出す</h3><p>フォルダを Netlify にドロップ</p></article>
            </div>
            <div class="callout warn">上級者向けです。Claude Code（デスクトップアプリ）のインストールとログインは、先に済ませておいてください。まだの人は <a href="#/course/code" data-link>Windows編</a> または <a href="#/course/codemac" data-link>Mac編</a>、<a href="#/course/today/cursorcode" data-link>Cursor に Claude Code</a> です。</div>
          `
      },
      {
        id: "kit",
        title: "① 配布物を準備する",
        body: `
            <p class="kicker">手順1</p>
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
            <h1>人が設計。Codeが1ファイル。ドロップで公開</h1>
            <ol>
              <li>portfolio フォルダを Code で開く。画像は半角英数字</li>
              <li><code>portfolio.md</code> は人が書く</li>
              <li><code>index.html</code> に HTML・CSS・JavaScript をまとめる。スマホ見やすさが最重要</li>
              <li>Netlify にフォルダをドロップ。名前は index.html</li>
            </ol>
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
      }
    ]
  });
})();
