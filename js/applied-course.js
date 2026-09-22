(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.applied = {
    id: "applied",
    title: "Claude Code 応用編",
    subtitle: "使いこなし：自分仕様で回す。CLAUDE.md・Skills・Rules",
    duration: "約45分",
    audience: "基本操作を一通り触った人／中級・設定＆自動化",
    lessons: [
      {
        id: "aim",
        title: "応用編の狙い",
        body: `
            <p class="kicker">AIM</p>
            <h1>“作れる”から“自分仕様で回す”へ</h1>
            <p>セットアップと最初のお願いができた人向けです。キーワードは<strong>一度決めれば、次からラク</strong>。育てるほど、あなた専用の相棒になります。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>自分仕様に育てる</h3><p>CLAUDE.md・Skills・Rulesで、毎回の手間を削る</p></article>
              <article class="op"><span class="num">2</span><h3>作業をつなげる</h3><p>複数ステップ・外部連携で実務レベルに</p></article>
              <article class="op"><span class="num">3</span><h3>安全に速く回す</h3><p>権限・機密・履歴を押さえて任せる</p></article>
            </div>
            <p>まだインストール前の人は、先に <a href="#/course/code" data-link>はじめての Claude Code（Windows）</a> を済ませてください。</p>
          `
      },
      {
        id: "themes",
        title: "全体像（6テーマ）",
        body: `
            <p class="kicker">MAP</p>
            <h1>応用の6テーマ</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>CLAUDE.md</h3><p>前提・方針を共有し、毎回の説明を省く</p></article>
              <article class="op"><span class="num">2</span><h3>Skills</h3><p>よく使う手順を／コマンド化して再利用</p></article>
              <article class="op"><span class="num">3</span><h3>Rules</h3><p>必ず守らせる約束で安全を徹底</p></article>
              <article class="op"><span class="num">4</span><h3>段階＋Git</h3><p>大きい作業を分けて、履歴で戻せる</p></article>
              <article class="op"><span class="num">5</span><h3>外部連携</h3><p>MCP・コネクタ・Chrome／Excelとつなぐ</p></article>
              <article class="op"><span class="num">6</span><h3>プロンプト設計</h3><p>役割・制約・形式で狙いどおりに</p></article>
            </div>
            <div class="callout">順番どおりでなくて構いません。まずは CLAUDE.md を1枚書くところからが一番効きます。</div>
          `
      },
      {
        id: "claudemd",
        title: "CLAUDE.md",
        practice: true,
        body: `
            <p class="kicker">APPLIED 1</p>
            <h1>毎回の説明を省く取扱説明書</h1>
            <p>プロジェクトフォルダに置くだけで、毎回読まれます。目的・使う技術・文体・禁止事項を書いておくと、指示が短く、ブレなくなります。</p>
            <ul>
              <li>プロジェクトの目的・方針を書く</li>
              <li>使う技術・ルールを共有する</li>
              <li>フォルダのいちばん上（ルート）に置く</li>
            </ul>
            <h2>例</h2>
            ${box(`# このプロジェクトについて
・目的：社内の請求書を自動生成
・出力：PDF、1社1ファイル
・文体：丁寧・簡潔
・禁止：顧客名を外部に出さない`)}
            <p>ゼロから書かなくて大丈夫です。次のように頼んでも作れます。</p>
            ${box(`このフォルダで作業するときのルールをまとめた CLAUDE.md を作って。作る前に、会社名・目的・守ってほしいことを私に質問して。`)}
            <div class="callout ok">一度書けば、毎回の前置きが要らなくなります。足りないと思ったら、あとから1行足せば十分です。</div>
          `
      },
      {
        id: "skills",
        title: "Skills",
        practice: true,
        body: `
            <p class="kicker">APPLIED 2</p>
            <h1>よく使う手順を“コマンド”に</h1>
            <p>毎回同じ手順をまとめておくと、スラッシュコマンドで呼び出せます。品質がそろい、チームでも共有しやすくなります。</p>
            <ul>
              <li>いつもの作業を登録する</li>
              <li>次回からコマンド一つで同じ手順</li>
              <li>ファイルの書き方を自分で覚えなくてよい。Claudeに作ってもらう</li>
            </ul>
            ${box(`よく使う「請求書チェックの手順」を Skill にまとめて。次回から /invoice-check と打てば、同じ手順を実行できるようにして。`)}
            <div class="callout">コマンドが出てこないときは、「Skillとして保存して、スラッシュで呼べるようにして」と一言足してください。属人化も防げます。</div>
          `
      },
      {
        id: "rules",
        title: "Rules",
        practice: true,
        body: `
            <p class="kicker">APPLIED 3</p>
            <h1>必ず守らせる約束ごと</h1>
            <p>“やってはいけないこと”を先に決めておくと、安心して任せられます。毎回自動で効くようにしておきます。</p>
            <ul>
              <li>守ってほしい約束を明文化する</li>
              <li>機密をうっかり出させない</li>
              <li>事故を未然に防ぐ</li>
            </ul>
            ${box(`# 守ること（Rules）
・APIキー等の秘密情報は出さない
・削除／送信／公開は必ず確認を取る
・公開リポジトリに機密を含めない`)}
            <p>CLAUDE.md に書き足してもらっても構いません。</p>
            ${box(`次の約束を、毎回必ず守る Rules として残して。秘密情報は出さない。削除・送信・公開の前は私の確認を待つ。`)}
          `
      },
      {
        id: "commands",
        title: "コマンドと設定",
        body: `
            <p class="kicker">APPLIED 4</p>
            <h1>コマンドと設定で“調整”する</h1>
            <ul>
              <li><code>/help</code> … コマンド一覧を見る</li>
              <li><code>/config</code> … モデルや設定を変える</li>
              <li><code>/clear</code> … 会話をリセットする</li>
            </ul>
            <p>難しい作業は“賢いモデル＋じっくり思考”、軽い作業は素早く。使い分けが効きます。</p>
            <div class="callout">モデル名を暗記しなくて大丈夫です。<code>/config</code> の画面で、今の作業に合いそうなものを選べば十分です。</div>
          `
      },
      {
        id: "stages",
        title: "大きな作業は段階で",
        practice: true,
        body: `
            <p class="kicker">APPLIED 5</p>
            <h1>複数ステップを一度に任せる</h1>
            <p>設計→実装→確認をまとめて依頼できます。ただし各段階で一度止めて確認するのが安全です。大きい作業は分けて指示し、最後にテストします。</p>
            ${box(`「予約サイト」を作りたい。①4ページ構成の設計案を出す→②承認したら作る→③スマホ表示を確認→④公開手順、の順で。各段階でいったん止まって、私の確認を待って。`)}
            <div class="callout ok">“段階に分けて、都度止めて確認”。これが大きな作業を安全に進めるコツです。公開・送信は自分がOKしてから。</div>
          `
      },
      {
        id: "gituse",
        title: "Gitで戻せる状態に",
        practice: true,
        body: `
            <p class="kicker">APPLIED 6</p>
            <h1>履歴を味方にする</h1>
            <p>こまめに保存（コミット）しておけば、失敗しても巻き戻せます。だから思い切って試せます。</p>
            <ul>
              <li>変更履歴を残す（コミット）</li>
              <li>いつでも前に戻せる</li>
              <li>大きく変えたいときは別ブランチで試す</li>
              <li>共同作業にも使える</li>
            </ul>
            ${box(`今の状態を保存（コミット）して。おかしくなったら、この時点に戻せるようにしておいて。大きく変えたい時は別ブランチで試して。`)}
            <p>Git の入れ方は <a href="#/course/code/gitwin" data-link>Git for Windows（任意）</a> にあります。まだなら、フォルダのコピーでも代用できます。</p>
          `
      },
      {
        id: "connect",
        title: "外部と連携する",
        practice: true,
        body: `
            <p class="kicker">APPLIED 7</p>
            <h1>今あるサービスとつなぐ</h1>
            <p>Claude Code 単体で終わらせず、いま使っている道具とつなぐと一気に実用的になります。</p>
            <ul>
              <li><strong>MCP</strong> … 外部ツールに接続する仕組み</li>
              <li><strong>コネクタ</strong> … アプリ連携</li>
              <li><strong>Chrome</strong> … ブラウザ操作</li>
              <li><strong>Excel など</strong> … 表計算とも連携</li>
            </ul>
            ${box(`連携済みの〔サービス名〕から最新データを取ってきて、今日のレポートにまとめて。足りない情報はブラウザで調べて補って。送信や公開はしないで。`)}
            <div class="callout warn">接続は画面の案内に沿って自分で行います。パスワードやAPIキーをチャットに貼らないでください。送付・公開の最終判断は自分です。</div>
          `
      },
      {
        id: "deepen",
        title: "頼み方を一段深く",
        practice: true,
        body: `
            <p class="kicker">APPLIED 8</p>
            <h1>プロンプト設計を一段深く</h1>
            <p>“役割・制約・順番・形式”を添えるほど、狙いどおりの答えに近づきます。</p>
            <ul>
              <li>役割を与える（「〇〇として」）</li>
              <li>制約を伝える（期限・形式・トーン）</li>
              <li>出力形式を指定する</li>
              <li>段階的に指示する</li>
            </ul>
            ${box(`あなたは中小企業の財務コンサルとして。この試算表を分析し、①要点3つ→②リスク→③打ち手、の順に、経営者向けのやさしい言葉で、A4・1枚にまとめて。`)}
            <p>数字が出てきたら、元データと必ず照合してください。金額の最終確認は自分です。</p>
          `
      },
      {
        id: "stuck",
        title: "つまずきの切り分け",
        body: `
            <p class="kicker">APPLIED 9</p>
            <h1>うまくいかない時の頼み方</h1>
            <div class="qa"><p><strong>Q. エラーが出た</strong></p><p>エラー文を省略せず全部そのまま貼り、原因と直し方を聞く。</p></div>
            <div class="qa"><p><strong>Q. 途中で止まる／重い</strong></p><p>作業を小さく分けて、一つずつ順番に頼む。</p></div>
            <div class="qa"><p><strong>Q. 意図と違うものが出る</strong></p><p>何が違うかを具体例で伝えて、その部分だけ直させる。</p></div>
            <div class="qa"><p><strong>Q. 前より悪くなった</strong></p><p>「さっきの状態に戻して」＋Gitの履歴から復元する。</p></div>
            ${box(`次のエラーが出ました。原因と直し方を、専門用語を使わずに説明して。直す前に、何を変更するか教えて。
〔ここにエラーの文章をそのまま貼る〕`)}
          `
      },
      {
        id: "guard",
        title: "安全・権限・機密",
        body: `
            <p class="kicker">SAFETY</p>
            <h1>応用でも、ここは外さない</h1>
            <ul>
              <li><strong>APIキーは環境変数で</strong> … コードに直接書かず、<code>.env</code> などで分けて管理</li>
              <li><strong>リポジトリはプライベート</strong> … 機密を含むものを公開しない</li>
              <li><strong>実行前に必ず確認</strong> … 削除・送信・公開は承認してから動かす</li>
              <li><strong>Rules と CLAUDE.md で明文化</strong> … “やらないこと”を最初に固定する</li>
            </ul>
            <div class="callout warn">請求書の金額・宛名、顧客情報、パスワードは特に注意。出てきた数字は元データと照合し、送る前は自分の目で見てください。</div>
          `
      },
      {
        id: "wrap",
        title: "まとめ",
        body: `
            <p class="kicker">SUMMARY</p>
            <h1>応用編、こう使いこなす</h1>
            <ol>
              <li><strong>自分仕様に育てる</strong> … CLAUDE.md・Skills・Rules で毎回をラクに</li>
              <li><strong>大きい作業は段階＋確認</strong> … Gitで戻せる状態に。外部連携で実務レベルへ</li>
              <li><strong>頼み方と切り分けを磨く</strong> … 役割・制約・形式＋エラーごと相談で前に進む</li>
            </ol>
            <p>まずは CLAUDE.md を1枚書くところから。育てるほどラクになります。</p>
            <p><a class="btn-orange" href="#/course/invoice" data-link>請求書ツールで試す</a>
            <a class="btn-dark" href="#/prompts" data-link>プロンプト集を見る</a></p>
          `
      }
    ]
  };

  CLASSROOM.quizzes.applied = [
    {
      q: "応用編のキーワードにいちばん近いのは？",
      choices: ["毎回ゼロから詳しく説明する", "一度決めれば、次からラク", "無料プランだけで全部できる"],
      a: 1,
      explain: "CLAUDE.md・Skills・Rules で育てるほど、毎回の前置きが減ります。"
    },
    {
      q: "CLAUDE.md の役割は？",
      choices: ["パソコンの電源を切るメモ", "プロジェクトの取扱説明書。毎回読まれる前提・方針", "SNSの投稿文"],
      a: 1,
      explain: "フォルダに置くだけで共有され、指示が短くブレにくくなります。"
    },
    {
      q: "Skills を使うと、何が楽になりますか？",
      choices: ["よく使う手順をコマンドで呼び出せる", "パスワードを自動投稿できる", "無料プランが使えるようになる"],
      a: 0,
      explain: "いつもの作業を登録すると、次からはスラッシュコマンド一つです。"
    },
    {
      q: "大きなサイト制作を頼むときの安全な進め方は？",
      choices: ["全部一気に作って公開まで自動", "段階に分け、各段階で止まって自分の確認を待つ", "エラーが出ても無視する"],
      a: 1,
      explain: "設計→承認→作成→確認。公開・送信は自分がOKしてから。"
    },
    {
      q: "エラーが出たときの頼み方は？",
      choices: ["「なんかダメ」だけ送る", "エラー文を省略せず全部貼り、原因と直し方を聞く", "パソコンを初期化する"],
      a: 1,
      explain: "原文をそのまま渡すと、切り分けが速くなります。"
    },
    {
      q: "APIキーの扱いとして正しいものは？",
      choices: ["プログラムに直接書く", "チャットに貼って共有する", "コードに直接書かず、.env などで分けて管理する"],
      a: 2,
      explain: "秘密情報は分けて管理し、公開リポジトリに含めません。"
    }
  ];
})();
