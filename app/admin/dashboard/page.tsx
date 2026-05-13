const cards = [
  ["Products", "Future catalog management"],
  ["Inquiries", "Future wholesale requests"],
  ["Gallery", "Future image curation"],
  ["Exports", "Future order pipeline"],
];

export default function AdminDashboardPage() {
  return (
    <section className="section">
      <p className="eyebrow mb-5 text-gold">Admin Architecture Placeholder</p>
      <h1 className="font-serif text-5xl text-walnut">Dashboard</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-olive">
        This route is reserved for future protected admin tooling. It currently
        contains no authentication, database access, or live business logic.
      </p>
      <div className="mt-12 grid gap-5 md:grid-cols-4">
        {cards.map(([title, copy]) => (
          <div className="panel" key={title}>
            <p className="font-serif text-3xl text-walnut">{title}</p>
            <p className="mt-4 leading-7 text-olive">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
