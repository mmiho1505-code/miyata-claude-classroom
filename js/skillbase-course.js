(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.skillbase = {
    id: "skillbase",
    title: "Claude Code Skillsの基礎",
    subtitle: "よく使う手順を、スラッシュ1つで呼び出す",
    duration: "約5分",
    audience: "Claude Code を使う人／座学。手はあとで",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">座学　約5分</p>
            <h1>Skills は「手順の型」</h1>
            <p>この回も座学です。今すぐファイルを作らなくて大丈夫です。意味が分かれば十分です。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>何か</h3><p>よく使う手順を、名前つきで残したもの</p></article>
              <article class="op"><span class="num">2</span><h3>CLAUDE.mdとの違い</h3><p>マニュアルは毎回読む。Skills は呼んだときだけ</p></article>
              <article class="op"><span class="num">3</span><h3>作り方</h3><p>自分で書かなくてよい。Claude に頼む</p></article>
            </div>
            <p>前の座学は <a href="#/course/mdbase" data-link>CLAUDE.mdの基礎</a> です。手を動かすのは <a href="#/course/applied" data-link>応用編</a> です。</p>
          `
      },
      {
        id: "what",
        title: "Skillsとは",
        body: `
            <p class="kicker">ことば</p>
            <h1>よく使う手順を、コマンドにする</h1>
            <p>毎回同じお願い（請求書の点検、ホームページの文章チェックなど）を、長い文で書くのは疲れます。Skills にまとめると、<strong>スラッシュ（ / ）と名前</strong>で同じ手順を呼び出せます。</p>
            <p>たとえばスーパーで「開店チェック」という型があれば、毎回「電気・レジ・袋」と説明しなくてよいのと同じです。</p>
            <div class="callout">品質がそろいます。人によって手順がバラバラになりにくいです。</div>
          `
      },
      {
        id: "vs",
        title: "CLAUDE.md との違い",
        body: `
            <p class="kicker">くらべる</p>
            <h1>いつも効く約束と、呼んだときの手順</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>CLAUDE.md</h3><p>業務マニュアル。起動のたびに自動で読む。対象・禁止・文体など、<strong>いつも守ってほしいこと</strong>。</p></article>
              <article class="op"><span class="num">2</span><h3>Skills</h3><p>手順の型。<strong>今この作業をするとき</strong>だけ使う。名前を打つと、決めた順番どおり進む。</p></article>
            </div>
            <p>両方あっても、どちらか片方でも大丈夫です。必須ではありません。</p>
          `
      },
      {
        id: "use",
        title: "どう使うか",
        body: `
            <p class="kicker">使い方</p>
            <h1>入力欄に / と名前</h1>
            <p>Claude Code の入力欄で、次のように打ちます。</p>
            ${box(`/invoice-check`)}
            <p>名前は自分で決められます。請求書点検なら <code>/invoice-check</code>、ホームページなら <code>/hp-check</code> などです。</p>
            <ul>
              <li>出てこないときは、「Skillとして保存して、スラッシュで呼べるようにして」と一言足す</li>
              <li>一覧は <code>/help</code> で見られることがあります</li>
            </ul>
          `
      },
      {
        id: "make",
        title: "どう作るか",
        practice: true,
        body: `
            <p class="kicker">作り方</p>
            <h1>自分で書かなくてよい</h1>
            <p>ファイルの置き場所や書き方を、覚える必要はありません。いつもやっている手順を日本語で伝えて、Skill にしてもらいます。</p>
            ${box(`よく使う「請求書チェックの手順」を Skill にまとめて。次回から /invoice-check と打てば、同じ手順を実行できるようにして。`)}
            <p>ホームページ用なら、たとえば次です。</p>
            ${box(`よく使う「ホームページの文章チェック」を Skill にまとめて。次回から /hp-check と打てば、専門用語の説明・スマホで読めるか・消す前の確認、を同じ順で見るようにして。`)}
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">覚えておくこと</p>
            <h1>手順の型。呼んだときだけ</h1>
            <ul>
              <li>Skills は、よく使う手順を名前つきで残したもの</li>
              <li>CLAUDE.md は毎回読む。Skills は <code>/</code> で呼んだとき</li>
              <li>必須ではない。自分で書かなくてよい</li>
            </ul>
            <p>守ってほしい禁止（消す・送る前に確認）は、Skills より <a href="#/course/mdbase" data-link>CLAUDE.md</a> か応用編の Rules が向いています。</p>
            <p><a class="btn-orange" href="#/course/applied" data-link>応用編へ</a>
            <a class="btn-dark" href="#/course/mdbase" data-link>CLAUDE.mdの基礎へ</a></p>
          `
      }
    ]
  };

  Object.assign(CLASSROOM.quizzes, {
    skillbase: [
      {
        q: "Skills がいちばん近いものは？",
        choices: ["パソコンの電源", "よく使う手順を、名前つきで残したもの", "請求書の宛名欄"],
        a: 1,
        explain: "スラッシュと名前で、同じ手順を呼び出せます。"
      },
      {
        q: "CLAUDE.md と Skills の違いは？",
        choices: ["同じもの", "CLAUDE.md は毎回読むマニュアル。Skills は呼んだときの手順", "Skills のほうがパスワードを書く場所"],
        a: 1,
        explain: "マニュアルはいつも。Skills は今この作業、のときです。"
      },
      {
        q: "Skills のファイルは、自分で書く必要がありますか？",
        choices: ["必ず自分で全部書く", "自分で書かなくてよい。手順を日本語で頼める", "英語でしか作れない"],
        a: 1,
        explain: "「Skillにまとめて、スラッシュで呼べるようにして」と頼めます。"
      }
    ]
  });
})();
