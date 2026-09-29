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
            <p>Claude の画面で、自分の名前や歯車を押して <strong>設定</strong>（Settings）を開きます。左に長い一覧が出ます。今日は、その部屋の意味です。全部いじらなくてよいです。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>よく使う</h3><p>一般・アカウント・請求・使用量・プライバシー</p></article>
              <article class="op"><span class="num">2</span><h3>会話の覚え</h3><p>メモリー。機能は試したい人だけ</p></article>
              <article class="op"><span class="num">3</span><h3>足すもの</h3><p>スキル・コネクタ。プラグインや開発者は後回しでよい</p></article>
            </div>
            <div class="callout">金額・ボタンの文言は、公式の画面が正しいです。教室は「どこを見ればよいか」の地図です。</div>
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
            <p>「一般」を開くと、言葉（日本語）、見た目の明るさ、通知が出ます。いちばん無難な部屋です。「アカウント」には、名前、メール、ログアウト、退会があります。パスワードやメールの変更もここです。</p>
            <p>「プライバシー」には、会話を学習に使ってよいか、などのスイッチがあります。会社のルールがある人は、担当に合わせてオフにすることがあります。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>一般</h3><p>言葉と見た目</p></article>
              <article class="op"><span class="num">2</span><h3>アカウント</h3><p>名前とメール</p></article>
              <article class="op"><span class="num">3</span><h3>プライバシー</h3><p>学習に使うか</p></article>
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
            <p>「請求」を開くと、プランの申し込み、カード、領収書が出ます。Pro などに上げる・やめるは、だいたいここです。「使用量」は、今月どれくらい使ったかのメーターです。制限に近づくと、返事が遅くなる・止まることがあります。お金の入力ではありません。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>請求</h3><p>払う・やめる</p></article>
              <article class="op"><span class="num">2</span><h3>使用量</h3><p>今月のメーター</p></article>
            </div>
            <p>カード番号は、公式の入力欄だけです。チャットや教室には書かないでください。</p>
          `
      },
      {
        id: "memory",
        title: "機能・メモリー・デザインシステム",
        body: `
            <p class="kicker">会話の中身</p>
            <h1>覚えることと、新しい試作品</h1>
            <p>「メモリー」を開くと、別のチャットでも覚えておいてほしいこと（会社名、呼び方など）が出ます。間違った覚えは、ここで消せます。「機能」は、新しい試し機能のオン／オフです。よく分からないスイッチは、触らなくて大丈夫です。</p>
            <p>「デザインシステム」は、作ったページの色・部品の決まりです。デザイナー向けです。教室の事務だけなら、後回しでよいです。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>機能</h3><p>試し機能。触らなくてよい</p></article>
              <article class="op"><span class="num">2</span><h3>メモリー</h3><p>覚えと消し</p></article>
              <article class="op"><span class="num">3</span><h3>デザインシステム</h3><p>色と部品。後回しでよい</p></article>
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
            <p>同じアカウントでも、黒い画面、Chrome の拡張、パソコンのアプリと、置き場所が違います。ブラウザのまま教室を進めても大丈夫です。</p>
            <p>「Claude Code」は、入ったあとの設定です。入れ方は別講座です。「Claude in Chrome」は、今見ているページを手伝わせたい人向けです。会社のブラウザで許可されていないことがあります。「デスクトップアプリ」は、パソコンに置く Claude のダウンロードや起動です。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>Claude Code</h3><p>入ったあとの設定</p></article>
              <article class="op"><span class="num">2</span><h3>Claude in Chrome</h3><p>今見ているページ</p></article>
              <article class="op"><span class="num">3</span><h3>デスクトップアプリ</h3><p>パソコンに置く</p></article>
            </div>
          `
      },
      {
        id: "system",
        title: "システム・拡張機能・開発者",
        body: `
            <p class="kicker">パソコン側</p>
            <h1>起動の仕方と、作る人向けの部屋</h1>
            <p>デスクトップアプリを入れた人は、「システム」に起動やショートカットがあります。「拡張機能」は、足した小さな部品です。入っていない人は空のことがあります。「開発者」を開くと、APIキー（プログラムからつなぐ番号）が出ることがあります。教室のチャット作業では使いません。知らない人に番号を渡さないでください。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>システム</h3><p>起動とショートカット</p></article>
              <article class="op"><span class="num">2</span><h3>拡張機能</h3><p>足した部品。空でもよい</p></article>
              <article class="op"><span class="num">3</span><h3>開発者</h3><p>APIキー。今は使わない</p></article>
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
            <p>「カスタマイズ」は、いつもこう答えてほしい、という好みです。敬語、短い返事、社内の言い方など。「スキル」は、よく使う手順の型です。まだ空で大丈夫です。</p>
            <p>「コネクタ」を開くと、Googleカレンダーや Gmail など、外の道具をつなぐ入口があります。つなぐと相手の会社にもデータが届きます。会社のアカウントは、許可されてからにします。「プラグイン」は、必要なときだけ。分からないものは入れないでください。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>カスタマイズ</h3><p>話し方の好み</p></article>
              <article class="op"><span class="num">2</span><h3>スキル</h3><p>手順の型。空でよい</p></article>
              <article class="op"><span class="num">3</span><h3>コネクタ</h3><p>外の道具。許可してから</p></article>
              <article class="op"><span class="num">4</span><h3>プラグイン</h3><p>分からないものは入れない</p></article>
            </div>
            <p>外の道具をつなぐ実例は <a href="#/course/slacksum" data-link>Slackを毎朝要約</a> です。</p>
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
