import type { Metadata } from "next";
import Link from "next/link";
import arkaplanNav from "@/images/arkaplan_faaliyet.png";
import "../../about/about.css";
import { ServicesSidebar } from "@/app/components/ServicesSidebar/ServicesSidebar";
import { ProjectLightboxGrid } from "../../components/ProjectLightboxGrid/ProjectLightboxGrid";
import { getServicePageData, type ServiceId } from "@/app/lib/service-page-data";
import { RelatedBlogsSection } from "@/app/components/RelatedBlogsSection/RelatedBlogsSection";

const NAVBAR_HEIGHT = 90;
const HERO_MIN_HEIGHT = 330;

export const metadata: Metadata = {
  title: "Giriş Saçağı ve Kanopiler | Tezel Çelik",
  description:
    "Bina girişleri, yükleme alanları ve otoparklar için estetik ve dayanıklı çelik saçak ve kanopi sistemleri.",
  openGraph: {
    title: "Giriş Saçağı ve Kanopiler | Tezel Çelik",
    description:
      "Bina girişleri, yükleme alanları ve otoparklar için estetik ve dayanıklı çelik saçak ve kanopi sistemleri.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function EntranceCanopiesPage() {
  const data = getServicePageData("entrance-canopies");
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
                  Giriş saçağı ve kanopi hizmeti
                </p>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Modern Giriş Saçağı ve Kanopi Çözümleri
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
                  Giriş saçağı ve kanopi projelerimizden bazı örnekler. Tüm projelerimizi incelemek için{" "}
                  <Link
                    href="/projects"
                    className="font-semibold text-[#FF5A3C] hover:underline"
                  >
                    tıklayınız.
                  </Link>
                </p>
                <ProjectLightboxGrid
                  items={[
                    "Otel Girişi Cam Kanopi",
                    "Kurumsal Plaza Çelik Giriş Saçağı",
                    "Endüstriyel Yükleme Alanı Kanopisi",
                    "Otopark Giriş ve Yaya Saçağı",
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
                Kanopi Tasarımlarında Mühendislik Farkımız
                </h3>
                <div className="about-title-underline mt-3 h-1 w-20 bg-[#FF5A3C]" />
                <ul className="mt-6 max-w-3xl list-disc space-y-3 pl-5 text-base leading-relaxed text-gray-700">
                  <li>
                    <span className="font-semibold text-[#FF5A3C]">Hava Koşullarına Maksimum Direnç:</span> Bölgesel rüzgar vakumlama ve kar birikme yüklerine karşı, yapının cephe statiğini bozmayan özel taşıyıcı hesaplar uyguluyoruz.
                  </li>
                  <li>
                    <span className="font-semibold text-[#FF5A3C]">Geniş Malzeme Kombinasyonu:</span> Çelik iskeleti; cam, polikarbonat, alüminyum kompozit veya paslanmaz çelik detaylarla birleştirerek yapınıza özgün bir kimlik kazandırıyoruz.
                  </li>
                  <li>
                    <span className="font-semibold text-[#FF5A3C]">Gizli Tahliye Sistemleri:</span> Tasarıma entegre edilen gizli dere ve iniş borusu detaylarıyla, yağmur sularının estetik bir şekilde tahliye edilmesini sağlıyoruz.
                  </li>
                  <li>
                    <span className="font-semibold text-[#FF5A3C]">Korozyon ve Dış Ortam Dayanımı:</span> Dış mekana maruz kalan tüm çelik yüzeylerde sıcak daldırma galvaniz veya elektrostatik boya kullanarak yıllarca bakım gerektirmeyen yüzeyler sunuyoruz.
                  </li>
                  <li>
                    <span className="font-semibold text-[#FF5A3C]">Dayanıklılık:</span> Hızlı montaj ve minimum müdahale gerektiren yüzey kaplamaları.
                  </li>
                </ul>
              </section>

              {/* 4. Bölüm: Bilgi Köşesi (Bloglar) */}
              <RelatedBlogsSection serviceId={"entrance-canopies"} />
            </div>
            <ServicesSidebar currentHref="/services/entrance-canopies" />
          </div>
        </div>
      </section>
    </main>
  );
}
