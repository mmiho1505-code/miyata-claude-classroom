(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.portalmake = {
    id: "portalmake",
    title: "社内ポータルを作ろう（作り方編）",
    subtitle: "話しかけるだけで、お知らせ・予定・リンク・連絡先の1ページを作る",
    duration: "約30分",
    audience: "チャットで作業を任せる人／事務・総務・各部署",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">GOAL</p>
            <h1>社員が毎朝開く、1ページを作る</h1>
            <p>朝、メールとフォルダとカレンダーを別々に開いています。お知らせはチャットの奥です。今日はそれを1ページにまとめます。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>作る</h3><p>同じチャットに「作って」と頼む。プログラミングは不要です</p></article>
              <article class="op"><span class="num">2</span><h3>確かめる</h3><p>パソコンとスマホで、中身が正しいか見る</p></article>
              <article class="op"><span class="num">3</span><h3>見せる</h3><p>社員が開けるリンクを渡す</p></article>
            </div>
            <div class="callout">以前の Cowork は、今この同じ画面に入っています。別の場所へは切り替えません。</div>
          `
      },
      {
        id: "what",
        title: "同じチャットで作る",
        body: `
            <p class="kicker">違い</p>
            <h1>左に Cowork は、探さない</h1>
            <p>相談も、ページを作ることも、この画面です。以前「Cowork（コワーク）」として別の場所にあった機能は、今このチャットに入っています。資料作成・分析・調べもの・ファイル出力も、会話も、同じ画面です。</p>
            <div class="ops">
              <article class="op"><span class="num">話</span><h3>会話</h3><p>相談する。文章で答えてくれます</p></article>
              <article class="op"><span class="num">作</span><h3>作業</h3><p>ページやファイルまで作ってくれます。今日はこちら</p></article>
            </div>
            <p>ポータルは「作ってもらう仕事」なので、同じチャットに「作って」と頼むだけです。</p>
          `
      },
      {
        id: "image",
        title: "完成のイメージ",
        body: `
            <p class="kicker">完成形</p>
            <h1>開いた瞬間に、よく見る4つが並ぶ</h1>
            <p>最初の1枚は、この4つだけにします。上からこの順です。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>お知らせ</h3><p>日付つきで、新しいものが上</p></article>
              <article class="op"><span class="num">2</span><h3>今月の予定</h3><p>会議・休業・提出期限など</p></article>
              <article class="op"><span class="num">3</span><h3>よく使うリンク</h3><p>勤怠・メール・社内フォルダなど。押したら別の画面へ</p></article>
              <article class="op"><span class="num">4</span><h3>部署の連絡先</h3><p>名前・内線・メール。携帯番号は載せない</p></article>
            </div>
            <div class="callout">出退勤や経費精算は、5つ目のブロックにしないでください。よく使うリンクのボタンから開きます。</div>
            <div class="callout">社名は「株式会社 宮田財務」。色は落ち着いた緑か青。パソコンでもスマホでも見やすく、が目標です。</div>
          `
      },
      {
        id: "flow",
        title: "今日の流れ",
        body: `
            <p class="kicker">4ステップ</p>
            <h1>開く → 貼る → 自分の目で見る → 渡す</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>開く</h3><p>claude.ai またはパソコンの Claude で、新しいチャットを開く</p></article>
              <article class="op"><span class="num">2</span><h3>頼む</h3><p>下の見本文を貼って送る</p></article>
              <article class="op"><span class="num">3</span><h3>確かめる</h3><p>出てきたページを、自分の目で見る</p></article>
              <article class="op"><span class="num">4</span><h3>渡す</h3><p>リンクをお気に入りに保存し、社員に共有する</p></article>
            </div>
            <p>直し方（お知らせの追加・番号の変更）は、次の講座 <a href="#/course/portalfix" data-link>直し方編</a> です。</p>
          `
      },
      {
        id: "open",
        title: "チャットを開く",
        body: `
            <p class="kicker">STEP 1</p>
            <h1>新しいチャットを1つ。別メニューへは行かない</h1>
            <ol>
              <li>パソコンで <a href="https://claude.ai" target="_blank" rel="noopener">claude.ai</a> を開く。アプリでも同じです</li>
              <li>新しいチャットを始める</li>
              <li>左に「Cowork」が無くても探さない。今はチャットの中です</li>
            </ol>
            <div class="callout">スマホだけだと、できたページの確認がしにくいことがあります。できればパソコンで進めてください。</div>
          `
      },
      {
        id: "ask",
        title: "見本文を貼る",
        practice: true,
        body: `
            <p class="kicker">STEP 2　練習</p>
            <h1>この文をコピーして、入力欄に貼って送る</h1>
            <p>まずはこのまま送ります。社名やリンクは、あとから直せます。長い文でも大丈夫です。一度に全部書いて送ってください。</p>
            ${box(`当社の社内ポータルを1ページ作ってください。

1ページに載せるのは次の4つだけ。上からこの順です。
1. お知らせ（3件まで。日付つき。新しいものが上）
2. 今月の予定（会議・休業・提出期限）
3. よく使うリンク（勤怠、メール、社内フォルダ。出退勤や経費はここに置く。押したら別の画面へ）
4. 部署の連絡先（名前・内線・メール。携帯番号は載せない）

見た目
・パソコンでもスマホでも見やすく
・落ち着いた色（緑か青）
・社名は「株式会社 宮田財務」

できたら、社員が開けるリンクをください。`)}
          `
      },
      {
        id: "tips",
        title: "誰が・何を・どんな感じで",
        practice: true,
        body: `
            <p class="kicker">伝え方</p>
            <h1>一発で近づくのは、この3行</h1>
            <p>オレンジの「コピー」を押すか、黒い枠の文を長押ししてコピーできます。チャットの入力欄に貼ってください。</p>
            <p>誰が使うか、何を載せるか、どんな感じか。この3つが書いてあれば十分です。</p>
            ${box(`誰が使うか：全社員が毎朝開く`)}
            ${box(`何を載せるか：上から、お知らせ、今月の予定、よく使うリンク、部署の連絡先。1ページはこの4つだけ`)}
            ${box(`どんな感じか：落ち着いた緑、文字は大きめ`)}
            <p>初めて作るときは、下の1本をそのまま貼って大丈夫です。</p>
            ${box(`当社の社内ポータルを1ページ作ってください。

誰が使うか：全社員が毎朝開く
何を載せるか：上から、お知らせ、今月の予定、よく使うリンク、部署の連絡先。1ページはこの4つだけ
よく使うリンクには勤怠・メール・社内フォルダ。出退勤や経費はリンクのボタンから開く
どんな感じか：落ち着いた緑、文字は大きめ
社名は「株式会社 宮田財務」
パソコンでもスマホでも見やすく
連絡先に携帯番号は載せない

できたら、社員が開けるリンクをください。`)}
            <p>直し方は <a href="#/course/portalfix" data-link>直し方編</a> です。仮の内容でも、あとから差し替えできます。</p>
          `
      },
      {
        id: "answer",
        title: "質問に答える",
        body: `
            <p class="kicker">STEP 3</p>
            <h1>色や項目を聞かれたら、短く答える</h1>
            <p>分からなければ「おまかせで進めて」と書きます。仮の内容で作ってくれます。</p>
            <div class="ops">
              <article class="op"><span class="num">A</span><h3>分かるとき</h3><p>「お知らせは3件」「内線は3桁」など、知っている範囲で答える</p></article>
              <article class="op"><span class="num">B</span><h3>分からないとき</h3><p>「おまかせで進めて」と書く。仮の内容で作ってくれます</p></article>
            </div>
            <p>仮の電話番号や予定でも、あとから <a href="#/course/portalfix" data-link>直し方編</a> で差し替えできます。</p>
          `
      },
      {
        id: "share",
        title: "確認してから渡す",
        body: `
            <p class="kicker">STEP 4</p>
            <h1>自分で見てから、リンクを渡す</h1>
            <table>
              <thead><tr><th>見ること</th><th>OKの目安</th></tr></thead>
              <tbody>
                <tr><td>並び</td><td>上から お知らせ → 予定 → リンク → 連絡先</td></tr>
                <tr><td>社名</td><td>株式会社 宮田財務 と出ている</td></tr>
                <tr><td>お知らせ</td><td>日付があり、新しいものが上</td></tr>
                <tr><td>リンク</td><td>押して、行きたい場所に着く</td></tr>
                <tr><td>スマホ</td><td>文字が小さすぎない</td></tr>
              </tbody>
            </table>
            <ol>
              <li>ページをお気に入り（ブックマーク）に保存する</li>
              <li>リンクをコピーして、社員に渡す（メールやチャット）</li>
            </ol>
            <div class="callout">リンクは、あとから中身を直しても変わりません。毎回送り直す必要はありません。</div>
            <p><a href="https://claude.ai/artifact/2z9qPrxtUiCPgjVbA7Uuiu" target="_blank" rel="noopener">社内ポータルの見本</a></p>
          `
      },
      {
        id: "trouble",
        title: "うまくいかないとき",
        body: `
            <p class="kicker">困ったとき</p>
            <h1>今の画面と、当てはまる行だけ見る</h1>
            <table>
              <thead><tr><th>こんなとき</th><th>こうする</th></tr></thead>
              <tbody>
                <tr><td>左に Cowork が無い</td><td>探さない。同じチャットで「作って」と頼む</td></tr>
                <tr><td>ページができない</td><td>見本文をもう一度、そのまま貼って送る</td></tr>
                <tr><td>色や配置が違う</td><td>「もっと落ち着いた緑に」「文字を大きく」と具体的に頼む</td></tr>
                <tr><td>リンクが開けない</td><td>共有（シェア）になっているか確認する</td></tr>
                <tr><td>スマホで見づらい</td><td>「スマホでも読みやすくして」と頼む</td></tr>
              </tbody>
            </table>
          `
      },
      {
        id: "safety",
        title: "3つの約束",
        body: `
            <p class="kicker">注意</p>
            <h1>渡す前に見る。秘密の数字は載せない</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>載せる前に見る</h3><p>日付・番号・名前は、自分の目で確認してから共有する</p></article>
              <article class="op"><span class="num">2</span><h3>すぐ届く</h3><p>リンクを渡した相手にも、同じ内容がすぐに見えます</p></article>
              <article class="op"><span class="num">3</span><h3>載せない</h3><p>パスワード、社員の住所・携帯番号、給与などの個人情報</p></article>
            </div>
          `
      },
      {
        id: "practice",
        title: "20分で作ってみる",
        practice: true,
        body: `
            <p class="kicker">演習</p>
            <h1>新しいチャットに貼って、1ページ出す</h1>
            <ol>
              <li>Claude の新しいチャットを開く</li>
              <li>前のページの見本文を貼って送る</li>
              <li>出てきたページを、パソコンとスマホで見る</li>
              <li>リンクをお気に入りに保存する</li>
            </ol>
            <p>できたリンクは、次の <a href="#/course/portalfix" data-link>直し方編</a> で使います。閉じずに残してください。</p>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">覚えておくこと</p>
            <h1>貼る。見てから渡す。リンクは変わらない</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>チャットに頼む</h3><p>同じ画面。別の場所へは切り替えない</p></article>
              <article class="op"><span class="num">2</span><h3>見本文を貼る</h3><p>誰が・何を・どんな感じで、が書いてあれば十分</p></article>
              <article class="op"><span class="num">3</span><h3>見てから渡す</h3><p>リンクは変わらない。中身の最終チェックは人の仕事</p></article>
            </div>
            <p><a href="materials/portal-make.pdf" download>スライドPDF（作り方編）</a></p>
            <p><a class="btn-orange" href="#/course/portalfix" data-link>直し方編へ</a>
            <a class="btn-dark" href="#/" data-link>ホームへ</a></p>
          `
      }
    ]
  };

  CLASSROOM.courses.portalfix = {
    id: "portalfix",
    title: "社内ポータルを直そう（直し方編）",
    subtitle: "お知らせの追加も、番号の変更も、頼むだけ",
    duration: "約25分",
    audience: "作り方編を終えた人／ポータルの更新担当",
    lessons: [
      {
        id: "prep",
        title: "手元に用意するもの",
        body: `
            <p class="kicker">はじめる前に</p>
            <h1>お気に入りのページと、作った会話</h1>
            <p>前回お気に入りに保存したリンクを開きます。履歴から、ポータルを作った会話も開きます。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>ポータルのリンク</h3><p>前回お気に入りに保存したページ。開けるか確認</p></article>
              <article class="op"><span class="num">2</span><h3>作ったときの会話</h3><p>履歴から、ポータルを作った会話を開く</p></article>
            </div>
            <p>まだ作っていない方は、<a href="#/course/portalmake" data-link>作り方編</a>の見本文で先に1つ作りましょう。</p>
          `
      },
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">GOAL</p>
            <h1>お知らせを足し、番号を変え、失敗したら戻す</h1>
            <p>棚卸しの午後休業を一番上に足したい、内線が変わった、古い予定が残っている。今日はそれを、同じ会話の続きで直します。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>足す</h3><p>新しいお知らせや予定、リンクを追加する</p></article>
              <article class="op"><span class="num">2</span><h3>変える</h3><p>電話番号や日付、色や文字の大きさを変える</p></article>
              <article class="op"><span class="num">3</span><h3>消す・戻す</h3><p>古い情報を消し、失敗したら元に戻す</p></article>
            </div>
          `
      },
      {
        id: "what",
        title: "直し方の結論",
        body: `
            <p class="kicker">結論</p>
            <h1>ページの中は触らない。続きに書く</h1>
            <p>コードも、デザインソフトも使いません。作ったときの会話の続きに、「〇〇を△△に変えて」と書くだけです。</p>
          `
      },
      {
        id: "flow",
        title: "同じ会話の続きに書く",
        body: `
            <p class="kicker">編集のしかた</p>
            <h1>戻る → 頼む → ページを開き直す</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>会話に戻る</h3><p>ポータルを作った会話の画面を開く</p></article>
              <article class="op"><span class="num">2</span><h3>頼む</h3><p>「〇〇を△△に変えて」と入力して送る</p></article>
              <article class="op"><span class="num">3</span><h3>開き直す</h3><p>ページを開き直すと、直った状態になる</p></article>
            </div>
            <div class="callout">リンク（アドレス）は変わりません。社員に送り直す必要はありません。</div>
          `
      },
      {
        id: "promptwork",
        title: "よくある直し方",
        practice: true,
        body: `
            <p class="kicker">お願いの例文　練習</p>
            <h1>近い文をコピーして、数字と日付だけ直す</h1>
            <p>項目の場所を変えるときも、ページの中を自分でドラッグする必要はありません。「何を・どこへ」と書いて送ります。</p>
            ${box(`お知らせに『10/20 棚卸しのため午後休業』を一番上に追加して`)}
            ${box(`総務の内線を101から105に変えて`)}
            ${box(`終わった9月の予定は消して`)}
            ${box(`よく使うリンクに『経費精算』を追加。アドレスは［URL］`)}
            <p>この文の <strong>［URL］</strong> は穴埋めです。ポータルに載せるボタンの名前が「経費精算」、押した先が本当のページ、という意味です。コピーしたあと、［URL］を自分の会社のページに直して送ります。例：<code>https://kessai.example.co.jp</code>（仮です）</p>
            ${box(`よく使うリンクに『経費精算』を追加して。押したら https://kessai.example.co.jp に行くように`)}
            ${box(`よく使うリンクの『勤怠』を一番上に移して`)}
            ${box(`『今月の予定』のブロックを、『お知らせ』のすぐ下に移して`)}
            ${box(`お知らせの2番目と3番目を入れ替えて`)}
            ${box(`全体の文字をもう一回り大きく
色を落ち着いた青系に`)}
            ${box(`さっきの変更は取り消して、ひとつ前に戻して`)}
            ${box(`1ページは4つのブロックだけ。上から お知らせ、今月の予定、よく使うリンク、部署の連絡先 の順にして。出退勤はよく使うリンクのボタンから開くように`)}
          `
      },
      {
        id: "tips",
        title: "伝え方のコツ",
        body: `
            <p class="kicker">コツ</p>
            <h1>「いい感じに」より、「101から105に」</h1>
            <p>場所を言い、変える前と後を書き、1回は1〜3個までです。終わったら次を頼みます。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>どこを</h3><p>「お知らせの一番上」「総務の連絡先」など場所を言う</p></article>
              <article class="op"><span class="num">2</span><h3>前 → 後</h3><p>「101から105に」のように、変える前と後を書く。移すときは「勤怠を一番上に」</p></article>
              <article class="op"><span class="num">3</span><h3>少しずつ</h3><p>1回に頼むのは1〜3個まで。終わったら次を頼む</p></article>
            </div>
            <p>1ページにブロックを増やしたくなったら、まず <strong>よく使うリンク</strong> にボタンを足してください。お知らせや予定の横に、出退勤の画面を丸ごと置かないほうが迷いません。</p>
          `
      },
      {
        id: "later",
        title: "別の日に直すとき",
        body: `
            <p class="kicker">後日</p>
            <h1>会話が見つからなければ、リンクを添える</h1>
            <div class="ops">
              <article class="op"><span class="num">A</span><h3>前の会話が見つかる</h3><p>履歴から、ポータルを作った会話を開いて続きに書く</p></article>
              <article class="op"><span class="num">B</span><h3>見つからない</h3><p>新しいタスクで、ポータルのリンクを貼ってお願いする</p></article>
            </div>
            ${box(`このページのお知らせを更新してください。[ポータルのリンク]
10月の健康診断のお知らせを消して、11月の年末調整の案内を追加`)}
          `
      },
      {
        id: "newstaff",
        title: "新しい社員のパスワード",
        practice: true,
        body: `
            <p class="kicker">入社のとき　練習</p>
            <h1>管理者が最初のパスワードを決めて、本人に手渡す</h1>
            <p>4月から佐藤さんが入社します。ポータルに入れるように、管理画面で社員番号と最初のパスワードを作り、本人に渡します。本人は最初に入ったとき、自分のパスワードに変えます。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>仕組みを足す</h3><p>最初の1回だけ。ログイン画面と、管理画面の「社員の追加」を作ってもらう</p></article>
              <article class="op"><span class="num">2</span><h3>社員を足す</h3><p>管理画面で名前・社員番号・最初のパスワードを入れる</p></article>
              <article class="op"><span class="num">3</span><h3>手渡す</h3><p>リンクはメール、パスワードは紙か口頭で。同じメールに書かない</p></article>
              <article class="op"><span class="num">4</span><h3>本人が変える</h3><p>最初のログインで、本人が自分のパスワードに変える</p></article>
            </div>
            <h2>1. 最初の1回だけ：ログインの仕組みを頼む</h2>
            <p>ポータルを作った会話の続きに貼ります。</p>
            ${box(`ポータルに、社員番号とパスワードで入るログイン画面を追加してください。
・管理画面に「社員の追加」をつくり、名前・部署・社員番号・最初のパスワードを登録できるように
・最初のパスワードで入った人には、自分のパスワードへの変更を必ずさせる
・パスワードは8文字以上。英字と数字をまぜる
・パスワードはそのまま保存せず、管理者にも見えない形で保存する
・5回まちがえたら15分入れないようにする
・管理画面に「パスワードを初期化」と「この社員を止める」のボタンをつける`)}
            <h2>2. 入社のたびに：管理画面で社員を足す</h2>
            <ol>
              <li>ポータルを開き、管理画面の「社員の追加」を押す</li>
              <li>名前・部署・社員番号を入れる（例：佐藤 花子／総務／1025）</li>
              <li>最初のパスワードを決めて入れる（例のまま使わず、人ごとに変える）</li>
              <li>保存して、一覧に佐藤さんが出たか見る</li>
            </ol>
            <p>パスワードは、Claude のチャットに書かずに、管理画面に自分で入れます。</p>
            <h2>3. 本人に渡す</h2>
            ${box(`佐藤さん
社内ポータルのリンクです。［ポータルのリンク］
社員番号は 1025 です。最初のパスワードは、別にお渡しした紙をご覧ください。
最初に入ると、パスワードの変更画面が出ます。ご自身だけが分かるものに変えてください。`)}
            <p><strong>［ポータルのリンク］</strong> は穴埋めです。最初のパスワードは、このメールには書きません。紙で手渡すか、口頭で伝えます。</p>
            <h2>4. こんなとき</h2>
            <table>
              <thead><tr><th>こんなとき</th><th>こうする</th></tr></thead>
              <tbody>
                <tr><td>パスワードを忘れた</td><td>管理画面で「パスワードを初期化」。新しい最初のパスワードを、また手渡す</td></tr>
                <tr><td>入れなくなった（5回まちがえた）</td><td>15分待ってもらう。急ぎなら初期化する</td></tr>
                <tr><td>退職した</td><td>その日のうちに「この社員を止める」を押す</td></tr>
                <tr><td>ボタンが見つからない</td><td>作った会話の続きに「社員の追加はどこ？」と聞く</td></tr>
              </tbody>
            </table>
            <div class="callout warn">パスワードを、ポータルのお知らせ・チャット・メールに書かないでください。パスワードの一覧表も作りません。この仕組みは簡単な鍵です。給与やマイナンバーのように大事な情報は、ポータルに置かないでください。</div>
          `
      },
      {
        id: "trouble",
        title: "うまく直らないとき",
        body: `
            <p class="kicker">困ったとき</p>
            <h1>変わらないときは、まず再読み込み</h1>
            <table>
              <thead><tr><th>こんなとき</th><th>こうする</th></tr></thead>
              <tbody>
                <tr><td>直したのに変わらない</td><td>ページを再読み込み（更新）する</td></tr>
                <tr><td>違う場所が変わった</td><td>「元に戻して」→ 場所を具体的に言い直す</td></tr>
                <tr><td>思った見た目と違う</td><td>「もっと〇〇に」と具体的に伝え直す</td></tr>
                <tr><td>どのページか聞き返された</td><td>ポータルのリンクを貼ってお願いする</td></tr>
                <tr><td>社員に古い内容が見える</td><td>社員側でも再読み込みしてもらう</td></tr>
              </tbody>
            </table>
          `
      },
      {
        id: "safety",
        title: "直すときの3つの約束",
        body: `
            <p class="kicker">注意</p>
            <h1>直したら見る。社員にもすぐ見える</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>直したら見る</h3><p>変更のたびに、ページを開いて日付・番号・名前を確認</p></article>
              <article class="op"><span class="num">2</span><h3>すぐ届く</h3><p>直した内容は、共有している社員にもすぐ見える</p></article>
              <article class="op"><span class="num">3</span><h3>載せない</h3><p>パスワード、社員の住所・携帯番号、給与などの個人情報</p></article>
            </div>
          `
      },
      {
        id: "practice",
        title: "20分で直してみる",
        practice: true,
        body: `
            <p class="kicker">演習</p>
            <h1>足す、変える、見た目、戻す。この4つ</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>足す</h3><p>お知らせを1件、一番上に追加する</p></article>
              <article class="op"><span class="num">2</span><h3>変える</h3><p>連絡先の内線番号を1つ変える</p></article>
              <article class="op"><span class="num">3</span><h3>見た目</h3><p>色か文字の大きさを好みに変える</p></article>
              <article class="op"><span class="num">4</span><h3>戻す</h3><p>3の変更を「元に戻して」と頼む</p></article>
            </div>
            <p>失敗しても「元に戻して」で大丈夫です。気軽に試しましょう。</p>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">覚えておくこと</p>
            <h1>続きに書く。具体的に。開き直す</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>続きに書く</h3><p>作った会話の続き（なければリンクを貼る）</p></article>
              <article class="op"><span class="num">2</span><h3>具体的に</h3><p>「どこを・どう変えるか」を伝える</p></article>
              <article class="op"><span class="num">3</span><h3>再読み込み</h3><p>直したらページを開き直して、自分の目で確認する</p></article>
            </div>
            <p><a href="materials/portal-fix.pdf" download>スライドPDF（直し方編）</a></p>
            <p><a class="btn-orange" href="#/course/portalmake" data-link>作り方編へ戻る</a>
            <a class="btn-dark" href="#/" data-link>ホームへ</a></p>
          `
      }
    ]
  };

  Object.assign(CLASSROOM.quizzes, {
    portalmake: [
      {
        q: "社内ポータルを作るとき、使うのはどれですか？",
        choices: ["黒い画面（PowerShell）", "同じチャット（以前のCoworkはここに入った）", "必ず別のCoworkアプリ"],
        a: 1,
        explain: "会話も作業も、同じ画面です。別の場所に切り替えなくてよいです。"
      },
      {
        q: "お願い文に入れると近づく3つは？",
        choices: ["誰が使うか・何を載せるか・どんな感じか", "パスワード・口座番号・住所", "英語だけ・絵文字だけ・短さだけ"],
        a: 0,
        explain: "利用者・中身・見た目が書いてあれば十分です。"
      },
      {
        q: "社員にリンクを渡す前に、必ずすることは？",
        choices: ["コードを全部読む", "自分の目で社名・日付・リンクを確認する", "毎日新しいリンクを作り直す"],
        a: 1,
        explain: "最終チェックは人の仕事です。リンクは直しても変わりません。"
      },
      {
        q: "ポータルに載せてはいけないものは？",
        choices: ["今月の予定", "よく使うリンク", "パスワードや給与などの個人情報"],
        a: 2,
        explain: "秘密の数字と個人情報は載せません。"
      },
      {
        q: "最初の1ページに載せる順番で、いちばんよいのは？",
        choices: ["出退勤の画面を一番上に大きく置く", "上から お知らせ → 今月の予定 → よく使うリンク → 部署の連絡先", "パスワード、給与、携帯番号を先に載せる"],
        a: 1,
        explain: "毎朝見る4つだけ。勤怠や経費はよく使うリンクから開きます。"
      }
    ],
    portalfix: [
      {
        q: "ポータルの中身を直す基本は？",
        choices: ["ページの中を自分でいじる", "作った会話の続きに「〇〇を△△に変えて」と書く", "毎回新しいリンクを作る"],
        a: 1,
        explain: "話しかけるだけです。アドレスは変わりません。"
      },
      {
        q: "直したのに画面が変わらないときは？",
        choices: ["パソコンを捨てる", "ページを再読み込み（更新）する", "パスワードを貼る"],
        a: 1,
        explain: "自分も社員も、再読み込みすると新しい内容が見えます。"
      },
      {
        q: "うまく一発で直す伝え方は？",
        choices: ["「いい感じに」とだけ書く", "どこを・変える前と後を具体的に書く", "一度に20個まとめて頼む"],
        a: 1,
        explain: "場所と、前→後が書いてある一言が強いです。1回は1〜3個まで。"
      },
      {
        q: "前の会話が見つからないときは？",
        choices: ["新しいタスクにポータルのリンクを貼ってお願いする", "ポータルを削除する", "チャットにカード番号を書く"],
        a: 0,
        explain: "リンクを添えれば、新しい会話でも直せます。"
      },
      {
        q: "新しい社員の最初のパスワードの渡し方は？",
        choices: ["リンクと同じメールに書いて送る", "管理画面で決めて、紙か口頭で手渡す。最初のログインで本人に変えてもらう", "ポータルのお知らせに載せる"],
        a: 1,
        explain: "リンクとパスワードは別々に渡します。本人が自分のパスワードに変えれば、管理者も知らない状態になります。"
      }
    ]
  });
})();
