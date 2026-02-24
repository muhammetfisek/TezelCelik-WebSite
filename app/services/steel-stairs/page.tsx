import type { Metadata } from "next";
import Image from "next/image";
import arkaplanNav from "@/images/arkaplan_faaliyet.png";
import "../../about/about.css";
import { ServicesSidebar } from "@/app/components/ServicesSidebar/ServicesSidebar";

const NAVBAR_HEIGHT = 90;
const HERO_MIN_HEIGHT = 360;

export const metadata: Metadata = {
  title: "Çelik Merdivenler | Tezel Çelik",
  description:
    "Yangın kaçış, servis ve dekoratif amaçlı çelik merdiven tasarımı, imalatı ve montajı.",
  openGraph: {
    title: "Çelik Merdivenler | Tezel Çelik",
    description:
      "Yangın kaçış, servis ve dekoratif amaçlı çelik merdiven tasarımı, imalatı ve montajı.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function SteelStairsPage() {
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
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide text-white text-center leading-tight drop-shadow-lg">
            Çelik Merdiven
          </h1>
          <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-white/95 drop-shadow-md">
            Yangın kaçış ve mimari merdivenler için yönetmeliklere uygun çelik merdiven
            çözümleri sunuyoruz.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Farklı merdiven tipleri
              </h2>
              <div className="about-title-underline mt-4 h-1 w-20 bg-[#FF5A3C]" />
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-700">
                Düz kollu, döner, dairesel yangın merdivenleri ve iç mekân dekoratif
                merdivenler için çelik taşıyıcı sistemler tasarlıyor, kaplama ve
                korkuluk detaylarını birlikte ele alıyoruz.
              </p>
            </div>
            <ServicesSidebar currentHref="/services/steel-stairs" />
          </div>
        </div>
      </section>
    </main>
  );
}

