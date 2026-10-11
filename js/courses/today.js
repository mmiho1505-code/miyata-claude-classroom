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
            <p class="kicker">GOAL　0〜10分　1／8</p>
            <h1>コワークで作った社内ポータルを、任せられる形にする</h1>
            <p>前回コワークで作った社内ポータルを、今日は Claude Code で直していきます。同じ説明をしない、勝手に動かせない、お知らせの追加は呼ぶだけにする。そのための仕組みを、手を動かして学びます。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>CLAUDE.md</h3><p>毎回の説明を、ファイルに書いて省く</p></article>
              <article class="op"><span class="num">2</span><h3>文脈と権限</h3><p>会話の中身と、勝手に動かない範囲を管理する</p></article>
              <article class="op"><span class="num">3</span><h3>Skill</h3><p>くり返す作業を、名前で呼べるようにする</p></article>
              <article class="op"><span class="num">4</span><h3>自分の仕事</h3><p>最後の20分で、自分用を1つずつ作る</p></article>
            </div>
            <h3>ポータルをフォルダに入れる</h3>
            <p>デスクトップに「社内ポータル」というフォルダを作り、前回のポータルを index.html という名前で入れます。前回の会話の続きに、次のように頼むと作ってくれます。</p>
            ${box(`このポータルを1つのHTMLファイルにして、デスクトップの「社内ポータル」フォルダに index.html という名前で保存してください。`)}
            <p>前回のポータルが見つからない人は、<a href="materials/practice/portal.html" download="index.html">見本のポータル（index.html）</a>をダウンロードして、同じフォルダに入れます。</p>
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
            <p class="kicker">CLAUDE.md　10〜30分　2／8　練習</p>
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
・見た目は今のまま（落ち着いた緑、文字は大きめ）。スマホでも読めるように
・公開（アップロード）と、ファイルの削除はしない
・CLAUDE.md は短く保つ。長い説明は別ファイルにして @ で読み込む`)}
            <p>あとでメモを見たり直したりしたいときは <code>/memory</code> と打ちます。余裕があれば、自分の設定のほうに「どのフォルダでも守ってほしいこと」を3行だけ書きます。</p>
            <p>慣れてきたら：メモが長くなったら別ファイルに分け、<code>@ファイル名</code> で読み込ませます。特定の場所だけのルールは <code>.claude/rules/</code> に置けます。</p>
          `,
        was: []
      },
      {
        id: "context",
        title: "会話の文脈を管理する",
        practice: true,
        body: `
            <p class="kicker">文脈　30〜45分　3／8　練習</p>
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
          `,
        was: []
      },
      {
        id: "break",
        title: "休憩",
        body: `
            <p class="kicker">休憩　45〜50分　4／8</p>
            <h1>5分休憩</h1>
            <p>ここまでで、CLAUDE.md と会話の管理ができました。後半は、勝手に動かない範囲を決めて、くり返す作業を Skill にします。</p>
          `,
        was: []
      },
      {
        id: "safety",
        title: "権限と計画モード",
        practice: true,
        body: `
            <p class="kicker">権限　50〜70分　5／8　練習</p>
            <h1>勝手に動かない範囲を決める</h1>
            <p><strong>Shift＋Tab</strong> で動き方（権限モード）を切り替えます。大きな変更は、計画だけ出させて読んでから進めます。</p>
            ${box(`よく使うリンクに「経費精算」を足し、終わった予定を消したいです。まだファイルは変えずに、どこをどう直すかの計画だけ出してください。`)}
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
          `,
        was: []
      },
      {
        id: "extend",
        title: "Skill を作って呼ぶ",
        practice: true,
        body: `
            <p class="kicker">Skill　70〜90分　6／8　練習</p>
            <h1>くり返す作業は、名前で呼ぶ</h1>
            <p>Skill は <code>.claude/skills/〈名前〉/SKILL.md</code> に置きます。先頭に name と description を書き、<code>/名前</code> で呼びます。自分のコマンドも、今は Skill にまとまっています。</p>
            ${box(`社内ポータルにお知らせを1件追加する手順を、Skill にしてください。名前は news-add。
・日付と本文を聞いてから作業する
・一番上に足す。4件目になったら、一番古いものを消してよいか私に聞く
・追加したら、スマホの幅でも崩れていないか確認する
・公開（アップロード）はしない`)}
            <p>できたら <code>/news-add</code> と打って、実際にお知らせを1件追加します。ブラウザで index.html を開き直して確かめます。思いどおりでなければ、SKILL.md を直してもう一度呼びます。</p>
          `,
        was: []
      },
      {
        id: "demo",
        title: "サブエージェント・フック・MCP（見るだけ）",
        body: `
            <p class="kicker">デモ　90〜100分　7／8</p>
            <h1>もっと任せたくなったときの道具</h1>
            <p>今日は先生のデモを見るだけです。使いどころだけ覚えます。</p>
            <ul>
              <li><strong>サブエージェント</strong>：<code>.claude/agents/</code>。調べものなど、役割を分けて任せる</li>
              <li><strong>フック</strong>：ファイルを変えた後など、決まったタイミングで自動で動かす</li>
              <li><strong>MCP</strong>：外のサービスとつなぐ。<code>claude mcp add</code> で追加</li>
            </ul>
          `,
        was: []
      },
      {
        id: "wrap",
        title: "自分の仕事で1つ作る・まとめ",
        practice: true,
        body: `
            <p class="kicker">実践　100〜120分　8／8　練習</p>
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
            </ul>
            <div class="callout">公開・送信・削除は人が決めます。Claude には計画と下書きまで。</div>
          `,
        was: []
      }
    ]
  };
})();
