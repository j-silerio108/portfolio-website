import Link from "next/link";
import { ACCENTS, EMAIL, TIERS } from "@/lib/hire-tiers";

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
        {TIERS.map((tier) => {
          const accent = ACCENTS[tier.accent];
          return (
            <Link
              key={tier.slug}
              href={`/hire/${tier.slug}`}
              className={`flex flex-col gap-4 rounded-xl bg-white p-5 transition-transform hover:scale-[1.01] dark:bg-zinc-900 ${accent.card}`}
            >
              <div className="flex flex-col gap-1">
                <h2 className={`text-lg font-semibold ${accent.text}`}>
                  {tier.name}
                </h2>
                {!tier.subTiers && (
                  <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                    {tier.price}
                  </p>
                )}
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {tier.description}
              </p>

              {tier.subTiers && (
                <div className="flex flex-col divide-y divide-black/5 dark:divide-white/10">
                  {tier.subTiers.map((sub) => (
                    <div key={sub.name} className="flex flex-col gap-0.5 py-2.5 first:pt-0 last:pb-0">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                          {sub.name}
                        </span>
                        <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                          {sub.price}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {sub.blurb}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <ul className="flex flex-col gap-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                {tier.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <span className={`mt-auto text-sm font-medium ${accent.text}`}>
                {tier.subTiers ? "View full packages" : "See full details"}
                {" →"}
              </span>
            </Link>
          );
        })}
      </div>

      <section className="flex flex-col gap-3 rounded-xl border border-black/10 bg-white p-6 dark:border-white/15 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Here&apos;s why you need a real developer, not an AI subscription
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          AI website and app builders (Wix, Framer, Durable, Lovable,
          Bolt.new) are real options, and they&apos;re cheap: $10 to $30 a
          month, sometimes less. If your project is genuinely simple, try one
          first.
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          But a subscription only gives you a tool. It doesn&apos;t know when
          to say no to a database you don&apos;t need, and it can&apos;t tell
          you the design doesn&apos;t match your brand.{" "}
          <Link
            href="/projects/velino-motors"
            className="underline underline-offset-2"
          >
            Velino Motors
          </Link>{" "}
          tried building her own site in a vibe-coding tool before coming to
          me. It technically worked, but it pulled in a database, an admin
          dashboard, and other backend scaffolding for a catalog of five
          fixed products. It felt heavy and generic, not premium enough for
          the brand she was building.
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          What you&apos;re actually paying for is judgment: the right scope
          for what you need, a design that fits your brand, and a finished
          product that&apos;s tested and deployed, not a tool you have to
          keep operating yourself.
        </p>
      </section>

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
