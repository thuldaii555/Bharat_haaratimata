import { signInAdmin } from "@/app/admin/auth/actions";

const loginErrors: Record<string, string> = {
  invalid: "Invalid email or password.",
  missing: "Enter an email and password to sign in.",
  unauthorized: "This email is not authorized for admin access.",
  config: "Supabase environment variables are not configured yet.",
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const errorMessage = error ? loginErrors[error] : null;

  return (
    <section className="section !py-0">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="showroom-panel p-8 md:p-10">
          <p className="eyebrow mb-5 text-gold">Admin Access</p>
          <h2 className="font-serif text-5xl leading-[0.98] text-walnut md:text-6xl">
            Admin login
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-olive">
            Sign in with the Supabase Auth account approved for Haaratimata
            admin access.
          </p>
        </div>

        <div className="panel">
          <div className="admin-planning-notice mb-6">
            <p className="small-caps text-gold">Supabase Auth</p>
            <p className="mt-2 text-sm leading-6 text-olive">
              Admin access is restricted to emails listed in
              ADMIN_ALLOWED_EMAILS.
            </p>
          </div>

          <form action={signInAdmin} aria-describedby="admin-login-note" className="grid gap-5">
            <label className="field-label">
              Email
              <input
                autoComplete="email"
                className="field-input"
                name="email"
                placeholder="admin@example.com"
                required
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
                required
                type="password"
              />
            </label>

            {errorMessage ? (
              <div className="rounded-[1rem] border border-red-900/15 bg-red-50 px-4 py-3 text-sm leading-6 text-red-900">
                {errorMessage}
              </div>
            ) : null}

            <button className="button-dark w-full" type="submit">
              Sign in
            </button>

            <p id="admin-login-note" className="text-sm leading-6 text-olive">
              This login uses Supabase Auth. Product editing, database tables,
              image upload, and CRUD tools are still not connected.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
