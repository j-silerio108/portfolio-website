import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";
import { flattenStack } from "@/lib/stack";
import StackBadge from "./StackBadge";

export default function ProjectCard({ project }: { project: Project }) {
  const stack = flattenStack(project.stack);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white transition-shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:border-white/15 dark:bg-zinc-900 dark:focus-visible:ring-white"
    >
      <div className="relative aspect-video w-full bg-zinc-100 dark:bg-zinc-800">
        {project.coverImage && (
          <Image
            src={project.coverImage}
            alt={`${project.title} cover screenshot`}
            fill
            className="object-cover"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          {project.title}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {project.summary}
        </p>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end gap-2 bg-black/80 p-4 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
        <span className="text-xs font-medium uppercase tracking-wide text-white/70">
          Stack
        </span>
        <div className="flex flex-wrap gap-1.5">
          {stack.map((label) => (
            <StackBadge key={label} label={label} />
          ))}
        </div>
      </div>
    </Link>
  );
}
