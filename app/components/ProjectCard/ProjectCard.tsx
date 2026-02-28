"use client";

import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import type { Project } from "@/app/lib/projects-data";
import { CATEGORY_LABELS } from "@/app/lib/projects-data";
import { getProjectImageSrc } from "@/app/lib/project-images";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const categoryLabel = project.category === "all" ? "" : CATEGORY_LABELS[project.category];
  const mainSrc = getProjectImageSrc(project.mainImage);

  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="group relative w-full overflow-hidden rounded-2xl border border-gray-200/80 bg-white text-left shadow-md transition-all duration-300 hover:shadow-[0_24px_48px_rgba(15,23,42,0.18)] hover:z-10 focus:outline-none focus:ring-2 focus:ring-[#FF5A3C] focus:ring-offset-2"
    >
      {/* Ana görsel – hover'da %5 büyüme */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={mainSrc}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Hover: sağ altta "Detayları Gör" + artı ikonu */}
        <div className="absolute bottom-0 right-0 flex translate-y-full items-center gap-2 rounded-tl-lg bg-[#FF5A3C] px-3 py-2 text-sm font-semibold text-white shadow-lg transition-transform duration-300 group-hover:translate-y-0">
          <span>Detayları Gör</span>
          <FaPlus className="h-3.5 w-3.5" aria-hidden />
        </div>
      </div>

      {/* Badge + Başlık */}
      <div className="p-4">
        {categoryLabel && (
          <span
            className="inline-block rounded-md bg-[#FF5A3C] px-2.5 py-1 text-xs font-semibold text-white"
            style={{ backgroundColor: "#FF5A3C" }}
          >
            {categoryLabel}
          </span>
        )}
        <h3 className="mt-2 font-bold text-gray-900">{project.title}</h3>
      </div>
    </button>
  );
}
