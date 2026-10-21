(() => {
  const talk = CLASSROOM.talk;

  CLASSROOM.courses.coworksetup = {
    id: "coworksetup",
    title: "Coworkを触ってみる",
    subtitle: "デスクトップアプリを入れて、承認レベルとモデルを選ぶ",
    duration: "約15分",
    audience: "Cowork を一から始めたい人／安全な設定を知りたい人",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">GOAL　1／4</p>
            <h1>アプリを入れて、Cowork を選べるようにする</h1>
            <p>Cowork は、パソコンの中のファイルやフォルダを動かします。そのため、ブラウザより<strong>デスクトップアプリ</strong>（パソコンに入れる Claude）のほうが使いやすいです。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>入れる</h3><p>デスクトップアプリをダウンロードして、サインイン</p></article>
              <article class="op"><span class="num">2</span><h3>選ぶ</h3><p>入力欄で「Cowork」を選ぶ</p></article>
              <article class="op"><span class="num">3</span><h3>設定する</h3><p>作業フォルダ・承認レベル・モデルを決める</p></article>
            </div>
            <div class="callout">画面は8月ごろのものをもとにしています。ボタンの場所や名前は、アップデートで変わることがあります。</div>
            <p>まとめ表：<a href="materials/cowork-setup.xlsx" download>Coworkを触ってみる：導入手順とおすすめ設定（Excel）</a></p>
          `
      },
      {
        id: "install",
        title: "アプリを入れる",
        practice: true,
        body: `
            <p class="kicker">やってみる　2／4</p>
            <h1>ダウンロードから、Cowork を選ぶまで</h1>
            <table>
              <thead><tr><th>手順</th><th>やること</th><th>メモ</th></tr></thead>
              <tbody>
                <tr><td>1 アプリを入手</td><td>ブラウザの Claude の左下のダウンロードボタン、またはメニューの「アプリと拡張機能を入手」から</td><td>Mac は macOS 版、Windows は Windows 版</td></tr>
                <tr><td>2 ダウンロード</td><td>ボタンを押すと、自動でダウンロードされる</td><td>Mac は「Claude.dmg」というファイル</td></tr>
                <tr><td>3 インストール</td><td>Mac：アプリケーションフォルダへドラッグ<br>Windows：案内のとおりに進める</td><td></td></tr>
                <tr><td>4 起動</td><td>アプリケーションの Claude をダブルクリック</td><td>Mac で確認が出たら「開く」</td></tr>
                <tr><td>5 サインイン</td><td>「始める」→ アカウントを作ったときと同じ方法（Google かメールアドレス）でログイン</td><td>Google なら、作ったときの Gmail を選ぶ</td></tr>
                <tr><td>6 Cowork を選ぶ</td><td>入力欄で「チャット」か「Cowork」かを選んでから頼む</td><td>以前は上の「ホーム／コード／Cowork」のタブでした</td></tr>
              </tbody>
            </table>
            <div class="callout">アプリの上のほうにある「コード」は、Claude Code（アプリづくり向け）の画面です。事務の作業では使いません。</div>
            <p>スマホにも Claude のアプリを入れておくと、作業が終わったときに知らせ（プッシュ通知）が届きます。</p>
          `
      },
      {
        id: "settings",
        title: "3つの設定",
        body: `
            <p class="kicker">知る　3／4</p>
            <h1>作業フォルダ・承認レベル・モデル</h1>
            <h2>① 作業フォルダ</h2>
            <p>「プロジェクトまたはフォルダ」から、Cowork にさわらせるフォルダを追加します。さわってよいフォルダだけを選びます。</p>
            <h2>② 承認レベル</h2>
            <p>承認は、Cowork が動く前に自分が「OK」を出すことです。</p>
            <table>
              <thead><tr><th>モード</th><th>内容</th><th>使いどころ</th></tr></thead>
              <tbody>
                <tr><td>手動で承認</td><td>操作のたびに自分でOKを出す。少し手間だが、いちばん安全</td><td>初めての作業を、慎重に進めたいとき</td></tr>
                <tr><td>自動承認</td><td>Claude が進め、本当に確かめが要るときだけ止まって聞いてくる</td><td>初めての作業は、手動かこれのどちらか</td></tr>
                <tr><td>すべての承認をスキップ</td><td>一切聞かずに全部まかせる</td><td>一度やって結果がわかっている作業だけ</td></tr>
              </tbody>
            </table>
            <div class="callout warn">「すべての承認をスキップ」は危険です。まちがったまま進むと、元に戻せないことがあります。初めての作業では使いません。</div>
            <h2>③ モデル（AIの種類）</h2>
            <table>
              <thead><tr><th>モデル</th><th>説明</th><th>使いどころ</th></tr></thead>
              <tbody>
                <tr><td>Opus（おすすめ）</td><td>Cowork はいろいろな操作をするので、まちがった動きを防ぐために基本はこれ。effort（考える深さ）は標準のまま</td><td>うまくいかないときは effort を「超高」「最大」に上げる</td></tr>
                <tr><td>Sonnet</td><td>はじめから選ばれているモデル</td><td>本当にかんたんな作業なら、様子を見ながら使ってもよい</td></tr>
                <tr><td>Haiku</td><td>思った結果にならないことが多い</td><td>Cowork では使わないほうがよい</td></tr>
              </tbody>
            </table>
            <p>収録のときは「Opus 5」「Sonnet 5」という名前でした。数字は新しくなることがあります。</p>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">まとめ　4／4</p>
            <h1>初めては「手動か自動承認」＋「Opus」</h1>
            <ol>
              <li>Cowork はデスクトップアプリで使う</li>
              <li>入力欄で「Cowork」を選んでから頼む</li>
              <li>さわらせるのは、選んだフォルダだけ</li>
              <li>承認をスキップするのは、慣れた作業だけ</li>
            </ol>
            <p>動くか試すなら、ひと言だけ頼んでみます。</p>
            ${talk([
              { me: `追加したフォルダの中に、どんなファイルがあるか一覧で教えてください。ファイルは動かさないでください。` },
              { ai: `フォルダの中を見ました。〔Excel が3つ、PDF が5つ〕あります。ファイルは動かしていません。` }
            ])}
            <p>まとめ表：<a href="materials/cowork-setup.xlsx" download>Coworkを触ってみる（Excel）</a></p>
            <p><a class="btn-orange" href="#/course/coworkprompt" data-link>次へ：プロンプトの書き方</a>
            <a class="btn-dark" href="#/course/claudebase" data-link>Claudeの基本設定へ</a></p>
          `
      }
    ]
  };
})();
