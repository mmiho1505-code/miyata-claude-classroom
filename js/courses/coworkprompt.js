(() => {
  const talk = CLASSROOM.talk;

  CLASSROOM.courses.coworkprompt = {
    id: "coworkprompt",
    title: "プロンプトの書き方",
    subtitle: "目的・完成物・範囲・条件。4つを埋めると、思った物が返ってくる",
    duration: "約15分",
    audience: "Cowork への頼み方を覚えたい人／やり直しを減らしたい人",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">GOAL　1／4</p>
            <h1>あいまいな頼み方と、4つを埋めた頼み方</h1>
            <p>プロンプトは、AIへのお願いの文のことです。同じ用事でも、書き方で結果が大きく変わります。</p>
            <table>
              <thead><tr><th></th><th>お願いの文</th><th>結果</th></tr></thead>
              <tbody>
                <tr><td>✕ あいまい</td><td>このフォルダを整理しておいて</td><td>何を基準に、どこに、どう整理するかを、AIが勝手に決めてしまう</td></tr>
                <tr><td>✓ 4つを埋めた</td><td>2026年7月フォルダのPDFを対象に、請求先・金額・支払期日を抜き出して、Excelの一覧表を1ファイル作ってください。読み取れない項目は空欄にしてください。</td><td>思ったとおりの物が、そのまま返ってくる</td></tr>
              </tbody>
            </table>
            <p>自分で<strong>決めること</strong>（目的・形・範囲・ルール）を先に書けば、あとの作業は安心して任せられます。</p>
            <p>まとめ表：<a href="materials/cowork-prompt.xlsx" download>プロンプトの書き方：4つの要素とひな形（Excel）</a></p>
          `
      },
      {
        id: "four",
        title: "4つの要素",
        body: `
            <p class="kicker">知る　2／4</p>
            <h1>目的・完成物・対象範囲・条件</h1>
            <table>
              <thead><tr><th>要素</th><th>考えること</th><th>例</th></tr></thead>
              <tbody>
                <tr><td>1 目的</td><td>何のためにやるのか</td><td>月の営業報告をまとめるため</td></tr>
                <tr><td>2 完成物</td><td>どんな形で返してほしいか</td><td>Excel 1ファイル。1行1件の一覧表</td></tr>
                <tr><td>3 対象範囲</td><td>どこにある、何が対象か</td><td>「2026年7月」フォルダの中のPDF全部</td></tr>
                <tr><td>4 条件</td><td>守ってほしいルール</td><td>わからない項目は空欄。推測で埋めない</td></tr>
              </tbody>
            </table>
            <h2>ひな形</h2>
            <p>〇〇のところを、自分の仕事に書きかえて使います。</p>
            ${talk([
              { me: `［〇〇］のために、
［〇〇フォルダの〇〇］を対象に、
［〇〇］を［Excel 1ファイル］の形で作ってください。
［読み取れない項目は空欄に］してください。` }
            ], "")}
          `
      },
      {
        id: "try",
        title: "まず1件だけ試す",
        practice: true,
        body: `
            <p class="kicker">練習　3／4</p>
            <h1>大きな仕事は分けて、1件だけ先に試す</h1>
            <p>いきなり全部を頼むと、まちがいに気づいたときのやり直しが大きくなります。時間も、使える量（クレジット）も多く減ります。まず1件だけ作ってもらい、形を確かめてから残りを頼みます。</p>
            ${talk([
              { me: `［月の支払いの確認］のために、［2026年7月フォルダのPDF］を対象に、請求先・金額・支払期日を抜き出して、Excelの一覧表を1ファイル作ってください。読み取れない項目は空欄にしてください。

まず1件だけ作って、見せてください。` },
              { ai: `1件目のPDFで作りました。\n\n請求先：〔株式会社サンプル商事〕\n金額：〔55,000円〕\n支払期日：〔2026年8月31日〕\n\nこの形でよければ、残りの全部も同じように一覧にします。` },
              { me: `金額は税込みと書いて。この形で残りもお願いします。` },
              { ai: `できました。〔12件〕を1つの一覧表にしています。読み取れなかった項目が〔2か所〕あり、空欄にしています。` }
            ])}
            <div class="callout warn">空欄の所は、自分で元のPDFを見て埋めます。AIに推測で埋めさせません。</div>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">まとめ　4／4</p>
            <h1>4つを埋めて、1件だけ試す</h1>
            <ol>
              <li>目的・完成物・対象範囲・条件の4つを書く</li>
              <li>決めることは自分、作業は Cowork に任せる</li>
              <li>大きな仕事は分けて、まず1件だけ試す</li>
              <li>空欄や気になる所は、自分の目で確かめる</li>
            </ol>
            <p>まとめ表：<a href="materials/cowork-prompt.xlsx" download>プロンプトの書き方（Excel）</a></p>
            <p><a class="btn-orange" href="#/course/cowork" data-link>Cowork で練習する：はじめての Claude Cowork</a>
            <a class="btn-dark" href="#/course/promptskill" data-link>チャットとお願い文の書き方へ</a></p>
          `
      }
    ]
  };
})();
