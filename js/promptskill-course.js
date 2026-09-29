(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.promptskill = {
    id: "promptskill",
    title: "プロンプト力養成講座",
    subtitle: "目的・前提・形式。あいまいだと、無難な答えになる",
    duration: "約25分",
    audience: "チャットでお願い文を書く人／初めてでも可",
    lessons: [
      {
        id: "goal",
        title: "なぜ返ってこない",
        body: `
            <p class="kicker">GOAL　1／8</p>
            <h1>優秀だけど、あなたのことを知らない新人</h1>
            <p>AIは仕事はできますが、あなたの会社も、宛先も、目的も知りません。指示があいまいだと、宛先・目的・トーンを勝手に決めて、無難な答えを作ってしまいます。</p>
            <div class="qa">
              <p class="qa-q">悪い例</p>
              <p>営業メールの文を考えて</p>
            </div>
            ${box(`新規顧客向けの、初回訪問後のお礼メールを考えて`)}
            <p>上が悪い例、下が良い例です。どちらも短いですが、誰向けか・何のあとかが書いてあるだけで、答えが変わります。</p>
            <p>ChatGPT でも Claude でも同じです。<a href="https://claude.ai" target="_blank" rel="noopener">claude.ai</a> か <a href="https://chatgpt.com" target="_blank" rel="noopener">chatgpt.com</a> を開き、下の「コピー」を貼って試します。送る・消す・公開はしません。</p>
          `
      },
      {
        id: "trio",
        title: "目的・前提・形式",
        body: `
            <p class="kicker">型　2／8</p>
            <h1>基本は、この3つ</h1>
            <table>
              <thead><tr><th>項目</th><th>伝える内容</th><th>例</th></tr></thead>
              <tbody>
                <tr><td>目的</td><td>役割、誰向けか、何に使うか、ゴール</td><td>データアナリストとして／社内の非エンジニア向け／役員提案用／3分で要点がわかるように</td></tr>
                <tr><td>前提</td><td>背景、制約、参考資料、お手本</td><td>社内ルール、うまくいった議事録、調べてほしいURL</td></tr>
                <tr><td>形式</td><td>見た目、長さ、トーン</td><td>箇条書き、表、決定事項／タスク、文字数</td></tr>
              </tbody>
            </table>
            <p>「目的：」といった見出しは付けなくても構いません。3つを意識して普通の文章で書くだけで、精度は上がります。</p>
          `
      },
      {
        id: "notes",
        title: "役割と資料",
        practice: true,
        body: `
            <p class="kicker">コツ　3／8　練習</p>
            <h1>役割は、調査やコンサル向き</h1>
            <p>役割の指定が効くのは、調査やコンサル的な仕事です。メールや議事録なら、なくても大丈夫です。</p>
            <p>参考資料や元データを渡すと、ハルシネーション（もっともらしい嘘）が大きく減ります。</p>
            <p>議事録なら、誰に共有するかで形式が変わります。上司・チーム・自分用メモ、で頼みが違います。</p>
            ${box(`参加できなかった上司への共有用に、議事録をまとめてください。決定事項とタスクに分けてください。`)}
          `
      },
      {
        id: "official",
        title: "公式の考え方",
        body: `
            <p class="kicker">参考　4／8</p>
            <h1>評価して、1か所ずつ直す</h1>
            <div class="ops">
              <article class="op"><span class="num">G</span><h3>Google TCREI</h3><p>Task／Context／References／Evaluate／Iterate。目的・前提・形式は、このうち T・C・R を分かりやすくしたものです</p></article>
              <article class="op"><span class="num">O</span><h3>OpenAI</h3><p>簡潔に、具体的に、繰り返し改善する。トーン（フォーマル／フレンドリー）の指定が大切とされています</p></article>
              <article class="op"><span class="num">共</span><h3>共通</h3><p>評価して改善を繰り返す。一発で完璧を狙わなくてよい</p></article>
            </div>
            <p>直すときは<strong>1か所ずつ</strong>変えて、結果を確かめます。一度に全部変えると、何が効いたか分かりません。</p>
          `
      },
      {
        id: "structure",
        title: "テンプレートにする",
        body: `
            <p class="kicker">整理　5／8</p>
            <h1>まず普通の文章。使えたら型にする</h1>
            <ol>
              <li>まず普通の文章で書いて試す</li>
              <li>使えたら、マークダウンか XML タグで整理してテンプレートにする</li>
            </ol>
            <p>Claude は XML タグ、ChatGPT はマークダウンが相性が良いです。<strong>どちらか一方に統一</strong>します。混ぜないでください。</p>
            <p>番号付きの箇条書きは「手順」と受け取られやすいです。区切りには見出しを使います。</p>
            <p>ChatGPT 向け（マークダウン）</p>
            ${box(`## 目的
社内の非エンジニア向けに、3分で要点がわかるメモ

## 前提
昨日の会議メモを使う。専門用語には一言説明を付ける

## 形式
見出しと箇条書き。決定事項とタスクに分ける`)}
            <p>Claude 向け（XML。マークダウンと混ぜない）</p>
            ${box(`<目的>社内の非エンジニア向けに、3分で要点がわかるメモ</目的>
<前提>昨日の会議メモを使う。専門用語には一言説明を付ける</前提>
<形式>見出しと箇条書き。決定事項とタスクに分ける</形式>`)}
          `
      },
      {
        id: "extra",
        title: "もう一段上",
        practice: true,
        body: `
            <p class="kicker">応用　6／8　練習</p>
            <h1>考えさせる。分ける。わからないと言う</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>考える過程</h3><p>結論の前に、考える過程を書かせます（Chain-of-Thought）</p></article>
              <article class="op"><span class="num">2</span><h3>タスク分割</h3><p>まず骨子を作らせてから、本文を1つずつ詰める</p></article>
              <article class="op"><span class="num">3</span><h3>わからない許可</h3><p>「情報が足りないときは、わからないと答えて」と一言。嘘が減ります</p></article>
            </div>
            <p>役割は「世界最高峰の〇〇として」と書くと精度が上がりやすい、という講師の経験談です。必須ではありません。</p>
            <p>壁打ちに使うときは、役割と目的を変えるだけでOKです。</p>
            ${box(`結論を書く前に、考える過程を短く書いてください。情報が足りないときは「不明」と書いてください。`)}
          `
      },
      {
        id: "qa",
        title: "質疑から",
        body: `
            <p class="kicker">Q&A　7／8</p>
            <h1>毎回守らせたいことは、メモリへ</h1>
            <div class="qa">
              <p class="qa-q">全部のチャットで守らせたい</p>
              <p>プロンプトではなく、メモリやカスタム指示。<a href="#/course/settings" data-link>設定の講座</a></p>
            </div>
            <div class="qa">
              <p class="qa-q">AIに評価させる</p>
              <p>「改善点だけ」を出させる。良い点まで出させると、余計な情報になります</p>
            </div>
            <div class="qa">
              <p class="qa-q">講師の作り方</p>
              <p>「あなたはプロンプトエンジニアです」と役割を渡し、目的・前提・形式を渡して、プロンプト自体をAIに作らせる。完成したら<strong>別のスレッド</strong>で Claude の <a href="#/course/skillbase" data-link>Skills</a>（または Gemini の Gem）にします。長いスレッドは余計な情報がたまります</p>
            </div>
            <div class="qa">
              <p class="qa-q">管理</p>
              <p>講師は Gemini の Gem、Claude Skills、Notion のデータベースで管理しているそうです。教室では、コピー枠と Skills から始めます</p>
            </div>
            ${box(`あなたはプロンプトエンジニアです。次の目的・前提・形式を満たすお願い文を1つ作ってください。まだ実行しないでください。完成したら、私が別のチャットに貼ります。`)}
          `
      },
      {
        id: "summary",
        title: "まとめ",
        practice: true,
        body: `
            <p class="kicker">まとめ　8／8　練習</p>
            <h1>3つを意識して、繰り返す</h1>
            <ol>
              <li>あいまいだと、無難な答えになる</li>
              <li>目的・前提・形式。見出しはなくてもよい</li>
              <li>資料を渡す。なければ「不明」</li>
              <li>一発で完璧を狙わない。直すときは1か所ずつ</li>
              <li>毎回のルールはメモリ。型になったら Skills や Gem。別スレッド</li>
            </ol>
            <p>すぐ使える一言です。〔　〕を自分の言葉に変えて貼ります。</p>
            ${box(`〔データアナリスト〕として、【社内の非エンジニア】向けに【役員提案】のための〔3分メモ〕を作って。背景は〔昨日の会議〕、参考は〔この資料〕。形式は〔決定事項とタスクの箇条書き〕、トーンは〔丁寧で短い〕。わからない点は「不明」と書いて。`)}
            <p>問いの立て方の続きは <a href="#/course/hypo" data-link>仮説思考</a> です。</p>
            <p><a class="btn-orange" href="#/course/promptskill/trio" data-link>3つの型からやり直す</a>
            <a class="btn-dark" href="#/course/webchat" data-link>チャット入門へ</a></p>
          `
      }
    ]
  };

  Object.assign(CLASSROOM.quizzes, {
    promptskill: [
      {
        q: "あいまいな指示だと、どうなりやすいですか？",
        choices: ["必ず完璧な社内向けになる", "宛先・目的・トーンを勝手に決めて、無難な答えになる", "パスワードを自分で入れる"],
        a: 1,
        explain: "AIはあなたのことを知りません。新人に頼むつもりで書きます。"
      },
      {
        q: "基本の3つは？",
        choices: ["速さ・安さ・見た目", "目的・前提・形式", "XML・Gem・Notionだけ"],
        a: 1,
        explain: "見出しは付けなくても、3つを意識して普通の文章で書いてよいです。"
      },
      {
        q: "直すときの基本は？",
        choices: ["一度に全部変える", "1か所ずつ変えて、結果を確かめる", "良い点も悪い点も長く出させる"],
        a: 1,
        explain: "公式も、評価して改善を繰り返す、です。一発で完璧を狙わなくてよいです。"
      },
      {
        q: "テンプレートにするとき",
        choices: ["最初から XML とマークダウンを混ぜる", "まず普通の文章で試す。使えたら一方に統一する", "番号付きリストだけを区切りにする"],
        a: 1,
        explain: "Claude は XML、ChatGPT はマークダウン。混ぜません。区切りは見出しが向きます。"
      },
      {
        q: "全部のチャットで守らせたいルールは？",
        choices: ["毎回長いプロンプトに全部書く", "メモリやカスタム指示。型になったら別スレッドで Skills や Gem", "パスワードをプロンプトに書く"],
        a: 1,
        explain: "長いスレッドは余計な情報がたまります。完成したら別のチャットへ。"
      }
    ]
  });
})();
