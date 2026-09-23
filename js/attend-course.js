(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.attend = {
    id: "attend",
    title: "出退勤管理を作ろう",
    subtitle: "ボタンを押すだけのタイムカード。記録と月末の集計をラクにする",
    duration: "約35分",
    audience: "Coworkを使う人／事務・総務",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">GOAL</p>
            <h1>帰るときに、この3つができるように</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>作る</h3><p>出勤・退勤ボタンのあるアプリを Cowork で作る</p></article>
              <article class="op"><span class="num">2</span><h3>記録する</h3><p>押した時刻が消えずに残るか、テストして確かめる</p></article>
              <article class="op"><span class="num">3</span><h3>集計する</h3><p>月末に一人ずつの勤務時間をまとめて取り出す</p></article>
            </div>
          `
      },
      {
        id: "image",
        title: "完成のイメージ",
        body: `
            <p class="kicker">完成形</p>
            <h1>名前を選んで、ボタンを押すだけ</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>名前を選ぶ</h3><p>一覧から自分の名前を選ぶ</p></article>
              <article class="op"><span class="num">2</span><h3>出勤／退勤</h3><p>大きいボタンを押す。時刻が残る</p></article>
              <article class="op"><span class="num">3</span><h3>今日の記録</h3><p>例：出勤 8:58 ／ 退勤 17:32</p></article>
            </div>
            <p>スマホでもパソコンでも使えます。事務員は、月末に集計を取り出すだけです。</p>
          `
      },
      {
        id: "vs",
        title: "ポータルとの違い",
        body: `
            <p class="kicker">保存が大事</p>
            <h1>みんなが書き込むので、「保存」が大事</h1>
            <div class="ops">
              <article class="op"><span class="num">A</span><h3>社内ポータル</h3><p>事務員が書いて、社員は見るだけ。中身は Claude に頼んで直す</p></article>
              <article class="op"><span class="num">B</span><h3>出退勤管理</h3><p>社員みんながボタンで書き込む。押した記録を残しておく必要がある</p></article>
            </div>
            <div class="callout">だからお願い文に「記録はみんなの分を保存して、消えないように」と一言入れます。</div>
            <p>ポータルの作り方は <a href="#/course/portalmake" data-link>作り方編</a> です。</p>
          `
      },
      {
        id: "flow",
        title: "全体の流れ",
        body: `
            <p class="kicker">5ステップ</p>
            <h1>作って、試して、使い始める</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>決める</h3><p>決めることを整理する</p></article>
              <article class="op"><span class="num">2</span><h3>頼む</h3><p>お願いを書く</p></article>
              <article class="op"><span class="num">3</span><h3>答える</h3><p>質問に答える</p></article>
              <article class="op"><span class="num">4</span><h3>テスト</h3><p>自分でテストする</p></article>
              <article class="op"><span class="num">5</span><h3>使い始め</h3><p>共有して使い始める</p></article>
            </div>
          `
      },
      {
        id: "prep",
        title: "3つだけ決めておく",
        body: `
            <p class="kicker">STEP 1</p>
            <h1>お願いする前に、3つだけ決めておく</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>誰が使う？</h3><p>社員の名前の一覧（名字だけでもOK）</p></article>
              <article class="op"><span class="num">2</span><h3>何を押す？</h3><p>出勤・退勤だけか、休憩の開始・終了も入れるか</p></article>
              <article class="op"><span class="num">3</span><h3>月末に何が欲しい？</h3><p>一人ずつの合計時間、日ごとの一覧、Excelで出す等</p></article>
            </div>
            <p>いまのタイムカードや勤怠表を手元に置いておくと、決めやすくなります。</p>
          `
      },
      {
        id: "ask",
        title: "お願いを書く",
        practice: true,
        body: `
            <p class="kicker">STEP 2　練習</p>
            <h1>このまま真似してOK</h1>
            <p>パソコンの Claude アプリで Cowork を開き、下の文を貼って送ります。名前は自分の会社用に直してください。演習では架空の3人のままで構いません。</p>
            ${box(`社員が使う出退勤管理のアプリを作ってください。

・使う人：山田 花子, 佐藤 次郎, 鈴木 一郎。スマホから押す人もいます
・ボタン：出勤、退勤
・名前を選んでボタンを押すと、その時刻を記録
・記録は全員分を保存して、ページを閉じても消えないように
・月末に、一人ずつの日ごとの時刻と合計時間を表で見られて、Excelで取り出せるように
・社名は「株式会社 宮田財務」

ボタンは大きく、パソコンが苦手な人でも迷わない画面にしてください。
できたら、社員が開けるリンクをください。`)}
            <div class="callout">いちばん大事な一文は「記録は全員分を保存して、ページを閉じても消えないように」です。</div>
          `
      },
      {
        id: "answer",
        title: "質問に答える",
        body: `
            <p class="kicker">STEP 3</p>
            <h1>よく聞かれる質問と、答え方の例</h1>
            <table>
              <thead><tr><th>Claudeからの質問（例）</th><th>答え方の例</th></tr></thead>
              <tbody>
                <tr><td>押し間違えたらどうする？</td><td>「事務員だけが直せるように」</td></tr>
                <tr><td>他の人の記録も見える？</td><td>「社員は自分の分だけ、事務員は全員分」</td></tr>
                <tr><td>日付の区切りは？</td><td>「夜勤なし。0時で区切ってOK」</td></tr>
                <tr><td>合計時間の計算方法は？</td><td>「退勤−出勤−休憩。端数はそのまま」</td></tr>
              </tbody>
            </table>
            <p>分からない質問は「一般的なやり方でおまかせ」で大丈夫です。</p>
          `
      },
      {
        id: "check",
        title: "自分でテストする",
        body: `
            <p class="kicker">STEP 4</p>
            <h1>使い始める前に、自分でテストする</h1>
            <ol>
              <li>自分の名前で <strong>出勤→退勤</strong> を押し、記録が表示されるか</li>
              <li>ページを閉じて開き直しても、記録が残っているか</li>
              <li>別の人・別のスマホで押した記録も、事務員の画面に出るか</li>
              <li>合計時間の計算が、電卓で計算した値と合っているか</li>
            </ol>
            <div class="callout">配る前のテストを飛ばすと、消えたり、計算が違ったりしたまま社員が使い始めます。</div>
          `
      },
      {
        id: "share",
        title: "共有して使い始める",
        body: `
            <p class="kicker">STEP 5</p>
            <h1>共有して、使い始める</h1>
            <table>
              <thead><tr><th>すること</th><th>ポイント</th></tr></thead>
              <tbody>
                <tr><td>共有する</td><td>ページの「共有」から、使う社員を全員入れる</td></tr>
                <tr><td>リンクを送る</td><td>社内チャットやメールでリンクを送る</td></tr>
                <tr><td>すぐ押せるように</td><td>スマホならホーム画面に、パソコンならお気に入りに</td></tr>
                <tr><td>試験期間を作る</td><td>最初の1〜2週間は、今のタイムカードと並行して使う</td></tr>
              </tbody>
            </table>
          `
      },
      {
        id: "excel",
        title: "月末の集計",
        practice: true,
        body: `
            <p class="kicker">月末</p>
            <h1>集計も「話しかけるだけ」</h1>
            <p>作った会話の続きに、近いものをコピーして月だけ直してください。</p>
            ${box(`出退勤アプリの10月分を、一人ずつ日ごとの出勤・退勤時刻と合計時間の表にして、Excelでください`)}
            ${box(`退勤の押し忘れがある日を一覧にして`)}
            ${box(`労働時間が1日8時間を超えた日を教えて`)}
            <p>アプリ画面の「Excelで取り出す」ボタンから、自分で出すこともできます。</p>
          `
      },
      {
        id: "tips",
        title: "後から直す",
        practice: true,
        body: `
            <p class="kicker">変更</p>
            <h1>よくある変更と、その伝え方</h1>
            ${box(`名前の一覧に『佐藤 次郎』を追加して`)}
            ${box(`鈴木さんを一覧から外して。過去の記録は残して`)}
            ${box(`山田さんの10/3の退勤を18:00にして`)}
            ${box(`休憩開始・休憩終了のボタンを追加して`)}
            ${box(`ボタンをもっと大きく
今日の日付を大きく表示`)}
            <p>直し方のコツは <a href="#/course/portalfix" data-link>ポータル直し方編</a> と同じです。同じ会話の続きに書きます。</p>
          `
      },
      {
        id: "safety",
        title: "3つの約束",
        body: `
            <p class="kicker">注意</p>
            <h1>勤怠の記録だからこその3つの約束</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>正式な記録か確認</h3><p>勤怠の記録として使ってよいか、社長や社労士に確認</p></article>
              <article class="op"><span class="num">2</span><h3>載せるのは名前だけ</h3><p>住所・給与・マイナンバーなどは入れない</p></article>
              <article class="op"><span class="num">3</span><h3>毎月控えを取る</h3><p>月末に取り出した Excel を、社内の決まった場所に保存</p></article>
            </div>
          `
      },
      {
        id: "practice",
        title: "25分でやってみる",
        practice: true,
        body: `
            <p class="kicker">演習</p>
            <h1>実際にやってみましょう</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>作る</h3><p>見本のお願いで作る（名前は架空の3人でOK）</p></article>
              <article class="op"><span class="num">2</span><h3>テストする</h3><p>出勤→退勤を押し、開き直しても残るか確認</p></article>
              <article class="op"><span class="num">3</span><h3>直す</h3><p>社員を1人追加し、休憩ボタンを足す</p></article>
              <article class="op"><span class="num">4</span><h3>集計する</h3><p>今日の記録を Excel で取り出してみる</p></article>
            </div>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">覚えておくこと</p>
            <h1>覚えておくのは、この3つだけ</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>保存する</h3><p>お願い文に「全員分を保存して、消えないように」</p></article>
              <article class="op"><span class="num">2</span><h3>自分でテスト</h3><p>配る前に。別の人の記録も残るか</p></article>
              <article class="op"><span class="num">3</span><h3>月末は Excel</h3><p>取り出して、控えを保存する</p></article>
            </div>
            <p>最初はタイムカードと並行して、安心してから切り替えましょう。</p>
            <p>月末の給料計算は <a href="#/course/salary" data-link>給料計算編</a> です。</p>
            <p><a href="materials/attend.pdf" download>スライドPDF（出退勤管理編）</a></p>
            <p><a class="btn-dark" href="#/" data-link>ホームへ</a></p>
          `
      }
    ]
  };

  Object.assign(CLASSROOM.quizzes, {
    attend: [
      {
        q: "出退勤管理が、社内ポータルといちばん違う点は？",
        choices: ["色が違うこと", "社員みんながボタンで書き込むので、記録を保存する必要があること", "スマホでは使えないこと"],
        a: 1,
        explain: "見るだけのページではなく、押した時刻を残すアプリです。"
      },
      {
        q: "お願い文に必ず入れる一文は？",
        choices: ["「いい感じに」", "「記録は全員分を保存して、消えないように」", "「パスワードを載せて」"],
        a: 1,
        explain: "ページを閉じても残るように、保存をはっきり頼みます。"
      },
      {
        q: "社員に配る前に、必ずすることは？",
        choices: ["自分で出勤→退勤を押し、開き直しても残るか見る", "給与とマイナンバーを入れる", "タイムカードをすぐに捨てる"],
        a: 0,
        explain: "配る前にテストします。最初の1〜2週間は今のタイムカードと並行が安心です。"
      },
      {
        q: "アプリに載せてよい個人の情報は？",
        choices: ["住所・給与・マイナンバー", "名前（名字だけでも可）", "口座番号"],
        a: 1,
        explain: "載せるのは名前だけです。勤怠として使ってよいかは社長や社労士に確認します。"
      }
    ]
  });
})();
