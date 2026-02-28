"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import type { Project } from "@/app/lib/projects-data";
import { getProjectImageSrc } from "@/app/lib/project-images";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!project) return;
    setSlideIndex(0);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setSlideIndex((i) => (i + 1) % project.galleryImages.length);
      if (e.key === "ArrowLeft")
        setSlideIndex((i) => (i - 1 + project.galleryImages.length) % project.galleryImages.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [project, onClose]);

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [project]);

  if (!project || !isClient) return null;

  const images = project.galleryImages.map(getProjectImageSrc);
  const hasMultiple = images.length > 1;

  const modalContent = (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Üst alan: Galeri – ekranın ~60–70%'i */}
        <div className="relative flex-[2] min-h-0 basis-[65%]">
          <div className="relative h-64 w-full sm:h-80 md:h-96">
            <Image
              src={images[slideIndex]}
              alt={`${project.title} - ${slideIndex + 1}. fotoğraf`}
              fill
              sizes="(min-width: 768px) 896px, 100vw"
              className="object-cover"
              priority
            />
            {hasMultiple && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setSlideIndex((i) => (i - 1 + images.length) % images.length)
                  }
                  className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white shadow-lg transition hover:bg-black/80"
                  aria-label="Önceki fotoğraf"
                >
                  <FaChevronLeft />
                </button>
                <button
                  type="button"
                  onClick={() => setSlideIndex((i) => (i + 1) % images.length)}
                  className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white shadow-lg transition hover:bg-black/80"
                  aria-label="Sonraki fotoğraf"
                >
                  <FaChevronRight />
                </button>
              </>
            )}
          </div>
          {/* Galeri noktaları */}
          {hasMultiple && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSlideIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === slideIndex ? "w-6 bg-white" : "w-2 bg-white/60 hover:bg-white/80"
                  }`}
                  aria-label={`${i + 1}. fotoğrafa git`}
                />
              ))}
            </div>
          )}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
            aria-label="Kapat"
          >
            <FaTimes />
          </button>
        </div>

        {/* Bilgi paneli: grid + açıklama */}
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-5 sm:p-6">
          <h2 id="project-modal-title" className="text-xl font-bold text-gray-900 sm:text-2xl">
            {project.title}
          </h2>

          {/* 3–4 sütunlu info grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-gray-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Konum
              </p>
              <p className="mt-0.5 font-medium text-gray-900">{project.location}</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Yıl</p>
              <p className="mt-0.5 font-medium text-gray-900">{project.year}</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-3 sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Kapasite / Ölçü
              </p>
              <p className="mt-0.5 font-medium text-gray-900">{project.capacityOrSize}</p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-gray-700">
            {project.shortDescription}
          </p>

          {/* Sağ alt: Teklif Al butonu */}
          <div className="mt-2 flex justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF5A3C] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#e54f32]"
            >
              Benzer Bir Proje İçin Teklif Al
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
