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
            <p>社内ポータルやアプリは、だいたいこの3つでできています。自分で打たなくて大丈夫です。Claude に日本語で頼めます。</p>
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
            <p>HTML（エイチティーエムエル）は、ページの<strong>中身の名前</strong>です。お知らせ、予定、リンク、連絡先、という「箱」を置きます。</p>
            <ul>
              <li>見出し（いちばん大きな文字）</li>
              <li>本文（読む文章）</li>
              <li>ボタンやリンク（押すもの）</li>
              <li>表（内線や予定の一覧）</li>
            </ul>
            <p>お願いの例：「お知らせを3件にして」「部署の連絡先を足して」は、HTMLの中身を直すお願いです。</p>
          `
      },
      {
        id: "css",
        title: "CSS",
        body: `
            <p class="kicker">見た目</p>
            <h1>色と大きさ、並びを決める</h1>
            <p>CSS（シーエスエス）は、<strong>見た目</strong>です。中身はそのまま、着せ替えします。</p>
            <ul>
              <li>色（落ち着いた緑、白地、青い帯）</li>
              <li>文字の大きさ</li>
              <li>余白、角の丸さ、4列のタイル</li>
              <li>スマホでも崩れないか</li>
            </ul>
            <p>お願いの例：「文字を大きく」「白を基調に」「タイル型にして」は、CSSのお願いです。</p>
          `
      },
      {
        id: "java",
        title: "JAVA（JavaScript）",
        body: `
            <p class="kicker">動き</p>
            <h1>押したら、何かが起きる</h1>
            <p>この教室で「JAVA」と言うときは、だいたい <strong>JavaScript（ジャバスクリプト）</strong> のことです。ページの<strong>動き</strong>を担当します。</p>
            <ul>
              <li>出勤ボタンを押すと、時刻が残る</li>
              <li>名前を選ぶと、自分の記録だけ見える</li>
              <li>コピーボタンを押すと、文がコピーされる</li>
              <li>タブを押すと、画面が切り替わる</li>
            </ul>
            <p>お願いの例：「ボタンを押したら保存して」「タブの『ホーム』を『予定』に変えて」は、動きや画面の切り替えのお願いです。</p>
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
            <p>「HTMLを直して」より、見たままの日本語のほうが早いです。</p>
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
