(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.portalmake = {
    id: "portalmake",
    title: "社内ポータルを作って直す",
    subtitle: "話しかけるだけで1ページを作り、お知らせの追加や番号の変更も頼むだけ",
    duration: "約35分",
    audience: "チャットで作業を任せる人／事務・総務・ポータルの更新担当",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        was: ["portalmake/goal", "portalmake/what", "portalmake/image", "portalmake/flow"],
        body: `
            <p class="kicker">GOAL　1／7</p>
            <h1>社員が毎朝開く、1ページを作る</h1>
            <p>朝、メールとフォルダとカレンダーを別々に開いています。お知らせはチャットの奥です。今日はそれを1ページにまとめます。</p>
            <p>同じチャットに「作って」と頼むだけです。左に Cowork が無くても探しません。載せるのは上からこの4つだけです。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>お知らせ</h3><p>日付つきで、新しいものが上</p></article>
              <article class="op"><span class="num">2</span><h3>今月の予定</h3><p>会議・休業・提出期限など</p></article>
              <article class="op"><span class="num">3</span><h3>よく使うリンク</h3><p>勤怠・メール・社内フォルダ。出退勤や経費もここから開く</p></article>
              <article class="op"><span class="num">4</span><h3>部署の連絡先</h3><p>名前・内線・メール。携帯番号は載せない</p></article>
            </div>
          `
      },
      {
        id: "ask",
        title: "見本文を貼る",
        practice: true,
        was: ["portalmake/open", "portalmake/ask", "portalmake/tips", "portalmake/answer", "portalmake/practice"],
        body: `
            <p class="kicker">練習　2／7</p>
            <h1>新しいチャットに貼って、1ページ出す</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>開く</h3><p>パソコンで <a href="https://claude.ai" target="_blank" rel="noopener">claude.ai</a>（アプリでも同じ）。新しいチャットを始める</p></article>
              <article class="op"><span class="num">2</span><h3>貼って送る</h3><p>下の文をそのまま。社名やリンクは、あとから直せます</p></article>
              <article class="op"><span class="num">3</span><h3>聞かれたら答える</h3><p>分かる範囲で短く。分からなければ「おまかせで進めて」</p></article>
            </div>
            ${box(`当社の社内ポータルを1ページ作ってください。

誰が使うか：全社員が毎朝開く
1ページに載せるのは次の4つだけ。上からこの順です。
1. お知らせ（3件まで。日付つき。新しいものが上）
2. 今月の予定（会議・休業・提出期限）
3. よく使うリンク（勤怠、メール、社内フォルダ。出退勤や経費はここに置く。押したら別の画面へ）
4. 部署の連絡先（名前・内線・メール。携帯番号は載せない）

見た目
・パソコンでもスマホでも見やすく
・落ち着いた色（緑か青）、文字は大きめ
・社名は「株式会社 宮田財務」

できたら、社員が開けるリンクをください。`)}
          `
      },
      {
        id: "share",
        title: "確認してから渡す",
        was: ["portalmake/share", "portalmake/trouble", "portalmake/safety", "portalmake/summary"],
        body: `
            <p class="kicker">STEP 3　3／7</p>
            <h1>自分で見てから、リンクを渡す</h1>
            <ol>
              <li>並びが お知らせ → 予定 → リンク → 連絡先 か。社名・日付・リンク先を確かめる</li>
              <li>スマホでも文字が小さすぎないか見る</li>
              <li>お気に入りに保存し、リンクを社員にメールやチャットで渡す</li>
            </ol>
            <p>違うときは「もっと落ち着いた緑に」「スマホでも読みやすくして」と具体的に頼みます。リンクが開けないときは共有になっているか確認します。</p>
            <p><a href="https://claude.ai/artifact/2z9qPrxtUiCPgjVbA7Uuiu" target="_blank" rel="noopener">社内ポータルの見本</a>　<a href="materials/portal-make.pdf" download>スライドPDF（作り方編）</a></p>
          `
      },
      {
        id: "fix",
        title: "続きに書いて直す",
        practice: true,
        was: ["portalfix/prep", "portalfix/goal", "portalfix/what", "portalfix/flow", "portalfix/promptwork", "portalfix/tips"],
        body: `
            <p class="kicker">練習　4／7</p>
            <h1>作った会話の続きに「〇〇を△△に」と書く</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>会話に戻る</h3><p>履歴から、ポータルを作った会話を開く</p></article>
              <article class="op"><span class="num">2</span><h3>頼む</h3><p>場所と、変える前と後を書く。1回は1〜3個まで</p></article>
              <article class="op"><span class="num">3</span><h3>開き直す</h3><p>ページを開き直すと直っている。リンクは変わらない</p></article>
            </div>
            ${box(`お知らせに『10/20 棚卸しのため午後休業』を一番上に追加して`)}
            ${box(`総務の内線を101から105に変えて`)}
            ${box(`終わった9月の予定は消して`)}
            ${box(`よく使うリンクに『経費精算』を追加して。押したら https://kessai.example.co.jp に行くように`)}
            <p>アドレスは仮です。自分の会社のページに直して送ります。</p>
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
        id: "later",
        title: "別の日に直す",
        was: ["portalfix/later", "portalfix/trouble"],
        body: `
            <p class="kicker">後日　5／7</p>
            <h1>会話が見つからなければ、リンクを添える</h1>
            <p>新しいチャットで、ポータルのリンクを貼ってお願いします。</p>
            ${box(`このページのお知らせを更新してください。[ポータルのリンク]
10月の健康診断のお知らせを消して、11月の年末調整の案内を追加`)}
            <ul>
              <li>直したのに変わらない → ページを再読み込み。社員にも再読み込みしてもらう</li>
              <li>違う場所が変わった → 「元に戻して」→ 場所を具体的に言い直す</li>
              <li>どのページか聞き返された → ポータルのリンクを貼る</li>
            </ul>
          `
      },
      {
        id: "newstaff",
        title: "新しい社員のパスワード",
        practice: true,
        was: ["portalfix/newstaff"],
        body: `
            <p class="kicker">入社のとき　練習　6／7</p>
            <h1>管理者が最初のパスワードを決めて、本人に手渡す</h1>
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
              <li>管理画面の「社員の追加」を押す</li>
              <li>名前・部署・社員番号を入れる（例：佐藤 花子／総務／1025）</li>
              <li>最初のパスワードを人ごとに決めて入れる。Claude のチャットには書かない</li>
              <li>保存して、一覧に出たか見る</li>
            </ol>
            <h2>3. 本人に渡す</h2>
            ${box(`佐藤さん
社内ポータルのリンクです。［ポータルのリンク］
社員番号は 1025 です。最初のパスワードは、別にお渡しした紙をご覧ください。
最初に入ると、パスワードの変更画面が出ます。ご自身だけが分かるものに変えてください。`)}
            <ul>
              <li>忘れた → 「パスワードを初期化」して、また手渡す</li>
              <li>5回まちがえた → 15分待つ。急ぎなら初期化</li>
              <li>退職した → その日のうちに「この社員を止める」</li>
            </ul>
            <div class="callout warn">パスワードを、お知らせ・チャット・メールに書かないでください。一覧表も作りません。給与やマイナンバーなど大事な情報、社員の住所・携帯番号は、ポータルに置きません。</div>
          `
      },
      {
        id: "summary",
        title: "20分で直してみる",
        practice: true,
        was: ["portalfix/safety", "portalfix/practice", "portalfix/summary"],
        body: `
            <p class="kicker">演習　7／7</p>
            <h1>足す、変える、見た目、戻す</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>足す</h3><p>お知らせを1件、一番上に追加する</p></article>
              <article class="op"><span class="num">2</span><h3>変える</h3><p>連絡先の内線番号を1つ変える</p></article>
              <article class="op"><span class="num">3</span><h3>見た目</h3><p>色か文字の大きさを変える</p></article>
              <article class="op"><span class="num">4</span><h3>戻す</h3><p>3の変更を「元に戻して」と頼む</p></article>
            </div>
            <p>直すたびにページを開いて、日付・番号・名前を確認します。共有している社員にもすぐ見えます。</p>
            <p><a href="materials/portal-fix.pdf" download>スライドPDF（直し方編）</a></p>
          `
      }
    ]
  };
})();
