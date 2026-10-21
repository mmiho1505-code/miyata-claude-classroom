(() => {
  const talk = CLASSROOM.talk;

  CLASSROOM.courses.aitools = {
    id: "aitools",
    title: "他のAIツールとの違い",
    subtitle: "ChatGPT・Genspark・Dify・Claude Code。どれをいつ使うか",
    duration: "約15分",
    audience: "AIツールが多すぎて迷っている人／Cowork を仕事に入れるか考えている人",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">GOAL　1／4</p>
            <h1>AIツールを、4つの種類に分けて見る</h1>
            <p>AIの名前は毎月のように増えます。1つずつ覚えるより、<strong>何が得意な種類か</strong>で分けると迷いません。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>Claude Cowork</h3><p>自分のファイルやツールにさわって、実務を進める</p></article>
              <article class="op"><span class="num">2</span><h3>ふつうの生成AI</h3><p>ChatGPT・Gemini など。話しながら考える</p></article>
              <article class="op"><span class="num">3</span><h3>オールインワン型</h3><p>Genspark・Manus など。資料・画像・動画を1か所で作る</p></article>
              <article class="op"><span class="num">4</span><h3>ワークフロー型</h3><p>Dify・n8n など。決まった作業の流れを組み立てて回す</p></article>
            </div>
            <p>まとめ表：<a href="materials/ai-tools-compare.xlsx" download>他のAIツールとの違い（Excel）</a></p>
          `
      },
      {
        id: "table",
        title: "比べてみる",
        body: `
            <p class="kicker">知る　2／4</p>
            <h1>得意なこと・作れる物・自動化</h1>
            <table>
              <thead><tr><th>項目</th><th>Claude Cowork</th><th>ふつうの生成AI<br>（ChatGPT・Gemini など）</th><th>オールインワン型<br>（Genspark・Manus など）</th><th>ワークフロー型<br>（Dify・n8n など）</th></tr></thead>
              <tbody>
                <tr><td>得意なこと</td><td>自分のファイルやツールにさわって実務を進める</td><td>話しながら考える</td><td>資料・画像・動画を1か所で作る</td><td>決まった処理を組み立てて回す</td></tr>
                <tr><td>できあがる物</td><td>整理したファイル、Excel、スライド、レポート</td><td>文章や答え（形にするのは自分）</td><td>スライド、画像、動画</td><td>組み立てた自動の仕組みそのもの</td></tr>
                <tr><td>自動化</td><td>得意（先に組み立てなくてよい）</td><td>基本的になし</td><td>一部あり</td><td>得意（ただし先に組み立てが必要）</td></tr>
                <tr><td>向いている人</td><td>手順が決まっていない仕事を任せたい人</td><td>調べる・考える相手がほしい人</td><td>作品を早く形にしたい人</td><td>くり返しの作業を仕組みにしたい人</td></tr>
              </tbody>
            </table>
            <div class="callout">ワークフロー型は、最初に「この順で、これをする」と流れを組み立てておく道具です。毎回同じ作業ならとても強い一方、組み立てに手間がかかります。Cowork は、その場で言葉で頼めば動きます。</div>
            <h2>自分の仕事で考える</h2>
            ${talk([
              { me: `私の仕事は〔小さな会社の事務〕です。よくある作業は〔請求書づくり、経費の集計、取引先へのメールの下書き〕です。それぞれ、Cowork・ChatGPT のような生成AI・Genspark のようなオールインワン型・Dify のようなワークフロー型の、どれが向いているか表にしてください。` },
              { ai: `作業ごとに表にしました。\n\n・請求書づくり … Cowork（取引先リストとひな形から、ファイルで作れる）\n・経費の集計 … Cowork（レシートと明細を読んで Excel に）\n・メールの下書き … 生成AI でも Cowork でも可。送るのは自分\n\n毎月まったく同じ流れが決まったら、ワークフロー型で仕組みにする手もあります。` }
            ])}
          `
      },
      {
        id: "code",
        title: "Claude Code との使い分け",
        body: `
            <p class="kicker">知る　3／4</p>
            <h1>業務の効率化なら Cowork、アプリづくりなら Claude Code</h1>
            <p>同じ Claude の仲間でも、Cowork と Claude Code は別の機能です。どちらもエージェント（自分で考えて作業を進めるAI）のしくみを使っていますが、向いている仕事がちがいます。</p>
            <table>
              <thead><tr><th>項目</th><th>Claude Cowork</th><th>Claude Code</th></tr></thead>
              <tbody>
                <tr><td>使う人</td><td>エンジニアでなくてもOK。事務・営業・企画・管理など、職種を問わない</td><td>主にエンジニア</td></tr>
                <tr><td>向いている仕事</td><td>ファイル整理、資料づくり、データの転記、調べもの、定期レポート</td><td>アプリやWebサービスそのものを作る・直す・動かす</td></tr>
                <tr><td>使う場面</td>
                  <td><ul>
                    <li>毎日の業務そのものを速くしたいとき</li>
                    <li>Excel・スプレッドシート・Slack・Google Drive など、ふだんの道具をさわらせたいとき</li>
                    <li>ブラウザを動かして、Webサイトから情報を集めたい・フォームに入力させたいとき</li>
                  </ul></td>
                  <td><ul>
                    <li>アプリや道具そのものを作りたいとき</li>
                    <li>プログラムのファイルを一式読ませて、まとめて直させたいとき</li>
                    <li>書いたプログラムをその場で動かし、エラーが消えるまで直させたいとき</li>
                  </ul></td>
                </tr>
              </tbody>
            </table>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">まとめ　4／4</p>
            <h1>名前ではなく、種類で選ぶ</h1>
            <ol>
              <li>考える相手なら生成AI、作品づくりならオールインワン型、決まった流れの自動化ならワークフロー型</li>
              <li>手順が決まっていない実務を任せるなら Cowork</li>
              <li>アプリや道具そのものを作るなら Claude Code</li>
            </ol>
            <div class="callout">ツールの機能はよく変わります。くわしく比べるときは、日付を入れて調べ、公式の説明で確かめます。</div>
            <p>まとめ表：<a href="materials/ai-tools-compare.xlsx" download>他のAIツールとの違い（Excel）</a></p>
            <p><a class="btn-orange" href="#/course/coworkprompt" data-link>次へ：プロンプトの書き方</a>
            <a class="btn-dark" href="#/course/aipick" data-link>ChatGPT・Gemini・Claudeの使い分けへ</a></p>
          `
      }
    ]
  };
})();
