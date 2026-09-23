import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const projects = getAllProjects();

  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Selected work
        </h1>
        <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
          Case studies from real, shipped projects: architecture, stack, and
          outcomes.
        </p>
      </header>

      <section className="flex flex-col gap-2 rounded-xl border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-zinc-900 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            Available for freelance work
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Business sites from $250, online stores from $900, custom web
            apps from $2,000.
          </p>
        </div>
        <Link
          href="/hire"
          className="text-sm font-medium underline underline-offset-2 sm:whitespace-nowrap"
        >
          See how I can help →
        </Link>
      </section>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
