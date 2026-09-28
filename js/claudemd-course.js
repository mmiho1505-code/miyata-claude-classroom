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
    duration: "約25分",
    audience: "Claude Code が入った人／ホームページや道具のフォルダを使う人",
    lessons: [
      {
        id: "goal",
        title: "結論",
        body: `
            <p class="kicker">GOAL　1／10</p>
            <h1>CLAUDE.md は、このフォルダの取扱説明書</h1>
            <p>ファイル名は <strong>CLAUDE.md</strong> です（大文字）。プロジェクトのいちばん上のフォルダに置きます。Claude Code が作業するとき、毎回これを読みます。</p>
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
            <p class="kicker">場所　2／10</p>
            <h1>いちばん上のフォルダに、1枚</h1>
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
          `
      },
      {
        id: "safety",
        title: "書いてはいけないこと",
        body: `
            <p class="kicker">安全　3／10</p>
            <h1>ルールブックに、秘密は書かない</h1>
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
            <p class="kicker">作り方　4／10　練習</p>
            <h1>先に質問させる</h1>
            <p>推測で書かれると、あとで直す量が増えます。会社名・目的・守ってほしいことを、先に聞いてもらいます。</p>
            ${box(`このフォルダで作業するときのルールをまとめたCLAUDE.mdを作ってください。作る前に、会社名・目的・守ってほしいことを私に質問してください。`)}
            <p>聞かれたら、知っている範囲で答えます。分からない項目は「まだ決めていない」で構いません。</p>
          `
      },
      {
        id: "init",
        title: "自動で下書き",
        practice: true,
        body: `
            <p class="kicker">コマンド　5／10　練習</p>
            <h1>/init で下書きを作る</h1>
            <p>フォルダの中身を見て、下書きを作るコマンドです。入力欄に次だけ打ちます。</p>
            ${box(`/init`)}
            <p>出てきた文を、自分の目で読みます。違う行は消すか、次のページの記入例で書き直します。下書きのまま公開・納品には使いません。</p>
          `
      },
      {
        id: "fill",
        title: "記入例で作る",
        practice: true,
        body: `
            <p class="kicker">型　6／10　練習</p>
            <h1>〔　〕を自分の言葉に変える</h1>
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
            <p class="kicker">育てる　7／10　練習</p>
            <h1>新しい注意は、1行足す</h1>
            <p>作業して分かった注意点は、その都度足します。長い作文は不要です。</p>
            ${box(`今の注意点（〔電話番号は変更しない〕）をCLAUDE.mdに追加してください。`)}
            <p>〔　〕の中だけ、今日の注意に変えます。例：住所を変えない、写真フォルダは消さない、お知らせの日付は今日にする。</p>
          `
      },
      {
        id: "review",
        title: "中身を見直す",
        practice: true,
        body: `
            <p class="kicker">点検　8／10　練習</p>
            <h1>まだ直させない</h1>
            <p>長い所・あいまいな所・ルール同士の矛盾を、先に一覧にしてもらいます。一気に書き換えられると、大事な行が消えることがあります。</p>
            ${box(`CLAUDE.mdを読んで、長すぎる所・あいまいな所・ルール同士が矛盾している所を一覧にしてください。まだ直さないでください。`)}
            <p>一覧を見て、直してよい行だけ「この3つを直して」と続けます。</p>
          `
      },
      {
        id: "memory",
        title: "読み込まれているか",
        practice: true,
        body: `
            <p class="kicker">確認　9／10　練習</p>
            <h1>/memory で確かめる</h1>
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
            <p class="kicker">まとめ　10／10</p>
            <h1>作る → 足す → 見直す</h1>
            <ol>
              <li>フォルダのいちばん上に <code>CLAUDE.md</code></li>
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
      }
    ]
  });
})();
