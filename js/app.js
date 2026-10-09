(() => {
  const STORAGE_KEY = "claude-classroom-progress-v1";
  const app = document.getElementById("app");
  const nav = document.getElementById("site-nav");
  const toggle = document.querySelector(".nav-toggle");

  const loadProgress = () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { cowork: {}, code: {} };
    } catch {
      return { cowork: {}, code: {} };
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
    if (kind === "extra") return `<span class="st-chip is-extra">余ったら</span>`;
    return "";
  };

  const lessonChip = (courseId, lesson) => {
    const st = lessonKind(courseId, lesson.id);
    if (st === "todo" && lesson.optional) return statusChip("extra");
    return statusChip(st);
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
    text: "よくある質問に、用意した答えをすぐ返します。短い言葉で書いてください（例：貼れない、ログインできない）。合う答えがないときは、「先生に直接聞く」を使ってください。"
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
            <button type="button" class="bot-tab is-on" data-chat-tab="ai">自動応答</button>
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
            <h3>自動応答（よくある質問）</h3>
            <p class="easy-meta">よくある質問に、用意した答えをすぐ返します。AIが考えて答えるものではなく、言葉が合った答えを選ぶ仕組みです。合う答えがないときは「先生に直接聞く」へ。パスワードは書かないでください。</p>
            <div class="bot-shell is-direct">
              <div id="direct-log" class="bot-log" aria-live="polite"></div>
              <div class="bot-chips">
                ${((window.CLASSROOM_BOT && window.CLASSROOM_BOT.chips) || [])
                  .map((c) => `<button type="button" class="bot-chip" data-direct-q="${escapeHtml(c)}">${escapeHtml(c)}</button>`)
                  .join("")}
              </div>
              <form id="direct-form" class="bot-form">
                <label class="sr-only" for="direct-q">自動応答への質問</label>
                <textarea id="direct-q" name="q" rows="2" maxlength="800" placeholder="困っていることを、短い言葉で書く"></textarea>
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
    const id = START_ORDER.find(
      (courseId) => CLASSROOM.courses[courseId] && courseId !== "faq" && canSeeCourse(courseId) && percent(courseId) < 100
    );
    if (!id) return null;
    const course = CLASSROOM.courses[id];
    const why =
      toolOf(id) === "cowork"
        ? "事務は同じチャットです。"
        : id === "code"
          ? "次は Claude Code（道具づくり）です。"
          : "やさしい順の、次の講座です。";
    return { id, course, why };
  };

  // 講義の日に先生と開く資料。先頭が「今日の講義」、2つ目からは「これまでの講義」に並ぶ。
  // 新しい講義を足すときは、js/courses/ に講座ファイルを足し、ここの先頭に id を入れる。
  const LECTURE_IDS = ["today"];

  const HOME_ORDER = LECTURE_IDS.concat([
    "claudebase",
    "aipick",
    "promptskill",
    "webwords",
    "skillbase",
    "poster",
    "market",
    "peoplejob",
    "minutes",
    "salesrep",
    "aicopy",
    "aisub",
    "cowork",
    "portalmake",
    "attend",
    "invoicemake",
    "code",
    "snspost",
    "survey",
    "invoice",
    "crm",
    "shop",
    "secretary",
    "appedit",
    "applied",
    "faq"
  ]);

  // 「最初の講座」「次におすすめ」を選ぶ順番。講義の資料（中級）は入れず、Claude基本から始める。
  const START_ORDER = HOME_ORDER.filter((id) => !LECTURE_IDS.includes(id));

  // 講座に held: "2026-10-09" の形で日付を書くと、「2026年10月9日」と表示する
  const heldLabel = (course) => {
    const m = String((course && course.held) || "").match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
    return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日` : "";
  };

  const STARTER_IDS = ["claudebase", "aipick", "promptskill", "webwords", "skillbase", "poster", "market", "peoplejob", "minutes", "salesrep", "aicopy", "aisub"];
  const COWORK_IDS = ["cowork", "portalmake", "attend", "invoicemake"];
  const CODE_SETUP_IDS = ["code"];
  const CODE_MAKE_IDS = ["snspost", "survey", "invoice", "crm", "shop", "secretary", "appedit", "applied"];
  const CODE_IDS = CODE_SETUP_IDS.concat(CODE_MAKE_IDS);
  const BEGINNER_IDS = STARTER_IDS.concat(COWORK_IDS, CODE_SETUP_IDS);
  const ADVANCED_IDS = CODE_MAKE_IDS.slice();

  // 統合前の講座id → 統合先。古いリンクと進度の引き継ぎに使う
  const COURSE_ALIAS = {
    account: "claudebase",
    settings: "claudebase",
    webchat: "promptskill",
    hypo: "promptskill",
    trainapp: "webwords",
    canvaai: "poster",
    hr: "peoplejob",
    sched: "minutes",
    slacksum: "minutes",
    salescsv: "salesrep",
    mdbase: "skillbase",
    portalfix: "portalmake",
    salary: "attend",
    codemac: "code",
    nodejs: "code",
    intro: "code",
    claudemd: "applied",
    expense: "invoice",
    abc: "survey",
    researcher: "survey",
    sns: "snspost",
    portfolio: "shop",
    secplus: "secretary"
  };

  const lessonFromOld = (oldCourseId, oldLessonId) => {
    const newId = COURSE_ALIAS[oldCourseId] || oldCourseId;
    const course = CLASSROOM.courses[newId];
    if (!course || !oldLessonId) return null;
    const key = `${oldCourseId}/${oldLessonId}`;
    const hit = course.lessons.find((l) => (l.was || []).includes(key));
    return hit ? hit.id : null;
  };

  const migrateProgress = () => {
    const MIGRATION = "merge-2026-10";
    const p = loadProgress();
    if (p.migrated === MIGRATION) return;
    const old = JSON.parse(JSON.stringify(p));
    Object.values(CLASSROOM.courses).forEach((course) => {
      if (!course.lessons.some((l) => l.was)) return;
      const done = {};
      course.lessons.forEach((l) => {
        const was = l.was || [];
        if (!was.length) return;
        const all = was.every((key) => {
          const [c, lid] = key.split("/");
          return old[c] && old[c][lid];
        });
        if (all) done[l.id] = true;
      });
      p[course.id] = done;
    });
    if (p.last && p.last.courseId && COURSE_ALIAS[p.last.courseId]) {
      const lessonId = p.last.lessonId === "quiz" ? null : lessonFromOld(p.last.courseId, p.last.lessonId);
      p.last = { courseId: COURSE_ALIAS[p.last.courseId], lessonId, at: p.last.at };
    } else if (p.last && p.last.courseId && p.last.lessonId && p.last.lessonId !== "quiz") {
      const course = CLASSROOM.courses[p.last.courseId];
      if (course && !course.lessons.some((l) => l.id === p.last.lessonId)) {
        p.last.lessonId = lessonFromOld(p.last.courseId, p.last.lessonId);
      }
    }
    p.migrated = MIGRATION;
    saveProgress(p);
  };

  const toolOf = (courseId) => {
    if (COWORK_IDS.includes(courseId)) return "cowork";
    if (STARTER_IDS.includes(courseId) || courseId === "faq") return "starter";
    return "code";
  };
  const toolListHref = (courseId) => (toolOf(courseId) === "cowork" ? "#/cowork" : toolOf(courseId) === "starter" ? "#/" : "#/code");
  const toolListLabel = (courseId) =>
    toolOf(courseId) === "cowork" ? "事務の講座" : toolOf(courseId) === "starter" ? "ホームへ" : "Claude Codeの一覧";
  const toolKicker = (courseId) =>
    toolOf(courseId) === "cowork" ? "チャットで作業" : toolOf(courseId) === "starter" ? "はじめて" : "Claude Code";

  const OPEN_COURSE_IDS = STARTER_IDS.concat(["faq"], LECTURE_IDS);
  const GATE_PACKS = {
    jimu: { label: "事務（チャットで作業）", ids: COWORK_IDS.slice() },
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

  const isTeacher = () => !!loadProgress().teacher;

  const setTeacher = (on) => {
    const p = loadProgress();
    p.teacher = !!on;
    saveProgress(p);
  };

  const isTeachCode = (raw) => {
    const s = String(raw || "")
      .normalize("NFKC")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "");
    return s === "先生" || s === "sensei" || s === "teach" || s === "講師";
  };

  const applyTeachFromUrl = () => {
    try {
      const q = new URLSearchParams(location.search);
      const hashQ = location.hash.includes("?")
        ? new URLSearchParams(location.hash.slice(location.hash.indexOf("?")))
        : null;
      const raw = ((q.get("teach") || (hashQ && hashQ.get("teach")) || "") + "").trim().toLowerCase();
      if (!raw) return;
      if (raw === "0" || raw === "off" || raw === "no") setTeacher(false);
      else setTeacher(true);
      dropTeachFromAddress();
    } catch {
      /* ignore */
    }
  };

  const dropTeachFromAddress = () => {
    try {
      const url = new URL(location.href);
      let changed = false;
      if (url.searchParams.has("teach")) {
        url.searchParams.delete("teach");
        changed = true;
      }
      if (url.hash.includes("?")) {
        const hi = url.hash.indexOf("?");
        const path = url.hash.slice(0, hi);
        const hp = new URLSearchParams(url.hash.slice(hi));
        if (hp.has("teach")) {
          hp.delete("teach");
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

  const markKey = (courseId, lessonId) => `${courseId}/${lessonId}`;

  const loadMarks = (courseId, lessonId) => {
    const all = loadProgress().marks;
    const list = all && all[markKey(courseId, lessonId)];
    return Array.isArray(list) ? list.slice(0, 40) : [];
  };

  const saveMarks = (courseId, lessonId, list) => {
    const p = loadProgress();
    p.marks = p.marks || {};
    const key = markKey(courseId, lessonId);
    const next = (list || []).filter(Boolean).slice(0, 40);
    if (!next.length) delete p.marks[key];
    else p.marks[key] = next;
    saveProgress(p);
  };

  const wrapFirstUnmarked = (root, needle) => {
    const want = String(needle || "");
    if (want.length < 2) return false;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.includes(want)) return NodeFilter.FILTER_REJECT;
        const el = node.parentElement;
        if (!el) return NodeFilter.FILTER_REJECT;
        if (el.closest("mark.teach-mark, button, a, script, style, .teach-bar, .copy, .sidebar, figcaption")) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const node = walker.nextNode();
    if (!node) return false;
    const i = node.nodeValue.indexOf(want);
    if (i < 0) return false;
    try {
      const range = document.createRange();
      range.setStart(node, i);
      range.setEnd(node, i + want.length);
      const mark = document.createElement("mark");
      mark.className = "teach-mark";
      mark.title = "押すとマーカーを消します";
      range.surroundContents(mark);
      return true;
    } catch {
      return false;
    }
  };

  const paintMarks = (root, list) => {
    (list || []).forEach((t) => wrapFirstUnmarked(root, t));
  };

  const selectionIn = (root) => {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || !sel.rangeCount) return "";
    const range = sel.getRangeAt(0);
    if (!root.contains(range.commonAncestorContainer)) return "";
    const node = range.commonAncestorContainer;
    const el = node.nodeType === 1 ? node : node.parentElement;
    if (el && el.closest(".teach-bar, button, a, .copy, .code-wrap, mark.teach-mark")) {
      return "";
    }
    const text = String(sel.toString() || "").replace(/\s+/g, " ").trim();
    if (text.length < 2 || text.length > 120) return "";
    return text;
  };

  const bindTeachMarks = () => {
    document.body.classList.toggle("is-teacher", isTeacher());
    const article = document.querySelector(".lesson-body[data-course][data-lesson]");
    if (!article || !isTeacher()) return;
    const courseId = article.dataset.course;
    const lessonId = article.dataset.lesson;
    paintMarks(article, loadMarks(courseId, lessonId));
    if (article.querySelector(".teach-bar")) return;
    const bar = document.createElement("div");
    bar.className = "teach-bar";
    const markingOn = sessionStorage.getItem("teach-mark-off") !== "1";
    bar.innerHTML = `
      <label class="teach-bar-toggle"><input type="checkbox" data-teach-toggle ${markingOn ? "checked" : ""} /> マーカー</label>
      <span class="teach-bar-hint">大事な文を選ぶと黄色く塗ります。塗ったところを押すと消えます。このパソコンにだけ残ります。</span>
      <button type="button" class="ghost" data-teach-clear>このページを消す</button>
    `;
    const kicker = article.querySelector(".kicker");
    if (kicker) kicker.insertAdjacentElement("beforebegin", bar);
    else article.insertBefore(bar, article.firstChild);
    const toggle = bar.querySelector("[data-teach-toggle]");
    const clearBtn = bar.querySelector("[data-teach-clear]");
    if (toggle) {
      toggle.onchange = () => {
        sessionStorage.setItem("teach-mark-off", toggle.checked ? "0" : "1");
      };
    }
    if (clearBtn) {
      clearBtn.onclick = () => {
        saveMarks(courseId, lessonId, []);
        render({ keepScroll: true });
      };
    }
    article.querySelectorAll("mark.teach-mark").forEach((mark) => {
      mark.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const t = (mark.textContent || "").replace(/\s+/g, " ").trim();
        const next = loadMarks(courseId, lessonId).filter((x) => x !== t);
        saveMarks(courseId, lessonId, next);
        render({ keepScroll: true });
      });
    });
    const paintFromSelection = () => {
      if (sessionStorage.getItem("teach-mark-off") === "1") return;
      if (toggle && !toggle.checked) return;
      const text = selectionIn(article);
      if (!text) return;
      const list = loadMarks(courseId, lessonId);
      if (list.includes(text)) return;
      list.push(text);
      saveMarks(courseId, lessonId, list);
      window.getSelection().removeAllRanges();
      render({ keepScroll: true });
    };
    article.addEventListener("mouseup", () => setTimeout(paintFromSelection, 0));
    article.addEventListener("keyup", (e) => {
      if (e.key === "Shift" || e.key.startsWith("Arrow")) setTimeout(paintFromSelection, 0);
    });
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
    today: ["cover-applied", "今日", "120分。CLAUDE.mdとClaude Code（中級）。最後に自分の仕事で1つ作る。", "docs"],
    claudebase: ["cover-account", "基本", "アカウント・設定・指示とプロジェクト。ログイン直後にやる。", "signup"],
    aipick: ["cover-applied", "使い分け", "ChatGPT・Gemini・Claude。用途で選ぶ。表は疑う。", "compare"],
    webwords: ["cover-intro", "ことば", "HTML・CSS・JavaScriptの意味と、作る前の工程。コードは書かない。", "site"],
    promptskill: ["cover-chat", "頼み方", "チャットに1回頼む。目的・前提・形式。先に自分の仮説。", "webchat"],
    poster: ["cover-poster", "ポスター", "Claudeで原稿、Canvaで仕上げ。A4を1枚。", "poster"],
    market: ["cover-sns", "マーケ", "誰に・何を・どう届けるか。ChatGPTに5本を同じチャットで。", "sns"],
    peoplejob: ["cover-crm", "人の仕事", "AIに任せる仕事と、人が残す判断。人事の例つき。", "crm"],
    minutes: ["cover-chat", "会議", "日程調整・議事録・Slack要約。配る前に人が確認。", "mail"],
    salesrep: ["cover-invoice", "売上", "売上データをグラフ付きレポートに。セル番地は書かない。", "invoice"],
    aicopy: ["cover-faq", "著作", "AIだから大丈夫、ともダメ、とも決めつけない。見て・調べて・確認してから。", "safety"],
    aisub: ["cover-expense", "補助", "旧IT導入補助金。会計・勤怠・AI。支援事業者と一緒に申請。", "expense"],
    cowork: ["cover-cowork", "事務", "同じチャットで。資料・整理・連携から請求書と経費まで。", "cowork"],
    portalmake: ["cover-cowork", "ポータル", "社内ポータルを話しかけて作り、会話の続きで直す。", "cowork"],
    attend: ["cover-expense", "出退勤", "ボタンで出退勤。記録から給料まで。電卓で検算。", "attendapp"],
    invoicemake: ["cover-invoice", "請求書", "ひな形を一度作れば、毎月は宛先と明細を伝えるだけ。", "invoice"],
    skillbase: ["cover-applied", "MD・Skills", "CLAUDE.mdは業務マニュアル、Skillsはよく使う手順。", "docs"],
    code: ["cover-code", "Code", "Windows・Macに入れて、使える状態まで。", "powershell"],
    applied: ["cover-applied", "使いこなし", "CLAUDE.mdを1枚書き、いつもの手順を登録する。", "desktop"],
    invoice: ["cover-invoice", "請求・経費", "リストから1社1PDF。レシートを科目ごとに集計。", "invoice"],
    crm: ["cover-crm", "CRM", "登録・検索・絞り込みできる、自分専用の台帳。", "crm"],
    shop: ["cover-shop", "サイト", "店舗サイトや自己紹介ページを作って公開。", "shop"],
    survey: ["cover-survey", "集計・分析", "アンケート集計、ABC分析、競合の料金比較。", "survey"],
    snspost: ["cover-snspost", "SNS", "ネタから投稿文。反応から伸びた投稿の傾向。", "snspost"],
    secretary: ["cover-secretary", "秘書", "秘書アプリを作り、カレンダーとGmailにつなぐ。", "secretary"],
    appedit: ["cover-appedit", "画面", "作ったアプリの文字・色・部品を、日本語のお願いで直す。", "mouse"],
    faq: ["cover-faq", "つまずき", "PowerShellが開かない、ログインできない、など。", "quiz"]
  };

  const STAMP_LABELS = {
    today: ["今日の講義", "📌"],
    claudebase: ["Claude基本", "✨"],
    aipick: ["使い分け", "🔀"],
    webwords: ["作る前の基礎", "🧱"],
    promptskill: ["頼み方", "✏️"],
    poster: ["ポスター", "🎨"],
    market: ["マーケ", "📣"],
    peoplejob: ["人の仕事", "🤝"],
    minutes: ["会議と連絡", "📝"],
    salesrep: ["売上レポート", "📊"],
    aicopy: ["著作", "⚖️"],
    aisub: ["AI補助", "💴"],
    cowork: ["Cowork", "💬"],
    portalmake: ["ポータル", "🏠"],
    attend: ["出退勤と給料", "⏰"],
    invoicemake: ["請求書", "📄"],
    skillbase: ["MDとSkills", "📘"],
    code: ["Code準備", "💻"],
    applied: ["使いこなし", "🧩"],
    invoice: ["請求と経費", "📄"],
    crm: ["CRM", "📒"],
    shop: ["サイト公開", "🏪"],
    survey: ["集計と分析", "📊"],
    snspost: ["SNS", "📱"],
    secretary: ["秘書", "🤝"],
    appedit: ["画面", "✏️"],
    faq: ["つまずき", "🆘"]
  };

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
    if (last.lessonId) {
      const mapped = last.lessonId;
      const idx = course.lessons.findIndex((l) => l.id === mapped);
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

  const thinMeter = (p, cls = "meter", label = "進度") => `
      <div class="${cls}" role="progressbar" aria-label="${escapeHtml(String(label))}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Number(p) || 0}">
        <span style="--p:${Number(p) || 0}%"></span>
      </div>`;

  const nextRecommended = () => {
    const cur = continueStudy();
    if (cur) return cur;
    const id =
      START_ORDER.find((courseId) => CLASSROOM.courses[courseId] && canSeeCourse(courseId) && percent(courseId) < 100) ||
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

  const setActiveNav = (hash) => {
    const path = hash.replace(/^#/, "") || "/";
    const courseId = path.match(/^\/course\/([^/]+)/)?.[1];
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
    if (parts[0] === "course" && parts[1] && CLASSROOM.courses[parts[1]]) {
      const c = CLASSROOM.courses[parts[1]];
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
      cowork: ["チャットで作業", "#/cowork"],
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

  const pickOpPic = (text) => {
    if (/出退勤|出勤|退勤/.test(text)) return "attendapp";
    if (/HTML|CSS|JAVA|JavaScript|骨組み/.test(text)) return "site";
    if (/Netlify|ポートフォリオ|portfolio\.md/.test(text)) return "shop";
    if (/ポータル|お知らせ/.test(text)) return "portalpage";
    if (/ターミナル|Mac|Spotlight/.test(text)) return "terminal";
    if (/CLAUDE\.md|マークダウン|Markdown|業務マニュアル/.test(text)) return "docs";
    if (/アカウント|登録|Google で/.test(text)) return "signup";
    if (/チャット|入力欄/.test(text)) return "webchat";
    if (/コピー|貼/.test(text)) return "copy";
    if (/フォルダ|材料|リスト|ひな形/.test(text)) return "folder";
    if (/金額|宛名|検品|指差/.test(text)) return "check";
    if (/自分の目|開き直|残って/.test(text)) return "eyecheck";
    if (/ログイン/.test(text)) return "browser";
    if (/Git/.test(text)) return "git";
    if (/Cowork/.test(text)) return "cowork";
    if (/クイズ/.test(text)) return "quiz";
    if (/パスワード|個人情報|機密/.test(text)) return "safety";
    if (/カレンダー|毎月1日/.test(text)) return "calendar";
    if (/下書き/.test(text)) return "mail";
    if (/Excel|CSV|スプレッド/.test(text)) return "excel";
    if (/Canva/.test(text)) return "canva";
    if (/Pinterest/.test(text)) return "pinterest";
    if (/ポスター/.test(text)) return "poster";
    if (/請求/.test(text)) return "invoice";
    if (/経費|レシート/.test(text)) return "expense";
    if (/手順|流れ|ステップ/.test(text)) return "steps";
    if (/読んだ|完了|ハンコ/.test(text)) return "done";
    if (/お願い|プロンプト|ことば/.test(text)) return "chat";
    if (/くらべ|チャットと/.test(text)) return "compare";
    if (/秘書/.test(text)) return "secretary";
    if (/SNS|投稿/.test(text)) return "sns";
    if (/店舗サイト|予約フォーム/.test(text)) return "shop";
    if (/グラフ/.test(text)) return "survey";
    if (/ABC/.test(text)) return "abc";
    if (/CRM|顧客/.test(text)) return "crm";
    return "eyecheck";
  };

  const cardsFor = (ids) =>
    ids
      .filter((id) => CLASSROOM.courses[id] && (COURSE_META[id] || LECTURE_IDS.includes(id)))
      .map((id) => {
        const course = CLASSROOM.courses[id];
        const [cover, label, blurb, pic] = COURSE_META[id] || ["cover-applied", course.title, escapeHtml(course.subtitle || ""), "docs"];
        const held = heldLabel(course);
        return classCard(
          `#/course/${id}`,
          cover,
          label,
          course.title,
          `${held ? `${held}　` : ""}${course.lessons.length}ページ ／ ${course.duration}`,
          blurb,
          percent(id),
          pic
        );
      })
      .join("");

  const classCard = (href, cover, label, title, meta, blurb, p, pic) => {
    const id = (href.match(/#\/course\/([^/?#]+)/) || [])[1];
    const heading = (id && STAMP_LABELS[id] && STAMP_LABELS[id][0]) || label || title;
    const locked = id && !canSeeCourse(id);
    if (locked) {
      return `
          <a class="class-card is-locked" href="#/me" data-link>
            <div class="class-body">
              <span class="st-chip is-todo">鍵</span>
              <h3 title="${escapeHtml(title)}">${escapeHtml(heading)}</h3>
              <p class="card-meta">受講コードが必要です</p>
            </div>
          </a>`;
    }
    return `
          <a class="class-card ${p >= 100 ? "is-complete" : p > 0 ? "is-going" : "is-fresh"}" href="${href}" data-link>
            <div class="class-body">
              ${p == null ? "" : statusChip(courseKind(p))}
              <h3 title="${escapeHtml(title)}">${escapeHtml(heading)}</h3>
              <p class="card-meta">${meta}${p == null ? "" : `　進度 ${p}%`}</p>
              <p class="card-blurb desk-only">${blurb}</p>
              ${p == null ? "" : thinMeter(p)}
            </div>
          </a>`;
  };

  const home = () => {
    const stats = courseStats();
    const next = nextRecommended();
    const started = continueStudy();
    const ctaHref = started ? started.href : next.href;
    const ctaLabel = started ? "続きを開く" : "最初の講座から始める";
    const nextShort = (STAMP_LABELS[next.courseId] && STAMP_LABELS[next.courseId][0]) || next.course.title;
    const nextTitle =
      next.lesson
          ? `${escapeHtml(nextShort)}　${escapeHtml(next.lesson.title)}`
          : escapeHtml(nextShort);
    const lectureHeld = heldLabel(CLASSROOM.courses[LECTURE_IDS[0]]);
    const lectureLead = `${
      lectureHeld ? `${lectureHeld}の講義です。` : "講義の日に、先生と一緒に開く資料です。"
    }中級（Claude Code を起動できる人向け）。はじめての人は、下の「はじめて」からどうぞ。`;
    const section = (title, lead, ids) => `
        <section class="home-catalog">
          <div class="section-head"><h2>${title}</h2></div>
          <p class="home-sec-lead">${lead}</p>
          <div class="course-grid">${cardsFor(ids)}</div>
        </section>`;
    return `
      <section class="home-hero">
        <div class="wrap home-hero-in">
          <div class="home-hero-copy">
            <p class="member-hello">${escapeHtml(helloLine())}</p>
            <h1>はじめての Claude 教室</h1>
            <p class="home-hero-lead">1ページずつ、自分のペースで。指示文はコピーして、自分の Claude に貼るだけです。</p>
            <div class="home-hero-actions">
              <a class="btn-orange" href="${ctaHref}" data-link>${ctaLabel}</a>
              <a class="btn-dark" href="#/guide" data-link>説明資料</a>
            </div>
          </div>
          <a class="home-hero-next" href="${ctaHref}" data-link>
            <small>次に読むページ</small>
            <strong>${nextTitle}</strong>
            <span class="home-hero-meter">全体の進度 ${stats.overall}%</span>
            ${thinMeter(stats.overall, "meter", "全体の進度")}
          </a>
        </div>
      </section>
      <div class="page">
        ${section("今日の講義", lectureLead, LECTURE_IDS.slice(0, 1))}
        ${LECTURE_IDS.length > 1 ? section("これまでの講義", "過去の講義の資料です。受講コードなしで開けます。", LECTURE_IDS.slice(1)) : ""}
        ${section("はじめて", "受講コードなしで読めます。はじめての人はここから。上から順で大丈夫です。", STARTER_IDS.concat(["faq"]))}
        ${section("事務（チャットで作業）", "画面で日本語のお願い。黒い画面は使いません。", COWORK_IDS)}
        ${section("道具づくり（Claude Code）", "最初に準備、そのあと作りやすい順です。", CODE_IDS)}
      </div>
    `;
  };

  const courseOverview = (courseId) => {
    const course = CLASSROOM.courses[courseId];
    const first = course.lessons[0];
    const p = percent(courseId);
    const kind = courseKind(p);
    return `
      <div class="page course-overview">
        ${crumbs([
          { href: "#/", label: "ホーム" },
          ...(toolListHref(courseId) === "#/"
            ? []
            : [{ href: toolListHref(courseId), label: toolListLabel(courseId).replace("へ", "").replace("の一覧", "") }]),
          { href: `#/course/${courseId}`, label: course.title }
        ])}
        <div class="class-card course-lead">
          <div>
            <p class="kicker">${toolKicker(courseId)}</p>
            ${statusChip(kind)}
            <h1>${escapeHtml(course.title)}</h1>
            <p class="lede">${escapeHtml(course.subtitle)}</p>
            <p class="easy-meta">${heldLabel(course) ? `${heldLabel(course)}の講義　` : ""}${escapeHtml(course.duration)}　進度 ${p}%</p>
            ${thinMeter(p, "course-meter", `${course.title}の進度`)}
            <p class="cta-row">
              <a class="btn-orange" href="#/course/${courseId}/${first.id}" data-link>1つ目から始める</a>
              <a class="btn-dark" href="${toolListHref(courseId)}" data-link>${toolListLabel(courseId)}</a>
              <button class="ghost" type="button" data-share="course:${courseId}">シェア用リンクをコピー</button>
            </p>
          </div>
        </div>
        <div class="card">
          <h2>ページ一覧</h2>
          <ul class="lesson-list">
            ${course.lessons
              .map((l, i) => {
                const st = lessonKind(courseId, l.id);
                return `<li><a class="lesson-row is-${st}" href="#/course/${courseId}/${l.id}" data-link><span class="lesson-row-main"><span class="lesson-row-title">${i + 1}. ${escapeHtml(l.title)}${
                    l.optional ? "（余ったら）" : l.practice ? "（やってみる）" : ""
                  }</span></span>${lessonChip(courseId, l)}<span class="lesson-go" aria-hidden="true">›</span></a></li>`;
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
    if (idx < 0) return `<p>ページが見つかりません。</p>`;
    const lesson = course.lessons[idx];
    const prev = course.lessons[idx - 1];
    const next = course.lessons[idx + 1];
    const done = loadProgress()[courseId] || {};
    const tocOpen = typeof window.matchMedia === "function" && window.matchMedia("(min-width: 901px)").matches;
    const sidebar = course.lessons
      .map((l) => {
        const st = lessonKind(courseId, l.id);
        return `<a href="#/course/${courseId}/${l.id}" data-link class="${l.id === lessonId ? "active" : ""} ${
            done[l.id] ? "done" : ""
        }"><span>${escapeHtml(l.title)}</span>${lessonChip(courseId, l)}</a>`;
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
            </details>
          </aside>
          <article class="lesson-body" data-course="${courseId}" data-lesson="${lessonId}">
            ${crumbs([
              { href: "#/", label: "ホーム" },
              { href: `#/course/${courseId}`, label: course.title },
              { href: `#/course/${courseId}/${lessonId}`, label: lesson.title }
            ])}
            <p class="easy-meta">目安 ${escapeHtml(course.duration)}　この講座 ${p}%</p>
            ${thinMeter(p, "course-meter is-lesson", "この講座の進度")}
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
                    : `<a class="btn-orange" href="#/" data-link>ホームへ</a>`
                }
              </div>
            </div>
          </article>
        </div>
      </div>
    `;
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
        ${figureHTML("copy", "「コピー」→ 自分のClaudeに貼る")}
        <p class="lede">黒い枠の右上にある「コピー」を押して、自分のClaudeに貼ります。〔　〕の中だけ、自分の会社やファイル名に書き換えてください。</p>
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
            <li>先生へのご質問・メールは、<strong>原則24時間以内</strong>に返信します。自動応答（よくある質問）は、この画面ですぐ返します。</li>
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
      ${figureHTML("safety", "送る・消す・公開の前は、必ず自分の目で")}
      <p class="lede">AIはまちがえることがあります。教室全体で、次の5つを守ります。</p>
      <div class="card">
        <ul class="checklist">
          <li>作業の前に「何をするか」を出させ、確認してから進める</li>
          <li>元のファイルはコピーを取ってから任せる。最初は練習用フォルダで小さく試す</li>
          <li>個人情報・口座・パスワード・APIキーは渡さない</li>
          <li>出てきた数字は元データと照合する（請求書の金額・宛名は特に）</li>
          <li>送信・購入・削除・公開・提出の最終判断は、自分で行う</li>
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
      <p class="lede">上から1つずつ進めます。</p>
      <p class="guide-actions">
        <button class="btn-orange" type="button" id="guide-print">このページを印刷</button>
        <a class="btn-dark" href="#/howto" data-link>操作のしかた</a>
      </p>

      <article class="guide-sheet">
        <h2>はじめての順番</h2>
        <ol class="guide-flow">
          ${guideStepHTML("1", "#/course/claudebase", "Claude基本", "claude.ai に入って、設定をする")}
          ${guideStepHTML("2", "#/course/promptskill", "頼み方", "チャットに日本語で1回頼む")}
          ${guideStepHTML("3", "#/course/poster", "ポスター", "いちばんやさしい課題")}
          ${guideStepHTML("4", "#/course/cowork", "事務", "請求書・経費などの本番")}
        </ol>

        <div class="guide-extras">
          <section>
            <h2>教室の押し方</h2>
            <ul>
              <li>紺のボタンは、タップ（左クリック）</li>
              <li>黒い枠の右上の「コピー」→ 自分の画面に貼る</li>
              <li>ページ下「このページを読んだ」で進度が付く</li>
              <li>続きは <a href="#/me" data-link>マイページ</a> から</li>
            </ul>
          </section>
          <section>
            <h2>安全</h2>
            <ul>
              <li>パスワード・口座・マイナンバーは渡さない</li>
              <li>送る・消す・公開の前は、自分の目で確認</li>
            </ul>
          </section>
        </div>

        <h2>困ったとき</h2>
        <div class="guide-help">
          <a class="btn-dark" href="#/course/faq" data-link>つまずき一覧</a>
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
      <h1>この教室の使い方</h1>
      <p class="lede">4つだけです。各講座の操作は、講座の中で絵つきで説明しています。</p>
      <div class="ops">
        <article class="op">
          <span class="num">1</span>
          <h3>講座を選ぶ</h3>
          ${figureHTML("site", "ホームのカード")}
          <p>ホームの「はじめて」「事務」「道具づくり」から選びます。</p>
        </article>
        <article class="op">
          <span class="num">2</span>
          <h3>文章をコピー</h3>
          ${figureHTML("copy", "コピー → 自分の画面に貼る")}
          <p>黒い枠の右上の「コピー」を押し、自分の Claude に貼ります（Ctrl＋V／⌘＋V）。</p>
        </article>
        <article class="op">
          <span class="num">3</span>
          <h3>読んだら押す</h3>
          ${figureHTML("check", "このページを読んだ")}
          <p>ページ下の「このページを読んだ」で、進度が付きます。</p>
        </article>
        <article class="op">
          <span class="num">4</span>
          <h3>困ったら</h3>
          ${figureHTML("chat", "つまずき一覧とチャット")}
          <p><a href="#/course/faq" data-link>つまずき一覧</a> か、右下の「チャット」へ。</p>
        </article>
      </div>
      <p>
        <a class="btn-orange" href="#/course/claudebase" data-link>最初の講座へ</a>
        <a class="btn-dark" href="#/guide" data-link>説明資料</a>
      </p>
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
    document.querySelectorAll(".code-wrap pre").forEach((pre) => {
      pre.setAttribute("tabindex", "0");
      pre.setAttribute("title", "クリックまたは長押しでコピーできます");
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
      const pre = btn.parentElement && btn.parentElement.querySelector("pre");
      if (pre) {
        pre.addEventListener("click", () => btn.click());
      }
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
        const teach = isTeachCode(input && input.value);
        const err = document.getElementById("gate-err");
        if (!pack && !teach) {
          if (err) err.hidden = false;
          return;
        }
        if (teach) setTeacher(true);
        if (pack) addGate(pack);
        render({ keepScroll: true });
      };
    }
  };

  const chatView = () => `
    <div class="page chat-page">
      ${crumbs([{ href: "#/", label: "ホーム" }, { href: "#/chat", label: "チャット" }])}
      <p class="kicker">CHAT</p>
      <h1>チャット</h1>
      <p class="lede">すぐ返る自動応答（よくある質問）と、宮田先生へ直接聞くメールづくりが使えます。</p>
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
        <form class="member-form card" id="member-form">
          <label for="member-name">お名前（20文字まで）</label>
          <div class="member-row">
            <input id="member-name" name="member" type="text" maxlength="20" autocomplete="name" placeholder="例：宮田" value="${escapeHtml(n)}" />
            <button class="primary" type="submit">名前を残す</button>
          </div>
          ${n ? `<p><button class="btn-dark" type="button" id="member-clear">名前を消す</button></p>` : ""}
        </form>

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
              : `<p>全部修了しています。プロンプト集で復習できます。</p>
            <p><a class="btn-orange" href="#/prompts" data-link>プロンプト集</a></p>`
          }
        </div>

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
        ${
          isTeacher()
            ? `<div class="card teach-card">
          <h2>説明用マーカー</h2>
          <p class="easy-meta">ONです。講座の本文で文字を選ぶと黄色く塗れます。受講者の画面には出ません。このパソコンにだけ残ります。</p>
          <p><button class="btn-dark" type="button" id="teacher-off">マーカーをOFFにする</button></p>
        </div>`
            : ""
        }

        <div class="card">
          <h2>学習進捗</h2>
          <p class="easy-meta">全体 ${stats.overall}%　読んだ ${stats.done} / ${stats.total}　修了 ${doneIds.length} 講座　この端末に残ります</p>
          ${thinMeter(stats.overall, "hero-meter", "全体の進度")}
          <details class="fold fold-inline" data-fold="courses" ${openFolds.has("courses") ? "open" : ""}>
            <summary>講座ごとの進度を見る</summary>
            <ul class="hub-courses">${courseRows}</ul>
          </details>
          <h3 class="report-title">進度を先生に知らせる</h3>
          <p class="easy-meta">進度はこの端末にしか残らないので、先生からは見えません。下のボタンで、いまの進度を文面にして送れます。</p>
          <p class="cta-row">
            <button class="btn-orange" type="button" id="report-mail">先生にメールで送る</button>
            <button class="btn-dark" type="button" id="report-copy">文面をコピー</button>
          </p>
          <p class="easy-meta" id="report-hint" role="status"></p>
        </div>

        ${foldCard(
          "badges",
          `修了バッジ・修了証（${doneIds.length}）`,
          doneIds.length
            ? `<div class="learn-badges">${doneIds
                .map((id) => {
                  const [name, face] = STAMP_LABELS[id] || [id, "💮"];
                  return `<a class="learn-badge" href="#/cert/${id}" data-link><span aria-hidden="true">${face}</span>${escapeHtml(name)} 修了</a>`;
                })
                .join("")}</div>
            <p class="easy-meta">バッジを押すと修了証を表示・印刷できます。</p>`
            : `<p>講座を最後まで読むと、ここにバッジと修了証が出ます。</p>`
        )}

        ${foldCard(
          "ask",
          "質問・相談",
          `<p class="easy-meta">自動応答はすぐ返します。宮田先生へ直接聞く場合は、原則24時間以内に返信します。外のサイトには飛びません。</p>
          ${chatTabsHTML()}
          <div class="bot-pair is-teacher">
            ${directChatHTML()}
            ${teacherAskHTML()}
          </div>
          <p><a class="btn-dark" href="#/chat" data-link>チャットページで大きく見る</a>
          <a class="btn-dark" href="#/course/faq" data-link>つまずき一覧</a>
          <a class="btn-dark" href="#/safety" data-link>安全の約束</a></p>`,
          "bot-card"
        )}

        ${foldCard(
          "works",
          `やってみた（${works.length}）`,
          `<p class="easy-meta">自分の成果メモです。この端末に残ります。写真・PDF・CSVも添付できます（1枚あたり1MBまで）。</p>
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
          </ul>`
        )}

        ${foldCard(
          "files",
          "資料ダウンロード",
          `<ul class="hub-files">
            <li><a href="#/prompts" data-link>お願い文（プロンプト集）</a></li>
            <li><a href="materials/invoice-template.txt" download>請求書ひな形（テキスト）</a></li>
            <li><a href="materials/expense-sample.csv" download>経費のサンプルCSV</a></li>
            <li><a href="materials/abc-sample.csv" download>ABC分析のサンプルCSV</a></li>
          </ul>`
        )}

        ${foldCard(
          "invite",
          "ほかの人に送る",
          `<p class="easy-meta">${
            isTeacher()
              ? "先生用の表示です。受講コードつきのリンク（事務・道具・全部）は、受講者の画面には出ません。そのコースを契約した人にだけ送ってください。"
              : "教室の入口のリンクです。受講コードは入っていません。講座を開くコードは、塾の案内をご覧ください。"
          }</p>
          <p class="easy-meta">携帯では、下のリンクを使ってください。パソコンの「localhost」や Cursor のプレビューは、携帯から開けません。</p>
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
          </ul>`
        )}

        <div class="card">
          <h2>お気に入り</h2>
          <p>右上の「お気に入り追加」を押したページは <a href="#/notes" data-link>お気に入り</a> で全部見られます。いま ${loadFavs().length} 件です。</p>
        </div>
        ${termsNoticeHTML("compact")}
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

  // マイページの進度を、先生に送る文面にする
  const progressReport = () => {
    const stats = courseStats();
    const lines = HOME_ORDER.filter((id) => CLASSROOM.courses[id] && id !== "faq" && canSeeCourse(id)).map((id) => {
      const short = (STAMP_LABELS[id] || [CLASSROOM.courses[id].title])[0];
      return `・${short}：${percent(id)}%${percent(id) >= 100 ? "　修了" : ""}`;
    });
    return `【教室の進度】
名前：${memberName() || "（未記入）"}
日付：${new Date().toLocaleDateString("ja-JP")}
全体：${stats.overall}%（読んだ ${stats.done} / ${stats.total} ページ）

${lines.join("\n")}

（パスワード・口座は書いていません）`;
  };

  const bindReport = () => {
    const hint = document.getElementById("report-hint");
    const mailBtn = document.getElementById("report-mail");
    if (mailBtn) {
      mailBtn.onclick = () => {
        const name = memberName();
        const subject = encodeURIComponent(`教室の進度${name ? `（${name}）` : ""}`);
        if (hint) hint.textContent = `${TEACHER_MAIL} 宛のメールを開きます。送信を押すと先生に届きます。`;
        location.href = `mailto:${TEACHER_MAIL}?subject=${subject}&body=${encodeURIComponent(progressReport())}`;
      };
    }
    const copyBtn = document.getElementById("report-copy");
    if (copyBtn) {
      copyBtn.onclick = async () => {
        try {
          await navigator.clipboard.writeText(progressReport());
          if (hint) hint.textContent = "進度の文面をコピーしました。いつもの連絡手段に貼って送れます。";
        } catch {
          if (hint) hint.textContent = "コピーできませんでした。「先生にメールで送る」を使ってください。";
        }
      };
    }
  };

  // マイページの畳んだ欄。開いたものは、画面を描き直しても開いたままにする
  const openFolds = new Set();

  const foldCard = (id, title, inner, cls = "") => `
        <details class="card fold ${cls}" data-fold="${id}" ${openFolds.has(id) ? "open" : ""}>
          <summary><h2>${title}</h2></summary>
          <div class="fold-body">${inner}</div>
        </details>`;

  const bindFolds = () => {
    document.querySelectorAll("details[data-fold]").forEach((el) => {
      el.ontoggle = () => {
        if (el.open) openFolds.add(el.dataset.fold);
        else openFolds.delete(el.dataset.fold);
      };
    });
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
          : { text: "いまは答えを用意できていません。つまずき一覧を見るか、「先生に直接聞く」を使ってください。", href: "#/course/faq", link: "つまずき一覧" };
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
    let desc = "求人ポスター、チャットでの作業、Claude Code を自分のペースで学べる教室サイトです。";
    if (parts[0] === "me") {
      title = `マイページ｜${site}`;
      desc = "続き・進度・修了証・資料がある、自分の学びの拠点です。";
    } else if (parts[0] === "chat") {
      title = `チャット｜${site}`;
      desc = "よくある質問の自動応答と、先生への質問ができます。";
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
    else if (parts[0] === "cowork") title = `チャットで作業｜${site}`;
    else if (parts[0] === "code") title = `Claude Code｜${site}`;
    else if (parts[0] === "course" && CLASSROOM.courses[parts[1]]) {
      const c = CLASSROOM.courses[parts[1]];
      const lesson = parts[2] && c.lessons.find((l) => l.id === parts[2]);
      title = lesson ? `${lesson.title}｜${c.title}` : `${c.title}｜${site}`;
      desc = c.subtitle || desc;
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

  const PUBLIC_SITE = "https://mmiho1505-code.github.io/miyata-claude-classroom/";

  const siteBase = () => {
    const origin = String(location.origin || "");
    const local =
      origin === "null" ||
      origin.startsWith("file:") ||
      /localhost|127\.0\.0\.1|\[::1\]|192\.168\.|10\.|172\.(1[6-9]|2\d|3[01])\./i.test(origin);
    if (local) return PUBLIC_SITE;
    return `${origin}${location.pathname.replace(/[^/]*$/, "")}`.replace(/\/?$/, "/");
  };

  // 受講コードつきのリンクは、先生用の表示のときだけ出す。受講者には入口のリンクだけ。
  const inviteLinks = () => {
    const base = siteBase();
    const open = [["教室の入口（準備だけ）", base]];
    if (!isTeacher()) return open;
    return open.concat([
      ["事務コース（Cowork）", `${base}?key=jimu`],
      ["道具コース（Claude Code）", `${base}?key=dougu`],
      ["全部開ける", `${base}?key=zenbu`]
    ]);
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
        const base = siteBase();
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
    migrateProgress();
    applyNameFromUrl();
    applyKeyFromUrl();
    applyTeachFromUrl();
    const hash = (location.hash || "#/").split("?")[0];
    const parts = hash.replace(/^#/, "").split("/").filter(Boolean);
    let html = "";
    if ((parts[0] === "course" || parts[0] === "quiz" || parts[0] === "cert") && COURSE_ALIAS[parts[1]]) {
      const to = COURSE_ALIAS[parts[1]];
      const lessonId = parts[0] === "course" ? lessonFromOld(parts[1], parts[2]) : null;
      location.replace(`#/${parts[0] === "quiz" ? "course" : parts[0]}/${to}${lessonId ? `/${lessonId}` : ""}`);
      return;
    }
    if (parts[0] === "course" && parts[2] && CLASSROOM.courses[parts[1]] && !CLASSROOM.courses[parts[1]].lessons.some((l) => l.id === parts[2])) {
      location.replace(`#/course/${parts[1]}`);
      return;
    }
    if (["cowork", "code", "applied", "beginner"].includes(parts[0])) {
      location.replace("#/");
      return;
    }
    if (parts[0] === "quiz") {
      location.replace(parts[1] ? `#/course/${parts[1]}` : "#/");
      return;
    }
    if ((parts[0] === "course" || parts[0] === "cert") && parts[1] && !canSeeCourse(parts[1])) {
      html = lockedView(toolOf(parts[1]) === "code" ? "dougu" : "jimu");
    }
    else if (parts.length === 0) html = home();
    else if (parts[0] === "course" && parts[1] && !CLASSROOM.courses[parts[1]]) html = notFound();
    else if (parts[0] === "course" && parts[1] && !parts[2]) html = courseOverview(parts[1]);
    else if (parts[0] === "course" && parts[1] && parts[2]) html = lessonView(parts[1], parts[2]);
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
    hydratePics();
    bindCopies();
    bindComplete();
    bindTeachMarks();
    bindMember();
    bindWorks();
    bindReport();
    bindFolds();
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
    const teacherOff = document.getElementById("teacher-off");
    if (teacherOff) {
      teacherOff.onclick = () => {
        setTeacher(false);
        render({ keepScroll: true });
      };
    }
    app.classList.remove("page-in");
    void app.offsetWidth;
    app.classList.add("page-in");
    if (sessionStorage.getItem("classroom-cheer")) playWin();
    const navHash = hash.split("?")[0] || "#/";
    setActiveNav(navHash);
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
    navigator.serviceWorker.register("sw.js?v=phone1", { updateViaCache: "none" }).catch(() => {});
  }
})();
