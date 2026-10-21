(() => {
  const talk = CLASSROOM.talk;

  CLASSROOM.courses.coworkreceipt = {
    id: "coworkreceipt",
    title: "演習：レシートから経費精算を自動化する",
    subtitle: "フォルダにレシートの写真を入れるだけで、経費精算シートに書き写される",
    duration: "約35分",
    audience: "レシートの手入力をなくしたい人／試してからスキルにする流れを、自分の手でやってみたい人",
    lessons: [
      {
        id: "goal",
        title: "課題",
        body: `
            <p class="kicker">課題　1／6</p>
            <h1>レシートの写真から、経費精算シートを作る</h1>
            <h2>シナリオ</h2>
            <p>スマホで撮ったレシートの写真を、Google ドライブの決まったフォルダに入れておくだけで、<strong>経費精算シートに書き写され、写真もフォルダごとに振り分けられる</strong>状態を作ります。紙のレシートを人が打ちこむ作業を、まるごと手放すのが目的です。</p>
            <p>置き場所づくり（フォルダ分け）から経費精算シートを作るところまでを、<strong>1回のお願いでまとめて</strong>任せます。</p>
            <table>
              <thead><tr><th>作る物</th><th>場所</th><th>中身</th></tr></thead>
              <tbody>
                <tr><td>3つのフォルダ</td><td>Google ドライブ</td><td>「未処理」「処理済み」「エラー」</td></tr>
                <tr><td>経費精算シート</td><td>パソコンのフォルダ（Excel）</td><td>1枚1行。列は「日付」「金額」「支払先」「ステータス」</td></tr>
              </tbody>
            </table>
            <h2>練習用のレシート画像（10枚・すべて架空）</h2>
            <p><a href="materials/practice/receipts/receipt-01.jpg" download>1</a>　<a href="materials/practice/receipts/receipt-02.jpg" download>2</a>　<a href="materials/practice/receipts/receipt-03.jpg" download>3</a>　<a href="materials/practice/receipts/receipt-04.jpg" download>4</a>　<a href="materials/practice/receipts/receipt-05.jpg" download>5</a>　<a href="materials/practice/receipts/receipt-06.jpg" download>6</a>　<a href="materials/practice/receipts/receipt-07.jpg" download>7</a>　<a href="materials/practice/receipts/receipt-08.jpg" download>8</a>　<a href="materials/practice/receipts/receipt-09.jpg" download>9</a>　<a href="materials/practice/receipts/receipt-10.jpg" download>10</a>（まとめて取るなら、練習用データの ZIP に入っています）</p>
            <p>ふつうのレシートのほかに、手書きの領収書、暗くてぶれた写真、しわくちゃで読めないもの、関係のない画像など、<strong>わざとエラーになるもの</strong>も入っています。</p>
            <div class="callout">答えを見る前に、必ず一度は自分の手でやってみてください。</div>
            <p>まとめ表：<a href="materials/cowork-receipt.xlsx" download>演習の内容（Excel）</a>　<a href="materials/cowork-receipt-answer.xlsx" download>解説（Excel）</a></p>
          `
      },
      {
        id: "hint",
        title: "STEP1・2 ヒント",
        practice: true,
        body: `
            <p class="kicker">STEP 1・2　2／6</p>
            <h1>置き場所づくりと、読み取り・仕分けを1つのお願いに</h1>
            <h2>STEP1 置き場所を作らせる</h2>
            <ul>
              <li>Google ドライブに「未処理」「処理済み」「エラー」の3つのフォルダを作らせる。フォルダ名だけでは AI に場所が分からないので、<strong>親フォルダの URL</strong> を渡す</li>
              <li>パソコンのフォルダに、Excel 形式の経費精算シートを作らせる。パソコンのフォルダは、入力欄の「フォルダ追加」で選んでおく</li>
            </ul>
            <h2>STEP2 読み取りと仕分けまで、1つのお願いにまとめる</h2>
            <ul>
              <li>シートは Excel、1枚1行、列は「日付」「金額」「支払先」「ステータス」</li>
              <li>書き写せた写真は「処理済み」へ、うまくいかなかった写真は「エラー」へ移す、と<strong>具体的に</strong>書く</li>
              <li>目的・完成物・対象範囲・条件の4つの要素が、この課題では何にあたるかを考える（<a href="#/course/coworkprompt" data-link>頼み方の4つの要素</a>）</li>
            </ul>
            <h2>なぜ Google スプレッドシートではなく Excel なのか</h2>
            <p>今のところ（2026年9月時点）、Cowork は Google ドライブのコネクタを通すと、<strong>今あるスプレッドシートに書き足せず</strong>、毎回新しいシートができてしまいます。2回目からは同じシートの下に書き足していきたいので、パソコンの中の Excel を使います。</p>
          `
      },
      {
        id: "test",
        title: "STEP3 試してからスキルに",
        practice: true,
        body: `
            <p class="kicker">STEP 3　3／6</p>
            <h1>少しの枚数で試し、うまくいったらスキルにする</h1>
            <ol>
              <li>最初から10枚ぜんぶは使わない。<strong>うまくいきそうな2枚＋エラーになりそうな1枚</strong>（例：1・2・3枚目）だけを「未処理」に入れて試す</li>
              <li>うまくいったら、<strong>同じチャットの続き</strong>で「/Skill Creator」を呼び、「ここまでの作業をスキル化してください」と送る</li>
              <li>残りの7枚（4〜10枚目）を「未処理」に入れ、作ったスキルで試す</li>
            </ol>
            <div class="callout">これまでは新しいチャットでスキルを作りました。<strong>うまくいったチャットの続きで Skill Creator を呼ぶ</strong>と、やりとりで直した所もふくめて、そのままスキルにできます。</div>
            <p>スキルの作り方を忘れたら：<a href="#/course/coworkskillmake/make" data-link>スキルを作成して呼び出す</a></p>
          `
      },
      {
        id: "answer",
        title: "解説：答えの指示文",
        body: `
            <p class="kicker">解説　4／6</p>
            <h1>答えの指示文（一例）</h1>
            <p>先生の答えをもとにした一例です。フォルダ名や列は、自分用に変えてかまいません。</p>
            ${talk([
              { me: `スマホで撮ったレシート画像を読み取り、経費精算シートへの転記と画像の仕分けまでをお願いします。

Google ドライブの「EP26」フォルダ（［フォルダの URL］）に「未処理」「処理済み」「エラー」の3つのフォルダを作成してください。
パソコンの「EP26」フォルダに、Excel 形式の「経費精算シート.xlsx」を作成してください。ヘッダー行（1行目）は「処理日、日付、金額、支払先、ステータス、ファイル名、備考」の7列にしてください。
読み取った内容を1枚1行で追記し、転記できた画像は「処理済み」へ、読み取れなかった画像とレシートではない画像は「エラー」へ移動してください。
シートがなければ新規作成、すでにあれば作り直さず最終行の下に追記してください。

「未処理」フォルダに入っているファイルすべてを対象にしてください。

日付は「YYYY/MM/DD」形式、金額は税込みの整数で書いてください。
読み取れない項目は空欄にせず「要確認」と書いてください。` }
            ], "")}
            <table>
              <thead><tr><th>要素</th><th>ポイント</th></tr></thead>
              <tbody>
                <tr><td>目的</td><td>最初に書く</td></tr>
                <tr><td>完成物①フォルダ</td><td>フォルダ名だけでは分からないので、URL を渡す</td></tr>
                <tr><td>完成物②シート</td><td>大事なのは「Excel 形式」と伝えること。最低限いるのは日付・金額・支払先・ステータスの4列（処理日・ファイル名・備考は、先生が足したもの）</td></tr>
                <tr><td>完成物③仕分け</td><td>エラーにする条件まで、具体的に書く</td></tr>
                <tr><td>書き足しの一文</td><td>スキルにしたあとの、2回目からを考えた一文</td></tr>
                <tr><td>条件</td><td>AI が勝手に決めそうな所（日付の形、税込みか税抜きか、読めないときどうするか）は指定する</td></tr>
              </tbody>
            </table>
            <p>本当は最後に「まず1枚だけ処理して見せてください」と入れるのがおすすめです（解説では時間の都合で省いています）。</p>
            <h2>よくあるまちがい</h2>
            <table>
              <thead><tr><th>まちがい</th><th>起きること</th></tr></thead>
              <tbody>
                <tr><td>列を決めずにシートを作らせる</td><td>AI が勝手にいろいろな列を作ってしまう</td></tr>
                <tr><td>写真の仕分けの指示がぬける</td><td>フォルダ分けされない</td></tr>
              </tbody>
            </table>
          `
      },
      {
        id: "demo",
        title: "解説：実演の流れ",
        practice: true,
        body: `
            <p class="kicker">解説　5／6</p>
            <h1>試す → スキルにする → 残りで確かめる</h1>
            ${talk([
              { do: "作業用のフォルダを2か所に用意する（パソコン：経費精算シートの置き場「EP26」／Google ドライブ：レシートの置き場「EP26」）" },
              { do: "新しいチャットで Cowork。指示を貼って URL を差しかえ、パソコンの「EP26」は「フォルダ追加」で選んで「常に許可」→ 送る" },
              { ai: `「未処理」「処理済み」「エラー」の3つのフォルダを作りました。ただ、「未処理」フォルダが空のため、読み取るレシートがありません。画像を入れたら「作業を続けて」とお知らせください。` },
              { do: "レシートを3枚（1・2・3枚目）だけ「未処理」に入れる" },
              { me: `作業を続けてください。` },
              { me: `ブラウザを使用せず、コネクタを使用してください。` },
              { ai: `3枚を処理しました。\n\n・処理済み：2枚（receipt-01.jpg、receipt-02.jpg）\n・エラー：1枚（receipt-03.jpg：暗くてぶれており、日付と金額が読み取れません）\n\n経費精算シート.xlsx に2行を追記し、エラーの理由は備考に書いています。` }
            ])}
            <ul>
              <li>右上の「進行状況」で、今どの段階かを見られる</li>
              <li>指示が少し足りなくても、Cowork が気づいて案内してくれる。案内や質問に答えながら進めればよい（出方は人によってちがう）</li>
              <li>ブラウザ（Claude in Chrome）を使おうとしたら止めて、コネクタを使うように言う。この課題では Chrome は使わない</li>
            </ul>
            <h2>同じチャットでスキルにする</h2>
            ${talk([
              { me: `/Skill Creator この作業をスキル化してください。` },
              { ai: `スキルにする前に、いくつか確認させてください。\n・フォルダは毎回指定できるようにしますか？\n・シートに書きこむ前に、確認をはさみますか？` },
              { do: "質問に答える（例：フォルダは毎回指定できる形に／書きこむ前の確認はなし／この場で中身を見る）" },
              { do: "「Receipt Expense Entry」のようなスキルができる（名前は人による）。途中で直した「コネクタを使う」も入っている。★「スキルを保存」を押すのを忘れない" }
            ])}
            <h2>新しいチャットで、残りの7枚を試す</h2>
            ${talk([
              { do: "残りの7枚（4〜10枚目）を「未処理」に入れる" },
              { do: "新しいチャットで「/rece…」と打ってスキルを選び、そのまま送る" },
              { ai: `7枚を処理しました。\n\n・処理済み：5枚（うち1枚は支払先がうすく「要確認」）\n・エラー：2枚（receipt-08.jpg：しわくちゃで読み取れません／receipt-09.jpg：レシートではなく猫の画像です）\n\n経費精算シート.xlsx の、前回の行の下に追記しました。` }
            ])}
            <p>スキルに書いたとおりの作業なら、スキル名だけで送れば動きます。いつもとちがう条件があるときだけ、言葉を書き足します。</p>
            <div class="callout">Excel を開いたままだと、ファイルが使用中だという警告が出ることがあります。そのときは閉じてからやりなおすと確実です。</div>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">まとめ　6／6</p>
            <h1>試して、確かめて、スキルにする</h1>
            <ol>
              <li>書き足していくシートは、今は Google スプレッドシートではなくパソコンの Excel にする</li>
              <li>フォルダは URL で渡す。列とエラーの条件は具体的に書く</li>
              <li>読めない所は「要確認」。推測で埋めさせない</li>
              <li>最初は3枚くらいで試し、うまくいったら同じチャットの続きで Skill Creator</li>
              <li>「スキルを保存」を押してから、残りで確かめる</li>
            </ol>
            <h2>応用</h2>
            <p>取る項目を増やす、請求書などほかの書類にも使う、確定申告の準備に使う、などに広げられます。</p>
            <div class="callout warn">本物のレシートや領収書には、カードの番号の一部や住所が入っていることがあります。置くフォルダは自分だけが見られる場所にし、シートの数字は経費として出す前に自分で確かめます。</div>
            <p>まとめ表：<a href="materials/cowork-receipt.xlsx" download>演習の内容（Excel）</a>　<a href="materials/cowork-receipt-answer.xlsx" download>解説（Excel）</a></p>
            <p><a class="btn-orange" href="#/course/coworkschedule" data-link>次へ：スケジュール実行で定期タスク化する</a>
            <a class="btn-dark" href="#/course/coworkprogress" data-link>複数プロジェクトの進捗を管理・分析するへ</a></p>
          `
      }
    ]
  };
})();
