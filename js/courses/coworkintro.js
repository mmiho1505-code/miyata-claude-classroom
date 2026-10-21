(() => {
  const talk = CLASSROOM.talk;

  CLASSROOM.courses.coworkintro = {
    id: "coworkintro",
    title: "Coworkとは",
    subtitle: "答えをくれるチャットと、仕事を終わらせる Cowork のちがい",
    duration: "約15分",
    audience: "作業そのものをAIに任せたい人／事務・営業・総務など、エンジニアでない人",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">GOAL　1／4</p>
            <h1>チャットは「答え」をくれる。Coworkは「仕事」を終わらせる</h1>
            <p>チャットに「請求書の作り方を教えて」と聞くと、手順が返ってきます。そのあと Excel を開いて、手を動かすのは自分です。</p>
            <p>Cowork は「作業を任せられるAIの同僚」です。パソコンのファイルやアプリに直接さわって、頼んだ仕事を最後までやり、<strong>できあがった物</strong>を返してくれます。</p>
            <table>
              <thead><tr><th>項目</th><th>チャット</th><th>Cowork</th></tr></thead>
              <tbody>
                <tr><td>頼み方</td><td>質問する</td><td>仕事を任せる</td></tr>
                <tr><td>返ってくるもの</td><td>答えや文章</td><td>できあがった物そのもの</td></tr>
                <tr><td>手を動かすのは</td><td>自分</td><td>Cowork</td></tr>
              </tbody>
            </table>
            <p>このあと、Cowork の3つの特長を見て、実際に「仕事を任せる」頼み方を練習します。</p>
            <p>まとめ表：<a href="materials/cowork-intro.xlsx" download>Coworkとは：3つの特長と、チャットとの違い（Excel）</a></p>
          `
      },
      {
        id: "points",
        title: "3つの特長",
        body: `
            <p class="kicker">知る　2／4</p>
            <h1>Cowork の3つの特長</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>できあがった物が返ってくる</h3><p>Excel、PowerPoint、Word、整理したフォルダ</p></article>
              <article class="op"><span class="num">2</span><h3>作業の途中がすべて見える</h3><p>使ったファイルやツール、そう判断した理由が見える</p></article>
              <article class="op"><span class="num">3</span><h3>閉じても動き続ける</h3><p>クラウド（ネットの向こうのコンピューター）で動く。毎月の定期実行や、いくつかの作業を同時に進めることもできる</p></article>
            </div>
            <div class="callout">パソコンの中のファイルを使う作業は、デスクトップアプリ（パソコンに入れた Claude）を開いておく必要があります。</div>
            <h2>どんな仕事に向いている？</h2>
            <ul>
              <li><strong>経理</strong> … レシートや明細から経費の一覧を作る、請求書をまとめて作る</li>
              <li><strong>営業</strong> … 月の数字をまとめて報告書にする、提案のスライドを作る</li>
              <li><strong>総務</strong> … 書類をフォルダに分けて整理する、別の表へ写す</li>
            </ul>
          `
      },
      {
        id: "try",
        title: "仕事を任せてみる",
        practice: true,
        body: `
            <p class="kicker">練習　3／4</p>
            <h1>「教えて」ではなく「作って」と頼む</h1>
            <p>同じ用事でも、頼み方で返ってくるものが変わります。まずはチャットのような聞き方です。</p>
            ${talk([
              { me: `売上のCSVから、店舗ごとの合計を出す方法を教えて。` },
              { ai: `Excel でCSVを開き、ピボットテーブルを使います。\n\n1. 「挿入」から「ピボットテーブル」を選ぶ\n2. 行に「店舗」、値に「金額」を入れる……` }
            ])}
            <p>これだと、手を動かすのは自分です。次は、仕事として任せます。</p>
            ${talk([
              { do: "売上のCSVを入力欄にドラッグ" },
              { me: `このCSVから、店舗ごとの合計をExcelの表にしてください。`, file: "sales-2026-09.csv" },
              { ai: `作る前に教えてください。\n\n・合計のほかに、件数や前の月との比べも入れますか？\n・グラフは要りますか？` },
              { me: `件数も入れて。グラフは店舗別の棒グラフを1つ。` },
              { ai: `できました。店舗ごとの合計と件数の表に、棒グラフを1つ付けた Excel です。いちばん売上が多いのは〔駅前店〕でした。数字を開いて確かめてください。` }
            ])}
            <p>練習用：<a href="materials/practice/sales-2026-09.csv" download>売上CSV（架空の店の1か月分）</a></p>
            <div class="callout warn">返ってきた物は、必ず自分で開いて確かめます。メールの送信・支払い・ファイルの削除は、自分がOKしてから。</div>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">まとめ　4／4</p>
            <h1>質問するより、仕事を任せる</h1>
            <ol>
              <li>Cowork は、ファイルやアプリにさわって仕事を最後までやる「AIの同僚」</li>
              <li>返ってくるのは答えではなく、できあがった物</li>
              <li>途中が見えるので、どう作ったかを確かめられる</li>
              <li>最後に見て、OKを出すのは自分</li>
            </ol>
            <p>まとめ表：<a href="materials/cowork-intro.xlsx" download>Coworkとは（Excel）</a></p>
            <p><a class="btn-orange" href="#/course/aitools" data-link>次へ：他のAIツールとの違い</a>
            <a class="btn-dark" href="#/course/cowork" data-link>はじめての Claude Cowork へ</a></p>
          `
      }
    ]
  };
})();
