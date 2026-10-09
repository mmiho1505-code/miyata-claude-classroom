(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.claudebase = {
    id: "claudebase",
    title: "Claudeのはじめ方と基本設定",
    subtitle: "ログイン、プランの確認、設定、便利な機能までを一度に",
    duration: "約30分",
    audience: "はじめてClaudeを使う人／全員共通",
    lessons: [
      {
        id: "goal",
        title: "ログインする",
        was: ["account/goal", "account/open", "account/signup"],
        body: `
            <p class="kicker">GOAL　1／7</p>
            <h1>claude.ai に自分のアカウントで入る</h1>
            <p>朝、会社のパソコンでブラウザを開きました。今日から、ここで Claude に仕事を頼みます。</p>
            <div data-pic="signup" data-cap="Google か、メールアドレスで続けます"></div>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>開く</h3><p>パソコンのブラウザ（Chrome / Edge / Safari）のアドレス欄に claude.ai と打って Enter</p></article>
              <article class="op"><span class="num">2</span><h3>続ける</h3><p>会社のGmailなら「Googleで続ける」。メールなら、届いた番号やリンクを入力</p></article>
              <article class="op"><span class="num">3</span><h3>名前</h3><p>聞かれたら、普段使う名前で大丈夫です</p></article>
            </div>
            <div class="callout warn">パスワード、カード番号、APIキーは、チャットにも教室にも貼りません。カード番号は公式の入力欄だけです。</div>
          `
      },
      {
        id: "plan",
        title: "プランを確かめる",
        was: ["account/free", "account/plan", "account/check", "settings/bill"],
        body: `
            <p class="kicker">PLAN　2／7</p>
            <h1>Code を使う人は有料プラン</h1>
            <p>無料でもチャットの相談や下書きはできます。Claude Code は無料では使えません。Pro などの有料プランが必要です。</p>
            <div data-pic="plan" data-cap="設定 → プラン（または Upgrade）"></div>
            <ol>
              <li>左下（または右上）の<strong>自分の名前／歯車</strong> → <strong>設定</strong></li>
              <li><strong>プラン</strong> または <strong>Upgrade</strong> を押し、Pro / Max / Team などの表を読む</li>
              <li>今のプラン名（Pro など）が出ていればOK。Free のままだと、Claude Code のログインで止まりやすい</li>
            </ol>
            <p>「請求」は払う・やめる・領収書。「使用量」は今月どれくらい使ったかのメーターです。金額やボタンの文言は、公式の画面が正しいです。</p>
            <p>うまくいかないときは <a href="#/course/faq" data-link>つまずき一覧</a> の「ログインできない」へ。</p>
          `
      },
      {
        id: "screen",
        title: "画面と設定の地図",
        was: ["claudebase/goal", "claudebase/screen", "settings/goal", "settings/open"],
        body: `
            <p class="kicker">画面　3／7</p>
            <h1>左のメニュー、入力欄の「＋」、設定</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>左</h3><p>新規チャット、プロジェクト、アーティファクト、カスタマイズ</p></article>
              <article class="op"><span class="num">2</span><h3>入力欄の「＋」</h3><p>ファイルや写真、プロジェクトへの追加、コネクタ、Web検索のオン／オフ</p></article>
              <article class="op"><span class="num">3</span><h3>送る・改行</h3><p>Enter で送信。改行は Shift ＋ Enter</p></article>
              <article class="op"><span class="num">4</span><h3>モデル</h3><p>簡単ですぐなら Haiku、少し難しいなら Sonnet、高度なら Opus（クレジットの消費が多い）</p></article>
            </div>
            <p>設定は、自分の名前 → <strong>設定</strong>（Settings）。左に一覧が出ます。全部いじらなくてよいです。</p>
            <p>長い資料を読むのが得意とされますが、もっともらしい嘘（ハルシネーション）は無いわけではありません。数字と固有名詞は人が確認します。</p>
          `
      },
      {
        id: "instruct",
        title: "Claudeへの指示",
        practice: true,
        was: ["claudebase/instruct", "settings/everyday", "settings/add"],
        body: `
            <p class="kicker">いちばん大事　4／7　練習</p>
            <h1>職業・道具・答え方を書く</h1>
            <ol>
              <li>設定 → 一般 → プロフィール →「Claudeへの指示」を開く</li>
              <li>下を貼り、〔　〕を自分の言葉に変える。見本の文は、そのまま真似しない。最初はざっくりでよい</li>
              <li>保存する</li>
            </ol>
            ${box(`職業：〔事務／飲食／建設 など〕
使っている道具：〔Excel、ChatGPT、会計ソフト など〕
答え方：
・結論を最初に
・分からないことは分からないと言う
・あいまいな点は聞き返す
・専門用語は短く説明する`)}
            <p>ほかの部屋：<strong>一般</strong>は言葉と見た目、<strong>アカウント</strong>は名前・メール・退会（取り消せないことがあるので注意を最後まで読む）。<strong>スキル</strong>は手順の型（空でよい）。<strong>コネクタ</strong>は Gmail やカレンダーをつなぐ入口で、会社のアカウントは許可されてから。分からない<strong>プラグイン</strong>は入れません。</p>
          `
      },
      {
        id: "privacy",
        title: "プライバシーとメモリー",
        was: ["claudebase/privacy", "settings/memory", "settings/apps", "settings/system"],
        body: `
            <p class="kicker">プライバシー　5／7</p>
            <h1>学習に使うか。覚えるか</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>プライバシー</h3><p>「AIモデルの改善に協力」。学習に使われたくなければオフ</p></article>
              <article class="op"><span class="num">2</span><h3>メモリー</h3><p>別のチャットでも覚えること。間違った覚えはここで消す。社外秘は覚えさせない</p></article>
              <article class="op"><span class="num">3</span><h3>後回しでよい</h3><p>機能、デザインシステム、システム、拡張機能、Claude in Chrome、デスクトップアプリ</p></article>
            </div>
            <div class="callout warn">「開発者」に出る APIキーはパスワードと同じ扱いです。教室では使いません。チャットに貼らず、人に渡しません。</div>
          `
      },
      {
        id: "files",
        title: "ファイル・検索・アーティファクト",
        practice: true,
        was: ["claudebase/files", "claudebase/artifact"],
        body: `
            <p class="kicker">便利　6／7　練習</p>
            <h1>入れて聞く。出典をつける。右側に出す</h1>
            <ol>
              <li>「＋」から PDF や Excel を入れ、「何が書いてある？」と聞く。機密・口座・パスワードは入れない</li>
              <li>手書きメモの写真も読めるが、<strong>元のメモと必ず見比べる</strong></li>
              <li>Web検索は出典を求める</li>
            </ol>
            ${box(`今週のAI業界の重要なニュースを3つ、出典のURLをつけて教えてください。
分からないことは分からないと言ってください。`)}
            <p>「Webページにして」と頼むと、右側にページが出ます（アーティファクト）。公開してよいかは人が決めます。個人情報は載せません。</p>
            ${box(`アーティファクトで、1週間の献立表のWebページを作ってください。
材料は一般的なもので。公開はまだしないでください。`)}
          `
      },
      {
        id: "proj",
        title: "プロジェクト",
        practice: true,
        was: ["claudebase/proj", "account/summary", "settings/summary", "claudebase/summary"],
        body: `
            <p class="kicker">箱　7／7　練習</p>
            <h1>業務ごとの箱で、毎回同じ形式</h1>
            <ol>
              <li>左の「プロジェクト」で箱を作る</li>
              <li>箱の指示に下を貼る</li>
              <li>走り書きのメモを貼るだけで、同じ見出しの議事録になる</li>
            </ol>
            ${box(`このプロジェクトの指示：
日時・参加者・議題・要点・決定事項・ToDo・確認事項の形式でまとめる。
500〜800字。あいまいな表現はしない。不明な点は「不明」と書く。
過去の議事録は参照せず、今回貼ったメモだけで作成する。`)}
            <p><a href="materials/claudebase.pdf" download>スライドPDF（基本設定編）</a>　<a href="materials/cheat-safety.pdf" download>早見表：安全に使うための約束（A4・1枚）</a></p>
            <p><a class="btn-orange" href="#/course/promptskill" data-link>チャットとお願い文の講座へ</a>
            <a class="btn-dark" href="#/course/aipick" data-link>AIの使い分けへ</a></p>
          `
      }
    ]
  };
})();
