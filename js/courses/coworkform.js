(() => {
  const talk = CLASSROOM.talk;

  CLASSROOM.courses.coworkform = {
    id: "coworkform",
    title: "フォームを自動入力する",
    subtitle: "Claude in Chrome に、元の情報を渡してWebのフォームを埋めてもらう",
    duration: "約15分",
    audience: "Webのフォームへの入力や転記を減らしたい人／Claude in Chrome を使ってみたい人",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">GOAL　1／4</p>
            <h1>長いフォームを、元の情報から埋めてもらう</h1>
            <p>Webのフォームに、プロフィールや会社の情報を1つずつ写す。項目が多いと、それだけで時間がかかります。</p>
            <p>フォームの入力には、Cowork ではなく <strong>Claude in Chrome</strong> を使います。Chrome に足す拡張機能（ブラウザの追加機能）で、Claude がブラウザを動かして、項目を上から順に入力します。</p>
            <table>
              <thead><tr><th></th><th>Cowork</th><th>Claude in Chrome</th></tr></thead>
              <tbody>
                <tr><td>さわるもの</td><td>パソコンのファイルやフォルダ</td><td>Chrome で開いているWebページ</td></tr>
                <tr><td>頼み方</td><td>4つの要素で、はっきり</td><td>元の情報があれば、気軽なひと言でよい</td></tr>
              </tbody>
            </table>
            <p>Cowork から「ブラウザを動かして」と頼んで、Claude in Chrome に作業させることもできます。</p>
            <div class="callout warn">パスワード・カード番号・マイナンバーなどは、入力させません。送信ボタンは、内容を確かめてから自分で押します。</div>
            <p>まとめ表：<a href="materials/cowork-form.xlsx" download>フォームを自動入力する：導入手順と流れ（Excel）</a></p>
          `
      },
      {
        id: "install",
        title: "Claude in Chrome を入れる",
        practice: true,
        body: `
            <p class="kicker">準備　2／4</p>
            <h1>拡張機能を入れて、アカウントをつなぐ</h1>
            <table>
              <thead><tr><th>手順</th><th>やること</th></tr></thead>
              <tbody>
                <tr><td>1 Claude を開く</td><td>Chrome でブラウザの Claude を開く。ログアウトしていたらログインし直す</td></tr>
                <tr><td>2 拡張機能のページへ</td><td>左下の「アプリと拡張機能を入手」→ 下のほうの「Chrome」で「インストール」</td></tr>
                <tr><td>3 Chrome に追加</td><td>「Chromeに追加」→ 聞かれたら「拡張機能を追加」</td></tr>
                <tr><td>4 つなぐのを承認</td><td>「アカウントへの接続を希望しています」で「承認」。ようこそのページは × で閉じてよい</td></tr>
                <tr><td>5 アカウントを確かめる</td><td>拡張機能のメニュー →「設定」で、いつものアカウントでログインしているかを見る</td></tr>
              </tbody>
            </table>
            <h2>おすすめの設定</h2>
            <ul>
              <li><strong>作業が終わったときの通知</strong> … オン。終わったら知らせてくれる</li>
              <li><strong>マイク（声で入力）</strong> … 使う人だけ</li>
              <li><strong>承認済みのサイト</strong> … 安全のため、動かすサイトごとに「このサイトでOKか」を聞かれる。OKしたサイトはここに並ぶ</li>
            </ul>
            <div class="callout">画面は収録のときのものです。ボタンの場所や名前は、アップデートで変わることがあります。</div>
          `
      },
      {
        id: "try",
        title: "フォームを入力してもらう",
        practice: true,
        body: `
            <p class="kicker">練習　3／4</p>
            <h1>プロフィールを貼って、ひと言で頼む</h1>
            <ol>
              <li>練習用のフォームを Chrome で開く：<a href="materials/practice/profile-form.html" target="_blank" rel="noopener">講師プロフィール入力フォーム（練習用・送信されません）</a></li>
              <li>フォームのページで、Claude in Chrome のアイコンを押す</li>
              <li>下のお願いの文をコピーして貼る（改行は Shift＋Enter）</li>
              <li>承認は自動承認、モデルは Opus（標準）で実行する</li>
            </ol>
            ${talk([
              { me: `以下のプロフィールに基づいてフォームを自動入力してください
――――――――――
森川 さくら（もりかわ さくら）。地方の建設会社で15年、請求書や経費の処理、月次決算を担当してきました。会計ソフトの入れ替えでは、現場と経理の間に立って手順を作り直し、紙の申請をなくしました。いまは独立し、中小企業の事務の効率化を手伝っています。動画で学べるオンライン講座と、商工会の地域セミナーで、AIを使った事務の進め方を教えています。後輩の新人研修も毎年受け持っていました。口ぐせは「完ぺきより、まず1件」。` },
              { ai: `フォームに入力しました。\n\n・氏名：森川 さくら／ローマ字：Sakura Morikawa\n・職業：講師・コンサルタント\n・関わったプロジェクト：社内の業務改善、システム導入、新人研修\n・活動先：オンライン講座、地域のセミナー\n・実務の経験：10〜20年\n・モットー：完ぺきより、まず1件\n・プロフィール詳細：経歴をもとに約300字でまとめました\n\n上から見て確かめてください。送信はしていません。` }
            ])}
            <p>このプロフィールは架空の人です。「講師」とはっきり書いていなくても、経歴から職業や選択肢を選んでくれるか見てみましょう。</p>
            <div class="callout">元になる情報がないと、何を入れればよいかわかりません。PDFのプロフィールや画像を添付して、元の情報にすることもできます。</div>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">まとめ　4／4</p>
            <h1>元の情報を渡せば、ひと言で埋まる</h1>
            <ol>
              <li>フォームの入力は Claude in Chrome。動かすサイトごとにOKを出す</li>
              <li>元の情報（文・PDF・画像）は必ず渡す</li>
              <li>長いフォーム、ややこしいフォーム、何度も入れるフォームに向いている</li>
              <li>入力のあとは上から確かめ、送信は自分で押す</li>
            </ol>
            <div class="callout warn">パスワード・カード番号・マイナンバーなどは入力させません。お客様の個人情報を貼るときは、会社のルールを確かめます。</div>
            <p>まとめ表：<a href="materials/cowork-form.xlsx" download>フォームを自動入力する（Excel）</a></p>
            <p><a class="btn-orange" href="#/course/coworkextract" data-link>次へ：演習：ファイルからデータを抜き出す</a>
            <a class="btn-dark" href="#/course/coworkdownloads" data-link>ダウンロードしたファイルを整理するへ</a></p>
          `
      }
    ]
  };
})();
