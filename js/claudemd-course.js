(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.claudemd = {
    id: "claudemd",
    title: "CLAUDE.md の作り方",
    subtitle: "フォルダのルールブック。一度書くと、毎回の説明が短くなる",
    duration: "約30分",
    audience: "Claude Code が入った人／ホームページや道具のフォルダを使う人",
    lessons: [
      {
        id: "goal",
        title: "結論",
        body: `
            <p class="kicker">GOAL　1／11</p>
            <h1>CLAUDE.md は、このフォルダの取扱説明書</h1>
            <p>新しいチャットを開きます。また「うちの色は紺と白。作る前に計画を見せて」と打つところです。その説明を、フォルダのいちばん上の <strong>CLAUDE.md</strong> に書いておけば、毎回読まれます。</p>
            <p>ファイル名は大文字です。Claude Code が作業するとき、毎回これを読みます。</p>
            <div class="ops">
              <article class="op"><span class="num">何</span><h3>何を書く</h3><p>会社名・目的・色や言葉づかい・やってほしいこと・やってはいけないこと</p></article>
              <article class="op"><span class="num">効</span><h3>効き目</h3><p>毎回「うちはこうして」と説明しなくてよい</p></article>
              <article class="op"><span class="num">育</span><h3>育て方</h3><p>足りない行を1つ足す。長くしすぎない</p></article>
            </div>
            <div class="callout">ゼロから自分で書かなくて大丈夫です。Claude に質問させてから作ってもらいます。黒い画面で <code>claude</code> と打ったあと、下のお願い文を貼ります。</div>
            <p>まだ入れていない人は、先に <a href="#/course/code" data-link>Windows編</a> か <a href="#/course/codemac" data-link>Mac編</a> です。座学の意味だけ先に知りたい人は <a href="#/course/mdbase" data-link>CLAUDE.mdの基礎</a> です。Skills や Rules まで進む人は、あとで <a href="#/course/applied" data-link>応用編</a> へ。</p>
          `
      },
      {
        id: "where",
        title: "置く場所",
        body: `
            <p class="kicker">場所　2／11</p>
            <h1>いちばん上のフォルダに、1枚</h1>
            <p>ホームページ用のフォルダを開きます。請求書用でも同じです。そのフォルダで Claude Code を起動します。<code>CLAUDE.md</code> は直下です。奥のフォルダに隠しません。</p>
            <ol>
              <li>作業するフォルダを開く（ホームページ用、請求書用など）</li>
              <li>そのフォルダで Claude Code を起動する</li>
              <li><code>CLAUDE.md</code> はそのフォルダの直下。奥のフォルダに隠さない</li>
            </ol>
            <p>例です。短いほど読みやすいです。</p>
            ${box(`# このプロジェクトについて
・目的：社内の請求書を自動生成
・出力：PDF、1社1ファイル
・文体：丁寧・簡潔
・禁止：顧客名を外部に出さない`)}
            <div class="callout">ファイル名を <code>claude.md</code> や <code>CLOUDEMD</code> にしないでください。Claude が見つける名前は <code>CLAUDE.md</code> です。</div>
            <p>作ったあとの開き方は、あとで「どこから見る」です。Cursor の左の一覧（Ctrl／⌘＋B）のいちばん上です。</p>
          `
      },
      {
        id: "safety",
        title: "書いてはいけないこと",
        body: `
            <p class="kicker">安全　3／11</p>
            <h1>ルールブックに、秘密は書かない</h1>
            <p>口座番号やパスワードを、CLAUDE.md に書きたくなります。書かないでください。書いてよいのは方針です。「電話番号は変更しない」「作る前に計画を見せる」です。</p>
            <ul>
              <li>パスワード、APIキー、口座番号</li>
              <li>他人のマイナンバーや、顧客の個人情報が並んだ名簿</li>
              <li>「送ってよい」「消してよい」と先に許可してしまう文</li>
            </ul>
            <p>書いてよいのは、方針です。「電話番号は変更しない」「作る前に計画を見せる」「元のファイルは上書きしない」など。</p>
            <div class="callout warn">削除・送信・公開は、CLAUDE.md に「勝手にしてよい」と書かないでください。その都度、人が見てからにします。</div>
          `
      },
      {
        id: "ask",
        title: "頼んで作ってもらう",
        practice: true,
        body: `
            <p class="kicker">作り方　4／11　練習</p>
            <h1>先に質問させる</h1>
            <p>「うち用のルールを作って」だけだと、会社名も目的も推測されます。あとで直す量が増えます。先に、会社名・目的・守ってほしいことを聞いてもらいます。</p>
            ${box(`このフォルダで作業するときのルールをまとめたCLAUDE.mdを作ってください。作る前に、会社名・目的・守ってほしいことを私に質問してください。`)}
            <p>聞かれたら、知っている範囲で答えます。分からない項目は「まだ決めていない」で構いません。</p>
          `
      },
      {
        id: "init",
        title: "自動で下書き",
        practice: true,
        body: `
            <p class="kicker">コマンド　5／11　練習</p>
            <h1>/init で下書きを作る</h1>
            <p>黒い画面の入力欄に <code>/init</code> と打ちます。フォルダの中身を見て、下書きを作ります。</p>
            ${box(`/init`)}
            <p>出てきた文を、自分の目で読みます。違う行は消すか、次のページの記入例で書き直します。下書きのまま公開・納品には使いません。</p>
            <p>ファイルができたあとは、次のページ「どこから見る」です。</p>
          `
      },
      {
        id: "view",
        title: "どこから見る",
        body: `
            <p class="kicker">見方　6／11</p>
            <h1>作った CLAUDE.md は、左の一覧から開く</h1>
            <p>作ったのに、チャットの履歴を探しています。そこには出ません。claude.ai の設定にも出ません。作業フォルダの中のファイルです。</p>
            <ol>
              <li>Cursor の左に、フォルダの中身の一覧が出ます。無いときは Windows は <kbd>Ctrl</kbd>＋<kbd>B</kbd>、Mac は <kbd>⌘</kbd>＋<kbd>B</kbd></li>
              <li>いちばん上（奥のフォルダではない）に <code>CLAUDE.md</code> があるか見る</li>
              <li>その名前を<strong>クリック</strong>すると、真ん中に本文が出ます</li>
            </ol>
            <div class="ops">
              <article class="op"><span class="num">C</span><h3>Cursor</h3><p>左の一覧 → CLAUDE.md をクリック。いちばん確実です</p></article>
              <article class="op"><span class="num">F</span><h3>フォルダ</h3><p>Mac は Finder、Windows はエクスプローラー。作業フォルダを開くと同じファイルがあります</p></article>
              <article class="op"><span class="num">/</span><h3>Claude Code</h3><p>読まれている内容は <code>/memory</code>。本文を直すときは、左の一覧から開きます</p></article>
            </div>
            <div class="qa">
              <p class="qa-q">左に何も無い</p>
              <p>Ctrl または ⌘ と B を同時押し。それでも無ければ「ファイル」→「フォルダーを開く」で、今の作業フォルダを選び直す</p>
            </div>
            <div class="qa">
              <p class="qa-q">CLAUDE.md が無い</p>
              <p>名前が claude.md になっていないか。奥のフォルダに入っていないか。無ければ <code>/init</code> をもう一度</p>
            </div>
            <div class="callout">見るだけなら、ファイルを消さないでください。直すときは、開いた本文を自分の目で読んでから頼みます。</div>
          `
      },
      {
        id: "fill",
        title: "記入例で作る",
        practice: true,
        body: `
            <p class="kicker">型　7／11　練習</p>
            <h1>〔　〕を自分の言葉に変える</h1>
            <p>会社名も色も、まだ空欄のままです。〔　〕だけ自分の言葉に変えて送ります。色やページ数が決まっていなければ、その行は消します。</p>
            <p>ホームページ用の例です。請求書フォルダなら、目的と禁止だけ差し替えます。</p>
            ${box(`次の内容でCLAUDE.mdを作ってください。見出しと箇条書きで、短くまとめてください。
・会社名：〔株式会社〇〇〕（〔〇〇市〕）
・目的：〔会社のホームページを作って更新する〕
・色は〔紺と白〕、スマホで見やすくする
・作る前に計画を見せて、私の承認を待つ
・元のファイルは上書きしない
・専門用語を使わずに説明する`)}
            <p>色やページ数がまだ決まっていなければ、その行は消して送ります。</p>
          `
      },
      {
        id: "add",
        title: "ルールを足す",
        practice: true,
        body: `
            <p class="kicker">育てる　8／11　練習</p>
            <h1>新しい注意は、1行足す</h1>
            <p>今日、電話番号が書き換えられました。長い作文は不要です。「電話番号は変更しない」を1行足します。</p>
            ${box(`今の注意点（〔電話番号は変更しない〕）をCLAUDE.mdに追加してください。`)}
            <p>〔　〕の中だけ、今日の注意に変えます。例：住所を変えない、写真フォルダは消さない、お知らせの日付は今日にする。</p>
          `
      },
      {
        id: "review",
        title: "中身を見直す",
        practice: true,
        body: `
            <p class="kicker">点検　9／11　練習</p>
            <h1>まだ直させない</h1>
            <p>「全部直して」と頼むと、大事な行が消えることがあります。先に、長い所・あいまいな所・矛盾を一覧にしてもらいます。</p>
            ${box(`CLAUDE.mdを読んで、長すぎる所・あいまいな所・ルール同士が矛盾している所を一覧にしてください。まだ直さないでください。`)}
            <p>一覧を見て、直してよい行だけ「この3つを直して」と続けます。</p>
          `
      },
      {
        id: "memory",
        title: "読み込まれているか",
        practice: true,
        body: `
            <p class="kicker">確認　10／11　練習</p>
            <h1>/memory で確かめる</h1>
            <p>新しいチャットを始めました。同じフォルダなら、また読まれます。出てこなければ、ファイル名と置く場所を見直します。</p>
            <p>今の前提が読まれているかを見るコマンドです。</p>
            ${box(`/memory`)}
            <p>CLAUDE.md の内容が出てこなければ、ファイル名と置く場所を見直します。いちばん上か、名前が <code>CLAUDE.md</code> か。</p>
            <p>新しいチャットを始めたあとも、同じフォルダならまた読まれます。前の会話の続きではないので、ルールはファイルに残しておく方が確実です。</p>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">まとめ　11／11</p>
            <h1>作る → 見る → 足す → 見直す</h1>
            <p>フォルダのいちばん上に1枚。左の一覧から開いて読む。秘密は書かない。注意が分かったら1行足します。</p>
            <ol>
              <li>フォルダのいちばん上に <code>CLAUDE.md</code></li>
              <li>Cursor の左の一覧（Ctrl／⌘＋B）から開いて本文を見る</li>
              <li>秘密は書かない。計画を見せてから進める、を書く</li>
              <li>質問してから作る。または <code>/init</code> の下書きを直す</li>
              <li>注意が分かったら1行足す。<code>/memory</code> で読まれているか見る</li>
            </ol>
            <p>お願い文の一覧は <a href="#/prompts" data-link>テキストで学ぶ</a> の「⑤ CLAUDE.md」にもあります。次は <a href="#/course/applied" data-link>応用編</a> で Skills と Rules です。</p>
          `
      }
    ]
  };

  Object.assign(CLASSROOM.quizzes, {
    claudemd: [
      {
        q: "CLAUDE.md の役割は？",
        choices: ["パソコンの電源を切るメモ", "そのフォルダのルールブック。毎回読まれる前提", "SNSの投稿文"],
        a: 1,
        explain: "いちばん上に置くと、毎回の長い説明が減ります。"
      },
      {
        q: "ファイル名で正しいのは？",
        choices: ["CLOUDEMD", "CLAUDE.md", "readme.txt なら何でも"],
        a: 1,
        explain: "大文字の CLAUDE.md です。別名だと見つからないことがあります。"
      },
      {
        q: "書いてはいけないものは？",
        choices: ["目的と色の希望", "口座番号やパスワード", "作る前に計画を見せること"],
        a: 1,
        explain: "秘密はルールブックに書きません。"
      },
      {
        q: "ゼロから書くとき、先にやるとよいことは？",
        choices: ["公開まで自動で進めてと書く", "会社名・目的・守ってほしいことを先に質問してもらう", "顧客名簿を全部貼る"],
        a: 1,
        explain: "推測で書かれると、あとで直す量が増えます。"
      },
      {
        q: "中身を点検するとき、最初に頼むのは？",
        choices: ["全部いきなり書き換えて", "長い所・あいまいな所・矛盾を一覧。まだ直さない", "ファイルを消して"],
        a: 1,
        explain: "一覧を見てから、直す行だけ頼みます。"
      },
      {
        q: "作った CLAUDE.md は、どこから見ますか？",
        choices: ["claude.ai の設定画面", "Cursor の左のファイル一覧（いちばん上）。クリックすると本文が出る", "PowerShell の名前"],
        a: 1,
        explain: "チャットの履歴には出ません。Ctrl または ⌘ と B で左の一覧を出します。"
      }
    ]
  });
})();
