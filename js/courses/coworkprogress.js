(() => {
  const talk = CLASSROOM.talk;

  CLASSROOM.courses.coworkprogress = {
    id: "coworkprogress",
    title: "複数プロジェクトの進捗を管理・分析する",
    subtitle: "進捗管理表を読ませて、プロジェクトごとの週の報告書を作る",
    duration: "約20分",
    audience: "いくつものプロジェクトを掛け持ちしているリーダー／毎週の進捗報告を早く済ませたい人",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">GOAL　1／5</p>
            <h1>表を見て報告書を書く時間を、まるごと減らす</h1>
            <p>数字だらけの進捗管理表（全体の数字をまとめた「ダッシュボード」や、予定を横の線で並べた「ガントチャート」）を確認するだけで、30分〜1時間かかります。報告書を書けば、さらにかかります。掛け持ちが3〜4件あれば、1日つぶれてしまいます。</p>
            <p>今回は、<strong>表を読むところから報告書づくりまで</strong>を Cowork に任せます。任せている間に、ほかの仕事ができるのも良い所です。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>置く</h3><p>進捗管理表を Google ドライブのフォルダに置く</p></article>
              <article class="op"><span class="num">2</span><h3>頼む</h3><p>フォルダの URL を入れた指示を送る</p></article>
              <article class="op"><span class="num">3</span><h3>確かめる</h3><p>できた報告書を、元の表と見くらべる</p></article>
            </div>
            <p>まとめ表：<a href="materials/cowork-progress.xlsx" download>複数プロジェクトの進捗を管理・分析する（Excel）</a></p>
          `
      },
      {
        id: "prepare",
        title: "準備",
        practice: true,
        body: `
            <p class="kicker">やってみる　2／5</p>
            <h1>Google ドライブに、管理表を2つ置く</h1>
            <ol>
              <li>Google ドライブにフォルダを作る（例：「Claude Cowork 練習」の中に「EP25」）</li>
              <li>練習用の進捗管理表を2つ、そのフォルダにアップロードする</li>
              <li>フォルダを開いたときの、ブラウザの上に出ている URL をコピーしておく</li>
            </ol>
            <h2>練習用の進捗管理表（すべて架空）</h2>
            <ul>
              <li><a href="materials/practice/progress-corporate-site.xlsx" download>コーポレートサイト刷新・展示会PJ（Excel）</a></li>
              <li><a href="materials/practice/progress-new-product.xlsx" download>新商品プロモーションPJ（Excel）</a></li>
            </ul>
            <p>どちらも「ダッシュボード」と「タスク一覧（ガント）」の2枚のシートがあります。基準日は2026年9月11日です。会社名・人名・数字は、すべて作りものです。</p>
            <p>Google ドライブのコネクタ（外の道具とつなぐもの）がまだの人は、先につないでおきます：<a href="#/course/coworkextract" data-link>演習：ファイルからデータを抜き出す</a></p>
          `
      },
      {
        id: "ask",
        title: "指示を送る",
        practice: true,
        body: `
            <p class="kicker">やってみる　3／5</p>
            <h1>フォルダの URL を入れて頼む</h1>
            <p>前のチャットが残っていたら「新規」で開きなおし、モードは Cowork にします。次の指示を貼り、［　］の所を自分のフォルダの URL に置きかえます。<strong>URL がないと、AI にもどのフォルダか分かりません。</strong></p>
            ${talk([
              { me: `各プロジェクトの現在の進捗状況を把握したいです。
指定フォルダ（［Google ドライブのフォルダの URL］）内にある各進捗管理表を読み取り、プロジェクトごとに今週の進捗報告書を Google ドキュメント形式で作成してください。

【報告書に書く項目】
・進捗サマリー（完了・進行中・遅延などの件数）
・遅れているタスク
・止まっている原因
・来週やること
・要確認・要判断事項

【ファイル名】
「進捗報告書_（プロジェクト名）」としてください。
作った報告書は、同じフォルダに保存してください。` }
            ], "")}
            <table>
              <thead><tr><th>要素</th><th>この指示では</th></tr></thead>
              <tbody>
                <tr><td>目的</td><td>各プロジェクトの今の進み具合をつかみたい</td></tr>
                <tr><td>対象範囲</td><td>指定したフォルダの中の、進捗管理表すべて</td></tr>
                <tr><td>完成物</td><td>プロジェクトごとの、今週の進捗報告書（Google ドキュメント）</td></tr>
                <tr><td>作成ルール</td><td>報告書に書く5つの項目と、ファイル名の決まり</td></tr>
              </tbody>
            </table>
            <h2>送る前の設定</h2>
            <ul>
              <li><strong>承認</strong>：自動承認。はじめての作業で「すべてスキップ」（何も聞かずに進める）は危ないので使わない</li>
              <li><strong>モデル</strong>：込み入った作業なので Opus 5。effort（どれだけ深く考えるか）は標準</li>
            </ul>
            <p>表の量が多いので、終わるまで少し時間がかかります。待っている間は、ほかの仕事をしてかまいません。</p>
          `
      },
      {
        id: "check",
        title: "確かめる",
        practice: true,
        body: `
            <p class="kicker">やってみる　4／5</p>
            <h1>できた報告書を、元の表と見くらべる</h1>
            ${talk([
              { ai: `2件の進捗報告書を Google ドキュメントで作り、同じフォルダに保存しました。\n\n・進捗報告書_コーポレートサイト刷新・展示会PJ\n・進捗報告書_新商品プロモーションPJ\n\n【コーポレートサイト刷新・展示会PJ】\n進捗サマリー：全25件のうち、完了12件・進行中3件・遅延7件・未着手3件\n遅れているタスク：デザイン制作の遅延3件が一番のつまり所です。Web・システムと展示会準備も2件ずつ遅れています。9月14日に始める予定の「ページの組み込み」が危うい状態です。\nマイルストーン：デザイン確定と新サイト公開が、それぞれ10営業日遅れる見込みです。\n止まっている原因：デザイン確定の遅れ、制作会社が写真素材を待っている、Web・システム担当が別案件で動けていない` }
            ])}
            <h2>確かめる所</h2>
            <ul>
              <li>ファイル名と見出しが、指示どおりになっているか</li>
              <li>完了・遅延などの<strong>件数</strong>が、元の表（ダッシュボード）と合っているか</li>
              <li>遅れているタスクと原因が、元の表（タスク一覧の備考）と合っているか</li>
              <li>表に書いていないことを、推測で書き足していないか</li>
            </ul>
            <p>練習用の表で見くらべると、コーポレートサイト刷新・展示会PJは「完了12・進行中3・遅延7・未着手3」です。遅延はデザイン制作3件、Web・システム2件、展示会準備2件です。</p>
            <div class="callout warn">スキルにする前に、必ず一度は数字と中身を人の目で確かめます。ずれていたら、指示を直してやりなおします。</div>
          `
      },
      {
        id: "summary",
        title: "整えてスキルにする",
        body: `
            <p class="kicker">まとめ　5／5</p>
            <h1>形が決まったら、スキルにする</h1>
            <p>細かい所が気になったら、直します。たとえば見出しが詰まっていて読みにくいときは、次のどちらかです。</p>
            <ul>
              <li>指示に「見出しごとに改行を入れる」と書き足して、やりなおす</li>
              <li>同じチャットで「見出しごとに改行を入れて直してください」と頼む</li>
            </ul>
            <p>納得のいく形になったら、スキルにして、毎週同じように作れるようにします：<a href="#/course/coworkskillmake/make" data-link>スキルを作成して呼び出す</a></p>
            <h2>応用</h2>
            <table>
              <thead><tr><th>やりたいこと</th><th>やり方</th></tr></thead>
              <tbody>
                <tr><td>ほかの形で出したい</td><td>Google スライド、PowerPoint、Excel などでも同じようにできる</td></tr>
                <tr><td>パソコンの中のファイルを使いたい</td><td>入力欄の「フォルダ追加」でパソコンのフォルダを選べば、そこの表を読み、報告書もパソコンに作れる</td></tr>
              </tbody>
            </table>
            <h2>まとめ</h2>
            <ol>
              <li>管理表をフォルダに置き、その URL を指示に入れる</li>
              <li>目的・対象範囲・完成物・作成ルール・ファイル名を書く</li>
              <li>はじめては自動承認と Opus。終わるまでほかの仕事をしてよい</li>
              <li>件数と中身を元の表と見くらべてから、スキルにする</li>
            </ol>
            <p>まとめ表：<a href="materials/cowork-progress.xlsx" download>複数プロジェクトの進捗を管理・分析する（Excel）</a></p>
            <p><a class="btn-orange" href="#/course/coworkreceipt" data-link>次へ：演習：レシートから経費精算を自動化する</a>
            <a class="btn-dark" href="#/course/coworkvoice" data-link>音声入力から日報を作成するへ</a></p>
          `
      }
    ]
  };
})();
