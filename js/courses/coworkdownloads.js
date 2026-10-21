(() => {
  const talk = CLASSROOM.talk;

  CLASSROOM.courses.coworkdownloads = {
    id: "coworkdownloads",
    title: "ダウンロードしたファイルを整理する",
    subtitle: "種類ごとに分けて、中身がわかる名前に。まず画像だけ試す",
    duration: "約15分",
    audience: "ダウンロードフォルダが散らかっている人／ファイル名の付け直しを任せたい人",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">GOAL　1／4</p>
            <h1>ばらばらのファイルを、4つのフォルダに分ける</h1>
            <p>ダウンロードフォルダには、写真・PDF・資料・アプリの入れ物などがまざっています。名前も「IMG_0123」「01.pdf」のように、開かないと中身がわかりません。</p>
            <p>Cowork は、<strong>ファイルの中身まで読んで</strong>、種類ごとに分け、中身がひと目でわかる名前に付け直します（リネーム）。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>分ける</h3><p>画像・動画・PDF・その他の4つのフォルダへ</p></article>
              <article class="op"><span class="num">2</span><h3>名前を付け直す</h3><p>中身がひと目でわかる英語の名前に</p></article>
              <article class="op"><span class="num">3</span><h3>一部で試す</h3><p>まず画像だけ。確かめてから残りを</p></article>
            </div>
            <p>まとめ表：<a href="materials/cowork-downloads.xlsx" download>ダウンロードしたファイルを整理する：流れとお願いの文（Excel）</a></p>
          `
      },
      {
        id: "prep",
        title: "準備",
        practice: true,
        body: `
            <p class="kicker">準備　2／4</p>
            <h1>練習用フォルダに、10〜20個を移す</h1>
            <div class="callout warn">本物のダウンロードフォルダで、いきなりやらないでください。分け方や名前が思ったのとちがったとき、どれが何だったかわからなくなります。必ず練習用フォルダで試します。</div>
            <ol>
              <li>前の作業のやりとりが残っているので、「新規」で新しい Cowork を開く</li>
              <li>「CoWorkPractice」フォルダの中に「EP13」フォルダを作る</li>
              <li>ダウンロードフォルダから、ファイルを10〜20個 EP13 に移す（種類がばらばらなほうが、結果がわかりやすい）</li>
              <li>「プロジェクトまたはフォルダ」で EP13 を追加して「常に許可」。前回の EP12 はチェックを外し、EP13 だけにする</li>
              <li>Cowork・自動承認・Opus（effort は標準）になっているかを見る</li>
            </ol>
          `
      },
      {
        id: "try",
        title: "まず画像だけ、そして続き",
        practice: true,
        body: `
            <p class="kicker">練習　3／4</p>
            <h1>画像だけで試して、開いて確かめる</h1>
            ${talk([
              { me: `ダウンロードしたファイルを整理整頓したいです。
［EP13］フォルダ内のファイルを、形式に応じて以下のフォルダに分類してください。
・［画像］
・［動画］
・［PDF］
・［その他］（どれにも該当しないもの）

また、各ファイルの内容が一目でわかるように、ファイル名を適切な英語名にリネームしてください。
※ファイル名に日本語を使用しないでください。

まずは試しに画像についてのみ作業してください。` },
              { ai: `画像を1枚ずつ開いて中身を確かめ、〔6枚〕を英語の名前に付け直して「画像」フォルダへ移しました。\n\n・変更前 → 変更後の名前の一覧\n・名前の付け方のルール：中身を英語で短く、単語をハイフンでつなぐ\n\nこの方針でよければ、残りも進めます。` },
              { do: "EP13 フォルダを開いて、画像だけが移っているか、名前が中身と合っているかを確かめる" },
              { me: `問題ありません。続きの作業をしてください。` },
              { ai: `終わりました。EP13 の中は「画像」「動画」「PDF」「その他」の4つのフォルダだけになり、すべてのファイルを中身に合った英語の名前にしています。` }
            ])}
            <p>うまくいかない所があれば、その点だけ伝えれば直してもらえます。</p>
            <h2>付いた名前の例</h2>
            <table>
              <thead><tr><th>分けた先</th><th>変更前</th><th>変更後</th></tr></thead>
              <tbody>
                <tr><td>画像</td><td>番号だけの写真</td><td>Lemon-Soda-drink-on-wooden-table</td></tr>
                <tr><td>画像</td><td>日付入りのスクリーンショット</td><td>Screenshot-Claude-CoWork-Folder-Creation（ほぼ同じ2枚は番号で区別）</td></tr>
                <tr><td>その他</td><td>祝日の一覧のCSV</td><td>Japan-Public-Holidays-list</td></tr>
                <tr><td>その他</td><td>Claude.dmg</td><td>Claude-Desktop-App-Installer</td></tr>
                <tr><td>PDF／その他</td><td>01.pdf と 02.docx</td><td>同じ資料のPDF版とWord版と見て、同じ名前にそろえた</td></tr>
              </tbody>
            </table>
            <h2>4つの要素で見ると</h2>
            <table>
              <thead><tr><th>要素</th><th>お願いの文のどこ？</th><th>ポイント</th></tr></thead>
              <tbody>
                <tr><td>目的</td><td>整理整頓したいです</td><td>やりたいことを最初に</td></tr>
                <tr><td>対象範囲</td><td>EP13フォルダ内のファイルを</td><td>フォルダを選んであっても、名前をもう一度書く</td></tr>
                <tr><td>完成物（分け方）</td><td>画像・動画・PDF・その他</td><td>分け方は自分の好きでよい。どれにも当たらない物の行き先も決める</td></tr>
                <tr><td>完成物（名前）</td><td>ひと目でわかる英語の名前</td><td>「ひと目でわかる」「英語」とはっきり書く</td></tr>
                <tr><td>条件</td><td>日本語を使わない</td><td>ゆずれないルールは、言い方を変えてくり返す</td></tr>
                <tr><td>進め方</td><td>まずは画像だけ</td><td>一部で結果を見てから続ける</td></tr>
              </tbody>
            </table>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">まとめ　4／4</p>
            <h1>中身まで読んで、分けて、名前を付ける</h1>
            <ol>
              <li>本物のフォルダではなく、練習用フォルダで試す</li>
              <li>分け方と名前の付け方は、はっきり書く。ゆずれないルールはくり返す</li>
              <li>まず一部（画像だけ）。開いて確かめてから続きを頼む</li>
              <li>Cowork の報告で、変更前後の名前と付け方のルールを見る</li>
            </ol>
            <p>まとめ表：<a href="materials/cowork-downloads.xlsx" download>ダウンロードしたファイルを整理する（Excel）</a></p>
            <p><a class="btn-orange" href="#/course/coworkform" data-link>次へ：フォームを自動入力する</a>
            <a class="btn-dark" href="#/course/coworkfolders" data-link>日付フォルダを一括作成するへ</a></p>
          `
      }
    ]
  };
})();
