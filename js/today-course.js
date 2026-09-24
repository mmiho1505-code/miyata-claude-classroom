(() => {
  const SAMPLE = "https://claude.ai/artifact/2z9qPrxtUiCPgjVbA7Uuiu";
  const sampleLink = (label) =>
    `<a href="${SAMPLE}" target="_blank" rel="noopener">${label}</a>`;

  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.today = {
    id: "today",
    title: "今日の講義",
    subtitle: "2時間。チャット、初めてのCowork設定、ポータルの作り方・直し方",
    duration: "約120分",
    audience: "マンツーマン／Coworkが初めての人からポータル担当まで",
    lessons: [
      {
        id: "goal",
        title: "今日の地図",
        body: `
            <p class="kicker">GOAL　0〜10分</p>
            <h1>チャット → Cowork → 作る → 直す（2時間）</h1>
            <p>今日は2時間あります。急がず、待ち時間も使います。途中の講座に飛ばなくても、この1本で一通りできます。</p>
            <table>
              <thead><tr><th>時間</th><th>区分</th><th>やること</th></tr></thead>
              <tbody>
                <tr><td>0〜10分</td><td>必須</td><td>今日の地図。ログインできるか確認</td></tr>
                <tr><td>10〜25分</td><td>必須</td><td>チャット入門。返事を2回もらう</td></tr>
                <tr><td>25〜50分</td><td>必須</td><td>初めての Cowork。アプリを入れて始める</td></tr>
                <tr><td>50〜65分</td><td>必須</td><td>ポータルを1ページ作る。確認リスト</td></tr>
                <tr><td>65〜70分</td><td>必須</td><td>休憩</td></tr>
                <tr><td>70〜90分</td><td>必須</td><td>直し方。追加・移動を2つ。先生と確認</td></tr>
                <tr><td>90〜95分</td><td>できれば</td><td>勤怠の打刻を足す</td></tr>
                <tr><td>95〜110分</td><td>余ったら</td><td>申請・給与・予約。飛ばしてよい</td></tr>
                <tr><td>110〜120分</td><td>必須</td><td>デザインは最後。まとめ</td></tr>
              </tbody>
            </table>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>チャット</h3><p>ブラウザで日本語のお願いを送り、返事をもらう</p></article>
              <article class="op"><span class="num">2</span><h3>Cowork</h3><p>初めての人はアプリの入れ方から。作業係を開き、ページを作ってもらう</p></article>
              <article class="op"><span class="num">3</span><h3>直す</h3><p>同じ会話の続きに「何を・どこへ」と書く</p></article>
            </div>
            <div class="callout">今日の成功は、ポータルを1枚作って、お知らせを1件足せることです。申請や給与は余ったらで構いません。</div>
            <p>サイトの例（別タブで開く）：${sampleLink("社内ポータルの見本")}</p>
            <p>もっと詳しく読むときは <a href="#/course/webchat" data-link>チャット入門</a>、<a href="#/course/portalmake" data-link>作り方編</a>、<a href="#/course/portalfix" data-link>直し方編</a> へ。</p>
          `
      },
      {
        id: "chat",
        title: "チャット入門",
        practice: true,
        body: `
            <p class="kicker">入口　10〜18分</p>
            <h1>まず、日本語で1回返事をもらう</h1>
            <p>ブラウザで <strong>claude.ai</strong> を開きます。下が入力欄です。黒い画面は使いません。</p>
            <ol>
              <li>まだアカウントが無い人は <a href="#/course/account" data-link>アカウントと有料プラン</a></li>
              <li>ログインしたら「新しいチャット」</li>
              <li>下の文をコピーして貼り、送る</li>
            </ol>
            ${box(`小学生にも分かる言葉で、請求書と見積書の違いを5行で教えてください。専門用語が出たら、すぐ言い換えてください。`)}
            <p>返事が来たら成功です。「もっと短く」と追加で書いて構いません。</p>
            <div class="callout">パスワード・口座・マイナンバーは書きません。</div>
          `
      },
      {
        id: "chatmore",
        title: "チャットをもう1回",
        practice: true,
        body: `
            <p class="kicker">入口　18〜25分</p>
            <h1>同じチャットで、続けて頼む</h1>
            <p>返事が来た会話の続きです。新しいチャットは開きません。下から1つ選んで送ります。余裕があれば2つやって構いません。</p>
            ${box(`もっと短く、3行にしてください。最後に、事務の人が間違えやすい点を1つだけ足してください。`)}
            ${box(`当社の社内ポータルに載せるとしたら、お知らせ・今月の予定・よく使うリンク・部署の連絡先の4つのうち、毎朝いちばん最初に見るべきものはどれですか。理由を2行で。`)}
            ${box(`「おまかせで進めて」と頼むのは、どんなときに向きますか。向く例と、向かない例を1つずつ、やさしい言葉で。`)}
            <p>返事が見えたら次へ。送れなければ、先生と一緒にコピーして貼ります。</p>
          `
      },
      {
        id: "vs",
        title: "チャットと Cowork",
        body: `
            <p class="kicker">違い　25〜30分</p>
            <h1>相談はチャット、作るのは Cowork</h1>
            <div class="ops">
              <article class="op"><span class="num">A</span><h3>チャット</h3><p>ブラウザ。答えが文章で返ってくる。相談・下書き向き</p></article>
              <article class="op"><span class="num">B</span><h3>Cowork</h3><p>パソコンの Claude アプリ。ページやファイルまで作る。実務向き</p></article>
            </div>
            <p>社内ポータルは「作ってもらう仕事」なので、ここから先は <strong>Cowork</strong> です。今日が初めての人も、このあと設定から一緒にやります。</p>
          `
      },
      {
        id: "install",
        title: "アプリを入れて始める",
        body: `
            <p class="kicker">設定　30〜42分</p>
            <h1>初めてなら、パソコンに Claude アプリを入れる</h1>
            <p>Cowork は、ブラウザの claude.ai だけでは足りないことがあります。今日はパソコンのアプリを使います。</p>
            <ol>
              <li>パソコンのブラウザで <a href="https://claude.ai/download" target="_blank" rel="noopener">claude.ai/download</a> を開く</li>
              <li>Windows なら Windows 用、Mac なら macOS 用を入れて、インストールする</li>
              <li>アプリを開き、claude.ai と<strong>同じメール</strong>でログインする</li>
              <li>左から <strong>Cowork</strong> を選ぶ（Chat のまま始めない）</li>
              <li><strong>新しいタスク</strong>（新しい会話）を1つ始める</li>
            </ol>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>同じアカウント</h3><p>チャットで使ったメールと同じ。別の Google だとログインできません</p></article>
              <article class="op"><span class="num">2</span><h3>有料プラン</h3><p>Cowork を使うには、多くの場合 Pro などの有料プランが必要です。<a href="#/course/account" data-link>プランの確認</a></p></article>
              <article class="op"><span class="num">3</span><h3>フォルダ</h3><p>今日のポータルだけなら、先に文を貼ってよい。請求書・経費のときはフォルダを先に許可する</p></article>
            </div>
            <p>すでにアプリが入っている人は、開いて Cowork の新しいタスクまで来れば十分です。</p>
            <div class="callout">この先の作り方・直しまで、同じ会話を使います。途中で新しい会話に切り替えないでください。「許可しますか」と出たら、今日使うものだけ許可します。</div>
          `
      },
      {
        id: "cando",
        title: "Coworkでできること",
        body: `
            <p class="kicker">機能　42〜46分</p>
            <h1>チャットは相談、Coworkは手を動かす</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>ページや資料を作る</h3><p>社内ポータル、請求書、Excel、PDF、スライド</p></article>
              <article class="op"><span class="num">2</span><h3>ファイルを読む・整理する</h3><p>フォルダの中を仕分け、名前をそろえる、集計する</p></article>
              <article class="op"><span class="num">3</span><h3>つなぐ</h3><p>パソコンのフォルダ。Gmail やカレンダーにつながることもある</p></article>
              <article class="op"><span class="num">4</span><h3>同じ会話で直す</h3><p>「〇〇を△△に」と続ける。手順を残して毎月くり返すこともできる</p></article>
            </div>
            <div class="callout">今日使うのは 1 と 4 です。ポータルを作って、同じ会話で直します。フォルダ接続は、請求書や経費のときに特に大事です。</div>
            <p>詳しい事務の例は <a href="#/course/cowork" data-link>はじめての Cowork</a> にあります。</p>
          `
      },
      {
        id: "screen",
        title: "画面の見方",
        body: `
            <p class="kicker">設定　46〜52分</p>
            <h1>初めて開いたときの、見る場所</h1>
            <div class="qa">
              <p class="qa-q">左のメニュー</p>
              <p>Chat と Cowork を切り替える。今日は Cowork。</p>
            </div>
            <div class="qa">
              <p class="qa-q">会話（タスク）の一覧</p>
              <p>前の作業に戻る。ポータルを直すときは、作った会話を開く。</p>
            </div>
            <div class="qa">
              <p class="qa-q">下の入力欄</p>
              <p>お願いを貼って送る。教室の「コピー」を使ってから貼る。</p>
            </div>
            <div class="qa">
              <p class="qa-q">フォルダ・ファイル</p>
              <p>パソコンのフォルダを許可すると、Excel や PDF を読める。今日のポータルだけなら後でもよい。</p>
            </div>
            <div class="qa">
              <p class="qa-q">できたページのリンク</p>
              <p>社員に渡す住所。直しても、この住所は変わらないことが多い。</p>
            </div>
            <p>聞かれたら、知っている範囲で答えるか「おまかせで進めて」で構いません。送る・消す・公開の最終確認は人の仕事です。</p>
          `
      },
      {
        id: "stuck",
        title: "止まったとき",
        body: `
            <p class="kicker">つまずき　必要なら5分</p>
            <h1>開けないときは、当てはまる行だけ見る</h1>
            <p>先生と一緒に、今の画面と下を見比べます。開いたら、次のお願い文を先に読んでおきます。</p>
            <div class="qa">
              <p class="qa-q">アプリが無い</p>
              <p>パソコンのブラウザで <a href="https://claude.ai/download" target="_blank" rel="noopener">Claude を入れる</a>。Windows 用か Mac 用かを選ぶ。</p>
            </div>
            <div class="qa">
              <p class="qa-q">Cowork が見当たらない</p>
              <p>ブラウザの claude.ai ではなく、<strong>パソコンの Claude アプリ</strong>を開く。左のメニューから Cowork。</p>
            </div>
            <div class="qa">
              <p class="qa-q">ログインできない</p>
              <p>チャットと同じメールか確認する。<a href="#/course/account" data-link>アカウント編</a></p>
            </div>
            <div class="qa">
              <p class="qa-q">貼り付けできない</p>
              <p>入力欄をクリックしてから Ctrl＋V（Mac は ⌘＋V）。<a href="#/course/faq/paste" data-link>貼り付けのつまずき</a></p>
            </div>
            <div class="qa">
              <p class="qa-q">会社のネットで止まる</p>
              <p>無理に突破しない。<a href="#/course/faq/net" data-link>社内ルール</a></p>
            </div>
            <div class="callout">どれも違うときは、画面を先生に見せます。次の「ポータルを作る」へ進んで、お願い文だけ先に読んでも構いません。</div>
          `
      },
      {
        id: "one",
        title: "ポータルを作る",
        practice: true,
        body: `
            <p class="kicker">作る　52〜60分　練習</p>
            <h1>土台の1ページを頼む</h1>
            <p>誰が使うか・何を載せるか・どんな感じかを、最初に書いておくと直す回数が減ります。下をコピーして Cowork に貼ります。</p>
            ${box(`当社の社内ポータルを1ページ作ってください。社名は「株式会社 宮田財務」です。

載せたいもの
・お知らせ（最新3件、日付つき、「重要」の印をつけられる）
・今月の予定
・よく使うリンク（メール・社内フォルダ・カレンダーなど）
・部署の連絡先（部署・担当・内線・メール）

見た目
・パソコンでもスマホでも見やすく
・白を基調に、明るい青をアクセントにした落ち着いたデザイン
・文字は大きめ

中身はサンプルで作り、あとで私が画面上で書き換えられるようにしてください。
できたら、社員が開けるリンクをください。`)}
            <p>分からないことを聞かれたら、短く答えるか「おまかせで進めて」で大丈夫です。</p>
            <p>送れたら次の「待ち時間」へ。送れなければ、先生と一緒にコピーを押します。</p>
            <p>先に見本を見たい人は <a href="https://claude.ai/artifact/2z9qPrxtUiCPgjVbA7Uuiu" target="_blank" rel="noopener">社内ポータルの見本</a> を開いてください。</p>
          `
      },
      {
        id: "wait",
        title: "待ち時間の使い方",
        body: `
            <p class="kicker">待つ　55〜65分</p>
            <h1>Cowork が作っているあいだに</h1>
            <p>ページができるまで、2〜10分かかることがあります。その間に下をやります。できたら画面を閉じずに待ちます。</p>
            <ol>
              <li>社名・日付・リンク・スマホの4つを、あとで見るメモにする</li>
              <li>先生と「今、どこまで進んだか」を1分で確認する</li>
              <li>本物のデータはまだ渡さない、と自分に言い聞かせる</li>
            </ol>
            <div class="callout">リンクが出たら、お気に入りに保存してから確認リストを試します。リンクがまだなら、機能追加には進みません。</div>
            <p>待ち時間に見本を見る：<a href="https://claude.ai/artifact/2z9qPrxtUiCPgjVbA7Uuiu" target="_blank" rel="noopener">社内ポータルの見本</a></p>
          `
      },
      {
        id: "share",
        title: "確認してから渡す",
        body: `
            <p class="kicker">確かめる　63分前後</p>
            <h1>自分の目で見てから、リンクを渡す</h1>
            <ol>
              <li>社名が「株式会社 宮田財務」か</li>
              <li>お知らせに日付があるか</li>
              <li>リンクを押して、行きたい場所に着くか</li>
              <li>スマホでも文字が読めるか</li>
            </ol>
            <p>よければリンクをお気に入りに保存し、社員に渡します。あとから中身を直しても、アドレスは変わりません。</p>
            <p>実際に作った例：<a href="https://claude.ai/artifact/2z9qPrxtUiCPgjVbA7Uuiu" target="_blank" rel="noopener">社内ポータルの見本</a></p>
            <div class="callout">本物のお知らせや名簿は、ページができてから渡します。今はサンプルのままで進めて構いません。</div>
          `
      },
      {
        id: "break",
        title: "休憩（5分）",
        body: `
            <p class="kicker">休憩　65〜70分</p>
            <h1>席を立ってよい時間です</h1>
            <p>Cowork の会話は閉じないでください。戻ったら、同じ会話の続きから直します。</p>
            <ul>
              <li>トイレ・水・姿勢を直す</li>
              <li>リンクがお気に入りにあるか、もう一度見る</li>
              <li>分からないことは、戻ってから先生に聞く</li>
            </ul>
          `
      },
      {
        id: "edit",
        title: "直し方の基本",
        body: `
            <p class="kicker">直す　70〜75分</p>
            <h1>ページの中をいじらず、話しかける</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>会話に戻る</h3><p>ポータルを作った Cowork の会話を開く</p></article>
              <article class="op"><span class="num">2</span><h3>頼む</h3><p>「〇〇を△△に変えて」と送る</p></article>
              <article class="op"><span class="num">3</span><h3>開き直す</h3><p>ページを再読み込みすると、直った状態になる</p></article>
            </div>
            <p>見つからないときは、新しいタスクにポータルのリンクを貼ってお願いします。</p>
          `
      },
      {
        id: "promptwork",
        title: "よくある直し方",
        practice: true,
        body: `
            <p class="kicker">編集のしかた　75〜85分　練習</p>
            <h1>追加・変更・移動・戻す</h1>
            <p>自分のポータルで、下から<strong>最低2つ</strong>試します。余裕があれば全部やって構いません。項目の場所を変えるときも、自分でドラッグしません。</p>
            ${box(`お知らせに『10/20 棚卸しのため午後休業』を一番上に追加して`)}
            ${box(`総務の内線を101から105に変えて`)}
            ${box(`終わった9月の予定は消して`)}
            ${box(`よく使うリンクの『勤怠』を一番上に移して`)}
            ${box(`『今月の予定』のブロックを、『お知らせ』のすぐ下に移して`)}
            ${box(`お知らせの2番目と3番目を入れ替えて`)}
            ${box(`さっきの変更は取り消して、ひとつ前に戻して`)}
            <h2>タブの直し方</h2>
            <p>上のメニュー名を変えるときも、同じ会話の続きに書きます。下をコピーして送ります。</p>
            <p>①『ホーム』を『予定』にする</p>
            ${box(`上のタブの『ホーム』を『予定』に変えて。中身は今のホームのままにして`)}
            <p>②もともとの『予定』タブは消す（同じ名前が2つにならないように）</p>
            ${box(`『予定』というタブは消して。さっき『ホーム』を『予定』に変えたので、同じ名前が2つ残らないように`)}
            <p>③案件管理のタブを変える</p>
            ${box(`案件管理のタブを変更してほしいです。`)}
            <h2>機能を足す（見積・変換・点検客）</h2>
            <p>同じ会話の続きに、1つずつ送ってください。</p>
            <p>松竹梅の見積書</p>
            ${box(`『松竹梅の見積書作成』を追加してください。

・同じ工事・同じ内容で、松（上位）・竹（標準）・梅（おさえめ）の3案を一度に作る
・項目・数量・単価・金額が並ぶ表にする
・当社の見積書の書式で出す
・画面から印刷・PDF保存できるように
・タブまたはタイルの名前は『松竹梅見積』`)}
            <p>業者の見積・請求書を、当社の書式に変換</p>
            ${box(`業者からもらった見積書・請求書を、当社の書式の見積書・請求書に自動で変換できるようにしてください。

・写真またはPDF・画像をアップロードする
・業者名・日付・明細・金額を読み取る
・当社の見積・請求のひな形に打ち直す
・数字が読めないところは空欄のままにして、私が直せるように
・変換したあと、必ず人が金額を確認してから使う、と画面に注意を出す
・タブまたはタイルの名前は『書式変換』`)}
            <p>③ガス器具点検客の管理</p>
            ${box(`『ガス器具点検客の管理』を追加してください。

・お客さんの名前・住所・電話・器具の種類・前回点検日・次回予定を登録する
・一覧で見られて、追加・編集・削除ができる
・次回点検が近い人を上に出す
・タブまたはタイルの名前は『ガス点検』`)}
            <p>1回に頼むのは1〜3個まで。あいまいな「いい感じに」より、具体的な一言のほうが早いです。</p>
            <p>直したらページを再読み込みして、自分の目で確認します。</p>
          `
      },
      {
        id: "round",
        title: "先生と確認",
        body: `
            <p class="kicker">確認　85〜90分</p>
            <h1>直したところを、先生に1つ見せる</h1>
            <ol>
              <li>自分のポータルを開く</li>
              <li>「今、直したところ」を1つだけ指差して説明する</li>
              <li>先生と一緒に、ページを再読み込みして確かめる</li>
            </ol>
            <p>「内線を変えた」「予定を下に移した」で十分です。できていれば次へ。できていなければ、続きで直します。</p>
          `
      },
      {
        id: "two",
        title: "機能を足す：勤怠",
        practice: true,
        body: `
            <p class="kicker">同じ会話の続き　90〜95分</p>
            <h1>打刻を足す</h1>
            <p>作り方・直し方が分かったら、同じ会話に機能を足していきます。デザインの調整は、あとでまとめて行います。</p>
            <p>90分を過ぎて遅れているときは、勤怠は飛ばして <a href="#/course/today/eight" data-link>デザインは最後に</a> へ進んで構いません。</p>
            ${box(`勤怠の打刻機能を追加してください。
・出勤・休憩開始・休憩終了・退勤のボタン
・社員はclaude.aiのアカウントで自動的に見分ける
・押し間違えたら直前の打刻を取り消せる
・自分の月ごとの勤務記録を見られる`)}
          `
      },
      {
        id: "three",
        title: "管理画面と社員画面",
        practice: true,
        optional: true,
        body: `
            <p class="kicker">余ったら　95〜98分</p>
            ${box(`管理者（私）だけが開ける「管理画面」と、社員用の画面を分けてください。
管理画面には、今日の出勤状況（誰が勤務中か）と、ポータルの内容を編集するボタンを置いてください。
社員には管理画面の存在も見えないようにしてください。`)}
          `
      },
      {
        id: "four",
        title: "申請と承認",
        practice: true,
        optional: true,
        body: `
            <p class="kicker">余ったら　98〜102分</p>
            <h1>申請を足して、管理画面で承認する</h1>
            ${box(`社員用の「申請・休暇」を追加して、管理画面で承認・却下できるようにしてください。
・打刻修正の申請（日付・出勤・退勤・休憩・理由）
・有給休暇の申請（全日・午前半休・午後半休）
・経費の申請（日付・区分・金額・内容）
有給は入社日から法律どおりに付与日数を計算し、残日数と年5日の取得義務を表示してください。
承認待ちの件数は管理画面のタブに表示してください。`)}
          `
      },
      {
        id: "five",
        title: "給与計算（管理者だけ）",
        practice: true,
        optional: true,
        body: `
            <p class="kicker">余ったら　102〜105分</p>
            <h1>総支給額までの計算を足す</h1>
            ${box(`管理画面に給与計算を追加してください。私だけが見られるようにしてください。
・勤怠から総支給額まで計算（控除・手取りは不要）
・月給制と時給制の両方
・残業は法定どおり（1日8時間・週40時間超は25%増、月60時間超は50%増、深夜25%増、法定休日35%増）
・有給休暇分（時給の人）、欠勤控除（月給の人）、承認済みの経費を反映
・祝日を自動で入れるボタン
・CSVで保存`)}
            <p>控除や手取りは入れません。</p>
          `
      },
      {
        id: "six",
        title: "管理の仕上げ",
        practice: true,
        optional: true,
        body: `
            <p class="kicker">余ったら　105分</p>
            <h1>アラート・確認・締め・名簿</h1>
            ${box(`管理画面に次を追加してください。
・残業アラート（36協定の月45時間・年360時間に近い人を表示）
・お知らせの確認状況（社員に「確認しました」ボタンを付け、誰が未確認か分かるように）
・出勤簿のCSV（社員ごと・日別）と、月次の締め（締めた月は変更不可、控えを保存、修正履歴を残す）
・社員名簿（本人が開く前に登録しておき、あとでアカウントと連携）`)}
          `
      },
      {
        id: "seven",
        title: "社員向けの便利機能",
        practice: true,
        optional: true,
        body: `
            <p class="kicker">余ったら</p>
            <h1>予約と、規程・書式集</h1>
            ${box(`社員画面に次を追加してください。
・会議室・社用車の予約（空き状況を見て予約、時間が重なったら断る、自分の予約だけ取り消せる）
・規程・書式集（就業規則や申請書のリンクをカテゴリ別に）`)}
          `
      },
      {
        id: "eight",
        title: "デザインは最後に",
        practice: true,
        body: `
            <p class="kicker">見た目　110〜115分</p>
            <h1>タイル型にまとめて直す</h1>
            <p>機能が増えるたびに並びが変わるので、デザインはここでまとめて行います。先に雰囲気を決めてから、下の文を送ります。</p>
            <p>サイトの例：${sampleLink("社内ポータルの見本")} を別タブで開く。この雰囲気を参考にします。</p>
            ${box(`この見本の雰囲気を参考に、トップを整えてください。白を基調に、落ち着いた社内向けにしてください。
見本：https://claude.ai/artifact/2z9qPrxtUiCPgjVbA7Uuiu`)}
            ${box(`トップページをグループウェアのようなタイル型にしてください。
・上に短めの青い帯（ページ名と一言）
・その下に、機能ごとのタイルを4列で並べる
・タイルは白地で、色は上の線とアイコンだけ（色を使いすぎない）
・「勤怠」のタイルは2倍の大きさにして、打刻ボタンをタイルの中に置く
・各タイルに要約（件数や直近の内容）と「詳しくはこちら」を付け、押すとそのページが開く
・管理画面も同じデザインでそろえる
・マウスカーソルに、黄色い丸がふわっと付いてくる動きを付ける`)}
            <p>迷ったら「3案を並べて見せて」と頼むと選びやすくなります。</p>
            ${box(`トップのタイル案を3つ並べて見せてください。色と並びだけ変えて、機能は同じままにしてください。`)}
            <p>時間が押したら、このページの⑥⑦は飛ばして次のデザインへ進みます。</p>
          `
      },
      {
        id: "nine",
        title: "使い始める前に",
        practice: true,
        body: `
            <p class="kicker">確認　115〜118分</p>
            <h1>足りない点を聞く</h1>
            ${box(`使い始める前に、足りない点や注意点を教えてください。`)}
            <p>出てきた注意は、自分の目で確認してから社員に渡します。</p>
          `
      },
      {
        id: "tips",
        title: "使うときのコツ",
        optional: true,
        body: `
            <p class="kicker">コツ　余ったら／空き時間に</p>
            <h1>速くなる4つ</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>具体的に書く</h3><p>色・文字の大きさ・載せたいものを最初に書いておく</p></article>
              <article class="op"><span class="num">2</span><h3>デザインは最後</h3><p>見た目の調整は、機能を足し終わってから</p></article>
              <article class="op"><span class="num">3</span><h3>迷ったら比べる</h3><p>「3案を並べて見せて」と頼む</p></article>
              <article class="op"><span class="num">4</span><h3>本物は後から</h3><p>お知らせ・連絡先・名簿は、ページができてから渡す</p></article>
            </div>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">覚えておくこと　118〜120分</p>
            <h1>チャットから、ポータルの直し方まで</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>チャット</h3><p>相談はブラウザ。日本語で1回、返事をもらう</p></article>
              <article class="op"><span class="num">2</span><h3>Coworkで作る</h3><p>アプリを入れてログイン。左から Cowork。同じ会話に貼って、ページを作る</p></article>
              <article class="op"><span class="num">3</span><h3>続きで直す</h3><p>「何を・どこへ」と書く。移動もドラッグしない</p></article>
            </div>
            <p>2時間おつかれさまでした。家でも、同じ会話の続きで直せます。</p>
            <p><a class="btn-orange" href="#/course/webchat" data-link>チャット入門</a>
            <a class="btn-dark" href="#/course/portalfix" data-link>直し方編</a></p>
          `
      }
    ]
  };

  Object.assign(CLASSROOM.quizzes, {
    today: [
      {
        q: "チャットと Cowork の役割は？",
        choices: ["どちらも黒い画面", "チャットは相談（文章）、Coworkは作業（ページやファイル）", "Coworkはスマホ専用"],
        a: 1,
        explain: "ポータルを作る・直すのは Cowork です。"
      },
      {
        q: "初めて Cowork を使うとき、最初にすることは？",
        choices: ["スマホのブラウザで開く", "パソコンに Claude アプリを入れ、同じメールでログインする", "黒い画面でコマンドを打つ"],
        a: 1,
        explain: "Cowork はパソコンのアプリです。claude.ai と同じアカウントで入ります。"
      },
      {
        q: "ポータルの中身を直す基本は？",
        choices: ["ページの中を自分でドラッグする", "作った会話の続きに「何を・どこへ」と書く", "毎回新しいリンクを作る"],
        a: 1,
        explain: "項目の移動も、話しかけるだけです。アドレスは変わりません。"
      },
      {
        q: "デザインを直すタイミングは？",
        choices: ["最初の1ページだけで完成させる", "機能を足し終わってからまとめて直す", "チャットの時点で決める"],
        a: 1,
        explain: "機能が増えるたびに並びが変わるので、見た目は最後です。"
      },
      {
        q: "パスワードや口座番号は？",
        choices: ["チャットにも Cowork にも書かない", "管理画面なら書いてよい", "お知らせに載せる"],
        a: 0,
        explain: "秘密の数字は渡しません。"
      }
    ]
  });
})();
