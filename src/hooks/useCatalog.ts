import { useMemo, useState } from "react";
import type { Category, Template } from "../types";
export function useCatalog(items: readonly Template[]) {
  const [filter, setFilter] = useState<Category>("all");
  const visible = useMemo(() => items.filter(item => filter === "all" || item.categories.includes(filter)), [items, filter]);
  return { filter, setFilter, visible };
}
