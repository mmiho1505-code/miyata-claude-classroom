(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.appedit = {
    id: "appedit",
    title: "アプリ画面の編集のやり方",
    subtitle: "作ったアプリの画面を、日本語のお願いで直していく",
    duration: "約35分",
    audience: "アプリを1つ作った人／初心者向け・お願い例つき",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">GOAL</p>
            <h1>コードを書かず、対話で画面を直す</h1>
            <div data-pic="mouse" data-cap="文字・色・配置・部品まで、お願いして直す"></div>
            <p>秘書アプリなど、作ったあとの画面を直す講座です。むずかしい中身は知らなくて大丈夫。<strong>見て・頼んで・戻せる</strong>が分かれば十分です。</p>
            <ul>
              <li>文字・色・配置・部品まで直せる</li>
              <li>スマホ対応や不具合も、同じくお願いするだけ</li>
              <li>小さく直して、画面で確かめて、また直す</li>
            </ul>
            <p>アプリがまだ無い人は、先に <a href="#/course/secretary" data-link>秘書アプリの作り方</a> をどうぞ。</p>
          `
      },
      {
        id: "cando",
        title: "できること",
        body: `
            <p class="kicker">CAN DO</p>
            <h1>日本語で、画面をこう直せる</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>文字を直す</h3><p>見出し・ボタン名・説明文を書き換え</p></article>
              <article class="op"><span class="num">2</span><h3>見た目を変える</h3><p>色・大きさ・余白・角丸など</p></article>
              <article class="op"><span class="num">3</span><h3>部品を足す／消す</h3><p>入力欄・ボタン・項目の追加や削除</p></article>
            </div>
            <p>さらに「スマホ対応」「不具合の修正」も、同じく“お願い”するだけです。</p>
          `
      },
      {
        id: "words",
        title: "直す前の3つのことば",
        body: `
            <p class="kicker">BASIC</p>
            <h1>知っておく“3つのことば”</h1>
            <ul>
              <li><strong>画面の中身</strong> … 画面は文字・見た目・動きの3つでできている</li>
              <li><strong>プレビュー</strong> … 直した結果を、その場の画面で見て確かめる</li>
              <li><strong>元に戻せる</strong> … 保存（コミット）しておけば、いつでも前に戻せる</li>
            </ul>
            <div class="callout">むずかしい中身は知らなくてOK。“見て・頼んで・戻せる”が分かれば十分です。</div>
          `
      },
      {
        id: "flow",
        title: "基本の流れ",
        body: `
            <p class="kicker">FLOW</p>
            <h1>編集は、この4ステップのくり返し</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>場所を見つける</h3><p>どこを直すか決める</p></article>
              <article class="op"><span class="num">2</span><h3>お願いする</h3><p>「〜を〜に」と伝える</p></article>
              <article class="op"><span class="num">3</span><h3>プレビューで確認</h3><p>結果を画面で見る</p></article>
              <article class="op"><span class="num">4</span><h3>よければ保存</h3><p>元に戻せる状態に</p></article>
            </div>
            <p>小さく直して、確認して、また直す。この積み重ねで理想の画面に近づきます。</p>
          `
      },
      {
        id: "text",
        title: "文字・見た目・配置",
        practice: true,
        body: `
            <p class="kicker">PATTERN 1</p>
            <h1>よく使う編集（1）</h1>
            <div data-pic="copy" data-cap="「〜を〜に」と書いて貼る"></div>
            <p>下の「コピー」を押して、自分のClaudeに貼ります。</p>
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
        body: `
            <p class="kicker">PATTERN 2</p>
            <h1>よく使う編集（2）</h1>
            <div data-pic="mouse" data-cap="部品の追加も、不具合も、お願いするだけ"></div>
            <h2>部品を足す／消す</h2>
            ${box("日付の下に『天気』を選ぶ欄を追加して。晴れ・くもり・雨の3択で。")}
            <h2>スマホ対応にする</h2>
            ${box("スマホで見ると崩れる。1カラムにして、文字とボタンを大きくして。")}
            <h2>不具合を直す</h2>
            <p>エラー文はそのまま貼ります。パスワードは書かないでください。</p>
            ${box("送信を押すとエラーになる。画面のエラー文はこれ（ここに貼る）。原因と直し方を教えて。")}
            <div class="callout">スクショを見せて「この赤丸の部分」と指すと、さらに正確に伝わります。</div>
          `
      },
      {
        id: "where",
        title: "場所の伝え方",
        body: `
            <p class="kicker">PLACE</p>
            <h1>“どこを”直すか、はっきり伝える</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>画面・見出しで指す</h3><p>「トップの」「日報入力の」など、どの画面かを言う</p></article>
              <article class="op"><span class="num">2</span><h3>見えている文言で指す</h3><p>「“保存”ボタン」「“天気”の欄」と、画面の言葉で</p></article>
              <article class="op"><span class="num">3</span><h3>スクショで指す</h3><p>「この赤丸の部分」と画像を見せると確実</p></article>
              <article class="op"><span class="num">4</span><h3>一度に1か所</h3><p>まとめて頼まず、1つずつ直すとミスが減る</p></article>
            </div>
          `
      },
      {
        id: "tips",
        title: "お願いのコツ",
        body: `
            <p class="kicker">TIPS</p>
            <h1>うまく直す4つのコツ</h1>
            <ol>
              <li><strong>before→afterを言う</strong> … 「〇〇を、△△に」と、今と直後をセットで</li>
              <li><strong>見た目は感覚の言葉でOK</strong> … 「もっと明るく」「大きく」で伝わる</li>
              <li><strong>プレビューで確認しながら</strong> … 一気に進めず、見て確かめて次へ</li>
              <li><strong>違ったら戻せばいい</strong> … 「さっきの状態に戻して」で安心して試せる</li>
            </ol>
          `
      },
      {
        id: "safety",
        title: "安全に直す",
        body: `
            <p class="kicker">SAFETY</p>
            <h1>安心して編集するための約束</h1>
            <div data-pic="safety" data-cap="直す前に保存。見てから本番へ"></div>
            <ul>
              <li><strong>直す前に保存</strong> … 編集前にコミット。おかしくなっても戻せる</li>
              <li><strong>プレビューで確認</strong> … 反映前に、画面で見て確かめる</li>
              <li><strong>公開前にスマホ確認</strong> … PCだけでなくスマホでの崩れも見る</li>
              <li><strong>本番は慎重に</strong> … 公開中のアプリは、テスト用で試してから</li>
            </ul>
            <p>くわしくは <a href="#/safety" data-link>安全の約束</a> も見てください。</p>
          `
      },
      {
        id: "trouble",
        title: "つまずき対策",
        body: `
            <p class="kicker">TROUBLE</p>
            <h1>うまくいかない時は？</h1>
            <div class="qa"><p><strong>Q. 直したのに変わらない</strong></p><p>画面を更新（再読み込み）。正しいファイルを直しているか確認します。</p></div>
            <div class="qa"><p><strong>Q. 別の場所まで変わった</strong></p><p>「〇〇の部分だけ」と範囲をはっきり伝えて直します。</p></div>
            <div class="qa"><p><strong>Q. 見た目が崩れた</strong></p><p>「さっきの状態に戻して」で戻し、少しずつやり直します。</p></div>
            <div class="qa"><p><strong>Q. どこを直すか伝わらない</strong></p><p>スクリーンショットを見せて「ここ」と指します。</p></div>
            <p>困ったら、状況をそのまま渡すのが近道です。</p>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">SUMMARY</p>
            <h1>画面編集、こう進める</h1>
            <ol>
              <li>日本語で「〜を〜に」と頼むだけ。文字・色・配置・部品まで直せる</li>
              <li>“どこを”を具体的に。画面名・文言・スクショで指す</li>
              <li>見て・戻せる状態で、少しずつ。プレビュー確認＋保存で安心して試す</li>
            </ol>
            <p>まずは“文字をひとつ”直すところから。慣れれば思いのままです。</p>
            <p><a class="btn-orange" href="#/quiz/appedit" data-link>確認クイズへ</a>
            <a class="btn-dark" href="#/course/applied" data-link>応用編へ</a></p>
          `
      }
    ]
  };

  CLASSROOM.quizzes.appedit = [
    {
      q: "画面を直すときの基本は？",
      choices: ["コードを自分で全部書き直す", "日本語で「〜を〜に」とお願いする", "公開中の画面をいきなり全部変える"],
      a: 1,
      explain: "文字・色・配置・部品まで、対話で直せます。"
    },
    {
      q: "編集の4ステップの順番は？",
      choices: ["保存→お願い→場所→確認", "場所を見つける→お願いする→プレビューで確認→よければ保存", "全部まとめて頼んでから見る"],
      a: 1,
      explain: "小さく直して、確認して、また直します。"
    },
    {
      q: "うまく直すコツに含まれないものは？",
      choices: ["「〇〇を、△△に」と今と直後をセットで言う", "一度に画面全部をまとめて頼む", "違ったら「さっきの状態に戻して」と言う"],
      a: 1,
      explain: "まとめて頼むとミスが増えます。1か所ずつです。"
    },
    {
      q: "直したのに画面が変わらないときの最初は？",
      choices: ["パソコンを初期化する", "画面を再読み込みして、正しいファイルか確認する", "パスワードを貼る"],
      a: 1,
      explain: "更新と、直している場所の確認が先です。"
    },
    {
      q: "公開中のアプリを直すときの約束は？",
      choices: ["本番でいきなり大きく変える", "直す前に保存し、テスト用で試してから本番へ", "確認せずに公開する"],
      a: 1,
      explain: "コミットとプレビュー、スマホ確認をしてから本番です。"
    }
  ];
})();
