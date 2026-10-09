(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.survey = {
    id: "survey",
    title: "アンケート・ABC・競合調査",
    subtitle: "回答CSVの集計、売上のABC分析、競合の料金比較まで Claude Code で出す",
    duration: "約70分",
    audience: "Claude Code インストール済み／競合調査は上級（Pro以上・Cursor）",
    lessons: [
      {
        id: "goal",
        title: "アンケートを集計してグラフに",
        practice: true,
        was: [
          "survey/goal",
          "survey/words",
          "survey/setup",
          "survey/flow",
          "survey/step1",
          "survey/step2"
        ],
        body: `
            <p class="kicker">アンケート　1／7</p>
            <h1>回答CSVから、設問ごとの集計とグラフを作る</h1>
            <p>回答CSVを開いて、設問ごとに件数を数えています。グラフは、また別作業です。</p>
            <p>survey.csv を渡して、件数・割合・グラフ・レポートまで出すツールを作ってもらいます。まだ Code が入っていない人は <a href="#/course/code" data-link>Claude Code講座</a> から。</p>
            <div data-pic="survey" data-cap="CSVを取り込むだけ。件数・割合・グラフ"></div>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>CSVを置く</h3><p>回答をCSVで書き出し、survey フォルダへ。1行が1人の回答、1列が1設問</p></article>
              <article class="op"><span class="num">2</span><h3>中身を確認させる</h3><p>Claude Code を起動して、下の1つ目を貼る</p></article>
              <article class="op"><span class="num">3</span><h3>集計ツールを作らせる</h3><p>どんなグラフで見たいかを書いた2つ目を貼る</p></article>
            </div>
            <p>練習用：<a href="materials/practice/survey.csv" download>アンケートの回答（survey.csv・60件）</a>　架空の店の回答です。名前は入っていません。</p>
            ${box(`アンケート結果を集計してグラフにするツールを作りたいです。survey.csv の中身を確認して、どんな設問があるか、集計できそうか教えて。`)}
            ${box(`survey.csv を読み込んで、設問ごとに集計してグラフにするツールを作って。選択式は円グラフや棒グラフ、割合(%)も表示。結果をまとめたレポート(PDFかHTML)も出して。`)}
          `
      },
      {
        id: "report",
        title: "自由記述の要約とレポート化",
        practice: true,
        was: [
          "survey/step3",
          "survey/step4",
          "survey/step5",
          "survey/trouble",
          "survey/safety",
          "survey/summary"
        ],
        body: `
            <p class="kicker">アンケート　2／7</p>
            <h1>生の声を要約し、見せ方を整えて、毎回同じ形に</h1>
            <p>数字に自由記述の要約を足し、体裁をそろえて、次回はCSVを渡すだけにします。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>自由記述を要約</h3><p>肯定の声・改善の声に分ける</p></article>
              <article class="op"><span class="num">2</span><h3>見せ方を整える</h3><p>報告先（社内・お客様）に合わせる</p></article>
              <article class="op"><span class="num">3</span><h3>手順を保存</h3><p>新しいCSVで同じレポート</p></article>
            </div>
            ${box(`自由記述の回答は、よくある意見をいくつかにまとめて要約して。肯定的な声・改善の声に分けて、代表的なコメントも見せて。`)}
            ${box(`グラフの色を見やすくして、割合(%)と件数の両方を表示。各グラフにタイトルを付けて、レポート全体の体裁を整えて。`)}
            ${box(`毎回同じ形式で出せるように手順を保存して。新しい回答CSVを渡したら、同じレイアウトのレポートを作れるようにして。`)}
            <ul>
              <li><strong>文字化け・日本語が出ない</strong> … CSVの文字コード（UTF-8など）と「日本語フォントで」を指定</li>
              <li><strong>グラフが出ない・集計がずれる</strong> … 1行1回答か、どの列がどの設問かを伝える</li>
            </ul>
            <div class="callout warn">外に出す資料では、氏名など個人が特定される情報を伏せます。件数や割合は自分でも確認し、回答CSVの控えを残します。</div>
          `
      },
      {
        id: "abc",
        title: "ABC分析：表をA・B・Cに分ける",
        practice: true,
        was: ["abc/goal", "abc/words", "abc/setup", "abc/flow", "abc/step1", "abc/step2"],
        body: `
            <p class="kicker">ABC分析　3／7</p>
            <h1>金額の大きい順に、A（重点）・B・Cに分ける</h1>
            <p>商品や得意先と金額の表を渡し、累積構成比で分けてもらいます。目安は累積70％までがA、90％までがB、残りがC。境目はあとで変えられます。</p>
            <div data-pic="abc" data-cap="金額の大きい順。Aが売上の大半を占める"></div>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>表を置く</h3><p>名前と金額の列がある Excel／CSV を abc フォルダへ。期間が分かるファイル名に</p></article>
              <article class="op"><span class="num">2</span><h3>使う列を確認させる</h3><p>まだ分けない</p></article>
              <article class="op"><span class="num">3</span><h3>分けて検品</h3><p>件数・金額の合計が元の表と合うかを自分でも見る</p></article>
            </div>
            <p>練習用：<a href="materials/practice/sales.xlsx" download>商品別の売上（sales.xlsx・20品目）</a>　架空の数字です。</p>
            ${box(`ABC分析の表とグラフを作りたいです。sales.xlsx の中身を確認して、どの列が名前で、どの列が金額か、分析できそうか教えて。まだ分けないで。`)}
            ${box(`sales.xlsx を使ってABC分析して。金額の大きい順に並べ、構成比と累積構成比を出して。累積70％までをA、90％までをB、残りをCにして。結果はExcelで保存して。件数・金額の合計が元データと合うかも教えて。境目はあとで変えられるようにして。`)}
          `
      },
      {
        id: "abcreport",
        title: "ABC分析：グラフと1枚の報告",
        practice: true,
        was: [
          "abc/step3",
          "abc/step4",
          "abc/step5",
          "abc/trouble",
          "abc/safety",
          "abc/summary"
        ],
        body: `
            <p class="kicker">ABC分析　4／7</p>
            <h1>棒と累積の線で見せ、A4・1枚にまとめ、毎月使う</h1>
            <p>グラフ、経営者向けの1枚報告、毎月の型の順に頼みます。報告は下書きまでです。</p>
            ${box(`ABCの結果をグラフにして。金額の棒グラフと、累積構成比の折れ線を1つの図に。Aは目立つ色、Cは控えめな色。タイトルに期間を入れて。画像かExcelのシートで保存して。`)}
            ${box(`このABC分析を、経営者向けにA4・1枚の報告にして。①結論（どこに力を入れるか）②A・B・Cの件数と金額の割合③次の一手、の順。やさしい言葉で。提出やメール送信はしないで。`)}
            ${box(`この手順を“いつものABC分析”として保存して。次は新しいExcelを渡すだけで、同じ表・グラフ・1枚報告が出るようにして。商品だけでなく、得意先の金額でも同じ型でできるようにして。`)}
            <ul>
              <li><strong>列が分からない</strong> … 「A列が商品名、C列が売上」と位置を伝える</li>
              <li><strong>Aが多すぎる／少なすぎる</strong> … 「累積80％までをAに変えて」</li>
              <li><strong>同じ商品がバラバラ</strong> … 名前のゆれ（全角・略称）を先にそろえてもらう</li>
              <li><strong>合計が合わない</strong> … 元の合計と分析後の合計を並べて見せてもらう</li>
            </ul>
            <p>銀行・税務・取引先への提出は、数字と社名を自分で照合してからです。</p>
          `
      },
      {
        id: "research",
        title: "競合調査：準備とプラグイン",
        practice: true,
        was: ["researcher/goal", "researcher/prep", "researcher/plugin"],
        body: `
            <p class="kicker">競合調査　5／7　上級</p>
            <h1>競合の料金を、公式で裏取りして比べる準備</h1>
            <p>Claude Code に競合の料金と特徴を調べさせ、料金の裏取りまでしたレポート（HTML・Markdown・PDF）を出させます。必要なのは Claude Pro 以上、Cursor、ターミナルで動く Claude Code です。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>フォルダを開く</h3><p>中身を公開してよい練習用の作業フォルダを Cursor で開き、ターミナルで <code>claude</code>。初回の「このフォルダを信頼しますか」はエラーではない</p></article>
              <article class="op"><span class="num">2</span><h3>プラグインを入れる</h3><p>講義で配られたコマンドで入れる（全文は配布PDFと案内された GitHub のページ）</p></article>
              <article class="op"><span class="num">3</span><h3>再起動して初期化</h3><p>一度終了し、もう一度起動してから下を打つ。作業用のファイル一式ができる</p></article>
            </div>
            ${box(`/researcher:init`)}
            <p>モデルは Opus で足りることが多いです。いちばん高いモデルを何本も同時に回すと、利用制限にすぐ届きやすい、と案内されます。</p>
          `
      },
      {
        id: "write",
        title: "競合調査：2つのファイルを書く",
        practice: true,
        was: ["researcher/write"],
        body: `
            <p class="kicker">競合調査　6／7</p>
            <h1>自社サービス.md が軸。リサーチの好み.md は調べ方の注文</h1>
            <p>作業フォルダの2つのファイルに、下の形で書きます（各3分でよい）。本物の未公開料金や顧客名は、教室に貼りません。</p>
            ${box(`# 自社サービス（練習用サンプル）
名前：サンプルタスク管理
何をするか：少人数の店や事務所で、今日やることを一覧にする
誰向けか：従業員10人前後。ITに詳しくない人
料金：月額 2,980円（税込）／1事業所。無料プランなし
主な機能：タスク、担当、期限、完了チェック。スマホのブラウザで使える
まだ無いもの：勤怠、給与、顧客管理
強み：画面が少ない。日本語だけ
弱み：無料の競合と比べると高い。連携が少ない`)}
            ${box(`# リサーチの好み
調べる競合：3社まで
必須の観点：料金、主な機能、強み、弱み、ターゲット
出力：毎回 HTML も作る。Markdown と PDF も出す
口調：手加減しない。負けている点ははっきり書く
例：「価格では無料の競合に勝てない」のように書く
料金は公式ページで裏取りする。古いブログだけは信じない
無い数字は埋めない。不明と書く`)}
            <p>HTML が出なかったときは、リサーチの好み.md に「毎回HTMLも作る」と書いてから、もう一度調べます。</p>
          `
      },
      {
        id: "run",
        title: "競合調査：回して読む",
        practice: true,
        was: ["researcher/run", "researcher/more", "researcher/qa", "researcher/summary"],
        body: `
            <p class="kicker">競合調査　7／7</p>
            <h1>候補を自分で選び、調査・裏取り・点検まで回す</h1>
            <p>下を打つと競合の候補が出ます。自分で選ぶと、調査 → 裏取り（料金の正確さ、情報の新しさ）→ 最終点検の順に進み、<code>report</code> フォルダにレポートが出ます。</p>
            ${box(`/researcher:research`)}
            <ul>
              <li>料金は画面の数字をうのみにせず、公式の料金ページと人の目でも1回は突き合わせる</li>
              <li>会社名を指定する、テーマを決める（例：料金プランの見直し）、前回のレポートと比べる、という調べ方もある。打ち方は配布PDFと案内された GitHub のページ</li>
              <li>できた HTML を別の AI に渡して資料の草案にしてもよい。出す前は人が確認し、秘密は渡さない</li>
            </ul>
            <div class="callout warn">調べる会社や項目を増やすほど、時間もトークン（利用量）も増えます。必要な分に絞ります。</div>
          `
      }
    ]
  };
})();
