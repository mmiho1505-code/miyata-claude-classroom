(() => {
  const talk = CLASSROOM.talk;

  CLASSROOM.courses.coworkslack = {
    id: "coworkslack",
    title: "Slack を定期巡回してタスクを洗い出す",
    subtitle: "自分あての依頼や質問を、チェックできる一覧にして、2時間ごとに更新",
    duration: "約20分",
    audience: "Slack で自分あての依頼を見落としがちな人／確認作業を自動で回したい人",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">GOAL　1／5</p>
            <h1>いくつものチャンネルから、自分がやることだけ拾う</h1>
            <p>Slack（スラック。仕事用のチャット）のいくつものチャンネル（話題ごとの部屋）とスレッド（返信のつながり）を見て回り、<strong>自分あての質問・依頼・確認</strong>を、もれなく一覧にします。それを決まった時間ごとに自動で更新させます。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>コネクタ</h3><p>Slack とつなぐ</p></article>
              <article class="op"><span class="num">2</span><h3>アーティファクト</h3><p>チェックできる一覧を、動くページとして出す</p></article>
              <article class="op"><span class="num">3</span><h3>スケジュール</h3><p>平日2時間ごとに見て回る（<a href="#/course/coworkschedule" data-link>前の回</a>）</p></article>
            </div>
            <p>まとめ表：<a href="materials/cowork-slack.xlsx" download>Slack を定期巡回してタスクを洗い出す（Excel）</a></p>
          `
      },
      {
        id: "connect",
        title: "Slack とつなぐ",
        practice: true,
        body: `
            <p class="kicker">やってみる　2／5</p>
            <h1>先に Slack のコネクタをつないでおく</h1>
            <ol>
              <li>設定 →「コネクタ」。「人気の用途」に出ていなければ、「探索」で「Slack」を探す</li>
              <li>「Claude に接続」→「接続を続行」。<strong>「AI モデルの改善に協力する」はオフ</strong>にして「承認」</li>
              <li>つなぎたいワークスペース（会社やチームの Slack）の URL を入れて「続行」→ Slack にサインイン</li>
              <li>「Slack へのアクセスを Claude アプリに許可する」で「許可する」→「接続済み」になれば OK</li>
            </ol>
            <p>お願いに書けば、Claude のほうから「Slack と連携しますか？」と聞いてくれます。ただ、使うと分かっているなら、先につないでおくほうが楽です。</p>
            <div class="callout warn">会社の Slack をつなぐときは、会社のルールで許されているかを先に確かめます。つなぐのは自分のアカウントだけにします。</div>
          `
      },
      {
        id: "ask",
        title: "お願いを送る",
        practice: true,
        body: `
            <p class="kicker">やってみる　3／5</p>
            <h1>「アーティファクトで」と書くのがポイント</h1>
            ${talk([
              { me: `Slack の複数のチャンネルと、各チャンネル内のスレッドを横断的に確認したいです。各チャンネルで行われている議論や共有事項を整理するとともに、私宛ての質問、依頼、確認事項など、私が対応すべき内容を漏れなく抽出してください。

対象は、Slack 上の次のチャンネルです：［#チャンネル名1］［#チャンネル名2］［#チャンネル名3］

結果はアーティファクトで出力してください。チャンネルごとの要点、対応すべきメッセージ、チェックリストを入れてください。

・返信対応済みのものもチェックリストから除外せず、対応済みとしてチェックを入れた状態にしてください。
・重要度の高い順に並べてください。` }
            ], "")}
            <table>
              <thead><tr><th>要素</th><th>ポイント</th></tr></thead>
              <tbody>
                <tr><td>完成物</td><td>「<strong>アーティファクト</strong>」と書くと、チェックできる一覧など、動くページ（Web の道具）として出してくれる</td></tr>
                <tr><td>条件</td><td>Claude が勝手に判断して外したり並べ替えたりしないよう、伝わらなさそうな所ははっきり書く。中身は自由</td></tr>
              </tbody>
            </table>
            <h2>送る前の設定</h2>
            <ul>
              <li>Cowork。はじめてのお願いなので、承認は確認ありに</li>
              <li>Slack とのやりとりで少し込み入っているので、Opus 5・effort は標準</li>
            </ul>
            <p>右上の「進行状況」で、チャンネルの読みこみ → 対応することの整理…と、今どの段階かを見られます。報告が英語で出てきたら、「作業内容は日本語で報告してください」と頼みます。</p>
          `
      },
      {
        id: "artifact",
        title: "できた一覧を使う",
        practice: true,
        body: `
            <p class="kicker">やってみる　4／5</p>
            <h1>チェックできる一覧が、ページになって出てくる</h1>
            <table>
              <thead><tr><th>項目</th><th>内容</th></tr></thead>
              <tbody>
                <tr><td>中身</td><td>対応のチェックリスト（重要度・対応済みの印つき。チェック済みのものも出る）、返信が見つからないメッセージ、チャンネルごとの要点と決まったこと</td></tr>
                <tr><td>操作</td><td>見出しを押すと、その場所へ飛ぶ。「すべて／未対応のみ／対応済みのみ」で絞りこめる</td></tr>
                <tr><td>大きく見る</td><td>「展開」で大きく表示。「チャット」を押すと元に戻る</td></tr>
                <tr><td>共有</td><td>「共有」→「Anyone with the link」→「Share publicly」で URL ができ、ブラウザやスマホから見られる</td></tr>
              </tbody>
            </table>
            <div class="callout warn">「Share publicly」でできた URL は、<strong>知っている人なら誰でも見られます</strong>（Google ドライブの「リンクを知っている全員」と同じ考え方です）。社内のやりとりが入った一覧は、公開しないで自分だけで見ます。</div>
            <h2>定期巡回にする（同じチャットで）</h2>
            ${talk([
              { me: `このタスクをスケジュール設定してください。平日の9時から18時の間で、2時間ごとに実行するようにしてください。` },
              { do: "出てきた確認で、タスク名と「平日2時間ごと」を確かめて設定する" },
              { ai: `平日の9時台・11時台・13時台・15時台・17時台に実行するよう登録しました。同じ案件には同じ項目の番号を使うので、付けたチェックは更新のあとも残ります。` }
            ])}
            <ul>
              <li>お願いには「スケジュール設定」という言葉と、いつ動かすかを必ず入れる</li>
              <li>「スケジュール済みのタスク」で確かめる。時刻が「12am」などで出ることがあるが、これは世界の基準の時間（UTC）。9時間足せば日本の時間どおり</li>
            </ul>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">まとめ　5／5</p>
            <h1>つなぐ・一覧にする・回す</h1>
            <ol>
              <li>Slack のコネクタを先につなぐ（「AI モデルの改善に協力する」はオフ）</li>
              <li>見るチャンネルと、拾ってほしいもの（自分あての質問・依頼・確認）を書く</li>
              <li>「アーティファクトで」と書くと、チェックできる一覧のページになる</li>
              <li>対応済みも消さずに印をつける、重要な順に並べる、など迷いそうな所ははっきり書く</li>
              <li>同じチャットで「スケジュール設定」と、いつ動かすかを頼む</li>
              <li>練習で作ったものは、毎回動いてほしくなければ「一時停止」か「削除」</li>
            </ol>
            <div class="callout warn">Claude にさせるのは「読んで一覧にする」までです。Slack への返信や投稿は、自分でします。</div>
            <p>まとめ表：<a href="materials/cowork-slack.xlsx" download>Slack を定期巡回してタスクを洗い出す（Excel）</a></p>
            <p><a class="btn-orange" href="#/course/coworkads" data-link>次へ：演習：競合広告の出稿状況を定期収集する</a>
            <a class="btn-dark" href="#/course/coworkschedule" data-link>スケジュール実行で定期タスク化するへ</a></p>
          `
      }
    ]
  };
})();
