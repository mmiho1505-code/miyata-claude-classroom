(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.connect = {
    id: "connect",
    title: "今日の講義：つなぐ・自動で回す・チームに配る（中級の続き）",
    subtitle: "前回の社内ポータルを、外のサービスとつなぎ、自動で点検させ、チームに配れる形にする。GitHub、MCP、スケジュール、プラグイン、任せる範囲",
    duration: "約120分",
    audience: "前回の講義（CLAUDE.md と Claude Code）を受けた人",
    lessons: [
      {
        id: "start",
        title: "今日のゴールと準備",
        practice: true,
        body: `
            <p class="kicker">GOAL　0〜10分　1／8</p>
            <h1>手元で作った仕組みを、外とつなぎ、自動で回す</h1>
            <p>前回は、パソコンの中だけで社内ポータルを育てました。今日は、前回「先生のデモで見るだけ」にした4つを、自分の手で試します。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>GitHub</h3><p>ポータルを、非公開のままインターネット上に預ける</p></article>
              <article class="op"><span class="num">2</span><h3>MCP</h3><p>Notion とつなぎ、外のデータでポータルを直す</p></article>
              <article class="op"><span class="num">3</span><h3>スケジュール・プラグイン</h3><p>点検を自動で回し、作った仕組みを人に配る</p></article>
              <article class="op"><span class="num">4</span><h3>自分の仕事</h3><p>最後の20分で、「つなぐ」か「自動で回す」を1つ作る</p></article>
            </div>
            <h3>前回のポータルを開く</h3>
            <p>前回の「社内ポータル」フォルダを使います。なくなっている人は、<a href="materials/practice/portal.html" download="index.html">見本のポータル（index.html）</a>をデスクトップの「社内ポータル」フォルダに入れ直します。</p>
            ${box(`claude update
cd ~/Desktop/社内ポータル
claude`)}
            <h3>前回の設定が残っているか確かめる</h3>
            <ul>
              <li><code>/memory</code>：フォルダの CLAUDE.md と自分の設定の CLAUDE.md が並んでいるか</li>
              <li><code>/hooks</code>：前回足した「ファイルを変えたら記録する」フックが並んでいるか</li>
              <li><code>/agents</code>：点検係（サブエージェント）が並んでいるか</li>
            </ul>
            <p>足りないものがあっても大丈夫です。下を貼れば、前回の状態までそろえてくれます。</p>
            ${box(`このフォルダに、前回の講義で作ったものがそろっているか確かめてください。
・CLAUDE.md（ポータルの決まり）
・Skill の news-add（お知らせを1件足す）
・点検係のサブエージェント
・ファイルを変えたら「変更記録.txt」に日時を書くフック
足りないものがあれば、作る前に何を作るかを見せてください。`)}
            <h3>今日使うアカウント</h3>
            <ul>
              <li><strong>GitHub</strong>（ギットハブ）：ファイルを預けておく、インターネット上の置き場。github.com で無料で作れます</li>
              <li><strong>Notion</strong>（ノーション）：メモや表を書いておけるサービス。持っていない人は、3ページ目は先生の画面を見ます</li>
            </ul>
            <div class="callout">今日の講義は、自分個人のアカウントで試します。会社のアカウントでつなぐのは、7ページ目のチェックをしてからにします。</div>
          `,
        was: []
      },
      {
        id: "github",
        title: "GitHub に預ける",
        practice: true,
        body: `
            <p class="kicker">GitHub　10〜25分　2／8　練習</p>
            <h1>ポータルを、非公開のまま預ける</h1>
            <p>前回は Git で、パソコンの中にセーブポイント（コミット）を作りました。今日は、そのセーブポイントを GitHub に送ります（プッシュ）。パソコンが壊れても残り、あとのスケジュールやプラグインでも使います。</p>
            <h3>公開と非公開のちがい</h3>
            <table>
              <thead><tr><th></th><th>非公開（プライベート）</th><th>公開（パブリック）</th></tr></thead>
              <tbody>
                <tr><td>だれが見られる</td><td>自分と、自分が招いた人だけ</td><td>インターネットのだれでも</td></tr>
                <tr><td>検索に出る？</td><td>出ない</td><td>出ることがある</td></tr>
                <tr><td>使うとき</td><td>社内のもの・練習・ふつうの仕事</td><td>だれに見られてもよいものだけ</td></tr>
              </tbody>
            </table>
            <div class="callout">今日は必ず<strong>非公開</strong>で作ります。社内の内線や名前が入ったポータルは、公開にしてはいけません。</div>
            <h3>やってみる①：GitHub とつなぐ準備</h3>
            <p>GitHub の操作は、<code>gh</code>（GitHub をターミナルから使う道具）を使うと、Claude に頼めるようになります。まず入っているか Claude に聞きます。</p>
            ${box(`gh（GitHub CLI）が入っているか確かめてください。
入っていなければ、入れ方を教えてください。まだ入れないでください。`)}
            <p>入ったら、ログインだけは自分で打ちます。Claude Code の中で、先頭に <code>!</code> をつけて打つと、その場で動かせます。ブラウザが開いたら、画面の指示どおりに進めます。</p>
            ${box(`! gh auth login`)}
            <h3>やってみる②：非公開の置き場を作って送る</h3>
            ${box(`GitHub に、このポータル用の置き場（リポジトリ）を作ってください。
・名前は shanai-portal
・必ず非公開（private）にする
・作ったら、今までのコミットをプッシュする
作る前に、どんな設定で作るかを見せてください。`)}
            <p>リポジトリ＝GitHub の上の、1つのフォルダのような置き場です。</p>
            <p>終わったら、github.com を開いて shanai-portal を探します。名前の横に <strong>Private</strong> と出ていれば成功です。Public と出ていたら、すぐ先生に声をかけます。</p>
            <h3>早く終わった人へ</h3>
            <p>お知らせを1件直してコミットし、もう一度プッシュします。github.com で、セーブポイントが2つに増えていることを確かめます。</p>
            ${box(`お知らせの日付を今日にして、コミットしてからプッシュしてください。
コミットのメモは「お知らせの日付を直す」にしてください。`)}
          `,
        was: []
      },
      {
        id: "mcp",
        title: "MCP でつなぐ",
        practice: true,
        body: `
            <p class="kicker">MCP　25〜40分　3／8　練習</p>
            <h1>ほかのサービスと、差し込み口でつなぐ</h1>
            <p>MCP（エムシーピー）は、Claude とほかのサービスをつなぐ「差し込み口」です。つなぐと、Claude がそのサービスの中身を読んだり、書いたりできるようになります。前回デモで見た Notion を、今日は全員でつなぎます。</p>
            <h3>やってみる①：Notion をつなぐ</h3>
            <ol>
              <li>Claude Code を <code>/exit</code> で一度終わる</li>
              <li>ターミナルで下を打つ（Claude Code の外で打ちます）</li>
            </ol>
            ${box(`claude mcp add --transport http notion https://mcp.notion.com/mcp`)}
            <p>MCP の差し込み口を登録する命令です。https〜 は Notion の受付の住所です。</p>
            <ol start="3">
              <li><code>claude</code> で起動し、<code>/mcp</code> と打つ</li>
              <li>notion を選んでログインする（ブラウザが開きます）。どのページを見せるかを聞かれたら、練習用のページだけを選ぶ</li>
              <li>/mcp の画面で、notion が「つながっている」表示になれば成功</li>
            </ol>
            <h3>やってみる②：Notion に練習用のお知らせを書く</h3>
            <p>Notion で「ポータルのお知らせ」というページを作り、自分で2行ほどお知らせを書いておきます。例：「10月20日　健康診断の申し込みは金曜まで」。</p>
            <h3>やってみる③：読むだけ頼む</h3>
            ${box(`Notion の「ポータルのお知らせ」ページを読んで、書いてあるお知らせを一覧で見せてください。
読むだけにして、Notion もこのフォルダのファイルも変えないでください。`)}
            <p>Notion に書いたお知らせが、そのまま一覧で出てくれば成功です。</p>
            <h3>つなぐと何が変わるか</h3>
            <ul>
              <li>つないだ先の中身は、Claude が読めるようになる。見せたくないページは、つなぐときに選ばない</li>
              <li>はじめて Notion の道具を使うとき、Claude Code は「使ってよいか」を聞いてくる。中身を読んでから許可する</li>
              <li>やめたいときは <code>claude mcp remove notion</code></li>
            </ul>
            <h3>早く終わった人へ</h3>
            <p>ほかにどんな差し込み口があるかを Claude に聞いて、自分の仕事で使えそうなものを3つ挙げてもらいます。まだつながないでください。</p>
            ${box(`Claude Code の MCP でつなげる、よく使われるサービスを教えてください。
私の仕事は〔自分の仕事〕です。役に立ちそうなものを3つ、何ができるかと一緒に挙げてください。まだ何もつながないでください。`)}
          `,
        was: []
      },
      {
        id: "update",
        title: "外のデータでポータルを更新",
        practice: true,
        body: `
            <p class="kicker">更新　40〜55分　4／8　練習</p>
            <h1>読む → 案を見る → OK → 直す → セーブ</h1>
            <p>3ページ目では読むだけでした。ここでは、Notion のお知らせを使って、ポータルを実際に直します。大事なのは、人が OK するまで直させない流れです。</p>
            <ol>
              <li><strong>Shift＋Tab</strong> を押して、画面の下を「plan mode」（計画モード）にする</li>
              <li>下を貼る</li>
            </ol>
            ${box(`Notion の「ポータルのお知らせ」ページを読んで、このポータルのお知らせに足す計画を立ててください。
・どのお知らせを、どこに、どんな文で足すかを見せる
・CLAUDE.md のポータルの決まりを守る
・Notion のページは変えない`)}
            <ol start="3">
              <li>出てきた計画を読む。文や順番を直したいところがあれば、言葉で伝えて直してもらう</li>
              <li>よければ OK して、ポータルを直してもらう</li>
              <li>ブラウザで index.html を開き直し、お知らせが増えているか確かめる</li>
              <li>点検係に見てもらってから、セーブする</li>
            </ol>
            ${box(`点検係に、ポータルが CLAUDE.md の決まりを守っているか見てもらってください。
問題がなければ、コミットしてプッシュしてください。コミットのメモは「Notion のお知らせを足す」にしてください。`)}
            <p>github.com の shanai-portal で、セーブポイントが増えていれば成功です。</p>
            <div class="callout">外から持ってきた文は、そのまま信じずに目で見ます。まちがった日付や、社外に出せない内容がまざっていることがあります。</div>
            <h3>早く終わった人へ</h3>
            <p>この流れを Skill にします。前回作った news-add を見本に、notion-news（Notion のお知らせをポータルに写す）を作り、<code>/notion-news</code> で呼んで確かめます。</p>
            ${box(`Notion の「ポータルのお知らせ」から、まだポータルにないお知らせを写す手順を、Skill にしてください。名前は notion-news。
・まず、足すお知らせの案を見せて、私の OK を待つ
・Notion のページは変えない
・足したら、点検係に見てもらう
・プッシュはしない`)}
          `,
        was: []
      },
      {
        id: "schedule",
        title: "スケジュールで自動点検",
        practice: true,
        body: `
            <p class="kicker">スケジュール　55〜70分　5／8　練習</p>
            <h1>呼ばなくても、決まった時間に動かす</h1>
            <p>スケジュールは、決まった時間に Claude を自動で動かす仕組みです。Skill は「呼んだら動く」、スケジュールは「呼ばなくても動く」です。自分のパソコンが閉じていても、インターネットの上（クラウド）で動きます。</p>
            <p>そのため、クラウドの Claude は自分のパソコンの中を見られません。2ページ目で GitHub に預けたポータルを読みに行きます。</p>
            <h3>使える人と準備</h3>
            <ul>
              <li>Claude の Pro・Max・Team・Enterprise のプランで使えます。Team・Enterprise の会社は、管理者がこの機能をオンにしておく必要があります</li>
              <li>非公開の置き場を読ませるために、最初に1回だけ下を打ちます。自分の GitHub の鍵（gh のログイン）を、クラウドの Claude に渡す命令です</li>
            </ul>
            ${box(`/web-setup`)}
            <h3>やってみる①：点検だけを登録する</h3>
            <p>最初は「見て報告するだけ」にします。ファイルを変えない仕事なら、自動にしても安心です。</p>
            ${box(`/schedule 毎朝9時に、GitHub の shanai-portal のポータルを点検して報告してください。
・CLAUDE.md の決まりを守っているか
・日付が過ぎたお知らせが残っていないか
・ファイルは変えない。コミットもプッシュもしない
・報告だけする`)}
            <p>登録の前に、Claude が「いつ動かすか」「どの GitHub の置き場を使うか」「何を頼むか」を順に確かめてきます。置き場は shanai-portal を選びます。</p>
            <h3>やってみる②：今すぐ1回動かして、結果を見る</h3>
            <p>明日の朝まで待たずに、1回だけ動かして確かめます。</p>
            ${box(`/schedule run`)}
            <p>メールなどの知らせは来ません。動くたびに、claude.ai/code に会話が1つできるので、そこを開いて報告を読みます。ブラウザで <strong>claude.ai/code/routines</strong> を開くと、登録したものと、これまでに動いた記録が並んでいます。</p>
            <p>報告に「過ぎたお知らせ」などが書かれていれば成功です。</p>
            <h3>やってみる③：止め方を覚える</h3>
            <p>自動の仕組みは、止め方を知ってから使います。</p>
            ${box(`/schedule list`)}
            <ol>
              <li><code>/schedule list</code> で、登録したものが並んでいるか確かめる</li>
              <li>ブラウザで claude.ai/code/routines を開き、さっきの点検を選ぶ</li>
              <li>上にあるオン／オフのスイッチを「オフ」にする。これで止まります</li>
              <li>もう使わないときは、名前の横のメニューから <strong>Delete</strong>（消す）を選ぶ</li>
            </ol>
            <div class="callout">自動で動かすのは「見て報告する」まで。直す・送る・消すは、報告を読んだ人が決めます。</div>
            <h3>早く終わった人へ</h3>
            <p>点検の時間を「毎週月曜の朝8時」に変えます。<code>/schedule update</code> と打ち、聞かれたら新しい時間を伝えます。終わったら <code>/schedule list</code> で時間が変わっているか確かめてから、claude.ai/code/routines のスイッチで止めます。</p>
          `,
        was: []
      },
      {
        id: "plugin",
        title: "プラグインにまとめる",
        practice: true,
        body: `
            <p class="kicker">プラグイン　70〜85分　6／8　練習</p>
            <h1>作った仕組みを、1つにまとめて配る</h1>
            <p>プラグインは、CLAUDE.md の決まり・Skill・点検係・フックを1つの箱にまとめたものです。もらった人は、入れるだけで同じ仕組みが使えます。新人さんに「仕事の道具箱」を渡すイメージです。</p>
            <table>
              <thead><tr><th>今までに作ったもの</th><th>プラグインの中での役目</th></tr></thead>
              <tbody>
                <tr><td>Skill（news-add など）</td><td>呼べば動く手順</td></tr>
                <tr><td>点検係（サブエージェント）</td><td>決まりを守っているかを見る係</td></tr>
                <tr><td>フック</td><td>変えたら記録する、などの自動の決まり</td></tr>
              </tbody>
            </table>
            <h3>やってみる①：箱にまとめる</h3>
            ${box(`このフォルダで作った Skill・点検係・フックを、1つのプラグインにまとめてください。名前は portal-kit。
・ポータルのフォルダとは別に、デスクトップに「portal-kit」フォルダを作って、そこにまとめる
・まとめる前に、何をどのファイルに入れるかを見せる
・内線や名前など、社内の情報はプラグインに入れない
・人に配れるように、カタログ（.claude-plugin/marketplace.json）と中身（plugins/portal-kit）の2段の形にする。カタログの名前は portal-tools
・できたら claude plugin validate で形を点検する`)}
            <p>配るには、決まった形のフォルダが必要です。「カタログ」（どんなプラグインがあるかの一覧）と「中身」（Skill・点検係・フック）の2段になります。</p>
            ${box(`portal-kit/
├── .claude-plugin/marketplace.json  … カタログ
└── plugins/portal-kit/
    ├── .claude-plugin/plugin.json    … 名前と説明
    ├── skills/news-add/SKILL.md      … Skill
    ├── agents/checker.md             … 点検係
    └── hooks/hooks.json              … フック`)}
            <p>点検の最後に <strong>✔ Validation passed</strong>（形に問題なし）と出れば合格です。</p>
            <h3>やってみる②：GitHub に送る</h3>
            <p>プラグインは、GitHub の置き場から配ります。2ページ目と同じく、<strong>非公開</strong>のリポジトリにします。</p>
            ${box(`デスクトップの portal-kit フォルダを、GitHub に非公開のリポジトリとして送ってください。名前は portal-kit にしてください。
作る前に、どんな設定で作るかを見せてください。`)}
            <p>非公開なので、となりの人を招きます。github.com の portal-kit を開き、Settings → Collaborators（いっしょに使う人）から、となりの人の GitHub の名前を足します。</p>
            <h3>やってみる③：となりの人が入れる</h3>
            <p>ここからは、もらう人が自分のパソコンでします。</p>
            <ol>
              <li>メールで届いた招待を受ける</li>
              <li>GitHub にログインしておく（2ページ目の <code>! gh auth login</code>）。非公開の置き場は、ログインしていないと読めません</li>
              <li>Claude Code で、カタログを登録する（〈持ち主〉は、配る人の GitHub の名前）</li>
            </ol>
            ${box(`/plugin marketplace add 〈持ち主〉/portal-kit`)}
            <p><strong>Successfully added marketplace: portal-tools</strong> と出れば、カタログの登録は成功です。</p>
            <ol start="4">
              <li>プラグインを入れる</li>
            </ol>
            ${box(`/plugin install portal-kit@portal-tools`)}
            <ol start="5">
              <li>くわしい画面が開くので、入れる範囲を選んで <strong>Install</strong> を押す。迷ったら、自分だけ（user）を選ぶ</li>
              <li>「Run /reload-plugins to apply.」と出たら、<code>/reload-plugins</code> と打つ</li>
            </ol>
            <p>プラグインの Skill は、頭にプラグインの名前がつきます。入れた人が、自分のポータルで <code>/portal-kit:news-add</code> を呼べたら成功です。</p>
            <h3>/plugin の画面の見方</h3>
            <p><code>/plugin</code> と打つと、4つのタブが出ます。</p>
            <ul>
              <li><strong>Discover</strong>：登録したカタログにある、入れられるプラグイン</li>
              <li><strong>Installed</strong>：入れたもの。止める・新しくする・外す（Uninstall）はここから</li>
              <li><strong>Marketplaces</strong>：登録したカタログ。自分で作ったカタログは、自動で新しくならないので、直したら Update marketplace を押す</li>
              <li><strong>Errors</strong>：うまく読めなかったときの理由</li>
            </ul>
            <div class="callout">人からもらったプラグインは、入れる前に中身を見ます。「このプラグインは何をする？削除や送信をする所はある？」と Claude に聞いてから入れます。</div>
          `,
        was: []
      },
      {
        id: "safety",
        title: "安全に任せる範囲",
        body: `
            <p class="kicker">安全　85〜100分　7／8</p>
            <h1>つなぐほど、任せる範囲を決めておく</h1>
            <p>今日は、Claude ができることが一気に増えました。GitHub に送れる、Notion を読める、時間になると勝手に動く。便利になった分だけ、「どこまで任せるか」を先に決めておきます。</p>
            <h3>今日つないだものの整理</h3>
            <table>
              <thead><tr><th>つないだもの</th><th>Claude ができること</th><th>人が決めること</th></tr></thead>
              <tbody>
                <tr><td>GitHub</td><td>コミット・プッシュ・置き場を作る</td><td>公開にするか。だれを招くか</td></tr>
                <tr><td>Notion（MCP）</td><td>選んだページを読む・書く</td><td>どのページを見せるか。書いてよいか</td></tr>
                <tr><td>スケジュール</td><td>決まった時間に点検して報告する</td><td>報告を読んで、直すかどうか</td></tr>
                <tr><td>プラグイン</td><td>人の Claude に同じ仕組みを入れる</td><td>だれに配るか。もらったものを入れるか</td></tr>
              </tbody>
            </table>
            <h3>やってみる：禁止を登録する</h3>
            <p>前回の権限のページと同じく、絶対にしてほしくないことは設定ファイルに「禁止」として登録します。</p>
            <p>「公開にするときだけ止める」という細かい決め方は、うまく効かないことがあります。GitHub の置き場を<strong>作る・設定を変える・消す</strong>を、まるごと禁止にするほうが確実です。今日の置き場はもう作り終わっているので、禁止にしても困りません。</p>
            ${box(`このフォルダの .claude/settings.json に、次の3つを「禁止」（deny）として登録してください。
・Bash(gh repo create *)　GitHub の置き場を作る
・Bash(gh repo edit *)　置き場の設定を変える（公開にするのもここ）
・Bash(gh repo delete *)　置き場を消す
登録する前に、何を書くかを見せてください。`)}
            <ol>
              <li>登録できたら <code>/exit</code> で終わり、<code>claude</code> で起動し直す</li>
              <li>「shanai-portal を公開にして」と頼む</li>
              <li>Claude が、禁止されているのでできない、と答えれば成功。github.com で shanai-portal が Private のままか確かめる</li>
            </ol>
            <div class="callout">この禁止は「うっかり」を防ぐためのものです。Claude が別の書き方の命令を使うと通ってしまうことがあり、完全な壁ではありません。大事な置き場は、GitHub の側でも、消せる人・公開にできる人を絞っておきます。</div>
            <h3>会社のアカウントでつなぐ前のチェック</h3>
            <ol>
              <li>会社で、そのサービスを Claude とつないでよいか（情報の担当の人に聞く）</li>
              <li>つなぐと、Claude にどの情報が見えるか（お客さまの名前・お金・人の情報は入っていないか）</li>
              <li>見せる範囲を、ページやフォルダで絞れるか</li>
              <li>書く・送る・消すことまでできるか。できるなら、禁止を登録したか</li>
              <li>やめ方（つなぎを外す方法）を知っているか</li>
            </ol>
            <div class="callout">迷ったら、つながない。読むだけから始めて、慣れてから広げます。</div>
          `,
        was: []
      },
      {
        id: "practice",
        title: "自分の仕事で1つ作る・まとめ",
        practice: true,
        body: `
            <p class="kicker">実践　100〜120分　8／8　練習</p>
            <h1>自分の仕事で、「つなぐ」か「自動で回す」を1つ</h1>
            <p>自分の業務のフォルダを開き、今日の手順で1つ作ります。どちらにするか迷ったら、下を貼って Claude に一緒に考えてもらいます。</p>
            ${box(`このフォルダは〔自分の仕事の内容〕に使っています。
私の仕事で、次のどちらかを1つ作りたいです。
・つなぐ：よく見るサービスを MCP でつないで、読むだけの作業を任せる
・自動で回す：毎日・毎週の点検を、スケジュールで報告だけさせる
まず私に質問して、どちらがよいか案を出してください。
作る前に、何をどう作るかを見せてください。
ファイルの削除と、外への送信・公開はしないでください。`)}
            <h3>今日やったこと</h3>
            <ul>
              <li>ポータルを GitHub の非公開の置き場に預け、プッシュした</li>
              <li>MCP で Notion をつなぎ、まず読むだけを頼んだ</li>
              <li>計画モードで案を見てから、Notion のお知らせをポータルに足した</li>
              <li>スケジュールで、毎朝の点検を「報告だけ」で登録し、止め方も覚えた</li>
              <li>Skill・点検係・フックをプラグインにまとめ、となりの人に配った</li>
              <li>つないだものごとに、人が決めることを整理し、禁止を登録した</li>
            </ul>
            <p>公開・送信・削除は人が決めます。Claude には計画と下書き、自動で動かすのは点検と報告まで。</p>
          `,
        was: []
      }
    ]
  };
})();
