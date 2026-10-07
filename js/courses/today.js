(() => {
  const SAMPLE = "https://claude.ai/artifact/2z9qPrxtUiCPgjVbA7Uuiu";
  const HP = "https://mmiho1505-code.github.io/portfolio/";
  const sampleLink = (label) =>
    `<a href="${SAMPLE}" target="_blank" rel="noopener">${label}</a>`;
  const hpLink = (label) =>
    `<a href="${HP}" target="_blank" rel="noopener">${label}</a>`;

  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.today = {
    id: "today",
    title: "今日の講義",
    subtitle: "11枚・2時間。同じチャットで社内ポータルを作って直す",
    duration: "約120分",
    audience: "チャットで作業を任せるのが初めての人からポータル担当まで",
    lessons: [
      {
        id: "goal",
        title: "今日の地図",
        was: ["today/goal"],
        body: `
            <p class="kicker">GOAL　0〜10分　1／11</p>
            <h1>左に教室、右に Claude。2時間で11枚</h1>
            <p>朝、社員から「お知らせはどこ？」と聞かれ、メールを探し直しています。今日は、その答えを1か所にまとめる社内ポータルを、同じチャットで作って直します。</p>
            <div class="callout">今日の成功は、ポータルを1枚作って、お知らせを1件足せること。申請や給与は余ったらで構いません。</div>
            <ol>
              <li>0〜10分　今日の地図。ログイン確認（必須）</li>
              <li>10〜25分　チャットで返事を2回もらう（必須）</li>
              <li>25〜45分　同じチャットで作業を任せる（必須）</li>
              <li>Cursor に Claude Code（できれば）</li>
              <li>Gmail／カレンダー／ドライブ（できれば）</li>
              <li>45〜65分　ポータルを1ページ作る。休憩（必須）</li>
              <li>70〜90分　追加・移動を2つ直す（必須）</li>
              <li>90〜95分　勤怠の打刻（できれば）</li>
              <li>95〜110分　申請・給与・予約（余ったら）</li>
              <li>110〜115分　デザインは最後（必須）</li>
              <li>115〜120分　まとめ（必須）</li>
            </ol>
            <div class="ops">
              <article class="op"><span class="num">P</span><h3>パソコン</h3><p>スマホだけだと、できたページの確認がしにくい</p></article>
              <article class="op"><span class="num">並</span><h3>画面は2つ</h3><p>左にこの教室、右に Claude</p></article>
              <article class="op"><span class="num">@</span><h3>会社のメール</h3><p>個人の Gmail は使わない</p></article>
            </div>
            <p>${sampleLink("社内ポータルの見本")}　${hpLink("会社のホームページの例")}</p>
          `
      },
      {
        id: "chat",
        title: "チャット",
        practice: true,
        was: ["today/chat"],
        body: `
            <p class="kicker">入口　10〜25分　2／11</p>
            <h1>日本語で送って、返事を見る</h1>
            <ol>
              <li>ブラウザで <strong>claude.ai</strong> を開く。アカウントが無ければ <a href="#/course/claudebase" data-link>アカウントと有料プラン</a></li>
              <li>「新しいチャット」</li>
              <li>下をコピーして貼り、送る</li>
            </ol>
            ${box(`小学生にも分かる言葉で、請求書と見積書の違いを5行で教えてください。専門用語が出たら、すぐ言い換えてください。`)}
            <p>返事が来たら、<strong>同じチャットの続き</strong>で下から1つ送ります。</p>
            ${box(`もっと短く、3行にしてください。最後に、事務の人が間違えやすい点を1つだけ足してください。`)}
            ${box(`当社の社内ポータルに載せるとしたら、お知らせ・今月の予定・よく使うリンク・部署の連絡先の4つのうち、毎朝いちばん最初に見るべきものはどれですか。理由を2行で。`)}
            ${box(`「おまかせで進めて」と頼むのは、どんなときに向きますか。向く例と、向かない例を1つずつ、やさしい言葉で。`)}
            <div class="callout warn">パスワード・口座・マイナンバーは書きません。送る・消す・公開の最終確認は人がします。</div>
          `
      },
      {
        id: "install",
        title: "同じチャットで作業",
        was: ["today/install"],
        body: `
            <p class="kicker">設定　25〜45分　3／11</p>
            <h1>「作って」も同じチャットに頼む</h1>
            <p>以前の「Cowork」は、今このチャットに入っています。別の場所は探しません。</p>
            <ol>
              <li>パソコンで <a href="https://claude.ai" target="_blank" rel="noopener">claude.ai</a> を開く（アプリは <a href="https://claude.ai/download" target="_blank" rel="noopener">claude.ai/download</a>）</li>
              <li>今までと<strong>同じメール</strong>でログイン</li>
              <li><strong>新しいチャット</strong>を1つ始める。今日はこの会話を最後まで使う</li>
              <li>入力欄の近くで、モデルは <strong>Opus</strong>、Effort は <strong>高め</strong>。見つからなければ探さない</li>
            </ol>
            <p>ページを作る作業は、多くの場合 Pro などの有料プランが必要です。Opus と高めはトークンを多めに使うので、直すときは同じ会話の続きで、1回に1〜3個まで。</p>
            <div class="qa">
              <p class="qa-q">「許可しますか」と出た</p>
              <p>今日使うものだけ許可する。</p>
            </div>
            <div class="qa">
              <p class="qa-q">終わったか分からない</p>
              <p>できた画面かリンクが出るまで待つ。2〜10分かかることがある。</p>
            </div>
            <div class="qa">
              <p class="qa-q">貼り付けできない</p>
              <p>入力欄をクリックしてから Ctrl＋V（Mac は ⌘＋V）。</p>
            </div>
            <div class="qa">
              <p class="qa-q">上限・制限／会社のネットで止まる／アプリを入れられない</p>
              <p>無理に突破しない。次へ進んでよい。</p>
            </div>
            <div class="qa">
              <p class="qa-q">英語の画面</p>
              <p>「今の画面の言葉を、そのまま書いて案内して」と送る。</p>
            </div>
          `
      },
      {
        id: "cursorcode",
        title: "Cursor に Claude Code",
        practice: true,
        was: ["today/cursorcode"],
        body: `
            <p class="kicker">設定　できれば　15分　4／11　練習</p>
            <h1>黒い画面で claude。最初の1回だけ</h1>
            <p>Cursor の中で、日本語のお願いからファイルを作る道具です。ポータルだけ進む人は飛ばしてよいです。有料プラン（Pro / Max）が必要です。</p>
            <h2>入れる（公式の1行。Node は不要）</h2>
            <p>ターミナルを一度クリックしてから貼ります。行頭が <code>%</code> なら Mac、<code>PS</code> なら Windows。</p>
            <p><strong>Mac用</strong></p>
            ${box(`curl -fsSL https://claude.ai/install.sh | bash`)}
            <p><strong>Windows用</strong>（Mac には貼らない）</p>
            ${box(`irm https://claude.ai/install.ps1 | iex`)}
            <p>Node.js で入れる人は、<a href="https://nodejs.org" target="_blank" rel="noopener">nodejs.org</a> の LTS を入れてから下を順に。Mac で <code>permission denied</code> なら <code>sudo</code> 付き（パスワードは画面に出ません）。</p>
            ${box(`node -v`)}
            ${box(`npm install -g @anthropic-ai/claude-code`)}
            ${box(`sudo npm install -g @anthropic-ai/claude-code`)}
            <p>拡張機能は「Claude Code」（Anthropic）。<a href="https://code.claude.com/docs/en/vs-code" target="_blank" rel="noopener">Install for Cursor</a>／<a href="https://cursor.com" target="_blank" rel="noopener">cursor.com</a></p>
            <h2>フォルダを開いて起動</h2>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>フォルダ</h3><p>「ファイル」→「フォルダーを開く」で作業用フォルダ</p></article>
              <article class="op"><span class="num">2</span><h3>ターミナル</h3><p>入れた直後は「新しいターミナル」を開き直し、クリックして下を貼る</p></article>
              <article class="op"><span class="num">3</span><h3>信頼の確認</h3><p>エラーではない。↓ で <strong>Yes, I trust this folder</strong> → Enter</p></article>
              <article class="op"><span class="num">4</span><h3>ログイン</h3><p>初回はブラウザで Claude のアカウントに入る</p></article>
            </div>
            ${box(`claude`)}
            <p>終了は <code>/exit</code>。ファイルを変える前の確認は、内容を見てから承認します。</p>
            ${box(`このフォルダに、宮田財務の紹介用の1ページのWebサイトを作って。
index.html 1つで、スマホでも見やすくして。`)}
            <p>止まったら、画面の文字をそのまま残して相談します（<a href="https://code.claude.com/docs" target="_blank" rel="noopener">公式案内</a>）。詳しくは <a href="#/course/code" data-link>Claude Code 講座</a>。</p>
          `
      },
      {
        id: "gmail",
        title: "メール・予定・資料をつなぐ",
        practice: true,
        was: ["today/gmail"],
        body: `
            <p class="kicker">設定　できれば　5〜10分　5／11　練習</p>
            <h1>お願い文を貼って、Google の画面で許可する</h1>
            <p>つながると、会社のメール・予定・資料を毎回貼らなくてよくなります。ポータルには不要です。</p>
            <ol>
              <li>下から1つ貼って送る</li>
              <li>Claude の案内どおりに押す</li>
              <li>Google の画面で<strong>会社のメール</strong>を選び、パスワードはそこに自分で入れる</li>
            </ol>
            <p>① Gmail</p>
            ${box(`初めてです。GmailとClaudeをつなぎたいです。

今の画面に合わせて、押す場所を日本語で1つずつ教えてください。私が押したら、次を教えてください。

・メニューの名前が英語でも、日本語で言い換えてください
・パスワードは私が自分で入れます。入力欄には書かないでください
・メールの送信はしないでください
・会社のGoogleアカウントを使います`)}
            <p>② カレンダー</p>
            ${box(`初めてです。GoogleカレンダーとClaudeをつなぎたいです。

今の画面に合わせて、押す場所を日本語で1つずつ教えてください。私が押したら、次を教えてください。

・メニューの名前が英語でも、日本語で言い換えてください
・パスワードは私が自分で入れます。入力欄には書かないでください
・予定の削除・変更はしないでください。見るだけにしてください
・会社のGoogleアカウントを使います`)}
            <p>③ ドライブ</p>
            ${box(`初めてです。GoogleドライブとClaudeをつなぎたいです。

今の画面に合わせて、押す場所を日本語で1つずつ教えてください。私が押したら、次を教えてください。

・メニューの名前が英語でも、日本語で言い換えてください
・パスワードは私が自分で入れます。入力欄には書かないでください
・ファイルの削除・共有の変更はしないでください。探すだけにしてください
・会社のGoogleアカウントを使います`)}
            <p>つながらなければ飛ばして「ポータルを作る」へ。つながった人だけ試します。</p>
            ${box(`今日の未読メールを、大事そうな順に3行でまとめてください。返信が要りそうなものは下書きまで。送信はしないでください。`)}
            ${box(`来週の予定を、日付順に短く教えてください。予定の追加・削除はしないでください。`)}
            ${box(`ドライブから、最近使った資料を3つ探して、名前だけ教えてください。ファイルは消さないでください。`)}
          `
      },
      {
        id: "one",
        title: "ポータルを作る",
        practice: true,
        was: ["today/one"],
        body: `
            <p class="kicker">作る　45〜65分　6／11　練習</p>
            <h1>同じチャットに、土台の1ページを頼む</h1>
            <p>下をコピーして、今のチャットに貼ります。聞かれたら短く答えるか「おまかせで進めて」。</p>
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
            <p>できるまで2〜10分。画面は閉じずに待ちます。</p>
            <h2>できたら確認して、リンクをお気に入りへ</h2>
            <ol>
              <li>社名が「株式会社 宮田財務」か</li>
              <li>お知らせに日付があるか</li>
              <li>リンクを押して、行きたい場所に着くか</li>
              <li>スマホでも文字が読めるか</li>
            </ol>
            <p>本物のお知らせや名簿は、ページができてから渡します。確認できたら5分休憩。会話は閉じません。</p>
          `
      },
      {
        id: "promptwork",
        title: "直す",
        practice: true,
        was: ["today/promptwork"],
        body: `
            <p class="kicker">直す　70〜90分　7／11　練習</p>
            <h1>ページの中は触らない。「何を・どこへ」と書く</h1>
            <p>作った会話の続きに送り、ページを再読み込みして確かめます。移動もドラッグしません。下から最低2つ。</p>
            ${box(`お知らせに『10/20 棚卸しのため午後休業』を一番上に追加して`)}
            ${box(`総務の内線を101から105に変えて`)}
            ${box(`終わった9月の予定は消して`)}
            ${box(`よく使うリンクの『勤怠』を一番上に移して`)}
            ${box(`『今月の予定』のブロックを、『お知らせ』のすぐ下に移して`)}
            ${box(`お知らせの2番目と3番目を入れ替えて`)}
            ${box(`さっきの変更は取り消して、ひとつ前に戻して`)}
            <p>会話が見つからないときは、新しいチャットにポータルのリンクを貼って頼みます。</p>
          `
      },
      {
        id: "two",
        title: "機能を足す：勤怠",
        practice: true,
        was: ["today/two"],
        body: `
            <p class="kicker">できれば　90〜95分　8／11</p>
            <h1>同じ会話に、打刻を足す</h1>
            <p>遅れていたら飛ばして、10枚目「デザインは最後に」へ。</p>
            ${box(`勤怠の打刻機能を追加してください。
・出勤・休憩開始・休憩終了・退勤のボタン
・社員はclaude.aiのアカウントで自動的に見分ける
・押し間違えたら直前の打刻を取り消せる
・自分の月ごとの勤務記録を見られる`)}
          `
      },
      {
        id: "three",
        title: "余ったら：申請・給与",
        practice: true,
        optional: true,
        was: ["today/three"],
        body: `
            <p class="kicker">余ったら　95〜110分　9／11</p>
            <h1>時間があれば、同じ会話に足す</h1>
            <p>無ければ10枚目「デザインは最後に」へ。上から順に1つずつ送ります。</p>
            <h2>管理画面と社員画面</h2>
            ${box(`管理者（私）だけが開ける「管理画面」と、社員用の画面を分けてください。
管理画面には、今日の出勤状況（誰が勤務中か）と、ポータルの内容を編集するボタンを置いてください。
社員には管理画面の存在も見えないようにしてください。`)}
            <h2>申請と承認</h2>
            ${box(`社員用の「申請・休暇」を追加して、管理画面で承認・却下できるようにしてください。
・打刻修正の申請（日付・出勤・退勤・休憩・理由）
・有給休暇の申請（全日・午前半休・午後半休）
・経費の申請（日付・区分・金額・内容）
有給は入社日から法律どおりに付与日数を計算し、残日数と年5日の取得義務を表示してください。
承認待ちの件数は管理画面のタブに表示してください。`)}
            <h2>給与計算（管理者だけ）</h2>
            ${box(`管理画面に給与計算を追加してください。私だけが見られるようにしてください。
・勤怠から総支給額まで計算（控除・手取りは不要）
・月給制と時給制の両方
・残業は法定どおり（1日8時間・週40時間超は25%増、月60時間超は50%増、深夜25%増、法定休日35%増）
・有給休暇分（時給の人）、欠勤控除（月給の人）、承認済みの経費を反映
・祝日を自動で入れるボタン
・CSVで保存`)}
            <h2>残業・確認漏れ・締め</h2>
            ${box(`管理画面に次を追加してください。
・残業アラート（36協定の月45時間・年360時間に近い人を表示）
・お知らせの確認状況（社員に「確認しました」ボタンを付け、誰が未確認か分かるように）
・出勤簿のCSV（社員ごと・日別）と、月次の締め（締めた月は変更不可、控えを保存、修正履歴を残す）
・社員名簿（本人が開く前に登録しておき、あとでアカウントと連携）`)}
            <h2>予約と規程</h2>
            ${box(`社員画面に次を追加してください。
・会議室・社用車の予約（空き状況を見て予約、時間が重なったら断る、自分の予約だけ取り消せる）
・規程・書式集（就業規則や申請書のリンクをカテゴリ別に）`)}
          `
      },
      {
        id: "eight",
        title: "デザインは最後に",
        practice: true,
        was: ["today/eight"],
        body: `
            <p class="kicker">見た目　110〜115分　10／11</p>
            <h1>機能を足し終わってから、タイル型にまとめる</h1>
            <p>先に雰囲気を決めます：<a href="https://jp.pinterest.com/search/pins/?q=%E7%A4%BE%E5%86%85%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB&rs=typed" target="_blank" rel="noopener">Pinterestで社内ポータル</a>、${sampleLink("社内ポータルの見本")}。</p>
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
            <p>勤怠を足していない人は「勤怠」の行を消して送ります。迷ったら下で比べます。</p>
            ${box(`トップのタイル案を3つ並べて見せてください。色と並びだけ変えて、機能は同じままにしてください。`)}
          `
      },
      {
        id: "summary",
        title: "まとめ",
        was: ["today/summary"],
        body: `
            <p class="kicker">覚えておくこと　115〜120分　11／11</p>
            <h1>明日も、今日作った会話を開く</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>同じ会話で作る</h3><p>Opus・Effort 高め。お願い文を貼る</p></article>
              <article class="op"><span class="num">2</span><h3>続きで直す</h3><p>「何を・どこへ」と書く。1回に1〜3個</p></article>
              <article class="op"><span class="num">3</span><h3>デザインは最後</h3><p>迷ったら「3案を並べて見せて」</p></article>
              <article class="op"><span class="num">4</span><h3>本物は後から</h3><p>お知らせ・名簿は、ページができてから渡す</p></article>
            </div>
            <h2>社員に渡す前に、一度聞く</h2>
            ${box(`使い始める前に、足りない点や注意点を教えてください。`)}
            <p>出てきた注意は自分の目で確かめます。リンクは社内だけ。パスワード・給与・携帯番号は載せません。</p>
            <p><a class="btn-orange" href="#/course/promptskill" data-link>チャット入門</a>
            <a class="btn-dark" href="#/course/code" data-link>Claude Code</a></p>
          `
      }
    ]
  };

})();
