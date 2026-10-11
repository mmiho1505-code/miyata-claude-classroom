(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.today = {
    id: "today",
    title: "今日の講義：CLAUDE.md と Claude Code（中級）",
    subtitle: "コワークで作った社内ポータルを、Claude Code で育てる。CLAUDE.md、会話の文脈、権限と計画モード、Skills",
    duration: "約120分",
    audience: "パソコンに慣れていて、Claude Code を起動できる人",
    lessons: [
      {
        id: "start",
        title: "今日のゴールと準備",
        practice: true,
        body: `
            <p class="kicker">GOAL　0〜10分　1／7</p>
            <h1>コワークで作った社内ポータルを、任せられる形にする</h1>
            <p>前回コワークで作った社内ポータルを、今日は Claude Code で直していきます。同じ説明をしない、勝手に動かせない、お知らせの追加は呼ぶだけにする。そのための仕組みを、手を動かして学びます。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>CLAUDE.md</h3><p>毎回の説明を、ファイルに書いて省く</p></article>
              <article class="op"><span class="num">2</span><h3>文脈と権限</h3><p>会話の中身と、勝手に動かない範囲を管理する</p></article>
              <article class="op"><span class="num">3</span><h3>Skill</h3><p>くり返す作業を、名前で呼べるようにする</p></article>
              <article class="op"><span class="num">4</span><h3>自分の仕事</h3><p>最後の20分で、自分用を1つずつ作る</p></article>
            </div>
            <h3>ポータルをフォルダに入れる</h3>
            <ol>
              <li>デスクトップに「社内ポータル」というフォルダを作る</li>
              <li><a href="materials/practice/portal.html" download="index.html">見本のポータル（index.html）</a>をダウンロードして、そのフォルダに入れる</li>
            </ol>
            <p>見本は、前回と同じ4つのブロック（お知らせ・今月の予定・よく使うリンク・部署の連絡先）でできています。今日は全員これで進めます。</p>
            <p>自分のポータルを使いたい人は、あとで差し替えます。Cowork で作った人は、前回の作業の続きに次のように頼みます。チャットで作った人は、今日は見本のままで大丈夫です。</p>
            ${box(`前回このタスクで作った社内ポータルを、いまの状態のまま（あとから直したお知らせ・内線・リンク・色もそのまま）1つのHTMLファイルにまとめてください。
デスクトップの「社内ポータル」フォルダに、index.html という名前で保存してください。中にある見本の index.html は上書きしてかまいません。
保存したら、保存した場所を教えてください。`)}
            <p>前回の会話は、Claude アプリ左の Cowork のタスク一覧から開きます（新しいタスクでは前回のポータルがわかりません）。フォルダの許可を聞かれたら「社内ポータル」を選びます。保存できたら index.html をダブルクリックして、自分のポータルが出るか確かめます。</p>
            <h3>Claude Code を確かめる</h3>
            <p>最初に、ターミナルで状態を確かめます。インストールがまだの人は <a href="#/course/code" data-link>Code準備</a> へ。</p>
            ${box(`claude update
claude doctor`)}
            <ul>
              <li><strong>claude update</strong>：最新版にそろえる。版が違うと、画面やコマンドが講義と合わなくなる</li>
              <li><strong>claude doctor</strong>：二重インストールや設定の書き間違いがないか、最初に点検する</li>
            </ul>
            <p>問題がなければ、ポータルのフォルダに移って <code>claude</code> と打ちます。起動したフォルダの CLAUDE.md が読まれ、そのフォルダが作業場所になるためです。</p>
            ${box(`cd ~/Desktop/社内ポータル
claude`)}
          `,
        was: []
      },
      {
        id: "layers",
        title: "CLAUDE.md の置き場所",
        practice: true,
        body: `
            <p class="kicker">CLAUDE.md　10〜30分　2／7　練習</p>
            <h1>CLAUDE.md は、Claude への「申し送りメモ」</h1>
            <p>Claude Code は起動するたびに、このメモを読んでから仕事を始めます。毎回言っていたことをここに書けば、言わなくて済みます。</p>
            <p>メモは置く場所で役目が変わります。まずは2つだけ覚えれば十分です。</p>
            <ul>
              <li><strong>フォルダの中（./CLAUDE.md）</strong>：この社内ポータルだけの決まり</li>
              <li><strong>自分の設定（~/.claude/CLAUDE.md）</strong>：どのフォルダでも守ってほしいこと（口調など）</li>
            </ul>
            <p>両方あれば、両方とも読まれます。</p>
            <h3>やってみる</h3>
            <ol>
              <li>Claude Code に <code>/init</code> と打つ。フォルダの中身を見て、メモのたたき台を作ってくれます</li>
              <li>できたら、下の文をコピーして貼る</li>
            </ol>
            ${box(`CLAUDE.md を次の方針で直してください。
・このフォルダは、全社員が毎朝開く社内ポータル（index.html）
・ブロックは4つだけ。上から お知らせ → 今月の予定 → よく使うリンク → 部署の連絡先。5つ目は作らない
・お知らせは3件まで。日付つきで、新しいものが上
・携帯番号・パスワード・給与は載せない
・内線やメールを変えるときは、変更前と変更後を並べて見せ、私のOKを待つ
・見た目（色・文字の大きさ）は今のまま。スマホでも読めるように
・公開（アップロード）と、ファイルの削除はしない
・CLAUDE.md は短く保つ。長い説明は別ファイルにして @ で読み込む`)}
            <h3>自分の設定にも書く</h3>
            <p>次は、どのフォルダでも守ってほしいことを、自分の設定（~/.claude/CLAUDE.md）に書きます。下の文をそのまま貼ります。3つは自分の好みに変えてかまいません。</p>
            ${box(`自分の設定の CLAUDE.md（~/.claude/CLAUDE.md）に、次の3つを書いてください。どのフォルダで作業するときも守ってほしいことです。
・日本語で、やさしい言葉で答える
・ファイルを変える前に、何をどう変えるかを先に見せる
・ファイルの削除と、外への送信・公開はしない
すでに書いてあることがあれば消さずに、下に足してください。`)}
            <p>書けたら <code>/memory</code> と打ちます。フォルダの CLAUDE.md と自分の設定の CLAUDE.md が両方並んでいれば成功です。あとで直したいときも、ここから開けます。</p>
            <p>慣れてきたら：メモが長くなったら別ファイルに分け、<code>@ファイル名</code> で読み込ませます。特定の場所だけのルールは <code>.claude/rules/</code> に置けます。</p>
            <h3>早く終わった人へ</h3>
            <p>CLAUDE.md の中身を別ファイルに分けて、<code>@</code> で読み込ませてみます。</p>
            ${box(`CLAUDE.md のうち、お知らせと連絡先の決まりを rules.md という別ファイルに移してください。
CLAUDE.md には @rules.md の1行を残して、読み込まれるようにしてください。
移す前に、どの行を移すかを先に見せてください。`)}
            <p>できたら <code>/clear</code> してから「お知らせは何件まで？」と聞き、rules.md の決まりで答えるか確かめます。</p>
          `,
        was: []
      },
      {
        id: "context",
        title: "会話の文脈を管理する",
        practice: true,
        body: `
            <p class="kicker">文脈　30〜45分　3／7　練習</p>
            <h1>渡すものを選び、たまったら切る</h1>
            <ul>
              <li><code>@</code> ＋ファイル名：見てほしいファイルを指定する（例：<code>@index.html</code>）</li>
              <li><code>/context</code>：いま会話にどれだけ詰まっているかを見る</li>
              <li><code>/clear</code>：別の作業に移るときに、会話を空にする。CLAUDE.md は次も読まれる</li>
              <li><code>/resume</code>：前の会話に戻る。<code>claude --continue</code> で、このフォルダの直前の会話から再開</li>
              <li><code>/model</code>：モデルを切り替える。<code>/usage</code>：使用量を見る</li>
            </ul>
            <p>順番に試します。① <code>@index.html</code> を指定して「今のお知らせと予定を教えて」と頼む → ② <code>/context</code> で中身を見る → ③ <code>/clear</code> → ④ <code>/resume</code> で戻れることを確かめる。</p>
            <div class="callout">1つの会話に1つの作業。お知らせを直し終えたら <code>/clear</code> してから、連絡先の直しに移ります。</div>
            <h3>早く終わった人へ</h3>
            <p>ターミナルを閉じても、続きから再開できることを確かめます。① 何か1つ質問する → ② <code>/exit</code> で終わる → ③ 下を打つ → ④「さっき何を聞いた？」と聞く。</p>
            ${box(`cd ~/Desktop/社内ポータル
claude --continue`)}
          `,
        was: []
      },
      {
        id: "safety",
        title: "権限と計画モード",
        practice: true,
        body: `
            <p class="kicker">権限　45〜65分　4／7　練習</p>
            <h1>勝手に動かない範囲を決める</h1>
            <p><strong>Shift＋Tab</strong> で動き方（権限モード）を切り替えます。大きな変更は、計画だけ出させて読んでから進めます。</p>
            ${box(`よく使うリンクに「年末調整」を足し、終わった予定を消したいです。まだファイルは変えずに、どこをどう直すかの計画だけ出してください。`)}
            <p>許可・禁止は <code>/permissions</code> で見られます。決まりとして残すなら設定ファイルに書きます。</p>
            <ul>
              <li><strong>~/.claude/settings.json</strong>：自分のパソコン全体</li>
              <li><strong>.claude/settings.json</strong>：このフォルダだけ（チームで共有できる）</li>
            </ul>
            ${box(`{
  "permissions": {
    "allow": ["Bash(git *)"],
    "deny": ["Bash(rm *)"]
  }
}`)}
            <p>書いたら <code>/permissions</code> を開き、禁止が入っていることを確かめます。</p>
            <h3>早く終わった人へ</h3>
            <p>計画を読んで、直してから進める練習です。計画モードのまま下を貼り、出てきた計画に「内線は400番台にして」など1つ注文をつけてから OK します。</p>
            ${box(`部署の連絡先に「広報部」を1つ足したいです。まだファイルは変えずに、どこに何を足すかの計画だけ出してください。`)}
          `,
        was: []
      },
      {
        id: "extend",
        title: "Skill を作って呼ぶ",
        practice: true,
        body: `
            <p class="kicker">Skill　65〜85分　5／7　練習</p>
            <h1>くり返す作業は、名前で呼ぶ</h1>
            <p>Skill は <code>.claude/skills/〈名前〉/SKILL.md</code> に置きます。先頭に name と description を書き、<code>/名前</code> で呼びます。自分のコマンドも、今は Skill にまとまっています。</p>
            ${box(`社内ポータルにお知らせを1件追加する手順を、Skill にしてください。名前は news-add。
・日付と本文を聞いてから作業する
・一番上に足す。4件目になったら、一番古いものを消してよいか私に聞く
・追加したら、スマホの幅でも崩れていないか確認する
・公開（アップロード）はしない`)}
            <p>できたら <code>/news-add</code> と打って、実際にお知らせを1件追加します。ブラウザで index.html を開き直して確かめます。思いどおりでなければ、SKILL.md を直してもう一度呼びます。</p>
            <h3>早く終わった人へ</h3>
            <p>2つ目の Skill を、今度は自分の言葉で頼んで作ります。名前は schedule-add（今月の予定を1件足す）。上の文を見本に、聞いてほしいこと・してはいけないことを自分で書きます。できたら <code>/schedule-add</code> で呼んで確かめます。</p>
          `,
        was: []
      },
      {
        id: "demo",
        title: "サブエージェントで点検係を作る",
        practice: true,
        body: `
            <p class="kicker">サブエージェント　85〜100分　6／7　練習</p>
            <h1>点検は、別の係に任せる</h1>
            <p>サブエージェントは、役割を決めて仕事を分ける「係」です。<code>.claude/agents/</code> に置きます。今日は、ポータルが決まりを守っているかを見る「点検係」を作ります。ファイルは変えず、見て報告するだけなので安全です。</p>
            ${box(`このフォルダ用のサブエージェントを作ってください。名前は portal-check。
・役目：index.html が CLAUDE.md の決まりを守っているか点検して、守れていない所を一覧で報告する
・見ること：ブロックが4つだけか、お知らせが3件までで新しい順か、携帯番号・パスワード・給与が載っていないか
・ファイルは読むだけ。直したり消したりしない
・.claude/agents/portal-check.md に保存する`)}
            <p>できたら <code>/agents</code> で portal-check が並んでいるか確かめ、次のように頼みます。</p>
            ${box(`portal-check に、今の index.html を点検させてください。`)}
            <p>試しに、お知らせを4件にしたり、連絡先に「090-0000-0000」を足したりしてから点検させると、見つけてくれるかがわかります（確かめたら元に戻します）。</p>
            <h3>ほかの道具（今日は先生のデモ。家で試すときの手順つき）</h3>
            <p><strong>フック</strong>＝「〜したら、必ず〜する」という自動のきまり。例：ファイルを変えたら、必ず時刻を「変更記録.txt」に書く</p>
            <ol>
              <li>Claude Code に下を貼る</li>
            </ol>
            ${box(`このフォルダの .claude/settings.json に、フックを1つ足してください。
・ファイルを変えたあと（Edit か Write のあと）に動く
・「変更記録.txt」に、今の日時を1行足す
・すでに書いてある設定は消さない
足す前に、何を書くかを先に見せてください。`)}
            <ol start="2">
              <li><code>/hooks</code> と打って、足したフックが並んでいるか確かめる（出てこなければ、一度 <code>/exit</code> してから <code>claude</code> で起動し直す）</li>
              <li>「お知らせの日付を今日にして」など、何か1つ直してもらう</li>
              <li>フォルダに「変更記録.txt」ができて、日時が書かれていれば成功</li>
            </ol>
            <p><strong>MCP</strong>＝Claude と、ほかのサービスをつなぐ「差し込み口」。例：Notion のページを読んで、ポータルのお知らせに写す</p>
            <ol>
              <li>ターミナルで、Claude Code の<strong>外</strong>で下を打つ</li>
            </ol>
            ${box(`claude mcp add --transport http notion https://mcp.notion.com/mcp`)}
            <ol start="2">
              <li><code>claude</code> で起動し、<code>/mcp</code> と打つ。notion を選んでログインする（ブラウザが開きます）</li>
              <li>下を貼って試す</li>
            </ol>
            ${box(`Notion の「お知らせ」ページを読んで、ポータルに足すお知らせの案を1件作ってください。まだファイルは変えないでください。`)}
            <ol start="4">
              <li>やめたいときは <code>claude mcp remove notion</code></li>
            </ol>
            <div class="callout warn">つないだサービスの中身は Claude が読めるようになります。会社のアカウントでつなぐ前に、会社のルールを確かめます。</div>
          `,
        was: []
      },
      {
        id: "wrap",
        title: "自分の仕事で1つ作る・まとめ",
        practice: true,
        body: `
            <p class="kicker">実践　100〜120分　7／7　練習</p>
            <h1>自分の仕事で、CLAUDE.md と Skill を1つずつ</h1>
            <p>自分の業務のフォルダを開き、今日の手順で作ります。迷ったら下を貼ります。</p>
            ${box(`このフォルダは〔自分の仕事の内容〕に使っています。
まず私に質問して、このフォルダ用の CLAUDE.md を作ってください。
そのあと、私が毎回くり返している作業を1つ聞き出して、Skill にしてください。
ファイルの削除と、外への送信・公開はしないでください。`)}
            <h2>今日やったこと</h2>
            <ul>
              <li>コワークで作ったポータルをフォルダに入れ、CLAUDE.md にポータルの決まりを書いた</li>
              <li><code>@</code>・<code>/context</code>・<code>/clear</code> で、会話に渡すものを管理した</li>
              <li>Shift＋Tab と設定ファイルで、勝手に動かない範囲を決めた</li>
              <li>お知らせの追加を Skill にして、名前で呼んだ</li>
              <li>点検係のサブエージェントを作り、決まりを守っているか見てもらった</li>
            </ul>
            <div class="callout">公開・送信・削除は人が決めます。Claude には計画と下書きまで。</div>
          `,
        was: []
      }
    ]
  };
})();
