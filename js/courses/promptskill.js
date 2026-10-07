(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.promptskill = {
    id: "promptskill",
    title: "チャットとお願い文の書き方",
    subtitle: "目的・前提・形式と仮説で、無難ではない答えをもらう",
    duration: "約45分",
    audience: "チャットでお願い文を書く人／初めてでも可",
    lessons: [
      {
        id: "chat",
        title: "チャットで1回頼む",
        practice: true,
        was: ["webchat/goal", "webchat/open", "webchat/ask", "webchat/copy", "webchat/vs", "webchat/safety"],
        body: `
            <p class="kicker">GOAL　1／7　練習</p>
            <h1>日本語で1回、返事をもらう</h1>
            <p>請求書と見積書の違いを、新人さんに聞かれました。うまく説明できないので、Claude に聞いてみます。</p>
            <div data-pic="webchat" data-cap="下の入力欄に書いて、送るボタン"></div>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>白紙にする</h3><p>claude.ai の左で「新しいチャット」（New chat）を押す</p></article>
              <article class="op"><span class="num">2</span><h3>貼る</h3><p>下の「コピー」を押し、入力欄で Ctrl＋V（Mac は ⌘＋V）</p></article>
              <article class="op"><span class="num">3</span><h3>送る</h3><p>Enter か紙飛行機ボタン。気に入らなければ「もっと短く」「例を1つ」と足す</p></article>
            </div>
            ${box("小学生にも分かる言葉で、請求書と見積書の違いを5行で教えてください。専門用語が出たら、すぐ言い換えてください。")}
            <p>資料作成・分析・ファイル出力も、同じチャットで頼めます（以前の Cowork は、このチャットに統合されています）。</p>
            <div class="callout warn">送る前に入力欄を見ます。パスワード、暗証番号、APIキー、口座番号、マイナンバー、お客さんの名簿そのものは書きません。詳しくは <a href="#/safety" data-link>安全の約束</a>。</div>
          `
      },
      {
        id: "trio",
        title: "目的・前提・形式",
        practice: true,
        was: ["promptskill/goal", "promptskill/trio", "promptskill/notes"],
        body: `
            <p class="kicker">型　2／7　練習</p>
            <h1>あいまいだと、無難な答えになる</h1>
            <p>AIはあなたの会社も宛先も知りません。「営業メールの文を考えて」では、誰向けとも分からない定型文が返ります。誰向けか・何のあとかを書きます。</p>
            <div class="qa">
              <p class="qa-q">悪い例</p>
              <p>営業メールの文を考えて</p>
            </div>
            ${box(`新規顧客向けの、初回訪問後のお礼メールを考えて`)}
            <div class="ops">
              <article class="op"><span class="num">目</span><h3>目的</h3><p>役割、誰向けか、何に使うか</p></article>
              <article class="op"><span class="num">前</span><h3>前提</h3><p>背景、制約、参考資料。資料を渡すと嘘が大きく減る</p></article>
              <article class="op"><span class="num">形</span><h3>形式</h3><p>見た目、長さ、トーン</p></article>
            </div>
            <p>見出しは付けず、普通の文章で書いてよいです。役割の指定は調査やコンサル向き。メールや議事録なら無くても大丈夫です。ChatGPT（<a href="https://chatgpt.com" target="_blank" rel="noopener">chatgpt.com</a>）でも Claude（<a href="https://claude.ai" target="_blank" rel="noopener">claude.ai</a>）でも同じです。</p>
            ${box(`参加できなかった上司への共有用に、議事録をまとめてください。決定事項とタスクに分けてください。`)}
          `
      },
      {
        id: "fix",
        title: "直す・型にする",
        practice: true,
        was: ["promptskill/official", "promptskill/structure", "promptskill/extra"],
        body: `
            <p class="kicker">直す　3／7　練習</p>
            <h1>1か所ずつ直す。使えたら型にする</h1>
            <ol>
              <li>返ってきた文を見て、「宛先だけ直して」のように<strong>1か所ずつ</strong>直す。一発で完璧を狙わない</li>
              <li>根拠が無いときは、結論の前に考える過程を書かせる。大きな仕事は骨子から</li>
              <li>うまくいったら型にする。Claude は XML タグ、ChatGPT はマークダウン。<strong>どちらか一方に統一</strong>し、区切りは見出しで</li>
            </ol>
            ${box(`結論を書く前に、考える過程を短く書いてください。情報が足りないときは「不明」と書いてください。`)}
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
        id: "hypo",
        title: "仮説を先に置く",
        was: ["hypo/goal", "hypo/can", "hypo/words", "hypo/when"],
        body: `
            <p class="kicker">仮説　4／7</p>
            <h1>差がつくのは、問いの立て方</h1>
            <p>AIは無難な「平均的な答え」を返します。同じ質問なら誰でも同じ答えです。合わせに行きがちで、あなたの事情も知りません。</p>
            <div class="ops">
              <article class="op"><span class="num">問</span><h3>イシュー</h3><p>今本当に結論を出す価値がある問いを、1つに絞る</p></article>
              <article class="op"><span class="num">仮</span><h3>仮説</h3><p>「私はこう思う」を先に書く。間違っていてよい。「絶対こうなる」は思い込み</p></article>
              <article class="op"><span class="num">事</span><h3>ファクトベース</h3><p>「外れているところを、根拠つきで指摘して」と頼む</p></article>
            </div>
            <p>要約・翻訳・言い換え・ラフなアイデア出しは丸投げでよい。選ぶ・人に見せる・原因を突き止めるときは仮説を置きます。条件を細かくつけすぎると発想が狭まります。</p>
          `
      },
      {
        id: "try",
        title: "仮説ありで頼む",
        practice: true,
        was: ["hypo/try"],
        body: `
            <p class="kicker">練習　5／7　練習</p>
            <h1>同じテーマでも、答えが変わる</h1>
            <p>「AI時代に身につけるべきスキルは？」と丸投げすると、ありきたりな答えです。下を自分の仕事に置き換えて貼ります。</p>
            ${box(`私は経理です。数字を集める作業はAIに置き換わり、数字を読んで判断する仕事が残ると思っています。外れている点を、根拠つきで指摘してください。`)}
            <p>順番まで仮説に入れると、変わる順番が具体的に返ります。</p>
            ${box(`私は中小企業の総務です。まず変わるのは問い合わせ対応だと思っています。順番が違うなら、根拠つきで指摘してください。`)}
            <p>図も、見立てを先に渡します。</p>
            ${box(`なくなるのは作業、残るのは判断だと思っています。この見立てが伝わる図にしてください。外れている点があれば、先に指摘してから図を直してください。`)}
          `
      },
      {
        id: "keep",
        title: "毎回の約束はスキルへ",
        practice: true,
        was: ["promptskill/qa", "hypo/long"],
        body: `
            <p class="kicker">残す　6／7　練習</p>
            <h1>毎回書くことは、設定とスキルへ</h1>
            <ol>
              <li>全部のチャットで守らせたいことは、Claude の「Claudeへの指示」（ChatGPT は「カスタム指示」）やメモリーに書く（<a href="#/course/claudebase" data-link>基本設定</a>）</li>
              <li>呼び出したときだけ使う約束は Skills（Gemini は Gem）にする。完成したら<strong>別のスレッド</strong>で作る</li>
              <li>AIに評価させるときは「改善点だけ」出させる</li>
            </ol>
            ${box(`要点だけ箇条書きで答えてください。前置きは短くしてください。`)}
            ${box(`あなたはプロンプトエンジニアです。次の目的・前提・形式を満たすお願い文を1つ作ってください。まだ実行しないでください。完成したら、私が別のチャットに貼ります。`)}
            <p>壁打ち用の約束です。「これを Skill として保存して、呼び出したときだけ使って」と頼めます。</p>
            ${box(`# 仮説で壁打ちするとき
- 私の仮説を事実として扱わない
- 外れている点を、根拠つきで指摘する
- 同調だけの返事はしない
- 要点だけ箇条書き
- 条件を細かくつけすぎて、発想を狭めない`)}
          `
      },
      {
        id: "summary",
        title: "まとめ",
        practice: true,
        was: ["webchat/summary", "promptskill/summary", "hypo/summary"],
        body: `
            <p class="kicker">まとめ　7／7　練習</p>
            <h1>3つを意識して、仮説を置いて、繰り返す</h1>
            <ol>
              <li>目的・前提・形式。資料を渡す。なければ「不明」</li>
              <li>選ぶ・見せる・原因を探るときは「私はこう思う。外れたら指摘して」</li>
              <li>直すときは1か所ずつ。毎回のルールは設定、型になったら Skills</li>
            </ol>
            <p>〔　〕を自分の言葉に変えて貼ります。</p>
            ${box(`〔データアナリスト〕として、【社内の非エンジニア】向けに【役員提案】のための〔3分メモ〕を作って。背景は〔昨日の会議〕、参考は〔この資料〕。形式は〔決定事項とタスクの箇条書き〕、トーンは〔丁寧で短い〕。わからない点は「不明」と書いて。`)}
            <p><a class="btn-orange" href="#/course/cowork" data-link>事務の講座へ</a>
            <a class="btn-dark" href="#/course/skillbase" data-link>Skillsの講座へ</a></p>
          `
      }
    ]
  };
})();
