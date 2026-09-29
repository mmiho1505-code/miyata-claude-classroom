(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.researcher = {
    id: "researcher",
    title: "Claude Codeで競合の料金と特徴を比較・分析｜「専属リサーチャー」を作る",
    subtitle: "調べて終わりにしない。料金の裏取りまで。手加減なしのレポート",
    duration: "約25分",
    audience: "上級。Claude Pro以上、Cursor、ターミナルで Claude Code",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">上級　約25分</p>
            <h1>競合の料金と特徴を、裏取りして比べる</h1>
            <p>Claude Code に「専属リサーチャー」を入れ、競合調査のレポートを出します。できあがりは <strong>HTML・Markdown・PDF</strong> の3形式です。</p>
            <p>レポートに入りやすいもの：結論のまとめ、料金比較、ポジショニングマップ（価格×機能の多さ）、特徴比較表、差別化のヒント、次にやることの案。</p>
            <p>評価は手加減しません。例：「サンプル自社サービスは、価格では無料の競合2社に勝てない」。調べるだけでなく、<strong>料金が本当に正しいかの裏取り</strong>に力を入れます。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>道具</h3><p>Claude Pro以上。Cursor。ターミナルで <code>claude</code></p></article>
              <article class="op"><span class="num">2</span><h3>書く</h3><p>自社サービス.md と リサーチの好み.md</p></article>
              <article class="op"><span class="num">3</span><h3>出す</h3><p><code>/researcher:research</code>。report フォルダ</p></article>
            </div>
            <div class="callout warn">まだ Code が入っていない人は <a href="#/course/nodejs" data-link>Node.js</a>、<a href="#/course/code" data-link>Windows編</a> ／ <a href="#/course/codemac" data-link>Mac編</a>、<a href="#/course/today/cursorcode" data-link>Cursor に Claude Code</a> です。プラグインの入れ方は、講義で配るコマンドと配布PDF、案内された GitHub のページです。ここには貼りません。</div>
            <p>モデルは Opus で足りることが多いです。いちばん高いモデルを何本も同時に回すと、利用制限にすぐ届きやすい、と案内されます。売上や集客の成功は保証しません。</p>
          `
      },
      {
        id: "prep",
        title: "事前に用意するもの",
        body: `
            <p class="kicker">準備</p>
            <h1>Pro、Cursor、作業フォルダ</h1>
            <ul>
              <li>Claude の Pro 以上</li>
              <li>Cursor（コードエディタ）</li>
              <li>ターミナルで Claude Code が動くこと</li>
              <li>好きな場所の作業フォルダ（中身は公開してよい練習用）</li>
            </ul>
            <p>確認はターミナルで <code>claude</code> です。キャラクターのアイコンが出ればOKです。初回の英語の確認（このフォルダを信頼しますか）はエラーではありません。</p>
            <p>Skills の意味は <a href="#/course/skillbase" data-link>Skillsの基礎</a>。フォルダのルールブックは <a href="#/course/claudemd" data-link>CLAUDE.md</a> です。</p>
          `
      },
      {
        id: "plugin",
        title: "プラグインを入れて初期化する",
        practice: true,
        body: `
            <p class="kicker">手順　練習</p>
            <h1>フォルダを開き、配られたコマンドを貼る</h1>
            <ol>
              <li>作業フォルダを作り、Cursor でそのフォルダを開く</li>
              <li>ターミナルで Claude Code を起動する</li>
              <li>講師が配ったコマンドで、プラグインを入れる</li>
              <li>Claude Code を一度終了して、もう一度起動する</li>
              <li>次を打つ</li>
            </ol>
            ${box(`/researcher:init`)}
            <p>作業用のファイル一式ができます。プラグインは、スキルやコマンドをまとめた拡張パックです。入れると、スキルが Claude 側に登録されます。作業フォルダの中を探しても、スキル本体のファイルは見当たらないことがあります。</p>
            <div class="callout">コマンドの全文は講義の配布と、案内された GitHub・PDF を見てください。ここは地図です。</div>
          `
      },
      {
        id: "write",
        title: "2つのファイルを書く",
        practice: true,
        body: `
            <p class="kicker">中身　練習</p>
            <h1>自社が一番大事。各3分でよい</h1>
            <p><strong>自社サービス.md</strong> が比較の軸です。いちばん丁寧に書きます。講義ではサンプルのタスク管理ツールで練習しました。本物の未公開料金や顧客名は、教室に貼らないでください。</p>
            ${box(`# 自社サービス（練習用サンプル）
名前：サンプルタスク管理
何をするか：少人数の店や事務所で、今日やることを一覧にする
誰向けか：従業員10人前後。ITに詳しくない人
料金：月額 2,980円（税込）／1事業所。無料プランなし
主な機能：タスク、担当、期限、完了チェック。スマホのブラウザで使える
まだ無いもの：勤怠、給与、顧客管理
強み：画面が少ない。日本語だけ
弱み：無料の競合と比べると高い。連携が少ない`)}
            <p><strong>リサーチの好み.md</strong> は、調べ方の注文です。</p>
            ${box(`# リサーチの好み
調べる競合：3社まで
必須の観点：料金、主な機能、強み、弱み、ターゲット
出力：毎回 HTML も作る。Markdown と PDF も出す
口調：手加減しない。負けている点ははっきり書く
例：「価格では無料の競合に勝てない」のように書く
料金は公式ページで裏取りする。古いブログだけは信じない
無い数字は埋めない。不明と書く`)}
            <p>HTML が出なかったときは、このファイルに「毎回HTMLも作る」と書いてから、もう一度調べます。</p>
          `
      },
      {
        id: "run",
        title: "調査を回す",
        practice: true,
        body: `
            <p class="kicker">実行　練習</p>
            <h1>候補を選ぶと、裏取りまで進む</h1>
            ${box(`/researcher:research`)}
            <p>競合の候補が出ます。自分で選びます。そのあと、だいたい次の順で進みます。</p>
            <ol>
              <li>調査（同時に複数）</li>
              <li>裏取り（同時に複数。料金の正確さ、情報の新しさ）</li>
              <li>最終点検</li>
            </ol>
            <p>レポートは <code>report</code> フォルダに出ます。料金は画面の数字をうのみにせず、公式の料金ページと突き合わせた結果を読んでください。人の目でも、公式と1回は見ます。</p>
            <div class="callout warn">調べる会社や項目を増やすほど、時間もトークン（利用量）も増えます。必要な分に絞ります。</div>
          `
      },
      {
        id: "more",
        title: "ほかの調べ方",
        body: `
            <p class="kicker">応用</p>
            <h1>会社を指定する、テーマを決める、前回と比べる</h1>
            <p>よく使うのは、次のような調べ方です。打ち方の全文は配布PDFと、案内された GitHub のページです。</p>
            <ul>
              <li>競合の会社名を指定して調べる</li>
              <li>テーマを決めて調べる（例：料金プランの見直し）</li>
              <li>前回のレポートから、値上げや新機能がないか見る</li>
            </ul>
            <p>できた HTML を、別の AI に渡して資料の草案まで頼むと、人の作業は減りやすいです。出す前は人が確認します。秘密は渡しません。</p>
          `
      },
      {
        id: "qa",
        title: "スキルとプラグイン",
        body: `
            <p class="kicker">ことば</p>
            <h1>型と、まとめて入れるパック</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>スキル</h3><p>決まったやり方を Claude に覚えさせたもの。毎回長く指示しなくても、同じ品質で出しやすい</p></article>
              <article class="op"><span class="num">2</span><h3>プラグイン</h3><p>スキルやコマンドをひとまとめにした拡張パック。入れると、スキルが一括で登録される</p></article>
            </div>
            <p>自分でも作れます。やりたいことを Claude Code に伝えて、環境とコマンドを作ってもらい、GitHub に公開すれば、ほかの人も入れられます。GitHub への上げ方は、Claude に聞けば手順を出してくれます。公開リポジトリにパスワードは入れません。</p>
            <p>ターミナルがまだ難しい人は、同じような調べものは、デスクトップのフォルダ指定（この教室でいう同じチャットの作業）でもできます。先に <a href="#/course/today" data-link>今日の講義</a> と <a href="#/course/cowork" data-link>事務の講座</a> からでよいです。</p>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">覚えておくこと</p>
            <h1>2枚書いて回す。料金は裏取り</h1>
            <ul>
              <li>上級。Pro以上、Cursor、ターミナルの Claude Code</li>
              <li>配られたコマンドでプラグイン。再起動して <code>/researcher:init</code></li>
              <li>自社サービス.md が軸。リサーチの好み.md に HTML と口調</li>
              <li><code>/researcher:research</code> → 候補を選ぶ → 調査・裏取り・点検</li>
              <li>report フォルダ。手加減しない。料金は公式で確認</li>
              <li>会社数を増やしすぎない。Opus で足りることが多い</li>
            </ul>
            <p>詳しいコマンドは、講義の GitHub と配布PDFです。</p>
          `
      }
    ]
  };

  Object.assign(CLASSROOM.quizzes, {
    researcher: [
      {
        q: "この回に必要なものは？",
        choices: ["無料プランとスマホだけ", "Claude Pro以上、Cursor、ターミナルの Claude Code", "教室のチャットにカード番号を書く"],
        a: 1,
        explain: "上級の回です。プラグインは講義で配るコマンドで入れます。"
      },
      {
        q: "比較の軸になるファイルは？",
        choices: ["自社サービス.md", "パスワード一覧.xlsx", "教室の受講コード"],
        a: 0,
        explain: "リサーチの好み.md は調べ方の注文です。自社の中身がいちばん大事です。"
      },
      {
        q: "スキルとプラグインの関係で近いのは？",
        choices: ["プラグインは画像の名前", "スキルは手順の型。プラグインはそれをまとめて入れるパック", "作業フォルダに必ずスキル本体の全文が見える"],
        a: 1,
        explain: "登録は Claude 側です。フォルダを探しても本体が見当たらないことがあります。"
      },
      {
        q: "HTMLが出なかったとき、先にすることは？",
        choices: ["料金を推測で埋める", "リサーチの好みに「毎回HTMLも作る」と書いてから調べ直す", "先に契約して買う"],
        a: 1,
        explain: "無い数字は埋めません。公式で裏取りします。"
      },
      {
        q: "会社や項目を増やしたとき、起きやすいことは？",
        choices: ["必ず無料になる", "時間とトークン（利用量）が増える。高いモデルの並列は制限に届きやすい", "裏取りが不要になる"],
        a: 1,
        explain: "必要な分に絞ります。今回の調査は Opus で足りることが多い、と案内されます。"
      }
    ]
  });
})();
