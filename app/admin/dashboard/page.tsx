import Link from "next/link";

import { categories } from "@/lib/categories";
import { getActiveProducts } from "@/lib/products";

const summaryCards = [
  {
    title: "Products",
    count: `${getActiveProducts().length} active`,
    future: "Add, edit, archive, and manage product availability.",
  },
  {
    title: "Categories",
    count: `${categories.length} categories`,
    future: "Manage category images, descriptions, and display order.",
  },
  {
    title: "Inquiries",
    count: "Pending setup",
    future: "Review contact, trade, custom design, and product quote inquiries.",
  },
  {
    title: "Images",
    count: "Pending setup",
    future: "Upload, replace, remove, and assign product/category/lookbook images.",
  },
  {
    title: "Certifications",
    count: "Pending setup",
    future: "Upload Fair Trade logos, certificate images, certificate numbers, and verification details.",
  },
  {
    title: "Site Content",
    count: "Pending setup",
    future: "Edit homepage story, trade content, sustainability content, and lookbook captions.",
  },
];

const catalogActions = [
  { title: "Manage Products", href: "/admin/products", enabled: true },
  { title: "Manage Categories", href: "/admin/categories", enabled: true },
  { title: "Manage Inventory Status", href: "#", enabled: false },
  { title: "Manage Trade Pricing", href: "#", enabled: false },
];

const mediaActions = [
  { title: "Image Library", href: "/admin/images", enabled: true },
  { title: "Lookbook Images", href: "#", enabled: false },
  { title: "Sustainability Content", href: "#", enabled: false },
  { title: "Certification Assets", href: "/admin/certifications", enabled: true },
  { title: "Site Content", href: "/admin/site-content", enabled: true },
];

const inquiryActions = [
  { title: "Inquiry Management", href: "/admin/inquiries", enabled: true },
  { title: "Contact Inquiries", href: "#", enabled: false },
  { title: "Trade Inquiries", href: "#", enabled: false },
  { title: "Custom Design Requests", href: "#", enabled: false },
  { title: "Export Buyer Leads", href: "#", enabled: false },
];

function AdminActionCard({
  title,
  href,
  enabled,
}: {
  title: string;
  href: string;
  enabled: boolean;
}) {
  const base =
    "flex min-h-28 flex-col justify-between rounded-[1.25rem] border p-5 shadow-[0_18px_52px_rgba(58,42,32,0.08)] transition duration-300";
  const enabledStyles =
    "border-gold/35 bg-[linear-gradient(145deg,rgba(255,252,245,0.9),rgba(247,243,234,0.74))] text-walnut hover:-translate-y-1 hover:border-gold/55 hover:shadow-[0_24px_64px_rgba(58,42,32,0.12)]";
  const disabledStyles =
    "border-walnut/10 bg-ivory/66 text-olive opacity-85";

  const card = (
    <article className={`${base} ${enabled ? enabledStyles : disabledStyles}`}>
      <div>
        <p className="small-caps text-gold">{enabled ? "Active Route" : "Future Placeholder"}</p>
        <h3 className="mt-4 font-serif text-2xl leading-tight">{title}</h3>
      </div>
      <span className="mt-6 text-xs uppercase tracking-[0.15em]">
        {enabled ? "Open section" : "Disabled for now"}
      </span>
    </article>
  );

  return enabled ? (
    <Link className="block" href={href}>
      {card}
    </Link>
  ) : (
    <div aria-disabled="true">{card}</div>
  );
}

export default function AdminDashboardPage() {
  return (
    <section className="section">
      <div className="grid gap-10 md:grid-cols-[1fr_0.88fr] md:items-center">
        <div className="showroom-panel p-8 md:p-10">
          <p className="eyebrow mb-5 text-gold">Admin Dashboard</p>
          <h1 className="max-w-4xl font-serif text-5xl leading-[0.98] text-walnut md:text-7xl">
            Future management hub for Haaratimata.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-olive md:text-xl md:leading-9">
            This dashboard is prepared for managing showroom products,
            categories, images, trade inquiries, certification assets, and
            website content once admin authentication and database functionality
            are connected.
          </p>
        </div>

        <div className="editorial-frame p-4">
          <div className="min-h-[420px] rounded-[1.35rem] border border-gold/20 bg-[radial-gradient(circle_at_18%_18%,rgba(184,145,75,0.16),transparent_12rem),radial-gradient(circle_at_82%_22%,rgba(255,252,245,0.42),transparent_10rem),linear-gradient(145deg,rgba(58,42,32,0.95),rgba(74,53,38,0.82),rgba(94,70,48,0.72))] p-6 text-ivory shadow-[0_20px_64px_rgba(58,42,32,0.18)]">
            <p className="eyebrow mb-4 text-gold">Planning Interface</p>
            <h2 className="max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
              Built for future control over catalog, content, and business
              inquiries.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-ivory/72">
              The dashboard will eventually support product, category, image,
              certification, and inquiry management from one place.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <div className="mb-9 max-w-3xl">
          <p className="eyebrow mb-4 text-gold">Summary</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            Key management areas at a glance.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {summaryCards.map((card) => (
            <article className="panel min-h-64" key={card.title}>
              <div className="mb-8 h-px bg-gradient-to-r from-gold via-gold/30 to-transparent" />
              <p className="small-caps text-gold">{card.count}</p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-walnut">
                {card.title}
              </h3>
              <p className="mt-4 leading-7 text-olive">{card.future}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-9 max-w-3xl">
          <p className="eyebrow mb-4 text-gold">Catalog Management</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            Catalog structure, pricing, and inventory planning.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {catalogActions.map((action) => (
            <AdminActionCard key={action.title} {...action} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-9 max-w-3xl">
          <p className="eyebrow mb-4 text-gold">Media & Content</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            Images, lookbook assets, sustainability content, and certifications.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {mediaActions.map((action) => (
            <AdminActionCard key={action.title} {...action} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-9 max-w-3xl">
          <p className="eyebrow mb-4 text-gold">Business Inquiries</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            Contact, trade, and export lead management.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {inquiryActions.map((action) => (
            <AdminActionCard key={action.title} {...action} />
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-[2rem] border border-walnut/10 bg-[linear-gradient(135deg,#3a2a20,#4b3526)] text-ivory shadow-[0_34px_96px_rgba(58,42,32,0.2)]">
        <div className="p-8 md:p-12">
          <div className="gold-rule mb-8" />
          <p className="eyebrow mb-4 text-gold">Admin Readiness Note</p>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            This admin dashboard is currently a planning interface.
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-ivory/72">
            Real editing, uploads, authentication, database storage, and inquiry
            management will be added in a later implementation phase.
          </p>
        </div>
      </section>
    </section>
  );
}
