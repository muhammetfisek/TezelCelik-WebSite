import type { Metadata } from "next";
import Image from "next/image";
import arkaplanNav from "@/images/arkaplan_nav.png";
import "../../about/about.css";

const NAVBAR_HEIGHT = 90;
const HERO_MIN_HEIGHT = 360;

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
          style={{ backgroundImage: `url(${arkaplanNav.src})` }}
        />
        <div className="about-hero-overlay pointer-events-none absolute inset-0 bg-black/45" />
        <div className="about-hero-content relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
          <p className="about-eyebrow text-white/90">Tezel Çelik Sistemleri</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide text-white">
            Yaya Geçiş Köprüleri
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
            İnsan trafiğinin güvenli ve konforlu şekilde yönetilmesi için çelik yaya
            köprüleri ve geçitler tasarlıyor, imal ediyor ve montajını yapıyoruz.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Teknik yaklaşımımız
          </h2>
          <div className="about-title-underline mt-4 h-1 w-20 bg-[#FF5A3C]" />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-700">
            Yaya yoğunluğu, açıklık mesafesi ve çevresel şartlara göre uygun taşıyıcı
            sistem tipini seçiyor; kaymaz zemin kaplamaları, korkuluk ve aydınlatma
            detayları ile bütüncül çözümler sunuyoruz.
          </p>
        </div>
      </section>
    </main>
  );
}

