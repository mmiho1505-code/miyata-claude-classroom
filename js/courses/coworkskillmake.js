(() => {
  const talk = CLASSROOM.talk;

  CLASSROOM.courses.coworkskillmake = {
    id: "coworkskillmake",
    title: "スキルを作成して呼び出す",
    subtitle: "Skill Creator で作り、「/」で呼び、思いどおりでなければ直す",
    duration: "約20分",
    audience: "自分のスキルを作ってみたい人／日報や決まった形のメールを早く作りたい人",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">GOAL　1／5</p>
            <h1>走り書きのメモから、報告メールを作るスキル</h1>
            <p>1日の終わり。「えー、午前は見積を2件…」と声で入れたメモや、走り書きのメモを貼るだけで、いつもの形の業務報告メールになる。そんなスキルを作ります。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>作る</h3><p>Skill Creator（スキルを作るためのスキル）で作って保存</p></article>
              <article class="op"><span class="num">2</span><h3>使う</h3><p>「/スキル名」のあとにメモを貼る</p></article>
              <article class="op"><span class="num">3</span><h3>直す</h3><p>思いどおりでなければ、設定画面か会話で直す</p></article>
            </div>
            <div class="callout">画面は9月はじめのものをもとにしています。ボタンの場所や名前は、アップデートで変わることがあります。</div>
            <p>まとめ表：<a href="materials/cowork-skill-make.xlsx" download>スキルを作成して呼び出す：手順と直し方（Excel）</a></p>
          `
      },
      {
        id: "make",
        title: "作る",
        practice: true,
        body: `
            <p class="kicker">やってみる　2／5</p>
            <h1>「/」で Skill Creator を呼んで、保存する</h1>
            <ol>
              <li>左上の「新規」で新しいチャットを開く。スキルは Claude 全体で使えるので、Cowork ではなく<strong>チャット</strong>で作る</li>
              <li>入力欄で半角の「/」を打ち、「Skill Creator」を選ぶ（出てこなければ「Ski」と打って探す）</li>
              <li>青い文字の「Skill Creator」のあとにスペースを1つ空けて、下の文を貼る</li>
              <li>モデルは Opus にする（スキルづくりは少しむずかしいため）</li>
            </ol>
            ${talk([
              { do: "/ を打って「Skill Creator」を選ぶ" },
              { me: `「業務報告メール作成」というスキルを作成してください。

手順：ユーザーが入力した1日の業務メモを読み取り、内容を整理する。メモは音声入力の「えー」「あー」や、走り書きでもよい。

条件：本日の業務内容／成果と進捗／課題や懸念事項／今後の対応予定 の4つを、メモから抜き出して書く。

完成物：次の形で出す。
メール本文ここから
［田中課長］
お疲れ様です。［松井］です。
（本文）
メール本文ここまで` },
              { ai: `スキル「Business Report Email」を作りました。業務メモを貼ると、田中課長あての報告メールの形に整えます。\n\n保存する場合は「スキルを保存」を押してください。` },
              { do: "スキルのカードの「スキルを保存」を押す（押さないと保存されない）" }
            ])}
            <p>保存したら「管理」→ 設定の「スキル」に並びます。押すと中身が見られ、オン・オフも切りかえられます。</p>
            <h2>固定するもの・毎回変わるもの</h2>
            <table>
              <thead><tr><th>種類</th><th>例</th><th>書き方</th></tr></thead>
              <tbody>
                <tr><td>固定で入れる</td><td>宛先「田中課長」、差出人「松井」</td><td>毎回変わらないものは、スキルに書いておく</td></tr>
                <tr><td>毎回変わる</td><td>その日の業務の内容</td><td>「内容」のように仮に置いておき、貼ったメモから埋めさせる</td></tr>
                <tr><td>宛先が毎回変わるなら</td><td>宛先の名前</td><td>「名前」と仮に置き、「入れた名前にする」と書いておく</td></tr>
              </tbody>
            </table>
            <p>「手順・条件・完成物」と分けて書かなくても、3つが入っていれば大丈夫です。声でざっと話して作ってもかまいません。</p>
          `
      },
      {
        id: "use",
        title: "使う",
        practice: true,
        body: `
            <p class="kicker">やってみる　3／5</p>
            <h1>「/スキル名」のあとに、メモを貼るだけ</h1>
            <p>新しいチャットで「/」を打ち、作ったスキル（Business Report Email）を選びます。チャットでも Cowork でも使えます。文を整えるくらいなら Sonnet で十分です（迷ったら Opus）。</p>
            ${talk([
              { do: "/ を打って「Business Report Email」を選ぶ" },
              { me: `えー、午前は［A社の見積2件］を出した。午後は［B社と打ち合わせ］、来月の納期が少しきびしいって言われた。あと［請求書の発送］も終わり。明日は［納期の件で工場に確認］する。` },
              { ai: `メール本文ここから\n田中課長\nお疲れ様です。松井です。本日の業務を報告します。\n\n■本日の業務内容\n・A社 見積2件を提出\n・B社と打ち合わせ\n・請求書の発送\n\n■課題・懸念事項\n・B社より、来月の納期がきびしいとのお話あり\n\n■今後の対応予定\n・明日、納期について工場に確認します\n\nメール本文ここまで` }
            ])}
            <div class="callout warn">できたメールは下書きです。メールソフトや日報ツールに貼り、中身を確かめてから自分で送ります。お客様の個人情報は書きこみません。</div>
          `
      },
      {
        id: "fix",
        title: "直す",
        body: `
            <p class="kicker">知る　4／5</p>
            <h1>思いどおりでなかったら、2つの直し方</h1>
            <p>たとえば、宛名が「〇〇課長」「〇〇です」のように仮の形に置きかわってしまったとき。</p>
            <table>
              <thead><tr><th>直し方</th><th>やり方</th><th>とくちょう</th></tr></thead>
              <tbody>
                <tr><td>① 設定画面で直接直す</td><td>設定の「スキル」→ そのスキルのメニュー →「編集」。仮の部分を「田中課長」「松井」に直し、「田中課長・松井は毎回固定で出力する」と書き足して「バージョンを保存」</td><td>確実。思わない形に作り直される心配がない</td></tr>
                <tr><td>② 会話で直す</td><td>新しいチャットで、賢いモデル（Opus など）で頼む</td><td>手軽。ただ、思わない形に作り直されることもある</td></tr>
              </tbody>
            </table>
            ${talk([
              { me: `business report email というスキルについて修正を行いたいです。宛名は毎回「［田中課長］」、差出人は「［松井］」で固定してください。` },
              { ai: `修正しました。宛名と差出人を固定にし、本文は箇条書きで見やすくしています。保存しますか？` }
            ])}
            <p>直したら、同じメモでもう一度試して、宛名と差出人が固定になったかを見ます。</p>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">まとめ　5／5</p>
            <h1>作る・呼ぶ・直す</h1>
            <ol>
              <li>「/」で Skill Creator を呼び、手順・条件・完成物を書いて作る</li>
              <li>「スキルを保存」を押すのを忘れない</li>
              <li>使うときは「/スキル名」のあとにメモを貼るだけ</li>
              <li>思いどおりでなければ、設定画面で直すのが確実</li>
            </ol>
            <h2>設定画面にあるもの</h2>
            <table>
              <thead><tr><th>項目</th><th>内容</th></tr></thead>
              <tbody>
                <tr><td>標準のスキル</td><td>はじめから入っているスキル。「参照」で Anthropic 公式のスキルが見られ、「＋」で入れられる。例：Skill Creator（スキルを作る）、morning（朝のまとめを作る）、import memory（ほかのAIから記憶を取りこむ）</td></tr>
                <tr><td>コネクタ</td><td>Google Drive など、外の道具とつなぐもの（「演習：ファイルからデータを抜き出す」で使ったもの）</td></tr>
                <tr><td>プラグイン</td><td>スキルとコネクタを、作業ごとにひとまとめにしたもの</td></tr>
              </tbody>
            </table>
            <p>まとめ表：<a href="materials/cowork-skill-make.xlsx" download>スキルを作成して呼び出す（Excel）</a></p>
            <p><a class="btn-orange" href="#/course/cowork" data-link>次へ：はじめての Claude Cowork</a>
            <a class="btn-dark" href="#/course/coworkskill" data-link>スキルとはへ</a></p>
          `
      }
    ]
  };
})();
