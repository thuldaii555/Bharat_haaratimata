import Link from "next/link";

import { categories } from "@/lib/categories";
import { getActiveProducts } from "@/lib/products";
import { isAllowedAdminEmail } from "@/lib/supabase/env";
import { createOptionalSupabaseServerClient } from "@/lib/supabase/server";

const dashboardCards = [
  {
    title: "Products",
    count: `${getActiveProducts().length} prototype records`,
    href: "/admin/products",
    copy: "Future product editing, pricing, availability, category assignment, and product image management.",
  },
  {
    title: "Categories",
    count: `${categories.length} prototype records`,
    href: "/admin/categories",
    copy: "Future category editing, display order, hero images, and active/inactive controls.",
  },
  {
    title: "Images",
    count: "Storage pending",
    href: "/admin/images",
    copy: "Future Supabase Storage library for product, category, gallery, and page images.",
  },
  {
    title: "Certifications",
    count: "Storage pending",
    href: "/admin/certifications",
    copy: "Future certified asset management for logos, certificates, verification details, and public display controls.",
  },
  {
    title: "Inquiries",
    count: "Database pending",
    href: "/admin/inquiries",
    copy: "Future inquiry review workspace for contact, trade, quote, and custom design requests.",
  },
  {
    title: "Site Content",
    count: "Database pending",
    href: "/admin/site-content",
    copy: "Future editing for page copy, CTA labels, content blocks, gallery captions, and office details.",
  },
];

export default async function AdminDashboardPage() {
  const supabase = await createOptionalSupabaseServerClient();
  const {
    data: { user },
  } = supabase
    ? await supabase.auth.getUser()
    : { data: { user: null } };
  const adminEmail = isAllowedAdminEmail(user?.email) ? user?.email : null;

  return (
    <section className="section !py-0">
      <div className="showroom-panel p-8 md:p-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="eyebrow mb-5 text-gold">Admin Control Center</p>
            <h2 className="max-w-4xl font-serif text-5xl leading-[0.98] text-walnut md:text-7xl">
              Future management hub for Haaratimata.
            </h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-olive md:text-xl md:leading-9">
              Supabase Auth is connected for admin access. No product editing,
              upload, database table, or CRUD actions are active yet.
            </p>
          </div>
          <Link className="button-dark shrink-0" href="/admin/logout">
            Logout
          </Link>
        </div>
      </div>

      <div className="admin-planning-notice mt-8">
        <p className="small-caps text-gold">
          {adminEmail ? "Authenticated admin session active" : "Planning Mode"}
        </p>
        <p className="mt-2 text-sm leading-6 text-olive">
          {adminEmail
            ? `Logged in as ${adminEmail}. Editing is currently disabled.`
            : "Admin session could not be displayed. Route protection will redirect unauthenticated users."}
        </p>
      </div>

      <section className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {dashboardCards.map((card) => (
          <Link className="block" href={card.href} key={card.title}>
            <article className="panel min-h-72 transition duration-200 hover:-translate-y-1 hover:border-gold/40">
              <div className="mb-8 h-px bg-gradient-to-r from-gold via-gold/30 to-transparent" />
              <p className="small-caps text-gold">{card.count}</p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-walnut">
                {card.title}
              </h3>
              <p className="mt-4 leading-7 text-olive">{card.copy}</p>
              <span className="mt-8 inline-flex text-xs uppercase tracking-[0.15em] text-walnut">
                View planning screen
              </span>
            </article>
          </Link>
        ))}
      </section>
    </section>
  );
}
