"use client";

import { useState, useMemo } from "react";
import {
  ProjectFilterBar,
  type ProjectCategory,
} from "@/app/components/ProjectFilterBar/ProjectFilterBar";
import { ProjectCard } from "@/app/components/ProjectCard/ProjectCard";
import { ProjectDetailModal } from "@/app/components/ProjectDetailModal/ProjectDetailModal";
import {
  getProjectsByCategory,
  type Project,
} from "@/app/lib/projects-data";

interface ProjectsGridProps {
  /** Hizmet sayfasında kullanıldığında sadece bu kategorideki projeler gösterilir */
  initialCategory?: ProjectCategory;
  /** true ise filtre çubuğu gizlenir ve section padding küçültülür (hizmet sayfası gömülü kullanım) */
  compact?: boolean;
}

export function ProjectsGrid({
  initialCategory = "all",
  compact = false,
}: ProjectsGridProps) {
  const [category, setCategory] = useState<ProjectCategory>(initialCategory);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = useMemo(
    () => getProjectsByCategory(category),
    [category]
  );

  const showFilterBar = initialCategory === "all" && !compact;

  return (
    <>
      {showFilterBar && (
        <ProjectFilterBar
          activeCategory={showFilterBar ? category : undefined}
          onFilterChange={setCategory}
        />
      )}

      <section
        className={compact ? "py-6" : "py-14 sm:py-18"}
      >
        <div className={compact ? "mx-auto px-0" : "container mx-auto px-4 lg:px-8"}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
          {projects.length === 0 && (
            <p className="py-12 text-center text-gray-500">
              Bu kategoride henüz proje bulunmuyor.
            </p>
          )}
        </div>
      </section>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
