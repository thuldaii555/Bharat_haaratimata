const summaryCards = [
  {
    title: "New Inquiries",
    count: "Pending setup",
    copy: "Prototype overview for recently received messages and requests.",
  },
  {
    title: "Trade / Bulk Requests",
    count: "Pending setup",
    copy: "Placeholder view for trade, bulk, and export-related inquiries.",
  },
  {
    title: "Custom Design Requests",
    count: "Pending setup",
    copy: "Placeholder view for buyer-led development and sampling requests.",
  },
  {
    title: "Product Quote Requests",
    count: "Pending setup",
    copy: "Placeholder view for showroom product questions and quote requests.",
  },
  {
    title: "Sustainability Questions",
    count: "Pending setup",
    copy: "Placeholder view for Fair Trade and sustainability-related questions.",
  },
];

const inquiryTypes = [
  {
    title: "General Inquiry",
    copy: "General questions about the brand, products, or company.",
  },
  {
    title: "Showroom Product Question",
    copy: "Questions about a specific product, image, material, or size.",
  },
  {
    title: "Trade / Bulk Inquiry",
    copy: "Buyer requests for pricing, MOQ, production, or export planning.",
  },
  {
    title: "Custom Design Request",
    copy: "Requests for custom colors, forms, sizing, sampling, or development.",
  },
  {
    title: "Sustainability / Fair Trade Question",
    copy: "Questions about Fair Trade, materials, environmental responsibility, or certification details.",
  },
  {
    title: "Partnership Inquiry",
    copy: "Potential business partnerships, retail collaborations, or distribution discussions.",
  },
];

const sampleRows = [
  {
    date: "2026-05-15",
    name: "Sample Buyer",
    company: "Northline Interiors",
    country: "USA",
    inquiryType: "Trade / Bulk Inquiry",
    messagePreview: "Interested in custom rug pricing and lead time for a seasonal order.",
    status: "New",
  },
  {
    date: "2026-05-14",
    name: "Prototype Request",
    company: "Atelier Home",
    country: "UK",
    inquiryType: "Custom Design Request",
    messagePreview: "Would like sample direction for a private-label wall hanging program.",
    status: "In Review",
  },
  {
    date: "2026-05-13",
    name: "Demo Contact",
    company: "Studio Maison",
    country: "Canada",
    inquiryType: "Sustainability / Fair Trade Question",
    messagePreview: "Requesting confirmation of Fair Trade wording and documentation.",
    status: "Waiting for Response",
  },
  {
    date: "2026-05-12",
    name: "Placeholder Lead",
    company: "Gift & Co.",
    country: "Australia",
    inquiryType: "Showroom Product Question",
    messagePreview: "Needs material details and quote review for a product shortlist.",
    status: "Closed",
  },
];

const workflowSteps = [
  {
    title: "Inquiry Received",
    copy: "A submission enters the admin system from contact, trade, or future quote flows.",
  },
  {
    title: "Review Details",
    copy: "The team checks product interest, quantity, and message context.",
  },
  {
    title: "Assign Internally",
    copy: "The inquiry can be routed to the right team member or business area.",
  },
  {
    title: "Respond to Buyer",
    copy: "The team prepares the next response, quote, or supporting detail.",
  },
  {
    title: "Convert to Quote / Trade Discussion",
    copy: "Qualified inquiries can move into trade and development conversations.",
  },
  {
    title: "Close or Archive",
    copy: "Completed leads can be closed or archived for later reference.",
  },
];

const futureFields = [
  "fullName",
  "email",
  "phone",
  "company",
  "country",
  "inquiryType",
  "message",
  "productInterest",
  "categoryInterest",
  "quantity",
  "status",
  "assignedTo",
  "internalNotes",
  "createdAt",
  "updatedAt",
];

const actions = ["View", "Reply", "Assign", "Close"];

function StatusPill({ text }: { text: string }) {
  const tone =
    text === "New"
      ? "border-gold/30 bg-gold/10 text-walnut"
      : text === "In Review"
        ? "border-walnut/10 bg-ivory/80 text-walnut"
        : text === "Waiting for Response"
          ? "border-clay/30 bg-clay/10 text-walnut"
          : "border-walnut/10 bg-ash/20 text-olive";

  return (
    <span className={`rounded-full border px-3 py-2 text-xs uppercase tracking-[0.12em] ${tone}`}>
      {text}
    </span>
  );
}

export default function AdminInquiriesPage() {
  return (
    <section className="section">
      <div className="showroom-panel p-8 md:p-10">
        <p className="eyebrow mb-5 text-gold">Planning Mode</p>
        <h1 className="font-serif text-5xl leading-[0.98] text-walnut md:text-7xl">
          Inquiry Management
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-olive md:text-xl md:leading-9">
          Future workspace for reviewing and managing general inquiries, trade
          inquiries, custom design requests, product quote requests, and
          sustainability or fair trade questions. This area will later connect
          to the Contact Us form and quote request flows.
        </p>
      </div>

      <div className="admin-planning-notice mt-8">
        <p className="small-caps text-gold">Workflow Disabled</p>
        <p className="mt-2 text-sm leading-6 text-olive">
          Inquiries will later connect to Supabase tables and protected admin
          review tools. No real inquiry loading, reply, assignment, or status
          update is active in this phase.
        </p>
      </div>

      <section className="mt-16">
        <div className="mb-9 max-w-3xl">
          <p className="eyebrow mb-4 text-gold">Summary</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            Inquiry overview for future review workflows.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
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

      <section className="mt-16">
        <div className="mb-9 max-w-3xl">
          <p className="eyebrow mb-4 text-gold">Inquiry Types</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            Planned categories for incoming messages.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {inquiryTypes.map((type) => (
            <article className="panel min-h-56" key={type.title}>
              <div className="mb-8 h-px bg-gradient-to-r from-gold via-gold/30 to-transparent" />
              <h3 className="font-serif text-3xl leading-tight text-walnut">
                {type.title}
              </h3>
              <p className="mt-4 leading-7 text-olive">{type.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 overflow-hidden rounded-[2rem] border border-walnut/10 bg-ivory/72 shadow-[0_24px_70px_rgba(58,42,32,0.08)]">
        <div className="border-b border-walnut/10 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow mb-3 text-gold">Sample Inquiries</p>
              <h2 className="font-serif text-4xl leading-tight text-walnut">
                Prototype inquiry table.
              </h2>
            </div>
            <button className="admin-disabled-button" disabled type="button">
              Add Inquiry
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[1200px] w-full border-collapse text-left">
            <thead className="bg-walnut text-ivory">
              <tr>
                {[
                  "Date",
                  "Name",
                  "Company",
                  "Country",
                  "Inquiry Type",
                  "Message Preview",
                  "Status",
                  "Actions",
                ].map((heading) => (
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
                <tr className="border-b border-walnut/10 last:border-b-0" key={`${row.date}-${row.name}`}>
                  <td className="px-5 py-5 text-sm text-olive">{row.date}</td>
                  <td className="px-5 py-5">
                    <p className="font-serif text-xl leading-tight text-walnut">
                      {row.name}
                    </p>
                  </td>
                  <td className="px-5 py-5 text-sm text-olive">{row.company}</td>
                  <td className="px-5 py-5 text-sm text-olive">{row.country}</td>
                  <td className="px-5 py-5 text-sm leading-7 text-olive">
                    {row.inquiryType}
                  </td>
                  <td className="px-5 py-5 text-sm leading-7 text-olive">
                    {row.messagePreview}
                  </td>
                  <td className="px-5 py-5">
                    <StatusPill text={row.status} />
                  </td>
                  <td className="px-5 py-5">
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
                  </td>
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
            Planned inquiry handling flow.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {workflowSteps.map((step, index) => (
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

      <section className="mt-16 grid gap-8 md:grid-cols-[0.94fr_1.06fr] md:items-start">
        <div className="showroom-panel p-8 md:p-10">
          <p className="eyebrow mb-4 text-gold">Future Data Fields</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            Planned data fields for inquiry records.
          </h2>
          <p className="mt-6 text-lg leading-8 text-olive">
            This panel maps the data model that will later support storage and
            inquiry management.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {futureFields.map((field) => (
              <span
                className="rounded-full border border-walnut/10 bg-ivory/76 px-4 py-2 text-xs uppercase tracking-[0.14em] text-olive"
                key={field}
              >
                {field}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[1.35rem] border border-walnut/10 bg-ivory/72 p-6 shadow-[0_18px_52px_rgba(58,42,32,0.08)]">
          <p className="eyebrow mb-4 text-gold">Admin Note</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut">
            This screen is a planning interface only.
          </h2>
          <p className="mt-6 text-lg leading-8 text-olive">
            No real database storage, email sending, authentication, or live
            inquiry loading is connected yet.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
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
      </section>
    </section>
  );
}
