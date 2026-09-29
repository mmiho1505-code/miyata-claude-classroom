(() => {
  const ITEMS = [
    {
      keys: ["powershell", "パワーシェル", "ps", "開かない", "コマンドプロンプト", "cmd", "黒い画面", "スタート"],
      answer:
        "PowerShell は、Windows の黒い画面の名前です。スタートから「PowerShell」と検索し、行頭が PS なら正解です。「コマンドプロンプト」は違います。Mac の人は使いません。Mac はターミナル（行頭が %）です。",
      href: "#/course/faq/ps",
      link: "PowerShellが開かない"
    },
    {
      keys: ["html", "css", "java", "javascript", "ジャバ", "HTML", "CSS", "JAVA", "骨組み"],
      answer:
        "HTMLは骨組み（何が載っているか）、CSSは見た目（色・大きさ）、JAVAはこの教室では動き（JavaScript）です。Javaは名前が似ている別の言語です。コードは書かなくてよく、日本語で頼めます。",
      href: "#/course/webwords",
      link: "HTML・CSS・JAVA"
    },
    {
      keys: ["irm", "iex", "command not found: irm", "zsh: command not found"],
      answer:
        "Mac の画面です。irm と iex は Windows の PowerShell 用です。Mac は curl -fsSL https://claude.ai/install.sh | bash を貼ります。すでに claude が入っている人は、新しいターミナルで claude とだけ打ちます。",
      href: "#/course/today/cursorcode",
      link: "Cursor に Claude Code"
    },
    {
      keys: ["貼", "コピー", "ctrl", "ペースト", "⌘", "command", "貼り付け"],
      answer:
        "教室の「コピー」を押したあと、貼る場所（PowerShell・ターミナル・チャットの入力欄）を一度クリックしてから貼ります。Windows は右クリックまたは Ctrl＋V、Mac は ⌘＋V です。",
      href: "#/course/faq/paste",
      link: "貼り付けできない"
    },
    {
      keys: ["not found", "認識", "command not found", "claudeが", "見つから", "doctor"],
      answer:
        "入れた直後は、今のターミナルを閉じて新しく開き、claude だけ打ってください。Mac で cou と出たら打ち間違いです。command not found: claude なら source ~/.zshrc のあと claude。まだなら公式の1行（Mac は curl、Windows は irm）をもう一度。確認は claude doctor です。",
      href: "#/course/faq/notfound",
      link: "claude が認識されない"
    },
    {
      keys: ["設定", "settings", "一般", "請求", "使用量", "メモリー", "メモリ", "コネクタ", "コネクター", "スキル", "プラグイン", "デザインシステム", "claude in chrome"],
      answer:
        "名前から「設定」を開きます。請求はお金、使用量は今月のメーターです。メモリーは別チャットでも覚えさせること。コネクタはカレンダーやメールをつなぐ入口。開発者・プラグインは今やらなくてよいです。",
      href: "#/course/settings",
      link: "Claudeの設定"
    },
    {
      keys: ["ログイン", "login", "入れない", "無料", "プラン", "pro", "有料", "アカウント", "claude.ai"],
      answer:
        "先にブラウザで claude.ai に、いつも使うメールで入れるか確認します。Claude Code は無料プランでは使えません。設定→プランが Free のままになっていないか見てください。会社のGoogleと個人Gmailの取り違えもよくあります。",
      href: "#/course/faq/login",
      link: "ログインできない"
    },
    {
      keys: ["mac", "マック", "ターミナル", "spotlight", "パスワードが見え"],
      answer:
        "Mac はテキストエディット（メモ）ではなく、赤い・黄色い・緑の丸がある「ターミナル」です。⌘＋スペースで「ターミナル」と検索します。パスワード入力中は文字が見えません。打ち終わって Enter です。",
      href: "#/course/codemac",
      link: "Mac編"
    },
    {
      keys: ["cowork", "コワーク", "見当たら", "メニュー", "アプリ"],
      answer:
        "以前の Cowork は、今このチャットに入っています。別の場所を探さなくてよいです。資料作成も会話も、同じ画面です。",
      href: "#/course/faq/coworkmiss",
      link: "左にCoworkが無い"
    },
    {
      keys: ["trust", "trust this folder", "no, exit", "yes, i trust", "safety check", "accessing workspace"],
      answer:
        "エラーではありません。このフォルダを信頼するかの確認です。矢印の下で Yes, I trust this folder を選んで Enter します。No, exit を押した人は、もう一度 claude と打ちます。自分で開いた作業フォルダなら Yes で進みます。",
      href: "#/course/today/cursorcode",
      link: "Cursor に Claude Code"
    },
    {
      keys: ["node -v", "nodejs", "node.js", "ノード", "入れてないとだめ"],
      answer:
        "だめではありません。node -v は、講座と同じく npm で入れる人の確認です。入れ方は環境構築②（約4分）です。いま推奨の公式は Mac が curl、Windows が irm で、こちらは Node 不要です。すでに claude と打って起動する人は、入れ直し不要です。",
      href: "#/course/nodejs",
      link: "Node.jsのインストール"
    },
    {
      keys: ["今日の講義", "きょうの講義", "土台：ポータル", "タイル型", "カーソルに", "cursor に"],
      answer:
        "今日の講義の Claude Code は、最初の1回だけ入れます。推奨は公式の1行（Mac は curl、Windows は irm）。Node.js は必須ではありません。作業フォルダを開いて claude。ファイルを変える前の確認は見てから承認します。",
      href: "#/course/today",
      link: "今日の講義"
    },
    {
      keys: ["マーケ", "マーケティング", "届ける", "ターゲット", "潜在ニーズ", "chatgpt"],
      answer:
        "マーケティング編は、誰に・何を・どう届けるか、の3つです。講師のおすすめは ChatGPT。1つのチャットで①ターゲット→②潜在ニーズ→③価値→④媒体→⑤評価、の順です。新しいチャットは開きません。",
      href: "#/course/market",
      link: "マーケティング編"
    },
    {
      keys: ["仮説", "丸投げ", "イシュー", "ファクトベース", "仮説思考"],
      answer:
        "仮説思考は、差がつくのはAIの性能ではなく問いの立て方、です。イシューは今本当に結論を出す価値がある問い。1つに絞り、「私はこう思う」を先に書き、「外れている点を根拠つきで指摘して」と頼む。",
      href: "#/course/hypo",
      link: "仮説思考"
    },
    {
      keys: ["人事", "CHRO", "オペレーター", "賞与", "職種別"],
      answer:
        "人事編は、業務をAIで軽くすることと、採用・配置・評価・報酬・労働時間の制度を作り直すこと、の二つです。人に残るのは意図・見直し・責任・巻き込み。いちばん人数が要るのはオペレーターです。",
      href: "#/course/hr",
      link: "人事の切り分け"
    },
    {
      keys: ["プロンプト力", "プロンプト", "tcrei", "目的前提形式", "お願い文の型"],
      answer:
        "AIはあなたのことを知らない新人です。あいまいだと無難な答えになります。目的・前提・形式の3つ。見出しはなくてもよい。直すときは1か所ずつ。毎回のルールはメモリ。型は Skills や Gem に別スレッドで。",
      href: "#/course/promptskill",
      link: "プロンプト力養成講座"
    },
    {
      keys: ["slack", "スラック", "予定済み", "スケジュール済み", "デイリーブリーフィング", "毎朝要約"],
      answer:
        "朝の未読は全部読まず、決定事項・自分のToDo・返信が必要なものだけ受け取ります。主役は予定済み。雑談チャンネルは外す。指示は細かく、なければ「なし」。朝9時。Pro／Maxは学習協力をオフ。投稿や削除はしません。",
      href: "#/course/slacksum",
      link: "Slackを毎朝要約"
    },
    {
      keys: ["日程", "カレンダー", "会議", "空き時間", "コネクター"],
      answer:
        "日程調整編は、大きなアプリから始めず、設定のコネクターでカレンダーをつなぎ、プロジェクトの手順を貼って「実行」と書きます。相手のカレンダーは読めません。確定したときだけ登録を頼みます。無料プランでもできますが、使用上限にはすぐ達しやすいです。",
      href: "#/course/sched",
      link: "日程調整"
    },
    {
      keys: ["著作権", "商用利用", "参考画像", "そっくり", "利用規約", "類似性", "依拠"],
      answer:
        "「AIだから大丈夫」とも「ダメ」とも決めつけません。参考画像の許可、そっくりという指示、商用利用OKの意味、の3つが分からないまま入力も納品もしません。著作権は類似性と依拠性。規約の商用利用は第三者の権利まで保証しません。",
      href: "#/course/aicopy",
      link: "著作権と利用規約"
    },
    {
      keys: ["claude.md", "claudemd", "claude md", "ルールブック", "/init", "/memory", "業務マニュアル", "マークダウン", "markdown", "どこから見", "どこで見"],
      answer:
        "CLAUDE.md は Claude Code に渡す業務マニュアルです。起動のたびに自動で読みます。必須ではありません。/init で下書きできます。できたファイルは Cursor の左の一覧（Ctrl または ⌘ と B）のいちばん上をクリックします。claude.ai の設定には出ません。座学は基礎、手を動かすのは作り方です。",
      href: "#/course/mdbase",
      link: "CLAUDE.mdの基礎"
    },
    {
      keys: ["skills", "スキル", "skill", "/invoice-check", "スラッシュコマンド"],
      answer:
        "Skills は、よく使う手順を名前つきで残したものです。CLAUDE.md は毎回読むマニュアル、Skills は /名前 で呼んだときの手順です。自分で書かなくてよく、日本語で頼めます。",
      href: "#/course/skillbase",
      link: "Skillsの基礎"
    },
    {
      keys: ["秘書+", "Desktop", "送信ブロック", "ツールの権限", "ChatWork"],
      answer:
        "秘書の応用編は、Claude CodeデスクトップのフォルダにカレンダーとGmailをつなぎます。読む・下書きは常に許可。送信・返信・転送と完全削除はブロック。顧客メールを渡すかは自分で決めます。",
      href: "#/course/secplus",
      link: "秘書の応用編"
    },
    {
      keys: ["ポータル", "社内ポータル", "お知らせページ", "作り方編"],
      answer:
        "社内ポータルは、Claude の同じチャットに見本文を貼って作ります。以前の Cowork は今ここに入っています。できたページを自分の目で見てから、リンクを社員に渡します。",
      href: "#/course/portalmake",
      link: "ポータル作り方編"
    },
    {
      keys: ["直し方", "直そう", "内線", "お知らせを追加", "元に戻"],
      answer:
        "直し方は、作った会話の続きに「〇〇を△△に変えて」と書くだけです。リンクは変わりません。直したらページを再読み込みして確認します。会話が見つからなければ、ポータルのリンクを貼って新しいタスクで頼んでください。",
      href: "#/course/portalfix",
      link: "ポータル直し方編"
    },
    {
      keys: ["請求書", "インボイス", "適格請求書", "ひな形"],
      answer:
        "最初に自社情報入りのひな形を一度作ります。お願い文に「インボイス制度の記載事項を満たすように」と書きます。毎月は宛先と明細だけ。送る前に電卓で検算し、PDFで自分から送ります。",
      href: "#/course/invoicemake",
      link: "請求書編"
    },
    {
      keys: ["給料", "給与", "時給", "支給額", "割増"],
      answer:
        "出退勤の記録から支給額までを、同じチャットに頼めます。税・保険・振込は今まで通りです。計算式が見えるExcelにし、渡す前に電卓で1人分を検算してください。マイナンバーや口座は入れません。",
      href: "#/course/salary",
      link: "給料計算編"
    },
    {
      keys: ["出退勤", "タイムカード", "勤怠", "出勤", "退勤"],
      answer:
        "すでにポータルがあるときは、ゼロから作り直さず「出退勤の機能を追加して。いまあるものは消さないで」と頼めます。コピーできる見本は出退勤管理編の「機能を足す」にあります。",
      href: "#/course/attend",
      link: "出退勤管理編"
    },
    {
      keys: ["会社", "社内", "ネット", "セキュリティ", "止まる", "制限", "wifi"],
      answer:
        "会社のパソコンでは、インストールやログインが許可されていないことがあります。制限を無断で外さないでください。情報システムの担当者に「教室で claude.ai / Claude Code を使いたい」と相談するか、許可された環境でやり直します。",
      href: "#/course/faq/net",
      link: "会社のネットで止まる"
    },
    {
      keys: ["チャット", "相談", "文章", "ブラウザ"],
      answer:
        "入り口は2つです。チャットは会話も資料作成も同じ画面（以前の Cowork はここに入った）。Claude Code は黒い画面から道具をつくる相棒です。迷ったらチャット入門からどうぞ。",
      href: "#/course/webchat",
      link: "チャット入門"
    },
    {
      keys: ["code", "コード", "道具", "インストール", "1行"],
      answer:
        "Claude Code はターミナル（Windows は PowerShell）に1行貼って使います。事務作業は同じチャット、道具づくりが Code です。無料プランでは使えません。Windows と Mac で手順が違います。",
      href: "#/code",
      link: "Claude Codeの一覧"
    },
    {
      keys: ["ポスター", "求人", "デザイン"],
      answer:
        "いちばんやさしい入口は求人ポスターです。お手本を見ながら、A4縦を1枚つくります。デザインが苦手でも大丈夫です。",
      href: "#/course/poster",
      link: "ポスター講座"
    },
    {
      keys: ["パスワード", "口座", "個人情報", "カード", "安全", "api"],
      answer:
        "パスワード・口座・カード番号・APIキーは、チャットにも教室にも書かないでください。出てきた金額や宛名は、元データと必ず見比べます。送信・削除・公開の最終判断は自分です。",
      href: "#/safety",
      link: "安全の約束"
    },
    {
      keys: ["先生", "講師", "宮田", "塾", "質問", "相談"],
      answer:
        "宮田先生へのご質問は、原則24時間以内に返信します。パスワード・口座は書かないでください。AIチャットは、この画面ですぐ返します。",
      href: "#/chat",
      link: "先生に直接聞く"
    },
    {
      keys: ["迷", "進み方", "どっち", "どちら", "道", "説明資料", "順番"],
      answer:
        "道は1本だけ選びます。事務なら同じチャット（アカウント→チャット入門→ポスター→事務の講座）。道具なら Claude Code（自分のパソコンの準備→投稿文→かんたん順）。混ぜなくて大丈夫です。",
      href: "#/guide",
      link: "進み方"
    },
    {
      keys: ["画面編集", "画面を直", "見出しを変", "ボタンの色"],
      answer:
        "作ったアプリの画面は、日本語で「〜を〜に」と頼めば直せます。小さく直して、画面で確かめて、よければ保存です。",
      href: "#/course/appedit",
      link: "アプリ画面の編集"
    },
    {
      keys: ["契約", "期間", "転載", "複製", "禁止", "閲覧できない"],
      answer:
        "この学習アプリは、ご契約期間中のみ閲覧できます。教材・画面・文章の無断転載・複製・配布・公開は禁止です。先生への返信は原則24時間以内です。",
      href: "#/safety",
      link: "ご利用上の注意"
    },
    {
      keys: ["付箋", "メモ", "お気に入り", "星"],
      answer: "画面の右上「お気に入り追加」を押すと入ります。もう一度押すと外れます。一覧はメニューの「お気に入り」です。この端末にだけ残ります。",
      href: "#/notes",
      link: "お気に入り"
    },
    {
      keys: ["進度", "ハンコ", "マイページ", "名前"],
      answer:
        "レッスンの下の「このページを読んだ」で進度が色づきます。名前と進度はマイページで見られます。この端末にだけ残ります。",
      href: "#/me",
      link: "マイページ"
    }
  ];

  const score = (q, item) => {
    const t = q.toLowerCase();
    return item.keys.reduce((n, k) => n + (t.includes(k.toLowerCase()) ? (k.length > 2 ? 2 : 1) : 0), 0);
  };

  const ask = (raw) => {
    const q = String(raw || "").trim();
    if (!q) {
      return {
        text: "困っていることを、短い言葉で書いてください。例：貼れない、ログインできない、Coworkが見当たらない。",
        href: "#/course/faq",
        link: "つまずき一覧"
      };
    }
    let best = null;
    let n = 0;
    ITEMS.forEach((item) => {
      const s = score(q, item);
      if (s > n) {
        n = s;
        best = item;
      }
    });
    if (!best || n < 1) {
      return {
        text: "教室のつまずき一覧から近い症状を選ぶと早いです。個別の仕事の判断は、宮田先生へいつもの連絡でどうぞ。パスワードは書かないでください。",
        href: "#/course/faq",
        link: "つまずき一覧"
      };
    }
    return { text: best.answer, href: best.href, link: best.link };
  };

  const talk = (raw) => {
    const q = String(raw || "").trim();
    if (!q) {
      return {
        text: "この画面の中で答えます。やりたいことや、困っていることを書いてください。"
      };
    }
    const t = q.toLowerCase();
    const extra = [
      {
        keys: ["請求書", "見積", "みつもり"],
        text: "見積書は「この内容・この金額で仕事しますよ」という案内です。請求書は「仕事が終わったので、この金額を払ってください」という請求です。先に見積、あとに請求、がよくある流れです。"
      },
      {
        keys: ["短く", "やさしく", "小学生"],
        text: "短いお願いの型です。「相手：初心者。目的：〔やりたいこと〕を、手順3つと注意1つで教えて。専門用語は言い換えて。」〔　〕だけ書き換えて送ってみてください。"
      },
      {
        keys: ["例", "サンプル", "ひな形"],
        text: "例は1つだけ頼むと読みやすいです。「例を1つ、手順つきで。失敗しやすい点も1つ。」と書いてください。数字や宛名は、あとで必ず自分で確認します。"
      },
      {
        keys: ["下書き", "文章", "メール", "投稿"],
        text: "文章づくりは、①誰に向けか ②何をしたいか ③長さ、の3つを先に書くと上手くいきます。できた文は、送る前に声に出して読んでください。パスワードや口座は入れないでください。"
      }
    ];
    let best = null;
    let n = 0;
    extra.forEach((item) => {
      const s = item.keys.reduce((x, k) => x + (t.includes(k.toLowerCase()) ? 2 : 0), 0);
      if (s > n) {
        n = s;
        best = item;
      }
    });
    if (best) return { text: best.text };
    const hit = ask(q);
    if (hit && !/つまずき一覧から近い/.test(hit.text)) return hit;
    return {
      text: `この教室の中でお答えします。「${q.slice(0, 40)}」について、まず安全に：パスワードや口座は書かないでください。次の一歩は、①やりたいことを1文にする ②教室のつまずき一覧で近い症状を見る ③まだなら宮田先生へ画面の文言を送る、です。`,
      href: "#/course/faq",
      link: "つまずき一覧"
    };
  };

  window.CLASSROOM_BOT = {
    ask,
    talk,
    chips: ["貼れない", "ログインできない", "PowerShellが開かない", "左にCoworkが無い", "チャットとCodeの違い"]
  };
})();
