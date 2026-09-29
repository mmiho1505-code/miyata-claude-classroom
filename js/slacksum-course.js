(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.slacksum = {
    id: "slacksum",
    title: "Claude CoworkでSlackを毎朝要約",
    subtitle: "未読を全部読まない。決定・自分のToDo・返信が必要なものだけ受け取る",
    duration: "約20分",
    audience: "朝のSlackが多い人／予定済みタスクが使える有料プラン",
    lessons: [
      {
        id: "goal",
        title: "ねらい",
        body: `
            <p class="kicker">GOAL　1／8　EP253</p>
            <h1>朝のSlackを、3つだけにする</h1>
            <p>会社の Slack を開くと、<code>#営業</code> に未読が並びます。隣の雑談部屋にも数字がついています。田中さんからの1対1（DM）もあります。<strong>「見積、明日でいい？」</strong>の下に、返信が何段も続いています（スレッド）。</p>
            <p>これが仕事のチャットです。メールのように1通ずつではなく、<strong>部屋に書き残します</strong>。あとから探せます。会社のひとまとまりを、ワークスペースと呼びます。</p>
            <p>全部読むと、午前が終わります。この講座では、すでにある Slack を<strong>読んで要約するだけ</strong>です。投稿も削除もしません。</p>
            <p>朝もらうのは、次の3つだけです。</p>
            <div class="ops">
              <article class="op"><span class="num">決</span><h3>決定事項</h3><p>誰が決めたかまで</p></article>
              <article class="op"><span class="num">T</span><h3>自分のToDo</h3><p>自分がやること</p></article>
              <article class="op"><span class="num">返</span><h3>返信が必要</h3><p>返事を待つもの</p></article>
            </div>
            <div class="callout warn">予定済みは、有料プランのことがあります。<a href="#/course/account" data-link>プランの確認</a>。会社の Slack は、管理者の承認が要ることがあります。無理に突破しません。</div>
          `
      },
      {
        id: "vs",
        title: "Chat と Cowork",
        body: `
            <p class="kicker">くらべる　2／8</p>
            <h1>聞く使い方と、預けておく使い方</h1>
            <div class="ops">
              <article class="op"><span class="num">C</span><h3>Chat</h3><p>聞いたら、その場で答えが返ってくる</p></article>
              <article class="op"><span class="num">W</span><h3>Cowork（予定済み）</h3><p>仕事を預けておくと、あとで結果が返ってくる</p></article>
            </div>
            <p>今回の主役は<strong>予定済み</strong>（スケジュール済みタスク）です。パソコンやアプリを閉じていても、決めた時刻に実行されて結果が届きます。</p>
            <p>左に「Cowork」という別アプリを探さなくてよいです。<a href="https://claude.ai" target="_blank" rel="noopener">claude.ai</a> の同じ画面の「予定済み」です。以前の Cowork の「預けておく」は、今ここにあります。</p>
            <div class="callout">結果は、普段のチャット欄ではなく「予定済み」の画面に届きます。右のサイドバーで、日付ごとに過去の結果を見比べられます。</div>
          `
      },
      {
        id: "connect",
        title: "① Slack をつなぐ",
        practice: true,
        body: `
            <p class="kicker">つなぐ　3／8　練習</p>
            <h1>Slack と Claude の両方で許可する</h1>
            <p><strong>Slack側</strong></p>
            <ol>
              <li>「エージェントとツール」→「App」</li>
              <li>「Slackマーケットプレイスで開く」</li>
              <li>Claude を選び「Slackに追加」→ 許可</li>
            </ol>
            <p><strong>Claude側</strong></p>
            <ol>
              <li>設定 →「コネクタ」（コネクター）</li>
              <li>Slack を連携して承認</li>
            </ol>
            <p>初期設定では、読み取りは自動で許可され、書き込み・削除は人の承認が必要です。教室では<strong>読む・要約だけ</strong>にします。Slack へ投稿したり、メッセージを消したりしません。</p>
            <p>場所が見つからないときは、下を貼って、今の画面に合わせて1つずつ教えてもらいます。パスワードは Slack や Claude の画面に自分で入れます。</p>
            ${box(`初めてです。SlackとClaudeをつなぎたいです。

今の画面に合わせて、押す場所を日本語で1つずつ教えてください。私が押したら、次を教えてください。

・Slack側の「エージェントとツール」「App」「マーケットプレイス」
・Claude側の設定の「コネクタ」
・メニューの名前が英語でも、日本語で言い換えてください
・パスワードは私が自分で入れます。入力欄には書かないでください
・読み取りと要約だけにします。投稿・削除はしないでください
・会社のSlackを使います`)}
            <div class="qa">
              <p class="qa-q">会社で止められる</p>
              <p>管理者の承認が必要なことがあります。無理に突破しない。<a href="#/course/faq/net" data-link>社内ルール</a></p>
            </div>
            <div class="qa">
              <p class="qa-q">コネクタが見当たらない</p>
              <p>設定の左の一覧。<a href="#/course/settings" data-link>設定の講座</a>。英語なら Connectors</p>
            </div>
          `
      },
      {
        id: "channels",
        title: "② チャンネルを絞る",
        body: `
            <p class="kicker">対象　4／8</p>
            <h1>全部渡さない。雑談は外す</h1>
            <p>読ませるチャンネルを絞ります。雑談チャンネルは外します。</p>
            <p>対象が多すぎると、要約の意味がなくなります。ハルシネーション（もっともらしい嘘）も増えます。</p>
            <div class="callout">仕事の連絡が来るチャンネルだけにします。多いときは、まず1つから試します。</div>
          `
      },
      {
        id: "prompt",
        title: "③ 指示文",
        practice: true,
        body: `
            <p class="kicker">貼る文　5／8　練習</p>
            <h1>3つだけ抜き出す。なければ「なし」</h1>
            <p>「要約して」の一言でも動きますが、間違いが出やすくなります。最初から細かく指示するほうが、やり直しが減ります。「なければ『なし』と書いて」は、でっち上げを防ぐためです。</p>
            <p>〔#〇〇〕は、自分のチャンネル名に変えます。</p>
            ${box(`#〇〇 チャンネルの前日（休日明けは前の営業日）のメッセージとスレッドを、日本時間で読み、次の3つを抜き出して要約してください。

決定事項（誰が決めたか）
自分へのToDo
返信が必要なもの

挨拶・雑談・お礼は無視してください。該当がないときは「なし」と書いてください。
Slackへの投稿・削除はしないでください。`)}
            <div class="callout">指示文に「日本時間で前日」と書いておくと、時刻のずれに安心です。くわしくは注意点のページです。</div>
          `
      },
      {
        id: "schedule",
        title: "④ スケジュール登録",
        practice: true,
        body: `
            <p class="kicker">予定済み　6／8　練習</p>
            <h1>決めた時刻に、閉じていても動く</h1>
            <ol>
              <li>「予定済み」を開く</li>
              <li>「新しいタスク」</li>
              <li>名前・指示文・頻度（毎日／平日など）を入れる</li>
            </ol>
            <p>「デイリーブリーフィング」などのテンプレートもあります。権限は、読み取りと要約だけなら自動承認でOKです。書き込みや削除のタスクは、承認ありにします。教室では書き込みタスクは作りません。</p>
            <p>結果は、普段のチャット欄ではなく<strong>予定済み</strong>の画面に届きます。右のサイドバーで、日付ごとに過去の結果を見比べられます。一時停止・編集・削除は「…」メニューからです。</p>
            <div class="qa">
              <p class="qa-q">予定済みが見当たらない</p>
              <p>claude.ai を開いて「予定済み」「Scheduled」と探す。無いときは有料プランか。<a href="#/course/account" data-link>アカウント編</a></p>
            </div>
          `
      },
      {
        id: "caution",
        title: "注意点",
        body: `
            <p class="kicker">注意　7／8</p>
            <h1>朝9時。学習はオフ。大事な判断は元を見る</h1>
            <p><strong>時刻は朝9時がおすすめ</strong>です。内部では世界標準時（日本時間より9時間遅い）で動くためです。朝8時に設定すると、日本時間で「前々日」のデータを取ってくることがあります。指示文に「日本時間で前日」と書くと、さらに安心です。</p>
            <p><strong>個人プラン（Pro／Max）</strong>は、プライバシー設定の「Claudeの改善にご協力ください」を<strong>オフ</strong>にします。オンのままだと、会社の Slack の内容が学習に使われる可能性があります。Team／Enterprise は、初期設定で学習に使われません。</p>
            <p>生成AIに「絶対」はないので、大事な判断は元のメッセージでも確認します。でっち上げ防止のため、指示文の「なし」を外さないでください。</p>
            <div class="callout warn">パスワード、トークン、チャンネルの招待リンクは教室に書きません。Slack への投稿・削除はしません。</div>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">まとめ　8／8</p>
            <h1>つなぐ → 絞る → 細かく頼む → 予定済み</h1>
            <ol>
              <li>Slack と Claude をつなぐ。読む・要約だけ</li>
              <li>雑談チャンネルは外す</li>
              <li>3つだけ抜き出す。なければ「なし」。日本時間で前日</li>
              <li>予定済みに登録。朝9時。結果は予定済みの画面</li>
              <li>Pro／Max は学習協力をオフ。大事な判断は元を見る</li>
            </ol>
            <p>チャットで今すぐ聞きたいときは、同じ指示文をその場に貼っても使えます。毎朝自動は、予定済みです。</p>
            <p><a class="btn-orange" href="#/course/slacksum/prompt" data-link>指示文からやり直す</a>
            <a class="btn-dark" href="#/course/settings" data-link>設定の講座へ</a></p>
          `
      }
    ]
  };

  Object.assign(CLASSROOM.quizzes, {
    slacksum: [
      {
        q: "Slackにいちばん近い説明は？",
        choices: ["会社の黒い画面の名前", "仕事用のチャット。部屋（チャンネル）に書き残して、あとから探せる", "Claude の有料プランの名前"],
        a: 1,
        explain: "LINEに近いところもありますが、仕事の部屋分けと検索が中心です。この講座では読んで要約するだけです。"
      },
      {
        q: "今回の主役は？",
        choices: ["黒い画面の Claude Code", "予定済み（預けておくと、決めた時刻に結果が届く）", "Slack へ自動で投稿するボット"],
        a: 1,
        explain: "パソコンを閉じていても動きます。結果は予定済みの画面です。"
      },
      {
        q: "読ませるチャンネルは？",
        choices: ["全部渡す", "仕事の連絡だけ。雑談は外す。多いときは1つから", "プライベートの雑談だけ"],
        a: 1,
        explain: "対象が多すぎると要約の意味がなくなり、嘘も増えます。"
      },
      {
        q: "指示文に入れるとよいのは？",
        choices: ["要約して、の一言だけ", "決定・ToDo・返信の3つ。なければ「なし」。日本時間で前日", "全部投稿してよい、と先に許可"],
        a: 1,
        explain: "「なし」はでっち上げ防止です。投稿はしません。"
      },
      {
        q: "時刻のおすすめは？",
        choices: ["朝8時。世界標準時に合わせなくてよい", "朝9時。8時だと前々日を取りやすい", "深夜0時だけ"],
        a: 1,
        explain: "内部は世界標準時（日本より9時間遅い）です。"
      },
      {
        q: "個人プラン（Pro／Max）で会社の Slack を読むとき",
        choices: ["学習協力はそのままでよい", "「Claudeの改善にご協力ください」をオフにする", "パスワードを指示文に書く"],
        a: 1,
        explain: "オンだと学習に使われる可能性があります。Team／Enterprise は初期で使われません。"
      }
    ]
  });
})();
