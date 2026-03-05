"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import { projectsData } from "@/app/lib/projects-data";
import { getProjectImageSrc } from "@/app/lib/project-images";

export function HomepageProjectsShowcase() {
  const items = useMemo(() => {
    const picked = projectsData.slice(0, 6);
    return picked.map((project) => ({
      project,
      imageSrc: getProjectImageSrc(project.mainImage),
    }));
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-white">
        {/* Arka Plan Bölünmesi (sağ turuncu alan, üst-alt beyaz boşluklu) */}
        <div className="absolute inset-y-8 inset-x-0 z-0 flex sm:inset-y-18">
          <div className="w-1/2 bg-white" />
          <div className="w-1/2 bg-[#FFE1D6]" /> {/* Hafif turuncu sağ taraf */}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-8 sm:py-14">
          
          {/* Başlık */}
          <div className="mb-10 sm:mb-12 text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
            İmzamızı Taşıyan Yapılar
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Projelerimiz
            </h2>
          </div>

          <div className="grid items-stretch gap-0 lg:grid-cols-12">
            
            {/* SOL YARI: 6'lı Proje Fotoğrafları */}
            <div className="lg:col-span-8 lg:pr-10">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
                {items.map(({ project, imageSrc }) => (
                  <div
                    key={project.id}
                    className="group relative aspect-square overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
                  >
                    <Image
                      src={imageSrc}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-left opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <p className="text-[10px] font-bold text-[#FF5A3C] uppercase">{project.location}</p>
                      <h4 className="text-sm font-bold text-white">{project.title}</h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tüm Projeler Linki */}
              <div className="mt-8 sm:mt-10">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900"
                >
                  <span className="border-b border-transparent transition-all group-hover:border-[#FF5A3C]">
                    TÜM PROJELERİ GÖRÜNTÜLE
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white transition-all group-hover:bg-[#FF5A3C]">
                    <FaArrowRight className="text-xs" />
                  </div>
                </Link>
              </div>
            </div>

            {/* SAĞ YARI: Metin bloğu – kart yok, direkt zemin üzerinde */}
            <aside className="mt-10 lg:col-span-4 lg:mt-0">
              <div className="h-full px-2 py-2 text-slate-900 sm:px-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Her projede ve imalatta
                </p>
                <h3 className="mt-3 text-3xl font-extrabold leading-snug text-slate-900 sm:text-4xl">
                  KALİTE ve GÜVEN
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-700">
                  odaklı çözümler üretiyoruz.
                </p>

                <p className="mt-6 text-sm leading-relaxed text-slate-700">
                Bizim için her proje, sadece bir inşaat süreci değil; gökyüzüne yükselen bir güven sembolüdür. Tezel Çelik olarak, standartların ötesine geçmeyi bir çalışma kültürü haline getirdik. Projeler sayfamızda incelediğiniz her yapı; ileri teknolojiyle harmanlanmış bir vizyonun, çeliğin sertliğiyle buluştuğu noktayı temsil ediyor.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-700">
                Tasarımdan montaja her adımı geleceği inşa etme tutkusuyla yönetiyoruz. Çeliğin gücüyle nesiller boyu sürecek sağlam yapılar üretiyor, sizi bu dönüşümün bir parçası olmaya davet ediyoruz.
                </p>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
}