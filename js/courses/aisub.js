(() => {
  const box = (text) => `
            <div class="code-wrap">
              <button class="copy" type="button">コピー</button>
              <pre>${text}</pre>
            </div>`;

  CLASSROOM.courses.aisub = {
    id: "aisub",
    title: "デジタル化・AI導入補助金",
    subtitle: "旧IT導入補助金。会計・勤怠・AIツールの費用の一部を国が補助",
    duration: "約15分",
    audience: "中小企業・個人事業主／ツール導入を考えている人",
    lessons: [
      {
        id: "goal",
        title: "どんな制度か",
        was: ["aisub/goal", "aisub/who", "aisub/change"],
        body: `
            <p class="kicker">GOAL　1／6</p>
            <h1>名前が変わった「IT導入補助金」</h1>
            <p>会計ソフトを入れたい。見積を見ると高い。「AI導入補助金」で検索して出てくるのは、多くの場合 <strong>2026年度から IT導入補助金 が名前を変えた「デジタル化・AI導入補助金」</strong>です。ITツールや AIツールを入れる費用の一部を、国が補助します。</p>
            <div class="ops">
              <article class="op"><span class="num">1</span><h3>誰が</h3><p>中小企業、小規模事業者、個人事業主、医療法人・社会福祉法人など。従業員数や資本金の条件は公式で確認</p></article>
              <article class="op"><span class="num">2</span><h3>何が</h3><p>会計ソフト、勤怠、AI機能つきのツールなど。AI機能つきは2026年度から登録されやすくなった</p></article>
              <article class="op"><span class="num">3</span><h3>2回目以降</h3><p>3年間の事業計画と、賃上げ要件が必要</p></article>
            </div>
            <div class="callout warn">金額・締切・要件は変わります。申請の前に、必ず <a href="https://it-shien.smrj.go.jp/" target="_blank" rel="noopener">公式サイト（IT導入補助金／デジタル化・AI導入補助金）</a> で最新を確認してください。最終判断は公式と専門家です。</div>
          `
      },
      {
        id: "how",
        title: "申請のしかたと要件",
        was: ["aisub/how", "aisub/need"],
        body: `
            <p class="kicker">申請　2／6</p>
            <h1>支援事業者と一緒に申請する</h1>
            <p>自社だけでは出せません。登録された <strong>IT導入支援事業者</strong>（ITベンダーなど）と一緒に申請します。</p>
            <ol>
              <li>入れたいツール（会計、勤怠、AI など）を決める</li>
              <li>そのツールを扱う、登録済みの支援事業者を探す（公式の一覧）</li>
              <li>見積・計画を一緒に作り、申請する</li>
            </ol>
            <h2>採択後に守ること</h2>
            <ul>
              <li><strong>労働生産性</strong>を 3% 以上向上させる</li>
              <li>賃上げの目標を達成できないと、<strong>補助金の一部を返す</strong></li>
            </ul>
            <p>「必ず通る」と言う知らない業者には飛びつきません。返さなくてよい条件は、申請前に支援事業者と読みます。</p>
          `
      },
      {
        id: "frames",
        title: "申請枠と日程",
        was: ["aisub/frames", "aisub/when"],
        body: `
            <p class="kicker">金額・日程　3／6</p>
            <h1>枠で上限と率が違う。締切は複数回</h1>
            <p>2026年度の案内でよく出る数字です。正しいのは公式です。何枠に入るかは、支援事業者に今の業務を話して選んでもらいます。</p>
            <ul>
              <li><strong>通常枠</strong> … 5万〜150万円（業務プロセス1〜3つ）／150万〜450万円（4つ以上）。1/2以内（最低賃金に近い賃金水準の事業者は 2/3以内）</li>
              <li><strong>インボイス枠（インボイス対応類型）</strong> … ITツール最大350万円＋PC・タブレット、レジ等。2/3〜3/4以内（小規模事業者は 4/5以内）</li>
              <li><strong>インボイス枠（電子取引類型）</strong> … 最大350万円。2/3以内</li>
              <li><strong>セキュリティ対策推進枠</strong> … 5万〜150万円。1/2以内（小規模事業者は 2/3以内）</li>
              <li><strong>複数者連携枠</strong> … 上限3,000万円。1/2〜4/5以内</li>
            </ul>
            <h2>日程</h2>
            <ul>
              <li>受付開始：3月30日から。締切は複数回</li>
              <li>解説サイトによると、第6次の締切は <strong>10月30日 17:00</strong>。第7次以降は未定、とされることがあります</li>
              <li>直近の採択率は全体で約 <strong>44%</strong>（毎回違う目安）</li>
            </ul>
          `
      },
      {
        id: "tools",
        title: "何に使うか決める",
        was: ["aisub/class", "aisub/tools"],
        body: `
            <p class="kicker">道具　4／6</p>
            <h1>いちばん時間がかかる仕事を1つ選ぶ</h1>
            <p>例：「シフト表を作るのが大変」「レシートの入力が面倒」。下の名前は「こういうものがある」という例で、推薦ではありません。補助が出るのは公式に登録された製品だけです。</p>
            <ul>
              <li>請求書・会計 … freee会計、マネーフォワード クラウド会計 など（科目と金額は人が確認）</li>
              <li>出退勤・シフト … KING OF TIME、ジョブカン勤怠、Airシフト、シフトボード など</li>
              <li>給料・労務 … マネーフォワード クラウド給与、freee人事労務、スマートHR など</li>
              <li>経費 … レシート撮影で下書きが入るクラウド経費。科目は人が確認</li>
              <li>顧客台帳・案件 … kintone、名刺・案件のクラウドCRM など</li>
              <li>店舗・予約 … トレタ、ebica、STORES予約 など</li>
              <li>レジ・売上 … スマレジ、Airレジ など</li>
              <li>発注・在庫 … sinops-CLOUD、HANZO AI など。数字は人が見てから確定</li>
              <li>電子契約・インボイスの請求 … クラウドサイン、GMOサイン、請求書クラウド など</li>
              <li>Claude などの AI … 登録された製品か、支援事業者に確認</li>
            </ul>
            <div class="callout warn">補助額 ＝ 補助対象経費 × 補助率（上限あり）。不採択なら全額自己負担です。<strong>交付決定のあと</strong>に契約・購入します。先に買うと対象外になりやすいです。</div>
            <p>支援事業者やベンダーに聞くときは、これを貼ります。</p>
            ${box(`この〔サービス名〕は、デジタル化・AI導入補助金（旧IT導入補助金）の登録ITツールですか。
インボイス枠など、どの枠の対象になりうるかも教えてください。
交付決定の前に契約・購入してよいか、必ず止めて確認してください。
「必ず通る」「必ず4/5補助」とは言わないでください。`)}
          `
      },
      {
        id: "food",
        title: "飲食で探す",
        was: ["aisub/food"],
        body: `
            <p class="kicker">飲食　5／6</p>
            <h1>公式の検索で業種とプロセスを絞る</h1>
            <p>課題を「レジ」「発注」「シフト」「予約」の1つにします。</p>
            <ul>
              <li><strong>モバイルオーダー・POSレジ</strong> … 決済・債権債務・資金回収／顧客対応・販売支援</li>
              <li><strong>受発注・在庫</strong> … 供給・在庫・物流</li>
              <li><strong>シフト・勤怠・給与</strong> … 総務・人事・給与・教育訓練・法務・情シス・統合業務</li>
              <li><strong>予約管理</strong> … 顧客対応・販売支援</li>
            </ul>
            <ol>
              <li>登録ツールの検索で、「検索条件を変更する」を開く</li>
              <li>業種を「飲食サービス業」に絞る</li>
              <li>必要な業務プロセスを選ぶ</li>
              <li>飲食に強い支援事業者（コンソーシアムの幹事など）で絞る。名前の例：リコージャパン など（推薦ではありません）</li>
            </ol>
            <p>「インボイス対応」の POS や会計は、インボイス枠の候補になりやすいです。枠と率は公式で確認します。</p>
            <p><a class="btn-orange" href="https://it-shien.smrj.go.jp/" target="_blank" rel="noopener">公式サイトで探す</a></p>
          `
      },
      {
        id: "summary",
        title: "まとめ",
        was: ["aisub/summary"],
        body: `
            <p class="kicker">まとめ　6／6</p>
            <h1>一緒に申請。公式を最後に見る</h1>
            <ul>
              <li>AI導入補助金 ≒ デジタル化・AI導入補助金（旧 IT導入補助金）</li>
              <li>登録された支援事業者と一緒に申請</li>
              <li>生産性 3% 以上。賃上げが未達だと一部返還</li>
              <li>課題を1点。登録ツールか確認。契約は交付決定のあと</li>
              <li>締切・金額は変わる。申請前に公式</li>
            </ul>
            <p><a class="btn-orange" href="https://it-shien.smrj.go.jp/" target="_blank" rel="noopener">公式サイトを開く</a></p>
          `
      }
    ]
  };
})();
