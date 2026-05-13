import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-walnut/10 bg-[linear-gradient(180deg,#463326,#3a2a20)] text-ivory">
      <div className="gold-rule" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 text-sm leading-7 text-ivory/72 md:grid-cols-[1.25fr_1fr_1fr] md:px-10 lg:px-12">
        <div>
          <p className="font-serif text-4xl text-ivory">Haaratimata Handicrafts</p>
          <p className="mt-2 small-caps text-gold">Handmade Nepal felt wool exports</p>
          <p className="mt-5 max-w-md">
            Nepal-based felt wool products supplier, manufacturer, and exporter
            for wholesale, bulk buy, interiors, and conscious global retail.
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-gold">
            Nepal HQ
          </p>
          <p>Nagarjun, Ward 09, Durganagar Colony</p>
          <p>Kathmandu, Nepal</p>
          <p>+977 9851084819</p>
          <p>haaratimata@mos.com.np</p>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-gold">
            United States Office
          </p>
          <p>GRLLC Group LLC</p>
          <p>3615 Olive Street, Saint Louis, Missouri 63108</p>
          <p>+1 562 716 5131</p>
          <p>info@grllcgroup.com</p>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-ivory/10 px-6 py-6 text-xs uppercase tracking-[0.16em] text-ivory/58 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
        <p>2026 Haaratimata Handicrafts</p>
        <Link className="transition-colors hover:text-gold" href="/admin/dashboard">
          Admin Placeholder
        </Link>
      </div>
    </footer>
  );
}
