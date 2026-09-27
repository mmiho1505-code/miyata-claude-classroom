(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.hr = {
    id: "hr",
    title: "職種別AI活用｜人事の仕事をAIと人で切り分ける",
    subtitle: "業務を軽くするだけでなく、採用・配置・評価・報酬・労働時間の制度を作り直す",
    duration: "約45分",
    audience: "人事・経営に関わる人／これから関わる人",
    lessons: [
      {
        id: "goal",
        title: "結論",
        body: `
            <p class="kicker">GOAL　1／9</p>
            <h1>人事には、二つの役割がある</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>業務を軽くする</h3><p>自分たちの仕事を、AIで軽くする</p></article>
              <article class="op"><span class="num">2</span><h3>制度を作り直す</h3><p>AIが働き手になった組織の、採用・配置・評価・報酬・労働時間を作り直す</p></article>
            </div>
            <div class="callout">人事部だけの話ではありません。これから経営に関わる人すべてに共通する課題です。</div>
            <p>事例：メルカリでCTOだった人が、CHRO（人事の責任者）と CAIO（AIの責任者）を兼ねた、という紹介がありました。理由は、<strong>ツールを入れても、決め方や組織の仕組みが古いままではAIを活かしきれない</strong>からです。</p>
          `
      },
      {
        id: "field",
        title: "現場で起きていること",
        practice: true,
        body: `
            <p class="kicker">いま　2／9　練習</p>
            <h1>書類・問い合わせ・評価が、すでに変わっている</h1>
            <div class="qa">
              <p class="qa-q">応募書類</p>
              <p>AIで書いた、綺麗だけれど中身のないESが増え、書類選考で差がつかなくなっている。ロート製薬は書類選考をやめ、全国を回って15分の面談を行っている、という紹介がありました。</p>
            </div>
            <div class="qa">
              <p class="qa-q">社員の問い合わせ</p>
              <p>有給の残り日数などを、人事より先にAIに聞くようになった。規程の最新版を、根拠つきで引ける状態にしておく必要がある。</p>
            </div>
            <div class="qa">
              <p class="qa-q">評価</p>
              <p>AIを使う人と使わない人の生産量の差が、経験では説明できないほど大きくなる。働いた時間ではなく、<strong>判断の質と再現性</strong>で評価する必要が出てくる。</p>
            </div>
            <p>規程をAIに渡したあとは、根拠なしの答えを出させません。下をコピーして使えます。</p>
            ${box(`このチャットでは、渡した就業規則・規程の最新版だけを根拠にしてください。
有給の残り日数や可否を聞かれたら、該当する条項を先に示してから答えてください。
規程に無いことは推測で決めず、「規程に書いていないので人事に確認してください」と書いてください。`)}
          `
      },
      {
        id: "system",
        title: "制度をどう変えるか",
        body: `
            <p class="kicker">これから　3／9</p>
            <h1>件数と時間から離れる</h1>
            <table>
              <thead><tr><th>項目</th><th>これまで</th><th>これから</th></tr></thead>
              <tbody>
                <tr><td>採用</td><td>件数が増えたら人を増やす</td><td>AIが処理しきれない判断・対応・例外処理ができる人を補う</td></tr>
                <tr><td>配置</td><td>今ある仕事に人を割り当てる</td><td>減った作業と増やしたい仕事を見て、役割を組み替える</td></tr>
                <tr><td>評価・報酬</td><td>個人の処理件数や労働時間</td><td>担う責任、成果、改善への貢献</td></tr>
                <tr><td>必要な人数</td><td>作業量から決める</td><td>AI導入後も残る確認・例外対応の負荷と、求める品質から見積もる</td></tr>
              </tbody>
            </table>
          `
      },
      {
        id: "four",
        title: "人に残る4つの力",
        body: `
            <p class="kicker">人　4／9</p>
            <h1>手順の決まった作業から、先にAIへ</h1>
            <p>人に残るのは、次の4つです。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>意図をくむ</h3><p>相手の意図をくむ力</p></article>
              <article class="op"><span class="num">2</span><h3>見直す</h3><p>AIの回答を見直す力。根拠を調べ、直す理由を説明できるか</p></article>
              <article class="op"><span class="num">3</span><h3>責任</h3><p>責任を引き受ける力</p></article>
              <article class="op"><span class="num">4</span><h3>巻き込む</h3><p>人を巻き込んで動かす力</p></article>
            </div>
            <div class="callout">このため、採用では「Photoshopが使えます」といったスキルの価値が下がります。面接での見極めが難しくなり、試験型の面接が増えるかもしれない、とのことでした。</div>
          `
      },
      {
        id: "types",
        title: "必要な人材の3つの型",
        body: `
            <p class="kicker">役割　5／9</p>
            <h1>決める・組む・回す</h1>
            <div class="ops">
              <article class="op"><span class="num">決</span><h3>ストラテジスト</h3><p>決める人。AIエージェントをどこに置くかを設計する</p></article>
              <article class="op"><span class="num">組</span><h3>アーキテクト</h3><p>組む人。現場でエージェントを作る</p></article>
              <article class="op"><span class="num">回</span><h3>オペレーター</h3><p>回す人。日々エージェントの仕事を監視し、直す</p></article>
            </div>
            <p>今後いちばん人数が必要になるのは <strong>オペレーター</strong> です。業務の知識がないと務まりません。</p>
          `
      },
      {
        id: "bonus",
        title: "賞与の考え方",
        body: `
            <p class="kicker">報酬　6／9</p>
            <h1>個人の売上には、表れない働きがある</h1>
            <p>エージェントを作った人やノウハウを提供した人の働きは、その人個人の売上には表れず、チーム全体の成果に表れます。</p>
            <p>そこで、賞与の原資を次の2つに分ける考え方が紹介されました。</p>
            <div class="ops">
              <article class="op"><span class="num">全</span><h3>全員への還元</h3><p>チーム全体の成果を分ける</p></article>
              <article class="op"><span class="num">加</span><h3>貢献への加算</h3><p>ノウハウを渡した人、エージェントを作った人、日々改善した人</p></article>
            </div>
          `
      },
      {
        id: "time",
        title: "余った時間",
        body: `
            <p class="kicker">時間　7／9</p>
            <h1>新しい仕事・学び直し・休み</h1>
            <p>AIで生まれた余った時間は、次のどれにでも回せます。</p>
            <div class="ops">
              <article class="op"><span class="num">①</span><h3>新しい仕事</h3><p>余力を、増やしたい仕事へ</p></article>
              <article class="op"><span class="num">②</span><h3>学び直し</h3><p>残る4つの力や、業務の知識を伸ばす</p></article>
              <article class="op"><span class="num">③</span><h3>休み</h3><p>労働時間の短縮</p></article>
            </div>
            <div class="callout">同じ成果と品質を保てるなら、給与はそのままで週休3〜4日や1日4時間勤務も選択肢になる、という話でした。約束ではなく、選択肢です。</div>
          `
      },
      {
        id: "qa",
        title: "よくある質問",
        practice: true,
        body: `
            <p class="kicker">質疑　8／9　練習</p>
            <h1>反対・測り方・仕事の機会</h1>
            <div class="qa">
              <p class="qa-q">セキュリティを理由に反対される</p>
              <p>今は学習に使われない設定が一般的です。懸念の中身は、Googleドライブを使うかどうかの議論とほぼ同じ。理由を添えて説明すればよい、とのことでした。</p>
            </div>
            ${box(`社内の生成AIは、学習に使わない設定が一般的です。
懸念の中身は、Googleドライブに資料を置くかどうかの議論とほぼ同じです。
送ってよい情報と、送ってはいけない情報を先に決めて、その範囲で使います。`)}
            <div class="qa">
              <p class="qa-q">チームへの貢献度をどう測るか</p>
              <p>Copilot などでは、作ったエージェントの利用回数をダッシュボードで確認できる、という話でした。ショウコさんは査定面談で、「週4時間かかっていた作業を10分にし、人件費に換算してこれだけ削減した」と説明して評価されたそうです。</p>
            </div>
            ${box(`査定で話すメモ（自分の数字に直して使う）
・以前：週＿時間かかっていた作業
・いま：＿分
・人件費に換算すると、＿円相当の削減
・作ったエージェントの利用回数：＿回（分かる場合）
・ノウハウを渡した相手：＿`)}
            <div class="qa">
              <p class="qa-q">ビジネスの機会として</p>
              <p>AIに詳しい人の多くは、賞与の計算式など組織・人事の知識を持っていない。そこを押さえておくだけで、AIコンサルとしての価値が大きく変わる、とのことでした。</p>
            </div>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        body: `
            <p class="kicker">覚えておくこと　9／9</p>
            <h1>軽くするだけではない。制度も作り直す</h1>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>二つの役割</h3><p>業務を軽くする。採用・配置・評価・報酬・労働時間を作り直す</p></article>
              <article class="op"><span class="num">2</span><h3>人に残る4つ</h3><p>意図・見直し・責任・巻き込み。オペレーターがいちばん人数が要る</p></article>
              <article class="op"><span class="num">3</span><h3>貢献の測り方</h3><p>賞与は全員還元と貢献加算。余った時間は仕事・学び・休みのどれか</p></article>
            </div>
            <p><a class="btn-orange" href="#/course/hr/field" data-link>現場の話からやり直す</a>
            <a class="btn-dark" href="#/" data-link>ホームへ</a></p>
          `
      }
    ]
  };

  Object.assign(CLASSROOM.quizzes, {
    hr: [
      {
        q: "人事の二つの役割は？",
        choices: ["採用だけと給与だけ", "業務をAIで軽くすることと、制度を作り直すこと", "ポスターを作ることとチャットすること"],
        a: 1,
        explain: "採用・配置・評価・報酬・労働時間の制度も、作り直す対象です。"
      },
      {
        q: "ツールを入れても活かしきれない主な理由は？",
        choices: ["パソコンが古いから", "決め方や組織の仕組みが古いままだから", "英語ができないから"],
        a: 1,
        explain: "メルカリの例では、CTOだった人がCHROとCAIOを兼ねた理由として紹介されました。"
      },
      {
        q: "人に残る4つの力に、含まれないものは？",
        choices: ["相手の意図をくむ力", "Photoshopが使えること", "責任を引き受ける力"],
        a: 1,
        explain: "手順の決まった作業や、個別ソフトの操作スキルの価値は下がります。"
      },
      {
        q: "今後いちばん人数が必要になる型は？",
        choices: ["ストラテジスト", "アーキテクト", "オペレーター"],
        a: 2,
        explain: "日々監視して直す人です。業務の知識がないと務まりません。"
      },
      {
        q: "賞与の原資の分け方として紹介されたのは？",
        choices: ["売上の多い人だけ", "全員への還元と、貢献への加算", "勤続年数だけ"],
        a: 1,
        explain: "加算の対象は、ノウハウを渡した人、エージェントを作った人、日々改善した人です。"
      },
      {
        q: "余った時間の使い道に、含まれないものは？",
        choices: ["新しい仕事", "学び直し", "必ず残業を増やす"],
        a: 2,
        explain: "新しい仕事、学び直し、休み・労働時間の短縮のどれにでも回せます。"
      }
    ]
  });
})();
