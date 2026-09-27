(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.hypo = {
    id: "hypo",
    title: "AIに丸投げすると遠回りになる！仮説思考",
    subtitle: "差がつくのは性能ではなく、問いの立て方。イシュー・仮説・ファクトベース",
    duration: "約40分",
    audience: "チャットを仕事で使う人／初めてでも可",
    lessons: [
      {
        id: "goal",
        title: "結論",
        body: `
            <p class="kicker">GOAL　1／7</p>
            <h1>差がつくのは、問いの立て方</h1>
            <p>AIは中立的で無難な<strong>「平均的な答え」</strong>を返す仕組みです。同じ質問をすれば、誰でも同じ答えになり、差がつきません。</p>
            <div class="callout">差がつくのは、AIの性能ではありません。こちらの問いの立て方です。</div>
            <p>ChatGPT でも Claude でも同じです。<a href="https://chatgpt.com" target="_blank" rel="noopener">chatgpt.com</a> か <a href="https://claude.ai" target="_blank" rel="noopener">claude.ai</a> を開き、下の「コピー」を貼って試します。</p>
          `
      },
      {
        id: "can",
        title: "得意と苦手",
        body: `
            <p class="kicker">仕組み　2／7</p>
            <h1>数は出せる。事情は知らない</h1>
            <div class="ops">
              <article class="op"><span class="num">得</span><h3>得意</h3><p>数を出す、書き直す、たたき台を作る</p></article>
              <article class="op"><span class="num">苦</span><h3>苦手</h3><p>あなたの事情（文脈）を知らない。どれが正解か断定しない。何に困っているかを察しない</p></article>
              <article class="op"><span class="num">同</span><h3>イエスマン</h3><p>合わせに行きがち。同調だけだと、考えが進まない</p></article>
            </div>
            <p>丸投げすると、きれいだけれど自分ごとではない答えになりやすいです。次のページから、仮説の置き方を練習します。</p>
          `
      },
      {
        id: "words",
        title: "3つの言葉",
        body: `
            <p class="kicker">型　3／7</p>
            <h1>イシュー・仮説・ファクトベース</h1>
            <div class="ops">
              <article class="op"><span class="num">問</span><h3>イシュー</h3><p>聞きたいことを1つに絞る</p></article>
              <article class="op"><span class="num">仮</span><h3>仮説</h3><p>「私はこう思う」を先に書く。間違っていても構わない。「絶対こうなる」という思い込みは、仮説ではない</p></article>
              <article class="op"><span class="num">事</span><h3>ファクトベース</h3><p>「外れているところを、根拠つきで指摘して」と頼む。そうするとAIが同調せず、正面から答えやすい</p></article>
            </div>
            <div class="callout">仮説は当たっても外れても、前に進めます。講師は、外れたときのほうが学びが大きいと話していました。</div>
          `
      },
      {
        id: "try",
        title: "丸投げと仮説あり",
        practice: true,
        body: `
            <p class="kicker">練習　4／7　練習</p>
            <h1>同じテーマでも、答えが変わる</h1>
            <p>下は講義の例です。自分の仕事に置き換えて貼っても構いません。</p>
            <div class="qa">
              <p class="qa-q">スキルを聞く（丸投げ）</p>
              <p>「AI時代に身につけるべきスキルは？」→ ありきたりな答えになりやすい</p>
            </div>
            <p>仮説あり。同じチャットに貼ります。</p>
            ${box(`私は経理です。数字を集める作業はAIに置き換わり、数字を読んで判断する仕事が残ると思っています。外れている点を、根拠つきで指摘してください。`)}
            <div class="qa">
              <p class="qa-q">将来の変化を聞く</p>
              <p>順番まで仮説に入れると、変わる順番が具体的に返ってきやすいです。</p>
            </div>
            ${box(`私は中小企業の総務です。まず変わるのは問い合わせ対応だと思っています。順番が違うなら、根拠つきで指摘してください。`)}
            <div class="qa">
              <p class="qa-q">図を作らせる</p>
              <p>丸投げだと、綺麗だけれど何が言いたいのか分からない図になりやすいです。</p>
            </div>
            ${box(`なくなるのは作業、残るのは判断だと思っています。この見立てが伝わる図にしてください。外れている点があれば、先に指摘してから図を直してください。`)}
          `
      },
      {
        id: "when",
        title: "いつ仮説が要るか",
        body: `
            <p class="kicker">使い分け　5／7</p>
            <h1>全部に仮説は要らない</h1>
            <table>
              <thead><tr><th></th><th>向いていること</th></tr></thead>
              <tbody>
                <tr><td>丸投げでよい</td><td>要約、翻訳、言い換え、ラフなアイデア出し、まったく知らない分野</td></tr>
                <tr><td>仮説が必要</td><td>選ぶ・判断する、人に見せる、原因を突き止める、といったビジネスの場面</td></tr>
              </tbody>
            </table>
            <div class="callout">今のモデルは賢いので、条件を細かくつけすぎると発想が狭まります。条件のつけすぎに注意します。</div>
            <p>仮説が外れたら失敗ではありません。どこが外れたかが分かると、次の問いが立てられます。</p>
          `
      },
      {
        id: "long",
        title: "長い答えとスキル",
        practice: true,
        body: `
            <p class="kicker">質疑　6／7　練習</p>
            <h1>読みにくいときは、先に短く約束する</h1>
            <p>「AIの回答が長すぎて読みにくい」という質問への答えです。</p>
            <p>AI全体の設定に書いておきます。Claude なら「Claudeへの指示」、ChatGPT なら「カスタム指示」です。</p>
            ${box(`要点だけ箇条書きで答えてください。前置きは短くしてください。`)}
            <p>毎回入れる前提の指示は、<strong>Skills（スキル）</strong>にしておくと、呼び出したときだけ適用できて便利です。講師は特に <strong>Claude のスキル機能</strong>を勧めていました。</p>
            <p>壁打ちのときにだけ使いたい約束の例です。Claude に「これを Skill として保存して、呼び出したときだけ使って」と頼んでも構いません。</p>
            ${box(`# 仮説で壁打ちするとき
- 私の仮説を事実として扱わない
- 外れている点を、根拠つきで指摘する
- 同調だけの返事はしない
- 要点だけ箇条書き
- 条件を細かくつけすぎて、発想を狭めない`)}
            <p>Skills の作り方の詳細は、<a href="#/course/applied" data-link>応用編（使いこなし）</a>にもあります。受講コードが要る場合があります。</p>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">覚えておくこと　7／7</p>
            <h1>私はこう思う。外れたら指摘して</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>問いを1つ</h3><p>イシューを絞る。同じ質問の丸投げでは差がつかない</p></article>
              <article class="op"><span class="num">2</span><h3>仮説を先に</h3><p>間違っていてよい。「絶対こうなる」は仮説ではない</p></article>
              <article class="op"><span class="num">3</span><h3>根拠で指摘</h3><p>ファクトベースで頼む。同調させない</p></article>
            </div>
            <div class="callout">要約や翻訳は丸投げでよい。選ぶ・見せる・原因を探るときは仮説を置く。外れたときのほうが学びが大きい。</div>
            <p><a class="btn-orange" href="#/course/hypo/try" data-link>例からやり直す</a>
            <a class="btn-dark" href="#/" data-link>ホームへ</a></p>
          `
      }
    ]
  };

  Object.assign(CLASSROOM.quizzes, {
    hypo: [
      {
        q: "同じ質問で差がつかない主な理由は？",
        choices: ["AIが壊れているから", "平均的な答えを返す仕組みだから", "日本語が苦手だから"],
        a: 1,
        explain: "差がつくのは性能ではなく、問いの立て方です。"
      },
      {
        q: "仮説思考の3つは？",
        choices: ["安く・早く・多く", "イシュー・仮説・ファクトベース", "要約・翻訳・投稿"],
        a: 1,
        explain: "問いを1つに絞り、「私はこう思う」を先に書き、外れている点を根拠つきで指摘してもらいます。"
      },
      {
        q: "「絶対こうなる」は仮説ですか？",
        choices: ["仮説である", "単なる思い込みで、仮説ではない", "ファクトベースである"],
        a: 1,
        explain: "仮説は間違っていても構いません。断定の思い込みとは違います。"
      },
      {
        q: "丸投げでよいのはどれ？",
        choices: ["人に見せる資料の方針を決める", "要約・翻訳・言い換え", "原因を突き止める"],
        a: 1,
        explain: "選ぶ・判断する・見せる・原因を探るときは、仮説が必要です。"
      },
      {
        q: "条件を細かくつけすぎると？",
        choices: ["いつも良くなる", "発想が狭まりやすい", "必ず短くなる"],
        a: 1,
        explain: "今のモデルは賢いので、条件のつけすぎに注意します。"
      },
      {
        q: "答えが長すぎるときの先の手は？",
        choices: ["質問をやめる", "全体設定に「要点だけ箇条書きで」と書いておく", "いつも英語で聞く"],
        a: 1,
        explain: "毎回使う約束は Skills にすると、呼び出したときだけ適用できます。講師は Claude のスキルを勧めていました。"
      }
    ]
  });
})();
