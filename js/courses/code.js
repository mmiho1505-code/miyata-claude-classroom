(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.code = {
    id: "code",
    title: "はじめての Claude Code",
    subtitle: "Windows・Mac。1行で入れて、claude と打って頼むまで",
    duration: "約40分",
    audience: "プログラミング未経験でもOK／Claude Code を自分のパソコンに入れたい人",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        was: [
          "code/goal", "code/what", "code/compare",
          "codemac/goal",
          "intro/goal", "intro/what", "intro/modes", "intro/cando", "intro/make",
          "intro/job", "intro/talk", "intro/tools", "intro/words"
        ],
        body: `
            <p class="kicker">GOAL　1／7</p>
            <h1>フォルダを開いて、黒い画面に頼む</h1>
            <p>請求書のPDFは、同じチャットに任せています。今日は、ホームページのフォルダをまとめて直したい場面です。</p>
            <p>作業したいフォルダで、ターミナル（黒い画面）に <code>claude</code> と打ち、「このフォルダのサイトを直して」と日本語で頼みます。ファイルを読んで、手を動かします。今日は、インストール・ログイン・最初の一言までです。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>同じチャット</h3><p>claude.ai の画面。資料作成・ファイル整理などの事務（以前の Cowork）</p></article>
              <article class="op"><span class="num">2</span><h3>Claude Code</h3><p>ターミナルとフォルダ。Web制作・アプリ・くり返し作業の自動化</p></article>
            </div>
          `
      },
      {
        id: "prep",
        title: "準備：有料プランと Node.js",
        practice: true,
        was: [
          "code/prep", "codemac/prep",
          "nodejs/goal", "nodejs/what", "nodejs/check", "nodejs/download",
          "nodejs/install", "nodejs/restart", "nodejs/summary"
        ],
        body: `
            <p class="kicker">CHECK　2／7</p>
            <h1>有料プランを確かめる。npm で入れる人だけ Node.js</h1>
            <p>Claude の有料プラン（Pro / Max / Team など）と、ネットにつながったパソコンを用意します。</p>
            <ul>
              <li><strong>Windows</strong> … Windows 10（1809）以降、メモリ4GB以上</li>
              <li><strong>Mac</strong> … Mac のログインパスワードを知っておく</li>
            </ul>
            <h2>Node.js（npm で入れる人だけ）</h2>
            <p>公式の1行（Windows の irm、Mac の curl）で入れる人は不要です。講座と同じ npm で入れる人は、先に入っているか確かめます。Cursor のターミナル（Windows は <kbd>Ctrl</kbd>＋<kbd>J</kbd>、Mac は <kbd>⌘</kbd>＋<kbd>J</kbd>）に貼って Enter。</p>
            ${box(`node -v`)}
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>確認</h3><p><code>v22.x.x</code> のように出たら、このページは終わり</p></article>
              <article class="op"><span class="num">2</span><h3>公式から入れる</h3><p><a href="https://nodejs.org" target="_blank" rel="noopener">nodejs.org</a> の「ダウンロード」で OS を選び、LTS（推奨版）のインストーラー。Docker の説明は無視。「次へ」で進め、「Automatically install necessary tools」はチェック不要 →「Finish」</p></article>
              <article class="op"><span class="num">3</span><h3>Cursor を完全に終了</h3><p>閉じるだけでは足りないことがあります。終了して開き直し、もう一度 <code>node -v</code></p></article>
            </div>
          `
      },
      {
        id: "open",
        title: "ターミナルを開く",
        practice: true,
        was: ["code/words", "code/flow", "code/step1", "codemac/what", "codemac/open"],
        body: `
            <p class="kicker">STEP 1　3／7</p>
            <h1>Windows は PowerShell、Mac はターミナル</h1>
            <p>文字を貼って Enter する画面を開きます。テキストエディットやブラウザのアドレス欄には貼りません。</p>
            <div class="ops">
              <article class="op"><span class="num">W</span><h3>Windows</h3><div data-pic="start"></div><p>左下のスタート → 「PowerShell」と入力 →「Windows PowerShell」をクリック。行頭が <code>PS C:\\</code> ならOK（<code>C:\\</code> だけなら CMD で、別の画面です）</p></article>
              <article class="op"><span class="num">M</span><h3>Mac</h3><div data-pic="mac"></div><p><kbd>⌘ command</kbd>＋スペース → 「ターミナル」と入れる。上に赤・黄・緑の丸、行頭に <code>%</code> や <code>$</code> が出ればOK</p></article>
            </div>
            <div class="code-wrap">
              <pre># Windows（PowerShell）の画面
PS C:\\Users\\you&gt;
_</pre>
            </div>
          `
      },
      {
        id: "install",
        title: "1行でインストール",
        practice: true,
        was: ["code/step2", "codemac/install"],
        body: `
            <p class="kicker">STEP 2　4／7</p>
            <h1>自分のOSの1行を貼って Enter</h1>
            <div data-pic="copy" data-cap="コピー → 貼り付け（Windows は右クリック、Mac は ⌘＋V）→ Enter"></div>
            <div class="callout warn">OSの行を取り違えると動きません。Mac で <code>zsh: command not found: irm</code> と出たら、Windows 用を貼っています。</div>
            <h2>Windows（PowerShell）</h2>
            <p>管理者権限は不要です。以後は自動で最新版に更新されます。</p>
            ${box(`irm https://claude.ai/install.ps1 | iex`)}
            <p>別ルート：<code>winget install Anthropic.ClaudeCode</code></p>
            <h2>Mac（ターミナル）</h2>
            <p>パスワードを聞かれたら Mac のログインパスワードです（画面には出ません）。</p>
            ${box(`curl -fsSL https://claude.ai/install.sh | bash`)}
            <p>Homebrew を使っている人は <code>brew install --cask claude-code</code> でも構いません。どちらか一方で十分です。</p>
            <h2>共通（npm で入れる人）</h2>
            <p>Node.js 22以降で <code>npm install -g @anthropic-ai/claude-code</code>。</p>
            <p>終わったら、ターミナルを一度閉じて開き直します。</p>
          `
      },
      {
        id: "login",
        title: "起動してログイン",
        practice: true,
        was: ["code/step3", "code/trouble", "codemac/login", "codemac/check", "intro/start"],
        body: `
            <p class="kicker">STEP 3　5／7</p>
            <h1>claude と打って、ログインする</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>起動</h3><p>作業したいフォルダで <code>claude</code> と打って Enter</p></article>
              <article class="op"><span class="num">2</span><h3>ログイン</h3><div data-pic="browser"></div><p>ブラウザが開いたら、有料プランのアカウントでログイン</p></article>
              <article class="op"><span class="num">3</span><h3>確認</h3><p><code>claude --version</code> で番号（例：2.1.x）が出ればOK。<code>claude doctor</code> で状態を自動チェック</p></article>
            </div>
            ${box(`claude`)}
            ${box(`claude --version`)}
            ${box(`claude doctor`)}
            <div class="qa"><p><strong>Q. claude が認識されない／command not found</strong></p><p>ターミナルを閉じて開き直す。だめなら <code>claude doctor</code>。</p></div>
            <div class="qa"><p><strong>Q. irm が動かない／&amp;&amp; のエラー</strong></p><p>画面違い。Windows は行頭 <code>PS C:\\</code> の PowerShell で。</p></div>
            <div class="qa"><p><strong>Q. インストールが失敗する</strong></p><p>ネット接続を確認。時間をおいて再実行、または WinGet ルート。</p></div>
            <div class="qa"><p><strong>Q. ログインできない</strong></p><p>有料プランか、正しいアカウントかを確認。</p></div>
          `
      },
      {
        id: "first",
        title: "初期設定と最初のお願い",
        practice: true,
        was: [
          "code/step4", "code/safety",
          "intro/vibe", "intro/safety", "intro/tips", "intro/promptwork"
        ],
        body: `
            <p class="kicker">STEP 4　6／7</p>
            <h1>設定を3つ見て、お願い文を送る</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>モデル</h3><p><code>/config</code> でモデルや自動更新チャンネルを設定</p></article>
              <article class="op"><span class="num">2</span><h3>権限</h3><p>変更やコマンド実行の前に「確認する」設定にしておく</p></article>
              <article class="op"><span class="num">3</span><h3>CLAUDE.md</h3><p>フォルダの前提メモ。作り方は <a href="#/course/applied" data-link>応用編</a></p></article>
            </div>
            <p><code>/help</code> でコマンド一覧。指示は日本語でそのままOKです。</p>
            ${box(`/help`)}
            <h2>お願い文：ゴール → 具体 → 対話で直す</h2>
            <p>まず練習用フォルダで。〔　〕の部分を自分の作りたいものに変えます。出てきたものを見て「ここをこうして」と直します。</p>
            ${box(`自己紹介サイトを作ってください。
・目的：初めて会う人に、何をしているか分かってもらう
・ページ：トップ／自己紹介／お問い合わせ
・デザイン：読みやすく、スマホでも見やすく
・進め方：作る前に計画を見せて、私がOKしてから作る`)}
            <ul>
              <li>ファイル変更・送信・削除は、内容を見てからOKを出す</li>
              <li>パスワードやAPIキーは貼らない</li>
              <li>できたものは自分の目で確認してから使う</li>
            </ul>
          `
      },
      {
        id: "git",
        title: "Git（任意）と次の一歩",
        practice: true,
        was: ["code/gitwin", "code/summary", "codemac/summary", "intro/recap"],
        body: `
            <p class="kicker">OPTIONAL　7／7</p>
            <h1>Git for Windows で、やり直せる履歴を残す</h1>
            <p>必須ではありません。入れると変更の履歴（セーブポイント）が残り、思いどおりでない修正を戻しやすくなります。</p>
            <div class="ops">
              <article class="op"><span class="num">A</span><h3>公式サイト</h3><p><a href="https://git-scm.com/downloads/win" target="_blank" rel="noopener">https://git-scm.com/downloads/win</a> からインストーラー（例：Git-…-64-bit.exe）。基本は Next。「Adjusting your PATH environment」では <strong>Git from the command line and also from 3rd-party software</strong> → Install → Finish</p></article>
              <article class="op"><span class="num">B</span><h3>WinGet</h3><p>PowerShell に下の1行</p></article>
            </div>
            ${box(`winget install --id Git.Git -e --source winget`)}
            <p>PowerShell を閉じて開き直し、<code>git version 2.…</code> と出れば OK。出なければ PATH の選択を見直すか、再起動します。</p>
            ${box(`git --version`)}
            <p>作業フォルダで Claude Code にこう頼めます。</p>
            ${box(`このフォルダを Git の管理下にしてください。まだなら git init から始めて、何をするか先に説明してください。私がOKしてから進めてください。`)}
            ${box(`今の変更点を、専門用語を使わずに一覧にしてください。まだコミットしないでください。`)}
            ${box(`作業を始める前に、今の状態を履歴として残してください。メッセージは「作業前のバックアップ」でお願いします。`)}
            <p>GitHub へのアップロードは今日はしません。</p>
            <p><a class="btn-orange" href="#/course/applied" data-link>応用編へ</a>
            <a class="btn-dark" href="#/course/invoice" data-link>請求書ツールを作る</a></p>
          `
      }
    ]
  };
})();
