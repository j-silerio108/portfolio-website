import { notFound } from "next/navigation";
import Link from "next/link";
import { ACCENTS, EMAIL, TIERS, getTierBySlug } from "@/lib/hire-tiers";

export async function generateStaticParams() {
  return TIERS.map((tier) => ({ tier: tier.slug }));
}

export default async function TierDetailPage({
  params,
}: {
  params: Promise<{ tier: string }>;
}) {
  const { tier: slug } = await params;
  const tier = getTierBySlug(slug);

  if (!tier) {
    notFound();
  }

  const accent = ACCENTS[tier.accent];
  const mailSubject = encodeURIComponent(`${tier.name} inquiry`);

  return (
    <div className="flex flex-col gap-10">
      <Link
        href="/hire"
        className="w-fit text-sm font-medium text-zinc-500 underline underline-offset-2 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300"
      >
        ← Back to all tiers
      </Link>

      <header className="flex flex-col gap-3">
        <span className={`text-sm font-semibold uppercase tracking-wide ${accent.text}`}>
          {tier.name}
        </span>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          {tier.price}
        </h1>
        <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
          {tier.description}
        </p>
      </header>

      {tier.subTiers && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {tier.subTiers.map((sub) => (
            <div
              key={sub.name}
              className={`flex flex-col gap-4 rounded-xl bg-white p-5 dark:bg-zinc-900 ${accent.card}`}
            >
              <div className="flex flex-col gap-1">
                <span
                  className={`w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold ${accent.badge}`}
                >
                  {sub.name}
                </span>
                <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                  {sub.price}
                </p>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {sub.blurb}
              </p>

              <ul className="flex flex-col gap-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                {sub.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <section
        className={`flex flex-col gap-3 rounded-xl bg-white p-6 dark:bg-zinc-900 ${accent.card}`}
      >
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Included with every {tier.name.toLowerCase()} package
        </h2>
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
            className={`mt-2 w-fit text-sm font-medium underline underline-offset-2 ${accent.link}`}
          >
            {tier.example.label}
          </Link>
        )}
      </section>

      <a
        href={`mailto:${EMAIL}?subject=${mailSubject}`}
        className="inline-flex w-fit items-center rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        {tier.price === "Let's discuss"
          ? "Let's discuss your project"
          : `Email me about ${tier.name}`}
      </a>
    </div>
  );
}
