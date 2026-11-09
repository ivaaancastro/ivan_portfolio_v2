import {
  Atom,
  Bot,
  Brain,
  Code2,
  Coffee,
  Container,
  Database,
  Layers,
  Store,
  Terminal,
} from "lucide-react";

/** Icons that content entries can reference by name (validated in content.config.ts). */
export const icons = {
  atom: Atom,
  bot: Bot,
  brain: Brain,
  code: Code2,
  coffee: Coffee,
  container: Container,
  database: Database,
  layers: Layers,
  store: Store,
  terminal: Terminal,
} as const;

export type IconName = keyof typeof icons;

export const iconNames = Object.keys(icons) as [IconName, ...IconName[]];
