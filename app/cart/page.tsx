import Link from "next/link";

const featureCards = [
  {
    title: "Quote Review",
    copy: "Review selected products before sending an inquiry.",
  },
  {
    title: "Size & Color Options",
    copy: "Future cart flow can support buyer-selected size, color, and quantity preferences.",
  },
  {
    title: "Trade Pricing",
    copy: "Products can be prepared for trade pricing and bulk planning.",
  },
  {
    title: "Custom Development",
    copy: "Custom items can be added to a future quote-building workflow.",
  },
];

export default function CartPage() {
  return (
    <section className="section">
      <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-center">
        <div>
          <p className="eyebrow mb-5 text-gold">Cart</p>
          <h1 className="max-w-5xl font-serif text-5xl leading-[0.98] text-walnut md:text-7xl">
            Your curated showroom list will appear here.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-olive md:text-xl md:leading-9">
            This future cart area will support selected showroom products, trade
            quote requests, custom quantities, color/size options, and buyer
            review before inquiry submission.
          </p>
        </div>

        <div className="panel p-8 md:p-10">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/25 bg-ivory/80 text-walnut shadow-[0_18px_40px_rgba(58,42,32,0.12)]">
            <svg
              aria-hidden="true"
              fill="none"
              height="34"
              viewBox="0 0 24 24"
              width="34"
            >
              <path
                d="M6.5 7.5h14l-1.6 8.2a2 2 0 0 1-2 1.6H9.2a2 2 0 0 1-2-1.7L6 4.8H3.5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.8 20.2h.1M17.2 20.2h.1"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h2 className="mt-6 font-serif text-3xl leading-tight text-walnut">
            No items have been added yet.
          </h2>
          <p className="mt-4 text-base leading-7 text-olive">
            Browse the showroom and explore products that can later be added for
            quote review, trade discussion, or custom development.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="button-dark" href="/showroom">
              Explore Showroom
            </Link>
            <Link className="button-light" href="/wholesale">
              Start Trade Inquiry
            </Link>
            <Link className="button-light" href="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <div className="mb-9 max-w-3xl">
          <p className="eyebrow mb-4 text-gold">Future Cart Features</p>
          <h2 className="font-serif text-4xl leading-tight text-walnut md:text-5xl">
            Prepared for quote-led shopping and buyer review.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((card) => (
            <article className="panel min-h-56" key={card.title}>
              <div className="mb-8 h-px bg-gradient-to-r from-gold via-gold/30 to-transparent" />
              <h3 className="font-serif text-3xl leading-tight text-walnut">
                {card.title}
              </h3>
              <p className="mt-4 leading-7 text-olive">{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="luxury-band mt-16 rounded-[2rem] border border-walnut/10 p-6 md:p-8">
        <p className="eyebrow mb-4 text-gold">Important Note</p>
        <p className="max-w-5xl font-serif text-3xl leading-tight text-walnut md:text-4xl">
          Checkout and payment are not enabled yet. Haaratimata currently
          supports inquiry-led product discussion and trade quote requests.
        </p>
      </section>
    </section>
  );
}
