import { MDXRemote } from "next-mdx-remote/rsc";
import type { Project } from "@/types/project";
import { STACK_CATEGORIES, STACK_CATEGORY_LABELS } from "@/lib/stack";
import StackBadge from "./StackBadge";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          {project.title}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          {project.summary}
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          {project.role}
        </p>
        <div className="flex gap-4 text-sm font-medium">
          {project.links.live && (
            <a
              href={project.links.live}
              className="underline underline-offset-2"
            >
              Live site
            </a>
          )}
          {project.links.repo && (
            <a
              href={project.links.repo}
              className="underline underline-offset-2"
            >
              Repository
            </a>
          )}
        </div>
      </header>

      <section aria-labelledby="stack-heading" className="flex flex-col gap-3">
        <h2 id="stack-heading" className="text-lg font-semibold">
          Stack
        </h2>
        <dl className="flex flex-col gap-3">
          {STACK_CATEGORIES.filter(
            (category) => (project.stack[category] ?? []).length > 0
          ).map((category) => (
            <div key={category} className="flex flex-wrap items-baseline gap-2">
              <dt className="w-20 shrink-0 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {STACK_CATEGORY_LABELS[category]}
              </dt>
              <dd className="flex flex-wrap gap-1.5">
                {project.stack[category]?.map((label) => (
                  <StackBadge key={label} label={label} />
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <MDXRemote source={project.content} />
      </div>
    </article>
  );
}
