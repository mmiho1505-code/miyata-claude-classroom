(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.attend = {
    id: "attend",
    title: "出退勤と給料計算",
    subtitle: "ボタンで押すタイムカードを作り、月末の時間×時給を表にする",
    duration: "約45分",
    audience: "チャットで作業を任せる人／事務・総務・給与担当",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        was: ["attend/goal", "attend/image", "attend/vs", "attend/flow", "attend/prep"],
        body: `
            <p class="kicker">GOAL　1／7</p>
            <h1>名前を選んで、出勤を押す。時刻が残る</h1>
            <p>朝、タイムカードを探しています。月末は出退勤の Excel と電卓で、一人ずつ時間×時給を掛けています。</p>
            <p>見るだけのポータルと違い、社員みんなが書き込みます。だから「消えないように」が大事です。先に3つ決めておきます。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>誰が使う？</h3><p>社員の名前の一覧（名字だけでもOK）</p></article>
              <article class="op"><span class="num">2</span><h3>何を押す？</h3><p>出勤・退勤だけか、休憩の開始・終了も入れるか</p></article>
              <article class="op"><span class="num">3</span><h3>月末に何が欲しい？</h3><p>一人ずつの合計時間、日ごとの一覧、Excelで出す等</p></article>
            </div>
          `
      },
      {
        id: "ask",
        title: "作って、押して、配る",
        practice: true,
        was: ["attend/ask", "attend/answer", "attend/check", "attend/share", "attend/safety"],
        body: `
            <p class="kicker">練習　2／7</p>
            <h1>同じチャットに貼る。いちばん大事なのは「消えない」</h1>
            <p>claude.ai またはパソコンの Claude で貼って送ります。演習では架空の3人のままで構いません。</p>
            ${box(`社員が使う出退勤管理のアプリを作ってください。

・使う人：山田 花子, 佐藤 次郎, 鈴木 一郎。スマホから押す人もいます
・ボタン：出勤、退勤
・名前を選んでボタンを押すと、その時刻を記録
・記録は全員分を保存して、ページを閉じても消えないように
・月末に、一人ずつの日ごとの時刻と合計時間を表で見られて、Excelで取り出せるように
・社名は「株式会社 宮田財務」

ボタンは大きく、パソコンが苦手な人でも迷わない画面にしてください。
できたら、社員が開けるリンクをください。`)}
            <ul>
              <li>押し間違えたら？ →「事務員だけが直せるように」</li>
              <li>他の人の記録も見える？ →「社員は自分の分だけ、事務員は全員分」</li>
              <li>日付の区切りは？ →「夜勤なし。0時で区切ってOK」</li>
              <li>分からない質問 →「一般的なやり方でおまかせ」</li>
            </ul>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>テスト</h3><p>自分で出勤→退勤。閉じて開き直しても残るか。別のスマホの記録も出るか。合計を電卓で</p></article>
              <article class="op"><span class="num">2</span><h3>配る</h3><p>「共有」に社員を全員入れ、リンクを送る。スマホはホーム画面に</p></article>
              <article class="op"><span class="num">3</span><h3>並行する</h3><p>最初の1〜2週間は今のタイムカードと並行する</p></article>
            </div>
            <div class="callout">勤怠の記録として使ってよいか、社長や社労士に先に確認します。載せるのは名前だけ。住所・給与・マイナンバーは入れません。</div>
          `
      },
      {
        id: "addfeat",
        title: "集計と機能を足す",
        practice: true,
        was: ["attend/excel", "attend/tips", "attend/addfeat", "attend/practice", "attend/summary"],
        body: `
            <p class="kicker">練習　3／7</p>
            <h1>作った会話の続きに書く。ゼロから作り直さない</h1>
            <h2>月末の集計</h2>
            ${box(`出退勤アプリの10月分を、一人ずつ日ごとの出勤・退勤時刻と合計時間の表にして、Excelでください`)}
            ${box(`退勤の押し忘れがある日を一覧にして`)}
            ${box(`労働時間が1日8時間を超えた日を教えて`)}
            <p>取り出した Excel は、毎月社内の決まった場所に保存します。</p>
            <h2>直す・足す</h2>
            ${box(`名前の一覧に『佐藤 次郎』を追加して`)}
            ${box(`鈴木さんを一覧から外して。過去の記録は残して`)}
            ${box(`山田さんの10/3の退勤を18:00にして`)}
            ${box(`出退勤アプリに、休憩開始・休憩終了のボタンを追加して。押した時刻も保存して`)}
            ${box(`出退勤に『欠勤』『有給』のボタンを追加して。理由は書かなくていい`)}
            ${box(`押し忘れた人（出勤はあるのに退勤がない人）が一目で分かる一覧を、事務の画面に追加して`)}
            ${box(`事務員だけが、押し間違いの時刻を直せる画面を追加して。誰がいつ直したかも残して`)}
            ${box(`スマホのホーム画面に置けるように、出退勤の画面を1枚にして。ボタンはもっと大きく`)}
            ${box(`ボタンをもっと大きく
今日の日付を大きく表示`)}
            <h2>社内ポータルに足す</h2>
            ${box(`いまの社内ポータルに、「出退勤」を足してください。

1ページの中身は、いまの4つのままです。上から
1. お知らせ
2. 今月の予定
3. よく使うリンク
4. 部署の連絡先

出退勤は5つ目のブロックにしないでください。
よく使うリンクの中に「出退勤」のボタンを置き、押したら出退勤の画面が開くようにしてください。

出退勤の画面
・社員は名前を選んで、出勤・退勤の大きいボタンを押す
・押した時刻は全員分を保存して、ページを閉じても消えない
・社員は自分の分だけ見える。事務員は全員分を見られる
・月末は、一人ずつ日ごとの時刻と合計時間を表で見られて、Excelで取り出せる

見た目は今のポータルに合わせる（落ち着いた緑、文字は大きめ）
社名は「株式会社 宮田財務」
いまあるお知らせ・予定・リンク・連絡先は消さないでください。
できたら、社員が開けるリンクをください。`)}
            <p>ポータルがまだなら <a href="#/course/portalmake" data-link>社内ポータル講座</a> で先に作ります。</p>
            <p><a href="materials/attend.pdf" download>スライドPDF（出退勤管理編）</a></p>
          `
      },
      {
        id: "salary",
        title: "給料計算の準備",
        was: ["salary/goal", "salary/scope", "salary/flow", "salary/prep", "salary/rules"],
        body: `
            <p class="kicker">給料計算　4／7</p>
            <h1>任せるのは支給額まで。3つそろえる</h1>
            <p>勤務時間・残業の集計、時間×時給、割増、手当の足し算までを頼みます。</p>
            <div class="callout warn">社会保険料・雇用保険料、所得税・住民税の天引き、最終的な支給額の決定、振込・給与明細の発行は、今まで通りの方法です。計算表は下書き。最後は人が決めます。</div>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>出退勤の記録</h3><p>出退勤アプリから取り出した今月分のExcel</p></article>
              <article class="op"><span class="num">2</span><h3>給与条件の表</h3><p>社員ごとの時給（月給）、通勤手当などの手当</p></article>
              <article class="op"><span class="num">3</span><h3>会社のルール</h3><p>所定の勤務時間、休憩、残業の扱い、端数の処理</p></article>
            </div>
            <p>割増の最低ライン：1日8時間・週40時間超は25%以上、22時〜5時は25%以上、法定休日は35%以上、時間外が月60時間超は50%以上。会社のルールは就業規則と社労士さんに確認します。</p>
            <p>練習用：<a href="materials/salary-attend-sample.csv" download>出退勤のサンプル</a>　<a href="materials/salary-rates-sample.csv" download>給与条件のサンプル</a></p>
          `
      },
      {
        id: "salaryask",
        title: "給料計算表を頼む",
        practice: true,
        was: ["salary/ask", "salary/files", "salary/result"],
        body: `
            <p class="kicker">練習　5／7</p>
            <h1>式が見える Excel にして、押し忘れは計算しない</h1>
            <ol>
              <li>2つのファイルを入力欄にドラッグする</li>
              <li>下の文と一緒に送る。［　］は自分の会社の数字に</li>
              <li>できた計算表を開いて、自分のパソコンに保存する</li>
            </ol>
            ${box(`添付の出退勤記録（10月分）と給与条件表から、給料計算表をExcelで作ってください。

・時給制の人：勤務時間 × 時給
・1日8時間を超えた分は25%増し、22時〜5時は25%増し
・休憩は1時間を引く。通勤手当を足す
・一人1行で、勤務時間・残業時間・割増分・手当・支給額を並べる
・計算式が見えるように（数字の直打ちはしない）

出勤か退勤の押し忘れがある日は、計算せずに一覧で教えてください。`)}
            <p>例：山田さん 残業6時間 × 1,200円 × 25% ＝ 1,800円。一人1行で支給額まで並びます。</p>
          `
      },
      {
        id: "salarycheck",
        title: "渡す前の確認",
        was: ["salary/check", "salary/pitfalls", "salary/safety"],
        body: `
            <p class="kicker">確認　6／7</p>
            <h1>1人は電卓。先月と比べる。押し忘れは本人へ</h1>
            <ol>
              <li>1人は電卓で検算して、表の数字と合うか</li>
              <li>先月と比べて、大きく増減した人がいないか</li>
              <li>押し忘れの日を、本人に確認して直したか</li>
              <li>時給・手当が最新（昇給・引っ越しなど）か</li>
              <li>時給が最低賃金を下回っていないか</li>
            </ol>
            <h2>間違えやすいところは、一言添える</h2>
            <ul>
              <li>休憩：「6時間を超える日は休憩45分を引いて」</li>
              <li>端数：毎日の時間は1分単位が基本。丸め方は社労士に確認</li>
              <li>月給制：「月給制の人は残業分だけ計算」</li>
              <li>夜勤：「夜勤は出勤した日の勤務として数えて」</li>
              <li>時給の変更：「山田さんは10/16から時給1,250円」</li>
            </ul>
            <p>給与データを Claude で扱ってよいか、社長に確認します。入れるのは名前・時間・時給だけ。マイナンバーや口座番号は入れません。確認した人の名前と日付を残します。</p>
          `
      },
      {
        id: "nextmonth",
        title: "2か月目から",
        practice: true,
        was: ["salary/nextmonth", "salary/practice", "salary/summary"],
        body: `
            <p class="kicker">練習　7／7</p>
            <h1>同じ会話に、今月のファイルと、変わった所だけ</h1>
            ${box(`先月と同じ方法で、添付の11月分の出退勤から給料計算表を作って。

今月から佐藤さんの時給は1,150円。ほかは先月と同じ。`)}
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>計算する</h3><p>練習用データと見本のお願い文で表を作る</p></article>
              <article class="op"><span class="num">2</span><h3>検算する</h3><p>1人分を電卓で計算して、表と比べる</p></article>
              <article class="op"><span class="num">3</span><h3>変える</h3><p>「1人の時給を上げて」と頼み、表が変わるか確認</p></article>
            </div>
            <p>最初の数か月は、今までの計算と並べて答え合わせします。</p>
            <p><a href="materials/salary.pdf" download>スライドPDF（給料計算編）</a></p>
          `
      }
    ]
  };
})();
