(() => {
  const talk = CLASSROOM.talk;

  CLASSROOM.courses.coworkextract = {
    id: "coworkextract",
    title: "演習：ファイルからデータを抜き出す",
    subtitle: "アンケートのPDFから、スプレッドシートの一覧表へ。4つの要素を自分で使う",
    duration: "約25分",
    audience: "プロンプトの4つの要素を、自分の手で試したい人／PDFの中身を表にまとめたい人",
    lessons: [
      {
        id: "goal",
        title: "課題",
        body: `
            <p class="kicker">課題　1／5</p>
            <h1>アンケート10件を、1行1件の表にする</h1>
            <p>この演習の目的は、きれいな表を作ることではありません。<strong>お願いの文の型（目的・完成物・対象範囲・条件）を、自分の手で使えるようになること</strong>です。</p>
            <h2>シナリオ</h2>
            <p>会計サービスの「サービス利用アンケート」の回答が、PDFで10件届きました。必要な項目だけを抜き出して、Google スプレッドシートの一覧表にまとめます。</p>
            <p>練習用：<a href="materials/practice/survey-answers.pdf" download>サービス利用アンケート 回答結果（PDF・10件）</a>　会社名も回答もすべて架空です。</p>
            <h2>抜き出す項目</h2>
            <table>
              <thead><tr><th>項目</th><th>メモ</th></tr></thead>
              <tbody>
                <tr><td>回答日</td><td></td></tr>
                <tr><td>会社名</td><td></td></tr>
                <tr><td>部署</td><td></td></tr>
                <tr><td>役職</td><td></td></tr>
                <tr><td>満足度</td><td>1〜5</td></tr>
                <tr><td>自由記述の要約</td><td>長い文をそのまま写さず、短くまとめてから入れる</td></tr>
                <tr><td>減額希望の有無</td><td></td></tr>
              </tbody>
            </table>
            <p>まとめ表：<a href="materials/cowork-extract.xlsx" download>演習の内容（Excel）</a>　<a href="materials/cowork-extract-answer.xlsx" download>解説（Excel）</a></p>
          `
      },
      {
        id: "write",
        title: "自分でお願いの文を作る",
        practice: true,
        body: `
            <p class="kicker">演習　2／5</p>
            <h1>答えを見る前に、自分で書いてみる</h1>
            <ol>
              <li>PDFを開いて、中身と項目を見る</li>
              <li>新しい Cowork を開き、入力欄の「＋」から PDF を添付する</li>
              <li>4つの要素を入れて、お願いの文を書く</li>
            </ol>
            <h2>ヒント</h2>
            <ul>
              <li><strong>目的</strong> … 何のために集めるのか</li>
              <li><strong>対象範囲</strong> … どのファイルの、何件か</li>
              <li><strong>完成物</strong> … どこに、どんな形の表で。「Google スプレッドシート」と書いたか</li>
              <li><strong>条件</strong> … 自由記述はどうするか。読めない所はどうするか</li>
              <li><strong>進め方</strong> … いきなり10件ぜんぶ、になっていないか</li>
            </ul>
            ${talk([
              { me: `［〇〇］したいです。
添付した［〇〇］を対象に、
［〇〇］を［〇〇］の形で作ってください。
［〇〇］してください。
まずは［〇〇］だけ処理してください。` }
            ], "〇〇を自分の言葉で埋めてから、次のページの解答例と見くらべます。")}
            <div class="callout">PDF の中に、1か所だけ読み取れない所があります。どう書いておけばよいか、考えてみてください。</div>
          `
      },
      {
        id: "answer",
        title: "解答例と見直し",
        body: `
            <p class="kicker">解説　3／5</p>
            <h1>4つの要素ごとの解答例</h1>
            <table>
              <thead><tr><th>要素</th><th>お願いの文</th><th>ポイント</th></tr></thead>
              <tbody>
                <tr><td>目的</td><td>サービス利用アンケートについて集計したいです。</td><td>やりたいことを最初に</td></tr>
                <tr><td>対象範囲</td><td>添付したファイルのアンケート回答結果について集計してください。</td><td>PDF は入力欄の「＋」から添付</td></tr>
                <tr><td>完成物</td><td>Google スプレッドシートを新しく作り、1行1件の一覧表にしてください。</td><td>「Google スプレッドシート」と書かないと、CSV や Excel で返ってくる</td></tr>
                <tr><td>列</td><td>列は「回答日、会社名、部署、役職、満足度、自由記述の要約、減額希望の有無」の7列です。</td><td>列の名前と順番、数（7列）まで書くと、もれなく作ってくれる</td></tr>
                <tr><td>条件</td><td>満足度は1〜5の半角数字だけで入力してください。自由記述は100字以内で要約してください。読み取れない項目は空欄にしてください。推測で埋めないでください。</td><td>半角数字にすると集計しやすい。「100字以内」のように数字で決めると、思ったとおりになりやすい</td></tr>
                <tr><td>進め方</td><td>まずは1件だけ処理して、表を出してください。</td><td>うまくいったら残りを頼む</td></tr>
              </tbody>
            </table>
            <p>1行ずつ分けなくても、4つの要素が入っていれば、つながった文でもかまいません。</p>
            <h2>うまくいかなかったときの見直し</h2>
            <table>
              <thead><tr><th>見る所</th><th>内容</th></tr></thead>
              <tbody>
                <tr><td>出す先を書いたか</td><td>「Google スプレッドシート」と書かないと、CSV や Excel のファイルで出てくる</td></tr>
                <tr><td>列と入れ方を決めたか</td><td>書かないと Claude が勝手に決める。頭にある形があれば書く</td></tr>
                <tr><td>数字で決めたか</td><td>「100字以内」「半角数字」など、数で書くとうまくいきやすい</td></tr>
                <tr><td>いきなり全部やっていないか</td><td>1件なら、要約の指示を忘れてもすぐやり直せる</td></tr>
              </tbody>
            </table>
          `
      },
      {
        id: "run",
        title: "1件だけ試して、残りを頼む",
        practice: true,
        body: `
            <p class="kicker">やってみる　4／5</p>
            <h1>1件 → Google Drive をつなぐ → 残り</h1>
            <p>新しい Cowork で、自動承認・Opus（標準）になっているかを見てから、解答例の文と PDF を送ります。</p>
            ${talk([
              { do: "PDF を入力欄の「＋」から添付" },
              { me: `サービス利用アンケートについて集計したいです。
添付したファイルのアンケート回答結果について集計してください。
Googleスプレッドシートを新規作成し、1行1件の一覧表にしてください。
列は「回答日、会社名、部署、役職、満足度、自由記述の要約、減額希望の有無」の7列です。
満足度は1〜5の半角数字だけで入力してください。
自由記述は100字以内で要約してください。
読み取れない項目は空欄にしてください。推測で埋めないでください。
まずは1件だけ処理して表を出力してください。`, file: "survey-answers.pdf" },
              { ai: `1件目をCSVの形で用意しました。Googleスプレッドシートへの反映方法を選んでください。\n\n・Google Drive コネクタをつなぐ\n・ほかの方法` },
              { do: "「Google Drive コネクタをつなぐ」を選び、Google アカウントでログイン → 権限を選んで「続行」→ Claude アプリに戻る" },
              { me: `接続できました。` },
              { ai: `新しいスプレッドシートを作り、1件目を入れました。7列そろっているか、開いて確かめてください。` },
              { do: "スプレッドシートを開いて、7列そろっているか、要約が100字以内か、満足度が数字かを見る" },
              { me: `問題ありません。残りもお願いします。` },
              { ai: `10件すべてを入れた、新しいスプレッドシートを作りました。No.5 の役職は読み取れなかったため、空欄にしています。` }
            ])}
            <div class="callout warn">Google Drive をつなぐと、Claude がファイルを作ったり書きかえたりできるようになります。つなぐのは、自分のアカウントだけにします。会社のアカウントなら、会社のルールを先に確かめます。</div>
            <p>表示される選択肢は、人によってちがうことがあります。作業の中身を見たいときは「報告」を押すと、何をしているかが見られます。</p>
          `
      },
      {
        id: "summary",
        title: "まとめ：コネクタと Chrome",
        body: `
            <p class="kicker">まとめ　5／5</p>
            <h1>新しく作るならコネクタ、続きを書くなら Chrome</h1>
            <table>
              <thead><tr><th>項目</th><th>Google Drive コネクタ</th><th>Claude in Chrome</th></tr></thead>
              <tbody>
                <tr><td>しくみ</td><td>チャットで「Google Drive とつなぎますか？」と出て、つなぐもの</td><td>ブラウザを実際に動かす拡張機能（「フォームを自動入力する」で使ったもの）</td></tr>
                <tr><td>スプレッドシート</td><td>動かすたびに新しいファイルができる（収録のときのしくみ）。1件目と全件は別のファイルになった</td><td>今あるファイルを直したり、書き足したりできる</td></tr>
                <tr><td>向いている場面</td><td>新しくファイルを作って出したいとき</td><td>作ったシートの続きに書き足したい、今あるファイルを直したいとき</td></tr>
                <tr><td>頼み方</td><td>方法を書かないと、コネクタをすすめられることがある</td><td>シートのURLを貼って「Claude in Chrome でこのファイルに続きを書き足してください」</td></tr>
              </tbody>
            </table>
            <p>どちらを使うかは、何度か試すうちにわかってきます。うまくいかないときは、Claude に聞きながら直せば大丈夫です。</p>
            <ol>
              <li>4つの要素に、列・数字・進め方まで書く</li>
              <li>まず1件。開いて確かめてから残りを</li>
              <li>読めない所は空欄。推測で埋めさせない</li>
            </ol>
            <p>まとめ表：<a href="materials/cowork-extract.xlsx" download>演習の内容（Excel）</a>　<a href="materials/cowork-extract-answer.xlsx" download>解説（Excel）</a></p>
            <p><a class="btn-orange" href="#/course/coworkskill" data-link>次へ：スキルとは</a>
            <a class="btn-dark" href="#/course/coworkform" data-link>フォームを自動入力するへ</a></p>
          `
      }
    ]
  };
})();
