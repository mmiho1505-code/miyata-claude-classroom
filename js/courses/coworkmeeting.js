(() => {
  const talk = CLASSROOM.talk;

  CLASSROOM.courses.coworkmeeting = {
    id: "coworkmeeting",
    title: "演習：会議のあとの仕事をまとめて片づける",
    subtitle: "文字起こしを渡すだけで、議事録とタスク一覧が一度に出る",
    duration: "約30分",
    audience: "スキルとプロジェクトを、自分の手で組み合わせてみたい人／会議のあとの作業を減らしたい人",
    lessons: [
      {
        id: "goal",
        title: "課題",
        body: `
            <p class="kicker">課題　1／5</p>
            <h1>文字起こしから、議事録とタスク一覧を一度に</h1>
            <p>この演習の目的は、きれいな議事録を作ることではありません。<strong>「手順はスキル、文脈はプロジェクト」を、自分の手で作れるようになること</strong>です。スキルとプロジェクトを作り、両方を使えていればOKです。</p>
            <h2>シナリオ</h2>
            <p>Zoom や Google Meet の会議の文字起こしを渡すだけで、議事録とタスク一覧の2つが一度に出てくる状態を作ります。</p>
            <table>
              <thead><tr><th>作る物</th><th>形式</th><th>入れる項目</th></tr></thead>
              <tbody>
                <tr><td>議事録</td><td>Google ドキュメント</td><td>決定事項・論点・次回までの宿題</td></tr>
                <tr><td>タスク一覧</td><td>Google スプレッドシート</td><td>タスク・担当・期限の列がある表</td></tr>
              </tbody>
            </table>
            <h2>練習用のファイル（すべて架空）</h2>
            <ul>
              <li><a href="materials/practice/meeting-minutes-2026-07.txt" download>過去の議事録（7月）</a>　<a href="materials/practice/meeting-minutes-2026-08.txt" download>（8月）</a>　<a href="materials/practice/meeting-minutes-2026-09.txt" download>（9月）</a></li>
              <li><a href="materials/practice/company-glossary.csv" download>社内用語集（CSV）</a> … あだ名や略し方と、正式な名前・役職・サービス名の対応表</li>
              <li><a href="materials/practice/meeting-transcript-2026-10-05.txt" download>今回の会議の文字起こし（10月5日）</a></li>
            </ul>
            <div class="callout">答えを見る前に、必ず一度は自分の手でやってみてください。</div>
            <p>まとめ表：<a href="materials/cowork-meeting.xlsx" download>演習の内容（Excel）</a></p>
          `
      },
      {
        id: "project",
        title: "STEP1 プロジェクトを作る",
        practice: true,
        body: `
            <p class="kicker">STEP 1　2／5</p>
            <h1>文脈はプロジェクトに置く</h1>
            <p>STEP1 と STEP2 は、どちらから作ってもかまいません。ただし、両方作ります。</p>
            <h2>ヒント</h2>
            <ul>
              <li><strong>資料</strong> … 過去の議事録3件と、社内用語集を置く</li>
              <li><strong>共通のお願い</strong> … 社内用語集を見て、あだ名・役職・サービス名などの呼び方を、正しい名前に直して出すように書く</li>
              <li>文体（です・ます調など）や、過去の議事録の書き方にそろえることも、好みで足す</li>
              <li>用語集にない言葉はどうしてほしいか、も考えておく</li>
            </ul>
            <p>作り方を忘れたら：<a href="#/course/coworkproject/make" data-link>プロジェクトを作って業務単位で使う</a></p>
          `
      },
      {
        id: "skill",
        title: "STEP2 スキルを作る",
        practice: true,
        body: `
            <p class="kicker">STEP 2　3／5</p>
            <h1>手順はスキルにする</h1>
            <h2>ヒント</h2>
            <ul>
              <li><strong>手順</strong> … 貼った文字起こしを読み、議事録とタスク一覧の<strong>2つ</strong>を作る</li>
              <li><strong>条件</strong> … 決まったことと、まだ話し合い中のことを分ける。担当や期限が話に出ていないときはどうするか</li>
              <li><strong>できあがりの形</strong> … 議事録は Google ドキュメントで見出し3つ、タスク一覧は Google スプレッドシートで3列</li>
            </ul>
            <p>Google ドキュメントやスプレッドシートに出すには、Google Drive のコネクタをつないでおきます。</p>
            <p>作り方を忘れたら：<a href="#/course/coworkskillmake/make" data-link>スキルを作成して呼び出す</a></p>
          `
      },
      {
        id: "check",
        title: "STEP3 呼び出して確かめる",
        practice: true,
        body: `
            <p class="kicker">STEP 3　4／5</p>
            <h1>プロジェクトの中で、スキルを呼ぶ</h1>
            ${talk([
              { do: "作ったプロジェクトで新しいチャットを開き、/ か ＋ から作ったスキルを選ぶ" },
              { do: "スキルの名前のあとにスペースを空けて、文字起こし（meeting-transcript-2026-10-05.txt）の中身を全部貼って送る" },
              { ai: `議事録（Google ドキュメント）とタスク一覧（Google スプレッドシート）を作りました。\n\n・決定事項：スモールオフィスプランは月1回・月2,900円の案で進める ほか\n・論点：プランの開始時期（次回の定例会議で再検討）\n・タスク：4件（担当や期限が話に出ていないものは空欄）\n\n人の名前とサービス名は、社内用語集の正式な表記に直しています。` }
            ])}
            <h2>確かめる所</h2>
            <ul>
              <li>2つとも、指定の形式（ドキュメントとスプレッドシート）で出たか</li>
              <li>「ヤマさん」「モリリン」「ミニプラン」「はいたつくん」が、正式な名前に直っているか</li>
              <li>担当や期限が決まっていない宿題を、推測で埋めていないか</li>
              <li>まだ決まっていないこと（開始時期など）が、決定事項にまざっていないか</li>
            </ul>
            <h2>うまくいかなかったら</h2>
            <table>
              <thead><tr><th>原因</th><th>見直す所</th></tr></thead>
              <tbody>
                <tr><td>形や手順がおかしい（スキル側）</td><td>スキルの中身を直す（<a href="#/course/coworkskillmake/fix" data-link>スキルの直し方</a>）</td></tr>
                <tr><td>名前や書き方がおかしい（プロジェクト側）</td><td>共通のお願いを直す（<a href="#/course/coworkproject/make" data-link>プロジェクトの作り方</a>）</td></tr>
              </tbody>
            </table>
          `
      },
      {
        id: "answer",
        title: "答えの例",
        body: `
            <p class="kicker">答えの例　5／5</p>
            <h1>お願いの文の一例</h1>
            <p>動画に答えはないため、これまでの型に当てはめて作った一例です。名前や細かい条件は、自分用に変えてかまいません。</p>
            <h2>プロジェクトの共通のお願い</h2>
            ${talk([
              { me: `このプロジェクトでは、社内会議の文字起こしから議事録とタスク一覧を作ります。
・人名、役職、サービス名などの固有名詞は、必ずコンテキストの「社内用語集」を確認し、正式な表記に置き換えてください。ニックネームやハンドルネームも正式な氏名に直してください。
・用語集にない言葉は推測で置き換えず、そのまま残してください。
・文体はです・ます調で書いてください。
・書き方は過去の議事録3件にそろえてください。` }
            ], "")}
            <h2>スキルを作るお願い（/Skill Creator のあとに）</h2>
            ${talk([
              { me: `「会議後処理」というスキルを作成してください。
【手順】ユーザーが貼り付けた会議の文字起こしを読み、議事録とタスク一覧の2つを作る。
【条件】決まったことと、まだ議論中のことを分けて書く。担当や期限が発言にない場合は空欄にし、推測で埋めない。
【完成物】
①議事録：Googleドキュメントを新規作成。見出しは「決定事項」「論点」「次回までの宿題」の3つ。
②タスク一覧：Googleスプレッドシートを新規作成。列は「タスク」「担当」「期限」の3列、1行1件。` }
            ], "")}
            <h2>呼び出すとき</h2>
            <p>プロジェクトの中のチャットで「/会議後処理」（作ったスキルの名前）＋スペース＋文字起こし。</p>
            <div class="callout warn">本物の会議の文字起こしを使うときは、社外の人の名前や、話してはいけない内容が入っていないかを先に見ます。議事録は、出席者に確かめてもらってから配ります。</div>
            <p>まとめ表：<a href="materials/cowork-meeting.xlsx" download>演習の内容と答えの例（Excel）</a></p>
            <p><a class="btn-orange" href="#/course/coworkvoice" data-link>次へ：音声入力から日報を作成する</a>
            <a class="btn-dark" href="#/course/coworkskillproject" data-link>スキルとプロジェクトの使い分けへ</a></p>
          `
      }
    ]
  };
})();
