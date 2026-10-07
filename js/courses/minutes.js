(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.minutes = {
    id: "minutes",
    title: "日程調整・議事録・Slack要約",
    subtitle: "会議の前後とチャットの読み込みを、Claude と ChatGPT に任せる",
    duration: "約45分",
    audience: "会議と社内チャットが多い人／Slack要約は予定済みが使える有料プラン",
    lessons: [
      {
        id: "goal",
        title: "日程：カレンダーをつなぐ",
        practice: true,
        was: ["sched/goal", "sched/prep", "sched/connect"],
        body: `
            <p class="kicker">GOAL　1／6　練習</p>
            <h1>Googleカレンダーを Claude につなぐ</h1>
            <p>来週の打ち合わせです。カレンダーを開き、空きを探し、メール文を書きます。毎週だと年間約120時間、という試算でした。</p>
            <p>空き時間の表とメール文までを Claude に任せます。<a href="https://claude.ai" target="_blank" rel="noopener">claude.ai</a> で進めます。無料プランでもできます（上限で止まったら次の日に続ける）。チームで共有するには Team 以上です。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>カスタマイズ（設定）</h3><p>Claude の「カスタマイズ」または設定を開く</p></article>
              <article class="op"><span class="num">2</span><h3>コネクター</h3><p>「コネクター」を開く</p></article>
              <article class="op"><span class="num">3</span><h3>Googleカレンダー</h3><p>会社のカレンダーが見えるアカウントで連携する。パスワードは Google の画面に自分で入れる</p></article>
            </div>
            <p>場所が見つからないときは、下を貼ります。</p>
            ${box(`初めてです。GoogleカレンダーとClaudeをつなぎたいです。

今の画面に合わせて、押す場所を日本語で1つずつ教えてください。私が押したら、次を教えてください。

・カスタマイズ、設定、コネクター、のどれかから進めたいです
・メニューの名前が英語でも、日本語で言い換えてください
・パスワードは私が自分で入れます。入力欄には書かないでください
・会社のGoogleアカウントを使います`)}
          `
      },
      {
        id: "sched",
        title: "日程：手順を貼って実行",
        practice: true,
        was: ["sched/project", "sched/run", "sched/tune", "sched/qa", "sched/summary"],
        body: `
            <p class="kicker">日程　2／6　練習</p>
            <h1>プロジェクトに手順を置き、「実行」と書く</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>プロジェクトを作る</h3><p>左の「プロジェクト」→「新規プロジェクト」。名前は「社内会議の日程調整自動化ツール」など</p></article>
              <article class="op"><span class="num">2</span><h3>手順を貼る</h3><p>右側の「手順」に下を貼る</p></article>
              <article class="op"><span class="num">3</span><h3>実行</h3><p>そのプロジェクトで「実行」と送る。候補をクリックで選ぶとメール文ができる</p></article>
            </div>
            ${box(`# 社内会議の日程調整

実行と入力されたら、次の順で進めてください。

## 現状把握
連携したGoogleカレンダーを読み取り、今から1週間分の空き時間を拾う。

## 分析
空き時間を計算し、選ぶだけで使えるインタラクティブな表形式で見せる。
候補をクリックして、相手と会議時間を選べるようにする。

## 出力
選んだ日時をもとに、日程調整メールの文面を作る。
丁寧版は「いつも大変お世話になっております」から始める。
親しみやすい版も選べるようにする。

予定の削除や、勝手な変更はしない。
カレンダーへの登録は、人が「確定したので登録して」と言ったときだけ。`)}
            ${box(`実行`)}
            <h2>直すときは、右側の手順に書き足す</h2>
            ${box(`期間は今から2週間です。空き時間は30分単位で出してください。
表の列は、日付・開始・終了・備考、の4つに固定してください。
メール文の敬語は、丁寧版に固定してください。実行のたびに形を変えないでください。
空き時間を厳密に読み取ってください。既存の予定と重なる枠は出さないでください。`)}
            <h2>相手の希望と合わせる</h2>
            <p>相手のカレンダーは読めません。届いたメールを貼ります。</p>
            ${box(`相手から届いた希望は次です。
（ここにメール本文を貼る）

連携した自分のGoogleカレンダーの空きと合わせて、重ならない候補を表で出してください。
相手のカレンダーは読めません。貼った文面だけを相手の希望として使ってください。`)}
            <ul>
              <li>予定は、人が承認して初めて動く。勝手には消えない</li>
              <li>確定後は同じ会話で「確定したので登録して」。Meet のリンク発行は難しそう</li>
              <li>Gmail は下書きまで。既存メールへの返信は、この講座ではできない前提</li>
              <li>Outlook（Microsoft 365）は未検証</li>
            </ul>
          `
      },
      {
        id: "record",
        title: "議事録：録音と文字起こし",
        was: ["minutes/goal", "minutes/flow", "minutes/transcribe"],
        body: `
            <p class="kicker">議事録　3／6</p>
            <h1>録音 → 起こす → まとめる → 人が見る</h1>
            <p>会議後5分で、要点／決定事項／ToDo（誰が・いつまで）／未確定、の形で配ります。</p>
            <div class="callout warn">録音・文字起こしは、相手の許可を取ってから。機密や個人情報は会社のルールを確認してから。パスワードや口座は教室にもチャットにも書きません。</div>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>録音</h3><p>Zoom・Meet・Teams なら会議ツールの録音。対面は別に録音</p></article>
              <article class="op"><span class="num">2</span><h3>文字起こし</h3><p>ChatGPT より専用ツールのほうが精度が高い</p></article>
              <article class="op"><span class="num">3</span><h3>議事録にする</h3><p>ChatGPT にプロンプトで形を指定（次のページ）</p></article>
              <article class="op"><span class="num">4</span><h3>人が確認</h3><p>特に「誰が」「いつまでに」。間違いはAIに戻して直させる</p></article>
            </div>
            <h2>文字起こしの方法</h2>
            <ul>
              <li><strong>自分のPC・社内サーバー（Whisperなど）</strong>：外に出さないので機密に強い。準備に知識が必要</li>
              <li><strong>文字起こしサービス</strong>：手軽。音声をアップロードするので、セキュリティの確認が必要</li>
              <li><strong>API（OpenAI・Geminiなど）</strong>：自動化できる。設定と費用のハードルがある</li>
            </ul>
            <p>Web会議なら会議ツールの機能がおすすめ。海外製は日本語が弱いことがあります。Whisper は日本語もかなり聞き取れます。対面は雑音と距離で精度が落ちます。会社が許可した方法だけ使います。</p>
          `
      },
      {
        id: "prompt",
        title: "議事録：まとめる文",
        practice: true,
        was: ["minutes/prompt", "minutes/demo", "minutes/qa", "minutes/summary"],
        body: `
            <p class="kicker">議事録　4／6　練習</p>
            <h1>ある情報だけ。決まったことと、まだのことは分ける</h1>
            <p>下を貼り、その下に文字起こしを貼ります。標準的なモデルで十分です。機密は会社のルールで許可された範囲だけ貼ります。</p>
            ${box(`以下は会議の文字起こしです。文字起こしにある情報だけを使い、次の形でまとめてください。

会議の要点（3行）
決定事項
ToDo（内容／担当者／期限）
未確定・要確認事項

決定事項と提案中のものは区別すること。担当者や期限がはっきりしないものは「未確定」と書くこと。判断に迷う箇所は原文を引用して「要確認」とすること。`)}
            <p>話者名つき（田中：〜、佐藤：〜）の文字起こしだと、担当者まで出ます。「未確定」が多すぎるときは下を送ります。</p>
            ${box(`担当者の「未確定」が多すぎます。文字起こしの発言者（田中：／佐藤：）を見て、担当者を付け直してください。はっきりしないものだけ未確定のままにしてください。まだ共有文は作らないでください。`)}
            <p>細かいニュアンスは落ちることがあります。配る前に人が読み、抜けをAIに指摘して直させます。そのまま配ってよいかは会社のルール次第です。</p>
          `
      },
      {
        id: "slack",
        title: "Slack：つないで絞る",
        practice: true,
        was: ["slacksum/goal", "slacksum/vs", "slacksum/connect", "slacksum/channels"],
        body: `
            <p class="kicker">Slack　5／6　練習</p>
            <h1>朝のSlackを、決定・自分のToDo・返信が必要の3つにする</h1>
            <p>未読を全部読まず、毎朝の要約だけ受け取ります。Claude の「予定済み」（スケジュール済みタスク）を使うと、アプリを閉じていても決めた時刻に動きます。予定済みは有料プランのことがあります（<a href="#/course/claudebase" data-link>プランの確認</a>）。会社の Slack は管理者の承認が要ることがあります。無理に突破しません。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>Slack側</h3><p>「エージェントとツール」→「App」→「Slackマーケットプレイスで開く」→ Claude を「Slackに追加」→ 許可</p></article>
              <article class="op"><span class="num">2</span><h3>Claude側</h3><p>設定 →「コネクタ」→ Slack を連携して承認</p></article>
              <article class="op"><span class="num">3</span><h3>チャンネルを絞る</h3><p>仕事の連絡が来るチャンネルだけ。雑談は外す。多いと嘘も増える。まず1つから</p></article>
            </div>
            <p>読む・要約だけにします。投稿も削除もしません。場所が見つからないときは下を貼ります。</p>
            ${box(`初めてです。SlackとClaudeをつなぎたいです。

今の画面に合わせて、押す場所を日本語で1つずつ教えてください。私が押したら、次を教えてください。

・Slack側の「エージェントとツール」「App」「マーケットプレイス」
・Claude側の設定の「コネクタ」
・メニューの名前が英語でも、日本語で言い換えてください
・パスワードは私が自分で入れます。入力欄には書かないでください
・読み取りと要約だけにします。投稿・削除はしないでください
・会社のSlackを使います`)}
          `
      },
      {
        id: "schedule",
        title: "Slack：指示文と予定済み",
        practice: true,
        was: ["slacksum/prompt", "slacksum/schedule", "slacksum/caution", "slacksum/summary"],
        body: `
            <p class="kicker">Slack　6／6　練習</p>
            <h1>指示文を、毎朝9時の予定済みに登録する</h1>
            <p>〔#〇〇〕は自分のチャンネル名に変えます。「なし」はでっち上げ防止なので外しません。</p>
            ${box(`#〇〇 チャンネルの前日（休日明けは前の営業日）のメッセージとスレッドを、日本時間で読み、次の3つを抜き出して要約してください。

決定事項（誰が決めたか）
自分へのToDo
返信が必要なもの

挨拶・雑談・お礼は無視してください。該当がないときは「なし」と書いてください。
Slackへの投稿・削除はしないでください。`)}
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>予定済み</h3><p>claude.ai の「予定済み」→「新しいタスク」</p></article>
              <article class="op"><span class="num">2</span><h3>入れる</h3><p>名前・上の指示文・頻度（毎日／平日など）</p></article>
              <article class="op"><span class="num">3</span><h3>時刻は朝9時</h3><p>内部は世界標準時（日本より9時間遅い）。8時だと前々日を取ることがある</p></article>
            </div>
            <ul>
              <li>結果はチャット欄ではなく「予定済み」の画面に届く。一時停止・編集・削除は「…」から</li>
              <li>権限は読み取りと要約だけなら自動承認でよい。書き込みタスクは作らない</li>
              <li>Pro／Max はプライバシー設定の「Claudeの改善にご協力ください」をオフ。Team／Enterprise は初期設定で学習に使われない</li>
              <li>大事な判断は元のメッセージでも確認する</li>
            </ul>
          `
      }
    ]
  };
})();
