export type ProjectStatus = "live" | "in-progress" | "archived";

export interface ProjectStack {
  frontend?: string[];
  backend?: string[];
  ai?: string[];
  infra?: string[];
}

export interface ProjectLinks {
  live?: string | null;
  repo?: string | null;
}

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  summary: string;
  coverImage: string;
  status: ProjectStatus;
  order: number;
  role: string;
  stack: ProjectStack;
  links: ProjectLinks;
}

export interface Project extends ProjectFrontmatter {
  content: string;
}
