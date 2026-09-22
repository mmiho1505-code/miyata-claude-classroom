(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.portalmake = {
    id: "portalmake",
    title: "社内ポータルを作ろう（作り方編）",
    subtitle: "話しかけるだけで、お知らせ・予定・リンク・連絡先の1ページを作る",
    duration: "約30分",
    audience: "Coworkを使う人／事務・総務・各部署",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">GOAL</p>
            <h1>帰るときに、この3つができるように</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>作る</h3><p>社内ポータルの1ページを、話しかけるだけで作る</p></article>
              <article class="op"><span class="num">2</span><h3>確かめる</h3><p>パソコンとスマホで、中身が正しいか見る</p></article>
              <article class="op"><span class="num">3</span><h3>見せる</h3><p>社員が開けるリンクを渡す</p></article>
            </div>
            <div class="callout">プログラミングは不要です。パソコンの Claude アプリで Cowork を開いて、お願いを書くだけです。</div>
          `
      },
      {
        id: "what",
        title: "チャットと Cowork",
        body: `
            <p class="kicker">違い</p>
            <h1>今日使うのは「Cowork」です</h1>
            <div class="ops">
              <article class="op"><span class="num">A</span><h3>チャット</h3><p>相談する相手。文章で答えてくれます</p></article>
              <article class="op"><span class="num">B</span><h3>Cowork</h3><p>作業する相手。ページやファイルまで作ってくれます</p></article>
            </div>
            <p>ポータルは「作ってもらう仕事」なので、<strong>Cowork</strong> を使います。ブラウザのチャット画面ではありません。</p>
          `
      },
      {
        id: "image",
        title: "完成のイメージ",
        body: `
            <p class="kicker">完成形</p>
            <h1>1ページに、よく見る情報をまとめる</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>お知らせ</h3><p>日付つきで、新しいものが上</p></article>
              <article class="op"><span class="num">2</span><h3>今月の予定</h3><p>会議・休業・提出期限など</p></article>
              <article class="op"><span class="num">3</span><h3>よく使うリンク</h3><p>勤怠・メール・社内フォルダなど</p></article>
              <article class="op"><span class="num">4</span><h3>部署の連絡先</h3><p>名前・内線・メール</p></article>
            </div>
            <div class="callout">社名は「株式会社 宮田財務」。色は落ち着いた緑か青。パソコンでもスマホでも見やすく、が目標です。</div>
          `
      },
      {
        id: "flow",
        title: "今日の流れ",
        body: `
            <p class="kicker">4ステップ</p>
            <h1>開く → 頼む → 確かめる → 渡す</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>開く</h3><p>パソコンの Claude アプリで Cowork を開く</p></article>
              <article class="op"><span class="num">2</span><h3>頼む</h3><p>下の見本文を貼って送る</p></article>
              <article class="op"><span class="num">3</span><h3>確かめる</h3><p>出てきたページを、自分の目で見る</p></article>
              <article class="op"><span class="num">4</span><h3>渡す</h3><p>リンクをお気に入りに保存し、社員に共有する</p></article>
            </div>
            <p>直し方（お知らせの追加・番号の変更）は、次の講座 <a href="#/course/portalfix" data-link>直し方編</a> です。</p>
          `
      },
      {
        id: "open",
        title: "Cowork を開く",
        body: `
            <p class="kicker">STEP 1</p>
            <h1>パソコンの Claude アプリを使う</h1>
            <ol>
              <li>パソコンで <strong>Claude のアプリ</strong>を開く（ブラウザの claude.ai ではなく、デスクトップアプリ）</li>
              <li>左のメニューから <strong>Cowork</strong> を選ぶ</li>
              <li>新しいタスク（会話）を始める</li>
            </ol>
            <div class="callout">スマホだけでは、この講座の作業はできません。Cowork はパソコンのアプリ側です。</div>
          `
      },
      {
        id: "ask",
        title: "見本文を貼る",
        practice: true,
        body: `
            <p class="kicker">STEP 2　練習</p>
            <h1>この文をコピーして、Cowork に貼る</h1>
            <p>まずはこのまま送ります。社名やリンクは、あとから直せます。</p>
            ${box(`当社の社内ポータルを1ページ作ってください。

載せたいもの
・お知らせ（3件まで。日付つき）
・今月の予定
・よく使うリンク（勤怠・メール・社内フォルダなど）
・部署の連絡先（名前・内線・メール）

見た目
・パソコンでもスマホでも見やすく
・落ち着いた色（緑か青）
・社名は「株式会社 宮田財務」

できたら、社員が開けるリンクをください。`)}
            <div class="callout">長い文でも大丈夫です。一度に全部書いて送ってください。</div>
          `
      },
      {
        id: "tips",
        title: "誰が・何を・どんな感じで",
        body: `
            <p class="kicker">伝え方</p>
            <h1>お願い文に入れると、一発で近づく3つ</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>誰が使うか</h3><p>例：全社員が毎朝開く</p></article>
              <article class="op"><span class="num">2</span><h3>何を載せるか</h3><p>例：お知らせ、予定、リンク、連絡先</p></article>
              <article class="op"><span class="num">3</span><h3>どんな感じか</h3><p>例：落ち着いた緑、文字は大きめ</p></article>
            </div>
            <p>見本文にすでに入っています。自分用に直すときは、この3つが残っているかを見てください。</p>
          `
      },
      {
        id: "answer",
        title: "質問に答える",
        body: `
            <p class="kicker">STEP 3</p>
            <h1>聞かれたら答える。分からなければ「おまかせ」</h1>
            <p>Cowork が色や項目を聞いてきたら、短く答えて構いません。</p>
            <div class="ops">
              <article class="op"><span class="num">A</span><h3>分かるとき</h3><p>「お知らせは3件」「内線は3桁」など、知っている範囲で答える</p></article>
              <article class="op"><span class="num">B</span><h3>分からないとき</h3><p>「おまかせで進めて」と書く。仮の内容で作ってくれます</p></article>
            </div>
            <p>仮の電話番号や予定でも、あとから <a href="#/course/portalfix" data-link>直し方編</a> で差し替えできます。</p>
          `
      },
      {
        id: "share",
        title: "確認してから渡す",
        body: `
            <p class="kicker">STEP 4</p>
            <h1>自分で見てから、リンクを渡す</h1>
            <table>
              <thead><tr><th>見ること</th><th>OKの目安</th></tr></thead>
              <tbody>
                <tr><td>社名</td><td>株式会社 宮田財務 と出ている</td></tr>
                <tr><td>お知らせ</td><td>日付があり、新しいものが上</td></tr>
                <tr><td>リンク</td><td>押して、行きたい場所に着く</td></tr>
                <tr><td>スマホ</td><td>文字が小さすぎない</td></tr>
              </tbody>
            </table>
            <ol>
              <li>ページをお気に入り（ブックマーク）に保存する</li>
              <li>リンクをコピーして、社員に渡す（メールやチャット）</li>
            </ol>
            <div class="callout">リンクは、あとから中身を直しても変わりません。毎回送り直す必要はありません。</div>
          `
      },
      {
        id: "trouble",
        title: "うまくいかないとき",
        body: `
            <p class="kicker">困ったとき</p>
            <h1>よくある止まり方と、次の一手</h1>
            <table>
              <thead><tr><th>こんなとき</th><th>こうする</th></tr></thead>
              <tbody>
                <tr><td>Cowork が見当たらない</td><td>ブラウザではなく、パソコンの Claude アプリを開く</td></tr>
                <tr><td>ページができない</td><td>見本文をもう一度、そのまま貼って送る</td></tr>
                <tr><td>色や配置が違う</td><td>「もっと落ち着いた緑に」「文字を大きく」と具体的に頼む</td></tr>
                <tr><td>リンクが開けない</td><td>共有（シェア）になっているか確認する</td></tr>
                <tr><td>スマホで見づらい</td><td>「スマホでも読みやすくして」と頼む</td></tr>
              </tbody>
            </table>
          `
      },
      {
        id: "safety",
        title: "3つの約束",
        body: `
            <p class="kicker">注意</p>
            <h1>作るときの3つの約束</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>載せる前に見る</h3><p>日付・番号・名前は、自分の目で確認してから共有する</p></article>
              <article class="op"><span class="num">2</span><h3>すぐ届く</h3><p>リンクを渡した相手にも、同じ内容がすぐに見えます</p></article>
              <article class="op"><span class="num">3</span><h3>載せない</h3><p>パスワード、社員の住所・携帯番号、給与などの個人情報</p></article>
            </div>
          `
      },
      {
        id: "practice",
        title: "20分で作ってみる",
        practice: true,
        body: `
            <p class="kicker">演習</p>
            <h1>実際に1ページ作ってみましょう</h1>
            <ol>
              <li>Cowork を開く</li>
              <li>前のページの見本文を貼って送る</li>
              <li>出てきたページを、パソコンとスマホで見る</li>
              <li>リンクをお気に入りに保存する</li>
            </ol>
            <p>できたリンクは、次の <a href="#/course/portalfix" data-link>直し方編</a> で使います。閉じずに残してください。</p>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">覚えておくこと</p>
            <h1>覚えておくのは、この3つだけ</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>Cowork に頼む</h3><p>チャットではなく、パソコンアプリの Cowork</p></article>
              <article class="op"><span class="num">2</span><h3>見本文を貼る</h3><p>誰が・何を・どんな感じで、が書いてあれば十分</p></article>
              <article class="op"><span class="num">3</span><h3>見てから渡す</h3><p>リンクは変わらない。中身の最終チェックは人の仕事</p></article>
            </div>
            <p><a href="materials/portal-make.pdf" download>スライドPDF（作り方編）</a></p>
            <p><a class="btn-orange" href="#/course/portalfix" data-link>直し方編へ</a>
            <a class="btn-dark" href="#/" data-link>ホームへ</a></p>
          `
      }
    ]
  };

  CLASSROOM.courses.portalfix = {
    id: "portalfix",
    title: "社内ポータルを直そう（直し方編）",
    subtitle: "お知らせの追加も、番号の変更も、頼むだけ",
    duration: "約25分",
    audience: "作り方編を終えた人／ポータルの更新担当",
    lessons: [
      {
        id: "prep",
        title: "手元に用意するもの",
        body: `
            <p class="kicker">はじめる前に</p>
            <h1>この2つを用意しましょう</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>ポータルのリンク</h3><p>前回お気に入りに保存したページ。開けるか確認</p></article>
              <article class="op"><span class="num">2</span><h3>作ったときの会話</h3><p>Cowork の履歴から、ポータルを作った会話を開く</p></article>
            </div>
            <p>まだ作っていない方は、<a href="#/course/portalmake" data-link>作り方編</a>の見本文で先に1つ作りましょう。</p>
          `
      },
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">GOAL</p>
            <h1>帰るときに、この3つができるように</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>足す</h3><p>新しいお知らせや予定、リンクを追加する</p></article>
              <article class="op"><span class="num">2</span><h3>変える</h3><p>電話番号や日付、色や文字の大きさを変える</p></article>
              <article class="op"><span class="num">3</span><h3>消す・戻す</h3><p>古い情報を消し、失敗したら元に戻す</p></article>
            </div>
          `
      },
      {
        id: "what",
        title: "直し方の結論",
        body: `
            <p class="kicker">結論</p>
            <h1>中身の直し方は、「話しかけるだけ」</h1>
            <p>ページの中を自分でいじる必要はありません。コードも、デザインソフトも使いません。</p>
            <p>作ったときの会話の続きに、「〇〇を△△に変えて」と書くだけです。</p>
          `
      },
      {
        id: "flow",
        title: "同じ会話の続きに書く",
        body: `
            <p class="kicker">編集のしかた</p>
            <h1>3手で直ります</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>会話に戻る</h3><p>ポータルを作った会話の画面を開く</p></article>
              <article class="op"><span class="num">2</span><h3>頼む</h3><p>「〇〇を△△に変えて」と入力して送る</p></article>
              <article class="op"><span class="num">3</span><h3>開き直す</h3><p>ページを開き直すと、直った状態になる</p></article>
            </div>
            <div class="callout">リンク（アドレス）は変わりません。社員に送り直す必要はありません。</div>
          `
      },
      {
        id: "promptwork",
        title: "よくある直し方",
        practice: true,
        body: `
            <p class="kicker">お願いの例文　練習</p>
            <h1>やりたいことと、こう伝える</h1>
            <p>近いものをコピーして、数字や日付だけ自分用に直してください。</p>
            ${box(`お知らせに『10/20 棚卸しのため午後休業』を一番上に追加して`)}
            ${box(`総務の内線を101から105に変えて`)}
            ${box(`終わった9月の予定は消して`)}
            ${box(`よく使うリンクに『経費精算』を追加。アドレスは［URL］`)}
            ${box(`全体の文字をもう一回り大きく
色を落ち着いた青系に`)}
            ${box(`さっきの変更は取り消して、ひとつ前に戻して`)}
          `
      },
      {
        id: "tips",
        title: "伝え方のコツ",
        body: `
            <p class="kicker">コツ</p>
            <h1>「どこを・どう変えるか」をはっきり</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>どこを</h3><p>「お知らせの一番上」「総務の連絡先」など場所を言う</p></article>
              <article class="op"><span class="num">2</span><h3>前 → 後</h3><p>「101から105に」のように、変える前と後を書く</p></article>
              <article class="op"><span class="num">3</span><h3>少しずつ</h3><p>1回に頼むのは1〜3個まで。終わったら次を頼む</p></article>
            </div>
            <p>あいまいな「いい感じに」より、<strong>具体的な一言</strong>のほうが一発で直ります。</p>
          `
      },
      {
        id: "later",
        title: "別の日に直すとき",
        body: `
            <p class="kicker">後日</p>
            <h1>新しいタスクでも直せる。リンクを添えると確実</h1>
            <div class="ops">
              <article class="op"><span class="num">A</span><h3>前の会話が見つかる</h3><p>履歴から、ポータルを作った会話を開いて続きに書く</p></article>
              <article class="op"><span class="num">B</span><h3>見つからない</h3><p>新しいタスクで、ポータルのリンクを貼ってお願いする</p></article>
            </div>
            ${box(`このページのお知らせを更新してください。[ポータルのリンク]
10月の健康診断のお知らせを消して、11月の年末調整の案内を追加`)}
          `
      },
      {
        id: "trouble",
        title: "うまく直らないとき",
        body: `
            <p class="kicker">困ったとき</p>
            <h1>うまく直らないときの対処法</h1>
            <table>
              <thead><tr><th>こんなとき</th><th>こうする</th></tr></thead>
              <tbody>
                <tr><td>直したのに変わらない</td><td>ページを再読み込み（更新）する</td></tr>
                <tr><td>違う場所が変わった</td><td>「元に戻して」→ 場所を具体的に言い直す</td></tr>
                <tr><td>思った見た目と違う</td><td>「もっと〇〇に」と具体的に伝え直す</td></tr>
                <tr><td>どのページか聞き返された</td><td>ポータルのリンクを貼ってお願いする</td></tr>
                <tr><td>社員に古い内容が見える</td><td>社員側でも再読み込みしてもらう</td></tr>
              </tbody>
            </table>
          `
      },
      {
        id: "safety",
        title: "直すときの3つの約束",
        body: `
            <p class="kicker">注意</p>
            <h1>直すときの3つの約束</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>直したら見る</h3><p>変更のたびに、ページを開いて日付・番号・名前を確認</p></article>
              <article class="op"><span class="num">2</span><h3>すぐ届く</h3><p>直した内容は、共有している社員にもすぐ見える</p></article>
              <article class="op"><span class="num">3</span><h3>載せない</h3><p>パスワード、社員の住所・携帯番号、給与などの個人情報</p></article>
            </div>
          `
      },
      {
        id: "practice",
        title: "20分で直してみる",
        practice: true,
        body: `
            <p class="kicker">演習</p>
            <h1>実際に直してみましょう</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>足す</h3><p>お知らせを1件、一番上に追加する</p></article>
              <article class="op"><span class="num">2</span><h3>変える</h3><p>連絡先の内線番号を1つ変える</p></article>
              <article class="op"><span class="num">3</span><h3>見た目</h3><p>色か文字の大きさを好みに変える</p></article>
              <article class="op"><span class="num">4</span><h3>戻す</h3><p>3の変更を「元に戻して」と頼む</p></article>
            </div>
            <p>失敗しても「元に戻して」で大丈夫です。気軽に試しましょう。</p>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">覚えておくこと</p>
            <h1>覚えておくのは、この3つだけ</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>続きに書く</h3><p>作った会話の続き（なければリンクを貼る）</p></article>
              <article class="op"><span class="num">2</span><h3>具体的に</h3><p>「どこを・どう変えるか」を伝える</p></article>
              <article class="op"><span class="num">3</span><h3>再読み込み</h3><p>直したらページを開き直して、自分の目で確認する</p></article>
            </div>
            <p><a href="materials/portal-fix.pdf" download>スライドPDF（直し方編）</a></p>
            <p><a class="btn-orange" href="#/course/portalmake" data-link>作り方編へ戻る</a>
            <a class="btn-dark" href="#/" data-link>ホームへ</a></p>
          `
      }
    ]
  };

  Object.assign(CLASSROOM.quizzes, {
    portalmake: [
      {
        q: "社内ポータルを作るとき、使うのはどれですか？",
        choices: ["ブラウザのチャットだけ", "パソコンの Claude アプリの Cowork", "PowerShell"],
        a: 1,
        explain: "ページを作る作業は Cowork です。デスクトップアプリの左メニューから開きます。"
      },
      {
        q: "お願い文に入れると近づく3つは？",
        choices: ["誰が使うか・何を載せるか・どんな感じか", "パスワード・口座番号・住所", "英語だけ・絵文字だけ・短さだけ"],
        a: 0,
        explain: "利用者・中身・見た目が書いてあれば十分です。"
      },
      {
        q: "社員にリンクを渡す前に、必ずすることは？",
        choices: ["コードを全部読む", "自分の目で社名・日付・リンクを確認する", "毎日新しいリンクを作り直す"],
        a: 1,
        explain: "最終チェックは人の仕事です。リンクは直しても変わりません。"
      },
      {
        q: "ポータルに載せてはいけないものは？",
        choices: ["今月の予定", "よく使うリンク", "パスワードや給与などの個人情報"],
        a: 2,
        explain: "秘密の数字と個人情報は載せません。"
      }
    ],
    portalfix: [
      {
        q: "ポータルの中身を直す基本は？",
        choices: ["ページの中を自分でいじる", "作った会話の続きに「〇〇を△△に変えて」と書く", "毎回新しいリンクを作る"],
        a: 1,
        explain: "話しかけるだけです。アドレスは変わりません。"
      },
      {
        q: "直したのに画面が変わらないときは？",
        choices: ["パソコンを捨てる", "ページを再読み込み（更新）する", "パスワードを貼る"],
        a: 1,
        explain: "自分も社員も、再読み込みすると新しい内容が見えます。"
      },
      {
        q: "うまく一発で直す伝え方は？",
        choices: ["「いい感じに」とだけ書く", "どこを・変える前と後を具体的に書く", "一度に20個まとめて頼む"],
        a: 1,
        explain: "場所と、前→後が書いてある一言が強いです。1回は1〜3個まで。"
      },
      {
        q: "前の会話が見つからないときは？",
        choices: ["新しいタスクにポータルのリンクを貼ってお願いする", "ポータルを削除する", "チャットにカード番号を書く"],
        a: 0,
        explain: "リンクを添えれば、新しい会話でも直せます。"
      }
    ]
  });
})();
