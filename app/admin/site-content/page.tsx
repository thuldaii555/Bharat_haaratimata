const summaryCards = [
  {
    title: "Homepage Content",
    count: "Pending setup",
    copy: "Hero text, trust strip items, brand story, process cards, and CTA content.",
  },
  {
    title: "Trade Page Content",
    count: "Pending setup",
    copy: "Trade hero text, buyer cards, services, process steps, and CTA language.",
  },
  {
    title: "Sustainability Content",
    count: "Pending setup",
    copy: "Fair Trade sections, WFTO standards, environmental text, and certificate copy.",
  },
  {
    title: "Gallery Captions",
    count: "Pending setup",
    copy: "Image labels, captions, section titles, and display ordering.",
  },
  {
    title: "Contact Details",
    count: "Pending setup",
    copy: "Office details, inquiry types, contact page copy, and trade notes.",
  },
  {
    title: "CTA Buttons",
    count: "Pending setup",
    copy: "Global CTA labels, links, and future announcement copy.",
  },
];

const contentAreas = [
  {
    title: "Homepage Content",
    fields: [
      "Hero headline",
      "Hero body text",
      "Hero CTA labels and links",
      "Trust strip items",
      "Brand story",
      "How We Make cards",
      "Material story",
      "Artisan network text",
      "Fair Trade focus card",
      "Trade CTA",
      "Gallery preview captions",
    ],
  },
  {
    title: "Trade Page Content",
    fields: [
      "Trade hero headline/body",
      "Buyer type cards",
      "Trade service cards",
      "Trade process steps",
      "Trade CTA text",
    ],
  },
  {
    title: "Sustainability Content",
    fields: [
      "Hero headline/body",
      "Fair Trade Certified section",
      "WFTO standards cards",
      "Environmental responsibility section",
      "Certificate display copy",
    ],
  },
  {
    title: "Gallery Content",
    fields: [
      "Image labels",
      "Image captions",
      "Section titles",
      "Display order",
      "Active/inactive status",
    ],
  },
  {
    title: "Contact Content",
    fields: [
      "Nepal HQ details",
      "United States office details",
      "Contact page intro",
      "Inquiry type options",
      "Trade inquiry note",
    ],
  },
  {
    title: "Global Content",
    fields: [
      "Footer text",
      "Global CTA labels",
      "Site announcement if needed",
      "SEO title/description later",
    ],
  },
];

const sampleRows = [
  ["Home", "Hero", "Text + CTA", "Edit copy and links", "Planned"],
  ["Home", "Trust Strip", "Stats", "Edit stat labels", "Planned"],
  ["Trade", "Services", "Cards", "Add/edit/remove cards", "Planned"],
  ["Sustainability", "WFTO Standards", "Cards", "Edit descriptions", "Planned"],
  ["Gallery", "Captions", "Image captions", "Edit captions/order", "Planned"],
  ["Contact", "Office Details", "Contact info", "Edit office info", "Planned"],
];

const actions = ["Edit", "Reorder", "Hide/Show", "Preview"];

const workflow = [
  {
    title: "Select Page",
    copy: "Choose the page area that needs content updates.",
  },
  {
    title: "Select Section",
    copy: "Open the exact block, card, or section that needs attention.",
  },
  {
    title: "Edit Content",
    copy: "Adjust text, CTA labels, section names, or supporting copy.",
  },
  {
    title: "Save Draft",
    copy: "Keep changes in draft state before public release.",
  },
  {
    title: "Preview",
    copy: "Review the updated content before publishing.",
  },
  {
    title: "Publish",
    copy: "Make the approved content live on the website.",
  },
];

function StatusPill({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-gold/25 bg-gold/10 px-3 py-2 text-xs uppercase tracking-[0.12em] text-walnut">
      {text}
    </span>
  );
}

export default function AdminSiteContentPage() {
  return (
    <section className="section">
      <div className="showroom-panel p-8 md:p-10">
        <p className="eyebrow mb-5 text-gold">Planning Mode</p>
        <h1 className="font-serif text-5xl leading-[0.98] text-walnut md:text-7xl">
          Site Content Management
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-olive md:text-xl md:leading-9">
          Future workspace for managing website text, page sections, CTA labels,
          trust strip content, gallery captions, sustainability content, trade
          page copy, and contact office details. Authorized administrators will
          manage copy here without editing code.
        </p>
      </div>

      <div className="admin-planning-notice mt-8">
        <p className="small-caps text-gold">Editing Disabled</p>
        <p className="mt-2 text-sm leading-6 text-olive">
          Site content will later connect to Supabase-backed content records and
          draft/publish controls. No content editing, preview saving, or
          publishing is active in this phase.
        </p>
      </div>

      <section className="mt-16">
        <div className="mb-9 max-w-3xl">
          <p className="eyebrow mb-4 text-gold">Summary</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            Content areas planned for future management.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
        {contentAreas.map((area) => (
          <article
            className="rounded-[1.35rem] border border-walnut/10 bg-ivory/72 p-6 shadow-[0_18px_52px_rgba(58,42,32,0.08)]"
            key={area.title}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <p className="eyebrow mb-3 text-gold">{area.title}</p>
                <h3 className="font-serif text-3xl leading-tight text-walnut">
                  Future editable fields
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {area.fields.map((field) => (
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

      <section className="mt-16 overflow-hidden rounded-[2rem] border border-walnut/10 bg-ivory/72 shadow-[0_24px_70px_rgba(58,42,32,0.08)]">
        <div className="border-b border-walnut/10 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow mb-3 text-gold">Content Planning Table</p>
              <h2 className="font-serif text-4xl leading-tight text-walnut">
                Prototype content workflow.
              </h2>
            </div>
            <button className="admin-disabled-button" disabled type="button">
              Add Content Block
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[1100px] w-full border-collapse text-left">
            <thead className="bg-walnut text-ivory">
              <tr>
                {["Page", "Section", "Content Type", "Future Action", "Status"].map((heading) => (
                  <th
                    className="px-5 py-4 text-xs font-medium uppercase tracking-[0.14em]"
                    key={heading}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sampleRows.map((row) => (
                <tr className="border-b border-walnut/10 last:border-b-0" key={row.join("-")}>
                  {row.map((cell, index) => (
                    <td className="px-5 py-5 text-sm leading-7 text-olive" key={`${cell}-${index}`}>
                      {index === 4 ? <StatusPill text={cell} /> : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-9 max-w-3xl">
          <p className="eyebrow mb-4 text-gold">Future Workflow</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            Planned content editing flow.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {workflow.map((step, index) => (
            <article className="panel min-h-56" key={step.title}>
              <p className="eyebrow mb-7 text-gold">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-serif text-3xl leading-tight text-walnut">
                {step.title}
              </h3>
              <p className="mt-4 leading-7 text-olive">{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-[2rem] border border-walnut/10 bg-[linear-gradient(135deg,#3a2a20,#4b3526)] text-ivory shadow-[0_34px_96px_rgba(58,42,32,0.2)]">
        <div className="p-8 md:p-12">
          <div className="gold-rule mb-8" />
          <p className="eyebrow mb-4 text-gold">Admin Note</p>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Draft/publish workflow will be added later.
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-ivory/72">
            The future database-backed content management layer will allow
            authorized administrators to manage copy, section order, CTA labels,
            and page content without editing code.
          </p>
        </div>
      </section>
    </section>
  );
}
