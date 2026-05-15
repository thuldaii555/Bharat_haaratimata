import Link from "next/link";

const featureCards = [
  {
    title: "Buyer Portal",
    copy: "Future access for quote history, saved product interests, and trade discussions.",
  },
  {
    title: "Admin Workspace",
    copy: "Future access for managing products, prices, stock, images, categories, and inquiries.",
  },
  {
    title: "Secure Access",
    copy: "Authentication and role-based access will be added before production account features launch.",
  },
];

export default function LoginPage() {
  return (
    <section className="section">
      <div className="grid gap-10 md:grid-cols-[0.92fr_1.08fr] md:items-start">
        <div className="showroom-panel p-8 md:p-10">
          <p className="eyebrow mb-5 text-gold">Login</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[0.98] text-walnut md:text-7xl">
            Future access for buyers and administrators.
          </h1>
          <p className="mt-7 text-lg leading-8 text-olive">
            This area is prepared for future buyer accounts, showroom quote
            history, product management, and administrative access. Full login
            functionality will be connected when the platform moves into the
            admin and account-management phase.
          </p>

          <div className="mt-10 rounded-[1.5rem] border border-walnut/10 bg-ivory/76 p-6 shadow-[0_18px_52px_rgba(58,42,32,0.08)]">
            <form className="grid gap-4">
              <label className="field-label">
                Email
                <input
                  className="field-input"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@company.com"
                />
              </label>
              <label className="field-label">
                Password
                <input
                  className="field-input"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter future access password"
                />
              </label>
              <button className="button-dark mt-2" type="button">
                Continue
              </button>
            </form>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm leading-6 text-olive">
                Forgot password? Coming later
              </p>
              <Link className="button-light" href="/showroom">
                Return to Showroom
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="editorial-frame p-4">
            <div className="min-h-[220px] rounded-[1.35rem] border border-gold/20 bg-[radial-gradient(circle_at_18%_18%,rgba(184,145,75,0.16),transparent_12rem),radial-gradient(circle_at_82%_22%,rgba(255,252,245,0.42),transparent_10rem),linear-gradient(145deg,rgba(58,42,32,0.95),rgba(74,53,38,0.82),rgba(94,70,48,0.72))] p-6 text-ivory shadow-[0_20px_64px_rgba(58,42,32,0.18)]">
              <p className="eyebrow mb-4 text-gold">Access Preview</p>
              <h2 className="max-w-2xl font-serif text-4xl leading-tight">
                Buyer access and admin access will be separated in a future release.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-ivory/72">
                This page is intentionally a placeholder. It signals where secure
                account features will live without pretending authentication is
                active today.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {featureCards.map((card) => (
              <article className="panel min-h-56" key={card.title}>
                <div className="mb-8 h-px bg-gradient-to-r from-gold via-gold/30 to-transparent" />
                <h3 className="font-serif text-3xl leading-tight text-walnut">
                  {card.title}
                </h3>
                <p className="mt-4 leading-7 text-olive">{card.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
