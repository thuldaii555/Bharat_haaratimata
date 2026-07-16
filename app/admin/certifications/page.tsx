const summaryCards = [
  { title: "Certification Logos", count: "Pending setup", copy: "Fair Trade logo assets, mark variations, and display control." },
  { title: "Certificate Images", count: "Pending setup", copy: "Certificate image uploads and verification support files." },
  { title: "Verification Details", count: "Pending setup", copy: "Certificate numbers, links, dates, and issuing organization details." },
  { title: "Sustainability Claims", count: "Pending setup", copy: "Supporting environmental responsibility descriptions and documentation." },
];

const certificationSections = [
  {
    title: "Fair Trade Certification",
    fields: [
      "Fair Trade logo",
      "Certificate image",
      "Certificate number",
      "Verification link",
      "Issuing organization",
      "Validity dates if available",
    ],
  },
  {
    title: "WFTO / Fair Trade Standards",
    fields: [
      "Standard title",
      "Standard description",
      "Display order",
      "Active/inactive",
    ],
  },
  {
    title: "Sustainability Credentials",
    fields: [
      "Environmental responsibility text",
      "Recycled packaging note",
      "Solar energy note",
      "Supporting document/image",
    ],
  },
  {
    title: "Public Display Control",
    fields: [
      "Show/hide certification logo",
      "Show/hide certificate image",
      "Show/hide verification details",
    ],
  },
];

const actions = ["Upload Logo", "Upload Certificate", "Edit Details", "Hide/Show", "Replace Asset"];

export default function AdminCertificationsPage() {
  return (
    <section className="section">
      <div className="showroom-panel p-8 md:p-10">
        <p className="eyebrow mb-5 text-gold">Planning Mode</p>
        <h1 className="font-serif text-5xl leading-[0.98] text-walnut md:text-7xl">
          Certification Management
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-olive md:text-xl md:leading-9">
          Future workspace for managing Fair Trade logos, certificate images,
          verification details, and sustainability credentials. Do not display
          fake certification logos; official approved assets should be uploaded
          later.
        </p>
      </div>

      <div className="admin-planning-notice mt-8">
        <p className="small-caps text-gold">Editing Disabled</p>
        <p className="mt-2 text-sm leading-6 text-olive">
          Certification assets will later connect to Supabase Storage and
          database-backed display controls. No certification upload or editing
          action is active in this phase.
        </p>
      </div>

      <section className="mt-16">
        <div className="mb-9 max-w-3xl">
          <p className="eyebrow mb-4 text-gold">Summary</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            Planned certification areas.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {summaryCards.map((card) => (
            <article className="panel min-h-56" key={card.title}>
              <div className="mb-8 h-px bg-gradient-to-r from-gold via-gold/30 to-transparent" />
              <p className="small-caps text-gold">{card.count}</p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-walnut">
                {card.title}
              </h3>
              <p className="mt-4 leading-7 text-olive">{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-5">
        {certificationSections.map((section) => (
          <article
            className="rounded-[1.35rem] border border-walnut/10 bg-ivory/72 p-6 shadow-[0_18px_52px_rgba(58,42,32,0.08)]"
            key={section.title}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <p className="eyebrow mb-3 text-gold">{section.title}</p>
                <h3 className="font-serif text-3xl leading-tight text-walnut">
                  Future fields
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {section.fields.map((field) => (
                    <span
                      className="rounded-full border border-walnut/10 bg-ivory/76 px-4 py-2 text-xs uppercase tracking-[0.14em] text-olive"
                      key={field}
                    >
                      {field}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {actions.map((action) => (
                  <button
                    className="admin-disabled-button"
                    disabled
                    key={action}
                    type="button"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="luxury-band mt-16 rounded-[2rem] border border-walnut/10 p-6 md:p-8">
        <p className="eyebrow mb-4 text-gold">Important Wording</p>
        <p className="max-w-5xl font-serif text-3xl leading-tight text-walnut md:text-4xl">
          Do not display fake certification logos. Official approved assets
          should be uploaded later by the admin team.
        </p>
      </section>
    </section>
  );
}
