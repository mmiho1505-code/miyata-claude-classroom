(() => {
  CLASSROOM.courses.settings = {
    id: "settings",
    title: "Claudeの設定",
    subtitle: "左の一覧の意味。全部いじらなくてよい",
    duration: "約15分",
    audience: "claude.ai に入れる人／全員",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">設定</p>
            <h1>左の言葉が、何の部屋か分かる</h1>
            <p>Claude の画面で、自分の名前や歯車から <strong>設定</strong> を開くと、左に長い一覧が出ます。今日はその意味です。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>よく使う</h3><p>一般・アカウント・請求・使用量・プライバシー</p></article>
              <article class="op"><span class="num">2</span><h3>会話の覚え</h3><p>メモリー。機能は試したい人だけ</p></article>
              <article class="op"><span class="num">3</span><h3>足すもの</h3><p>スキル・コネクタ。プラグインや開発者は後回しでよい</p></article>
            </div>
            <div class="callout">金額・ボタンの文言は、公式の画面が正しいです。教室は「どこを見ればよいか」の地図です。まだアカウントが無い人は先に <a href="#/course/account" data-link>アカウントと有料プラン</a> です。</div>
          `
      },
      {
        id: "open",
        title: "開き方",
        body: `
            <p class="kicker">手順</p>
            <h1>左下（または右上）の自分の名前</h1>
            <div data-pic="plan" data-cap="名前 → 設定。左に一覧が出ます"></div>
            <ol>
              <li>claude.ai（またはデスクトップアプリ）を開く</li>
              <li>画面の左下（場所は少し違うことがあります）の<strong>自分の名前</strong>を押す</li>
              <li><strong>設定</strong> を選ぶ</li>
            </ol>
            <p>左に並ぶのが、この講座で説明する一覧です。英語のときは Settings です。</p>
          `
      },
      {
        id: "everyday",
        title: "一般・アカウント・プライバシー",
        body: `
            <p class="kicker">自分のこと</p>
            <h1>名前・見え方・学習に使うか</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>一般</h3><p>言葉（日本語）、見た目の明るさ、通知など。いちばん無難な部屋です。</p></article>
              <article class="op"><span class="num">2</span><h3>アカウント</h3><p>名前、メール、ログアウト、退会。パスワードやメールの変更はここです。</p></article>
              <article class="op"><span class="num">3</span><h3>プライバシー</h3><p>会話を学習に使ってよいか、などのスイッチ。会社のルールがある人は、担当に合わせてオフにすることがあります。</p></article>
            </div>
            <p>「Claudeへの指示」の書き方は <a href="#/course/claudebase/instruct" data-link>基本設定</a> です。</p>
            <div class="callout warn">退会やデータの削除は、取り消せないことがあります。押す前に、画面の注意を最後まで読んでください。</div>
          `
      },
      {
        id: "bill",
        title: "請求・使用量",
        body: `
            <p class="kicker">お金と回数</p>
            <h1>払う場所と、使い切ったかの場所は別</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>請求</h3><p>プランの申し込み、カード、領収書。Pro などに上げる・やめるは、だいたいここです。</p></article>
              <article class="op"><span class="num">2</span><h3>使用量</h3><p>今月どれくらい使ったか。制限に近づくと、返事が遅くなる・止まることがあります。お金の入力ではありません。</p></article>
            </div>
            <p>カード番号は、公式の入力欄だけです。チャットや教室には書かないでください。プランの見方は <a href="#/course/account" data-link>アカウントと有料プラン</a> も見てください。</p>
          `
      },
      {
        id: "memory",
        title: "機能・メモリー・デザインシステム",
        body: `
            <p class="kicker">会話の中身</p>
            <h1>覚えることと、新しい試作品</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>機能</h3><p>新しい試し機能のオン／オフ。よく分からないスイッチは、触らなくて大丈夫です。</p></article>
              <article class="op"><span class="num">2</span><h3>メモリー</h3><p>別のチャットでも覚えておいてほしいこと（会社名、呼び方など）。間違った覚えは、ここで消せます。</p></article>
              <article class="op"><span class="num">3</span><h3>デザインシステム</h3><p>作ったページや画面の色・部品の決まり。デザイナー向けです。教室の事務だけなら、後回しでよいです。</p></article>
            </div>
            <div class="callout">「前の話を覚えている」と感じるときは、メモリーが働いていることがあります。社外秘は、覚えさせない・ここに残さない、が安全です。</div>
          `
      },
      {
        id: "apps",
        title: "Claude Code・Chrome・デスクトップ",
        body: `
            <p class="kicker">別の入り口</p>
            <h1>同じアカウントでも、置き場所が違う</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>Claude Code</h3><p>黒い画面や Cursor で使う道具づくり。入れ方は別講座です。ここは、入ったあとの設定です。</p></article>
              <article class="op"><span class="num">2</span><h3>Claude in Chrome</h3><p>Google Chrome の拡張。今見ているページを手伝わせたい人向けです。会社のブラウザで許可されていないことがあります。</p></article>
              <article class="op"><span class="num">3</span><h3>デスクトップアプリ</h3><p>ブラウザではなく、パソコンに置く Claude。ダウンロードや起動の案内です。ブラウザのまま教室を進めても大丈夫です。</p></article>
            </div>
            <p>今日の講義で Cursor に入れる人は、<a href="#/course/today/cursorcode" data-link>Cursor に Claude Code</a> です。</p>
          `
      },
      {
        id: "system",
        title: "システム・拡張機能・開発者",
        body: `
            <p class="kicker">パソコン側</p>
            <h1>起動の仕方と、作る人向けの部屋</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>システム</h3><p>アプリの起動、ショートカット、パソコンとのつなぎ方。デスクトップアプリを入れた人向けです。</p></article>
              <article class="op"><span class="num">2</span><h3>拡張機能</h3><p>Claude に足した小さな部品。入っていない人は空のことがあります。</p></article>
              <article class="op"><span class="num">3</span><h3>開発者</h3><p>APIキーなど、プログラムからつなぐ人向けです。教室のチャット作業では使いません。知らない人に番号を渡さないでください。</p></article>
            </div>
            <div class="callout warn">開発者のキーはパスワードと同じ扱いです。画面に出たら、チャットに貼らないでください。</div>
          `
      },
      {
        id: "add",
        title: "カスタマイズ・スキル・コネクタ・プラグイン",
        body: `
            <p class="kicker">足すもの</p>
            <h1>話し方・手順・他のアプリ・部品</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>カスタマイズ</h3><p>いつもこう答えてほしい、という好み。敬語、短い返事、社内の言い方など。</p></article>
              <article class="op"><span class="num">2</span><h3>スキル</h3><p>よく使う手順の型。一度決めると、同じお願いを短くできます。まだ空で大丈夫です。</p></article>
              <article class="op"><span class="num">3</span><h3>コネクタ</h3><p>Googleカレンダーや Gmail など、外の道具をつなぐ入口。つなぐと相手の会社にもデータが届きます。会社のアカウントは、許可されてから。</p></article>
              <article class="op"><span class="num">4</span><h3>プラグイン</h3><p>さらに足す部品。必要なときだけ。分からないものは入れないでください。</p></article>
            </div>
            <p>カレンダーとメールをつなぐ実例は、<a href="#/course/secplus" data-link>秘書+</a> や <a href="#/course/sched" data-link>日程調整</a> です。Slack の毎朝要約は <a href="#/course/slacksum" data-link>Slackを毎朝要約</a> です。</p>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">覚えておくこと</p>
            <h1>地図だけ持って帰れば十分</h1>
            <ul>
              <li><strong>一般・アカウント</strong> … 言葉と、自分のメール</li>
              <li><strong>請求・使用量</strong> … 払う／使い切ったか。別の部屋</li>
              <li><strong>プライバシー・メモリー</strong> … 学習と、覚えさせていること</li>
              <li><strong>コネクタ</strong> … カレンダーやメールをつなぐ。許可してから</li>
              <li><strong>開発者・プラグイン</strong> … 今やらなくてよい</li>
            </ul>
            <p>次は、同じ画面で話しかけてみます。</p>
            <p><a class="btn-orange" href="#/course/webchat" data-link>ブラウザのチャット入門へ</a>
            <a class="btn-dark" href="#/course/account" data-link>アカウントへ</a></p>
          `
      }
    ]
  };

  Object.assign(CLASSROOM.quizzes, {
    settings: [
      {
        q: "カード番号やプランの申し込みを見るのは、どれがいちばん近い？",
        choices: ["使用量", "請求", "デザインシステム"],
        a: 1,
        explain: "請求がお金の部屋です。使用量は、今月どれくらい使ったかのメーターです。"
      },
      {
        q: "別のチャットでも、会社名や呼び方を覚えてほしいときは？",
        choices: ["メモリー", "開発者", "Claude in Chrome"],
        a: 0,
        explain: "メモリーです。社外秘は覚えさせないほうが安全です。"
      },
      {
        q: "Googleカレンダーや Gmail をつなぐ入口は？",
        choices: ["一般", "コネクタ", "請求"],
        a: 1,
        explain: "コネクタです。会社のアカウントは、許可されてからつなぎます。"
      }
    ]
  });
})();
