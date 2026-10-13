// 生徒さん専用の講座に、名前とパスワードで鍵をかける道具。
// 原本 private/courses/<講座id>.js を暗号化して、js/locked/<講座id>.js を作る（サイトに置くのはこちらだけ）。
//
// 使い方（教室のフォルダで）:
//   node tools/lock-course.mjs tosou kurosawa
// パスワードは画面で聞かれる（打った文字は表示されない）。講座を直したら、同じ1行をもう一度打つ。
//
// 名前は大文字・小文字、全角・半角、空白を区別しない。パスワードは全角・半角だけ区別しない。
// サイト側の開け方は js/app.js の unlockCourse と同じにしておくこと。

import { webcrypto as crypto } from "node:crypto";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { createInterface } from "node:readline";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ITER = 600000;
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const normName = (s) => String(s || "").normalize("NFKC").trim().toLowerCase().replace(/\s+/g, "");
const normPass = (s) => String(s || "").normalize("NFKC");
const b64 = (buf) => Buffer.from(buf).toString("base64");

const askHidden = (question) =>
  new Promise((resolve) => {
    const rl = createInterface({ input: process.stdin, output: process.stdout, terminal: true });
    rl._writeToOutput = (s) => {
      if (s.startsWith(question)) rl.output.write(question);
    };
    rl.question(question, (answer) => {
      rl.close();
      process.stdout.write("\n");
      resolve(answer);
    });
  });

const main = async () => {
  const args = process.argv.slice(2);
  const outIdx = args.indexOf("--out");
  const outDir = outIdx >= 0 ? path.resolve(args[outIdx + 1]) : path.join(root, "js", "locked");
  const [courseId, rawName] = outIdx >= 0 ? args.filter((_, i) => i !== outIdx && i !== outIdx + 1) : args;
  if (!/^[a-z0-9_-]+$/.test(courseId || "") || !normName(rawName)) {
    console.error("使い方: node tools/lock-course.mjs <講座id> <生徒さんの名前>");
    process.exit(1);
  }
  const name = normName(rawName);
  const src = await readFile(path.join(root, "private", "courses", `${courseId}.js`), "utf8");

  let pass = process.env.LOCK_PASSWORD;
  if (!pass) {
    pass = await askHidden(`${name} さんのパスワード（10文字以上）: `);
    const again = await askHidden("もう一度: ");
    if (pass !== again) {
      console.error("2回のパスワードがちがいます。やり直してください。");
      process.exit(1);
    }
  }
  if (normPass(pass).length < 10) {
    console.error("パスワードは10文字以上にしてください。");
    process.exit(1);
  }

  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(`${name}\n${normPass(pass)}`), "PBKDF2", false, ["deriveKey"]);
  const key = await crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: ITER, hash: "SHA-256" },
    base,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt"]
  );
  const data = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode(src));
  const box = { v: 1, iter: ITER, salt: b64(salt), iv: b64(iv), data: b64(data) };

  await mkdir(outDir, { recursive: true });
  const out = path.join(outDir, `${courseId}.js`);
  await writeFile(
    out,
    `// 生徒さん専用の講座（暗号化ずみ）。原本は private/courses/${courseId}.js、作り方は tools/lock-course.mjs\n` +
      `(window.CLASSROOM.locked = window.CLASSROOM.locked || {})[${JSON.stringify(courseId)}] = ${JSON.stringify(box)};\n`
  );
  console.log(`できました: ${path.relative(process.cwd(), out)}`);
};

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
