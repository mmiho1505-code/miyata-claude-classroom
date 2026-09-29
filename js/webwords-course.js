(() => {
  CLASSROOM.courses.webwords = {
    id: "webwords",
    title: "HTML・CSS・JAVA（ことば）",
    subtitle: "ページの骨組み・見た目・動き。コードは書かなくてよい",
    duration: "約12分",
    audience: "はじめて／ポータルやアプリを直す人",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">ことば</p>
            <h1>3つの名前だけ、覚えて帰れば十分</h1>
            <p>社内ポータルを開きます。上にお知らせ、下に出勤ボタン。帯は落ち着いた緑です。出勤を押すと、時刻が残ります。</p>
            <p>この画面は、だいたい次の3つでできています。自分でコードを打たなくて大丈夫です。Claude に日本語で頼めます。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>HTML</h3><p>骨組み。何が書いてあるか（見出し、文章、ボタン）</p></article>
              <article class="op"><span class="num">2</span><h3>CSS</h3><p>見た目。色、大きさ、並び、余白</p></article>
              <article class="op"><span class="num">3</span><h3>JAVA（JavaScript）</h3><p>動き。押したら変わる、入力したら保存する</p></article>
            </div>
            <div class="callout">家にたとえると、HTMLは柱と部屋、CSSは壁紙と色、JAVAは電気とドアの開閉です。</div>
          `
      },
      {
        id: "html",
        title: "HTML",
        body: `
            <p class="kicker">骨組み</p>
            <h1>何が載っているかを決める</h1>
            <p>ポータルを見てください。いちばん大きな文字（見出し）の下に、読む文章（本文）があります。押すもの（ボタンやリンク）、内線や予定の一覧（表）もあります。この中身の「箱」の名前が HTML（エイチティーエムエル）です。色は、まだ決めていません。</p>
            <p>「お知らせを3件にして」「部署の連絡先を足して」は、この箱の中身を直すお願いです。</p>
          `
      },
      {
        id: "css",
        title: "CSS",
        body: `
            <p class="kicker">見た目</p>
            <h1>色と大きさ、並びを決める</h1>
            <p>同じお知らせでも、文字が小さいと読めません。色は落ち着いた緑、白地、青い帯。余白や角の丸さ、タイルを4列にもできます。スマホでも崩れないかも、見た目の話です。中身はそのまま、着せ替えしているのが CSS（シーエスエス）です。</p>
            <p>「文字を大きく」「白を基調に」「タイル型にして」は、この着せ替えのお願いです。</p>
          `
      },
      {
        id: "java",
        title: "JAVA（JavaScript）",
        body: `
            <p class="kicker">動き</p>
            <h1>押したら、何かが起きる</h1>
            <p>出勤ボタンを押します。時刻が残ります。名前を選ぶと、自分の記録だけ見えます。コピーボタンで文がコピーされます。タブを押すと、画面が切り替わります。この「押したら起きる」が、教室で言う JAVA です。だいたい <strong>JavaScript（ジャバスクリプト）</strong> のことで、ページの動きを担当します。</p>
            <p>「ボタンを押したら保存して」「タブの『ホーム』を『予定』に変えて」は、動きや画面の切り替えのお願いです。</p>
            <div class="callout">Java（ジャバ）は、名前が似ている<strong>別の言語</strong>です。銀行の大きなシステムなどで使います。社内ポータルの1ページでは、ほとんど出てきません。</div>
          `
      },
      {
        id: "ask",
        title: "どう頼むか",
        practice: true,
        body: `
            <p class="kicker">頼み方</p>
            <h1>コードの名前は、出さなくてよい</h1>
            <p>ポータルを見ながら、Claude に「HTMLを直して」と打ちます。どこをどうするかが伝わりません。見たままの日本語のほうが早いです。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>中身</h3><p>「お知らせを一番上に足して」（HTML）</p></article>
              <article class="op"><span class="num">2</span><h3>見た目</h3><p>「文字を大きく、落ち着いた緑に」（CSS）</p></article>
              <article class="op"><span class="num">3</span><h3>動き</h3><p>「このボタンを押したら、点検日を記録して」（JAVA）</p></article>
            </div>
            <p>3つを一度に頼むと混ざることがあるので、まずは1つずつが安心です。</p>
            <p>ポータルの作り方は <a href="#/course/portalmake" data-link>作り方編</a>、画面の直し方は <a href="#/course/appedit" data-link>アプリ画面の編集</a> です。</p>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">覚えておくこと</p>
            <h1>骨組み・見た目・動き</h1>
            <p>ポータルを直すときは、まず「何を足すか／色か／押したあとか」を決めます。名前は、そのあとで十分です。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>HTML</h3><p>何が載っているか</p></article>
              <article class="op"><span class="num">2</span><h3>CSS</h3><p>どう見えるか</p></article>
              <article class="op"><span class="num">3</span><h3>JAVA</h3><p>押したらどう動くか（JavaScript）</p></article>
            </div>
            <p>自分でコードを書かなくて大丈夫です。日本語で頼んで、できた画面を自分の目で見てください。</p>
            <p><a class="btn-orange" href="#/course/today" data-link>今日の講義へ</a>
            <a class="btn-dark" href="#/" data-link>ホームへ</a></p>
          `
      }
    ]
  };

  Object.assign(CLASSROOM.quizzes, {
    webwords: [
      {
        q: "HTMLがいちばん担当しているのは？",
        choices: ["色と文字の大きさ", "何が書いてあるか（骨組み）", "パソコンの電源"],
        a: 1,
        explain: "HTMLは中身の箱です。色はCSS、動きはJAVA（JavaScript）です。"
      },
      {
        q: "「文字を大きく、白地にして」は、どれのお願い？",
        choices: ["HTML", "CSS", "Java（別の言語）"],
        a: 1,
        explain: "見た目はCSSです。"
      },
      {
        q: "この教室で JAVA と言うとき、いちばん近いものは？",
        choices: ["ページの動き（JavaScript）", "壁紙の色だけ", "必ず黒い画面で打つ言語"],
        a: 0,
        explain: "押したら変わる、残る、切り替わる、がJAVA（JavaScript）です。Javaは名前が似ている別の言語です。"
      }
    ]
  });
})();
