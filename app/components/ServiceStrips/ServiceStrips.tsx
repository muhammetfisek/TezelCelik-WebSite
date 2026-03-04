"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import arkaplanNav from "@/images/arkaplan_faaliyet.png";
import steelBuildingsImg from "@/images/blog_images/celik_konstruksiyon.png";
import wideSpanImg from "@/images/blog_images/fabrika_hangar.jpeg";
import mezzanineImg from "@/images/blog_images/kumlama_nedir.png";
import entranceImg from "@/images/blog_images/insaat_taahhut.png";
import elevatorImg from "@/images/blog_images/deprem_kabini.png";
import bridgesImg from "@/images/blog_images/sismik_ıza.png";
import stairsImg from "@/images/blog_images/celik_deprem_dayaniklilik.png";
import railingsImg from "@/images/blog_images/celik_su_verme.png";
import { servicePageData, type ServiceId } from "@/app/lib/service-page-data";

const serviceImageMap: Record<ServiceId, any> = {
  "steel-buildings": steelBuildingsImg,
  "wide-span-roofs": wideSpanImg,
  "mezzanine-platforms": mezzanineImg,
  "entrance-canopies": entranceImg,
  "elevator-structures": elevatorImg,
  "pedestrian-bridges": bridgesImg,
  "steel-stairs": stairsImg,
  railings: railingsImg,
};

export function ServiceStripsSection() {
  const allServices = useMemo(() => Object.values(servicePageData), []);
  const groups = useMemo(
    () => [allServices.slice(0, 4), allServices.slice(4, 8)],
    [allServices],
  );
  const [groupIndex, setGroupIndex] = useState(0);

  const currentGroup = groups[groupIndex] ?? [];

  const goPrev = () =>
    setGroupIndex((prev) => (prev - 1 + groups.length) % groups.length);
  const goNext = () =>
    setGroupIndex((prev) => (prev + 1) % groups.length);

  return (
    <section className="bg-gradient-to-b from-[#f3f5fa] to-[#e4e8f2] py-16 sm:py-20">
      {/* Başlık bloğu */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
            FAALİYET ALANLARIMIZ
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Sizin İçin Neler İnşa Ediyoruz?
          </h2>
          <div className="mt-3 mx-auto h-1 w-20 rounded-full bg-[#FF5A3C]" />
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Endüstriyel tesislerden özel mimari yapılara kadar, ihtiyacınıza özel
            statik mükemmeliyetle tasarlanmış anahtar teslim yapılar üretiyoruz.
          </p>
        </div>
      </div>

      {/* Tam genişlikte hizmet şeritleri + gezinme */}
      <div className="mt-10 px-0 sm:px-0">
        <div className="relative overflow-hidden rounded-none bg-slate-900 shadow-[0_24px_60px_rgba(15,23,42,0.75)] border border-slate-800/70">
          <div className="flex flex-col sm:flex-row sm:h-[340px] w-full">
            {currentGroup.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group relative flex-1 cursor-pointer overflow-hidden border-b border-white/5 transition-all duration-500 ease-out sm:border-b-0 sm:border-r sm:last:border-r-0 sm:flex-[1_1_0] sm:hover:flex-[2.7_1_0]"
              >
                <Image
                  src={serviceImageMap[service.id] ?? arkaplanNav}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-slate-900/55 to-slate-900/25" />

                {/* Küçük başlık – kart dar görünümde */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5 transition-opacity duration-300 group-hover:opacity-0 sm:group-hover:opacity-0">
                  <h3 className="text-sm font-semibold text-white sm:text-base">
                    {service.shortTitle}
                  </h3>
                </div>

                {/* Genişlemiş detay – sadece hover'da */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 sm:p-7 translate-y-3">
                  <div className="max-w-md space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-200/80">
                      {service.title}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                      {service.shortTitle}
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-200 sm:text-sm">
                      {service.heroDescription}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="mt-4 inline-flex items-center self-start rounded-full bg-white/95 px-5 py-2 text-xs font-semibold tracking-wide text-slate-900 shadow-sm transition-colors hover:bg-[#FF5A3C] hover:text-white sm:text-sm"
                  >
                    Detayları gör
                  </button>
                </div>
              </Link>
            ))}
          </div>

          {/* Alt gezinme – oklar + noktalar */}
          <div className="flex items-center justify-center gap-4 border-t border-slate-800/70 bg-slate-900/90 px-4 py-3 sm:py-4">
            <button
              type="button"
              onClick={goPrev}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-500/60 bg-slate-900/60 text-sm font-semibold text-slate-100 transition-colors hover:border-[#FF5A3C] hover:bg-[#FF5A3C]"
              aria-label="Önceki hizmet grubu"
            >
              ‹
            </button>

            <div className="flex items-center gap-2">
              {groups.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setGroupIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === groupIndex
                      ? "w-6 bg-[#FF5A3C]"
                      : "w-2 bg-slate-500/60 hover:bg-slate-300/80"
                  }`}
                  aria-label={`Hizmet grubu ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-500/60 bg-slate-900/60 text-sm font-semibold text-slate-100 transition-colors hover:border-[#FF5A3C] hover:bg-[#FF5A3C]"
              aria-label="Sonraki hizmet grubu"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

