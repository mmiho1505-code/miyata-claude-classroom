(() => {
  const talk = CLASSROOM.talk;

  CLASSROOM.courses.coworkfolders = {
    id: "coworkfolders",
    title: "日付フォルダを一括作成する",
    subtitle: "1日〜末日のフォルダを、1件試してから一気に作る",
    duration: "約15分",
    audience: "Cowork でフォルダの作業を試したい人／毎月のフォルダづくりを任せたい人",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">GOAL　1／4</p>
            <h1>31個の日付フォルダを、一瞬で作る</h1>
            <p>毎日の議事録を入れるフォルダを、月の1日から末日まで作ります。手で作ると31回。Cowork に頼むと、1件試して確かめたあと、残りは一気にできあがります。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>準備</h3><p>練習用フォルダを作って、Cowork に追加する</p></article>
              <article class="op"><span class="num">2</span><h3>1件だけ</h3><p>4つの要素で頼み、まず1件だけ作ってもらう</p></article>
              <article class="op"><span class="num">3</span><h3>続き</h3><p>開いて確かめてから、残りを頼む</p></article>
            </div>
            <p>まとめ表：<a href="materials/cowork-folders.xlsx" download>日付フォルダを一括作成する：流れとお願いの文（Excel）</a></p>
          `
      },
      {
        id: "prep",
        title: "準備",
        practice: true,
        body: `
            <p class="kicker">準備　2／4</p>
            <h1>練習用フォルダと、3つの確認</h1>
            <ol>
              <li>デスクトップなどわかりやすい場所に「CoWorkPractice」フォルダを作り、その中に「EP12」フォルダを作る</li>
              <li>Cowork の「プロジェクトまたはフォルダ」から、EP12 フォルダを追加する</li>
              <li>入力欄が Cowork になっているか、承認は「自動承認」、モデルは Opus（effort は標準）かを見る</li>
            </ol>
            <div class="callout">フォルダをさわる許可を聞かれたら「常に許可」にします。英語の画面なら、毎回聞かないようにするチェックを入れて「Allow」。「許可」だけだと、毎回聞かれます。</div>
            <div class="callout">入力欄で改行するときは Shift＋Enter。Enter だけだと、途中で送られてしまいます。</div>
          `
      },
      {
        id: "try",
        title: "1件だけ作って、続きを頼む",
        practice: true,
        body: `
            <p class="kicker">練習　3／4</p>
            <h1>まず1件。よければ残りを</h1>
            <p>フォルダ名は、追加したフォルダと、お願いの文の両方に書きます（二重に指定する）。</p>
            ${talk([
              { me: `［毎日の議事録を保存する］ためのフォルダを作成したいです。
［EP12］フォルダに、今月の1日から末日までのフォルダを作成してください。
まず今月のフォルダを「［2026年8月］」という名前で作成し、その下に「［8月］×日」という名前で末日までのフォルダを作成してください。
試しに1件だけ作成してください。` },
              { ai: `「2026年8月」フォルダを作り、その中に「8月1日」フォルダを1件だけ作りました。\n\nこの形式でよければ、残りの8月31日まで作ります。` },
              { do: "EP12 フォルダを開いて、名前と入れ子の形を自分の目で確かめる" },
              { me: `続きの作業を行ってください。` },
              { ai: `「8月1日」から「8月31日」まで、31個のフォルダがそろいました。` }
            ])}
            <p>形がちがっていたら、続きを頼む前に「名前は〇〇にして」と直してもらいます。</p>
            <h2>4つの要素で見ると</h2>
            <table>
              <thead><tr><th>要素</th><th>お願いの文のどこ？</th><th>ポイント</th></tr></thead>
              <tbody>
                <tr><td>目的</td><td>毎日の議事録を保存するため</td><td>目的があると、意図をくんで丁寧に作業してくれやすい</td></tr>
                <tr><td>対象範囲</td><td>EP12フォルダに／今月の1日から末日まで</td><td>「このフォルダ」ではなく、名前で書く</td></tr>
                <tr><td>完成物</td><td>フォルダを作成してください</td><td>何を作るかをはっきり</td></tr>
                <tr><td>条件（形）</td><td>まず月のフォルダ、その下に日付フォルダ</td><td>月のフォルダを作るかどうかは人によってちがう。ほしい形は書く</td></tr>
                <tr><td>条件（名前）</td><td>「8月×日」という名前で</td><td>書かないと「1、2、3」だけになることも</td></tr>
                <tr><td>進め方</td><td>試しに1件だけ</td><td>いきなり全部だと、まちがいのとき約30件分の時間と使える量がむだになる</td></tr>
              </tbody>
            </table>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">まとめ　4／4</p>
            <h1>あいまいな所をなくすと、時間と使える量の節約になる</h1>
            <ol>
              <li>フォルダは追加と、お願いの文の両方で指定する</li>
              <li>形と名前は、はっきり書く</li>
              <li>まず1件。Cowork の報告だけでなく、実際に開いて確かめる</li>
              <li>かんたんな作業は自動承認。慎重に進めたい作業は手動承認</li>
            </ol>
            <p>まとめ表：<a href="materials/cowork-folders.xlsx" download>日付フォルダを一括作成する（Excel）</a></p>
            <p><a class="btn-orange" href="#/course/coworkdownloads" data-link>次へ：ダウンロードしたファイルを整理する</a>
            <a class="btn-dark" href="#/course/coworkprompt" data-link>プロンプトの書き方を見直す</a></p>
          `
      }
    ]
  };
})();
