(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.skillbase = {
    id: "skillbase",
    title: "CLAUDE.mdとSkillsの基礎",
    subtitle: "毎回読むマニュアルと、呼んだときだけ動く手順の型",
    duration: "約10分",
    audience: "Claude Code を使う人／座学。手は応用編で",
    lessons: [
      {
        id: "goal",
        title: "CLAUDE.mdとは",
        was: ["mdbase/goal", "mdbase/what", "mdbase/md"],
        body: `
            <p class="kicker">座学　1／6</p>
            <h1>Claude Code に渡す業務マニュアル</h1>
            <p>Claude Code を開くたびに、「本番のデータベースには触らないで」から説明し直しています。</p>
            <p>その約束を1枚に書いたのが <code>CLAUDE.md</code> です。作業フォルダのいちばん上に置くと、Claude Code が<strong>起動のたびに自動で読みます</strong>。今日はファイルを作らなくて大丈夫です。</p>
            <p><code>.md</code> は Markdown。ほぼ普通のテキストで、記号で見出しや太字を表します。</p>
            ${box(`## 見出し　→　見出しになる
**太字**　→　太字になる
- 項目　→　箇条書きになる`)}
          `
      },
      {
        id: "write",
        title: "何を書くか・作り方",
        was: ["mdbase/write", "mdbase/point"],
        body: `
            <p class="kicker">中身　2／6</p>
            <h1>必須ではない。/init で下書き</h1>
            <p>禁止事項、使う技術、よく使うコマンド、作業のルールを書きます。パスワードや口座番号は書きません。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>必須ではない</h3><p>なくても動く。あった方が安定する</p></article>
              <article class="op"><span class="num">2</span><h3>自分で書かなくてよい</h3><p>入力欄に <code>/init</code> と打つと、フォルダを見て下書きしてくれる</p></article>
              <article class="op"><span class="num">3</span><h3>見る場所</h3><p>Cursor の左のファイル一覧（Windows は Ctrl＋B、Mac は ⌘＋B）から <code>CLAUDE.md</code> をクリック。claude.ai の設定には出ない</p></article>
            </div>
            ${box(`/init`)}
          `
      },
      {
        id: "example",
        title: "ホームページ用の例",
        practice: true,
        was: ["mdbase/example", "mdbase/summary"],
        body: `
            <p class="kicker">参考　3／6　練習</p>
            <h1>ホームページ用フォルダなら</h1>
            <p>会社名やルールは自分の現場の言葉に変えて、CLAUDE.md に貼れます。</p>
            ${box(`# 宮田財務 ホームページ
## ルール
- 対象は中小企業の経営者。専門用語には必ず説明を添える
- スマホでも見やすくする
- 既存ファイルを消す前に必ず確認する`)}
          `
      },
      {
        id: "skills",
        title: "Skillsとは",
        was: ["skillbase/goal", "skillbase/what", "skillbase/vs"],
        body: `
            <p class="kicker">座学　4／6</p>
            <h1>よく使う手順を、/ と名前で呼ぶ</h1>
            <p>朝、また「請求書を開いて、金額、日付、宛名の順で見て」と打っています。この手順を名前つきで残したのが Skills です。手順がそろい、人によってバラバラになりにくくなります。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>CLAUDE.md</h3><p>起動のたびに読む。対象・禁止・文体など、<strong>いつも守ってほしいこと</strong></p></article>
              <article class="op"><span class="num">2</span><h3>Skills</h3><p><strong>今この作業をするとき</strong>だけ。名前を打つと決めた順番で進む</p></article>
            </div>
            <p>どちらも必須ではありません。</p>
          `
      },
      {
        id: "make",
        title: "使い方と作り方",
        practice: true,
        was: ["skillbase/use", "skillbase/make"],
        body: `
            <p class="kicker">作り方　5／6　練習</p>
            <h1>いつもの手順を日本語で頼む</h1>
            <p>ファイルの置き場所や書き方は覚えなくてよいです。下のように頼み、次からは入力欄で呼びます。</p>
            ${box(`よく使う「請求書チェックの手順」を Skill にまとめて。次回から /invoice-check と打てば、同じ手順を実行できるようにして。`)}
            ${box(`よく使う「ホームページの文章チェック」を Skill にまとめて。次回から /hp-check と打てば、専門用語の説明・スマホで読めるか・消す前の確認、を同じ順で見るようにして。`)}
            ${box(`/invoice-check`)}
            <p>出てこないときは「Skillとして保存して、スラッシュで呼べるようにして」と足します。一覧は <code>/help</code> で見られることがあります。</p>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        was: ["skillbase/summary"],
        body: `
            <p class="kicker">まとめ　6／6</p>
            <h1>マニュアルはいつも。手順の型は呼んだとき</h1>
            <ul>
              <li><code>CLAUDE.md</code> は業務マニュアル。起動のたびに読む。<code>/init</code> で下書き</li>
              <li>Skills はよく使う手順の型。<code>/</code> と名前で呼ぶ</li>
              <li>消す・送る前の確認などの禁止は、Skills より CLAUDE.md に書く</li>
              <li>どちらも必須ではない。自分で書かなくてよい</li>
            </ul>
            <p><a class="btn-orange" href="#/course/applied" data-link>応用編へ</a>
            <a class="btn-dark" href="#/" data-link>ホームへ</a></p>
          `
      }
    ]
  };
})();
