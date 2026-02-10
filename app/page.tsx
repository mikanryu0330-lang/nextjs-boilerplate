export default function Home() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "株式会社ミカレ",
    url: "https://example.com",
    foundingDate: "2026",
    description:
      "ライフスタイル領域におけるブランド開発および事業創造を行う企業です。",
  };

  return (
    <>
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      <div className="min-h-screen bg-white text-zinc-900">

        {/* ================= Header ================= */}
        <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <div className="font-semibold tracking-wide">株式会社ミカレ</div>

            <nav className="hidden gap-6 text-sm text-zinc-700 md:flex">
              <a href="#about" className="hover:text-black">About</a>
              <a href="#business" className="hover:text-black">Business</a>
              <a href="#strength" className="hover:text-black">Strength</a>
              <a href="#founder" className="hover:text-black">Founder</a>
              <a href="#company" className="hover:text-black">Company</a>
              <a href="#contact" className="hover:text-black">Contact</a>
            </nav>

            <a
              href="#contact"
              className="rounded-full border border-zinc-300 px-4 py-2 text-sm hover:border-zinc-400"
            >
              お問い合わせ
            </a>
          </div>
        </header>


        {/* ================= Hero ================= */}
        <section className="border-b border-zinc-200">
          <div className="mx-auto max-w-6xl px-5 py-24">

            <h1 className="text-3xl font-semibold leading-[1.2] tracking-tight md:text-5xl">
  <span className="block">ブランドと価値を創造する。</span>

  <span className="mt-3 block">
    <span className="block sm:inline">人と暮らしに、</span>
    <span className="block sm:inline sm:ml-2">長く愛されるものを。</span>
  </span>
</h1>


            <p className="mt-8 max-w-2xl text-zinc-600 leading-relaxed">
              株式会社ミカレは、ライフスタイル領域におけるブランド開発および事業創造を行う企業です。
            </p>

            <div className="mt-10">
              <a
                href="#contact"
                className="rounded-full bg-zinc-900 px-6 py-3 text-sm text-white hover:bg-zinc-800"
              >
                お問い合わせ
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-xs text-zinc-500">
              <span className="border px-3 py-1 rounded-full">アクセサリー・ジュエリー</span>
              <span className="border px-3 py-1 rounded-full">ブランド戦略・マーケティング支援</span>
              <span className="border px-3 py-1 rounded-full">ペット関連事業</span>
            </div>
          </div>
        </section>


        {/* ================= About ================= */}
        <section id="about" className="border-b border-zinc-200">
          <div className="mx-auto max-w-5xl px-5 py-20">

            <h2 className="text-xl font-semibold mb-8">私たちについて</h2>

            <div className="space-y-6 leading-relaxed text-zinc-700">
              <p>株式会社ミカレは、ライフスタイル領域におけるブランド開発および事業創造を行う企業です。</p>

              <p>
                アクセサリー・ジュエリーの製造販売事業を中核に、
                ブランド戦略・マーケティング支援、ペット関連事業まで、
                企画・製造・販売・プロモーションを一気通貫で手がけています。
              </p>

              <p>
                私たちは単なる物販や広告支援にとどまらず、
                「ブランドを軸に、継続的な価値を生み出す仕組みそのものを設計すること」
                を強みとしています。
              </p>

              <p>
                各事業で培った知見とノウハウを横断的に活かすことで、
                持続的な成長基盤を構築しています。
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3 text-sm">
              <div>
                <div className="font-semibold">Mission</div>
                <div className="mt-2 text-zinc-600">心がときめく価値を、日常へ。</div>
              </div>

              <div>
                <div className="font-semibold">Vision</div>
                <div className="mt-2 text-zinc-600">日本発のブランドを、世界市場へ。</div>
              </div>

              <div>
                <div className="font-semibold">Value</div>
                <div className="mt-2 text-zinc-600">誠実なものづくり／長期視点の経営／戦略と実行の統合</div>
              </div>
            </div>

          </div>
        </section>


        {/* ================= Business ================= */}
        <section id="business" className="border-b border-zinc-200">
          <div className="mx-auto max-w-6xl px-5 py-20">

            <h2 className="text-xl font-semibold mb-10">事業内容</h2>

            <div className="grid gap-8 md:grid-cols-3">

              <div>
                <h3 className="font-semibold mb-3">アクセサリー・ジュエリー事業</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  素材品質と顧客体験設計にこだわり、
                  EC販売に加え、POPUPストアやイベント出店などオフライン展開も積極的に推進しています。
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-3">ブランド戦略・マーケティング支援事業</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  ブランド戦略立案から広告運用・クリエイティブ制作まで、
                  戦略と実行を一体化した支援を提供しています。
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-3">ペット関連事業</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  安心・安全を基準としたペットフードおよび関連商品の企画・製造・販売を行っています。
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* ================= Strength ================= */}
        <section id="strength" className="border-b border-zinc-200">
          <div className="mx-auto max-w-6xl px-5 py-20">

            <h2 className="text-xl font-semibold mb-10">強み</h2>

            <ul className="grid gap-4 text-sm text-zinc-700 md:grid-cols-2">
              <li>企画〜販売までの一気通貫体制</li>
              <li>D2C/ECに強いデジタルマーケティング</li>
              <li>日本市場への深い理解とローカライズ力</li>
              <li>自社事業運営に基づく実践知</li>
            </ul>
          </div>
        </section>


        {/* ================= Founder ================= */}
        <section id="founder" className="border-b border-zinc-200">
          <div className="mx-auto max-w-5xl px-5 py-20">

            <h2 className="text-xl font-semibold mb-8">代表プロフィール</h2>

            <p className="leading-relaxed text-zinc-700">
              代表取締役　劉　美含<br /><br />
              早稲田大学卒。<br />
              新卒で船井総合研究所に入社し、経営コンサルティング業務に従事。<br />
              その後、ボストン コンサルティング グループ（BCG）にて戦略コンサルタントとして、
              企業の成長戦略・新規事業開発・ブランド戦略プロジェクトを担当。
            </p>
          </div>
        </section>


        {/* ================= Company ================= */}
        <section id="company" className="border-b border-zinc-200">
          <div className="mx-auto max-w-5xl px-5 py-20">

            <h2 className="text-xl font-semibold mb-8">会社概要</h2>

            <div className="space-y-3 text-sm text-zinc-700">
              <p>会社名：株式会社ミカレ</p>
              <p>設立：2026年</p>
              <p>所在地：東京都</p>
              <p>代表取締役：劉　美含</p>
              <p>事業内容：アクセサリー／ジュエリーの製造・販売、ブランド戦略・マーケティング支援、ペット関連事業</p>
            </div>
          </div>
        </section>


        {/* ================= Contact ================= */}
        <section id="contact">
          <div className="mx-auto max-w-5xl px-5 py-20 text-center">

            <h2 className="text-xl font-semibold mb-6">お問い合わせ</h2>

            <p className="text-sm text-zinc-600 mb-8">
              お取引・パートナーシップのご相談など、お気軽にお問い合わせください。
            </p>

            <a
              href="mailto:info@yourdomain.com"
              className="rounded-full bg-zinc-900 px-8 py-3 text-sm text-white hover:bg-zinc-800"
            >
              お問い合わせ
            </a>

          </div>
        </section>


        {/* ================= Footer ================= */}
        <footer className="border-t border-zinc-200 py-8 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} 株式会社ミカレ
        </footer>

      </div>
    </>
  );
}
