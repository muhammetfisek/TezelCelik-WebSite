"use client";

import { useState } from "react";

export type ProjectCategory =
  | "all"
  | "steel-buildings"
  | "wide-span-roofs"
  | "mezzanine-platforms"
  | "entrance-canopies"
  | "elevator-structures"
  | "pedestrian-bridges"
  | "steel-stairs"
  | "railings";

const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "Tümü" },
  { id: "steel-buildings", label: "Çelik Binalar" },
  { id: "wide-span-roofs", label: "Çelik Çatı" },
  { id: "mezzanine-platforms", label: "Arakat & Platform" },
  { id: "entrance-canopies", label: "Kanopi & Saçak" },
  { id: "elevator-structures", label: "Asansör Çeliği" },
  { id: "pedestrian-bridges", label: "Yaya Köprüsü" },
  { id: "steel-stairs", label: "Merdiven" },
  { id: "railings", label: "Korkuluk" },
];

interface ProjectFilterBarProps {
  /** Kontrollü mod: dışarıdan seçili kategori (örn. hizmet sayfasında alana göre) */
  activeCategory?: ProjectCategory;
  onFilterChange?: (category: ProjectCategory) => void;
}

export function ProjectFilterBar({
  activeCategory: controlledCategory,
  onFilterChange,
}: ProjectFilterBarProps) {
  const [internalCategory, setInternalCategory] = useState<ProjectCategory>("all");
  const activeId = controlledCategory ?? internalCategory;

  const handleClick = (id: ProjectCategory) => {
    setInternalCategory(id);
    onFilterChange?.(id);
  };

  return (
    <section className="project-filter-section border-t border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex min-h-[72px] items-center justify-center overflow-x-auto py-5 sm:min-h-[80px] sm:py-6 scrollbar-hide">
          <div className="flex shrink-0 justify-center gap-1.5 sm:gap-2">
            {CATEGORIES.map(({ id, label }) => {
              const isActive = activeId === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => handleClick(id)}
                  className={`
                    project-filter-btn
                    shrink-0 whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-[600]
                    transition-colors duration-200
                    sm:px-3.5 sm:py-2 sm:text-[13px]
                    ${isActive ? "project-filter-btn-active" : "project-filter-btn-inactive"}
                  `}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
