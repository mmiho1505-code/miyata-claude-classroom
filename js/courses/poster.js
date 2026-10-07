(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.poster = {
    id: "poster",
    title: "求人ポスターとCanva AI",
    subtitle: "ChatGPTで注文書、Canvaで仕上げて、A4を1枚つくる",
    duration: "約60分",
    audience: "はじめての人向け／求人ポスターを作りたい人／Canvaを初めて本格的に触る人",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        was: ["poster/goal", "poster/prompt", "poster/flow", "poster/notes"],
        body: `
            <p class="kicker">GOAL　1／7</p>
            <h1>店のガラスに貼る1枚を、聞かれたことに答えて作る</h1>
            <p>求人を出したい。Canvaを開いても、何を書けばいいか分かりません。</p>
            <div data-pic="poster" data-cap="A4縦の求人ポスターを、1枚仕上げます"></div>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>Pinterest</h3><p>お手本さがし。「こんな感じ」を1枚えらぶ</p></article>
              <article class="op"><span class="num">2</span><h3>ChatGPT</h3><p>何を書くかを一問一答で決め、注文書（プロンプト）を作ってもらう</p></article>
              <article class="op"><span class="num">3</span><h3>Canva</h3><p>紙に仕上げる。最後の手直しはここで</p></article>
            </div>
            <p>道は2つ。A：一問一答 → 注文書 → Canvaに出して「保存して」。B：案を3つ → 画像 → マジックレイヤーで分けて直す。枠の中の文は、そのまま貼ればOKです。一度で完成しなくて普通です。</p>
            <div class="callout warn">文字は崩れることがあります。電話番号・住所・時給は最後に人が1字ずつ読み、Canvaで打ち直します。QRコードやロゴは自分の本物を入れ直します。</div>
          `
      },
      {
        id: "setup",
        title: "Canvaの最初の設定",
        practice: true,
        was: ["canvaai/goal", "canvaai/plan", "canvaai/setup", "canvaai/template"],
        body: `
            <p class="kicker">設定　2／7　練習</p>
            <h1>日本語にする。学習はオフ。王冠のないものを使う</h1>
            <ol>
              <li>左下のプロフィール →「あなたのアカウント」→ 言語を日本語</li>
              <li>「プライバシー」で、上の2つ（アップロード素材を AI の学習に使うか）を<strong>オフ（灰色）</strong></li>
              <li>「設定 → 請求」の「AIの利用状況」で残量（%）を見る。毎月1日にリセット</li>
              <li>ホーム →「テンプレート」で「YouTube サムネイル」など作りたいもので検索。フィルターで日本語</li>
              <li>王冠のないもの（無料）を選び「テンプレートをカスタマイズ」</li>
            </ol>
            <p>無料版は AI の上限にすぐ達します。各機能は1回ずつ試します。Pro は素材が増え、AI生成の上限が約10倍、背景透過も使えます。商用利用は <a href="https://www.canva.com/" target="_blank" rel="noopener">Canva の利用規約</a> をその都度確認します。</p>
          `
      },
      {
        id: "order",
        title: "手順1〜4 注文書をつくる",
        practice: true,
        was: ["poster/step1", "poster/step2"],
        body: `
            <p class="kicker">きめる　3／7　練習</p>
            <h1>お手本1枚と、ChatGPTの一問一答</h1>
            <div data-pic="pinterest" data-cap="操作：Pinterestで探す → 画像の上で右クリック →「画像を保存」"></div>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>お手本を1枚だけ保存</h3><p>Pinterestで右クリック →「画像を保存」。2枚以上だとAIが迷います</p></article>
              <article class="op"><span class="num">2</span><h3>下の文を送る</h3><p>まだ画像は付けません</p></article>
              <article class="op"><span class="num">3</span><h3>ふつうの言葉で答える</h3><p>「3,000円」でなく「時給3,000円」と、短くしすぎない</p></article>
              <article class="op"><span class="num">4</span><h3>お手本を付けて送る</h3><p>入力欄の「＋」から画像を付ける</p></article>
            </div>
            ${box(`求人ポスターを作りたいです。デザインは苦手なので、まず必要なことを一問一答で聞いてください。
聞き終わったら、ポスターを作るためのプロンプトを日本語で組み立てて見せてください。
私が答えたこと以外は書かないでください。分からないところは空けてください。
色は3色だけ。4色目と、余計な装飾の色は使わないでください。
紙はA4の縦（210×297mm）。プロンプトの中では「チラシ」ではなく「A4縦のポスター」と書いてください。`)}
            ${box(`この画像を参考にします。
この画像の並び方を【レイアウト】の欄に文章で書いて、プロンプトを作り直してください。`)}
            <p>【掲載内容】にお手本の文字がまざっていたら「お手本の文字は使わないで」と送ります。</p>
          `
      },
      {
        id: "make",
        title: "手順5〜9 出して直す",
        practice: true,
        was: ["poster/step5", "poster/step9"],
        body: `
            <p class="kicker">つくる・なおす　4／7　練習</p>
            <h1>Canvaに出して「保存して」。Canva AIで直す</h1>
            <div data-pic="canva" data-cap="最後は Canva で文字を打ち直せます"></div>
            <p>ChatGPTに順番に送ります。英語の枠（Select a design style）が出たら、何も選ばず右下の紫の「Generate」を1回押します。</p>
            ${box(`そのプロンプトで、CanvaでA4縦のポスターを1枚つくってください。`)}
            ${box(`Canvaで編集できるデザインにしてください。`)}
            ${box(`この紙の直すべき点を挙げてください。そのうえで直してください。`)}
            ${box(`保存して`)}
            <p>「保存して」を送らないと Canva に入りません。開けたら、Canva AI に順番に送ります。「他は？」で給与・時間・電話番号など中身の間違いが出ます。全部は聞かず、コツに合うものだけ採用します。</p>
            ${box(`改善点を教えて、編集して`)}
            ${box(`他は？`)}
            ${box(`改善して`)}
          `
      },
      {
        id: "finish",
        title: "仕上げのコツ",
        was: ["poster/design", "poster/canva", "poster/appeal", "canvaai/text", "canvaai/layer", "canvaai/summary"],
        body: `
            <p class="kicker">仕上げ　5／7</p>
            <h1>言いたいことは1つ。色は3色</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>見た目</h3><p>一番大きい文字は1か所（時給など）。大きさに差、左端をそろえる、余白を残す。色は背景・文字・目立たせる色で 6：3：1。フォントは2種類まで</p></article>
              <article class="op"><span class="num">2</span><h3>中身</h3><p>左上に一番言いたいこと、右下に応募方法。「高時給」より「時給○○円／○時〜○時／週○日〜」。連絡方法は1つ、受付時間も</p></article>
              <article class="op"><span class="num">3</span><h3>Canvaの操作</h3><p>触る前に「コピーを作成」。戻すは Ctrl＋Z（Mac は ⌘＋Z）。崩れた字はダブルクリックで打ち直す。文字枠の右端をダブルクリックで幅を合わせる</p></article>
              <article class="op"><span class="num">4</span><h3>重なり</h3><p>文字が写真の下に隠れたら「配置 → レイヤー」で上へ</p></article>
              <article class="op"><span class="num">5</span><h3>書き出し</h3><p>「共有 → ダウンロード」→ PDF（印刷）で1枚試し刷り。貼る場所で数歩はなれて見る</p></article>
            </div>
            <p>印刷前に声に出して読む：電話番号、給与（何の金額か）、勤務時間・曜日、住所・店名、自分が書いていない情報やお手本の文字が増えていないか。全然ちがうときは、手順4の注文書を直して作り直すほうが早いです。</p>
          `
      },
      {
        id: "layer",
        title: "別ルート マジックレイヤー",
        practice: true,
        was: ["poster/flyerimg", "poster/layer", "poster/layerfix", "poster/layerqa", "canvaai/magic", "canvaai/photo"],
        body: `
            <p class="kicker">別ルート　6／7　練習</p>
            <h1>案を3つ → 画像 → パーツに分ける</h1>
            <p>題材例は女性向けパーソナルジムのA4チラシです。求人でも同じ形です。</p>
            ${box(`女性向けパーソナルジムのチラシを作りたい。以下の要素を入れたテキスト案を3つ考えて。サイズはA4。
・キャッチコピー
・サブコピー
・料金
・問い合わせ先
まだ画像は作らないでください。`)}
            ${box(`案3のチラシ画像を作ってください。マジックレイヤーで分けやすいように、背景はシンプル、その上の要素は少なめにしてください。`)}
            <p>確実に画像で返すには「＋」→「画像を作成する」。1か所だけ直すなら、分ける前に「〇〇を△△に変更してください。それ以外は変更しないでください」。画像はダウンロードしておきます。</p>
            <ol>
              <li>Canvaで「作成」→ 画像をアップロード →「新しいデザインで使用」→「カスタムサイズ」（A4）</li>
              <li>先に「ページを複製」</li>
              <li>画像をクリック →「編集」→「マジックレイヤー」</li>
              <li>崩れた文字は打ち直す。二重に見える文字は「素材 → 図形」の四角をスポイトで背景色にして隠す</li>
              <li>足りない写真は「素材」で検索（無料は王冠なし）。無ければ具体的に生成。写真を選んで「Canva AIに聞く」で差し替え</li>
            </ol>
            ${box(`眼鏡をかけた30代の日本人女性`)}
            ${box(`女性に変更`)}
            <p>得意なのは背景がシンプルで要素が1〜2個の絵。要素が多い・重なりが複雑だと精度が落ち、有料版でも変わりません。うまく分かれなければ画像から作り直すほうが早いです。マジックレイヤー1回で約8〜25%消費、月に十数回が目安です。</p>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        was: ["poster/summary"],
        body: `
            <p class="kicker">まとめ　7／7</p>
            <h1>今日のまとめ</h1>
            <ol>
              <li>Canvaは日本語、学習オフ、無料は王冠のないもの。AIは1回ずつ</li>
              <li>お手本はPinterestで1枚だけ。ChatGPTの一問一答で注文書。Canvaに出したら「保存して」</li>
              <li>別ルート：案を3つ → 画像 → マジックレイヤー → 崩れた文字を目で直す</li>
              <li>電話番号・住所・時給・QRは、人が1字ずつ読む。色は3色、言いたいことは1つ</li>
            </ol>
          `
      }
    ]
  };
})();
