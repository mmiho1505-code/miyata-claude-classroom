(() => {
  const talk = CLASSROOM.talk;

  CLASSROOM.courses.coworkads = {
    id: "coworkads",
    title: "演習：競合広告の出稿状況を定期収集する",
    subtitle: "Meta 広告ライブラリを毎週見に行かせ、出ている広告を一覧にためる",
    duration: "約30分",
    audience: "競合の SNS 広告を定期的に見ておきたい人／Web で調べて表に残す作業を自動にしたい人",
    lessons: [
      {
        id: "goal",
        title: "課題",
        body: `
            <p class="kicker">課題　1／4</p>
            <h1>競合の広告を、毎週比べられる形でためる</h1>
            <h2>シナリオ</h2>
            <p><strong>Meta 広告ライブラリ</strong>で競合の会社を調べさせ、出している広告の情報を一覧で見られる状態を作ります。Meta 広告ライブラリは、Facebook や Instagram を運営する Meta 社の、いま出ている広告を誰でも調べられるサービスです。</p>
            <p>毎週見に行かせて、競合の広告の出し方が一目で分かる形でたまるようにします。<strong>あとで比べられるように、何をどんな形で残すかを決める</strong>ところまでが課題です。</p>
            <table>
              <thead><tr><th>段階</th><th>やること</th></tr></thead>
              <tbody>
                <tr><td>STEP1</td><td>集める項目（シートの列）を決める</td></tr>
                <tr><td>STEP2</td><td>まず1社で試す</td></tr>
                <tr><td>STEP3</td><td>うまくいったら、毎週のスケジュール実行にする</td></tr>
              </tbody>
            </table>
            <div class="callout">答えを見る前に、必ず一度は自分の手でやってみてください。</div>
            <p>まとめ表：<a href="materials/cowork-ads.xlsx" download>演習の内容（Excel）</a></p>
          `
      },
      {
        id: "url",
        title: "STEP1 列を決める・URL を探す",
        practice: true,
        body: `
            <p class="kicker">STEP 1　2／4</p>
            <h1>あとで何を比べたいかから、列を先に決める</h1>
            <p>この演習では、次の8列にします。</p>
            <table>
              <thead><tr><th>列</th><th>何を入れるか</th></tr></thead>
              <tbody>
                <tr><td>取得日</td><td>集めた日</td></tr>
                <tr><td>出稿主名</td><td>広告を出している会社やページの名前</td></tr>
                <tr><td>ライブラリID</td><td>広告ごとの番号。週をまたいで同じ広告か見分けるのに使う</td></tr>
                <tr><td>掲載開始日</td><td>広告が出はじめた日</td></tr>
                <tr><td>掲載面</td><td>Facebook、Instagram など、どこに出ているか</td></tr>
                <tr><td>広告種別</td><td>画像、動画など</td></tr>
                <tr><td>広告本文</td><td>広告の文章</td></tr>
                <tr><td>広告URL</td><td>広告を押したときに開くページ</td></tr>
              </tbody>
            </table>
            <h2>調べるページの URL の探し方</h2>
            <ol>
              <li>Google で「Meta 広告ライブラリ」と検索し、Facebook の「広告ライブラリ」を開く</li>
              <li>国は「日本」、広告のカテゴリーは「すべての広告」</li>
              <li>調べたい会社の名前を入れる。練習では、この教室のもとになった講座の会社（DMM）で試す。「DMM 生成AI CAMP 学び放題」が2つ出るので、フォロワーの多いほうを選ぶ</li>
              <li>広告の一覧のページの URL をコピーして、Cowork へのお願いに貼る</li>
            </ol>
            <p>自分の仕事で使うなら、自分の会社の競合で試してかまいません。</p>
          `
      },
      {
        id: "hint",
        title: "STEP2・3 ヒント",
        practice: true,
        body: `
            <p class="kicker">STEP 2・3　3／4</p>
            <h1>1社で試して、毎週に乗せる</h1>
            <h2>STEP2 まず1社で試す</h2>
            <ul>
              <li>一覧のページの URL をお願いに入れる</li>
              <li>Google スプレッドシートの形で、STEP1 の8列の表を作るように書く</li>
              <li>目的・完成物・対象範囲・条件の4つが、この課題では何にあたるかを考える（<a href="#/course/coworkprompt" data-link>頼み方の4つの要素</a>）</li>
              <li>いきなり全部ではなく、まず数件だけ表に入れて見せてもらう</li>
            </ul>
            <div class="callout">Google スプレッドシートは、今のところコネクタを通すと新しく作ることしかできません。この演習では、<strong>毎週新しいシートができる形でかまいません</strong>（1つのシートに書き足さなくてよい）。</div>
            <h2>STEP3 定期実行に乗せる</h2>
            <ul>
              <li>うまく集められたら、同じチャットで毎週のスケジュール実行にする</li>
              <li>曜日や時刻は自由（例：毎週月曜の朝9時）</li>
              <li>やり方を忘れたら：<a href="#/course/coworkschedule" data-link>スケジュール実行で定期タスク化する</a></li>
            </ul>
            <p>Web のページを読みに行く作業なので、途中でブラウザ（Claude in Chrome）を使ってよいか聞かれることがあります。</p>
          `
      },
      {
        id: "answer",
        title: "答えの例",
        body: `
            <p class="kicker">答えの例　4／4</p>
            <h1>お願いの文の一例</h1>
            <p>動画に答えはないため、4つの要素に当てはめて作った一例です。列の名前や書き方、曜日は自分用に変えてかまいません。</p>
            ${talk([
              { me: `競合企業の SNS 広告の出稿状況を、毎週比べられる形で記録したいです。

Meta 広告ライブラリの次のページに表示されている、日本で配信中の広告を対象にしてください。
［広告の一覧のページの URL］

Google スプレッドシートを新規作成し、1行1広告の一覧表にしてください。
列は「取得日」「出稿主名」「ライブラリID」「掲載開始日」「掲載面」「広告種別」「広告本文」「広告URL」の8列です。
ファイル名は「Meta広告_出稿状況_YYYYMMDD」にしてください。

・取得日と掲載開始日は YYYY/MM/DD で入力してください。
・掲載面は Facebook／Instagram など、表示されているとおりに書いてください。
・読み取れない項目は空欄にせず「要確認」と書き、推測で埋めないでください。

まずは広告3件だけ表に入れて見せてください。問題なければ残りも進めてもらいます。` }
            ], "")}
            <h2>うまくいったら、同じチャットで</h2>
            ${talk([
              { me: `このタスクをスケジュール設定してください。毎週月曜日の午前9時に実行するようにしてください。` }
            ], "")}
            <h2>確かめる所</h2>
            <ul>
              <li>8列がそろっていて、1行に1つの広告になっているか</li>
              <li>日付の形がそろっているか。読めない所が推測ではなく「要確認」になっているか</li>
              <li>ライブラリ ID が、広告ライブラリの画面の番号と合っているか（何件か見くらべる）</li>
            </ul>
            <div class="callout warn">広告ライブラリは誰でも見られる情報ですが、集めた表の使い道は社内の比較にとどめます。練習で登録したスケジュールは、毎週動いてほしくなければ「一時停止」か「削除」しておきます。</div>
            <p>まとめ表：<a href="materials/cowork-ads.xlsx" download>演習の内容と答えの例（Excel）</a></p>
            <p><a class="btn-orange" href="#/course/cowork" data-link>次へ：はじめての Claude Cowork</a>
            <a class="btn-dark" href="#/course/coworkslack" data-link>Slack を定期巡回してタスクを洗い出すへ</a></p>
          `
      }
    ]
  };
})();
