(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.applied = {
    id: "applied",
    title: "Claude Code 応用編",
    subtitle: "CLAUDE.md・Skills・Rules で、毎回の説明なしに回す",
    duration: "約50分",
    audience: "Claude Code が入った人／ホームページや道具のフォルダを使う人",
    lessons: [
      {
        id: "goal",
        title: "CLAUDE.md を置く場所",
        was: [
          "claudemd/goal", "claudemd/where", "claudemd/view",
          "applied/aim", "applied/themes"
        ],
        body: `
            <p class="kicker">GOAL　1／7</p>
            <h1>フォルダのいちばん上に、CLAUDE.md を1枚</h1>
            <p>新しいチャットを開きます。また「うちの色は紺と白。作る前に計画を見せて」と打つところです。</p>
            <p>その説明を、作業フォルダの直下の <code>CLAUDE.md</code> に書けば、Claude Code が毎回読みます。名前は大文字で <code>CLAUDE.md</code>（<code>claude.md</code> は不可）。奥のフォルダに隠しません。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>開く</h3><p>作業フォルダ（ホームページ用、請求書用など）で Claude Code を起動</p></article>
              <article class="op"><span class="num">2</span><h3>見る</h3><p>Cursor の左の一覧（Windows は <kbd>Ctrl</kbd>＋<kbd>B</kbd>、Mac は <kbd>⌘</kbd>＋<kbd>B</kbd>）のいちばん上の CLAUDE.md をクリック。チャット履歴や claude.ai の設定には出ません</p></article>
              <article class="op"><span class="num">3</span><h3>育てる</h3><p>足りない行を1つ足す。よく使う手順は Skills、守る約束は Rules に</p></article>
            </div>
            <p>左に何も無ければ「ファイル」→「フォルダーを開く」で作業フォルダを選び直します。</p>
          `
      },
      {
        id: "make",
        title: "CLAUDE.md を作る",
        practice: true,
        was: ["claudemd/safety", "claudemd/ask", "claudemd/init", "claudemd/fill", "applied/claudemd"],
        body: `
            <p class="kicker">作る　2／7　練習</p>
            <h1>質問させてから作る。または /init の下書きを直す</h1>
            <p>黒い画面で <code>claude</code> と打ったあと、どれか1つを貼ります。</p>
            <h2>A. 先に質問させる</h2>
            ${box(`このフォルダで作業するときのルールをまとめたCLAUDE.mdを作ってください。作る前に、会社名・目的・守ってほしいことを私に質問してください。`)}
            <p>分からない項目は「まだ決めていない」で構いません。</p>
            <h2>B. 自動で下書き</h2>
            ${box(`/init`)}
            <p>出てきた文を自分の目で読み、違う行は消すか C の形で書き直します。</p>
            <h2>C. 〔　〕を自分の言葉に変えて送る</h2>
            ${box(`次の内容でCLAUDE.mdを作ってください。見出しと箇条書きで、短くまとめてください。
・会社名：〔株式会社〇〇〕（〔〇〇市〕）
・目的：〔会社のホームページを作って更新する〕
・色は〔紺と白〕、スマホで見やすくする
・作る前に計画を見せて、私の承認を待つ
・元のファイルは上書きしない
・専門用語を使わずに説明する`)}
            <p>決まっていない行は消します。請求書フォルダなら、たとえばこの形です。</p>
            ${box(`# このプロジェクトについて
・目的：社内の請求書を自動生成
・出力：PDF、1社1ファイル
・文体：丁寧・簡潔
・禁止：顧客名を外部に出さない`)}
            <div class="callout warn">パスワード・APIキー・口座番号・顧客の名簿は書きません。削除・送信・公開を「勝手にしてよい」とも書きません。その都度、人が見てからです。</div>
          `
      },
      {
        id: "grow",
        title: "足す・見直す・確かめる",
        practice: true,
        was: ["claudemd/add", "claudemd/review", "claudemd/memory", "claudemd/summary"],
        body: `
            <p class="kicker">育てる　3／7　練習</p>
            <h1>注意が分かったら、1行足す</h1>
            <p>今日、電話番号が書き換えられました。長い作文は不要です。〔　〕だけ変えて送ります。</p>
            ${box(`今の注意点（〔電話番号は変更しない〕）をCLAUDE.mdに追加してください。`)}
            <p>長くなってきたら、先に一覧にしてもらい、直してよい行だけ「この3つを直して」と続けます。</p>
            ${box(`CLAUDE.mdを読んで、長すぎる所・あいまいな所・ルール同士が矛盾している所を一覧にしてください。まだ直さないでください。`)}
            <p>読まれているかは <code>/memory</code> で確かめます。出てこなければ、名前と置き場所（いちばん上か）を見直します。</p>
            ${box(`/memory`)}
          `
      },
      {
        id: "skills",
        title: "Skills と Rules",
        practice: true,
        was: ["applied/skills", "applied/rules", "applied/commands", "applied/guard"],
        body: `
            <p class="kicker">Skills・Rules　4／7　練習</p>
            <h1>いつもの手順はコマンドに、守る約束は Rules に</h1>
            <p>「請求書チェック」を毎月同じ手順で頼んでいます。Skill にすれば、次から <code>/invoice-check</code> と打つだけです。ファイルの書き方は Claude に任せます。</p>
            ${box(`よく使う「請求書チェックの手順」を Skill にまとめて。次回から /invoice-check と打てば、同じ手順を実行できるようにして。`)}
            <p>コマンドが出てこなければ「Skillとして保存して、スラッシュで呼べるようにして」と足します。</p>
            <p>やってはいけないことは Rules として、毎回効くようにします。CLAUDE.md に書き足しても構いません。</p>
            ${box(`# 守ること（Rules）
・APIキー等の秘密情報は出さない
・削除／送信／公開は必ず確認を取る
・公開リポジトリに機密を含めない`)}
            ${box(`次の約束を、毎回必ず守る Rules として残して。秘密情報は出さない。削除・送信・公開の前は私の確認を待つ。`)}
            <p>APIキーはコードに書かず <code>.env</code> などに分け、機密を含むリポジトリはプライベートにします。</p>
            <ul>
              <li><code>/help</code> … コマンド一覧</li>
              <li><code>/config</code> … モデルや設定を変える（モデル名は暗記不要）</li>
              <li><code>/clear</code> … 会話をリセット</li>
            </ul>
          `
      },
      {
        id: "stages",
        title: "段階で止める＋Git",
        practice: true,
        was: ["applied/stages", "applied/gituse"],
        body: `
            <p class="kicker">段階　5／7　練習</p>
            <h1>大きい作業は、段階ごとに止めて確認</h1>
            <p>「予約サイトを全部作って公開まで」と一気に頼むと、途中で止められません。</p>
            ${box(`「予約サイト」を作りたい。①4ページ構成の設計案を出す→②承認したら作る→③スマホ表示を確認→④公開手順、の順で。各段階でいったん止まって、私の確認を待って。`)}
            <p>こまめに保存（コミット）しておけば、「さっきの状態に戻して」と言えます。</p>
            ${box(`今の状態を保存（コミット）して。おかしくなったら、この時点に戻せるようにしておいて。大きく変えたい時は別ブランチで試して。`)}
            <p>Git の入れ方は <a href="#/course/code" data-link>はじめての Claude Code</a> にあります。まだなら、フォルダのコピーでも代用できます。</p>
          `
      },
      {
        id: "connect",
        title: "外部連携と頼み方",
        practice: true,
        was: ["applied/connect", "applied/deepen"],
        body: `
            <p class="kicker">つなぐ　6／7　練習</p>
            <h1>つながったサービスから取り、形を決めて頼む</h1>
            <p>MCP・コネクタ・Chrome・Excel などとつなぐと、フォルダの外のデータも使えます。接続は画面の案内に沿って自分で行い、パスワードやAPIキーはチャットに貼りません。</p>
            ${box(`連携済みの〔サービス名〕から最新データを取ってきて、今日のレポートにまとめて。足りない情報はブラウザで調べて補って。送信や公開はしないで。`)}
            <p>役割・制約・順番・形式を先に言うと、形が決まります。</p>
            ${box(`あなたは中小企業の財務コンサルとして。この試算表を分析し、①要点3つ→②リスク→③打ち手、の順に、経営者向けのやさしい言葉で、A4・1枚にまとめて。`)}
            <p>出てきた数字は元データと照合し、送る前は自分の目で見ます。</p>
          `
      },
      {
        id: "wrap",
        title: "つまずいたら・まとめ",
        was: ["applied/stuck", "applied/wrap"],
        body: `
            <p class="kicker">まとめ　7／7</p>
            <h1>エラーは、文をそのまま貼る</h1>
            <p>赤い文字が出たら、省略せず全部貼ります。パスワードは書きません。</p>
            ${box(`次のエラーが出ました。原因と直し方を、専門用語を使わずに説明して。直す前に、何を変更するか教えて。
〔ここにエラーの文章をそのまま貼る〕`)}
            <div class="qa"><p><strong>Q. 途中で止まる／重い</strong></p><p>作業を小さく分けて、一つずつ頼む。</p></div>
            <div class="qa"><p><strong>Q. 意図と違う</strong></p><p>何が違うかを具体例で伝え、その部分だけ直させる。</p></div>
            <div class="qa"><p><strong>Q. 前より悪くなった</strong></p><p>「さっきの状態に戻して」＋Git の履歴から復元。</p></div>
            <ol>
              <li>CLAUDE.md を1枚。注意が分かったら1行足す</li>
              <li>いつもの手順は Skills、守る約束は Rules</li>
              <li>大きい作業は段階で止めて確認。Git で戻せる状態に</li>
            </ol>
            <p><a class="btn-orange" href="#/course/invoice" data-link>請求書ツールで試す</a></p>
          `
      }
    ]
  };
})();
