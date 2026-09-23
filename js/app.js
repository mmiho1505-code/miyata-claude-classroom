(() => {
  const STORAGE_KEY = "claude-classroom-progress-v1";
  const app = document.getElementById("app");
  const nav = document.getElementById("site-nav");
  const toggle = document.querySelector(".nav-toggle");
  const quizPill = document.querySelector(".tool-quiz");

  const loadProgress = () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { cowork: {}, code: {}, quizzes: {} };
    } catch {
      return { cowork: {}, code: {}, quizzes: {} };
    }
  };

  const saveProgress = (data) => localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

  const memberName = () => {
    const n = (loadProgress().memberName || "").trim();
    return n.slice(0, 20);
  };

  const setMemberName = (name, fromUrl) => {
    const p = loadProgress();
    p.memberName = String(name || "").trim().slice(0, 20);
    if (!fromUrl) {
      p.nameLocked = true;
      p.lastUrlName = p.memberName;
      saveProgress(p);
      dropNameFromAddress();
      return;
    }
    p.lastUrlName = p.memberName;
    saveProgress(p);
  };

  const helloLine = () => {
    const hour = new Date().getHours();
    let phrase = "お疲れ様です。";
    if (hour >= 5 && hour < 11) phrase = "おはようございます。";
    else if (hour >= 11 && hour < 17) phrase = "こんにちは。";
    else if (hour >= 22 || hour < 5) phrase = "遅くまで頑張ってますね。";
    const n = memberName();
    return n ? `${n}さん、${phrase}` : `会員のみなさん、${phrase}`;
  };

  const applyNameFromUrl = () => {
    try {
      const q = new URLSearchParams(location.search);
      const hashQ = location.hash.includes("?")
        ? new URLSearchParams(location.hash.slice(location.hash.indexOf("?")))
        : null;
      const n = ((q.get("name") || (hashQ && hashQ.get("name")) || "") + "").trim().slice(0, 20);
      if (!n) return;
      const p = loadProgress();
      if (p.nameLocked) return;
      if (p.lastUrlName === n) return;
      p.memberName = n;
      p.lastUrlName = n;
      saveProgress(p);
    } catch {
      /* ignore */
    }
  };

  const dropNameFromAddress = () => {
    try {
      const url = new URL(location.href);
      let changed = false;
      if (url.searchParams.has("name")) {
        url.searchParams.delete("name");
        changed = true;
      }
      if (url.hash.includes("?")) {
        const hi = url.hash.indexOf("?");
        const path = url.hash.slice(0, hi);
        const hp = new URLSearchParams(url.hash.slice(hi));
        if (hp.has("name")) {
          hp.delete("name");
          const rest = hp.toString();
          url.hash = rest ? `${path}?${rest}` : path;
          changed = true;
        }
      }
      if (changed) history.replaceState(null, "", url.pathname + url.search + url.hash);
    } catch {
      /* ignore */
    }
  };

  const syncMemberChip = () => {
    const el = document.getElementById("member-chip");
    if (!el) return;
    const n = memberName();
    el.textContent = n ? `${n}さん` : "お名前";
  };

  const percent = (courseId) => {
    const course = CLASSROOM.courses[courseId];
    const done = loadProgress()[courseId] || {};
    const n = course.lessons.filter((l) => done[l.id]).length;
    return Math.round((n / course.lessons.length) * 100);
  };

  const courseKind = (p) => (p >= 100 ? "done" : p > 0 ? "now" : "todo");

  const lessonKind = (courseId, lessonId) => {
    const course = CLASSROOM.courses[courseId];
    const doneMap = loadProgress()[courseId] || {};
    if (doneMap[lessonId]) return "done";
    const hasAny = course.lessons.some((l) => doneMap[l.id]);
    const firstUnread = course.lessons.find((l) => !doneMap[l.id]);
    if (hasAny && firstUnread && firstUnread.id === lessonId) return "now";
    return "todo";
  };

  const statusChip = (kind) => {
    if (kind === "done") return `<span class="st-chip is-done"><span aria-hidden="true">✓</span>完了</span>`;
    if (kind === "now") return `<span class="st-chip is-now"><span aria-hidden="true">▶</span>学習中</span>`;
    return `<span class="st-chip is-todo">これから</span>`;
  };

  const crumbs = (items) =>
    `<nav class="crumbs" aria-label="パンくず">${items
      .map((it, i) =>
        i < items.length - 1
          ? `<a href="${it.href}" data-link>${escapeHtml(it.label)}</a><span aria-hidden="true">›</span>`
          : `<span>${escapeHtml(it.label)}</span>`
      )
      .join("")}</nav>`;

  const loadWorks = () => {
    const p = loadProgress();
    return Array.isArray(p.works) ? p.works : [];
  };

  const saveWorks = (works) => {
    const p = loadProgress();
    p.works = works.slice(0, 20);
    try {
      saveProgress(p);
      return true;
    } catch {
      return false;
    }
  };

  const readWorkFile = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ""));
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });

  const workFileHTML = (w) => {
    if (!w.file || !w.file.data) return "";
    const name = escapeHtml(w.file.name || "ファイル");
    const type = w.file.type || "";
    const href = w.file.data;
    if (type.startsWith("image/")) {
      return `<a class="work-shot" href="${href}" download="${name}"><img src="${href}" alt="${name}" /></a>`;
    }
    return `<a class="work-file" href="${href}" download="${name}">${name} を開く</a>`;
  };

  const loadBotChat = () => {
    const p = loadProgress();
    return Array.isArray(p.botChat) ? p.botChat : [];
  };

  const saveBotChat = (msgs) => {
    const p = loadProgress();
    p.botChat = msgs.slice(-24);
    saveProgress(p);
  };

  const botBubble = (m) => {
    const who = m.role === "user" ? "あなた" : "教室アシスタント";
    const link =
      m.href && m.link
        ? `<p><a class="bot-more" href="${escapeHtml(m.href)}" data-link>${escapeHtml(m.link)} →</a></p>`
        : "";
    return `<article class="bot-msg is-${m.role === "user" ? "user" : "bot"}"><span>${who}</span><p>${escapeHtml(m.text || "").replace(/\n/g, "<br />")}</p>${link}</article>`;
  };

  const loadTeacherNotes = () => {
    const p = loadProgress();
    return Array.isArray(p.teacherNotes) ? p.teacherNotes : [];
  };

  const saveTeacherNotes = (notes) => {
    const p = loadProgress();
    p.teacherNotes = notes.slice(0, 20);
    saveProgress(p);
  };

  const TEACHER_MAIL = "m.miho1505@gmail.com";

  const teacherMailto = (text, name) => {
    const subject = encodeURIComponent(`教室の質問${name ? `（${name}）` : ""}`);
    const body = encodeURIComponent(text);
    return `mailto:${TEACHER_MAIL}?subject=${subject}&body=${body}`;
  };

  const teacherMessage = (name, os, where, q) =>
    `【教室から先生へ】
名前：${name || "（未記入）"}
端末：${os || "わからない"}
やっていたこと：${where || "（未記入）"}
質問：
${q}

（パスワード・口座は書いていません）`;

  const greetDirect = () => ({
    role: "bot",
    text: "この画面の中で答えます。claude.ai には飛びません。文章の相談や、教室のつまずきも、ここに書いて送ってください。"
  });

  const loadDirectChat = () => {
    const p = loadProgress();
    return Array.isArray(p.directChat) ? p.directChat : [];
  };

  const saveDirectChat = (msgs) => {
    const p = loadProgress();
    p.directChat = msgs.slice(-24);
    saveProgress(p);
  };

  const chatTabsHTML = () => `
          <div class="bot-tabs" role="tablist" aria-label="チャットの種類">
            <button type="button" class="bot-tab is-on" data-chat-tab="ai">AIチャット</button>
            <button type="button" class="bot-tab" data-chat-tab="teacher">先生に直接聞く</button>
          </div>`;

  const teacherAskHTML = () => {
    const n = escapeHtml(memberName());
    const notes = loadTeacherNotes();
    return `
          <div class="bot-pane is-teacher">
            <h3>先生に直接聞く</h3>
            <p class="easy-meta">宮田先生のメール（${escapeHtml(TEACHER_MAIL)}）に届きます。返信は原則24時間以内です。送信ボタンでメールアプリが開きます。パスワード・口座は書かないでください。</p>
            <form id="teacher-form" class="teacher-form">
              <label for="teacher-name">お名前</label>
              <input id="teacher-name" name="name" maxlength="20" value="${n}" placeholder="例：山田" />
              <label for="teacher-os">使っているもの</label>
              <select id="teacher-os" name="os">
                <option value="Windows">Windows</option>
                <option value="Mac">Mac</option>
                <option value="わからない">わからない</option>
              </select>
              <label for="teacher-where">いまやっていたこと</label>
              <input id="teacher-where" name="where" maxlength="80" placeholder="例：PowerShellに1行貼るところ" />
              <label for="teacher-q">聞きたいこと（画面の文言があればそのまま）</label>
              <textarea id="teacher-q" name="q" rows="4" maxlength="600" placeholder="困っていること。赤い英文があれば、そのまま書く"></textarea>
              <button class="btn-orange" type="submit">先生にメールする</button>
              <p class="easy-meta" id="teacher-hint"></p>
            </form>
            <ul class="teacher-list">
              ${
                notes.length
                  ? notes
                      .map(
                        (t) =>
                          `<li><small>${escapeHtml(t.at || "")}</small><p>${escapeHtml(t.text || "")}</p>
                          <button type="button" class="btn-dark" data-teacher-mail="${escapeHtml(t.id)}">もう一度メール</button>
                          <button type="button" class="ghost" data-teacher-del="${escapeHtml(t.id)}">消す</button></li>`
                      )
                      .join("")
                  : `<li class="easy-meta">まだありません。上に書いて「先生にメールする」を押してください。</li>`
              }
            </ul>
          </div>`;
  };

  const directChatHTML = () => `
          <div class="bot-pane is-direct">
            <h3>AIチャット</h3>
            <p class="easy-meta">この画面の中で答えます。外のサイトには飛びません。パスワードは書かないでください。</p>
            <div class="bot-shell is-direct">
              <div id="direct-log" class="bot-log" aria-live="polite"></div>
              <div class="bot-chips">
                <button type="button" class="bot-chip" data-direct-q="請求書と見積書の違いをやさしく教えて">請求書と見積書</button>
                <button type="button" class="bot-chip" data-direct-q="お願い文を短くやさしくする型を教えて">短くやさしく</button>
                <button type="button" class="bot-chip" data-direct-q="例を1つ、手順つきで教えて">例を1つ</button>
              </div>
              <form id="direct-form" class="bot-form">
                <label class="sr-only" for="direct-q">AIチャットへの質問</label>
                <textarea id="direct-q" name="q" rows="2" maxlength="800" placeholder="聞きたいことを書く"></textarea>
                <button class="btn-orange" type="submit">送る</button>
              </form>
            </div>
          </div>`;

  const certDate = (courseId) => {
    if (percent(courseId) < 100) return "";
    const p = loadProgress();
    p.certs = p.certs || {};
    if (!p.certs[courseId]) {
      p.certs[courseId] = new Date().toLocaleDateString("ja-JP");
      saveProgress(p);
    }
    return p.certs[courseId];
  };

  const nextToLearn = () => {
    const id = HOME_ORDER.find(
      (courseId) => CLASSROOM.courses[courseId] && courseId !== "faq" && canSeeCourse(courseId) && percent(courseId) < 100
    );
    if (!id) return null;
    const course = CLASSROOM.courses[id];
    const why =
      toolOf(id) === "cowork"
        ? "事務は Claude Cowork です。"
        : id === "code" || id === "codemac"
          ? "次は Claude Code（道具づくり）です。"
          : "やさしい順の、次の講座です。";
    return { id, course, why };
  };

  const HOME_ORDER = [
    "account",
    "webchat",
    "poster",
    "cowork",
    "portalmake",
    "portalfix",
    "attend",
    "code",
    "codemac",
    "snspost",
    "survey",
    "expense",
    "invoice",
    "abc",
    "sns",
    "crm",
    "shop",
    "secretary",
    "appedit",
    "applied",
    "faq"
  ];

  const BEGINNER_IDS = ["account", "webchat", "poster", "cowork", "portalmake", "portalfix", "attend", "code", "codemac"];
  const ADVANCED_IDS = [
    "snspost",
    "survey",
    "expense",
    "invoice",
    "abc",
    "sns",
    "crm",
    "shop",
    "secretary",
    "appedit",
    "applied"
  ];
  const COWORK_IDS = ["webchat", "cowork", "portalmake", "portalfix", "attend"];
  const CODE_SETUP_IDS = ["code", "codemac"];
  const CODE_MAKE_IDS = ADVANCED_IDS.slice();
  const CODE_IDS = CODE_SETUP_IDS.concat(CODE_MAKE_IDS);

  const toolOf = (courseId) => {
    if (courseId === "cowork" || courseId === "webchat") return "cowork";
    if (["poster", "account", "faq"].includes(courseId)) return "starter";
    return "code";
  };
  const toolListHref = (courseId) => (toolOf(courseId) === "cowork" ? "#/cowork" : toolOf(courseId) === "starter" ? "#/" : "#/code");
  const toolListLabel = (courseId) =>
    toolOf(courseId) === "cowork" ? "Coworkの一覧" : toolOf(courseId) === "starter" ? "ホームへ" : "Claude Codeの一覧";
  const toolKicker = (courseId) =>
    toolOf(courseId) === "cowork" ? "Claude Cowork" : toolOf(courseId) === "starter" ? "はじめて" : "Claude Code";

  const OPEN_COURSE_IDS = ["account", "webchat", "poster", "faq"];
  const GATE_PACKS = {
    jimu: { label: "事務（Cowork）", ids: ["cowork", "portalmake", "portalfix", "attend"] },
    dougu: { label: "道具づくり（Claude Code）", ids: CODE_IDS.slice() },
    zenbu: { label: "全部", ids: HOME_ORDER.slice() }
  };
  const GATE_ALIASES = {
    jimu: "jimu",
    じむ: "jimu",
    cowork: "jimu",
    事務: "jimu",
    dougu: "dougu",
    どうぐ: "dougu",
    code: "dougu",
    道具: "dougu",
    zenbu: "zenbu",
    ぜんぶ: "zenbu",
    all: "zenbu",
    全部: "zenbu"
  };

  const decodeGate = (raw) => {
    const s = String(raw || "")
      .normalize("NFKC")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "");
    return GATE_ALIASES[s] || "";
  };

  const loadGates = () => {
    const g = loadProgress().gates;
    if (Array.isArray(g)) return g.filter((x) => GATE_PACKS[x]);
    return [];
  };

  const addGate = (pack) => {
    if (!GATE_PACKS[pack]) return;
    const p = loadProgress();
    if (pack === "zenbu") {
      p.gates = ["zenbu"];
      saveProgress(p);
      return;
    }
    const gates = loadGates().filter((x) => x !== "zenbu");
    if (!gates.includes(pack)) gates.push(pack);
    p.gates = gates;
    saveProgress(p);
  };

  const canSeeCourse = (courseId) => {
    if (!courseId || OPEN_COURSE_IDS.includes(courseId)) return true;
    if (!CLASSROOM.courses[courseId]) return true;
    const gates = loadGates();
    if (gates.includes("zenbu")) return true;
    return gates.some((g) => (GATE_PACKS[g] || {}).ids && GATE_PACKS[g].ids.includes(courseId));
  };

  const applyKeyFromUrl = () => {
    try {
      const q = new URLSearchParams(location.search);
      const hashQ = location.hash.includes("?")
        ? new URLSearchParams(location.hash.slice(location.hash.indexOf("?")))
        : null;
      const raw = ((q.get("key") || (hashQ && hashQ.get("key")) || "") + "").trim();
      const pack = decodeGate(raw);
      if (!pack) return;
      addGate(pack);
      dropKeyFromAddress();
    } catch {
      /* ignore */
    }
  };

  const dropKeyFromAddress = () => {
    try {
      const url = new URL(location.href);
      let changed = false;
      if (url.searchParams.has("key")) {
        url.searchParams.delete("key");
        changed = true;
      }
      if (url.hash.includes("?")) {
        const hi = url.hash.indexOf("?");
        const path = url.hash.slice(0, hi);
        const hp = new URLSearchParams(url.hash.slice(hi));
        if (hp.has("key")) {
          hp.delete("key");
          const rest = hp.toString();
          url.hash = rest ? `${path}?${rest}` : path;
          changed = true;
        }
      }
      if (changed) history.replaceState(null, "", url.pathname + url.search + url.hash);
    } catch {
      /* ignore */
    }
  };

  const lockedView = (want) => {
    const pack = GATE_PACKS[want] ? want : want === "code" ? "dougu" : "jimu";
    const label = (GATE_PACKS[pack] || GATE_PACKS.jimu).label;
    return `
      <div class="page">
        ${crumbs([
          { href: "#/", label: "ホーム" },
          { href: "#/me", label: "受講コード" }
        ])}
        <p class="kicker">鍵</p>
        <h1>この講座には受講コードが必要です</h1>
        <p class="lede">${escapeHtml(label)} の案内を、塾からもらった人だけ開けます。コードはマイページに入れます。</p>
        <p><a class="btn-orange" href="#/me" data-link>受講コードを入れる</a>
        <a class="btn-dark" href="#/" data-link>ホームへ</a></p>
      </div>`;
  };

  const COURSE_META = {
    account: ["cover-account", "準備", "claude.ai に入って、有料プランの画面を確認。", "signup"],
    webchat: ["cover-chat", "チャット", "Coworkの前に。ブラウザで日本語のお願いを一度。", "webchat"],
    poster: ["cover-poster", "ポスター", "お手本1枚と一問一答で、A4縦を1枚。", "poster"],
    cowork: ["cover-cowork", "Cowork", "やり方ガイドつき。資料・整理・連携から請求書と経費まで。", "cowork"],
    portalmake: ["cover-cowork", "ポータル", "話しかけるだけで、社内お知らせページを1枚作る。", "cowork"],
    portalfix: ["cover-appedit", "直す", "お知らせの追加も番号の変更も、会話の続きで頼む。", "mouse"],
    attend: ["cover-expense", "出退勤", "名前を選んでボタンを押すだけ。記録は消えず、月末はExcel。", "calendar"],
    intro: ["cover-intro", "勉強会", "日本語でお願いして、作って・見て・直す感覚。", "desktop"],
    code: ["cover-code", "Code", "黒い画面に1行貼って、使える状態まで。", "powershell"],
    codemac: ["cover-mac", "Mac", "ターミナルに1行貼って、使える状態まで。", "terminal"],
    applied: ["cover-applied", "応用", "毎回の説明を省くメモと、いつもの手順の登録。", "desktop"],
    invoice: ["cover-invoice", "請求書", "取引先リストとひな形から、PDFを一括作成。", "invoice"],
    expense: ["cover-expense", "経費", "レシートや明細を読み取り、科目ごとに月次集計。", "expense"],
    crm: ["cover-crm", "CRM", "登録・検索・絞り込みできる、自分専用の台帳。", "crm"],
    shop: ["cover-shop", "店舗", "紹介ページと予約フォームを作って、公開まで。", "shop"],
    survey: ["cover-survey", "集計", "回答CSVから、グラフとレポートを自動作成。", "survey"],
    abc: ["cover-abc", "ABC", "売上や得意先をA・B・Cに分けて、力の入れどころを見える化。", "abc"],
    sns: ["cover-sns", "SNS", "投稿と反応から、伸びた投稿の傾向と次のヒントを見える化。", "sns"],
    snspost: ["cover-snspost", "投稿文", "ネタを渡すだけで、らしいトーンの投稿文を文字数内で複数案。", "snspost"],
    secretary: ["cover-secretary", "秘書", "日本語のお願いから、GitHub保存・公開までの6ステップ。", "secretary"],
    appedit: ["cover-appedit", "画面", "作ったアプリの文字・色・部品を、日本語のお願いで直す。", "mouse"],
    faq: ["cover-faq", "つまずき", "PowerShellが開かない、ログインできない、など。", "quiz"]
  };

  const STAMP_LABELS = {
    account: ["アカウント", "🔑"],
    webchat: ["チャット", "💭"],
    poster: ["ポスター", "🎨"],
    cowork: ["Cowork", "💬"],
    portalmake: ["ポータル作る", "🏠"],
    portalfix: ["ポータル直す", "🔧"],
    attend: ["出退勤", "⏰"],
    intro: ["勉強会", "📘"],
    code: ["Code", "💻"],
    codemac: ["Mac", ""],
    applied: ["応用", "🧩"],
    invoice: ["請求書", "📄"],
    expense: ["経費", "🧾"],
    crm: ["CRM", "📒"],
    shop: ["店舗", "🏪"],
    survey: ["集計", "📊"],
    abc: ["ABC", "🥇"],
    sns: ["SNS", "📱"],
    snspost: ["投稿文", "✏️"],
    secretary: ["秘書", "🤝"],
    appedit: ["画面", "✏️"],
    faq: ["つまずき", "🆘"]
  };

  const levelOf = (courseId) => (ADVANCED_IDS.includes(courseId) ? "applied" : "beginner");

  const rememberLast = (courseId, lessonId) => {
    if (!CLASSROOM.courses[courseId]) return;
    const p = loadProgress();
    p.last = { courseId, lessonId: lessonId || null, at: Date.now() };
    saveProgress(p);
  };

  const continueStudy = () => {
    const p = loadProgress();
    const last = p.last;
    if (!last || !last.courseId) return null;
    const course = CLASSROOM.courses[last.courseId];
    if (!course || last.courseId === "intro") return null;
    if (!canSeeCourse(last.courseId)) return null;
    const courseId = last.courseId;
    if (last.lessonId === "quiz" && CLASSROOM.quizzes[courseId]) {
      return {
        courseId,
        course,
        lesson: null,
        idx: course.lessons.length,
        href: `#/quiz/${courseId}`,
        kind: "quiz"
      };
    }
    if (last.lessonId) {
      const idx = course.lessons.findIndex((l) => l.id === last.lessonId);
      if (idx >= 0) {
        const lesson = course.lessons[idx];
        return {
          courseId,
          course,
          lesson,
          idx,
          href: `#/course/${courseId}/${lesson.id}`,
          kind: "lesson"
        };
      }
    }
    return {
      courseId,
      course,
      lesson: course.lessons[0],
      idx: 0,
      href: `#/course/${courseId}`,
      kind: "overview"
    };
  };

  const courseStats = (ids) => {
    const list = (ids || HOME_ORDER.filter((id) => canSeeCourse(id))).filter((id) => CLASSROOM.courses[id]);
    let done = 0;
    let total = 0;
    list.forEach((id) => {
      const course = CLASSROOM.courses[id];
      const progress = loadProgress()[id] || {};
      total += course.lessons.length;
      done += course.lessons.filter((lesson) => progress[lesson.id]).length;
    });
    return { ids: list, done, total, overall: total ? Math.round((done / total) * 100) : 0 };
  };

  const syncHeaderProgress = () => {
    const el = document.getElementById("header-progress");
    if (!el) return;
    const { overall } = courseStats();
    el.querySelector("i").style.setProperty("--p", `${overall}%`);
    el.querySelector(".header-progress-txt").textContent = `全体 ${overall}%`;
  };

  const progressRing = (p) => {
    const r = 40;
    const c = 2 * Math.PI * r;
    const offset = c * (1 - p / 100);
    return `
      <div class="progress-ring-wrap" aria-hidden="true">
        <svg class="progress-ring" viewBox="0 0 100 100">
          <circle class="progress-ring-track" cx="50" cy="50" r="${r}"></circle>
          <circle class="progress-ring-value" cx="50" cy="50" r="${r}" stroke-dasharray="${c.toFixed(2)}" stroke-dashoffset="${offset.toFixed(2)}"></circle>
        </svg>
        <div class="progress-ring-label"><strong>${p}</strong><span>%</span></div>
      </div>`;
  };

  const thinMeter = (p, cls = "meter", label = "進度") => `
      <div class="${cls}" role="progressbar" aria-label="${escapeHtml(String(label))}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Number(p) || 0}">
        <span style="--p:${Number(p) || 0}%"></span>
      </div>`;

  const nextRecommended = () => {
    const cur = continueStudy();
    if (cur) return cur;
    const id =
      HOME_ORDER.find((courseId) => CLASSROOM.courses[courseId] && canSeeCourse(courseId) && percent(courseId) < 100) ||
      "poster";
    const course = CLASSROOM.courses[id];
    return {
      courseId: id,
      course,
      lesson: course.lessons[0],
      idx: 0,
      href: `#/course/${id}`,
      kind: "overview"
    };
  };

  const continuePanel = () => {
    const cur = continueStudy();
    if (!cur) return "";
    const n = cur.course.lessons.length;
    const where =
      cur.kind === "quiz"
        ? `${escapeHtml(cur.course.title)}　確認クイズ`
        : cur.kind === "overview"
          ? `${escapeHtml(cur.course.title)}　講座の案内`
          : `${escapeHtml(cur.course.title)}　${cur.idx + 1} / ${n}　${escapeHtml(cur.lesson.title)}`;
    const label = cur.kind === "quiz" ? "クイズを開く" : cur.kind === "overview" ? "講座を開く" : "続きを開く";
    const art = artFor(cur.courseId, cur.lesson && cur.lesson.id);
    return `
      <section class="continue-bar">
        <div class="wrap continue-card">
          <div class="continue-art">${coverArt(art[0])}</div>
          <p class="kicker">いまのページ</p>
          <h2>続きから勉強する</h2>
          <p>${where}</p>
          <div class="meter continue-meter" aria-label="進度"><span style="--p:${percent(cur.courseId)}%"></span></div>
          <p><a class="btn-orange" href="${cur.href}" data-link>${label}</a>
          <a class="btn-dark" href="#/course/${cur.courseId}" data-link>講座の最初</a></p>
        </div>
      </section>`;
  };

  const phonePicks = () => {
    const lastId = (loadProgress().last || {}).courseId;
    const ids = [];
    const pickOrder = ["poster"].concat(COWORK_IDS, CODE_IDS);
    for (const id of pickOrder) {
      if (!CLASSROOM.courses[id] || !canSeeCourse(id)) continue;
      if (id === lastId) continue;
      if (percent(id) < 100) ids.push(id);
      if (ids.length >= 3) break;
    }
    for (const id of pickOrder) {
      if (ids.length >= 3) break;
      if (!CLASSROOM.courses[id] || !canSeeCourse(id) || ids.includes(id) || id === lastId) continue;
      ids.push(id);
    }
    if (!ids.length) return "";
    const c = CLASSROOM.courses;
    return `
      <div class="phone-picks phone-only">
        <div class="section-head">
          <h2>次のおすすめ</h2>
        </div>
        <div class="course-grid start-grid">
          ${ids
            .map((id) =>
              classCard(
                `#/course/${id}`,
                `cover-${id}`,
                c[id].title,
                c[id].title,
                `レッスン${c[id].lessons.length}本 ／ ${c[id].duration}`,
                c[id].subtitle,
                percent(id),
                id === "intro" || id === "applied"
                  ? "desktop"
                  : id === "code"
                    ? "powershell"
                    : id === "codemac"
                      ? "terminal"
                      : id === "account"
                        ? "signup"
                        : id === "webchat"
                          ? "webchat"
                          : id === "faq"
                            ? "quiz"
                            : id
              )
            )
            .join("")}
        </div>
      </div>`;
  };

  const syncQuizPill = (parts) => {
    if (!quizPill) return;
    const onHome = parts.length === 0;
    let id = null;
    if (parts[0] === "course" || parts[0] === "quiz") {
      if (CLASSROOM.quizzes[parts[1]]) id = parts[1];
      else {
        quizPill.hidden = true;
        return;
      }
    } else if (!onHome) {
      const lastId = (loadProgress().last || {}).courseId;
      if (lastId && CLASSROOM.quizzes[lastId]) id = lastId;
    }
    if (onHome || !id) {
      quizPill.hidden = true;
      return;
    }
    quizPill.hidden = false;
    quizPill.setAttribute("href", `#/quiz/${id}`);
    quizPill.textContent = "この講座のクイズ";
  };

  const setActiveNav = (hash) => {
    const path = hash.replace(/^#/, "") || "/";
    const courseId = path.match(/^\/course\/([^/]+)/)?.[1] || path.match(/^\/quiz\/([^/]+)/)?.[1];
    nav.querySelectorAll("a").forEach((a) => {
      const href = a.getAttribute("href").replace(/^#/, "") || "/";
      let active = href === "/" ? path === "/" : path === href || path.startsWith(href + "/");
      if (courseId && href === "/cowork" && toolOf(courseId) === "cowork") active = true;
      if (courseId && href === "/code" && toolOf(courseId) === "code") active = true;
      if (courseId && href === "/beginner" && BEGINNER_IDS.includes(courseId)) active = true;
      if (courseId && href === "/applied" && ADVANCED_IDS.includes(courseId)) active = true;
      if (path.startsWith("/cert") && href === "/me") active = true;
      a.classList.toggle("active", active);
    });
  };

  const escapeHtml = (s) =>
    s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const compareTableHTML = () => `
      <div class="wrap compare-board" role="region" aria-label="チャット・Cowork・Claude Codeの比較">
        <p class="kicker">くらべる</p>
        <h2 class="compare-board-title">チャット・Cowork・Code</h2>
        <p class="compare-board-lead">同じClaudeでも、入り口は3つです。迷ったら左から順に。</p>
        <div class="compare-cols">
          <article class="compare-col is-chat">
            <span class="compare-tag">相談</span>
            <h3>チャット</h3>
            <p class="compare-one">文章で答えてくれる相談相手</p>
            <dl>
              <div><dt>画面</dt><dd>ブラウザ</dd></div>
              <div><dt>返ってくるもの</dt><dd>文章</dd></div>
              <div><dt>向いていること</dt><dd>質問・下書き</dd></div>
              <div><dt>自分ですること</dt><dd>コピーして使う</dd></div>
            </dl>
            <a class="btn-dark" href="#/course/webchat" data-link>チャット入門へ</a>
          </article>
          <article class="compare-col is-cowork">
            <span class="compare-tag">事務</span>
            <h3>Cowork</h3>
            <p class="compare-one">ファイルまで仕上げる作業係</p>
            <dl>
              <div><dt>画面</dt><dd>アプリの画面</dd></div>
              <div><dt>返ってくるもの</dt><dd>できたファイル</dd></div>
              <div><dt>向いていること</dt><dd>請求書・整理</dd></div>
              <div><dt>自分ですること</dt><dd>確認して送る</dd></div>
            </dl>
            <a class="btn-dark" href="#/cowork" data-link>Coworkへ</a>
          </article>
          <article class="compare-col is-code">
            <span class="compare-tag">道具</span>
            <h3>Claude Code</h3>
            <p class="compare-one">黒い画面から、道具をつくる相棒</p>
            <dl>
              <div><dt>画面</dt><dd>ターミナル</dd></div>
              <div><dt>返ってくるもの</dt><dd>ツール・サイト</dd></div>
              <div><dt>向いていること</dt><dd>自動化・アプリ</dd></div>
              <div><dt>自分ですること</dt><dd>1行貼って起動</dd></div>
            </dl>
            <a class="btn-dark" href="#/code" data-link>Claude Codeへ</a>
          </article>
        </div>
      </div>`;

  const loadNotes = () => {
    const p = loadProgress();
    return Array.isArray(p.notes) ? p.notes : [];
  };

  const saveNotes = (notes) => {
    const p = loadProgress();
    p.notes = notes.slice(0, 80);
    saveProgress(p);
  };

  const loadFavs = () => {
    const seen = new Set();
    const favs = [];
    loadNotes().forEach((n) => {
      const key = n.pageKey;
      if (!key || seen.has(key)) return;
      seen.add(key);
      favs.push({
        id: n.id || key,
        pageKey: key,
        href: n.href || "#/",
        title: n.title || "ページ",
        at: n.at || Date.now()
      });
    });
    return favs;
  };

  const isFav = (pageKey) => loadFavs().some((n) => n.pageKey === pageKey);

  const toggleFav = (pageKey, title, href) => {
    const favs = loadFavs();
    if (favs.some((n) => n.pageKey === pageKey)) {
      saveNotes(favs.filter((n) => n.pageKey !== pageKey));
      return;
    }
    favs.unshift({
      id: pageKey,
      pageKey,
      href: href || "#/",
      title: title || "ページ",
      at: Date.now()
    });
    saveNotes(favs);
  };

  const pageFavMeta = (parts) => {
    if (parts[0] === "notes") return { key: "notes", title: "お気に入り", href: "#/notes" };
    if (parts[0] === "cert") {
      return { key: `cert/${parts[1] || ""}`, title: "修了証", href: `#/cert/${parts[1] || ""}` };
    }
    if ((parts[0] === "course" || parts[0] === "quiz") && parts[1] && CLASSROOM.courses[parts[1]]) {
      const c = CLASSROOM.courses[parts[1]];
      if (parts[0] === "quiz") {
        return { key: `quiz/${parts[1]}`, title: `${c.title}　確認クイズ`, href: `#/quiz/${parts[1]}` };
      }
      if (parts[2]) {
        const lesson = c.lessons.find((x) => x.id === parts[2]);
        return {
          key: `course/${parts[1]}/${parts[2]}`,
          title: `${c.title}　${lesson ? lesson.title : parts[2]}`,
          href: `#/course/${parts[1]}/${parts[2]}`
        };
      }
      return { key: `course/${parts[1]}`, title: c.title, href: `#/course/${parts[1]}` };
    }
    if (!parts.length) return { key: "home", title: "ホーム", href: "#/" };
    const map = {
      me: ["マイページ", "#/me"],
      howto: ["操作のしかた", "#/howto"],
      guide: ["説明資料", "#/guide"],
      chat: ["チャット", "#/chat"],
      cowork: ["Claude Cowork", "#/cowork"],
      code: ["Claude Code", "#/code"],
      beginner: ["初級編", "#/beginner"],
      applied: ["応用", "#/applied"],
      prompts: ["テキストで学ぶ", "#/prompts"],
      safety: ["安全の約束", "#/safety"]
    };
    const hit = map[parts[0]];
    if (hit) return { key: parts[0], title: hit[0], href: hit[1] };
    return { key: parts.join("/") || "page", title: "このページ", href: `#/${parts.join("/")}` };
  };

  const syncHeaderFav = (parts) => {
    const btn = document.getElementById("header-fav");
    if (!btn) return;
    const meta = pageFavMeta(parts);
    btn.hidden = false;
    btn.dataset.pageKey = meta.key;
    btn.dataset.title = meta.title;
    btn.dataset.href = meta.href;
    const on = isFav(meta.key);
    btn.classList.toggle("is-on", on);
    btn.setAttribute("aria-pressed", on ? "true" : "false");
    btn.setAttribute("aria-label", on ? "このページのお気に入りを外す" : "このページをお気に入りに追加");
    const star = btn.querySelector(".fav-star");
    const txt = btn.querySelector(".header-fav-txt");
    if (star) star.textContent = on ? "★" : "☆";
    if (txt) txt.textContent = on ? "お気に入り済み" : "お気に入り追加";
  };

  const notesView = () => {
    const favs = loadFavs();
    return `
      <div class="page">
        <p class="kicker">FAVORITES</p>
        <h1>お気に入り</h1>
        <p class="lede">右上の星で入れたページです。もう一度押すと外れます。この端末にだけ残ります。</p>
        <ul class="fav-list">
          ${
            favs.length
              ? favs
                  .map(
                    (n) => `
            <li class="fav-item">
              <a href="${escapeHtml(n.href || "#/")}" data-link>
                <span class="fav-star" aria-hidden="true">★</span>
                <strong>${escapeHtml(n.title || "ページ")}</strong>
              </a>
              <button type="button" class="fav-off" data-fav-off="${escapeHtml(n.pageKey)}" aria-label="${escapeHtml(n.title || "ページ")}のお気に入りを外す">★ 外す</button>
            </li>`
                  )
                  .join("")
              : `<li class="fav-empty">まだありません。右上の「お気に入り追加」を押すと入ります。</li>`
          }
        </ul>
        <p><a class="btn-orange" href="#/" data-link>ホームへ</a></p>
      </div>`;
  };

  const bindNotes = () => {
    document.querySelectorAll("[data-fav-off]").forEach((btn) => {
      btn.onclick = () => {
        const key = btn.getAttribute("data-fav-off");
        saveNotes(loadFavs().filter((n) => n.pageKey !== key));
        render({ keepScroll: true });
      };
    });
    const headerFav = document.getElementById("header-fav");
    if (headerFav) {
      headerFav.onclick = () => {
        if (headerFav.hidden) return;
        toggleFav(headerFav.dataset.pageKey || "page", headerFav.dataset.title || "ページ", headerFav.dataset.href || "#/");
        render({ keepScroll: true });
      };
    }
  };

  const kickerJa = (raw) => {
    const k = String(raw).replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
    const table = {
      "TODAY'S CLASS": "きょうの教室",
      COURSE: "講座",
      QUIZ: "確認クイズ",
      SAFETY: "安全",
      "HOW TO": "操作のしかた",
      GOAL: "今日のゴール",
      WHAT: "これは何？",
      COMPARE: "くらべる",
      "CAN DO": "できること",
      MAP: "全体の地図",
      THEME: "今日の題材",
      SETUP: "準備",
      TIPS: "コツ",
      PLACE: "場所の伝え方",
      "Q&A": "よくある質問",
      SUMMARY: "まとめ",
      CHECK: "始める前に",
      WORDS: "ことば",
      FLOW: "流れ",
      OPTIONAL: "やらなくてもよい",
      TROUBLE: "うまくいかないとき",
      NOTES: "注意",
      BASIC: "きほんのことば",
      MODES: "3つの使い方",
      EXAMPLE: "たとえ",
      WORK: "やってみる",
      TALK: "頼み方",
      HOW: "やり方",
      KEYWORD: "キーワード",
      START: "はじめ方",
      RECAP: "ふりかえり",
      AIM: "この講座のねらい",
      COPY: "貼る文",
      CANVA: "Canvaで仕上げる",
      FREE: "無料プラン",
      PLAN: "有料プラン",
      SCREEN: "画面",
      TRY: "やってみる",
      MAC: "Mac",
      WINDOWS: "Windows",
      PASTE: "貼り付け",
      COMMAND: "コマンド",
      LOGIN: "ログイン",
      NETWORK: "ネット"
    };
    if (table[k]) return table[k];
    const step = k.match(/^STEP\s*(\d+)$/i);
    if (step) return `手順 ${step[1]}`;
    const pat = k.match(/^PATTERN\s*(\d+)$/i);
    if (pat) return `よく使う編集 ${pat[1]}`;
    const applied = k.match(/^APPLIED\s*(\d+)$/i);
    if (applied) return `応用 ${applied[1]}`;
    const cat = k.match(/^CATEGORY\s*(\d+)$/i);
    if (cat) return `できること ${cat[1]}`;
    if (/^DEEP DIVE/i.test(k)) return "もう少し詳しく";
    return k;
  };

  const easyKickers = (html) =>
    html.replace(/<p class="kicker">([\s\S]*?)<\/p>/g, (_, raw) => `<p class="kicker">${kickerJa(raw)}</p>`);

  const COURSE_ART = {
    cowork: ["cowork", "画面でお願いして、ファイルまで仕上げる"],
    code: ["powershell", "黒い画面に1行貼って進める"],
    poster: ["poster", "A4縦の求人ポスターを1枚"],
    intro: ["desktop", "日本語でお願いして作る"],
    secretary: ["secretary", "予定・メモ・振り返り"],
    appedit: ["mouse", "日本語で画面を直す"],
    invoice: ["invoice", "リストから1社1PDF"],
    expense: ["expense", "レシートを仕分けて集計"],
    crm: ["crm", "顧客と案件を一覧で"],
    shop: ["shop", "紹介ページと予約フォーム"],
    survey: ["survey", "回答をグラフにする"],
    abc: ["abc", "大きい順に A・B・C"],
    sns: ["sns", "伸びた投稿の共通点を見る"],
    snspost: ["snspost", "ネタから複数案。出す前は自分で"],
    applied: ["desktop", "一度決めたら、次からラク"],
    account: ["signup", "claude.ai で登録して、プランを確認"],
    webchat: ["webchat", "下の入力欄に書いて送る"],
    codemac: ["terminal", "Macのターミナルに1行貼る"],
    faq: ["quiz", "止まっている症状から選ぶ"],
    portalmake: ["cowork", "話しかけるだけで社内ポータル"],
    portalfix: ["mouse", "同じ会話の続きで直す"],
    attend: ["calendar", "ボタンを押すだけの出退勤"]
  };

  const LESSON_ART = {
    compare: ["compare", "チャットは相談、Coworkは作業"],
    what: ["cowork", "左メニューの Cowork を選ぶ"],
    goal: ["cowork", "任せて、ラクをする"],
    cando: ["cowork", "資料・整理・連携・定期実行"],
    map: ["cowork", "できることはこの4つ"],
    docs: ["docs", "要点を渡してドラフト"],
    finance: ["docs", "試算表から財務資料へ"],
    files: ["folder", "フォルダを種類ごとに整理"],
    apps: ["mail", "下書きまで。送信はしない"],
    schedule: ["calendar", "毎月1日などに予約する"],
    briefing: ["briefing", "毎朝1分で読めるまとめ"],
    theme: ["check", "まずは1社ぶんから"],
    step1: ["invoice", "1社の請求書から試す"],
    step2: ["expense", "経費を科目ごとにまとめる"],
    step3: ["calendar", "手順を保存して毎月使う"],
    tips: ["copy", "ゴール・素材・形式を伝える"],
    safety: ["safety", "送る前は自分の目で確認"],
    trouble: ["chat", "エラー文をそのまま伝える"],
    summary: ["check", "小さく試してから広げる"],
    words: ["folder", "ひな形・差し込み・リスト"],
    setup: ["desktop", "パソコンでフォルダを接続"],
    flow: ["desktop", "順番にひとつずつ"],
    gitwin: ["git", "変更の履歴が残る"],
    prep: ["desktop", "準備ができているか確認"],
    start: ["start", "スタートから PowerShell"],
    prompt: ["chat", "枠の文をそのまま貼る"],
    notes: ["poster", "お手本は1枚だけ"],
    design: ["poster", "色は3色、言いたいことは1つ"],
    canva: ["canva", "保存してから Canva で開く"],
    vibe: ["desktop", "作って → 見て → 直す"],
    talk: ["chat", "ゴールを先に、具体的に"],
    modes: ["compare", "チャット・Cowork・Code"],
    recap: ["check", "次の一歩は小さく"],
    aim: ["desktop", "自分仕様に育てる"],
    themes: ["compare", "6つのテーマ"],
    claudemd: ["docs", "取扱説明書を1枚"],
    skills: ["copy", "いつもの手順をコマンドに"],
    rules: ["safety", "やってはいけないことを先に"],
    commands: ["powershell", "/help と /config"],
    stages: ["desktop", "段階で止めて確認"],
    gituse: ["git", "こまめに保存して戻せる"],
    connect: ["excel", "今あるサービスとつなぐ"],
    deepen: ["chat", "役割・制約・形式を添える"],
    stuck: ["chat", "エラー文をそのまま伝える"],
    guard: ["safety", "送る・消す・公開は確認してから"],
    wrap: ["check", "まずは CLAUDE.md から"],
    make: ["desktop", "日本語でお願いして作る"],
    job: ["secretary", "自分の仕事に置き換える"],
    tools: ["powershell", "黒い画面が作業場"],
    promptwork: ["copy", "コピーして自分の画面に貼る"],
    appeal: ["poster", "電話と住所は大きく"],
    step4: ["browser", "ブラウザでログイン・公開"],
    step5: ["canva", "保存してから仕上げ"],
    step6: ["browser", "公開してスマホで見る"],
    step9: ["check", "誤字・電話・住所を確認"]
  };

  const GENERIC_LESSON = {
    goal: true,
    what: true,
    words: true,
    setup: true,
    flow: true,
    summary: true,
    safety: true,
    trouble: true
  };

  const artFor = (courseId, lessonId) => {
    if (courseId === "faq") {
      const t = {
        map: ["quiz", "症状からページを選ぶ"],
        ps: ["powershell", "行頭が PS ならOK"],
        paste: ["copy", "貼る欄をクリックしてから"],
        notfound: ["powershell", "窓を閉じて開き直す"],
        login: ["plan", "有料プランの同じメールか"],
        macfail: ["terminal", "赤い丸・黄・緑の窓"],
        coworkmiss: ["cowork", "アプリの左メニュー"],
        net: ["safety", "社内ルールを優先"],
        summary: ["check", "エラー文を残す"]
      };
      return t[lessonId] || ["quiz", "つまずき一覧"];
    }
    if (courseId === "account") {
      const t = {
        goal: ["signup", "ブラウザで claude.ai"],
        open: ["browser", "アドレス欄に claude.ai"],
        signup: ["signup", "Google かメールで続ける"],
        free: ["webchat", "無料でも会話は始められる"],
        plan: ["plan", "設定からプランを開く"],
        check: ["check", "Pro などと出ていればOK"],
        summary: ["webchat", "次はチャット入門"]
      };
      return t[lessonId] || COURSE_ART.account;
    }
    if (courseId === "webchat") {
      const t = {
        goal: ["webchat", "日本語で1回、返事をもらう"],
        open: ["webchat", "下が入力欄"],
        ask: ["copy", "コピーして貼って送る"],
        copy: ["copy", "Ctrl＋V または ⌘＋V"],
        vs: ["compare", "相談はチャット、作業はCowork"],
        safety: ["safety", "パスワードは書かない"],
        summary: ["cowork", "次は Cowork"]
      };
      return t[lessonId] || COURSE_ART.webchat;
    }
    if (courseId === "codemac") {
      const t = {
        goal: ["mac", "Macの人向けです"],
        what: ["terminal", "赤い丸・黄・緑があればターミナル"],
        prep: ["check", "有料プランとネット"],
        open: ["mac", "⌘＋スペースでターミナル"],
        install: ["copy", "1行貼って Enter"],
        login: ["terminal", "claude と打つ"],
        check: ["check", "version が出れば成功"],
        summary: ["compare", "WindowsはPowerShellへ"]
      };
      return t[lessonId] || COURSE_ART.codemac;
    }
    if (courseId === "portalmake") {
      const t = {
        goal: ["cowork", "作る・確かめる・見せる"],
        what: ["compare", "チャットは相談、Coworkは作業"],
        image: ["portalpage", "お知らせ・予定・リンク・連絡先"],
        flow: ["desktop", "開く → 頼む → 確かめる → 渡す"],
        open: ["cowork", "パソコンのアプリで Cowork"],
        ask: ["copy", "見本文を貼って送る"],
        tips: ["copy", "誰が・何を・どんな感じで"],
        answer: ["chat", "分からなければおまかせ"],
        share: ["portalpage", "見てからリンクを渡す"],
        trouble: ["quiz", "アプリ側か、文を貼り直すか"],
        safety: ["safety", "個人情報は載せない"],
        practice: ["cowork", "20分で1ページ"],
        summary: ["check", "Cowork・貼る・見てから渡す"]
      };
      return t[lessonId] || COURSE_ART.portalmake;
    }
    if (courseId === "portalfix") {
      const t = {
        prep: ["folder", "リンクと、作ったときの会話"],
        goal: ["mouse", "足す・変える・消す／戻す"],
        what: ["chat", "話しかけるだけで直る"],
        flow: ["copy", "同じ会話の続きに書く"],
        promptwork: ["copy", "やりたいことを一文で"],
        tips: ["copy", "どこを・前と後をはっきり"],
        later: ["site", "見つからなければリンクを貼る"],
        trouble: ["quiz", "再読み込みしてから言い直す"],
        safety: ["safety", "直したら自分の目で"],
        practice: ["mouse", "足す・変える・見た目・戻す"],
        summary: ["check", "続き・具体・再読み込み"]
      };
      return t[lessonId] || COURSE_ART.portalfix;
    }
    if (courseId === "attend") {
      const t = {
        goal: ["calendar", "作る・記録する・集計する"],
        image: ["site", "名前を選んでボタンを押す"],
        vs: ["compare", "みんなで書き込むから保存が大事"],
        flow: ["desktop", "作って、試して、使い始める"],
        prep: ["folder", "誰が・何を押す・月末に何が欲しい"],
        ask: ["copy", "全員分を保存して消えないように"],
        answer: ["chat", "分からなければおまかせ"],
        check: ["check", "押し直しても記録が残るか"],
        share: ["browser", "共有して、最初は並行運用"],
        excel: ["excel", "月末は話しかけるか、Excelで出す"],
        tips: ["copy", "名前の追加も押し忘れも一文で"],
        safety: ["safety", "名前だけ。控えは社内に"],
        practice: ["calendar", "作る・テスト・直す・集計"],
        summary: ["check", "保存・テスト・Excel"]
      };
      return t[lessonId] || COURSE_ART.attend;
    }
    if (courseId === "appedit") {
      const t = {
        goal: ["mouse", "コードを書かず、対話で直す"],
        cando: ["desktop", "文字・見た目・部品"],
        words: ["check", "見て・頼んで・戻せる"],
        flow: ["copy", "小さく直して確認する"],
        text: ["copy", "〜を〜に、と頼む"],
        parts: ["check", "部品もスマホもお願いだけ"],
        where: ["mouse", "画面の言葉で指す"],
        tips: ["copy", "違ったら戻せばいい"],
        safety: ["safety", "直す前に保存する"],
        trouble: ["quiz", "状況をそのまま渡す"],
        summary: ["check", "まずは文字をひとつ"]
      };
      return t[lessonId] || COURSE_ART.appedit;
    }
    if (lessonId === "safety") return ["safety", "送る・消す・公開の前は、自分の目で"];
    if (lessonId === "trouble") return ["chat", "エラー文をそのまま伝える"];
    if (lessonId === "summary" || lessonId === "recap" || lessonId === "wrap") return ["check", "できたことを確認して、次は小さく"];
    if (lessonId === "setup" || lessonId === "prep") return ["desktop", "まずは自分のパソコンで準備"];
    if (lessonId === "flow") return ["site", "上から順に、ひとつずつ"];
    if (courseId === "code" && lessonId === "step1") return ["start", "スタートから PowerShell"];
    if (courseId === "code" && lessonId === "step2") return ["copy", "1行を貼って Enter"];
    if (courseId === "code" && lessonId === "step3") return ["browser", "ブラウザでログイン"];
    if (courseId === "code" && lessonId === "step4") return ["desktop", "モデルと権限を決める"];
    if (courseId === "poster" && lessonId === "step1") return ["pinterest", "お手本画像を保存"];
    if (courseId === "poster" && lessonId === "step2") return ["chat", "ことばを考える係"];
    if (courseId === "cowork" && lessonId === "step1") return ["invoice", "1社の請求書から試す"];
    if (courseId === "cowork" && lessonId === "step2") return ["expense", "経費を科目ごとにまとめる"];
    if (courseId === "secretary" && lessonId === "step1") return ["secretary", "予定・メモ・振り返り"];
    if (courseId === "secretary" && lessonId === "step4") return ["git", "GitHubに保存する"];
    if (courseId === "secretary" && lessonId === "step5") return ["browser", "公開してスマホで見る"];
    if (courseId === "poster" && lessonId === "step5") return ["canva", "Canvaで文字を直す"];
    if (
      ["invoice", "expense", "crm", "shop", "survey", "abc", "sns", "snspost"].includes(courseId) &&
      /^step/.test(lessonId || "") &&
      COURSE_ART[courseId]
    ) {
      return COURSE_ART[courseId];
    }
    if (lessonId && LESSON_ART[lessonId] && !GENERIC_LESSON[lessonId]) return LESSON_ART[lessonId];
    if (COURSE_ART[courseId]) return COURSE_ART[courseId];
    if (lessonId && LESSON_ART[lessonId]) return LESSON_ART[lessonId];
    return ["mouse", "オレンジのボタンを左クリック"];
  };

  const pickOpPic = (text) => {
    if (/ターミナル|Mac|Spotlight/.test(text)) return "terminal";
    if (/プラン|有料|Upgrade/.test(text)) return "plan";
    if (/アカウント|登録|Google で/.test(text)) return "signup";
    if (/チャット|入力欄/.test(text)) return "webchat";
    if (/コピー|貼/.test(text)) return "copy";
    if (/フォルダ|材料|リスト|ひな形/.test(text)) return "folder";
    if (/確認|金額|検品|指差/.test(text)) return "check";
    if (/ログイン|ブラウザ|公開/.test(text)) return "browser";
    if (/Git/.test(text)) return "git";
    if (/Cowork/.test(text)) return "cowork";
    if (/クイズ/.test(text)) return "quiz";
    if (/安全|機密|渡さ/.test(text)) return "safety";
    if (/カレンダー|毎月|予約/.test(text)) return "calendar";
    if (/メール|下書き/.test(text)) return "mail";
    if (/Excel|表|CSV/.test(text)) return "excel";
    if (/Canva/.test(text)) return "canva";
    if (/Pinterest/.test(text)) return "pinterest";
    if (/ポスター/.test(text)) return "poster";
    if (/請求/.test(text)) return "invoice";
    if (/経費|レシート/.test(text)) return "expense";
    if (/手順|流れ|ステップ|上から|順/.test(text)) return "steps";
    if (/読んだ|完了|ハンコ/.test(text)) return "done";
    if (/お願い|プロンプト|ことば|話す|頼み/.test(text)) return "chat";
    if (/全体|地図|テーマ|くらべ/.test(text)) return "compare";
    if (/まとめ|ふりかえ|できた/.test(text)) return "check";
    if (/秘書/.test(text)) return "secretary";
    if (/SNS|投稿/.test(text)) return "sns";
    if (/店舗|予約/.test(text)) return "shop";
    if (/集計|グラフ/.test(text)) return "survey";
    if (/ABC/.test(text)) return "abc";
    if (/CRM|顧客/.test(text)) return "crm";
    return "mouse";
  };

  const coverArt = (name) => {
    const svg = window.ILLUSTRATIONS && window.ILLUSTRATIONS[name];
    if (!svg) return "";
    const decorative = svg.replace(/\srole="img"/g, "").replace(/\saria-label="[^"]*"/g, "");
    return `<div class="cover-art" aria-hidden="true">${decorative}</div>`;
  };

  const progChip = (href, mark, name, p) => `
            <a class="prog-chip" href="${href}" data-link>
              <span class="prog-mark">${mark}</span>
              <span class="prog-body">
                <span class="prog-name">${name}</span>
                <span class="prog-bar" aria-hidden="true"><span style="--p:${p}%"></span></span>
              </span>
              <span class="prog-pct">${p}<small>%</small></span>
              <span class="prog-stamp">${p >= 100 ? "できた" : p > 0 ? "いいね" : "これから"}</span>
            </a>`;

  const textLink = (href, cap) =>
    `<a href="${href}" data-link>${cap}</a>`;

  const coverCard = (href, cover, tag, title, small, cap, pic) => `
          <a class="cover-card" href="${href}" data-link>
            <div class="cover ${cover}">
              ${pic ? coverArt(pic) : ""}
              <span class="tag">${tag}</span>
            </div>
            <h3>${title}</h3>
            <p>${small}　${cap}</p>
          </a>`;

  const dailyCatch = () => {
    const lines = [
      "一歩ずつ、できることが増えていく。",
      "小さな「できた」を、積み重ねる。",
      "ひとつずつ、確かに前へ。",
      "ゆっくりでも、前に進んでる。",
      "あせらず、1ページずつ。",
      "今日の1ページが、明日のラクにつながる。",
      "むずかしくない。1ページ進めばいい。",
      "ちいさな一歩が、いちばんの近道。",
      "進むって、たのしい。",
      "1ページ、また前へ。"
    ];
    const now = new Date();
    const key = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    let h = 0;
    for (let i = 0; i < key.length; i++) h = (h * 33 + key.charCodeAt(i)) >>> 0;
    const line = lines[h % lines.length];
    const cut = line.indexOf("。");
    if (cut >= 0 && cut < line.length - 1) {
      return `${escapeHtml(line.slice(0, cut + 1))}<br />${escapeHtml(line.slice(cut + 1))}`;
    }
    return escapeHtml(line);
  };

  const dailyTip = () => {
    const tips = [
      "1ページだけ読めば、今日は合格です。",
      "わからなくても大丈夫。下のボタンで次へ進めます。",
      "コピーして貼るだけ。自分で全部書かなくていいです。",
      "迷ったらポスターから。いちばんやさしい入口です。",
      "読んだら「このページを読んだ」を押すと、ハンコが色づきます。",
      "クイズは何度でもやり直せます。満点じゃなくてOK。",
      "送る前のチェックだけは、自分の目で。"
    ];
    return tips[new Date().getDay() % tips.length];
  };

  const stampBook = (ids) => {
    const list = ids || HOME_ORDER;
    return `
      <ul class="stamp-grid">
        ${list
          .map((id) => {
            if (!CLASSROOM.courses[id]) return "";
            const [name, face] = STAMP_LABELS[id] || [id, "📘"];
            const p = percent(id);
            const state = p >= 100 ? "is-done" : p > 0 ? "is-now" : "is-todo";
            const mark = !canSeeCourse(id) ? "🔒" : p >= 100 ? "💮" : p > 0 ? "🔥" : face;
            const href = canSeeCourse(id) ? `#/course/${id}` : "#/me";
            return `<li class="stamp ${canSeeCourse(id) ? state : "is-locked"}">
              <a href="${href}" data-link>
                <span class="face">${mark}</span>
                ${name}<br /><small>${p >= 100 ? "完了" : p > 0 ? "学習中" : "これから"} ${p}%</small>
              </a>
            </li>`;
          })
          .join("")}
      </ul>`;
  };

  const cardsFor = (ids) =>
    ids
      .filter((id) => CLASSROOM.courses[id] && COURSE_META[id])
      .map((id) => {
        const course = CLASSROOM.courses[id];
        const [cover, label, blurb, pic] = COURSE_META[id];
        return classCard(
          `#/course/${id}`,
          cover,
          label,
          course.title,
          `レッスン${course.lessons.length}本 ／ ${course.duration}`,
          blurb,
          percent(id),
          pic
        );
      })
      .join("");

  const laneView = (tool, opts = {}) => {
    const isCowork = tool === "cowork";
    const setupIds = isCowork ? COWORK_IDS : CODE_SETUP_IDS;
    const makeIds = isCowork ? [] : CODE_MAKE_IDS;
    const ids = opts.appliedOnly ? makeIds : setupIds.concat(makeIds);
    const stats = courseStats(ids);
    const firstId = ids.find((id) => CLASSROOM.courses[id] && percent(id) < 100) || ids[0];
    return `
      <div class="page track-page ${isCowork ? "is-cowork-page" : "is-code-page"}">
        <p class="kicker">${isCowork ? "COWORK" : "CLAUDE CODE"}</p>
        <h1>${isCowork ? "Claude Cowork" : "Claude Code"}</h1>
        ${figureHTML(
          isCowork ? "cowork" : "powershell",
          isCowork ? "左メニューで Cowork。ファイルまで仕上げる" : "黒い画面に1行貼って、道具をつくる"
        )}
        <p class="lede">${
          isCowork
            ? "チャットではなく Cowork を選びます。資料・整理・請求書など、事務を日本語で任せます。PowerShellは使いません。"
            : opts.appliedOnly
              ? "人気順ではありません。かんたんに作れる順です。いちばんやさしいのは投稿文。つづきは集計・経費・請求書、分析、サイト、秘書、最後に使いこなしです。"
              : "PowerShell（黒い画面）を使います。インストール → 道具づくり、の順です。事務作業は Cowork へ。"
        }</p>
        <p class="easy-meta">進度 ${stats.overall}%　読んだ ${stats.done} / ${stats.total}</p>
        <div class="meter" aria-label="このレーンの進度"><span style="--p:${stats.overall}%"></span></div>
        <p>
          <a class="btn-orange" href="#/course/${firstId}" data-link>${isCowork ? "1つ目から始める" : "Codeの1つ目から"}</a>
          <a class="btn-dark" href="#/${isCowork ? "code" : "cowork"}" data-link>${isCowork ? "Claude Codeを見る" : "Coworkを見る"}</a>
        </p>
        ${
          isCowork
            ? `<div class="section-head"><h2>講座</h2></div>
        ${stampBook(COWORK_IDS)}
        <div class="course-grid">${cardsFor(COWORK_IDS)}</div>`
            : opts.appliedOnly
              ? `<div class="section-head"><h2>応用のスタンプ</h2></div>
        ${stampBook(CODE_MAKE_IDS)}
        <div class="section-head"><h2>かんたんに作れる順</h2></div>
        <div class="course-grid">${cardsFor(CODE_MAKE_IDS)}</div>`
              : `<div class="section-head"><h2>初級（準備）</h2></div>
        ${stampBook(CODE_SETUP_IDS)}
        <div class="course-grid">${cardsFor(CODE_SETUP_IDS)}</div>
        <div class="section-head"><h2>道具づくり（かんたんに作れる順）</h2></div>
        ${stampBook(CODE_MAKE_IDS)}
        <div class="course-grid">${cardsFor(CODE_MAKE_IDS)}</div>`
        }
      </div>
    `;
  };

  const trackView = (level) => {
    if (level === "applied") return laneView("code", { appliedOnly: true });
    return `
      <div class="page track-page">
        <p class="kicker">BEGINNER</p>
        <h1>初級編</h1>
        ${compareTableHTML()}
        <p class="lede">同じClaudeでも、入り口が違います。下の2つから選びます。</p>
        <div class="level-gates">
          <a class="level-gate is-cowork${canSeeCourse("cowork") ? "" : " is-locked"}" href="${canSeeCourse("cowork") ? "#/cowork" : "#/me"}" data-link>
            ${coverArt("cowork")}
            <span class="level-tag">事務・ファイル</span>
            <h2>Claude Cowork</h2>
            <p>${canSeeCourse("cowork") ? "画面で日本語のお願い。黒い画面は使いません。" : "受講コードが必要です。"}</p>
          </a>
          <a class="level-gate is-code${canSeeCourse("code") ? "" : " is-locked"}" href="${canSeeCourse("code") ? "#/code" : "#/me"}" data-link>
            ${coverArt("powershell")}
            <span class="level-tag">道具づくり</span>
            <h2>Claude Code</h2>
            <p>${canSeeCourse("code") ? "PowerShellに1行貼って、自分の道具を作ります。" : "受講コードが必要です。"}</p>
          </a>
        </div>
        <div class="section-head"><h2>はじめて（どちらも共通）</h2></div>
        <div class="course-grid">${cardsFor(["account", "poster", "faq"])}</div>
      </div>`;
  };

  const classCard = (href, cover, label, title, meta, blurb, p, pic) => {
    const id = (href.match(/#\/course\/([^/?#]+)/) || [])[1];
    const tool = id ? toolOf(id) : "";
    const locked = id && !canSeeCourse(id);
    const chip =
      tool === "cowork"
        ? `<span class="tool-chip is-cowork">Cowork</span>`
        : tool === "code"
          ? `<span class="tool-chip is-code">Claude Code</span>`
          : id
            ? `<span class="tool-chip is-starter">はじめて</span>`
            : "";
    if (locked) {
      return `
          <a class="class-card is-locked" href="#/me" data-link>
            <div class="cover ${cover}">${pic ? coverArt(pic) : `<strong>${label}</strong>`}</div>
            <div class="class-body">
              ${chip}
              <span class="st-chip is-todo">鍵</span>
              <h3>${title}</h3>
              <p class="card-meta">受講コードが必要です</p>
            </div>
          </a>`;
    }
    return `
          <a class="class-card ${p >= 100 ? "is-complete" : p > 0 ? "is-going" : "is-fresh"}" href="${href}" data-link>
            <div class="cover ${cover}">${pic ? coverArt(pic) : `<strong>${label}</strong>`}</div>
            <div class="class-body">
              ${chip}
              ${p == null ? "" : statusChip(courseKind(p))}
              <h3>${title}</h3>
              <p class="card-meta">${meta}${p == null ? "" : `　進度 ${p}%`}</p>
              <p class="card-blurb desk-only">${blurb}</p>
              ${p == null ? "" : thinMeter(p)}
            </div>
          </a>`;
  };

  const projTile = (href, tone, kicker, title, text, pic) => `
          <a class="proj-tile tone-${tone}" href="${href}" data-link>
            <span class="proj-kicker">${kicker}</span>
            <h3>${title}</h3>
            <p>${text}</p>
            <div class="proj-art">${coverArt(pic)}</div>
          </a>`;

  const studioPath = () => {
    const items = [
      ["account", "01", "アカウント", "準備"],
      ["webchat", "02", "チャット", "入門"],
      ["poster", "03", "ポスター", "初級"],
      ["cowork", "04", "Cowork", "事務"],
      ["portalmake", "05", "ポータル", "作る"],
      ["portalfix", "06", "直す", "Cowork"],
      ["attend", "07", "出退勤", "作る"],
      ["code", "08", "Windows", "準備"],
      ["codemac", "09", "Mac", "準備"],
      ["snspost", "10", "投稿文", "やさしい"],
      ["survey", "11", "集計", "やさしい"],
      ["expense", "12", "経費", "作る"],
      ["invoice", "13", "請求書", "作る"],
      ["abc", "14", "ABC", "分析"],
      ["sns", "15", "SNS", "分析"],
      ["crm", "16", "CRM", "作る"],
      ["shop", "17", "店舗", "公開"],
      ["secretary", "18", "秘書", "実践"],
      ["appedit", "19", "画面", "直す"],
      ["applied", "20", "使いこなし", "中級"],
      ["faq", "21", "つまずき", "補助"]
    ];
    return `
      <ol class="studio-path">
        ${items
          .map(([id, num, name, tag]) => {
            const p = percent(id);
            const state = p >= 100 ? "is-done" : p > 0 ? "is-now" : "is-todo";
            const pic = (COURSE_ART[id] || ["desktop"])[0];
            return `<li class="path-node ${state}">
              <a href="#/course/${id}" data-link>
                <span class="path-art">${coverArt(pic)}</span>
                <span class="path-rank">${num.replace(/^0/, "")}</span>
                <span class="path-num">${tag}</span>
                <strong>${name}</strong>
                <small>${p}%</small>
                <span class="path-meter" aria-hidden="true"><span style="--p:${p}%"></span></span>
              </a>
            </li>`;
          })
          .join("")}
      </ol>`;
  };

  const home = () => {
    const stats = courseStats();
    const coworkStats = courseStats(COWORK_IDS);
    const codeStats = courseStats(CODE_IDS);
    const next = nextRecommended();
    const started = continueStudy();
    const ctaHref = started ? started.href : next.href;
    const ctaLabel = started ? "続きを開く" : "アカウントから始める";
    const nextTitle =
      next.kind === "quiz"
        ? `${escapeHtml(next.course.title)}　確認クイズ`
        : next.lesson
          ? `${escapeHtml(next.course.title)}　${escapeHtml(next.lesson.title)}`
          : escapeHtml(next.course.title);
    return `
      <section class="fun-sky">
        <span class="fun-blob b1"></span>
        <span class="fun-blob b2"></span>
        <span class="fun-blob b3"></span>
        <span class="fun-blob b4"></span>
        <span class="fun-blob b5"></span>
        <span class="fun-sticker s1">⭐</span>
        <span class="fun-sticker s2">✏️</span>
        <span class="fun-sticker s3">📘</span>
        <div class="wrap fun-hero">
          <div class="fun-copy">
            <p class="fun-kicker">きょうのひとこと</p>
            <p class="member-hello">${escapeHtml(helloLine())}</p>
            <h1>${dailyCatch()}</h1>
            <p class="fun-lead">${dailyTip()} 迷ったら右のカードの「つづき」を押してください。</p>
            <div class="fun-actions">
              <a class="btn-orange" href="${ctaHref}" data-link>${ctaLabel}</a>
              <a class="btn-dark" href="#/guide" data-link>説明資料</a>
            </div>
          </div>
          <aside class="fun-board">
            <div class="fun-stats">
              ${progressRing(stats.overall)}
              <div class="stat-pills">
                <div class="stat-pill">Cowork<b>${coworkStats.overall}%</b></div>
                <div class="stat-pill">Claude Code<b>${codeStats.overall}%</b></div>
                <div class="stat-pill">全体の進度<b>${stats.overall}%</b></div>
              </div>
            </div>
            ${thinMeter(stats.overall, "hero-meter", "全体の進度")}
            <div class="mission">
              <small>きょうのミッション</small>
              <strong>${nextTitle}</strong>
              <a class="btn-orange" href="${ctaHref}" data-link>これだけやる</a>
            </div>
          </aside>
        </div>
        ${compareTableHTML()}
        <div class="ticker" aria-hidden="true">
          <div class="ticker-track">
            <span>💮 読んだらハンコ　⭐ 1日1ページでOK　🔥 途中の講座はオレンジ　✏️ コピーして貼るだけ　📘 クイズは何度でも　</span>
            <span>💮 読んだらハンコ　⭐ 1日1ページでOK　🔥 途中の講座はオレンジ　✏️ コピーして貼るだけ　📘 クイズは何度でも　</span>
          </div>
        </div>
      </section>
      <section class="hero-stage">
        <div class="wrap level-gates">
          <a class="level-gate is-cowork${canSeeCourse("cowork") ? "" : " is-locked"}" href="${canSeeCourse("cowork") ? "#/cowork" : "#/me"}" data-link>
            ${coverArt("cowork")}
            <span class="level-tag">事務・ファイル</span>
            <h2>Claude Cowork</h2>
            <p>${canSeeCourse("cowork") ? "画面で日本語のお願い。黒い画面は使いません。" : "受講コードが必要です。"}</p>
            <strong>進度 ${coworkStats.overall}%</strong>
            <span class="meter"><span style="--p:${coworkStats.overall}%"></span></span>
          </a>
          <a class="level-gate is-code${canSeeCourse("code") ? "" : " is-locked"}" href="${canSeeCourse("code") ? "#/code" : "#/me"}" data-link>
            ${coverArt("powershell")}
            <span class="level-tag">道具づくり</span>
            <h2>Claude Code</h2>
            <p>${canSeeCourse("code") ? "PowerShellに1行貼って、自分の仕事用の道具を作ります。" : "受講コードが必要です。"}</p>
            <strong>進度 ${codeStats.overall}%</strong>
            <span class="meter"><span style="--p:${codeStats.overall}%"></span></span>
          </a>
        </div>
      </section>
      <div class="page">
        ${phonePicks()}
        <section class="stamp-sec">
          <div class="section-head">
            <h2>はじめて（準備）</h2>
            <a href="#/course/faq" data-link>つまずき一覧 →</a>
          </div>
          <div class="course-grid">${cardsFor(["account", "poster", "faq"])}</div>
        </section>
        <section class="stamp-sec lane lane-cowork">
          <div class="section-head">
            <h2>Coworkのスタンプ</h2>
            <a href="#/cowork" data-link>Coworkへ →</a>
          </div>
          ${stampBook(COWORK_IDS)}
        </section>
        <section class="stamp-sec lane lane-code">
          <div class="section-head">
            <h2>Claude Codeのスタンプ</h2>
            <a href="#/code" data-link>Claude Codeへ →</a>
          </div>
          ${stampBook(CODE_IDS)}
        </section>
        <section class="route-sec">
          <div class="section-head">
            <h2>迷ったときの進み方</h2>
            <a href="#/guide" data-link>説明資料 →</a>
          </div>
          <p class="route-lead">人気ランキングではありません。上は事務、下は道具づくり。どちらか一方の道で大丈夫です。</p>
          <h3 class="route-lane-title">事務の道（Claude Cowork）</h3>
          <p class="easy-meta">画面で日本語のお願い。黒い画面は使いません。左から右へ、この順です。</p>
          <p class="route-hint phone-only">横にスワイプできます（自動でも進みます）</p>
          <div class="route">
            <a class="route-card" href="#/course/account" data-link>
              ${coverArt("signup")}
              <strong>1. 準備　アカウント</strong>
              <p>claude.ai に入る</p>
            </a>
            <span class="route-arrow" aria-hidden="true">→</span>
            <a class="route-card" href="#/course/webchat" data-link>
              ${coverArt("webchat")}
              <strong>2. 練習　チャット</strong>
              <p>ブラウザで1回頼む</p>
            </a>
            <span class="route-arrow" aria-hidden="true">→</span>
            <a class="route-card" href="#/course/poster" data-link>
              ${coverArt("poster")}
              <strong>3. 練習　ポスター</strong>
              <p>いちばんやさしい課題</p>
            </a>
            <span class="route-arrow" aria-hidden="true">→</span>
            <a class="route-card" href="#/course/cowork" data-link>
              ${coverArt("cowork")}
              <strong>4. 本番　Cowork</strong>
              <p>事務を日本語で任せる</p>
            </a>
          </div>
          <h3 class="route-lane-title">道具づくりの道（Claude Code）</h3>
          <p class="easy-meta">WindowsとMacは両方やらなくてよいです。自分のパソコンだけ準備して、そのあとやさしい道具から作ります。</p>
          <p class="route-hint phone-only">横にスワイプできます（自動でも進みます）</p>
          <div class="route">
            <a class="route-card" href="#/course/code" data-link>
              ${coverArt("powershell")}
              <strong>Windowsの人</strong>
              <p>PowerShellに1行貼る</p>
            </a>
            <span class="route-or">または</span>
            <a class="route-card" href="#/course/codemac" data-link>
              ${coverArt("terminal")}
              <strong>Macの人</strong>
              <p>ターミナルに1行貼る</p>
            </a>
            <span class="route-arrow" aria-hidden="true">→</span>
            <a class="route-card" href="#/course/snspost" data-link>
              ${coverArt("sns")}
              <strong>最初の道具　投稿文</strong>
              <p>準備のあと、いちばんかんたん</p>
            </a>
            <span class="route-arrow" aria-hidden="true">→</span>
            <a class="route-card" href="#/applied" data-link>
              ${coverArt("desktop")}
              <strong>つづきはかんたん順</strong>
              <p>集計→経費→請求書…と続く</p>
            </a>
          </div>
        </section>
        <div class="desk-catalog">
        <div class="lane lane-cowork">
        <div class="section-head">
          <h2>Claude Cowork</h2>
          <a href="#/cowork" data-link>一覧へ →</a>
        </div>
        <div class="course-grid">${cardsFor(COWORK_IDS)}</div>
        </div>
        <div class="lane lane-code">
        <div class="section-head">
          <h2>Claude Code（準備）</h2>
          <a href="#/code" data-link>一覧へ →</a>
        </div>
        <div class="course-grid">${cardsFor(CODE_SETUP_IDS)}</div>
        </div>
        <div class="lane lane-code">
        <div class="section-head">
          <h2>Claude Codeで作る道具（かんたん順）</h2>
          <a href="#/applied" data-link>一覧へ →</a>
        </div>
        <div class="course-grid">${cardsFor(CODE_MAKE_IDS)}</div>
        </div>
        </div>
        <section class="points">
          <h2>教室の特徴</h2>
          <div class="points-grid">
            <div>
              <span class="point-label">Point1</span>
              ${figureHTML("poster", "迷ったらポスターから")}
              <h3>いちばんやさしいのはポスター</h3>
              <p>事務は Cowork、道具づくりは Claude Code。混ぜずに、どちらかのレーンから進みます。</p>
            </div>
            <div>
              <span class="point-label">Point2</span>
              ${figureHTML("copy", "コピーして自分の画面に貼る")}
              <h3>読んだら進度が色づく</h3>
              <p>レッスン末尾の「このページを読んだ」で進度が付きます。指示文はコピーして自分のClaudeに貼れます。</p>
            </div>
            <div>
              <span class="point-label">Point3</span>
              ${figureHTML("quiz", "選ぶとすぐ解説が出ます")}
              <h3>最後は確認クイズ</h3>
              <p>満点でなくても、解説を読んでやり直せます。</p>
            </div>
          </div>
        </section>
        ${continuePanel()}
      </div>
    `;
  };

  const courseOverview = (courseId) => {
    const course = CLASSROOM.courses[courseId];
    const first = course.lessons[0];
    const covers = {
      account: "cover-account",
      webchat: "cover-chat",
      cowork: "cover-cowork",
      code: "cover-code",
      codemac: "cover-mac",
      applied: "cover-applied",
      poster: "cover-poster",
      intro: "cover-intro",
      secretary: "cover-secretary",
      appedit: "cover-appedit",
      invoice: "cover-invoice",
      expense: "cover-expense",
      crm: "cover-crm",
      shop: "cover-shop",
      survey: "cover-survey",
      abc: "cover-abc",
      sns: "cover-sns",
      snspost: "cover-snspost",
      faq: "cover-faq"
    };
    const labels = {
      account: "準備",
      webchat: "チャット",
      cowork: "Cowork",
      code: "Code",
      codemac: "Mac",
      applied: "応用",
      poster: "ポスター",
      intro: "勉強会",
      secretary: "秘書",
      appedit: "画面",
      invoice: "請求書",
      expense: "経費",
      crm: "CRM",
      shop: "店舗",
      survey: "集計",
      abc: "ABC",
      sns: "SNS",
      snspost: "投稿文",
      faq: "つまずき"
    };
    const cover = covers[courseId] || "cover-cowork";
    const label = labels[courseId] || course.title;
    const [pic, cap] = artFor(courseId);
    const p = percent(courseId);
    const kind = courseKind(p);
    return `
      <div class="page course-overview">
        ${crumbs([
          { href: "#/", label: "ホーム" },
          { href: toolListHref(courseId), label: toolListLabel(courseId).replace("へ", "").replace("の一覧", "") },
          { href: `#/course/${courseId}`, label: course.title }
        ])}
        <div class="class-card course-lead">
          <div class="cover ${cover}">${coverArt(pic) || `<strong>${label}</strong>`}</div>
          <div>
            <p class="kicker">${toolKicker(courseId)}</p>
            ${statusChip(kind)}
            <h1>${escapeHtml(course.title)}</h1>
            ${figureHTML(pic, cap)}
            <p class="lede">${escapeHtml(course.subtitle)}</p>
            <p class="easy-meta">${escapeHtml(course.duration)}　進度 ${p}%</p>
            ${thinMeter(p, "course-meter", `${course.title}の進度`)}
            <p class="cta-row">
              <a class="btn-orange" href="#/course/${courseId}/${first.id}" data-link>1つ目から始める</a>
              <a class="btn-dark" href="${toolListHref(courseId)}" data-link>${toolListLabel(courseId)}</a>
              <button class="ghost" type="button" data-share="course:${courseId}">シェア用リンクをコピー</button>
            </p>
          </div>
        </div>
        <p class="read-hint"><span class="read-hint-mark" aria-hidden="true">💮</span><span>上から順に読めます。ページの下の「このページを読んだ」を押すと、進度が色づきます。</span></p>
        <div class="card">
          <h2>ページ一覧</h2>
          <ul class="lesson-list">
            ${course.lessons
              .map((l, i) => {
                const [icon, iconCap] = artFor(courseId, l.id);
                const st = lessonKind(courseId, l.id);
                return `<li><a class="lesson-row is-${st}" href="#/course/${courseId}/${l.id}" data-link><span class="list-art">${coverArt(icon)}</span><span class="lesson-row-main"><span class="lesson-row-title">${i + 1}. ${escapeHtml(l.title)}${
                    l.practice ? "（やってみる）" : ""
                  }</span><span class="lesson-row-cap">${escapeHtml(iconCap || "")}</span></span>${statusChip(st)}<span class="lesson-go" aria-hidden="true">›</span></a></li>`;
              })
              .join("")}
          </ul>
        </div>
      </div>
    `;
  };

  const lessonView = (courseId, lessonId) => {
    const course = CLASSROOM.courses[courseId];
    const idx = course.lessons.findIndex((l) => l.id === lessonId);
    if (idx < 0) return `<p>レッスンが見つかりません。</p>`;
    const lesson = course.lessons[idx];
    const prev = course.lessons[idx - 1];
    const next = course.lessons[idx + 1];
    const done = loadProgress()[courseId] || {};
    const tocOpen = typeof window.matchMedia === "function" && window.matchMedia("(min-width: 901px)").matches;
    const [pic, cap] = artFor(courseId, lessonId);
    const sidebar = course.lessons
      .map((l) => {
        const st = lessonKind(courseId, l.id);
        return `<a href="#/course/${courseId}/${l.id}" data-link class="${l.id === lessonId ? "active" : ""} ${
          done[l.id] ? "done" : ""
        }"><span class="list-art">${coverArt(artFor(courseId, l.id)[0])}</span><span>${escapeHtml(l.title)}</span>${statusChip(st)}</a>`;
      })
      .join("");
    const p = percent(courseId);
    return `
      <div class="page">
        <div class="layout">
          <aside class="sidebar">
            <details class="toc" ${tocOpen ? "open" : ""}>
              <summary>もくじ　${idx + 1} / ${course.lessons.length}</summary>
              <p class="toc-course">${escapeHtml(course.title)}</p>
              ${sidebar}
              <p class="toc-quiz"><a href="#/quiz/${courseId}" data-link>確認クイズへ</a></p>
            </details>
          </aside>
          <article class="lesson-body" data-course="${courseId}" data-lesson="${lessonId}">
            ${crumbs([
              { href: "#/", label: "ホーム" },
              { href: `#/course/${courseId}`, label: course.title },
              { href: `#/course/${courseId}/${lessonId}`, label: lesson.title }
            ])}
            <p class="now-here">いま ${idx + 1} / ${course.lessons.length}　${escapeHtml(lesson.title)}</p>
            <p class="easy-meta">目安 ${escapeHtml(course.duration)}　この講座 ${p}%</p>
            ${thinMeter(p, "course-meter is-lesson", "この講座の進度")}
            <div class="study-rail" aria-hidden="true"><span style="--p:${Math.round(((idx + 1) / course.lessons.length) * 100)}%"></span></div>
            ${figureHTML(pic, cap || "このページでやること", "hero")}
            ${lesson.body}
            <div class="mark-read ${done[lessonId] ? "is-inked" : ""}">
              <span class="mark-read-stamp" aria-hidden="true">💮</span>
              <div class="mark-read-copy">
                <p class="mark-read-note">${done[lessonId] ? "ハンコが色づきました" : "押すとハンコが色づきます"}</p>
                <button class="primary" type="button" data-complete>${done[lessonId] ? "読んだ（取り消す）" : "このページを読んだ"}</button>
              </div>
            </div>
            <div class="pager">
              <div>${
                prev
                  ? `<a class="btn-dark" href="#/course/${courseId}/${prev.id}" data-link>前へ</a>`
                  : `<a class="btn-dark" href="#/course/${courseId}" data-link>講座の最初</a>`
              }</div>
              <div>
                ${
                  next
                    ? `<a class="btn-orange" href="#/course/${courseId}/${next.id}" data-link>次へ</a>`
                    : `<a class="btn-orange" href="#/quiz/${courseId}" data-link>クイズへ</a>`
                }
              </div>
            </div>
          </article>
        </div>
      </div>
    `;
  };

  const quizView = (courseId) => {
    const questions = CLASSROOM.quizzes[courseId];
    const title = CLASSROOM.courses[courseId].title;
    return `
      <div class="page">
        ${crumbs([
          { href: "#/", label: "ホーム" },
          { href: `#/course/${courseId}`, label: CLASSROOM.courses[courseId].title },
          { href: `#/quiz/${courseId}`, label: "確認クイズ" }
        ])}
        <p class="kicker">QUIZ</p>
        <h1>${escapeHtml(title)}　確認クイズ</h1>
        <p class="easy-meta">目安 約5分　${questions.length}問</p>
        <p class="lede">全部で${questions.length}問です。答えを押すと、すぐ解説が出ます。まちがえても大丈夫。何度でもやり直せます。</p>
        <div id="quiz-root"></div>
        <div class="pager">
          <div><a class="btn-dark" href="#/course/${courseId}" data-link>前へ（講座へ）</a></div>
          <div><a class="btn-orange" href="#/" data-link>ホーム</a></div>
        </div>
      </div>
    `;
  };

  const renderQuiz = (courseId) => {
    const root = document.getElementById("quiz-root");
    if (!root) return;
    const questions = CLASSROOM.quizzes[courseId];
    let i = 0;
    let score = 0;
    const draw = () => {
      if (i >= questions.length) {
        const p = loadProgress();
        p.quizzes[courseId] = score;
        saveProgress(p);
        root.innerHTML = `
          <article class="quiz-card" style="padding:24px">
            <h2>結果：${score} / ${questions.length}</h2>
            <p>${score === questions.length ? "よく理解できています。次の講座か、貼る文のページへ進みましょう。" : "解説をもう一度読んで、ページに戻っても大丈夫です。"}</p>
            <p>
              <button class="primary" type="button" id="retry">もう一度やる</button>
              <a class="btn-dark" href="#/course/${courseId}" data-link>講座の最初</a>
              <a class="btn-orange" href="#/" data-link>ホーム</a>
            </p>
          </article>`;
        root.querySelector("#retry").onclick = () => {
          i = 0;
          score = 0;
          draw();
        };
        return;
      }
      const item = questions[i];
      root.innerHTML = `
        <article class="quiz-card" style="padding:24px">
          <p class="quiz-q"><strong>問 ${i + 1} / ${questions.length}</strong><br>${escapeHtml(item.q)}</p>
          <div class="choices">
            ${item.choices.map((c, idx) => `<button type="button" data-idx="${idx}">${escapeHtml(c)}</button>`).join("")}
          </div>
          <p class="feedback" hidden></p>
          <p><button class="primary" type="button" id="next-q" hidden>次の問題へ</button></p>
        </article>`;
      let answered = false;
      root.querySelectorAll(".choices button").forEach((btn) => {
        btn.onclick = () => {
          if (answered) return;
          answered = true;
          const idx = Number(btn.dataset.idx);
          const ok = idx === item.a;
          if (ok) score += 1;
          root.querySelectorAll(".choices button").forEach((b, j) => {
            if (j === item.a) b.classList.add("correct");
            if (j === idx && !ok) b.classList.add("wrong");
          });
          const fb = root.querySelector(".feedback");
          fb.hidden = false;
          fb.textContent = (ok ? "あたり。 " : "ざんねん。 ") + item.explain;
          root.querySelector("#next-q").hidden = false;
        };
      });
      root.querySelector("#next-q").onclick = () => {
        i += 1;
        draw();
      };
    };
    draw();
  };

  const promptsView = () => {
    const groups = CLASSROOM.prompts
      .map((g) => {
        const items = g.items
          .map(
            (it) => `
            <div class="prompt-item">
              <h3>${escapeHtml(it.name)}</h3>
              <div class="code-wrap">
                <button class="copy" type="button">コピー</button>
                <pre>${escapeHtml(it.text.replace(/\\n/g, "\n"))}</pre>
              </div>
            </div>`
          )
          .join("");
        return `<section class="prompt-group"><h2>${escapeHtml(g.title)}</h2>${figureHTML(
          pickOpPic(g.title),
          `${escapeHtml(g.title)}のお願い文`
        )}${g.intro ? `<p>${escapeHtml(g.intro)}</p>` : ""}${items}</section>`;
      })
      .join("");
    return `
      <div class="page">
        ${crumbs([
          { href: "#/", label: "ホーム" },
          { href: "#/prompts", label: "テキストで学ぶ" }
        ])}
        <p class="kicker">テキストで学ぶ</p>
        <h1>そのまま貼れるお願い文</h1>
        <p class="easy-meta">目安 約10分　コピーして貼るだけ</p>
        ${figureHTML("copy", "オレンジの「コピー」→ 自分のClaudeに貼る")}
        <p class="lede">オレンジの「コピー」を押して、自分のClaudeに貼ります。〔　〕の中だけ、自分の会社やファイル名に書き換えてください。</p>
        ${groups}
      </div>
    `;
  };

  const termsNoticeHTML = (mode) => {
    const compact = mode === "compact";
    return `
        <section class="notice-card ${compact ? "is-compact" : ""}" id="terms">
          ${compact ? "" : "<h2>ご利用上の注意</h2>"}
          <ul class="notice-list">
            <li>この学習アプリは、<strong>ご契約期間中のみ</strong>閲覧できます。期間が終わると、教材はご覧いただけません。</li>
            <li>先生へのご質問・メールは、<strong>原則24時間以内</strong>に返信します。AIチャットは、この画面ですぐ返します。</li>
            <li>教材・画面・文章の<strong>無断転載・複製・配布・公開は禁止</strong>です。契約者ご本人の学習以外には使わないでください。</li>
          </ul>
          ${compact ? `<p><a href="#/safety" data-link>注意事項の全体 →</a></p>` : ""}
        </section>`;
  };

  const safetyView = () => `
    <div class="page">
      ${crumbs([
        { href: "#/", label: "ホーム" },
        { href: "#/safety", label: "安全の約束" }
      ])}
      <p class="kicker">SAFETY</p>
      <h1>安全に使うための約束</h1>
      <p class="easy-meta">目安 約5分　送る前に読む</p>
      ${figureHTML("safety", "送る・消す・公開の前は、必ず自分の目で")}
      <p class="lede">AIはまちがえることがあります。送る・消す・公開する前は、必ず自分の目で見てください。下は教室全体の約束です。</p>
      <div class="ops">
        <article class="op">
          <span class="num">1</span>
          <h3>コピーを残す</h3>
          ${figureHTML("folder", "元のファイルはコピーしてから")}
          <p>消したり上書きする前に、作業用のコピーを作ります。</p>
        </article>
        <article class="op">
          <span class="num">2</span>
          <h3>渡さないもの</h3>
          ${figureHTML("safety", "パスワードや口座は渡さない")}
          <p>個人情報・口座・パスワード・APIキーは書きません。</p>
        </article>
        <article class="op">
          <span class="num">3</span>
          <h3>数字を照合</h3>
          ${figureHTML("check", "金額と宛名は指差し確認")}
          <p>請求書の金額・宛名は、元データと必ず見比べます。</p>
        </article>
      </div>
      <div class="card">
        <ul class="checklist">
          <li>作業前に「何をするか」を確認させ、承認してから進める</li>
          <li>元のファイルは必ずコピーを取ってから任せる</li>
          <li>顧客の個人情報や口座情報、パスワード、APIキーは渡さない</li>
          <li>出てきた数字は、元データと必ず照合する（請求書の金額・宛名は特に）</li>
          <li>送信・購入・削除・公開・提出の最終判断は、自分で行う</li>
          <li>最初はテスト用フォルダ、1社・1か月など小さく試す</li>
          <li>Claude Code は無料プランでは使えない。有料プランを先に確認する</li>
        </ul>
      </div>
      ${termsNoticeHTML()}
    </div>
  `;

  const guideStepHTML = (n, href, title, cap) => `
            <li>
              <a href="${href}" data-link>
                <span class="guide-n">${n}</span>
                <span class="guide-step-copy">
                  <strong>${escapeHtml(title)}</strong>
                  <small>${escapeHtml(cap)}</small>
                </span>
              </a>
            </li>`;

  const guideView = () => `
    <div class="page guide-page">
      ${crumbs([
        { href: "#/", label: "ホーム" },
        { href: "#/guide", label: "説明資料" }
      ])}
      <p class="kicker">迷ったらここ</p>
      <h1>進み方</h1>
      <p class="lede">やりたいことで、道は1本だけ選びます。人気順ではありません。混ぜなくて大丈夫です。</p>
      <p class="guide-actions">
        <button class="btn-orange" type="button" id="guide-print">このページを印刷</button>
        <a class="btn-dark" href="#/howto" data-link>操作のしかた</a>
      </p>

      <section class="guide-pick" aria-label="どちらの道か">
        <article class="guide-pick-card is-cowork">
          <span class="guide-pick-tag">事務</span>
          <h2>ファイルまで任せたい</h2>
          <p>画面で日本語のお願い。黒い画面は使いません。</p>
          <p class="guide-pick-tool">使うもの　Claude Cowork</p>
          <a class="btn-orange" href="#/cowork" data-link>この道で進む</a>
        </article>
        <p class="guide-or">または</p>
        <article class="guide-pick-card is-code">
          <span class="guide-pick-tag">道具</span>
          <h2>自分の道具をつくりたい</h2>
          <p>PowerShell か ターミナルに、1行貼ります。</p>
          <p class="guide-pick-tool">使うもの　Claude Code</p>
          <a class="btn-orange" href="#/code" data-link>この道で進む</a>
        </article>
      </section>

      <article class="guide-sheet">
        <h2>事務の順番</h2>
        <p class="easy-meta">上から1つずつ。はじめての人も、ここからです。</p>
        <ol class="guide-flow">
          ${guideStepHTML("1", "#/course/account", "アカウント", "claude.ai に入る")}
          ${guideStepHTML("2", "#/course/webchat", "チャット", "ブラウザで日本語を1回")}
          ${guideStepHTML("3", "#/course/poster", "ポスター", "いちばんやさしい課題")}
          ${guideStepHTML("4", "#/course/cowork", "Cowork", "請求書・経費などの本番")}
        </ol>

        <h2>道具づくりの順番</h2>
        <p class="easy-meta">Windows と Mac は、どちらか一方だけでよいです。</p>
        <ol class="guide-flow">
          <li class="guide-split">
            <span class="guide-n">1</span>
            <div class="guide-split-body">
              <a href="#/code" data-link>
                <strong>Windows</strong>
                <small>PowerShell に1行貼る</small>
              </a>
              <span class="guide-or-mini">または</span>
              <a href="#/course/codemac" data-link>
                <strong>Mac</strong>
                <small>ターミナルに1行貼る</small>
              </a>
            </div>
          </li>
          ${guideStepHTML("2", "#/course/snspost", "投稿文", "最初の道具。いちばんかんたん")}
        </ol>
        <p class="easy-meta">つづきは、かんたん順に1つずつ。</p>
        <ol class="guide-chips">
          <li><a href="#/course/survey" data-link>3 集計</a></li>
          <li><a href="#/course/expense" data-link>4 経費</a></li>
          <li><a href="#/course/invoice" data-link>5 請求書</a></li>
          <li><a href="#/course/abc" data-link>6 分析</a></li>
          <li><a href="#/course/shop" data-link>7 サイト</a></li>
          <li><a href="#/course/secretary" data-link>8 秘書</a></li>
          <li><a href="#/course/appedit" data-link>9 画面</a></li>
          <li><a href="#/course/applied" data-link>10 使いこなし</a></li>
        </ol>

        <div class="guide-extras">
          <section>
            <h2>教室の押し方</h2>
            <ul>
              <li>オレンジのボタンは、タップ（左クリック）</li>
              <li>黒い枠の「コピー」→ 自分の画面に貼る</li>
              <li>ページ下「このページを読んだ」でハンコ</li>
              <li>続きは <a href="#/me" data-link>マイページ</a> から1タップ</li>
            </ul>
          </section>
          <section>
            <h2>安全</h2>
            <ul>
              <li>パスワード・口座・マイナンバーは渡さない</li>
              <li>送る・消す・公開の前は、自分の目で確認</li>
              <li>金額と宛名は指差し確認</li>
            </ul>
          </section>
        </div>

        <h2>困ったとき</h2>
        <div class="guide-help">
          <a class="btn-dark" href="#/course/faq" data-link>つまずき一覧</a>
          <a class="btn-dark" href="#/howto" data-link>操作のしかた</a>
          <a class="btn-dark" href="#/chat" data-link>チャット</a>
        </div>
        <p class="easy-meta">講師の宮田先生へは、いつもの連絡手段でも送れます。</p>
      </article>

      <details class="guide-printbox">
        <summary>印刷用テキスト</summary>
        <p><a href="materials/guide.html" target="_blank" rel="noopener">印刷用ページ</a>　<a href="materials/guide.txt" download>テキスト</a></p>
      </details>
    </div>
  `;

  const howtoView = () => `
    <div class="page">
      ${crumbs([
        { href: "#/", label: "ホーム" },
        { href: "#/howto", label: "操作のしかた" }
      ])}
      <p class="kicker">HOW TO</p>
      <h1>操作のしかた（絵で見る）</h1>
      <p class="easy-meta">目安 約8分　絵を見ながら操作</p>
      <p>
        <a class="btn-orange" href="#/guide" data-link>説明資料を読む</a>
      </p>
      ${figureHTML("mouse", "オレンジのボタンは左クリック")}
      <p class="lede">マウスは左ボタンです。つまずいたら <a href="#/course/faq" data-link>つまずき一覧</a> も見てください。</p>

      <h2>0. はじめての準備</h2>
      <div class="ops">
        <article class="op">
          <span class="num">1</span>
          <h3>アカウント</h3>
          ${figureHTML("signup", "ブラウザで claude.ai")}
          <p>全員共通です。ログインと、Code を使う人の有料プラン確認。</p>
        </article>
        <article class="op">
          <span class="num">2</span>
          <h3>チャット</h3>
          ${figureHTML("webchat", "下の入力欄に書いて送る")}
          <p>Cowork の前に、ブラウザで日本語のお願いを1回します。</p>
        </article>
      </div>
      <p>
        <a class="btn-orange" href="#/course/account" data-link>アカウントへ</a>
        <a class="btn-dark" href="#/course/webchat" data-link>チャット入門へ</a>
        <a class="btn-dark" href="#/course/faq" data-link>つまずき一覧</a>
      </p>

      <h2>A. この教室サイト</h2>
      <div class="ops">
        <article class="op">
          <span class="num">1</span>
          <h3>カードを押す</h3>
          ${figureHTML("site", "ホームの色つきカード")}
          <p>上の2つの箱から選びます。Coworkは事務、Codeはツールづくりです。</p>
        </article>
        <article class="op">
          <span class="num">2</span>
          <h3>左クリック</h3>
          ${figureHTML("mouse", "オレンジのボタンを押す")}
          <p>「講座を開く」「次へ」「このレッスンを完了」は、どれも左クリックです。</p>
        </article>
        <article class="op">
          <span class="num">3</span>
          <h3>文章をコピー</h3>
          ${figureHTML("copy", "コピー → 自分の画面に貼る")}
          <p>黒い枠の右上「コピー」を押し、ClaudeやPowerShellの画面で Ctrl＋V（貼り付け）します。</p>
        </article>
        <article class="op">
          <span class="num">4</span>
          <h3>完了する</h3>
          ${figureHTML("desktop", "読んだら完了ボタン")}
          <p>レッスンのいちばん下「このレッスンを完了」を押すと、左の一覧に「済」が付きます。</p>
        </article>
      </div>

      <h2>B. 求人ポスター（いちばん初級）</h2>
      <div class="ops">
        <article class="op">
          <span class="num">1</span>
          <h3>お手本は1枚</h3>
          ${figureHTML("pinterest", "右クリックで画像を保存")}
          <p>Pinterestで「こんな感じ」を1枚だけ保存します。2枚以上は迷います。</p>
        </article>
        <article class="op">
          <span class="num">2</span>
          <h3>質問に答える</h3>
          ${figureHTML("chat", "枠の文をそのまま貼る")}
          <p>ChatGPTに教室の文を貼り、聞かれたことにふつうの言葉で答えます。</p>
        </article>
        <article class="op">
          <span class="num">3</span>
          <h3>保存してから開く</h3>
          ${figureHTML("canva", "「保存して」がポイント")}
          <p>Canvaで開く前に、必ず「保存して」と送ります。無いときはほぼこれです。</p>
        </article>
        <article class="op">
          <span class="num">4</span>
          <h3>人が読む</h3>
          ${figureHTML("poster", "電話番号と住所")}
          <p>崩れた字はCanvaで打ち直します。色は3色、言いたいことは1つです。</p>
        </article>
      </div>
      <p><a class="btn-orange" href="#/course/poster" data-link>ポスター講座へ</a></p>

      <h2>C. Cowork（パソコンのアプリ）</h2>
      <div class="ops">
        <article class="op">
          <span class="num">1</span>
          <h3>デスクトップを開く</h3>
          ${figureHTML("desktop", "自分のパソコン")}
          <p>スマホよりパソコンがおすすめです。Claudeのデスクトップアプリを起動します。</p>
        </article>
        <article class="op">
          <span class="num">2</span>
          <h3>Coworkを選ぶ</h3>
          ${figureHTML("cowork", "左のメニューで Cowork")}
          <p>チャットではなく「Cowork」をクリックして、新しい作業を始めます。</p>
        </article>
        <article class="op">
          <span class="num">3</span>
          <h3>フォルダを接続</h3>
          ${figureHTML("folder", "請求書・経費の入ったフォルダ")}
          <p>「接続する」を押し、作業用フォルダを許可します。これが無いとファイルが見つかりません。</p>
        </article>
        <article class="op">
          <span class="num">4</span>
          <h3>送る前に確認</h3>
          ${figureHTML("check", "金額と宛名")}
          <p>できた請求書は、送付の前に必ず自分の目で見ます。</p>
        </article>
      </div>
      <p><a class="btn-dark" href="#/course/cowork" data-link>Cowork講座へ</a></p>

      <h2>D. Claude Code（Windows）</h2>
      <div class="ops">
        <article class="op">
          <span class="num">1</span>
          <h3>スタートを押す</h3>
          ${figureHTML("start", "左下のスタート → PowerShell")}
          <p>画面左下のWindowsボタン（スタート）をクリックし、「PowerShell」と入力します。</p>
        </article>
        <article class="op">
          <span class="num">2</span>
          <h3>黒い画面を確認</h3>
          ${figureHTML("powershell", "行頭が PS C:\\ なら成功")}
          <p>「Windows PowerShell」を開きます。行頭が PS で始まっているか見てください。</p>
        </article>
        <article class="op">
          <span class="num">3</span>
          <h3>1行を貼る</h3>
          ${figureHTML("copy", "コピーして Enter")}
          <p>教室のコマンドをコピーし、PowerShellで右クリック（または Ctrl＋V）して Enter です。</p>
        </article>
        <article class="op">
          <span class="num">4</span>
          <h3>ブラウザでログイン</h3>
          ${figureHTML("browser", "claude と打つとブラウザが開く")}
          <p>作業フォルダで claude と入力。ブラウザが開いたら、有料プランのアカウントでログインします。</p>
        </article>
        <article class="op">
          <span class="num">5</span>
          <h3>Git は任意</h3>
          ${figureHTML("git", "変更の履歴が残る")}
          <p>必須ではありません。入れるとやり直しがしやすいです。手順は Claude Code講座の「Git for Windows（任意）」へ。</p>
        </article>
      </div>
      <p>
        <a class="btn-dark" href="#/course/code" data-link>Windows編へ</a>
        <a class="btn-dark" href="#/course/codemac" data-link>Mac編へ</a>
        <a class="btn-dark" href="#/course/applied" data-link>応用編へ</a>
        <a class="btn-dark" href="#/course/invoice" data-link>請求書ツールへ</a>
        <a class="btn-dark" href="#/course/secretary" data-link>秘書アプリへ</a>
      </p>
      <h2>E. Claude Code（Mac）</h2>
      <div class="ops">
        <article class="op">
          <span class="num">1</span>
          <h3>ターミナルを開く</h3>
          ${figureHTML("mac", "⌘＋スペース → ターミナル")}
          <p>Command とスペースを同時に押し、「ターミナル」と入れます。</p>
        </article>
        <article class="op">
          <span class="num">2</span>
          <h3>赤い丸・黄・緑</h3>
          ${figureHTML("terminal", "この窓に1行を貼る")}
          <p>テキストエディット（メモ）ではありません。3つの丸がある窓です。</p>
        </article>
        <article class="op">
          <span class="num">3</span>
          <h3>1行を貼る</h3>
          ${figureHTML("copy", "⌘＋V して Enter")}
          <p>教室のコマンドを貼ります。パスワードは画面に出ません。</p>
        </article>
      </div>
      <p><a class="btn-orange" href="#/course/codemac" data-link>Mac編へ</a>
      <a class="btn-dark" href="#/course/faq" data-link>つまずき一覧</a></p>
      <section class="points">
        <h2>教室の使い方（3つだけ）</h2>
        <div class="points-grid">
          <div>
            <span class="point-label">1</span>
            ${figureHTML("compare", "事務はCowork、アプリはCode")}
            <p>ポスターで慣れたら、事務はCowork。アプリやサイトを作りたくなったらCodeです。</p>
          </div>
          <div>
            <span class="point-label">2</span>
            ${figureHTML("copy", "コピーして自分の画面に貼る")}
            <p>黒い枠の「コピー」を押して、自分のClaudeに貼ります。読み終わったら「このページを読んだ」。</p>
          </div>
          <div>
            <span class="point-label">3</span>
            ${figureHTML("quiz", "選ぶとすぐ解説が出ます")}
            <p>最後は確認クイズ。満点でなくても大丈夫。解説を読んでやり直せます。</p>
          </div>
        </div>
      </section>
    </div>
  `;

  const hydratePics = () => {
    document.querySelectorAll("[data-pic]").forEach((el) => {
      const body = el.closest(".lesson-body");
      if (body && body.querySelector(":scope > .pic-hero")) {
        const prev = el.previousElementSibling;
        if (prev && (prev.matches("h1") || prev.matches(".lesson-head"))) {
          el.remove();
          return;
        }
      }
      el.outerHTML = figureHTML(el.dataset.pic, el.dataset.cap || "絵で見てください");
    });
    document.querySelectorAll(".op").forEach((el) => {
      if (el.querySelector(".pic")) return;
      const h3 = el.querySelector("h3");
      const pic = pickOpPic(el.textContent || "");
      const html = figureHTML(pic, h3 ? `${h3.textContent}のイメージ` : "絵で見てください");
      if (h3) h3.insertAdjacentHTML("afterend", html);
      else el.insertAdjacentHTML("afterbegin", html);
    });
    const heads = document.querySelectorAll(".lesson-body h2");
    let added = 0;
    heads.forEach((h) => {
      if (added >= 4) return;
      if (h.closest(".course-overview")) return;
      if (/一覧|もくじ|目次|付箋|お気に入り/.test(h.textContent || "")) return;
      if (h.closest(".fav-bar, .member-page, .guide-page")) return;
      const next = h.nextElementSibling;
      if (next && (next.classList.contains("pic") || (next.querySelector && next.querySelector(".pic")))) return;
      if (next && next.matches && next.matches("ul, ol, .lesson-list, .ops, .code-wrap, .callout")) return;
      h.insertAdjacentHTML("afterend", figureHTML(pickOpPic(h.textContent || ""), `${h.textContent.trim()}のイメージ`));
      added += 1;
    });
  };

  const bindCopies = () => {
    document.querySelectorAll(".lesson-body .code-wrap, .prompt-item .code-wrap").forEach((wrap) => {
      const prev = wrap.previousElementSibling;
      if (prev && prev.classList.contains("paste-hint")) return;
      const hint = document.createElement("p");
      hint.className = "paste-hint";
      hint.textContent = "下の「コピー」を押して、自分のClaudeに貼ります。";
      wrap.parentNode.insertBefore(hint, wrap);
    });
    document.querySelectorAll(".copy").forEach((btn) => {
      btn.onclick = async () => {
        const pre = btn.parentElement.querySelector("pre");
        const markCopied = () => {
          btn.textContent = "コピー済み";
          btn.classList.add("copied");
          setTimeout(() => {
            btn.textContent = "コピー";
            btn.classList.remove("copied");
          }, 1500);
        };
        const selectPre = () => {
          const range = document.createRange();
          range.selectNodeContents(pre);
          const sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
        };
        try {
          await navigator.clipboard.writeText(pre.textContent);
          markCopied();
        } catch {
          selectPre();
          let ok = false;
          try {
            ok = document.execCommand("copy");
          } catch {
            ok = false;
          }
          if (ok) markCopied();
          else {
            btn.textContent = "選択したのでコピーしてください";
            setTimeout(() => {
              btn.textContent = "コピー";
            }, 2800);
          }
        }
      };
    });
  };

  const bindComplete = () => {
    const btn = document.querySelector("[data-complete]");
    if (!btn) return;
    btn.onclick = () => {
      const article = document.querySelector(".lesson-body");
      const courseId = article.dataset.course;
      const lessonId = article.dataset.lesson;
      const p = loadProgress();
      p[courseId] = p[courseId] || {};
      const wasDone = !!p[courseId][lessonId];
      if (wasDone) delete p[courseId][lessonId];
      else {
        p[courseId][lessonId] = true;
        sessionStorage.setItem("classroom-cheer", "1");
      }
      saveProgress(p);
      render({ keepScroll: true });
    };
  };

  const bindMember = () => {
    const form = document.getElementById("member-form");
    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault();
        const input = form.querySelector("[name=member]");
        const name = (input && input.value ? input.value : "").trim().slice(0, 20);
        if (!name) return;
        setMemberName(name);
        render({ keepScroll: true });
      };
    }
    const gateForm = document.getElementById("gate-form");
    if (gateForm) {
      gateForm.onsubmit = (e) => {
        e.preventDefault();
        const input = gateForm.querySelector("[name=gate]");
        const pack = decodeGate(input && input.value);
        const err = document.getElementById("gate-err");
        if (!pack) {
          if (err) err.hidden = false;
          return;
        }
        addGate(pack);
        render({ keepScroll: true });
      };
    }
  };

  const chatView = () => `
    <div class="page chat-page">
      ${crumbs([{ href: "#/", label: "ホーム" }, { href: "#/chat", label: "チャット" }])}
      <p class="kicker">CHAT</p>
      <h1>チャット</h1>
      <p class="lede">AIチャットと、宮田先生へ直接聞く文面づくりが使えます。</p>
      ${termsNoticeHTML("compact")}
      ${chatTabsHTML()}
      <div class="bot-pair is-page is-teacher">
        ${directChatHTML()}
        ${teacherAskHTML()}
      </div>
      <p><a class="btn-dark" href="#/course/faq" data-link>つまずき一覧</a>
      <a class="btn-dark" href="#/safety" data-link>安全の約束</a>
      <a class="btn-dark" href="#/me" data-link>マイページへ</a></p>
    </div>`;

  const memberView = () => {
    const n = memberName();
    const stats = courseStats();
    const cur = continueStudy();
    const nxt = nextToLearn();
    const doneIds = HOME_ORDER.filter((id) => CLASSROOM.courses[id] && id !== "faq" && percent(id) >= 100);
    const works = loadWorks();
    const where = !cur
      ? ""
      : cur.kind === "quiz"
        ? `${escapeHtml(cur.course.title)}　確認クイズ`
        : cur.kind === "overview"
          ? `${escapeHtml(cur.course.title)}　講座の案内`
          : `${escapeHtml(cur.course.title)}　${cur.idx + 1} / ${cur.course.lessons.length}　${escapeHtml(cur.lesson.title)}`;
    const courseRows = HOME_ORDER.filter((id) => CLASSROOM.courses[id] && id !== "faq")
      .map((id) => {
        const course = CLASSROOM.courses[id];
        const p = percent(id);
        const kind = courseKind(p);
        const short = (STAMP_LABELS[id] || [course.title])[0];
        return `<li class="hub-course">
            <a href="${canSeeCourse(id) ? `#/course/${id}` : "#/me"}" data-link>
              <span class="hub-course-name">${escapeHtml(short)}</span>
              ${canSeeCourse(id) ? statusChip(kind) : `<span class="st-chip is-todo">鍵</span>`}
              ${thinMeter(p, "course-meter", `${short}の進度`)}
              <span class="easy-meta">${p}%</span>
            </a>
            ${p >= 100 ? `<a class="hub-cert" href="#/cert/${id}" data-link>修了証</a>` : ""}
          </li>`;
      })
      .join("");
    return `
      <div class="page member-page">
        ${crumbs([
          { href: "#/", label: "ホーム" },
          { href: "#/me", label: "マイページ" }
        ])}
        <p class="kicker">マイページ</p>
        <p class="member-hello">${escapeHtml(helloLine())}</p>
        <h1>${n ? "あなたの学びの拠点" : "お名前を入れて、マイページにします"}</h1>
        <p class="lede">進度・続き・修了証は、この端末に残ります。名前を入れるとあいさつが変わります。</p>
        ${termsNoticeHTML("compact")}
        <form class="member-form card" id="member-form">
          <label for="member-name">お名前（20文字まで）</label>
          <div class="member-row">
            <input id="member-name" name="member" type="text" maxlength="20" autocomplete="name" placeholder="例：宮田" value="${escapeHtml(n)}" />
            <button class="primary" type="submit">名前を残す</button>
          </div>
          ${n ? `<p><button class="btn-dark" type="button" id="member-clear">名前を消す</button></p>` : ""}
        </form>

        <form class="member-form card" id="gate-form">
          <h2>受講コード</h2>
          <p class="easy-meta">いま開けるもの：${
            loadGates().length ? loadGates().map((g) => escapeHtml((GATE_PACKS[g] || {}).label || g)).join("、") : "はじめて（準備）だけ"
          }</p>
          <label for="gate-code">塾からもらったコード</label>
          <div class="member-row">
            <input id="gate-code" name="gate" type="text" maxlength="20" autocomplete="off" placeholder="案内されたコード" />
            <button class="primary" type="submit">開ける</button>
          </div>
          <p class="easy-meta" id="gate-err" hidden>コードが違います。塾の案内を見てください。</p>
        </form>

        <div class="card">
          <h2>ほかの人に送る</h2>
          <p class="easy-meta">LINEやメールに貼るリンクです。このパソコンが動いているあいだ、相手の携帯でも開けます。</p>
          <ul class="hub-files invite-list">
            ${inviteLinks()
              .map(
                ([label, url], i) =>
                  `<li>
                    <span>${escapeHtml(label)}</span>
                    <button type="button" class="btn-dark" data-copy-link="${escapeHtml(url)}">リンクをコピー</button>
                    ${i === 0 && typeof navigator !== "undefined" && navigator.share ? `<button type="button" class="btn-orange" data-share-invite="${escapeHtml(url)}">アプリで送る</button>` : ""}
                  </li>`
              )
              .join("")}
          </ul>
        </div>

        <div class="card hub-resume">
          <h2>続きから再開</h2>
          ${
            cur
              ? `<p>${where}</p>
            ${thinMeter(percent(cur.courseId), "course-meter", "この講座の進度")}
            <p><a class="btn-orange" href="${cur.href}" data-link>1タップで戻る</a>
            <a class="btn-dark" href="#/course/${cur.courseId}" data-link>講座の最初</a></p>`
              : `<p>まだ途中のページがありません。ホームから1つ目を開いてください。</p>
            <p><a class="btn-orange" href="#/" data-link>ホームへ</a></p>`
          }
        </div>

        <div class="card">
          <h2>次におすすめ</h2>
          ${
            nxt
              ? `<p>${escapeHtml(nxt.why)}</p>
            <p><strong>${escapeHtml(nxt.course.title)}</strong>　${escapeHtml(nxt.course.duration || "")}</p>
            <p><a class="btn-orange" href="#/course/${nxt.id}" data-link>この講座を開く</a></p>`
              : `<p>全部修了しています。クイズやプロンプト集で復習できます。</p>
            <p><a class="btn-orange" href="#/prompts" data-link>プロンプト集</a></p>`
          }
        </div>

        <div class="card">
          <h2>学習進捗</h2>
          <p class="easy-meta">全体 ${stats.overall}%　読んだ ${stats.done} / ${stats.total}　この端末に残ります</p>
          ${thinMeter(stats.overall, "hero-meter", "全体の進度")}
          <ul class="hub-courses">${courseRows}</ul>
        </div>

        <div class="card">
          <h2>修了バッジ・修了証</h2>
          ${
            doneIds.length
              ? `<div class="learn-badges">${doneIds
                  .map((id) => {
                    const [name, face] = STAMP_LABELS[id] || [id, "💮"];
                    return `<a class="learn-badge" href="#/cert/${id}" data-link><span aria-hidden="true">${face}</span>${escapeHtml(name)} 修了</a>`;
                  })
                  .join("")}</div>
            <p class="easy-meta">バッジを押すと修了証を表示・印刷できます。</p>`
              : `<p>コースを最後まで読むと、ここにバッジと修了証が出ます。</p>`
          }
        </div>

        <div class="card">
          <h2>資料ダウンロード</h2>
          <ul class="hub-files">
            <li><a href="#/prompts" data-link>お願い文（プロンプト集）</a></li>
            <li><a href="materials/invoice-template.txt" download>請求書ひな形（テキスト）</a></li>
            <li><a href="materials/expense-sample.csv" download>経費のサンプルCSV</a></li>
            <li><a href="materials/abc-sample.csv" download>ABC分析のサンプルCSV</a></li>
          </ul>
        </div>

        <div class="card bot-card">
          <h2>質問・相談</h2>
          <p class="easy-meta">AIチャットはすぐ返します。宮田先生へ直接聞く場合は、原則24時間以内に返信します。外のサイトには飛びません。</p>
          ${chatTabsHTML()}
          <div class="bot-pair is-teacher">
            ${directChatHTML()}
            ${teacherAskHTML()}
          </div>
          <p><a class="btn-dark" href="#/chat" data-link>チャットページで大きく見る</a>
          <a class="btn-dark" href="#/course/faq" data-link>つまずき一覧</a>
          <a class="btn-dark" href="#/safety" data-link>安全の約束</a></p>
        </div>

        <div class="card">
          <h2>やってみた</h2>
          <p class="easy-meta">自分の成果メモです。この端末に残ります。写真・PDF・CSVも添付できます（1枚あたり1MBまで）。</p>
          <form id="works-form" class="works-form">
            <label for="works-text">ひとこと（何を作ったか）</label>
            <textarea id="works-text" name="work" rows="2" maxlength="200" placeholder="例：ポスターの下書きを1枚作った"></textarea>
            <label for="works-file">ファイル（任意）</label>
            <input id="works-file" name="workfile" type="file" accept="image/*,.pdf,.csv,.txt,.png,.jpg,.jpeg,.webp,.gif" />
            <p class="easy-meta" id="works-file-hint">まだ選んでいません</p>
            <button class="btn-orange" type="submit">記録する</button>
          </form>
          <ul class="works-list">
            ${
              works.length
                ? works
                    .map(
                      (w) =>
                        `<li>
                          ${workFileHTML(w)}
                          <span>${escapeHtml(w.text || w.file?.name || "記録")}</span>
                          <small>${escapeHtml(w.at || "")}</small>
                          <button type="button" class="btn-dark" data-work-del="${escapeHtml(w.id)}">消す</button>
                        </li>`
                    )
                    .join("")
                : `<li class="easy-meta">まだありません。できたことや、できたファイルを残してください。</li>`
            }
          </ul>
        </div>

        <div class="card">
          <h2>お気に入り</h2>
          <p>右上の「お気に入り追加」を押したページは <a href="#/notes" data-link>お気に入り</a> で全部見られます。いま ${loadFavs().length} 件です。</p>
        </div>
      </div>
    `;
  };

  const certView = (courseId) => {
    const course = CLASSROOM.courses[courseId];
    if (!course) return notFound();
    const p = percent(courseId);
    const n = memberName() || "塾生";
    const day = certDate(courseId) || "（まだ修了していません）";
    return `
      <div class="page cert-page">
        ${crumbs([
          { href: "#/", label: "ホーム" },
          { href: "#/me", label: "マイページ" },
          { href: `#/cert/${courseId}`, label: "修了証" }
        ])}
        <p class="kicker">修了証</p>
        ${
          p < 100
            ? `<h1>まだ修了していません</h1>
            <p class="lede">${escapeHtml(course.title)} の進度は ${p}% です。最後まで読むと発行されます。</p>
            <p><a class="btn-orange" href="#/course/${courseId}" data-link>講座へ</a></p>`
            : `<article class="cert-sheet">
              <p class="cert-kicker">株式会社 宮田財務　教室</p>
              <h1>修了証</h1>
              <p class="cert-name">${escapeHtml(n)} さん</p>
              <p class="cert-body"><strong>${escapeHtml(course.title)}</strong> を修了しました。</p>
              <p class="easy-meta">${escapeHtml(day)}</p>
              <p class="cert-stamp" aria-hidden="true">💮</p>
            </article>
            <p><button class="btn-orange" type="button" id="cert-print">印刷する</button>
            <a class="btn-dark" href="#/me" data-link>マイページへ</a></p>`
        }
      </div>
    `;
  };

  const bindWorks = () => {
    const form = document.getElementById("works-form");
    if (form) {
      const fileInput = form.querySelector("[name=workfile]");
      const hint = document.getElementById("works-file-hint");
      if (fileInput && hint) {
        fileInput.onchange = () => {
          const file = fileInput.files && fileInput.files[0];
          hint.textContent = file ? `選択中：${file.name}` : "まだ選んでいません";
        };
      }
      form.onsubmit = async (e) => {
        e.preventDefault();
        const text = ((form.querySelector("[name=work]") || {}).value || "").trim();
        const file = fileInput && fileInput.files && fileInput.files[0];
        if (!text && !file) return;
        if (file && file.size > 1000 * 1000) {
          if (hint) hint.textContent = "1MBまでのファイルにしてください";
          return;
        }
        let fileMeta = null;
        if (file) {
          try {
            fileMeta = {
              name: file.name.slice(0, 80),
              type: file.type || "application/octet-stream",
              data: await readWorkFile(file)
            };
          } catch {
            if (hint) hint.textContent = "このファイルは読めませんでした";
            return;
          }
        }
        const works = loadWorks();
        works.unshift({
          id: String(Date.now()),
          text: text || (fileMeta ? fileMeta.name : ""),
          at: new Date().toLocaleDateString("ja-JP"),
          file: fileMeta
        });
        if (!saveWorks(works)) {
          if (hint) hint.textContent = "容量がいっぱいです。古い記録を消してから、もう一度どうぞ";
          return;
        }
        render({ keepScroll: true });
      };
    }
    document.querySelectorAll("[data-work-del]").forEach((btn) => {
      btn.onclick = () => {
        saveWorks(loadWorks().filter((w) => w.id !== btn.getAttribute("data-work-del")));
        render({ keepScroll: true });
      };
    });
    const printBtn = document.getElementById("cert-print");
    if (printBtn) printBtn.onclick = () => window.print();
    const guidePrint = document.getElementById("guide-print");
    if (guidePrint) guidePrint.onclick = () => window.print();
  };

  const bindTeacherAsk = () => {
    const form = document.getElementById("teacher-form");
    const hint = document.getElementById("teacher-hint");
    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault();
        const name = ((document.getElementById("teacher-name") || {}).value || "").trim();
        const os = ((document.getElementById("teacher-os") || {}).value || "").trim();
        const where = ((document.getElementById("teacher-where") || {}).value || "").trim();
        const q = ((document.getElementById("teacher-q") || {}).value || "").trim();
        if (!q) {
          if (hint) hint.textContent = "聞きたいことを書いてください";
          return;
        }
        const text = teacherMessage(name, os, where, q);
        const notes = loadTeacherNotes();
        notes.unshift({
          id: String(Date.now()),
          text,
          name,
          at: new Date().toLocaleString("ja-JP")
        });
        saveTeacherNotes(notes);
        if (hint) hint.textContent = `${TEACHER_MAIL} 宛のメールを開きます。送信を押すと先生に届きます。`;
        location.href = teacherMailto(text, name);
      };
    }
    document.querySelectorAll("[data-teacher-mail]").forEach((btn) => {
      btn.onclick = () => {
        const id = btn.getAttribute("data-teacher-mail");
        const note = loadTeacherNotes().find((n) => n.id === id);
        if (!note) return;
        location.href = teacherMailto(note.text, note.name || "");
        if (hint) hint.textContent = `${TEACHER_MAIL} 宛のメールアプリを開きました。送信を押すと届きます。`;
      };
    });
    document.querySelectorAll("[data-teacher-del]").forEach((btn) => {
      btn.onclick = () => {
        saveTeacherNotes(loadTeacherNotes().filter((n) => n.id !== btn.getAttribute("data-teacher-del")));
        render({ keepScroll: true });
      };
    });
  };

  const bindDirectChat = () => {
    const log = document.getElementById("direct-log");
    const form = document.getElementById("direct-form");
    if (!log || !form) return;
    const input = document.getElementById("direct-q");
    const paint = (msgs) => {
      log.innerHTML = msgs.map(botBubble).join("");
      log.scrollTop = log.scrollHeight;
    };
    const history = loadDirectChat();
    paint(history.length ? history : [greetDirect()]);
    const send = (raw) => {
      const q = String(raw || "").trim();
      if (!q) return;
      const hit =
        window.CLASSROOM_BOT && window.CLASSROOM_BOT.talk
          ? window.CLASSROOM_BOT.talk(q)
          : { text: "この画面の中で案内します。つまずき一覧も見てください。", href: "#/course/faq", link: "つまずき一覧" };
      const msgs = loadDirectChat();
      msgs.push({ role: "user", text: q });
      msgs.push({ role: "bot", text: hit.text, href: hit.href, link: hit.link });
      saveDirectChat(msgs);
      paint(loadDirectChat());
      if (input) input.value = "";
    };
    form.onsubmit = (e) => {
      e.preventDefault();
      send((input || {}).value);
    };
    document.querySelectorAll("[data-direct-q]").forEach((btn) => {
      btn.onclick = () => send(btn.getAttribute("data-direct-q"));
    });
  };

  const bindChatTabs = () => {
    const pair = document.querySelector(".bot-pair");
    const tabs = document.querySelectorAll("[data-chat-tab]");
    if (!pair || !tabs.length) return;
    const apply = (name) => {
      const ai = name === "ai";
      pair.classList.toggle("is-ai", ai);
      pair.classList.toggle("is-teacher", !ai);
      tabs.forEach((t) => t.classList.toggle("is-on", t.getAttribute("data-chat-tab") === name));
      try {
        sessionStorage.setItem("chat-tab", name);
      } catch {
        /* ignore */
      }
    };
    let start = "teacher";
    try {
      start = sessionStorage.getItem("chat-tab") || "teacher";
    } catch {
      start = "teacher";
    }
    if (start === "room") start = "teacher";
    apply(start);
    tabs.forEach((t) => {
      t.onclick = () => apply(t.getAttribute("data-chat-tab"));
    });
  };

  const syncDocMeta = (parts) => {
    const site = "はじめてのClaude 教室｜株式会社 宮田財務";
    let title = site;
    let desc = "求人ポスター、Claude Cowork、Claude Code を自分のペースで学べる教室サイトです。";
    if (parts[0] === "me") {
      title = `マイページ｜${site}`;
      desc = "続き・進度・修了証・資料がある、自分の学びの拠点です。";
    } else if (parts[0] === "chat") {
      title = `チャット｜${site}`;
      desc = "教室の中で話せるチャットです。";
    } else if (parts[0] === "cert") {
      title = `修了証｜${site}`;
      desc = "講座の修了証です。";
    } else if (parts[0] === "notes") {
      title = `お気に入り｜${site}`;
      desc = "星を押したページです。";
    } else if (parts[0] === "howto") title = `操作のしかた｜${site}`;
    else if (parts[0] === "guide") {
      title = `進み方｜${site}`;
      desc = "迷ったときの進み方。印刷して机に置けます。";
    }
    else if (parts[0] === "safety") title = `安全の約束｜${site}`;
    else if (parts[0] === "prompts") title = `テキストで学ぶ｜${site}`;
    else if (parts[0] === "cowork") title = `Claude Cowork｜${site}`;
    else if (parts[0] === "code") title = `Claude Code｜${site}`;
    else if (parts[0] === "course" && CLASSROOM.courses[parts[1]]) {
      const c = CLASSROOM.courses[parts[1]];
      const lesson = parts[2] && c.lessons.find((l) => l.id === parts[2]);
      title = lesson ? `${lesson.title}｜${c.title}` : `${c.title}｜${site}`;
      desc = c.subtitle || desc;
    } else if (parts[0] === "quiz" && CLASSROOM.courses[parts[1]]) {
      title = `確認クイズ｜${CLASSROOM.courses[parts[1]].title}`;
    }
    document.title = title;
    const set = (sel, val) => {
      const el = document.querySelector(sel);
      if (el) el.setAttribute("content", val);
    };
    set('meta[name="description"]', desc);
    set('meta[property="og:title"]', title);
    set('meta[property="og:description"]', desc);
    set('meta[property="og:url"]', location.href.split("#")[0] + (location.hash || "#/"));
    set('meta[property="og:image"]', new URL("img/logo.png", location.href).href);
    set('meta[name="twitter:title"]', title);
    set('meta[name="twitter:description"]', desc);
  };

  const inviteLinks = () => {
    const base = `${location.origin}${location.pathname.replace(/[^/]*$/, "")}`.replace(/\/?$/, "/");
    return [
      ["教室の入口（準備だけ）", base],
      ["事務コース（Cowork）", `${base}?key=${encodeURIComponent("じむ")}`],
      ["道具コース（Claude Code）", `${base}?key=${encodeURIComponent("どうぐ")}`],
      ["全部開ける", `${base}?key=${encodeURIComponent("ぜんぶ")}`]
    ];
  };

  const bindShare = () => {
    const copyUrl = async (url, btn, restore) => {
      try {
        await navigator.clipboard.writeText(url);
        if (btn) {
          const old = btn.textContent;
          btn.textContent = "コピーしました";
          setTimeout(() => {
            btn.textContent = restore || old;
          }, 1600);
        }
      } catch {
        window.prompt("このリンクをコピーしてください", url);
      }
    };
    const btn = document.querySelector("[data-share]");
    if (btn) {
      btn.onclick = () => {
        const id = btn.getAttribute("data-share") || "";
        const base = `${location.origin}${location.pathname.replace(/[^/]*$/, "")}`;
        const url = id.startsWith("course:")
          ? `${base}share/course-${id.slice(7)}.html`
          : `${base}share/${id || "home"}.html`;
        copyUrl(url, btn, "シェア用リンクをコピー");
      };
    }
    document.querySelectorAll("[data-copy-link]").forEach((b) => {
      b.onclick = () => copyUrl(b.getAttribute("data-copy-link") || "", b, "リンクをコピー");
    });
    document.querySelectorAll("[data-share-invite]").forEach((b) => {
      b.onclick = async () => {
        const url = b.getAttribute("data-share-invite") || "";
        if (!url || !navigator.share) return;
        try {
          await navigator.share({ title: "はじめてのClaude 教室｜株式会社 宮田財務", text: "教室のリンクです。", url });
        } catch {
          /* キャンセル */
        }
      };
    });
  };

  let routeAuto = [];
  const bindRouteSwipe = () => {
    routeAuto.forEach((id) => clearInterval(id));
    routeAuto = [];
    if (!window.matchMedia("(max-width: 900px)").matches) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelectorAll(".route").forEach((el) => {
      const cards = [...el.querySelectorAll(".route-card")];
      if (cards.length < 2) return;
      let i = 0;
      let hold = false;
      const go = () => {
        const card = cards[i];
        if (!card) return;
        const box = el.getBoundingClientRect();
        const hit = card.getBoundingClientRect();
        el.scrollTo({
          left: el.scrollLeft + (hit.left - box.left) - (el.clientWidth - hit.width) / 2,
          behavior: reduce ? "auto" : "smooth"
        });
      };
      if (!reduce) {
        const id = setInterval(() => {
          if (hold) return;
          i = (i + 1) % cards.length;
          go();
        }, 3200);
        routeAuto.push(id);
      }
      const pause = () => {
        hold = true;
      };
      el.addEventListener("pointerdown", pause);
      el.addEventListener("touchstart", pause, { passive: true });
    });
  };

  const playWin = () => {
    sessionStorage.removeItem("classroom-cheer");
    const toast = document.createElement("p");
    toast.className = "cheer";
    toast.textContent = "よくできました！ハンコが色づきました";
    document.body.appendChild(toast);
    const burst = document.createElement("div");
    burst.className = "cheer-burst";
    burst.innerHTML = ["⭐", "💮", "✨", "🎉", "⭐", "✨", "🔥", "📘"]
      .map((s, i) => `<i style="--x:${12 + i * 11}%;--dx:${(i - 4) * 28}px">${s}</i>`)
      .join("");
    document.body.appendChild(burst);
    const badge = document.createElement("div");
    badge.className = "win-badge";
    badge.innerHTML = '<span aria-hidden="true">💮</span><strong>できた！</strong>';
    document.body.appendChild(badge);
    document.querySelectorAll(".course-meter, .hero-meter, .meter").forEach((el) => el.classList.add("is-pop"));
    setTimeout(() => {
      toast.remove();
      burst.remove();
      badge.remove();
    }, 2200);
  };

  const notFound = () => `
    <div class="page">
      <p class="kicker">案内</p>
      <h1>ページが見つかりません</h1>
      ${figureHTML("site", "ホームのカードから選び直してください")}
      <p class="lede">アドレスが違うか、古いリンクのことがあります。ホームから選び直してください。</p>
      <p><a class="btn-orange" href="#/" data-link>ホームへ戻る</a></p>
    </div>
  `;

  const render = (opts = {}) => {
    applyNameFromUrl();
    applyKeyFromUrl();
    const hash = (location.hash || "#/").split("?")[0];
    const parts = hash.replace(/^#/, "").split("/").filter(Boolean);
    let html = "";
    if ((parts[0] === "course" || parts[0] === "quiz") && parts[1] === "intro") {
      location.replace("#/code");
      return;
    }
    if (parts[0] === "cowork" && !canSeeCourse("cowork")) html = lockedView("jimu");
    else if ((parts[0] === "code" || parts[0] === "applied") && !canSeeCourse("code")) html = lockedView("dougu");
    else if ((parts[0] === "course" || parts[0] === "quiz" || parts[0] === "cert") && parts[1] && !canSeeCourse(parts[1])) {
      html = lockedView(toolOf(parts[1]) === "code" ? "dougu" : "jimu");
    }
    else if (parts.length === 0) html = home();
    else if (parts[0] === "beginner") html = trackView("beginner");
    else if (parts[0] === "applied") html = trackView("applied");
    else if (parts[0] === "cowork") html = laneView("cowork");
    else if (parts[0] === "code") html = laneView("code");
    else if ((parts[0] === "course" || parts[0] === "quiz") && parts[1] && !CLASSROOM.courses[parts[1]]) html = notFound();
    else if (parts[0] === "course" && parts[1] && !parts[2]) html = courseOverview(parts[1]);
    else if (parts[0] === "course" && parts[1] && parts[2]) html = lessonView(parts[1], parts[2]);
    else if (parts[0] === "quiz" && parts[1]) html = quizView(parts[1]);
    else if (parts[0] === "prompts") html = promptsView();
    else if (parts[0] === "safety") html = safetyView();
    else if (parts[0] === "howto") html = howtoView();
    else if (parts[0] === "movie") {
      location.replace("#/guide");
      return;
    }
    else if (parts[0] === "guide") html = guideView();
    else if (parts[0] === "chat") html = chatView();
    else if (parts[0] === "me") html = memberView();
    else if (parts[0] === "cert" && parts[1]) html = certView(parts[1]);
    else if (parts[0] === "notes") html = notesView();
    else html = notFound();

    html = easyKickers(html);
    app.innerHTML = html;
    document.body.classList.toggle("is-home", parts.length === 0);
    document.body.classList.toggle("is-chat", parts[0] === "chat");
    if (parts[0] === "course" && parts[1] && CLASSROOM.courses[parts[1]]) rememberLast(parts[1], parts[2] || null);
    else if (parts[0] === "quiz" && parts[1] && CLASSROOM.courses[parts[1]]) rememberLast(parts[1], "quiz");
    hydratePics();
    bindCopies();
    bindComplete();
    bindMember();
    bindWorks();
    bindTeacherAsk();
    bindDirectChat();
    bindChatTabs();
    bindNotes();
    bindShare();
    bindRouteSwipe();
    const clearBtn = document.getElementById("member-clear");
    if (clearBtn) {
      clearBtn.onclick = () => {
        setMemberName("");
        render({ keepScroll: true });
      };
    }
    if (parts[0] === "quiz" && CLASSROOM.quizzes[parts[1]]) renderQuiz(parts[1]);
    app.classList.remove("page-in");
    void app.offsetWidth;
    app.classList.add("page-in");
    if (sessionStorage.getItem("classroom-cheer")) playWin();
    const navHash =
      parts[0] === "quiz" && parts[1]
        ? `#/course/${parts[1]}`
        : hash.split("?")[0] || "#/";
    setActiveNav(navHash);
    syncQuizPill(parts);
    syncHeaderProgress();
    syncMemberChip();
    syncHeaderFav(parts);
    syncDocMeta(parts);
    if (!opts.keepScroll) window.scrollTo(0, 0);
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "メニューを開く");
  };

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
  });

  window.addEventListener("hashchange", render);
  render();
  if (location.protocol.startsWith("http") && "serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js?v=compare22", { updateViaCache: "none" }).catch(() => {});
  }
})();
