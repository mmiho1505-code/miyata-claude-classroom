(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.account = {
    id: "account",
    title: "アカウントと有料プラン",
    subtitle: "画面つき。claude.ai に入って、教室で使う準備をする",
    duration: "約20分",
    audience: "はじめてClaudeを使う人／全員共通",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">GOAL</p>
            <h1>ログインできるようにする</h1>
            <div data-pic="signup" data-cap="ブラウザで claude.ai を開きます"></div>
            <p>この教室のあと工程（チャット・Cowork・Claude Code）は、どれも<strong>同じアカウント</strong>を使います。今日は申し込みと、有料プランの見方までです。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>サイトを開く</h3><p>パソコンのブラウザで claude.ai</p></article>
              <article class="op"><span class="num">2</span><h3>登録する</h3><p>メールまたは Google で続ける</p></article>
              <article class="op"><span class="num">3</span><h3>プランを見る</h3><p>Code を使う人は有料プランが必要</p></article>
            </div>
            <div class="callout">金額やボタンの文言は、公式サイトの表示が正しいです。教室の絵は「どこを押すか」の目印です。</div>
          `
      },
      {
        id: "open",
        title: "ブラウザで開く",
        body: `
            <p class="kicker">STEP 1</p>
            <h1>Google Chrome などで claude.ai</h1>
            <div data-pic="browser" data-cap="アドレス欄に claude.ai と入れて Enter"></div>
            <ol>
              <li>パソコンのブラウザを開く（Chrome / Edge / Safari どれでも可）</li>
              <li>上のアドレス欄をクリックする</li>
              <li><code>claude.ai</code> と打って Enter</li>
            </ol>
            <p>スマホアプリでもチャットは使えますが、この教室は<strong>パソコンの画面</strong>で説明します。</p>
          `
      },
      {
        id: "signup",
        title: "アカウントを作る",
        body: `
            <p class="kicker">STEP 2</p>
            <h1>「続ける」から登録</h1>
            <div data-pic="signup" data-cap="Google か、メールアドレスで続けます"></div>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>Googleで続ける</h3><p>会社のGmailを使っている人は、これがいちばん簡単です。</p></article>
              <article class="op"><span class="num">2</span><h3>メールで続ける</h3><p>届いた番号やリンクを、画面の指示どおり入力します。</p></article>
              <article class="op"><span class="num">3</span><h3>名前を入れる</h3><p>聞かれたら、普段使う名前で大丈夫です。</p></article>
            </div>
            <div class="callout warn">パスワードは教室にも、チャットにも貼らないでください。自分の頭（またはパスワード帳）だけです。</div>
          `
      },
      {
        id: "free",
        title: "無料でできること",
        body: `
            <p class="kicker">FREE</p>
            <h1>無料でも、会話は始められる</h1>
            <div data-pic="webchat" data-cap="ログインできると、白いチャット画面が出ます"></div>
            <p>無料プランでも、ブラウザで日本語の相談はできます。次の講座「ブラウザのチャット入門」は、この画面の使い方です。</p>
            <ul>
              <li><strong>できる</strong> … ブラウザで話しかける、文章の下書き</li>
              <li><strong>できないことが多い</strong> … Claude Code（黒い画面の道具）。Cowork もプランやアプリの条件があります</li>
            </ul>
            <p>教室で <a href="#/course/code" data-link>Claude Code</a> まで進む人は、次のページの有料プランを見てください。</p>
          `
      },
      {
        id: "plan",
        title: "有料プランの画面",
        body: `
            <p class="kicker">PLAN</p>
            <h1>設定からプランを開く</h1>
            <div data-pic="plan" data-cap="設定 → プラン（または Upgrade）"></div>
            <ol>
              <li>画面の左下または右上の<strong>自分の名前／歯車</strong>を押す</li>
              <li><strong>設定</strong>（Settings）を開く</li>
              <li><strong>プラン</strong> または <strong>Upgrade</strong> を押す</li>
              <li>Pro / Max / Team など、表が出るので読む</li>
            </ol>
            <div class="callout">Claude Code は、無料プランでは使えません。Pro などの有料プランが必要です。Cowork はアプリ側の案内に従ってください。</div>
            <p>支払い画面に進むときは、カード番号を<strong>公式の入力欄だけ</strong>に入れます。チャットにカード番号を書かないでください。</p>
          `
      },
      {
        id: "check",
        title: "入れたか確認",
        body: `
            <p class="kicker">CHECK</p>
            <h1>プラン名が出ていればOK</h1>
            <div data-pic="plan" data-cap="設定のプラン欄に Pro などと出ていれば成功"></div>
            <p>設定 → プラン に、今のプラン名が出ます。Free のままだと、Claude Code のログインで止まりやすいです。</p>
            <p>うまくいかないときは <a href="#/course/faq" data-link>つまずき一覧</a> の「ログインできない」へ。</p>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">WRAP</p>
            <h1>次は、ブラウザで話しかけてみる</h1>
            <div data-pic="webchat" data-cap="同じアカウントで、チャット入門へ"></div>
            <ol>
              <li>claude.ai を開ける</li>
              <li>自分のアカウントで入れる</li>
              <li>Code を使う人は、有料プランかを設定で確認した</li>
            </ol>
            <p><a class="btn-orange" href="#/course/webchat" data-link>ブラウザのチャット入門へ</a></p>
          `
      }
    ]
  };

  CLASSROOM.courses.webchat = {
    id: "webchat",
    title: "ブラウザのチャット入門",
    subtitle: "Coworkの前に。claude.ai で日本語のお願いを一度やってみる",
    duration: "約25分",
    audience: "アカウント作成済み／Coworkの前の人",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">GOAL</p>
            <h1>日本語で1回、返事をもらう</h1>
            <div data-pic="webchat" data-cap="下の入力欄に書いて、送るボタン"></div>
            <p>Cowork は「ファイルまで仕上げる作業係」です。その前に、<strong>相談するチャット</strong>の感覚をつかみます。黒い画面は使いません。</p>
            <p>まだアカウントが無い人は、先に <a href="#/course/account" data-link>アカウントと有料プラン</a> です。</p>
          `
      },
      {
        id: "open",
        title: "チャット画面",
        body: `
            <p class="kicker">SCREEN</p>
            <h1>左が履歴、下が入力欄</h1>
            <div data-pic="webchat" data-cap="下の太い枠が、話しかける場所です"></div>
            <ul>
              <li><strong>左</strong> … これまでの会話の一覧（新しい会話 を押すと白紙）</li>
              <li><strong>真ん中</strong> … Claudeの返事</li>
              <li><strong>下</strong> … 自分の文章を書く欄</li>
            </ul>
            <p>迷ったら「新しいチャット」（New chat）を押して、空の画面から始めます。</p>
          `
      },
      {
        id: "ask",
        title: "最初のお願い",
        practice: true,
        body: `
            <p class="kicker">TRY</p>
            <h1>1〜3文で頼む</h1>
            <div data-pic="copy" data-cap="コピーして、claude.ai の入力欄に貼る"></div>
            <p>下の文をコピーして、チャットの入力欄に貼り、送る（Enter または紙飛行機ボタン）を押します。</p>
            ${box("小学生にも分かる言葉で、請求書と見積書の違いを5行で教えてください。専門用語が出たら、すぐ言い換えてください。")}
            <p>返事が来たら成功です。気に入らなければ「もっと短く」「例を1つ」と追加で書いてください。</p>
          `
      },
      {
        id: "copy",
        title: "コピーと貼り付け",
        body: `
            <p class="kicker">COPY</p>
            <h1>教室の黒い枠 → チャットへ</h1>
            <div data-pic="copy" data-cap="教室のコピー → チャットで Ctrl＋V（Macは ⌘＋V）"></div>
            <ol>
              <li>教室の「コピー」を左クリック</li>
              <li>claude.ai の入力欄をクリック</li>
              <li>Windows は <kbd>Ctrl</kbd>＋<kbd>V</kbd>　／　Mac は <kbd>⌘</kbd>＋<kbd>V</kbd></li>
            </ol>
            <p>貼れないときは <a href="#/course/faq" data-link>つまずき一覧</a> の「貼り付けできない」へ。</p>
          `
      },
      {
        id: "vs",
        title: "Coworkとの違い",
        body: `
            <p class="kicker">COMPARE</p>
            <h1>チャットは相談、Coworkは作業</h1>
            <div data-pic="compare" data-cap="左がチャット、右が Cowork"></div>
            <div class="compare">
              <div>
                <h3>ブラウザのチャット</h3>
                <ul>
                  <li>答えが文章で返ってくる</li>
                  <li>自分でコピーして、Word などに貼る</li>
                  <li>相談・下書き向き</li>
                </ul>
              </div>
              <div>
                <h3>Cowork</h3>
                <ul>
                  <li>フォルダやファイルまで触る</li>
                  <li>PDFや表として仕上がることが多い</li>
                  <li>請求書・整理などの実務向き</li>
                </ul>
              </div>
            </div>
            <p>事務を任せたい人は、次に <a href="#/course/cowork" data-link>Cowork講座</a> です。いちばんやさしい入口は <a href="#/course/poster" data-link>求人ポスター</a> でも大丈夫です。</p>
          `
      },
      {
        id: "safety",
        title: "書いてはいけないこと",
        body: `
            <p class="kicker">SAFETY</p>
            <h1>パスワードと口座は書かない</h1>
            <div data-pic="safety" data-cap="送る前に、秘密が混ざっていないか見る"></div>
            <ul>
              <li>パスワード、暗証番号、APIキー</li>
              <li>お客さんの住所・電話がたくさん載った名簿そのもの</li>
              <li>口座番号・マイナンバー</li>
            </ul>
            <p>詳しく <a href="#/safety" data-link>安全の約束</a> にまとめてあります。</p>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">WRAP</p>
            <h1>相談はチャット、仕上げはCowork</h1>
            <div data-pic="cowork" data-cap="次は左メニューの Cowork です"></div>
            <p><a class="btn-orange" href="#/course/cowork" data-link>Cowork講座へ</a>
            <a class="btn-dark" href="#/course/poster" data-link>ポスターから始める</a></p>
          `
      }
    ]
  };

  CLASSROOM.courses.codemac = {
    id: "codemac",
    title: "はじめての Claude Code（Mac）",
    subtitle: "ターミナルに1行貼って、使える状態まで",
    duration: "約35分",
    audience: "Macパソコンで、Claude Code を入れたい人",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">GOAL</p>
            <h1>ターミナルから claude が起動する</h1>
            <div data-pic="mac" data-cap="Windowsではなく、Macの人向けです"></div>
            <p>Windows の人は <a href="#/course/code" data-link>Windows編</a> を使ってください。今日は Mac の「ターミナル」です。</p>
            <ol>
              <li>ターミナルを開ける</li>
              <li>インストールの1行を貼って実行する</li>
              <li><code>claude</code> でログインできる</li>
            </ol>
            <div class="callout warn">無料プランでは Claude Code は使えません。先に <a href="#/course/account" data-link>有料プランの確認</a> をしてください。</div>
          `
      },
      {
        id: "what",
        title: "ターミナルとは",
        body: `
            <p class="kicker">WHAT</p>
            <h1>文字でお願いする黒い（または白い）画面</h1>
            <div data-pic="terminal" data-cap="上に赤・黄・緑の3つの丸。これがターミナル"></div>
            <p>Windows の PowerShell と同じ役割です。マウスではなく、文字を貼って Enter します。</p>
            <p><strong>使わないもの:</strong> テキストエディットだけ、ブラウザのアドレス欄。必ず「ターミナル」アプリです。</p>
          `
      },
      {
        id: "prep",
        title: "事前準備",
        body: `
            <p class="kicker">CHECK</p>
            <h1>始める前に揃えるもの</h1>
            <div data-pic="plan" data-cap="ネットにつながった Mac と、有料プラン"></div>
            <ul>
              <li>Mac（管理者のパスワードを知っていること）</li>
              <li>インターネット</li>
              <li>Claude の有料プラン（Pro / Max / Team など）</li>
            </ul>
          `
      },
      {
        id: "open",
        title: "ターミナルを開く",
        body: `
            <p class="kicker">STEP 1</p>
            <h1>Command ＋ スペース → ターミナル</h1>
            <div data-pic="mac" data-cap="Spotlight に「ターミナル」と入れる"></div>
            <ol>
              <li>キーボード左下の <kbd>⌘ command</kbd> を押しながら、スペースキーを押す</li>
              <li>検索に <strong>ターミナル</strong> または <strong>Terminal</strong> と入れる</li>
              <li>黒い（または白い）窓が開いたら成功</li>
            </ol>
            <p>Finder からなら「アプリケーション」→「ユーティリティ」→「ターミナル」でも同じです。</p>
            <div class="callout">行頭に自分の名前と <code>%</code> や <code>$</code> が出ていればOKです。</div>
          `
      },
      {
        id: "install",
        title: "1行を貼る",
        practice: true,
        body: `
            <p class="kicker">STEP 2</p>
            <h1>公式のインストール行</h1>
            <div data-pic="copy" data-cap="コピー → ターミナルで ⌘＋V → Enter"></div>
            <p>下をコピーして、ターミナルに貼り、Enter を押します。途中でパスワードを聞かれたら、Macのログインパスワードです（画面には星しか出ません）。</p>
            ${box("curl -fsSL https://claude.ai/install.sh | bash")}
            <p>Homebrew を日常的に使っている人は、公式案内の <code>brew install --cask claude-code</code> でも構いません。どちらか一方で十分です。</p>
            <p>終わったら、ターミナルを一度閉じて、もう一度開きます。</p>
          `
      },
      {
        id: "login",
        title: "ログインする",
        practice: true,
        body: `
            <p class="kicker">STEP 3</p>
            <h1>claude と打つ</h1>
            <div data-pic="terminal" data-cap="claude と入力して Enter。ブラウザが開きます"></div>
            <ol>
              <li>作業したいフォルダでも、ホームでも、まず試してよいです</li>
              <li><code>claude</code> と打って Enter</li>
              <li>ブラウザが開いたら、有料プランのアカウントでログイン</li>
            </ol>
            ${box("claude")}
            <p>「command not found」と出たら、ターミナルを開き直す → まだなら <a href="#/course/faq" data-link>つまずき一覧</a> へ。</p>
          `
      },
      {
        id: "check",
        title: "動作確認",
        body: `
            <p class="kicker">CHECK</p>
            <h1>version と doctor</h1>
            <div data-pic="terminal" data-cap="数字が出ればインストール成功"></div>
            ${box("claude --version")}
            <p>次も試せます。</p>
            ${box("claude doctor")}
            <p>準備ができたら <a href="#/course/applied" data-link>応用編</a> へ進めます。Windows用の画面説明は読み飛ばして大丈夫です。</p>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">WRAP</p>
            <h1>Macはターミナル、WindowsはPowerShell</h1>
            <div data-pic="compare" data-cap="パソコンの種類で入口が違います"></div>
            <p>うまくいかないときは <a href="#/course/faq" data-link>つまずき一覧</a> です。</p>
            <p><a class="btn-orange" href="#/course/applied" data-link>応用編へ</a>
            <a class="btn-dark" href="#/code" data-link>Claude Codeの一覧</a></p>
          `
      }
    ]
  };

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
        body: `
            <p class="kicker">MAP</p>
            <h1>症状からページを選ぶ</h1>
            <div data-pic="quiz" data-cap="上から近いものを押してください"></div>
            <ul>
              <li><a href="#/course/faq/ps" data-link>PowerShell が開かない・CMDになってしまう</a></li>
              <li><a href="#/course/faq/paste" data-link>コピーした文が貼れない</a></li>
              <li><a href="#/course/faq/notfound" data-link>claude が認識されない</a></li>
              <li><a href="#/course/faq/login" data-link>ログインできない／無料と言われる</a></li>
              <li><a href="#/course/faq/macfail" data-link>Macのターミナルで失敗する</a></li>
              <li><a href="#/course/faq/coworkmiss" data-link>Cowork のメニューが見当たらない</a></li>
              <li><a href="#/course/faq/net" data-link>ネットや会社PCで止まる</a></li>
            </ul>
          `
      },
      {
        id: "ps",
        title: "PowerShellが開かない",
        body: `
            <p class="kicker">WINDOWS</p>
            <h1>スタート → PowerShell。CMDではない</h1>
            <div data-pic="powershell" data-cap="行頭が PS C:\\ なら正解。C:\\ だけなら CMD"></div>
            <ol>
              <li>左下のスタート（Windowsマーク）を押す</li>
              <li><strong>PowerShell</strong> と入力する（「コマンドプロンプト」は選ばない）</li>
              <li>「Windows PowerShell」または「ターミナル」の中の PowerShell を開く</li>
            </ol>
            <p>青い画面でも黒い画面でも、行頭に <code>PS</code> があれば大丈夫です。</p>
            <div class="callout warn">管理者として実行は、教室の1行インストールでは通常不要です。むやみに管理者にしないでください。</div>
            <p>Mac の人は PowerShell を使いません。<a href="#/course/codemac" data-link>Mac編</a> へ。</p>
          `
      },
      {
        id: "paste",
        title: "貼り付けできない",
        body: `
            <p class="kicker">PASTE</p>
            <h1>コピーしたあとに、貼る場所をクリック</h1>
            <div data-pic="copy" data-cap="教室のコピー → 貼る画面をクリック → 貼り付け"></div>
            <ul>
              <li><strong>Windows</strong> … PowerShell では右クリック1回で貼ることが多い。だめなら Ctrl＋V</li>
              <li><strong>Mac</strong> … ⌘＋V。ターミナルをクリックしてから</li>
              <li><strong>チャット</strong> … 入力欄をクリックしてから貼る</li>
            </ul>
            <p>「コピー済み」と教室に出ても、貼る側をクリックしていないと入りません。</p>
          `
      },
      {
        id: "notfound",
        title: "claude が認識されない",
        body: `
            <p class="kicker">COMMAND</p>
            <h1>いったん閉じて、開き直す</h1>
            <div data-pic="powershell" data-cap="インストール直後は、窓を閉じないと見つからないことが多い"></div>
            <ol>
              <li>PowerShell またはターミナルを<strong>全部閉じる</strong></li>
              <li>新しく開き直す</li>
              <li>もう一度 <code>claude</code> と打つ</li>
            </ol>
            <p>まだなら、インストールの1行をもう一度。Windows は <a href="#/course/code" data-link>Windows編</a>、Mac は <a href="#/course/codemac" data-link>Mac編</a> のコピー欄です。</p>
            ${box("claude doctor")}
          `
      },
      {
        id: "login",
        title: "ログインできない",
        body: `
            <p class="kicker">LOGIN</p>
            <h1>有料プランの同じメールか見る</h1>
            <div data-pic="plan" data-cap="無料のままだと、Code のログインで止まりやすい"></div>
            <ul>
              <li>ブラウザで <a href="#/course/account" data-link>claude.ai に入れるか</a> 先に確認</li>
              <li>会社のGoogleと、個人Gmailを取り違えていないか</li>
              <li>設定のプランが Free のままになっていないか</li>
            </ul>
            <p>ポップアップがブロックされていると、ログイン画面が開きません。ブラウザの「ポップアップを許可」を見てください。</p>
          `
      },
      {
        id: "macfail",
        title: "Macで失敗する",
        body: `
            <p class="kicker">MAC</p>
            <h1>ターミナルか、パスワードか</h1>
            <div data-pic="terminal" data-cap="赤い丸・黄色い丸・緑の丸がある窓"></div>
            <ul>
              <li>テキストエディットに貼っていないか（それはメモアプリです）</li>
              <li>パスワード入力中は文字が見えません。打ち終わって Enter</li>
              <li>「開発元を確認できない」と出たら、公式インストールの案内に沿って許可する</li>
            </ul>
            <p>手順の本体は <a href="#/course/codemac" data-link>Mac編</a> です。</p>
          `
      },
      {
        id: "coworkmiss",
        title: "Coworkが見当たらない",
        body: `
            <p class="kicker">COWORK</p>
            <h1>ブラウザのチャットではなく、アプリ</h1>
            <div data-pic="cowork" data-cap="左メニューに Cowork。チャットの隣です"></div>
            <p>claude.ai のただのチャット画面には、Cowork が無いことがあります。デスクトップ用の Claude アプリを開き、左の一覧から <strong>Cowork</strong> を選びます。</p>
            <p>プランや地域、アプリの版で名前が違うときは、アプリ内の案内を優先してください。講座は <a href="#/course/cowork" data-link>Cowork</a> です。</p>
          `
      },
      {
        id: "net",
        title: "会社のネットで止まる",
        body: `
            <p class="kicker">NETWORK</p>
            <h1>セキュリティソフトや社内ルール</h1>
            <div data-pic="safety" data-cap="止まっても、パスワードを緩めて突破しない"></div>
            <p>会社のパソコンでは、インストールやログインが許可されていないことがあります。そのときは情報システムの担当者に「Claude Code / claude.ai を教室で使いたい」と相談してください。</p>
            <p>自宅Wi-Fiや、許可された環境でやり直す方法もあります。無断で制限を外さないでください。</p>
          `
      },
      {
        id: "summary",
        title: "それでもだめなとき",
        body: `
            <p class="kicker">WRAP</p>
            <h1>画面の文言を、そのまま控える</h1>
            <div data-pic="chat" data-cap="赤いエラー文は、消さずに残す"></div>
            <p>講師に聞くときは、次の3つがあると早いです。</p>
            <ol>
              <li>Windows か Mac か</li>
              <li>今やっていた講座名</li>
              <li>画面に出た英文・日本文（写真撮影でも可。パスワードは写さない）</li>
            </ol>
            <p><a class="btn-orange" href="#/howto" data-link>操作のしかたへ</a>
            <a class="btn-dark" href="#/" data-link>ホームへ</a></p>
          `
      }
    ]
  };

  Object.assign(CLASSROOM.quizzes, {
    account: [
      {
        q: "教室のClaudeは、どこでアカウントを作りますか？",
        choices: ["この教室サイトの「登録」ボタン", "ブラウザで claude.ai", "PowerShellに住所を打つ"],
        a: 1,
        explain: "アカウントは公式サイト claude.ai です。教室サイトにはパスワードを入れません。"
      },
      {
        q: "Claude Code を使うとき、無料プランだけでも足りますか？",
        choices: ["足りる", "足りない。有料プランが必要", "週末だけ足りる"],
        a: 1,
        explain: "Claude Code は Pro などの有料プランが必要です。"
      },
      {
        q: "カード番号の正しい入れ方は？",
        choices: ["チャットに「課金して」と書いて番号を貼る", "公式の支払い画面の入力欄だけに入れる", "教室のコメント欄に書く"],
        a: 1,
        explain: "支払いは公式画面だけです。"
      }
    ],
    webchat: [
      {
        q: "ブラウザのチャットで、文章を書く場所は？",
        choices: ["アドレス欄", "画面の下の入力欄", "PowerShell"],
        a: 1,
        explain: "下の太い入力欄です。アドレス欄に日本語のお願いを書かないでください。"
      },
      {
        q: "チャットと Cowork のいちばんの違いは？",
        choices: ["チャットは相談（文章）、Coworkは作業（ファイルまで）", "チャットのほうが必ず有料", "Coworkはスマホ専用"],
        a: 0,
        explain: "相談はチャット、仕上げの実務は Cowork が多いです。"
      },
      {
        q: "チャットに書いてはいけないものは？",
        choices: ["「短くして」というお願い", "パスワードや口座番号", "請求書と見積書の違いを聞く質問"],
        a: 1,
        explain: "秘密の数字は渡しません。"
      }
    ],
    codemac: [
      {
        q: "Macで Claude Code を入れる画面はどれですか？",
        choices: ["テキストエディット", "ターミナル（赤い丸・黄色い丸・緑の丸）", "Windows のスタートボタン"],
        a: 1,
        explain: "ターミナルアプリです。メモアプリにコマンドを貼っても動きません。"
      },
      {
        q: "インストールのあと、claude が無いと言われたときの最初の一手は？",
        choices: ["パソコンを初期化する", "ターミナルを閉じて開き直す", "パスワードをチャットに貼る"],
        a: 1,
        explain: "新しい窓を開くと、コマンドが見つかることが多いです。"
      },
      {
        q: "Macでも Claude Code に無料プランだけで足りますか？",
        choices: ["足りる", "足りない。有料プランが必要", "Safariなら足りる"],
        a: 1,
        explain: "Windows と同じく、有料プランが必要です。"
      }
    ],
    faq: [
      {
        q: "Windows でインストールするとき、開くのは？",
        choices: ["コマンドプロンプト（行頭が C:\\ だけ）", "PowerShell（行頭が PS）", "メモ帳"],
        a: 1,
        explain: "PS で始まる PowerShell です。"
      },
      {
        q: "貼り付けできないとき、よくある原因は？",
        choices: ["コピーしたあと、貼る欄をクリックしていない", "マウスが左利きだから", "ロゴの色が違うから"],
        a: 0,
        explain: "貼る側の画面をクリックしてから Ctrl＋V または右クリックです。"
      },
      {
        q: "ログインできないときの確認で正しいものは？",
        choices: ["無料プランのまま Code に入れるか試さず、別の人のパスワードを借りる", "claude.ai に同じメールで入れるか、プランが有料かを見る", "パソコンを捨てる"],
        a: 1,
        explain: "アカウントとプランを、公式サイトで先に確認します。"
      }
    ]
  });
})();
