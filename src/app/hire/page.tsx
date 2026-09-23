import Link from "next/link";

const EMAIL = "josesilerio108@gmail.com";

interface Tier {
  name: string;
  price: string;
  description: string;
  includes: string[];
  example?: { label: string; href: string };
}

const TIERS: Tier[] = [
  {
    name: "Business site",
    price: "From $250",
    description:
      "A single-page or few-page site for a business that needs a clean online presence and a clear way for visitors to reach out, no backend required.",
    includes: [
      "Custom design, built to match your brand",
      "Contact form, WhatsApp link, or booking CTA",
      "Mobile responsive",
      "Deployed and live within about a week",
    ],
    example: { label: "See Velino Motors", href: "/projects/velino-motors" },
  },
  {
    name: "Online store",
    price: "From $900",
    description:
      "A real e-commerce site with hosted checkout, product catalog, and order handling wired up end to end so payments actually work.",
    includes: [
      "Product catalog and cart",
      "Stripe checkout integration",
      "Order fulfillment workflow",
      "Mobile responsive",
    ],
  },
  {
    name: "Custom web app",
    price: "From $2,000",
    description:
      "A full application built from a spec: accounts, an admin panel, a database, whatever the product needs. Scoped and quoted after a short call.",
    includes: [
      "Authentication and user accounts",
      "Admin panel / CRUD as needed",
      "Database design",
      "Testing and deployment",
    ],
    example: { label: "See Orienteer", href: "/projects/orienteer" },
  },
];

export default function HirePage() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Hire me
        </h1>
        <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
          I build full-stack web products end to end, from spec to deploy.
          Below are the three shapes of project I take on most often, each
          backed by a real, shipped example. Every project starts as a quick
          scoping conversation and ends with a fixed price, not an open-ended
          hourly bill.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className="flex flex-col gap-4 rounded-xl border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-zinc-900"
          >
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {tier.name}
              </h2>
              <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                {tier.price}
              </p>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {tier.description}
            </p>

            <ul className="flex flex-col gap-1.5 text-sm text-zinc-600 dark:text-zinc-400">
              {tier.includes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {tier.example && (
              <Link
                href={tier.example.href}
                className="mt-auto text-sm font-medium underline underline-offset-2"
              >
                {tier.example.label}
              </Link>
            )}
          </div>
        ))}
      </div>

      <section className="flex flex-col gap-3 rounded-xl border border-black/10 bg-white p-6 dark:border-white/15 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          How it works
        </h2>
        <ol className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <li>1. Email me what you need, no matter how rough the idea is.</li>
          <li>2. We scope it together and land on a fixed price.</li>
          <li>3. I build it, and you see progress along the way.</li>
          <li>4. It ships, and you get the handover: code, access, everything.</li>
        </ol>
        <a
          href={`mailto:${EMAIL}`}
          className="mt-2 inline-flex w-fit items-center rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Email me: {EMAIL}
        </a>
      </section>
    </div>
  );
}
