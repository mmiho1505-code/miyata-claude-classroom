(() => {
  const talk = CLASSROOM.talk;

  CLASSROOM.courses.coworkmobile = {
    id: "coworkmobile",
    title: "スマホからタスクを依頼する",
    subtitle: "外出先からスマホで頼み、終わったら通知で知る",
    duration: "約10分",
    audience: "外出先や移動中に、Cowork へ仕事を頼みたい人",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">GOAL　1／4</p>
            <h1>スマホのアプリから、そのまま Cowork に頼む</h1>
            <p>前は「Dispatch」という機能を使い、QR コードでスマホとパソコンをつなぎ合わせる必要がありました。今は、<strong>スマホの Claude アプリから直接 Cowork を動かせます</strong>。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>入れる</h3><p>スマホにアプリを入れ、パソコンと同じアカウントでログイン</p></article>
              <article class="op"><span class="num">2</span><h3>頼む</h3><p>続きのチャットを開いて、スマホから頼む</p></article>
              <article class="op"><span class="num">3</span><h3>知る</h3><p>終わったら、スマホに通知が届く</p></article>
            </div>
            <p>まとめ表：<a href="materials/cowork-mobile.xlsx" download>スマホからタスクを依頼する（Excel）</a></p>
          `
      },
      {
        id: "setup",
        title: "準備",
        practice: true,
        body: `
            <p class="kicker">やってみる　2／4</p>
            <h1>アプリを入れて、同じアカウントでログイン</h1>
            <ol>
              <li>パソコンの Claude の左のメニューにあるダウンロードボタン →「モバイル」の iOS（iPhone）か Android のリンク → 出てくる QR コードをスマホで読んで、アプリを入れる（ボタンの場所は、時期や環境で変わることがあります）</li>
              <li><strong>パソコンと同じアカウント</strong>でログインする（Google など）。アカウントをいくつか持っている人は注意。ちがうアカウントだと、パソコンの Cowork は動かせません</li>
              <li>「Claude は通知を送信します」と出たら「許可」。終わったときにスマホへ知らせが届いて便利です</li>
              <li>左上のメニュー →「Cowork」→ はじめのあいさつの画面のボタンを押す</li>
            </ol>
          `
      },
      {
        id: "try",
        title: "やってみる",
        practice: true,
        body: `
            <p class="kicker">やってみる　3／4</p>
            <h1>前のチャットの続きを、スマホから頼む</h1>
            <p>例として、<a href="#/course/coworkfolders" data-link>日付フォルダを一括作成する</a>で使ったチャットの続きで、今月分のフォルダを作ります。</p>
            ${talk([
              { do: "スマホの履歴から、日付フォルダを作ったチャットを開き、「通知を有効化」を押す（パソコンで同じチャットを開いておく必要はない）" },
              { me: `今月分のフォルダを作成してください。` },
              { ai: `EP12 フォルダに「2026年9月」を作り、その中に9月1日〜30日のフォルダを30件作成しました。` },
              { do: "パソコンのデスクトップを開いて、フォルダができているか確かめる" }
            ])}
            <p>スマホから頼んでも、パソコンの Cowork が動いて作業してくれます。</p>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">まとめ　4／4</p>
            <h1>パソコンのファイルを使うかどうかで、条件が変わる</h1>
            <table>
              <thead><tr><th>作業</th><th>動かすための条件</th></tr></thead>
              <tbody>
                <tr><td>パソコンの中のファイルを使う作業（フォルダを作る、Excel を書くなど）</td><td>パソコンが起動していて、Claude のデスクトップアプリと Cowork も起動している</td></tr>
                <tr><td>パソコンのファイルを使わない作業（調べもの、文章づくりなど）</td><td>クラウド（インターネットの向こうのコンピューター）で動くので、パソコンが起動していなくてもよい</td></tr>
              </tbody>
            </table>
            <ol>
              <li>スマホのアプリは、パソコンと同じアカウントでログインする</li>
              <li>通知を許可しておくと、終わったときにスマホで分かる</li>
              <li>外出先や移動中に頼み、結果はあとでパソコンで確かめる</li>
            </ol>
            <div class="callout warn">スマホは、なくしたり人に見られたりしやすい道具です。画面ロックをかけ、ファイルを消すような取り消せない作業は、パソコンの前で頼みます。</div>
            <p>まとめ表：<a href="materials/cowork-mobile.xlsx" download>スマホからタスクを依頼する（Excel）</a></p>
            <p><a class="btn-orange" href="#/course/coworkjudge" data-link>次へ：業務への落とし込みと任せる業務の判断基準</a>
            <a class="btn-dark" href="#/course/coworkads" data-link>演習：競合広告の出稿状況を定期収集するへ</a></p>
          `
      }
    ]
  };
})();
