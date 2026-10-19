(() => {
  const talk = CLASSROOM.talk;

  CLASSROOM.courses.aipick = {
    id: "aipick",
    title: "ChatGPT・Gemini・Claudeの使い分け",
    subtitle: "この用途だからこのAI、を自分の早見表にする",
    duration: "約20分",
    audience: "名前は知っているが、どれを使うか決まっていない人",
    lessons: [
      {
        id: "goal",
        title: "用途で選ぶ",
        was: ["aipick/goal", "aipick/caution"],
        body: `
            <p class="kicker">GOAL　1／6</p>
            <h1>名前ではなく、用途で選ぶ</h1>
            <p>ブラウザに ChatGPT、Gemini、Claude のタブが並んでいます。どれを開くか、名前だけで決めがちです。今日は早見表を作り、自分に合う1つに絞ります。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>知る</h3><p>よくある使い方19項目の表を作らせる</p></article>
              <article class="op"><span class="num">2</span><h3>近づける</h3><p>自分の仕事と環境を書いて、1つに絞る</p></article>
            </div>
            <div class="callout warn">表にも嘘が混じります（講義で出た例：作れる動画が △、できる音声会話が ×）。画像・動画・音声は公式で確認し、表はときどき作り直します。</div>
          `
      },
      {
        id: "read",
        title: "講義のまとめ（参考）",
        was: ["aipick/read"],
        body: `
            <p class="kicker">参考　2／6</p>
            <h1>文章まわりは、3つとも近い</h1>
            <p>講義で出たまとめです。正解ではなく、見比べ用です。</p>
            <ul>
              <li><strong>ChatGPT</strong> … 万能型。迷ったらまずこれ</li>
              <li><strong>Gemini</strong> … 検索に強い。Gmail・ドキュメントと直結</li>
              <li><strong>Claude</strong> … 日本語の自然さ、長い文章。Claude Code で自動化</li>
            </ul>
            <p>文章まわりは、3つともほぼ ◎ か ○ でした。</p>
          `
      },
      {
        id: "news",
        title: "最近のAIニュース（参考）",
        body: `
            <p class="kicker">参考　3／6</p>
            <h1>9月下旬〜10月中旬の主なAIニュース</h1>
            <div class="callout warn">性能や価格の数字は、多くが各社の自己申告（会社が自分で言っている数字）です。目安として読み、使う前に公式の案内で確かめてください。</div>
            <h2>新しいモデル</h2>
            <p>モデルは、AIの頭脳にあたる部分です。</p>
            <ul>
              <li><strong>Anthropic（Claude）</strong> … Opus 5.5（9/22）、Sonnet 5.5（9/28）、Haiku 5.5（10/7）を続けて公開しました。Opus 5.5は最上位モデル並みの性能を、Opus 5より約40%安く使えるとされています。Haiku 5.5は前の世代より約75%安くなりました。</li>
              <li><strong>OpenAI（ChatGPT）</strong> … GPT-6.1 Sol（9/29）を公開しました。10/7からは、回答の中に図やボタン、入力フォームを表示する「Intelligent UI」が全プランで使えるようになりました。10/9には速度を重視した「Sol Ultrafast」も出ています。</li>
              <li><strong>Google</strong> … Gemini 3.8 Flash（9月）とGemini 4 Argon（10/14）を発表しました。Argonは複雑な仕事向けで、金融や法務でも高い性能をうたっています。</li>
              <li><strong>その他</strong> … xAIのGrok 4.7、Mistral Large 4などが出ました。性能の高いオープンモデル（中身が公開されていて、だれでも使えるモデル）の発表も相次いでいます。</li>
            </ul>
            <h2>仕事で使う機能</h2>
            <ul>
              <li><strong>Claude</strong> … GoogleドキュメントやスプレッドシートでClaudeを使える機能（有料プラン向けのベータ版＝試しに出している版）が始まりました。データからグラフを作る「Dashboards」と、資料を動画にする「Motion」も公開されています。</li>
              <li><strong>Google</strong> … 自分専用のGmailとDriveを持って動く、職場向けのAIエージェント（頼んだ作業を自分で進めるAI）を発表しました。</li>
              <li><strong>Microsoft Copilot</strong> … 大きく作り直され、Office文書を直接編集する機能や、常に動き続けるエージェント「Autopilot」が発表されました。</li>
            </ul>
            <h2>仕事への影響</h2>
            <ul>
              <li><strong>高性能なAIが安く速くなった</strong> … 要約や分類、問い合わせへの最初の返答など、量の多い作業にかかる費用が下がっています。</li>
              <li><strong>古いモデルが使えなくなる</strong> … OpenAIは2026年10月23日、12月11日、2027年1月14日の順に、GPT-4o系などの古いモデルを止めます。API（アプリにAIを組みこむためのしくみ）を組み込んだアプリを運用している場合は、どのモデルを使っているか確認が必要です。</li>
              <li><strong>AIが「作業を代わりにする」方向へ進んでいる</strong> … 文書やメールを直接扱うエージェント型の機能が、各社で増えています。</li>
            </ul>
          `
      },
      {
        id: "w1",
        title: "ワーク1：一般の表",
        practice: true,
        was: ["aipick/w1"],
        body: `
            <p class="kicker">知る　4／6　練習</p>
            <h1>今日の日付を入れて貼る</h1>
            <ol>
              <li>使っているAIの入力欄に下を貼る</li>
              <li>〔　〕の日付を今日に変える（AIには知識のカットオフがあるため）</li>
              <li>送る。方向性が合っていればOK</li>
            </ol>
            ${talk([
              { me: `今日の日付は〔2026年9月29日〕です。Web検索して、最新の公式案内に基づいて答えてください。
考えずにすぐ答えず、根拠を確認してから表にしてください。

ChatGPT、Gemini、Claude のよくある使い方を19項目、次の列の表にしてください。
・やりたいこと
・まず試すなら（1つ）
・ChatGPT／Gemini／Claude の評価（◎○△×）
・確認ポイント（無料枠の回数制限など）

根拠が見つからないマスは「要確認」と書いてください。推測で埋めないでください。
万人の一番、最強、は書かないでください。` }
            ], "")}
          `
      },
      {
        id: "w2",
        title: "ワーク2：自分用の表",
        practice: true,
        was: ["aipick/w2"],
        body: `
            <p class="kicker">近づける　5／6　練習</p>
            <h1>状況を具体的に書いて、1つに絞る</h1>
            <ol>
              <li>ワーク1の続きの会話に下を貼る</li>
              <li>職業・環境・プランと、やりたいことを具体的に書く（「SNSをやりたい」ではなく「リール動画を作りたい」）</li>
            </ol>
            ${talk([
              { me: `続きです。私の状況に合わせて、自分専用の早見表にしてください。
職業：〔　〕
使える環境：〔ブラウザだけ／PCのデスクトップアプリも使える など〕
プラン：〔無料／有料〕
やりたいこと（具体的に）：
・〔例：Instagramのリール動画を作りたい〕
・〔例：会議メモを同じ見出しの議事録にしたい〕

各項目について、最初に試すAI、最初にやらせる作業、比較用の別のAIを書いてください。
最後に、あえて1つに絞るならどれか、理由を短く。
万人の最強は書かないでください。根拠が無いことは要確認。` }
            ], "")}
          `
      },
      {
        id: "summary",
        title: "まとめ",
        was: ["aipick/summary"],
        body: `
            <p class="kicker">まとめ　6／6</p>
            <h1>合う1つを、自分の言葉で</h1>
            <ol>
              <li>用途で選ぶ。日付を入れて検索させる</li>
              <li>表も疑う。根拠が無いマスは要確認</li>
              <li>状況を具体的に書いて1つに絞る。ときどき作り直す</li>
            </ol>
            <p><a class="btn-orange" href="#/course/aipick" data-link>ワーク1からやり直す</a>
            <a class="btn-dark" href="#/course/claudebase" data-link>Claudeの基本設定へ</a></p>
          `
      }
    ]
  };
})();
