(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.mdbase = {
    id: "mdbase",
    title: "CLAUDE.mdの基礎",
    subtitle: "Claude Codeに渡す業務マニュアル。なくても動く。あると安定する",
    duration: "約5分",
    audience: "Claude Code を使う人／座学。手は次の作り方で",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">座学　約5分</p>
            <h1>名前と役割だけ、覚えて帰る</h1>
            <p>この回は座学です。ファイルを今すぐ作らなくて大丈夫です。アプリ作りのセクションで、実際に一緒に作ります。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>何か</h3><p>Claude Code に渡す業務マニュアル</p></article>
              <article class="op"><span class="num">2</span><h3>.md</h3><p>ほぼ普通のテキスト。見出しや太字の記号</p></article>
              <article class="op"><span class="num">3</span><h3>ポイント</h3><p>必須ではない。自分で書かなくてよい</p></article>
            </div>
            <p>手を動かす回は <a href="#/course/claudemd" data-link>CLAUDE.md の作り方</a> です。次の座学は Claude Code Skills の予定です。</p>
          `
      },
      {
        id: "what",
        title: "CLAUDE.mdとは",
        body: `
            <p class="kicker">ことば</p>
            <h1>Claude Code に渡す「業務マニュアル」</h1>
            <p>Claude Code は<strong>起動するたびに、このファイルを自動で読み込みます</strong>。毎回同じ説明をしなくても、決めたルールどおりに動いてくれます。</p>
            <p>たとえば、スーパーのアルバイトに「レジでは袋が必要か聞く」というルールを伝えておくのと同じです。ルールがないと、同じミスを繰り返したり、意図と違う動きをしたりします。</p>
            <div class="callout">ファイル名は <code>CLAUDE.md</code>（大文字）です。作業フォルダのいちばん上に置きます。</div>
          `
      },
      {
        id: "md",
        title: "「.md」とは",
        body: `
            <p class="kicker">形式</p>
            <h1>Markdown。中身はほぼ普通のテキスト</h1>
            <p>Markdown（マークダウン）は、記号を使って見出しや太字を表す書き方です。難しいプログラムではありません。</p>
            <p>記号の意味です。</p>
            ${box(`## 見出し　→　見出しになる
**太字**　→　太字になる
- 項目　→　箇条書きになる`)}
            <p>この教室のコピー枠も、同じようなテキストです。記号はそのまま貼って大丈夫です。</p>
          `
      },
      {
        id: "write",
        title: "どんなことを書くのか",
        body: `
            <p class="kicker">中身</p>
            <h1>禁止・使うもの・作業のルール</h1>
            <ul>
              <li>「本番のデータベースには触らないで」のような<strong>禁止事項</strong></li>
              <li>使う技術や、よく使うコマンド</li>
              <li>作業のルールや、プロジェクトの説明</li>
            </ul>
            <p>パスワードや口座番号は書きません。方針だけです。</p>
          `
      },
      {
        id: "point",
        title: "ポイント",
        body: `
            <p class="kicker">大事なこと</p>
            <h1>必須ではない。自分で書かなくてよい</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>必須ではない</h3><p>最近の Claude Code は賢いので、なくても動きます。日本語での出力なども、書かなくてもしてくれることが多いです。ただし、<strong>あった方が安定します</strong>。</p></article>
              <article class="op"><span class="num">2</span><h3>自分で書かなくてよい</h3><p>Claude Code で <code>/init</code> と入力すると、そのフォルダの内容を見て自動で作ってくれます。</p></article>
              <article class="op"><span class="num">3</span><h3>この講座では</h3><p>アプリ作りのセクションで、実際に一緒に作ります。今日は意味が分かれば十分です。</p></article>
            </div>
            ${box(`/init`)}
          `
      },
      {
        id: "example",
        title: "ホームページ用の例",
        practice: true,
        body: `
            <p class="kicker">参考</p>
            <h1>宮田財務のホームページ用フォルダなら</h1>
            <p>たとえば、次のような中身になります。コピーして、あとで CLAUDE.md に貼れます。</p>
            ${box(`# 宮田財務 ホームページ
## ルール
- 対象は中小企業の経営者。専門用語には必ず説明を添える
- スマホでも見やすくする
- 既存ファイルを消す前に必ず確認する`)}
            <div class="callout">会社名やルールは、自分の現場の言葉に変えてください。長い作文は不要です。</div>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">覚えておくこと</p>
            <h1>マニュアル。なくても動く。あると安定</h1>
            <ul>
              <li><code>CLAUDE.md</code> は、Claude Code に渡す業務マニュアル</li>
              <li>起動のたびに自動で読む。毎回の長い説明が減る</li>
              <li><code>.md</code> はマークダウン。ほぼ普通のテキスト</li>
              <li>必須ではない。<code>/init</code> で下書きできる</li>
            </ul>
            <p>手を動かすのは <a href="#/course/claudemd" data-link>CLAUDE.md の作り方</a>。次の座学は Claude Code Skills の予定です。</p>
            <p><a class="btn-orange" href="#/course/claudemd" data-link>作り方へ</a>
            <a class="btn-dark" href="#/" data-link>ホームへ</a></p>
          `
      }
    ]
  };

  Object.assign(CLASSROOM.quizzes, {
    mdbase: [
      {
        q: "CLAUDE.md がいちばん近いものは？",
        choices: ["パソコンの電源ボタン", "Claude Code に渡す業務マニュアル", "請求書の宛名"],
        a: 1,
        explain: "起動のたびに自動で読みます。毎回同じ説明をしなくてよくなります。"
      },
      {
        q: "「.md」の中身は？",
        choices: ["ほぼ普通のテキスト（見出しや太字の記号つき）", "必ずプログラムを書くファイル", "写真だけ入るフォルダ"],
        a: 0,
        explain: "Markdown です。## が見出し、** ** が太字、- が箇条書きです。"
      },
      {
        q: "CLAUDE.md は必須ですか？",
        choices: ["必須。無いと起動できない", "必須ではない。なくても動く。あった方が安定する", "有料プランの人だけ必須"],
        a: 1,
        explain: "なくても動きます。/init で下書きもできます。あった方が安定します。"
      }
    ]
  });
})();
