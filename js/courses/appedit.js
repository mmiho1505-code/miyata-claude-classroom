(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.appedit = {
    id: "appedit",
    title: "アプリ画面の編集",
    subtitle: "作ったアプリの画面を、日本語のお願いで直していく",
    duration: "約25分",
    audience: "アプリを1つ作った人／初心者向け・お願い例つき",
    lessons: [
      {
        id: "goal",
        title: "直し方の流れ",
        was: ["appedit/goal", "appedit/cando", "appedit/words", "appedit/flow"],
        body: `
            <p class="kicker">GOAL　1／5</p>
            <h1>コードを書かず、お願いで画面を直す</h1>
            <div data-pic="mouse" data-cap="文字・色・配置・部品まで、お願いして直す"></div>
            <p>作った日報アプリの見出しが「現場日報」のままです。コードは書かず、「見出しを『日報かんたん入力』に変えて」と頼みます。</p>
            <p>文字・色・配置・部品、スマホ対応、不具合まで直せます。アプリがまだ無い人は、先に <a href="#/course/secretary" data-link>秘書アプリの作り方</a> へ。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>場所を見つける</h3><p>どこを直すか決める</p></article>
              <article class="op"><span class="num">2</span><h3>お願いする</h3><p>「〜を〜に」と伝える</p></article>
              <article class="op"><span class="num">3</span><h3>プレビューで確認</h3><p>結果をその場の画面で見る</p></article>
              <article class="op"><span class="num">4</span><h3>よければ保存</h3><p>保存（コミット）しておけば前に戻せる</p></article>
            </div>
          `
      },
      {
        id: "text",
        title: "文字・見た目・配置",
        practice: true,
        was: ["appedit/text"],
        body: `
            <p class="kicker">PATTERN 1　2／5</p>
            <h1>今の文言と、あとの文言をセットで頼む</h1>
            <div data-pic="copy" data-cap="「〜を〜に」と書いて貼る"></div>
            <p>直したいものを下から選び、コピーして自分のClaudeに貼ります。</p>
            <h2>文字を直す</h2>
            ${box("トップの見出しを『現場日報』から『日報かんたん入力』に変えて。")}
            <h2>色・見た目を変える</h2>
            ${box("保存ボタンの色を、目立つオレンジにして。角も少し丸くして。")}
            <h2>配置・レイアウトを直す</h2>
            ${box("入力欄を縦1列に並べて、余白を広めに。スマホでも押しやすく。")}
            <h2>文字の大きさ・読みやすさ</h2>
            ${box("本文の文字を少し大きく、行間も広げて読みやすくして。")}
          `
      },
      {
        id: "parts",
        title: "部品・スマホ・不具合",
        practice: true,
        was: ["appedit/parts"],
        body: `
            <p class="kicker">PATTERN 2　3／5</p>
            <h1>部品も不具合も、お願いするだけ</h1>
            <h2>部品を足す／消す</h2>
            ${box("日付の下に『天気』を選ぶ欄を追加して。晴れ・くもり・雨の3択で。")}
            <h2>スマホ対応にする</h2>
            ${box("スマホで見ると崩れる。1カラムにして、文字とボタンを大きくして。")}
            <h2>不具合を直す</h2>
            <p>エラー文はそのまま貼ります。パスワードは書かないでください。</p>
            ${box("送信を押すとエラーになる。画面のエラー文はこれ（ここに貼る）。原因と直し方を教えて。")}
          `
      },
      {
        id: "where",
        title: "場所の伝え方",
        was: ["appedit/where", "appedit/tips"],
        body: `
            <p class="kicker">PLACE　4／5</p>
            <h1>“どこを”を画面の言葉で指す</h1>
            <p>「ちょっと直して」だけだと、別のボタンまで変わります。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>画面で指す</h3><p>「トップの」「日報入力の」など</p></article>
              <article class="op"><span class="num">2</span><h3>文言で指す</h3><p>「“保存”ボタン」「“天気”の欄」</p></article>
              <article class="op"><span class="num">3</span><h3>スクショで指す</h3><p>「この赤丸の部分」と画像を見せる</p></article>
              <article class="op"><span class="num">4</span><h3>一度に1か所</h3><p>見て確かめてから次へ</p></article>
            </div>
            <p>見た目は「もっと明るく」「大きく」で伝わります。違ったら「さっきの状態に戻して」と頼みます。</p>
          `
      },
      {
        id: "safety",
        title: "安全とつまずき",
        was: ["appedit/safety", "appedit/trouble", "appedit/summary"],
        body: `
            <p class="kicker">SAFETY　5／5</p>
            <h1>保存してから直し、見てから出す</h1>
            <div data-pic="safety" data-cap="直す前に保存。見てから本番へ"></div>
            <div class="callout warn">直す前に保存（コミット）します。プレビューとスマホで見てから本番へ。公開中のアプリは、テスト用で試してから直します。</div>
            <div class="qa"><p><strong>Q. 直したのに変わらない</strong></p><p>画面を再読み込み。正しいファイルを直しているか確認します。</p></div>
            <div class="qa"><p><strong>Q. 別の場所まで変わった</strong></p><p>「〇〇の部分だけ」と範囲をはっきり伝えて直します。</p></div>
            <div class="qa"><p><strong>Q. 見た目が崩れた</strong></p><p>「さっきの状態に戻して」で戻し、少しずつやり直します。</p></div>
            <div class="qa"><p><strong>Q. どこを直すか伝わらない</strong></p><p>スクリーンショットを見せて「ここ」と指します。</p></div>
          `
      }
    ]
  };
})();
