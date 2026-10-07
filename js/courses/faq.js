(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.faq = {
    id: "faq",
    title: "つまずき一覧",
    subtitle: "PowerShellが開かない、ログインできない、貼れない、など",
    duration: "困ったときだけ",
    audience: "途中で止まった人／全部の講座の補助",
    lessons: [
      {
        id: "map",
        title: "どれで止まっていますか",
        was: ["faq/map"],
        body: `
            <p class="kicker">MAP　1／5</p>
            <h1>症状からページを選ぶ</h1>
            <div data-pic="quiz" data-cap="上から近いものを選んでください"></div>
            <p>インストールの途中で、赤い英文が出て止まりました。近い症状のページへ進みます。</p>
            <ul>
              <li>HTML・CSS・JAVA の意味が分からない → <a href="#/course/webwords" data-link>HTML・CSS・JAVA</a></li>
              <li>PowerShell が開かない・CMDになる／貼れない → 2枚目</li>
              <li>claude が認識されない／Macのターミナルで失敗する → 3枚目</li>
              <li>ログインできない／左に Cowork が無い → 4枚目</li>
              <li>ネットや会社PCで止まる／それでもだめ → 5枚目</li>
            </ul>
          `
      },
      {
        id: "ps",
        title: "PowerShell・貼り付け",
        was: ["faq/ps", "faq/paste"],
        body: `
            <p class="kicker">WINDOWS　2／5</p>
            <h1>PowerShell を開き、クリックしてから貼る</h1>
            <div data-pic="powershell" data-cap="行頭が PS C:\\ なら正解。C:\\ だけなら CMD"></div>
            <ol>
              <li>左下のスタート（Windowsマーク）を押す</li>
              <li><strong>PowerShell</strong> と入力する（「コマンドプロンプト」は選ばない）</li>
              <li>「Windows PowerShell」または「ターミナル」の中の PowerShell を開く。行頭に <strong>PS</strong> があれば正解</li>
            </ol>
            <h2>貼れないとき</h2>
                        <ul>
              <li><strong>Windows</strong> … 貼る欄をクリックし、右クリック1回。だめなら Ctrl＋V</li>
              <li><strong>Mac</strong> … ターミナルをクリックしてから ⌘＋V</li>
            </ul>
            <div class="callout warn">管理者として実行は、教室の1行インストールでは通常不要です。むやみに管理者にしないでください。</div>
          `
      },
      {
        id: "notfound",
        title: "claude が無い・Mac",
        was: ["faq/notfound", "faq/macfail"],
        body: `
            <p class="kicker">COMMAND　3／5</p>
            <h1>窓を閉じて開き直す</h1>
            <div data-pic="terminal" data-cap="Macは赤い丸・黄色い丸・緑の丸がある窓"></div>
            <ol>
              <li>PowerShell またはターミナルを<strong>全部閉じる</strong></li>
              <li>新しく開き直す</li>
              <li>もう一度 <strong>claude</strong> と打つ。まだなら下を貼る</li>
            </ol>
            ${box("claude doctor")}
            <p>だめなら <a href="#/course/code" data-link>Claude Code の講座</a> のインストールの1行を貼り直します。</p>
            <h2>Mac で失敗するとき</h2>
            <ul>
              <li>テキストエディット（メモアプリ）に貼っていないか</li>
              <li>パスワード入力中は文字が見えません。打ち終わって Enter</li>
                            <li><strong>zsh: command not found: irm</strong> … Windows 用の行です。Mac は <strong>curl</strong> の1行を貼ります</li>
            </ul>
          `
      },
      {
        id: "login",
        title: "ログイン・Cowork",
        was: ["faq/login", "faq/coworkmiss"],
        body: `
            <p class="kicker">LOGIN　4／5</p>
            <h1>有料プランの同じメールか見る</h1>
            <div data-pic="plan" data-cap="無料のままだと、Code のログインで止まりやすい"></div>
            <ol>
              <li>ブラウザで claude.ai に入れるか確認（<a href="#/course/claudebase" data-link>アカウントの講座</a>）</li>
              <li>会社のGoogleと、個人Gmailを取り違えていないか見る</li>
              <li>設定のプランが Free のままでないか見る</li>
              <li>ログイン画面が開かない → ポップアップを許可</li>
            </ol>
            <h2>左に Cowork が無い</h2>
            <p>今はチャットに入っています。新しいチャットで「作って」と頼みます（<a href="#/course/cowork" data-link>事務（旧Cowork）</a>）。</p>
          `
      },
      {
        id: "net",
        title: "会社のネット・それでもだめ",
        was: ["faq/net", "faq/summary"],
        body: `
            <p class="kicker">NETWORK　5／5</p>
            <h1>担当者に相談。エラー文は残す</h1>
            <div data-pic="safety" data-cap="止まっても、パスワードを緩めて突破しない"></div>
            <p>会社のパソコンでは、情報システムの担当者に「Claude Code / claude.ai を教室で使いたい」と相談します。無断で制限を外さないでください。</p>
            <h2>講師に聞くとき</h2>
            <ol>
              <li>Windows か Mac か</li>
              <li>今やっていた講座名</li>
              <li>画面に出た英文・日本文（写真でも可。パスワードは写さない）</li>
            </ol>
            <p><a class="btn-orange" href="#/howto" data-link>操作のしかたへ</a>
            <a class="btn-dark" href="#/" data-link>ホームへ</a></p>
          `
      }
    ]
  };
})();
