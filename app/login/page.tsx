export default function LoginPage() {
  return (
    <section className="section max-w-3xl">
      <div className="showroom-panel p-8 md:p-12">
        <p className="eyebrow mb-5 text-gold">Future Admin Access</p>
        <h1 className="font-serif text-5xl leading-tight text-walnut">
          Private team access is planned for a later phase.
        </h1>
        <p className="mt-6 text-lg leading-8 text-olive">
          This premium styled page marks where secure authentication will be
          added later. No real login, session, or account logic is implemented.
        </p>
        <div className="mt-10 space-y-4">
          <div className="h-14 rounded-2xl border border-walnut/10 bg-ivory/70 shadow-inner" />
          <div className="h-14 rounded-2xl border border-walnut/10 bg-ivory/70 shadow-inner" />
          <button className="button-dark w-full" type="button">
            Future Sign In
          </button>
        </div>
      </div>
    </section>
  );
}
