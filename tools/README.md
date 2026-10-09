# 資料を作り直す道具

教室のサイトそのものには使いません。資料を作り直すときだけ使います。

## スライドPDFと早見表（`tools/pdf/`）

```bash
cd tools/pdf
npm install                     # 文字（フォント）を入れる
pip install playwright          # Chromium が入っている環境で
python3 build_docs.py ../../materials          # 基本設定編・頼み方編・早見表3枚・準備チェック表
python3 build.py "$PWD/salary.html" ../../materials/salary.pdf   # 給料計算編
```

- 中身の文章は `build_docs.py` と `salary.html` に書いてあります。直したら作り直します
- 見た目は `deck.css`
- 作り直すと、はみ出しがないかの数字が出ます（スライドは `tight/overflow: []`、A4は余白がプラス）

## 練習用データ（`tools/practice/`）

```bash
pip install openpyxl
python3 tools/practice/make_practice.py materials/practice
```

- すべて架空のデータです。会社名・人名・金額は作りものです
- 乱数の種を固定しているので、作り直しても同じ中身になります
- 作り直したら `materials/practice/practice-all.zip` も作り直します
