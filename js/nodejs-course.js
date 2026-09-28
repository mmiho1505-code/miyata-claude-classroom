(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.nodejs = {
    id: "nodejs",
    title: "【環境構築②】Node.jsのインストール",
    subtitle: "Claude Code を入れる前の準備。JavaScript を動かす土台",
    duration: "約4分",
    audience: "Claude Code を入れる人／Windows と Mac 共通",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">環境構築②　約4分</p>
            <h1>Claude Code の前に、Node.js を入れる</h1>
            <p>この回は、Claude Code を入れる前の準備です。すでに <code>node -v</code> でバージョンが出る人は、飛ばして <a href="#/course/code" data-link>Windows編</a> または <a href="#/course/codemac" data-link>Mac編</a>、<a href="#/course/today/cursorcode" data-link>Cursor に Claude Code</a> へ進んでください。</p>
          `
      },
      {
        id: "what",
        title: "Node.jsとは",
        body: `
            <p class="kicker">ことば</p>
            <h1>JavaScript を動かす土台</h1>
            <p>Node.js（ノードジェイエス）は、<strong>JavaScript を動かすための土台</strong>です。</p>
            <p>JavaScript は、Webサイトの動きやボタンの処理、便利な部品（パッケージ）のインストールに使われるプログラミング言語です。これが入っていないと、講座と同じ方法では Claude Code をインストールできません。</p>
            <div class="callout">公式の1行（Mac の curl、Windows の irm）で Claude Code を入れる人は、Node.js は必須ではありません。この回は、「講座と同じ方法（npm）」を使う人向けです。</div>
            <p>動きのことばは <a href="#/course/webwords" data-link>HTML・CSS・JAVA</a> にもあります。</p>
          `
      },
      {
        id: "check",
        title: "すでに入っているか",
        practice: true,
        body: `
            <p class="kicker">手順1</p>
            <h1>ターミナルで確認する</h1>
            <p>Cursor でターミナルを開きます（Windows は <kbd>Ctrl</kbd>＋<kbd>J</kbd>、Mac は <kbd>⌘</kbd>＋<kbd>J</kbd>）。下を貼って Enter します。</p>
            ${box(`node -v`)}
            <p><code>v22.x.x</code> のようにバージョンが表示されれば、すでに入っています。この回は飛ばしてOKです。</p>
            <p>エラーが出たら、次の「ダウンロードする」へ進みます。</p>
          `
      },
      {
        id: "download",
        title: "ダウンロードする",
        body: `
            <p class="kicker">手順2</p>
            <h1>公式サイトから取る</h1>
            <ol>
              <li>Google で「Node.js」と検索し、公式サイトを開く（目印は <a href="https://nodejs.org" target="_blank" rel="noopener">nodejs.org</a>）</li>
              <li>「ダウンロード」タブを開く。上のほうにある Docker の説明は<strong>無視</strong>する</li>
              <li>下のほうで OS（Windows／Mac）を選び、「インストーラー」ボタンを押す</li>
            </ol>
            <div class="callout">LTS（推奨版）を選びます。数字は時期で変わります。新しいほうを無理に選ばなくてよいです。</div>
          `
      },
      {
        id: "install",
        title: "インストールする",
        body: `
            <p class="kicker">手順3</p>
            <h1>次へを押して進める</h1>
            <ol>
              <li>ダウンロードしたファイルを開き、「次へ（Next）」を押して進める</li>
              <li>途中の「Automatically install necessary tools」には<strong>チェック不要</strong></li>
              <li>「Finish」で完了</li>
            </ol>
            <p>途中でパスワードを聞かれたら、パソコンにログインするときのパスワードです。教室には書きません。</p>
          `
      },
      {
        id: "restart",
        title: "再起動して確認",
        practice: true,
        body: `
            <p class="kicker">手順4</p>
            <h1>Cursor を一度、完全に終了する</h1>
            <p>終了しないと、バージョンが正しく出ません。ウィンドウを閉じるだけでは足りないことがあります。</p>
            <ul>
              <li><strong>Mac</strong> … Dock の Cursor アイコンを右クリック →「終了」してから開き直す</li>
              <li><strong>Windows</strong> … 画面下の Cursor を右クリック →「ウィンドウを閉じる」または「終了」してから開き直す</li>
            </ul>
            <p>開き直したら、<kbd>Ctrl</kbd>／<kbd>⌘</kbd>＋<kbd>J</kbd> でターミナルを開き、もう一度下を貼って Enter します。</p>
            ${box(`node -v`)}
            <p>バージョンが出れば完了です。つづきは Claude Code の入れ方です。</p>
            <p>
              <a class="btn-orange" href="#/course/today/cursorcode" data-link>Cursor に Claude Code</a>
              <a class="btn-dark" href="#/course/code" data-link>Windows編</a>
              <a class="btn-dark" href="#/course/codemac" data-link>Mac編</a>
            </p>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">覚えておくこと</p>
            <h1>確認 → 入れる → Cursor を終了 → もう一度確認</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>確認</h3><p><code>node -v</code>。数字が出たら飛ばしてよい</p></article>
              <article class="op"><span class="num">2</span><h3>公式</h3><p>nodejs.org。Docker は無視。インストーラー</p></article>
              <article class="op"><span class="num">3</span><h3>終了</h3><p>Cursor を完全に終了してから、もう一度 <code>node -v</code></p></article>
            </div>
            <p><a class="btn-dark" href="#/" data-link>ホームへ</a></p>
          `
      }
    ]
  };

  Object.assign(CLASSROOM.quizzes, {
    nodejs: [
      {
        q: "Node.js がいちばん近い説明は？",
        choices: ["絵を描くソフト", "JavaScript を動かす土台", "Claude の有料プランの名前"],
        a: 1,
        explain: "Webの動きや、部品（パッケージ）のインストールに使います。"
      },
      {
        q: "すでに入っているかの確認は？",
        choices: ["パソコンを初期化する", "ターミナルで node -v と打つ", "パスワードをチャットに貼る"],
        a: 1,
        explain: "v22.x.x のように出れば、この回は飛ばしてよいです。"
      },
      {
        q: "入れたあと、バージョンが出ないときは？",
        choices: ["Cursor を完全に終了してから開き直し、もう一度 node -v", "Docker の説明を全部読む", "会社のネット制限を外す"],
        a: 0,
        explain: "ウィンドウを閉じるだけでは足りないことがあります。Mac は Dock から「終了」です。"
      }
    ]
  });
})();
