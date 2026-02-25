"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ProjectItem = {
  title: string;
  imageSrc: string;
};

interface ProjectLightboxGridProps {
  items: ProjectItem[];
}

export function ProjectLightboxGrid({ items }: ProjectLightboxGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  const hasItems = items && items.length > 0;

  const close = () => setActiveIndex(null);

  const openAt = (index: number) => {
    // Sadece lightbox'ı aç, sayfa konumunu değiştirme
    setActiveIndex(index);
  };

  const showNext = () => {
    if (!hasItems || activeIndex === null) return;
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + 1) % items.length;
    });
  };

  const showPrev = () => {
    if (!hasItems || activeIndex === null) return;
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current - 1 + items.length) % items.length;
    });
  };

  // Sadece client tarafında portal kullanabilmek için
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      } else if (event.key === "ArrowRight") {
        showNext();
      } else if (event.key === "ArrowLeft") {
        showPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, hasItems, items.length]);

  // Sayfa kaymasını engelle (arka plan sabit kalsın)
  useEffect(() => {
    if (activeIndex === null) return;

    const body = document.body;
    const html = document.documentElement;

    const prevBodyOverflow = body.style.overflow;
    const prevHtmlOverflow = html.style.overflow;

    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    return () => {
      body.style.overflow = prevBodyOverflow;
      html.style.overflow = prevHtmlOverflow;
    };
  }, [activeIndex]);

  if (!hasItems) return null;

  return (
    <>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => openAt(index)}
            className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.18)] hover:z-10"
          >
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 320px, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
              <p className="mt-1 text-xs font-medium text-gray-500">
                Büyütmek için tıklayın
              </p>
            </div>
          </button>
        ))}
      </div>

      {isClient &&
        activeIndex !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4"
            onClick={close}
          >
            <div
              className="relative w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative flex h-[86vh] max-h-[86vh] w-full flex-col rounded-3xl bg-gray-200 px-1.5 py-1.5 shadow-2xl sm:px-2 sm:py-2">
                {/* Üst kısım: oklar + foto */}
                <div className="flex flex-1 items-center">
                  {/* Sol ok - beyaz alan üzerinde */}
                  {items.length > 1 && (
                    <button
                      type="button"
                      onClick={showPrev}
                      className="mr-2 hidden h-9 w-9 items-center justify-center rounded-full bg-gray-900/80 text-base font-semibold text-white shadow-md hover:bg-gray-900 sm:inline-flex"
                      aria-label="Önceki fotoğraf"
                    >
                      ‹
                    </button>
                  )}

                  {/* Fotoğraf alanı */}
                  <div className="relative h-full flex-1 overflow-hidden rounded-2xl">
                    <Image
                      src={items[activeIndex].imageSrc}
                      alt={items[activeIndex].title}
                      fill
                      sizes="(min-width: 1024px) 900px, 100vw"
                      className="object-contain"
                      priority
                    />
                  </div>

                  {/* Sağ ok - beyaz alan üzerinde */}
                  {items.length > 1 && (
                    <button
                      type="button"
                      onClick={showNext}
                      className="ml-2 hidden h-9 w-9 items-center justify-center rounded-full bg-gray-900/80 text-base font-semibold text-white shadow-md hover:bg-gray-900 sm:inline-flex"
                      aria-label="Sonraki fotoğraf"
                    >
                      ›
                    </button>
                  )}
                </div>

                {/* Alt kısım: başlık + sayaç, fotoğrafın altında beyaz zeminde ortalanmış */}
                <div className="mt-4 flex flex-col items-center text-sm sm:text-base font-semibold">
                  <span className="max-w-xl text-center text-lg sm:text-xl font-extrabold tracking-wide text-[#FF5A3C]">
                    {items[activeIndex].title}
                  </span>
                  <span className="mt-1 text-[11px] sm:text-xs text-gray-500">
                    {activeIndex + 1} / {items.length}
                  </span>
                </div>

                {/* Kapat butonu - beyaz kutunun sağ üst köşesi */}
                <button
                  type="button"
                  onClick={close}
                  className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-900/80 text-sm font-semibold text-white shadow-md hover:bg-gray-900"
                  aria-label="Kapat"
                >
                  ×
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

