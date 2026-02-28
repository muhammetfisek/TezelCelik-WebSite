import type { Metadata } from "next";
import Link from "next/link";
import arkaplanNav from "@/images/arkaplan_faaliyet.png";
import "../../about/about.css";
import { ServicesSidebar } from "@/app/components/ServicesSidebar/ServicesSidebar";
import { ProjectLightboxGrid } from "../../components/ProjectLightboxGrid/ProjectLightboxGrid";
import { getServicePageData, type ServiceId } from "@/app/lib/service-page-data";
import { RelatedBlogsSection } from "@/app/components/RelatedBlogsSection/RelatedBlogsSection";
import { ServicesCtaBanner } from "@/app/components/ServicesCtaBanner/ServicesCtaBanner";

const NAVBAR_HEIGHT = 90;
const HERO_MIN_HEIGHT = 330;

export const metadata: Metadata = {
  title: "Yaya Geçiş Köprüleri | Tezel Çelik",
  description:
    "Sanayi tesisleri, kampüsler ve şehir içi alanlar için çelik yaya geçiş köprüleri tasarımı ve imalatı.",
  openGraph: {
    title: "Yaya Geçiş Köprüleri | Tezel Çelik",
    description:
      "Sanayi tesisleri, kampüsler ve şehir içi alanlar için çelik yaya geçiş köprüleri tasarımı ve imalatı.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function PedestrianBridgesPage() {
  const data = getServicePageData("pedestrian-bridges");
  const steps = data.howWeWorkSteps;

  return (
    <main className="about-page-enter min-h-screen bg-white">
      <section
        className="relative flex flex-col items-center justify-center overflow-hidden bg-cover bg-center px-4 text-center"
        style={{
          minHeight: HERO_MIN_HEIGHT,
          marginTop: -NAVBAR_HEIGHT,
          paddingTop: NAVBAR_HEIGHT,
        }}
      >
        <div
          className="about-hero-bg absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${arkaplanNav.src})`,
            filter: "blur(2px)",
            transform: "scale(1.03)",
          }}
        />
        <div className="about-hero-overlay pointer-events-none absolute inset-0 bg-black/60" />
        <div className="about-hero-content relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
          <p className="about-eyebrow text-white/90 drop-shadow-md">
            Tezel Çelik Sistemleri
          </p>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-wide text-white text-center leading-tight drop-shadow-lg">
            {data.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-white/95 drop-shadow-md">
            {data.heroDescription}
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,0.9fr)]">
            <div>
              {/* 1. Bölüm: Öne Çıkan Tanım Bloğu */}
              <section className="rounded-3xl border border-gray-100/80 bg-white px-6 py-7 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:px-8 sm:py-9">
                <p className="inline-flex items-center rounded-full bg-[#FFF1EC] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF5A3C]">
                  Yaya köprüsü hizmeti
                </p>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Güvenli ve Fonksiyonel Yaya Geçiş Köprüleri
                </h2>
                <div className="mt-3 h-1 w-24 rounded-full bg-[#FF5A3C]" />
                <p className="mt-6 text-base leading-relaxed text-gray-700">
                  {data.introParagraph}
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#FFF7F5] px-5 py-5 shadow-sm">
                    <h3 className="text-sm font-semibold text-gray-900">
                      {steps[0]?.title ?? ""}
                    </h3>
                    <div className="mt-2 h-0.5 w-10 rounded-full bg-[#FF5A3C]" />
                    <p className="mt-3 text-sm leading-relaxed text-gray-700">
                      {steps[0]?.desc ?? ""}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#F9FAFB] px-5 py-5 shadow-sm">
                    <h3 className="text-sm font-semibold text-gray-900">
                      {steps[1]?.title ?? ""}
                    </h3>
                    <div className="mt-2 h-0.5 w-10 rounded-full bg-[#FF5A3C]" />
                    <p className="mt-3 text-sm leading-relaxed text-gray-700">
                      {steps[1]?.desc ?? ""}
                    </p>
                  </div>
                </div>
              </section>

              {/* 2. Bölüm: Proje Vitrini */}
              <section className="mt-12">
                <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  Öne Çıkan Projeler
                </h3>
                <div className="about-title-underline mt-3 h-1 w-20 bg-[#FF5A3C]" />
                <p className="mt-4 text-base leading-relaxed text-gray-700">
                  Yaya geçiş köprüsü projelerimizden bazı örnekler. Tüm projelerimizi ve detaylarını incelemek için{" "}
                  <Link
                    href="/projects"
                    className="font-semibold text-[#FF5A3C] hover:underline"
                  >
                    tıklayınız.
                  </Link>
                </p>
                <ProjectLightboxGrid
                  items={[
                    "OSB İçinde Çelik Yaya Geçiş Köprüsü",
                    "Üniversite Kampüsü Bağlantı Köprüsü",
                    "Şehir İçi Cadde Üst Geçidi",
                    "Fabrika İçi Hat Üzeri Yürüyüş Köprüsü",
                  ].map((title) => ({
                    title,
                    imageSrc: arkaplanNav.src,
                  }))}
                />
                <div className="mt-8">
                  <Link
                    href="/projects"
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#FF5A3C] px-8 py-3 text-sm font-semibold tracking-wide text-white shadow-md transition-colors hover:bg-[#f24a2a] sm:w-auto"
                  >
                    Tüm Projelerimizi Gör
                  </Link>
                </div>
              </section>

              {/* 3. Bölüm: Teknik Detay ve Neden Biz */}
              <section className="mt-16 sm:mt-18 rounded-3xl bg-[#F9FAFB] px-6 py-7 sm:px-8 sm:py-8">
                <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Köprü Sistemlerinde Mühendislik Farkımız
                </h3>
                <div className="about-title-underline mt-3 h-1 w-20 bg-[#FF5A3C]" />
                <ul className="mt-6 max-w-3xl list-disc space-y-3 pl-5 text-base leading-relaxed text-gray-700">
                  <li>
                    <span className="font-semibold text-[#FF5A3C]">Titreşim ve Statik Analiz:</span> Yaya yükleri ve dinamik etkiler için detaylı analizler.
                  </li>
                  <li>
                    <span className="font-semibold text-[#FF5A3C]">Geniş Açıklık:</span> Minimum ara destekle geçebilen optimize çelik taşıyıcı sistemler.
                  </li>
                  <li>
                    <span className="font-semibold text-[#FF5A3C]">Engelsiz Erişilebilirlik:</span> Engelli ve yaşlı erişimine uygun rampa eğimleri, asansör entegrasyonu ve kaydırmaz zemin detaylarıyla kapsayıcı ulaşım çözümleri sunuyoruz.
                  </li>
                  <li>
                    <span className="font-semibold text-[#FF5A3C]">Bütüncül Güvenlik:</span> Kaymaz zemin kaplamaları, güvenli korkuluk ve aydınlatma detayları.
                  </li>
                  <li>
                    <span className="font-semibold text-[#FF5A3C]">Uzun Ömür:</span> Galvaniz ve boya sistemleriyle yıllarca bakım gerektirmeyen çözümler.
                  </li>
                </ul>
              </section>

              {/* 4. Bölüm: Bilgi Köşesi (Bloglar) */}
              <RelatedBlogsSection serviceId={"pedestrian-bridges"} />
            </div>
            <ServicesSidebar currentHref="/services/pedestrian-bridges" />
          </div>
        </div>
      </section>
      <ServicesCtaBanner />
    </main>
  );
}
