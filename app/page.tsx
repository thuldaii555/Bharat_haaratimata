export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#2d1b0f]">
      {/* Header */}
      <header className="border-b border-orange-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-xl font-bold tracking-wide text-orange-900">
              Haarati Mata
            </h1>
            <p className="text-sm text-orange-700">
              A sacred space for devotion, peace, and community
            </p>
          </div>

          <nav className="hidden gap-6 text-sm font-medium text-orange-900 md:flex">
            <a href="#about" className="hover:text-orange-600">About</a>
            <a href="#devotion" className="hover:text-orange-600">Devotion</a>
            <a href="#visit" className="hover:text-orange-600">Visit</a>
            <a href="#contact" className="hover:text-orange-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
            Jai Mata Di
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-tight text-orange-950 md:text-6xl">
            Welcome to the sacred home of Haarati Mata
          </h2>

          <p className="mb-8 text-lg leading-8 text-stone-700">
            A peaceful digital space dedicated to faith, prayer, tradition, and
            the blessings of the Divine Mother.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#about"
              className="rounded-full bg-orange-700 px-6 py-3 text-center font-semibold text-white shadow-sm hover:bg-orange-800"
            >
              Learn More
            </a>

            <a
              href="#visit"
              className="rounded-full border border-orange-700 px-6 py-3 text-center font-semibold text-orange-800 hover:bg-orange-50"
            >
              Plan a Visit
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-lg">
          <div className="flex min-h-[360px] items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-orange-700 text-5xl text-white shadow-md">
                ॐ
              </div>
              <p className="text-lg font-semibold text-orange-950">
                Devotion • Service • Peace
              </p>
              <p className="mt-2 text-sm text-stone-600">
                Image or Mata icon can be added here later
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
            About
          </p>

          <h3 className="mb-6 text-3xl font-bold text-orange-950">
            A place rooted in faith and devotion
          </h3>

          <p className="text-lg leading-8 text-stone-700">
            Haarati Mata represents divine strength, compassion, protection,
            and spiritual guidance. This website is being created as a simple
            and respectful place where devotees can learn, connect, and stay
            updated with important information.
          </p>
        </div>
      </section>

      {/* Devotion */}
      <section id="devotion" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
            Devotion
          </p>

          <h3 className="mb-10 text-3xl font-bold text-orange-950">
            What this website will include
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-orange-900">
                Daily Prayers
              </h4>
              <p className="leading-7 text-stone-700">
                Aarti, mantras, devotional text, and spiritual content for
                devotees.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-orange-900">
                Events & Updates
              </h4>
              <p className="leading-7 text-stone-700">
                Important dates, puja schedules, announcements, and community
                updates.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-orange-900">
                Community
              </h4>
              <p className="leading-7 text-stone-700">
                A space to keep devotees connected through service, faith, and
                shared tradition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="bg-orange-900 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-200">
            Visit
          </p>

          <h3 className="mb-6 text-3xl font-bold">
            Temple information will be added here
          </h3>

          <p className="text-lg leading-8 text-orange-50">
            Address, opening hours, directions, and visitor information can be
            added in this section once finalized.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
            Contact
          </p>

          <h3 className="mb-6 text-3xl font-bold text-orange-950">
            Stay connected
          </h3>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="leading-8 text-stone-700">
              Contact details, email, phone number, donation information, and
              social media links can be added here.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-orange-100 bg-white py-6">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-stone-600">
          © {new Date().getFullYear()} Haarati Mata. All rights reserved.
        </div>
      </footer>
    </main>
  );
}