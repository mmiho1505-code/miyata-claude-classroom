(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.salary = {
    id: "salary",
    title: "出退勤の記録から給料を計算しよう",
    subtitle: "月末の「時間×時給」の手計算を、Coworkに手伝ってもらう",
    duration: "約40分",
    audience: "Coworkを使う人／総務・給与担当",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">GOAL</p>
            <h1>帰るときに、この3つができるように</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>そろえる</h3><p>出退勤の記録と、社員ごとの時給・手当をそろえる</p></article>
              <article class="op"><span class="num">2</span><h3>計算する</h3><p>Coworkに頼んで、給料計算表をExcelで作る</p></article>
              <article class="op"><span class="num">3</span><h3>確かめる</h3><p>電卓で検算し、おかしな数字がないか確認する</p></article>
            </div>
            <p>出退勤アプリの作り方は <a href="#/course/attend" data-link>出退勤管理編</a> です。</p>
          `
      },
      {
        id: "scope",
        title: "任せる範囲",
        body: `
            <p class="kicker">ここまで</p>
            <h1>Claudeに任せるのは「支給額」の計算まで</h1>
            <div class="ops">
              <article class="op"><span class="num">OK</span><h3>任せてOK</h3><p>勤務時間・残業の集計。時間×時給。残業・深夜の割増。通勤手当などの足し算</p></article>
              <article class="op"><span class="num">手</span><h3>今まで通りの方法で</h3><p>社会保険料・雇用保険料。所得税・住民税の天引き。最終的な支給額の決定。振込・給与明細の発行</p></article>
            </div>
            <div class="callout warn">税や保険、振込は今まで通りです。計算表は下書き。最後は人が決めます。</div>
          `
      },
      {
        id: "flow",
        title: "全体の流れ",
        body: `
            <p class="kicker">5ステップ</p>
            <h1>記録を取り出して、表にして、確かめる</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>取り出す</h3><p>出退勤を取り出す</p></article>
              <article class="op"><span class="num">2</span><h3>条件を用意</h3><p>給与条件を用意</p></article>
              <article class="op"><span class="num">3</span><h3>頼む</h3><p>Coworkに頼む</p></article>
              <article class="op"><span class="num">4</span><h3>確かめる</h3><p>検算して確かめる</p></article>
              <article class="op"><span class="num">5</span><h3>渡す</h3><p>給与ソフトへ渡す</p></article>
            </div>
          `
      },
      {
        id: "prep",
        title: "準備する3つ",
        body: `
            <p class="kicker">STEP 1・2</p>
            <h1>準備するのは、この3つ</h1>
            <table>
              <thead><tr><th>準備するもの</th><th>中身</th></tr></thead>
              <tbody>
                <tr><td>① 出退勤の記録</td><td>出退勤アプリから取り出した今月分のExcel</td></tr>
                <tr><td>② 給与条件の表</td><td>社員ごとの時給（月給）、通勤手当などの手当</td></tr>
                <tr><td>③ 会社のルール</td><td>所定の勤務時間、休憩、残業の扱い、端数の処理</td></tr>
              </tbody>
            </table>
            <p>②と③は一度作れば毎月使い回せます。就業規則や賃金規程を見ながら作りましょう。</p>
            <p>練習用：<a href="materials/salary-attend-sample.csv" download>出退勤のサンプル</a>　<a href="materials/salary-rates-sample.csv" download>給与条件のサンプル</a></p>
          `
      },
      {
        id: "rules",
        title: "割増の基本ルール",
        body: `
            <p class="kicker">法律の最低ライン</p>
            <h1>割増賃金の主なルール</h1>
            <table>
              <thead><tr><th>こんなとき</th><th>割増率</th></tr></thead>
              <tbody>
                <tr><td>1日8時間・週40時間を超えた分</td><td>25%以上</td></tr>
                <tr><td>夜22時〜朝5時に働いた分</td><td>25%以上</td></tr>
                <tr><td>法定休日に働いた分</td><td>35%以上</td></tr>
                <tr><td>時間外が月60時間を超えた分</td><td>50%以上</td></tr>
              </tbody>
            </table>
            <p>会社独自のルールや最新の決まりは、就業規則と社労士さんに確認してください。</p>
          `
      },
      {
        id: "ask",
        title: "お願いを書く",
        practice: true,
        body: `
            <p class="kicker">STEP 3　練習</p>
            <h1>このまま真似してOK</h1>
            <p>［　］の中は、自分の会社の数字に直してください。演習ではこのままで構いません。</p>
            ${box(`添付の出退勤記録（10月分）と給与条件表から、給料計算表をExcelで作ってください。

・時給制の人：勤務時間 × 時給
・1日8時間を超えた分は25%増し、22時〜5時は25%増し
・休憩は1時間を引く。通勤手当を足す
・一人1行で、勤務時間・残業時間・割増分・手当・支給額を並べる
・計算式が見えるように（数字の直打ちはしない）

出勤か退勤の押し忘れがある日は、計算せずに一覧で教えてください。`)}
          `
      },
      {
        id: "files",
        title: "Excelの渡し方",
        body: `
            <p class="kicker">ファイル</p>
            <h1>Excelは、入力欄にドラッグして渡す</h1>
            <ol>
              <li>出退勤の記録と給与条件表のファイルを、入力欄にドラッグする</li>
              <li>ファイルが添付されたのを確認して、お願い文と一緒に送る</li>
              <li>できた計算表のファイルを開き、自分のパソコンに保存する</li>
            </ol>
            <p>給料のフォルダを Cowork につないでおくと、そこに直接保存してもらうこともできます。</p>
          `
      },
      {
        id: "result",
        title: "できあがりの表",
        body: `
            <p class="kicker">完成形</p>
            <h1>一人1行の「支給額の計算表」</h1>
            <table>
              <thead><tr><th>氏名</th><th>時給</th><th>勤務時間</th><th>基本分</th><th>割増分</th><th>手当</th><th>支給額</th></tr></thead>
              <tbody>
                <tr><td>山田</td><td>1,200</td><td>120h</td><td>144,000</td><td>1,800</td><td>5,000</td><td>150,800</td></tr>
                <tr><td>佐藤</td><td>1,100</td><td>96h</td><td>105,600</td><td>1,100</td><td>3,000</td><td>109,700</td></tr>
              </tbody>
            </table>
            <p>数字は例です。山田さん：残業6時間 × 1,200円 × 25% ＝ 1,800円 ／ 佐藤さん：深夜4時間 × 1,100円 × 25% ＝ 1,100円</p>
          `
      },
      {
        id: "check",
        title: "渡す前の5つ",
        body: `
            <p class="kicker">STEP 4</p>
            <h1>渡す前に、必ずこの5つを確かめる</h1>
            <ol>
              <li>1人は電卓で検算して、表の数字と合うか</li>
              <li>先月と比べて、大きく増減した人がいないか</li>
              <li>押し忘れの日を、本人に確認して直したか</li>
              <li>時給・手当が最新（昇給・引っ越しなど）か</li>
              <li>時給が最低賃金を下回っていないか</li>
            </ol>
          `
      },
      {
        id: "pitfalls",
        title: "間違えやすいところ",
        body: `
            <p class="kicker">落とし穴</p>
            <h1>間違えやすいところと、その伝え方</h1>
            <table>
              <thead><tr><th>落とし穴</th><th>こう伝える・こう確かめる</th></tr></thead>
              <tbody>
                <tr><td>休憩の引き忘れ</td><td>「6時間を超える日は休憩45分を引いて」など明記</td></tr>
                <tr><td>端数の切り捨て</td><td>毎日の時間は1分単位で計算するのが基本。丸め方は社労士に確認</td></tr>
                <tr><td>月給制の人</td><td>時給制と分けて「月給制の人は残業分だけ計算」と伝える</td></tr>
                <tr><td>日をまたぐ勤務</td><td>「夜勤は出勤した日の勤務として数えて」と伝える</td></tr>
                <tr><td>時給の変更月</td><td>「山田さんは10/16から時給1,250円」と日付つきで伝える</td></tr>
              </tbody>
            </table>
          `
      },
      {
        id: "nextmonth",
        title: "2か月目から",
        practice: true,
        body: `
            <p class="kicker">翌月から</p>
            <h1>2か月目からは「先月と同じ方法で」</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>同じ会話の続きで</h3><p>今月の出退勤ファイルを添付して「先月と同じ方法で11月分を」</p></article>
              <article class="op"><span class="num">2</span><h3>変更があれば一言</h3><p>「今月から佐藤さんの時給は1,150円」など、変わった所だけ伝える</p></article>
            </div>
            ${box(`先月と同じ方法で、添付の11月分の出退勤から給料計算表を作って。

今月から佐藤さんの時給は1,150円。ほかは先月と同じ。`)}
            <p>毎月の手順を1枚のメモにしておくと、担当が変わっても同じやり方で続けられます。</p>
          `
      },
      {
        id: "safety",
        title: "3つの約束",
        body: `
            <p class="kicker">注意</p>
            <h1>お給料を扱うときの3つの約束</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>会社の方針を確認</h3><p>給与データを Claude で扱ってよいか、社長に確認</p></article>
              <article class="op"><span class="num">2</span><h3>必要な情報だけ</h3><p>名前・時間・時給のみ。マイナンバーや口座番号は入れない</p></article>
              <article class="op"><span class="num">3</span><h3>最後は人が決める</h3><p>計算表は下書き。確認した人の名前と日付を残す</p></article>
            </div>
            <p>くわしくは <a href="#/safety" data-link>安全の約束</a> も見てください。</p>
          `
      },
      {
        id: "practice",
        title: "25分でやってみる",
        practice: true,
        body: `
            <p class="kicker">演習</p>
            <h1>架空のデータで練習しましょう</h1>
            <p>練習用ファイル：<a href="materials/salary-attend-sample.csv" download>出退勤のサンプル</a>　<a href="materials/salary-rates-sample.csv" download>給与条件のサンプル</a></p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>そろえる</h3><p>練習用の出退勤データと給与条件表を用意</p></article>
              <article class="op"><span class="num">2</span><h3>計算する</h3><p>見本のお願い文で、給料計算表を作る</p></article>
              <article class="op"><span class="num">3</span><h3>検算する</h3><p>1人分を電卓で計算して、表と比べる</p></article>
              <article class="op"><span class="num">4</span><h3>変える</h3><p>「1人の時給を上げて」と頼み、表が変わるか確認</p></article>
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
              <article class="op"><span class="num">1</span><h3>支給額まで</h3><p>任せるのは支給額の計算まで。税・保険は今まで通り</p></article>
              <article class="op"><span class="num">2</span><h3>式が見えるExcel</h3><p>会社のルールを書いて、計算式が見えるExcelにする</p></article>
              <article class="op"><span class="num">3</span><h3>電卓で検算</h3><p>渡す前に電卓で検算。最後は人が決める</p></article>
            </div>
            <p>最初の数か月は、今までの計算と並べて答え合わせしましょう。</p>
            <p><a href="materials/salary.pdf" download>スライドPDF（給料計算編）</a></p>
            <p><a class="btn-orange" href="#/quiz/salary" data-link>確認クイズへ</a>
            <a class="btn-dark" href="#/course/attend" data-link>出退勤管理編へ</a></p>
          `
      }
    ]
  };

  Object.assign(CLASSROOM.quizzes, {
    salary: [
      {
        q: "Claudeに任せてよいのは、どこまでですか？",
        choices: ["振込と給与明細の発行まで", "支給額の計算まで（税・保険は今まで通り）", "最終支給額の決定まで全部"],
        a: 1,
        explain: "勤務時間や割増の計算までは手伝ってもらいます。税・保険・振込は今まで通りです。"
      },
      {
        q: "お願い文で大事な指定は？",
        choices: ["数字を直打ちしてほしい", "計算式が見えるExcelにしてほしい", "マイナンバーも表に入れてほしい"],
        a: 1,
        explain: "直打ちだと検算できません。式が見える表にします。"
      },
      {
        q: "給与ソフトへ渡す前に、必ずすることは？",
        choices: ["1人分を電卓で検算する", "口座番号をClaudeに貼る", "検算せずにすぐ振り込む"],
        a: 0,
        explain: "渡す前に電卓で確かめます。計算表は下書きです。"
      },
      {
        q: "表に入れてよい情報は？",
        choices: ["マイナンバーと口座番号", "名前・時間・時給（必要な手当）", "パスワードと保険証番号"],
        a: 1,
        explain: "必要な情報だけです。給与データを扱ってよいかは社長に確認します。"
      },
      {
        q: "2か月目のお願いで、いちばん近いのは？",
        choices: ["毎月ゼロからルールを全部書き直す", "先月と同じ方法で、変わった所だけ伝える", "去年の数字をそのまま使う"],
        a: 1,
        explain: "同じ会話の続きに、今月のファイルと変更点だけ伝えます。"
      }
    ]
  });
})();
