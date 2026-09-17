export default function AboutPage() {
  return (
    <article className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        About
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        I&apos;m Jose Silerio, a solo developer building full-stack web
        products end to end — from spec to deploy.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400">
        Accessibility isn&apos;t an afterthought in my work: I&apos;m blind
        and use a screen reader daily, so the sites and apps I build are held
        to the same standard I rely on myself — including this one.
      </p>
    </article>
  );
}
