export const EMAIL = "josesilerio108@gmail.com";

export type Accent = "green" | "blue" | "gold";

export const ACCENTS: Record<
  Accent,
  { card: string; text: string; link: string; badge: string }
> = {
  green: {
    card: "border border-l-4 border-black/10 border-l-emerald-500 dark:border-white/15 dark:border-l-emerald-400",
    text: "text-emerald-600 dark:text-emerald-400",
    link: "text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300",
    badge: "bg-emerald-500/10 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300",
  },
  blue: {
    card: "border border-l-4 border-black/10 border-l-blue-500 dark:border-white/15 dark:border-l-blue-400",
    text: "text-blue-600 dark:text-blue-400",
    link: "text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300",
    badge: "bg-blue-500/10 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300",
  },
  gold: {
    card: "border-2 border-amber-500 shadow-[0_0_35px_-6px] shadow-amber-500/60 dark:border-amber-400 dark:shadow-amber-400/40",
    text: "text-amber-600 dark:text-amber-400",
    link: "text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300",
    badge: "bg-amber-500/10 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300",
  },
};

export interface SubTier {
  name: string;
  price: string;
  blurb: string;
  includes: string[];
}

export interface Tier {
  slug: string;
  name: string;
  price: string;
  description: string;
  includes: string[];
  example?: { label: string; href: string };
  accent: Accent;
  subTiers?: SubTier[];
}

export const TIERS: Tier[] = [
  {
    slug: "business-site",
    name: "Business site",
    price: "From $250",
    accent: "green",
    description:
      "A single-page or few-page site for a business that needs a clean online presence and a clear way for visitors to reach out, no backend required. Three packages depending on how much site you need.",
    includes: [
      "Contact form, WhatsApp link, or booking CTA",
      "Mobile responsive",
    ],
    subTiers: [
      {
        name: "Starter",
        price: "From $250",
        blurb: "1 page, built from a clean template. Live in 3 days.",
        includes: [
          "1 page",
          "Template-based layout",
          "Contact form or WhatsApp link",
          "Live in 3 days",
        ],
      },
      {
        name: "Standard",
        price: "From $450",
        blurb:
          "Up to 5 pages, custom design matched to your brand, basic on-page SEO.",
        includes: [
          "Up to 5 pages",
          "Custom design matched to your brand",
          "Basic on-page SEO (titles, meta descriptions, sitemap)",
          "Live in 5 days",
        ],
      },
      {
        name: "Premium",
        price: "From $750",
        blurb:
          "Up to 8 pages, fully custom design, added content section, priority delivery.",
        includes: [
          "Up to 8 pages",
          "Fully custom design, mocked up before build",
          "FAQ, testimonials, or blog section",
          "Priority delivery, live in 3 days",
          "1 round of revisions after launch",
        ],
      },
    ],
    example: { label: "See Velino Motors", href: "/projects/velino-motors" },
  },
  {
    slug: "online-store",
    name: "Online store",
    price: "From $1,500",
    accent: "blue",
    description:
      "A real e-commerce site with hosted checkout, product catalog, and order handling wired up end to end so payments actually work. Three packages depending on how much store you need.",
    includes: ["Stripe checkout integration", "Mobile responsive"],
    subTiers: [
      {
        name: "Starter Store",
        price: "From $1,500",
        blurb:
          "Up to 15 products, hosted Stripe checkout, single collection page.",
        includes: [
          "Up to 15 products",
          "Hosted Stripe checkout",
          "Single product collection page",
          "Mobile responsive",
        ],
      },
      {
        name: "Standard Store",
        price: "From $2,500",
        blurb:
          "Unlimited products, full cart, order fulfillment workflow, discount codes.",
        includes: [
          "Unlimited products in one catalog",
          "Cart + Stripe checkout integration",
          "Order fulfillment workflow",
          "Discount codes",
        ],
      },
      {
        name: "Premium Store",
        price: "From $4,000",
        blurb:
          "Customer accounts, inventory tracking, custom checkout design.",
        includes: [
          "Customer accounts and order history",
          "Inventory tracking",
          "Custom checkout design to match your brand",
          "Priority support during launch",
        ],
      },
    ],
  },
  {
    slug: "custom-web-app",
    name: "Custom web app",
    price: "Let's discuss",
    accent: "gold",
    description:
      "A full application built from a spec: accounts, an admin panel, a database, whatever the product needs. Every build here is different, so pricing starts with a conversation, not a price tag.",
    includes: [
      "Authentication and user accounts",
      "Admin panel / CRUD as needed",
      "Database design",
      "Testing and deployment",
    ],
    example: { label: "See Orienteer", href: "/projects/orienteer" },
  },
];

export function getTierBySlug(slug: string): Tier | undefined {
  return TIERS.find((tier) => tier.slug === slug);
}
