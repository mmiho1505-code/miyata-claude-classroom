(() => {
  const talk = CLASSROOM.talk;

  CLASSROOM.courses.coworkjudge = {
    id: "coworkjudge",
    title: "業務への落とし込みと任せる業務の判断基準",
    subtitle: "何を Cowork に任せるかを、4つのマスで決める",
    duration: "約15分",
    audience: "自分の仕事のどれを自動にすればよいか迷っている人",
    lessons: [
      {
        id: "goal",
        title: "今日のゴール",
        body: `
            <p class="kicker">GOAL　1／4</p>
            <h1>任せるのは「やり方が決まっていて、何度もくり返す」仕事</h1>
            <p>ここまでで、スキル・プロジェクト・スケジュール実行など、いろいろな任せ方を学びました。最後に、<strong>自分の仕事のどれを Cowork に任せるか</strong>の決め方を考えます。</p>
            <table>
              <thead><tr><th></th><th>たまにしかやらない</th><th>何度もくり返す</th></tr></thead>
              <tbody>
                <tr><th>やり方が決まっている</th><td>自動にするかは、一度立ち止まって考える</td><td><strong>◎ 一番に Cowork へ。</strong>効果が一番大きく、失敗しても取り返しがつく</td></tr>
                <tr><th>そのつど変わる</th><td>自動には向かない（手段と目的が逆になりやすい）</td><td>何度もあるので考える余地あり（まずは右上から）</td></tr>
              </tbody>
            </table>
            <p>右上と左下以外のマスの説明は、先生の話から整理したものです。</p>
            <p>まとめ表：<a href="materials/cowork-judge.xlsx" download>任せる業務の判断基準（Excel）</a></p>
          `
      },
      {
        id: "trap",
        title: "手段と目的の逆転",
        body: `
            <p class="kicker">知る　2／4</p>
            <h1>「自動にすること」が目的になっていないか</h1>
            <p>Cowork は面白いので、<strong>二度とやらない作業まで</strong>自動にしようとして、お願いの文やスキルづくりに時間をかけてしまいがちです。次に使う機会がなければ、かけた時間のほうが多くなります。</p>
            <div class="callout">任せる前に「これは本当に自動にする必要があるか」と、自分に聞きます。一度きりの作業なら、ふつうにチャットで頼むだけで十分です。</div>
          `
      },
      {
        id: "list",
        title: "仕事の棚卸し",
        practice: true,
        body: `
            <p class="kicker">やってみる　3／4</p>
            <h1>1週間の仕事を書き出して、4つのマスに分ける</h1>
            <ol>
              <li>1週間分の作業を、思いつくまま書き出す（まずは3つだけでもよい）</li>
              <li>書き出した作業を、4つのマスに分ける</li>
              <li>右上（やり方が決まっていて、何度もくり返す）から任せる</li>
            </ol>
            <p>分けるのも、AI に手伝ってもらえます。前のページの表をスクリーンショット（画面の写真）にして、書き出した作業といっしょに渡します。</p>
            ${talk([
              { me: `添付の表の4つのマス（やり方が決まっている／そのつど変わる × たまに／何度もくり返す）に、次の作業を振り分けてください。理由も一言ずつ書いてください。

・毎朝のメールの仕分け
・月末の経費精算
・年に1回の社員旅行の企画
・毎週の進捗報告書
・お客様ごとにちがう提案書づくり` },
              { ai: `振り分けました。\n\n【やり方が決まっている × 何度もくり返す】\n・毎朝のメールの仕分け（毎日・同じ基準）\n・月末の経費精算（毎月・同じ手順）\n・毎週の進捗報告書（毎週・同じ項目）\n\n【そのつど変わる × 何度もくり返す】\n・お客様ごとにちがう提案書づくり（よくあるが、中身が毎回ちがう）\n\n【そのつど変わる × たまにしかやらない】\n・年に1回の社員旅行の企画（年1回・毎回ちがう）` }
            ])}
            <p>振り分けは目安です。最後は、自分の仕事を一番知っている自分が決めます。</p>
          `
      },
      {
        id: "steps",
        title: "任せ方の4ステップ",
        body: `
            <p class="kicker">まとめ　4／4</p>
            <h1>手で試す → スキル → プロジェクト → 定期実行</h1>
            <table>
              <thead><tr><th>ステップ</th><th>すること</th><th>復習</th></tr></thead>
              <tbody>
                <tr><td>1. 手で動かす</td><td>まず1回やってみて、うまくいくまで直す。うまくいかないまま自動にすると、手直しが増える</td><td><a href="#/course/coworkprompt" data-link>頼み方の4つの要素</a></td></tr>
                <tr><td>2. スキルにする</td><td>短いお願いで同じことができるようにし、スキル名だけで呼べるようにする</td><td><a href="#/course/coworkskillmake" data-link>スキルを作成して呼び出す</a></td></tr>
                <tr><td>3. プロジェクトにまとめる（必要なら）</td><td>プロジェクトにまとめるか、そのつどスキルを呼ぶだけでよいかは、作業しだい</td><td><a href="#/course/coworkskillproject" data-link>スキルとプロジェクトの使い分け</a></td></tr>
                <tr><td>4. 定期実行にする（必要なら）</td><td>決まった時期にやる作業なら、スケジュール実行に乗せる</td><td><a href="#/course/coworkschedule" data-link>スケジュール実行で定期タスク化する</a></td></tr>
              </tbody>
            </table>
            <ol>
              <li>任せるのは「やり方が決まっていて、何度もくり返す」仕事から</li>
              <li>二度とやらない作業を、自動にしようとしない</li>
              <li>1週間の仕事を書き出して、4つのマスに分ける</li>
              <li>手で試してから、スキル → 必要ならプロジェクト・定期実行へ</li>
            </ol>
            <p>まとめ表：<a href="materials/cowork-judge.xlsx" download>任せる業務の判断基準（Excel）</a></p>
            <p><a class="btn-orange" href="#/course/cowork" data-link>次へ：はじめての Claude Cowork</a>
            <a class="btn-dark" href="#/course/coworkmobile" data-link>スマホからタスクを依頼するへ</a></p>
          `
      }
    ]
  };
})();
