(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.webwords = {
    id: "webwords",
    title: "画面のことばと開発の流れ",
    subtitle: "HTML・CSS・JAVAの役割と、アプリを作る工程の注意点",
    duration: "約20分",
    audience: "はじめて／ポータルやアプリを直す人。開発の回は見るだけ",
    lessons: [
      {
        id: "goal",
        title: "3つのことば",
        was: ["webwords/goal", "webwords/html", "webwords/css", "webwords/java"],
        body: `
            <p class="kicker">GOAL　1／7</p>
            <h1>骨組み・見た目・動き</h1>
            <p>社内ポータルを開きます。上にお知らせ、下に出勤ボタン。出勤を押すと、時刻が残ります。</p>
            <p>この画面は3つでできています。名前だけ覚えれば十分です。コードは書きません。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>HTML</h3><p>骨組み。見出し、文章、ボタン、表など、何が載っているか</p></article>
              <article class="op"><span class="num">2</span><h3>CSS</h3><p>見た目。色、大きさ、並び、余白、スマホで崩れないか</p></article>
              <article class="op"><span class="num">3</span><h3>JAVA（JavaScript）</h3><p>動き。押したら時刻が残る、タブで画面が切り替わる</p></article>
            </div>
            <div class="callout">Java（ジャバ）は名前が似ている<strong>別の言語</strong>です。社内ポータルの1ページでは、ほとんど出てきません。</div>
          `
      },
      {
        id: "ask",
        title: "どう頼むか",
        practice: true,
        was: ["webwords/ask", "webwords/summary"],
        body: `
            <p class="kicker">頼み方　2／7　練習</p>
            <h1>コードの名前は出さず、見たままの日本語で</h1>
            <p>「HTMLを直して」では伝わりません。何を足すか／色か／押したあとか、を決めて頼みます。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>中身</h3><p>「お知らせを一番上に足して」（HTML）</p></article>
              <article class="op"><span class="num">2</span><h3>見た目</h3><p>「文字を大きく、落ち着いた緑に」（CSS）</p></article>
              <article class="op"><span class="num">3</span><h3>動き</h3><p>「このボタンを押したら、点検日を記録して」（JAVA）</p></article>
            </div>
            <p>3つを一度に頼むと混ざります。1つずつ頼み、できた画面を目で見ます。</p>
            <p>作り方は <a href="#/course/portalmake" data-link>ポータル作り方編</a>、直し方は <a href="#/course/appedit" data-link>アプリ画面の編集</a> です。</p>
          `
      },
      {
        id: "flow",
        title: "開発の工程（見るだけ）",
        was: ["trainapp/goal", "trainapp/flow"],
        body: `
            <p class="kicker">見るだけ　3／7</p>
            <h1>一気に最後まで頼まない</h1>
            <p>講師が Claude Code で作った筋トレ・食事記録アプリ（EP275）の工程を見ます。作らなくて構いません。持ち帰るのは、各工程の注意点です。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>企画・要件</h3><p>作るもの／作らないものを先に決める</p></article>
              <article class="op"><span class="num">2</span><h3>設計</h3><p>実装の前にルールを整える</p></article>
              <article class="op"><span class="num">3</span><h3>実装</h3><p>小さく頼んで、動いたら次へ</p></article>
              <article class="op"><span class="num">4</span><h3>AI機能</h3><p>任せる範囲の線引き</p></article>
              <article class="op"><span class="num">5</span><h3>検証・運用</h3><p>分けて確かめて、公開して直す</p></article>
            </div>
            <p>必要なのは「何を作りたいか」と、その仕事の知識です。手を動かす準備は <a href="#/course/code" data-link>Claude Code の始め方</a> です。</p>
          `
      },
      {
        id: "plan",
        title: "① 企画・要件",
        practice: true,
        was: ["trainapp/plan"],
        body: `
            <p class="kicker">企画　4／7　練習</p>
            <h1>作るもの／作らないものを先に書く</h1>
            <p>講師はチャットAIと壁打ちして企画書（PRD）を1本にしました。作るものは記録・進捗・AIコーチ・重量提案・週の振り返り。作らないものは SNS、課金、スマートウォッチ連携。画面は5つに絞りました。</p>
            ${box(`このアプリの企画書を1本にまとめてください。まだコードは書かないでください。
・作るもの：〔記録・進捗・相談〕
・作らないもの：〔SNS、課金、外部機器〕
・画面は〔5〕画面まで
足りない点は、推測せず私に質問してください。`)}
          `
      },
      {
        id: "build",
        title: "② 設計 ③ 実装",
        was: ["trainapp/design", "trainapp/build"],
        body: `
            <p class="kicker">設計・実装　5／7</p>
            <h1>計算はコード。直す前に、まず案</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>決まりごとを置く</h3><p>フォルダのいちばん上に CLAUDE.md（決まりごと）と decisions.md（大きな判断の記録）</p></article>
              <article class="op"><span class="num">2</span><h3>Git を入れる</h3><p>実装の準備に入る段階で。直しがまずかったら戻せる</p></article>
              <article class="op"><span class="num">3</span><h3>1機能ずつ</h3><p>記録が動いてから、AIコーチや振り返り</p></article>
            </div>
            ${box(`計算（合計・平均・カロリー）はコードで出してください。AIには推定と相談だけ任せてください。大きな判断は decisions.md に残してください。まだ実装はしないでください。`)}
            <p>直したいときは、いきなり直させません。決めるのは人です。</p>
            ${box(`まず改善案を出してください。コードはまだ変えないでください。`)}
          `
      },
      {
        id: "ops",
        title: "④ AI機能 ⑤ 検証と運用",
        was: ["trainapp/ai", "trainapp/ops"],
        body: `
            <p class="kicker">線引き・公開　6／7</p>
            <h1>推定は人が確認。エラーはログから</h1>
            <p>写真からカロリーを出すのはうまくいかず、手入力か、コーチに聞いた結果を記録する形に変えました。AIの推定値は、保存前に人が確認・修正できるようにします。</p>
            ${box(`うまくいっていない原因を、AIの精度と指示の出し方に分けて考えてください。まだコードは変えないでください。`)}
            <p>表示はスマホ実機で確かめます。公開は Cloudflare。パスワードや秘密の値は URL に載せません。エラーは「ログを渡す → 修正案 → 人が承認 → 直す」の順です。</p>
            ${box(`次のログの原因は何ですか。修正案だけ出してください。まだコードは変えないでください。
〔ここにエラーの文章〕`)}
            <p>スマホから直すときは Web版の Claude Code が使えます。</p>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        was: ["trainapp/summary"],
        body: `
            <p class="kicker">まとめ　7／7</p>
            <h1>作らないものを先に。小さく。先に案。</h1>
            <ol>
              <li>画面は HTML（中身）・CSS（見た目）・JAVA（動き）。頼むときは日本語で1つずつ</li>
              <li>作るもの／作らないものを企画書に書く。画面は絞る</li>
              <li>CLAUDE.md と decisions.md。計算はコード、AIは推定と相談</li>
              <li>1機能ずつ。推定値は保存前に人が確認</li>
              <li>直す前は「まず改善案。コードはまだ変えないで」</li>
              <li>Git は実装の前。エラーはログ→原因→案→承認してから直す</li>
            </ol>
            <p><a class="btn-orange" href="#/course/applied" data-link>CLAUDE.md と応用編へ</a>
            <a class="btn-dark" href="#/" data-link>ホームへ</a></p>
          `
      }
    ]
  };
})();
