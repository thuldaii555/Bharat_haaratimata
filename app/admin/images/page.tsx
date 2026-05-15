const summaryCards = [
  { title: "Hero Images", count: "Pending setup", copy: "Hero background image, hero feature image, and mobile hero image if needed." },
  { title: "Category Images", count: "Pending setup", copy: "Category card images, category detail hero images, and display order." },
  { title: "Product Images", count: "Pending setup", copy: "Main product image, gallery images, alt text, and image status." },
  { title: "Lookbook Images", count: "Pending setup", copy: "Image, label, caption, display order, and active/inactive state." },
  { title: "Sustainability / Trade Images", count: "Pending setup", copy: "Trade page images, sustainability images, and about/home story images." },
];

const imageSections = [
  {
    title: "Hero Images",
    fields: [
      "Hero background image",
      "Hero feature image",
      "Mobile hero image if needed",
    ],
  },
  {
    title: "Category Images",
    fields: [
      "Category card image",
      "Category detail hero image",
      "Display order",
    ],
  },
  {
    title: "Product Images",
    fields: [
      "Main product image",
      "Product gallery images",
      "Alt text",
      "Image status",
    ],
  },
  {
    title: "Lookbook Images",
    fields: ["Image", "Label", "Caption", "Display order", "Active/inactive"],
  },
  {
    title: "Page Content Images",
    fields: [
      "Trade page images",
      "Sustainability images",
      "About/Home story images",
    ],
  },
];

const actions = ["Upload Image", "Replace", "Remove", "Assign", "Edit Alt Text"];

export default function AdminImagesPage() {
  return (
    <section className="section">
      <div className="showroom-panel p-8 md:p-10">
        <p className="eyebrow mb-5 text-gold">Admin Architecture Placeholder</p>
        <h1 className="font-serif text-5xl leading-[0.98] text-walnut md:text-7xl">
          Image Library
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-olive md:text-xl md:leading-9">
          Future workspace for uploading, replacing, removing, and assigning
          images across the website. Image uploads will be connected later
          through secure storage and admin authentication.
        </p>
      </div>

      <section className="mt-16">
        <div className="mb-9 max-w-3xl">
          <p className="eyebrow mb-4 text-gold">Summary</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            Planned image categories.
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

      <section className="mt-16 grid gap-5">
        {imageSections.map((section) => (
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
                    className="rounded-full border border-walnut/10 bg-ivory/72 px-3 py-2 text-xs uppercase tracking-[0.12em] text-olive opacity-70"
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
        <p className="eyebrow mb-4 text-gold">Admin Note</p>
        <p className="max-w-5xl font-serif text-3xl leading-tight text-walnut md:text-4xl">
          Image uploads will be connected later through secure storage and
          admin authentication.
        </p>
      </section>
    </section>
  );
}
