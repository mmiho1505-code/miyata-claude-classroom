(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.snspost = {
    id: "snspost",
    title: "SNS投稿文づくりと分析",
    subtitle: "ネタから自分らしい投稿文を作り、反応のCSVから伸びた傾向を見る",
    duration: "約50分",
    audience: "Claude Code インストール済み／初心者向け・手順つき",
    lessons: [
      {
        id: "goal",
        title: "お手本とネタで投稿文を作る",
        practice: true,
        was: [
          "snspost/goal",
          "snspost/words",
          "snspost/setup",
          "snspost/flow",
          "snspost/step1",
          "snspost/step2"
        ],
        body: `
            <p class="kicker">投稿文　1／5</p>
            <h1>ネタを渡すと、自分らしい投稿文を複数案出すツール</h1>
            <p>ネタはある。でも毎回ゼロから文を書いています。トーンも文字数も、その場で決め直しています。</p>
            <p>過去の投稿をお手本に、何案・どんなトーン・何文字・タグの有無を先に決めて作ってもらいます。下書きまでで、投稿は自分がします。まだ Code が入っていない人は <a href="#/course/code" data-link>Claude Code講座</a> から。</p>
            <div data-pic="snspost" data-cap="ネタから複数案。出す前は自分の目で"></div>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>素材をそろえる</h3><p>過去の投稿数本を sample_posts.txt に。今日のネタは箇条書き。媒体（Xなど）を決める</p></article>
              <article class="op"><span class="num">2</span><h3>らしさを読ませる</h3><p>Claude Code を起動して、下の1つ目を貼る</p></article>
              <article class="op"><span class="num">3</span><h3>ツールを作らせる</h3><p>2つ目を貼る</p></article>
            </div>
            ${box(`私のこれまでの投稿（sample_posts.txt）を渡します。文体や雰囲気の特徴を読み取って、どんな“らしさ”があるか教えて。`)}
            ${box(`箇条書きのネタを渡すと、SNS投稿文を3案作るツールを作って。丁寧で親しみやすいトーン、140字以内、最後にハッシュタグを3つ添えて。投稿はしないで。`)}
          `
      },
      {
        id: "tone",
        title: "らしさ・媒体別・使い回し",
        practice: true,
        was: ["snspost/step3", "snspost/step4", "snspost/step5"],
        body: `
            <p class="kicker">投稿文　2／5</p>
            <h1>お手本に寄せ、媒体ごとに整え、型を保存する</h1>
            <p>避けたい言い回しも伝えると、自分に近づきます。字数の上限は、いまの媒体のルールに合わせて変えてください。</p>
            ${box(`sample_posts.txt の私らしい言い回しに合わせて。硬すぎず、絵文字は控えめ。専門用語は避けて、経営者にやさしい言葉で。`)}
            ${box(`媒体別に切り替えて。Xは140字以内、Instagramは少し長めでOK。ハッシュタグも媒体に合う数と内容にして。改行も読みやすく。`)}
            ${box(`この作り方を保存して、次からはネタを渡すだけで同じ品質で作れるように。今週分の投稿案をまとめて作る形にもして。投稿・予約投稿はしないで。`)}
          `
      },
      {
        id: "sns",
        title: "投稿の反応を分析する",
        practice: true,
        was: ["sns/goal", "sns/words", "sns/setup", "sns/flow", "sns/step1", "sns/step2"],
        body: `
            <p class="kicker">分析　3／5</p>
            <h1>投稿と反応のCSVから、伸びた投稿の共通点を出す</h1>
            <p>各SNSのインサイト画面から、投稿文・日時・いいね・保存・コメント数を自分で書き出し、1行1投稿の posts.csv にして sns フォルダに置きます。ログイン情報は渡しません。</p>
            <div data-pic="sns" data-cap="投稿と反応を読み込み、次のヒントまで"></div>
            ${box(`XやInstagramの投稿データ（投稿文・投稿日時・いいね・保存・コメント数）をCSVにしました。posts.csv の中身を確認して、分析できそうか教えて。`)}
            ${box(`posts.csv を読み込んで、反応が多かった投稿トップ10、平均反応数、伸びた投稿の共通点を分析するツールを作って。結果をまとめたレポート（PDFかHTML）も出して。`)}
          `
      },
      {
        id: "pattern",
        title: "要因を比べて、勝ちパターンに",
        practice: true,
        was: ["sns/step3", "sns/step4", "sns/step5"],
        body: `
            <p class="kicker">分析　4／5</p>
            <h1>伸びた投稿と伸びない投稿を比べ、次の投稿につなげる</h1>
            <p>比べさせると、効いている要因が見えます。グラフとランキングで見せ、型にして次のたたき台まで作ります。</p>
            ${box(`伸びた投稿と伸びなかった投稿を比べて、文面の長さ・言い回し・投稿時間帯・ハッシュタグの違いを教えて。効いていそうな要因を上位から。`)}
            ${box(`反応数の推移グラフ、投稿時間帯別の平均反応、ハッシュタグ別ランキングを見やすく表示して。割合や件数も添えて。`)}
            ${box(`伸びた投稿の“勝ちパターン”をテンプレにまとめて。次の投稿のたたき台も作って。毎週月曜に先週分を自動で分析する形にもして。たたき台の投稿・予約投稿はしないで。`)}
          `
      },
      {
        id: "check",
        title: "つまずいた時と、出す前の確認",
        was: [
          "snspost/trouble",
          "snspost/safety",
          "snspost/summary",
          "sns/trouble",
          "sns/safety",
          "sns/summary"
        ],
        body: `
            <p class="kicker">確認　5／5</p>
            <h1>指定を具体的にする。出すかどうかは自分が決める</h1>
            <ul>
              <li><strong>自分らしくならない</strong> … お手本を増やす／避けたい言い回しを具体的に伝える</li>
              <li><strong>文字数オーバー</strong> … 「140字以内で」と上限をはっきり</li>
              <li><strong>硬い／軽すぎる</strong> … 「です・ます調で」「もう少しくだけて」</li>
              <li><strong>似た案ばかり</strong> … 「切り口を変えて」「1案は問いかけ型で」</li>
              <li><strong>文字化け・反応数が読めない</strong> … 文字コード（UTF-8）と、どの列が投稿文・反応数かを伝える</li>
              <li><strong>分析が浅い・偏る</strong> … 時間帯・文字数・ハッシュタグなど観点を指定し、期間・件数を広げる</li>
            </ul>
            <div class="callout warn">数字や実績は自分で確認し、誇大表現を避け、顧客名や未公開情報は入れません。コメントした人など個人が特定される情報は外に出さず、各SNSの規約を守ります（画面からの書き出しが基本）。分析は参考で、投稿は自分の目で見てから自分で行い、自動投稿はしません。投稿データCSVの控えも残します。</div>
          `
      }
    ]
  };
})();
