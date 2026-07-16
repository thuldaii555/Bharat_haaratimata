import { products } from "@/lib/products";

const adminActions = [
  "Add Product",
  "Edit Product",
  "Replace Product Image",
  "Manage Gallery Images",
  "Update Retail Price",
  "Update Trade/Bulk Price",
  "Mark Out of Stock",
  "Mark Unavailable",
  "Change Category",
  "Manage Sizes & Colors",
  "Toggle Quote Only",
  "Feature Product",
];

const tableActions = ["Edit", "Images", "Stock", "Archive"];

export default function AdminProductsPage() {
  return (
    <section className="section">
      <div className="showroom-panel p-8 md:p-10">
        <p className="eyebrow mb-5 text-gold">Planning Mode</p>
        <h1 className="font-serif text-5xl text-walnut">Product Management</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-olive">
          Future admin workspace for managing showroom products, category
          placement, pricing, inventory status, image uploads, and product
          details. This page is static and does not perform CRUD operations.
        </p>
      </div>

      <div className="admin-planning-notice mt-8">
        <p className="small-caps text-gold">Editing Disabled</p>
        <p className="mt-2 text-sm leading-6 text-olive">
          Products will later connect to Supabase Auth, Postgres product tables,
          and Storage-backed product images. No product CRUD is active in this
          phase.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3 xl:grid-cols-4">
        {adminActions.map((action) => (
          <div className="panel min-h-36" key={action}>
            <div className="mb-6 h-px bg-gradient-to-r from-gold via-gold/30 to-transparent" />
            <p className="font-serif text-2xl leading-tight text-walnut">{action}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-olive">
              Future control
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 overflow-hidden rounded-[2rem] border border-walnut/10 bg-ivory/72 shadow-[0_24px_70px_rgba(58,42,32,0.08)]">
        <div className="border-b border-walnut/10 p-6">
          <p className="eyebrow mb-3 text-gold">Catalog Data Preview</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut">
            Example product management table
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-[1100px] w-full border-collapse text-left">
            <thead className="bg-walnut text-ivory">
              <tr>
                {[
                  "Product",
                  "Category",
                  "Price",
                  "Trade Price",
                  "Availability",
                  "Status",
                  "Featured",
                  "Quote Only",
                  "Admin Actions",
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
              {products.map((product) => (
                <tr className="border-b border-walnut/10 last:border-b-0" key={product.id}>
                  <td className="px-5 py-5">
                    <p className="font-serif text-xl leading-tight text-walnut">
                      {product.name}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-olive/70">
                      {product.sku}
                    </p>
                  </td>
                  <td className="px-5 py-5 text-sm text-olive">{product.categoryName}</td>
                  <td className="px-5 py-5 text-sm text-olive">{product.retailPrice}</td>
                  <td className="px-5 py-5 text-sm text-olive">{product.bulkPrice ?? "Not set"}</td>
                  <td className="px-5 py-5">
                    <span className="rounded-full border border-walnut/10 bg-ivory px-3 py-2 text-xs uppercase tracking-[0.12em] text-walnut">
                      {product.availability}
                    </span>
                  </td>
                  <td className="px-5 py-5 text-sm capitalize text-olive">{product.status}</td>
                  <td className="px-5 py-5 text-sm text-olive">{product.featured ? "Yes" : "No"}</td>
                  <td className="px-5 py-5 text-sm text-olive">{product.quoteOnly ? "Yes" : "No"}</td>
                  <td className="px-5 py-5">
                    <div className="flex flex-wrap gap-2">
                      {tableActions.map((action) => (
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
      </div>
    </section>
  );
}
