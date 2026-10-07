(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;
  const bunka = "https://www.bunka.go.jp/seisaku/chosakuken/aiandcopyright.html";

  CLASSROOM.courses.aicopy = {
    id: "aicopy",
    title: "AI画像の著作権と規約",
    subtitle: "仕事でAI画像を使う前に、見て分かること・調べること・確認することに分ける",
    duration: "約25分",
    audience: "仕事でAI画像を使う人／初めてでも可",
    lessons: [
      {
        id: "goal",
        title: "決めつけずに3つに分ける",
        was: ["aicopy/goal", "aicopy/case"],
        body: `
            <p class="kicker">GOAL　1／5</p>
            <h1>決めつけない。確かめてから進める</h1>
            <p>営業からチャットが来ます。「添付のイラストを参考に、人気キャラクターっぽく、○○先生の絵にそっくりな雰囲気で。商用利用OKのAIなら今日中にできる？」</p>
            <p>この時点では、参考画像を入力してよいか、「そっくり」をどう扱うか、「商用利用OK」が何を認めているかが分かりません。分からないまま入力も納品もしません。先に3つに分けます。</p>
            <div class="ops">
              <article class="op"><span class="num">見</span><h3>画像を見て分かること</h3><p>顔の形、構図、特徴が、誰かの作品に重なっていないか</p></article>
              <article class="op"><span class="num">調</span><h3>公式情報で調べること</h3><p>文化庁の整理、AIサービスの規約の本文と更新日</p></article>
              <article class="op"><span class="num">確</span><h3>依頼元や社内に確認すること</h3><p>参考画像の許可、広告媒体、顧客の条件</p></article>
            </div>
            <p>公式の整理は文化庁の <a href="${bunka}" target="_blank" rel="noopener">AIと著作権について</a>（「AIと著作権に関する考え方について」、令和6年3月15日）です。法律そのものではなく、更新されることがあるので日付を見てください。</p>
          `
      },
      {
        id: "others",
        title: "① 他人の作品との関係",
        was: ["aicopy/others", "aicopy/two", "aicopy/style"],
        body: `
            <p class="kicker">著作権　2／5</p>
            <h1>見た目が似ているかだけでは決まらない</h1>
            <div class="ops">
              <article class="op"><span class="num">類</span><h3>類似性</h3><p>元の作品らしい具体的な表現（顔の形、構図、特徴的な配置）が重なっているか</p></article>
              <article class="op"><span class="num">依</span><h3>依拠性</h3><p>元の作品を知っていて、それをもとに作った事情があるか。参考画像を読み込ませた、作家名を指示に入れた、など</p></article>
            </div>
            <p>題材が同じ（ウサギ、花、茶器）なだけなら、問題とは限りません。江差追分事件（2001年、最高裁）でも、話題や事実が共通でも、元の文章ならではの表現まで共通していなければ侵害に当たらない、とされました。逆に、一部が違うから大丈夫とも限りません。</p>
            <p>水彩っぽい線のような画風の広い傾向と、そのキャラだと分かる顔・衣装・しるしは別です。「人気キャラクターっぽく」「○○先生にそっくり」は依拠の事情になりやすいので、そのまま送りません。</p>
          `
      },
      {
        id: "terms",
        title: "② 生成物と ③ 利用規約",
        practice: true,
        was: ["aicopy/own", "aicopy/terms"],
        body: `
            <p class="kicker">契約　3／5　練習</p>
            <h1>「商用利用OK」は、サービスとの契約の話</h1>
            <p>AIを使っても、自動的に著作権は生まれません。人が考えた創作的な表現が画像に表れているかで決まります。規約の「出力は利用者のもの」も、「商用利用OK」も、サービスとの契約の話で、第三者の権利を侵害していないことまでは保証しません。</p>
            <p>規約の公式本文を開き、更新日を確認して、下に貼ります。</p>
            ${box(`次の利用規約の原文を、次の4点だけ表にまとめてください。各行に、要約と原文の短い引用を並べてください。断定せず、分からない行は「原文で要確認」と書いてください。

1. 生成した画像を広告や納品に使えるか
2. 自分のプランと機能（個人向け／法人向け／ベータ）が対象か
3. 入力した参考画像が保存・学習に使われるか
4. クレジットやAI利用の表示が必要か

原文：
（ここに公式の規約を貼る）`)}
            <p>引用が原文にあるか、自分の目で開いて確かめます。「学習に使わない」設定は必ずオンにします。</p>
          `
      },
      {
        id: "refimg",
        title: "参考画像の許可を聞く",
        practice: true,
        was: ["aicopy/refimg"],
        body: `
            <p class="kicker">入力　4／5　練習</p>
            <h1>アップロードできることと、入力してよいことは別</h1>
            <p>入手先に、用途を分けて確認します。</p>
            ${box(`添付の参考画像について、次の用途ごとに「可・不可・分からない」を教えてください。

1. AIへの入力
2. 加工
3. 広告掲載
4. 顧客への納品

分からない項目は、確認できるまで使いません。`)}
            <div class="callout warn">許可が不明なら、まず依頼元に許可範囲を確認し、確認できるまで入力も納品もしません。</div>
          `
      },
      {
        id: "check",
        title: "納品前の4点",
        was: ["aicopy/check", "aicopy/qa", "aicopy/summary"],
        body: `
            <p class="kicker">チェック　5／5</p>
            <h1>推測で進めない</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>他人の作品と参考画像</h3><p>類似・依拠の事情。参考画像の許可範囲</p></article>
              <article class="op"><span class="num">2</span><h3>AIサービスの条件</h3><p>プラン・機能・入力・表示</p></article>
              <article class="op"><span class="num">3</span><h3>媒体・顧客・社内</h3><p>広告媒体、顧客、社内の条件と承認</p></article>
              <article class="op"><span class="num">4</span><h3>分からない点</h3><p>推測で進めない。調べるか、条件が明確な素材で別案を作る</p></article>
            </div>
            <p>確認済みなら、社内と顧客の最終確認へ進みます。公開・納品のボタンを押すのは人です。</p>
            <div class="qa">
              <p class="qa-q">フリー素材の人物に似た画像、「どこかで見た気がする」画像</p>
              <p>使わない方が無難です。特徴を変えて作り直します。自分で細かく指定したなら、お願い文ややり取りを残しておきます。</p>
            </div>
            <div class="qa">
              <p class="qa-q">ホームページに Canva のフリー素材</p>
              <p>商用利用に当たります。Canva の規約で確認します。</p>
            </div>
            <div class="qa">
              <p class="qa-q">自分で作ったキャラクターをAIで描かせる</p>
              <p>他人の作品との関係ではほぼ問題なさそう、という整理でした。あとはAIサービスの規約次第です。</p>
            </div>
            <div class="qa">
              <p class="qa-q">お客さんに徹底させるのが難しい</p>
              <p>侵害と判断されたら被害を受けるのは作った側です。少なくとも自分はやらず、理由を説明して断ります。</p>
            </div>
          `
      }
    ]
  };
})();
