import type { ProjectStack } from "@/types/project";

const CATEGORY_ORDER: (keyof ProjectStack)[] = [
  "frontend",
  "backend",
  "ai",
  "infra",
];

export function flattenStack(stack: ProjectStack): string[] {
  return CATEGORY_ORDER.flatMap((category) => stack[category] ?? []);
}

export const STACK_CATEGORY_LABELS: Record<keyof ProjectStack, string> = {
  frontend: "Frontend",
  backend: "Backend",
  ai: "AI",
  infra: "Infra",
};

export const STACK_CATEGORIES = CATEGORY_ORDER;
