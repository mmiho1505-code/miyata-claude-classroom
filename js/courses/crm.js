(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.crm = {
    id: "crm",
    title: "顧客・案件の管理台帳",
    subtitle: "登録・検索・絞り込みできる自分専用の台帳アプリを作る",
    duration: "約30分",
    audience: "Claude Code インストール済み／初心者向け・手順つき",
    lessons: [
      {
        id: "goal",
        title: "作るものと準備",
        was: ["crm/goal", "crm/words", "crm/setup", "crm/flow"],
        body: `
            <p class="kicker">GOAL　1／5</p>
            <h1>顧客と案件を1つの台帳に</h1>
            <p>顧客のメモが、Excelとノートに分かれています。商談中か受注か、探すのに時間がかかります。</p>
            <p>顧客と案件を登録し、検索・絞り込み・状況の色分けができる、ブラウザで動く台帳アプリを作ります。</p>
            <div data-pic="crm" data-cap="顧客・案件一覧。商談中・受注などを色分け"></div>
            <h2>準備</h2>
            <ul>
              <li>Claude Code（インストール・ログイン済み）</li>
              <li>Node.js（つまずいたらClaudeに聞く）</li>
              <li>登録したい項目を紙に書き出したメモ</li>
              <li>アプリを入れる空のフォルダ</li>
            </ul>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>項目を決める</h3><p>何を管理する？</p></article>
              <article class="op"><span class="num">2</span><h3>台帳を作る</h3><p>一覧と登録だけ</p></article>
              <article class="op"><span class="num">3</span><h3>見た目を整える</h3><p>色分け</p></article>
              <article class="op"><span class="num">4</span><h3>検索を付ける</h3><p>絞り込み</p></article>
              <article class="op"><span class="num">5</span><h3>改善する</h3><p>保存と書き出し</p></article>
            </div>
          `
      },
      {
        id: "step1",
        title: "管理する項目を決める",
        practice: true,
        was: ["crm/step1"],
        body: `
            <p class="kicker">STEP 1　2／5</p>
            <h1>管理する項目を決める</h1>
            <p>空のフォルダで Claude Code を起動し、下を貼ります。項目はあとから足せるので、最小限で大丈夫です。</p>
            ${box("顧客・案件を管理する台帳を作りたいです。顧客は会社名・担当者・連絡先、案件は内容・金額・ステータス(商談中/受注/失注)・期日で考えています。項目の過不足があれば提案して。")}
          `
      },
      {
        id: "step2",
        title: "台帳を作って整える",
        practice: true,
        was: ["crm/step2", "crm/step3"],
        body: `
            <p class="kicker">STEP 2〜3　3／5</p>
            <h1>一覧と登録を作り、見やすくする</h1>
            <p>最初は「一覧＋登録」だけ。表示を確認してから、見た目を頼みます。</p>
            ${box("決めた項目で、顧客と案件を管理する台帳のWebアプリを作って。一覧で見られて、追加・編集・削除ができて、まずは自分のPCで動く形で。")}
            ${box("一覧を見やすく整えて。ステータスごとに色を分けて、金額は見やすく表示。スマホでも崩れないようにして。")}
          `
      },
      {
        id: "step4",
        title: "検索を付けて改善する",
        practice: true,
        was: ["crm/step4", "crm/step5"],
        body: `
            <p class="kicker">STEP 4〜5　4／5</p>
            <h1>検索と保存を付ける</h1>
            <p>よく使う探し方を伝えます。動作を確認したら、データが消えない保存と書き出しを付けます。</p>
            ${box("会社名やキーワードで検索でき、ステータスで絞り込めるようにして。期日が近い案件を上に表示して。")}
            ${box("使ってみて、必要な機能を足したい。データがブラウザにちゃんと保存されて消えないようにして。書き出し(バックアップ)もできるようにして。")}
          `
      },
      {
        id: "safety",
        title: "つまずきと安全",
        was: ["crm/trouble", "crm/safety", "crm/summary"],
        body: `
            <p class="kicker">SAFETY　5／5</p>
            <h1>困ったら具体的に伝える</h1>
            <div class="qa"><p><strong>Q. データが消える</strong></p><p>「ブラウザに保存して消えないように」と伝える／書き出し機能を付ける</p></div>
            <div class="qa"><p><strong>Q. 検索が効かない</strong></p><p>どの項目で探したいかを具体的に伝える</p></div>
            <div class="qa"><p><strong>Q. 一覧が見づらい</strong></p><p>並び順・色分け・列の項目を指定して整える</p></div>
            <div class="qa"><p><strong>Q. 起動しない</strong></p><p>エラー文をそのままClaudeに貼って相談する</p></div>
            <div class="callout warn">顧客情報は社外に出しません。公開せず自分のPCで使うのが基本です。公開するなら見せる相手を絞ります。こまめに書き出して控えを残し、登録内容は自分で確認します。</div>
          `
      }
    ]
  };
})();
