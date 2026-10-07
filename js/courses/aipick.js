(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.aipick = {
    id: "aipick",
    title: "ChatGPT・Gemini・Claudeの使い分け",
    subtitle: "この用途だからこのAI、を自分の早見表にする",
    duration: "約15分",
    audience: "名前は知っているが、どれを使うか決まっていない人",
    lessons: [
      {
        id: "goal",
        title: "用途で選ぶ",
        was: ["aipick/goal", "aipick/caution"],
        body: `
            <p class="kicker">GOAL　1／5</p>
            <h1>名前ではなく、用途で選ぶ</h1>
            <p>ブラウザに ChatGPT、Gemini、Claude のタブが並んでいます。どれを開くか、名前だけで決めがちです。今日は早見表を作り、自分に合う1つに絞ります。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>知る</h3><p>よくある使い方19項目の表を作らせる</p></article>
              <article class="op"><span class="num">2</span><h3>近づける</h3><p>自分の仕事と環境を書いて、1つに絞る</p></article>
            </div>
            <div class="callout warn">表にも嘘が混じります（講師の例：作れる動画が △、できる音声会話が ×）。画像・動画・音声は公式で確認し、表はときどき作り直します。</div>
          `
      },
      {
        id: "read",
        title: "講師の当日のまとめ",
        was: ["aipick/read"],
        body: `
            <p class="kicker">参考　2／5</p>
            <h1>文章まわりは、3つとも近い</h1>
            <p>講師の当日のまとめです。正解ではなく、見比べ用です。</p>
            <ul>
              <li><strong>ChatGPT</strong> … 万能型。迷ったらまずこれ</li>
              <li><strong>Gemini</strong> … 検索に強い。Gmail・ドキュメントと直結</li>
              <li><strong>Claude</strong> … 日本語の自然さ、長い文章。Claude Code で自動化</li>
            </ul>
            <p>文章まわりは、3つともほぼ ◎ か ○ でした。</p>
          `
      },
      {
        id: "w1",
        title: "ワーク1：一般の表",
        practice: true,
        was: ["aipick/w1"],
        body: `
            <p class="kicker">知る　3／5　練習</p>
            <h1>今日の日付を入れて貼る</h1>
            <ol>
              <li>使っているAIの入力欄に下を貼る</li>
              <li>〔　〕の日付を今日に変える（AIには知識のカットオフがあるため）</li>
              <li>送る。方向性が合っていればOK</li>
            </ol>
            ${box(`今日の日付は〔2026年9月29日〕です。Web検索して、最新の公式案内に基づいて答えてください。
考えずにすぐ答えず、根拠を確認してから表にしてください。

ChatGPT、Gemini、Claude のよくある使い方を19項目、次の列の表にしてください。
・やりたいこと
・まず試すなら（1つ）
・ChatGPT／Gemini／Claude の評価（◎○△×）
・確認ポイント（無料枠の回数制限など）

根拠が見つからないマスは「要確認」と書いてください。推測で埋めないでください。
万人の一番、最強、は書かないでください。`)}
          `
      },
      {
        id: "w2",
        title: "ワーク2：自分用の表",
        practice: true,
        was: ["aipick/w2"],
        body: `
            <p class="kicker">近づける　4／5　練習</p>
            <h1>状況を具体的に書いて、1つに絞る</h1>
            <ol>
              <li>ワーク1の続きの会話に下を貼る</li>
              <li>職業・環境・プランと、やりたいことを具体的に書く（「SNSをやりたい」ではなく「リール動画を作りたい」）</li>
            </ol>
            ${box(`続きです。私の状況に合わせて、自分専用の早見表にしてください。
職業：〔　〕
使える環境：〔ブラウザだけ／PCのデスクトップアプリも使える など〕
プラン：〔無料／有料〕
やりたいこと（具体的に）：
・〔例：Instagramのリール動画を作りたい〕
・〔例：会議メモを同じ見出しの議事録にしたい〕

各項目について、最初に試すAI、最初にやらせる作業、比較用の別のAIを書いてください。
最後に、あえて1つに絞るならどれか、理由を短く。
万人の最強は書かないでください。根拠が無いことは要確認。`)}
          `
      },
      {
        id: "summary",
        title: "まとめ",
        was: ["aipick/summary"],
        body: `
            <p class="kicker">まとめ　5／5</p>
            <h1>合う1つを、自分の言葉で</h1>
            <ol>
              <li>用途で選ぶ。日付を入れて検索させる</li>
              <li>表も疑う。根拠が無いマスは要確認</li>
              <li>状況を具体的に書いて1つに絞る。ときどき作り直す</li>
            </ol>
            <p><a class="btn-orange" href="#/course/aipick" data-link>ワーク1からやり直す</a>
            <a class="btn-dark" href="#/course/claudebase" data-link>Claudeの基本設定へ</a></p>
          `
      }
    ]
  };
})();
