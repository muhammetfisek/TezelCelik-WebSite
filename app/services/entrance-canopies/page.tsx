import type { Metadata } from "next";
import Image from "next/image";
import arkaplanNav from "@/images/arkaplan_nav.png";
import "../../about/about.css";

const NAVBAR_HEIGHT = 90;
const HERO_MIN_HEIGHT = 360;

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
            Giriş Saçağı ve Kanopiler
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
            Bina ve tesis girişlerinde kullanıcıları yağmur ve güneşten koruyan, aynı
            zamanda mimariye değer katan çelik saçak ve kanopi çözümleri üretiyoruz.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tasarım yaklaşımımız
          </h2>
          <div className="about-title-underline mt-4 h-1 w-20 bg-[#FF5A3C]" />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-700">
            Cepheyle uyumlu, hafif ve şeffaf görünümlü sistemlerden; tam kapalı ve
            endüstriyel kanopilere kadar geniş bir yelpazede çözüm geliştiriyoruz. Cam,
            kompozit panel ve polikarbon gibi kaplamalarla farklı tasarım seçenekleri
            sunuyoruz.
          </p>
        </div>
      </section>
    </main>
  );
}

