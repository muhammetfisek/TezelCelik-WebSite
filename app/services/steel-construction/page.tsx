import { FaCheckCircle, FaCogs, FaHardHat } from "react-icons/fa";

import arkaplanNav from "@/images/arkaplan_nav.png";

import "../../about/about.css";

const NAVBAR_HEIGHT = 90;
const HERO_MIN_HEIGHT = 360;

export default function SteelConstructionPage() {
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
          <h1 className="text-5xl font-extrabold tracking-wide text-white sm:text-6xl">
            Çelik Konstrüksiyon
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
            Endüstriyel tesisler, depo ve hangarlar, çelik çatı ve platformlar için
            projelendirme, imalat ve montaj hizmetleri. Mühendislik disiplini ve
            kalite odaklı üretim ile uzun ömürlü yapılar.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="about-eyebrow text-gray-600">Hizmetlerimiz</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Çelik konstrüksiyon çözümleri
          </h2>
          <div className="about-title-underline mt-4 h-1 w-20 bg-[#FF5A3C]" />

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-700">
            Çelik konstrüksiyon; hızlı inşaat süresi, dayanıklılık ve esnek tasarım
            imkânları ile endüstriyel ve ticari yapıların vazgeçilmez tercihidir.
            Tezel Çelik olarak projelendirmeden sahada montaja kadar tüm süreçleri
            yönetiyoruz.
          </p>

          <ul className="mt-7 grid gap-3 text-gray-800 sm:grid-cols-1 lg:grid-cols-2">
            <li className="flex items-start gap-3">
              <FaCogs className="mt-0.5 shrink-0 text-[#FF5A3C]" />
              <span>
                <strong>Projelendirme</strong> – Statik hesaplar, çizimler ve
                detaylı uygulama projeleri.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaHardHat className="mt-0.5 shrink-0 text-[#FF5A3C]" />
              <span>
                <strong>İmalat</strong> – Atölye ve sahada kalite kontrollü
                üretim.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="mt-0.5 shrink-0 text-[#FF5A3C]" />
              <span>
                <strong>Montaj</strong> – Deneyimli ekip ile güvenli ve hızlı
                montaj.
              </span>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="about-badge">Fabrika &amp; Hangar</span>
            <span className="about-badge">Depo</span>
            <span className="about-badge">Çelik Çatı</span>
            <span className="about-badge">Platform &amp; Tribün</span>
          </div>
        </div>
      </section>
    </main>
  );
}
