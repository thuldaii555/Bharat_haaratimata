import { categories } from "@/lib/categories";
import { getActiveProducts } from "@/lib/products";

const summaryCards = [
  {
    title: "Total Categories",
    count: `${categories.length}`,
    copy: "Current category cards in the prototype catalog.",
  },
  {
    title: "Featured Categories",
    count: `${categories.filter((category) => category.featured).length}`,
    copy: "Categories currently marked for primary display.",
  },
  {
    title: "Active Categories",
    count: `${categories.length}`,
    copy: "All current category cards are treated as active in the prototype.",
  },
  {
    title: "Products Mapped",
    count: `${getActiveProducts().length}`,
    copy: "Active products currently assigned to showroom categories.",
  },
];

const actions = ["Edit", "Replace Image", "Reorder", "Hide"];

function CategoryStatusPill({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-walnut/10 bg-ivory px-3 py-2 text-xs uppercase tracking-[0.12em] text-walnut">
      {text}
    </span>
  );
}

export default function AdminCategoriesPage() {
  return (
    <section className="section">
      <div className="showroom-panel p-8 md:p-10">
        <p className="eyebrow mb-5 text-gold">Admin Architecture Placeholder</p>
        <h1 className="font-serif text-5xl leading-[0.98] text-walnut md:text-7xl">
          Category Management
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-olive md:text-xl md:leading-9">
          Future workspace for managing showroom category cards, category
          landing pages, category images, descriptions, display order, and
          active/inactive status.
        </p>
      </div>

      <section className="mt-16">
        <div className="mb-9 max-w-3xl">
          <p className="eyebrow mb-4 text-gold">Summary</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            Category overview for the showroom catalog.
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

      <section className="mt-16 overflow-hidden rounded-[2rem] border border-walnut/10 bg-ivory/72 shadow-[0_24px_70px_rgba(58,42,32,0.08)]">
        <div className="border-b border-walnut/10 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow mb-3 text-gold">Category Table</p>
              <h2 className="font-serif text-4xl leading-tight text-walnut">
                Planned category management records.
              </h2>
            </div>
            <button
              className="button-dark opacity-70"
              disabled
              type="button"
            >
              Add Category
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[1080px] w-full border-collapse text-left">
            <thead className="bg-walnut text-ivory">
              <tr>
                {[
                  "Category",
                  "Slug",
                  "Short Description",
                  "Product Count Label",
                  "Featured",
                  "Image Status",
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
              {categories.map((category) => (
                <tr className="border-b border-walnut/10 last:border-b-0" key={category.id}>
                  <td className="px-5 py-5">
                    <p className="font-serif text-xl leading-tight text-walnut">
                      {category.name}
                    </p>
                  </td>
                  <td className="px-5 py-5 text-sm text-olive">{category.slug}</td>
                  <td className="px-5 py-5 text-sm leading-7 text-olive">
                    {category.shortDescription}
                  </td>
                  <td className="px-5 py-5 text-sm text-olive">
                    {category.productCountLabel}
                  </td>
                  <td className="px-5 py-5">
                    <CategoryStatusPill text={category.featured ? "Featured" : "Not featured"} />
                  </td>
                  <td className="px-5 py-5">
                    <CategoryStatusPill text={category.image ? "Image assigned" : "No image"} />
                  </td>
                  <td className="px-5 py-5">
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-16 rounded-[2rem] border border-walnut/10 bg-[linear-gradient(135deg,#3a2a20,#4b3526)] text-ivory shadow-[0_34px_96px_rgba(58,42,32,0.2)]">
        <div className="p-8 md:p-12">
          <div className="gold-rule mb-8" />
          <p className="eyebrow mb-4 text-gold">Admin Note</p>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Category editing will later support name, slug, description, image,
            display order, and active/inactive status.
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-ivory/72">
            This page is a planning interface only and does not perform CRUD
            operations yet.
          </p>
        </div>
      </section>
    </section>
  );
}
