export default function AdminLoginPage() {
  return (
    <section className="section !py-0">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="showroom-panel p-8 md:p-10">
          <p className="eyebrow mb-5 text-gold">Admin Access</p>
          <h2 className="font-serif text-5xl leading-[0.98] text-walnut md:text-6xl">
            Login screen prepared for the next auth phase.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-olive">
            Supabase environment foundation prepared. Authentication connection
            is next.
          </p>
        </div>

        <div className="panel">
          <div className="admin-planning-notice mb-6">
            <p className="small-caps text-gold">Planning Mode</p>
            <p className="mt-2 text-sm leading-6 text-olive">
              This form does not submit to a backend, authenticate users, store
              credentials, or simulate a successful login.
            </p>
          </div>

          <form aria-describedby="admin-login-note" className="grid gap-5">
            <label className="field-label">
              Email
              <input
                autoComplete="email"
                className="field-input"
                name="email"
                placeholder="admin@example.com"
                type="email"
              />
            </label>

            <label className="field-label">
              Password
              <input
                autoComplete="current-password"
                className="field-input"
                name="password"
                placeholder="Password"
                type="password"
              />
            </label>

            <button className="admin-disabled-button w-full" disabled type="button">
              Sign in
            </button>

            <p id="admin-login-note" className="text-sm leading-6 text-olive">
              Supabase environment foundation prepared. Authentication
              connection is next.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
