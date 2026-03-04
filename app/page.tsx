import "./homepage-animations.css";
import Link from "next/link";
import Image from "next/image";
import anasayfaArkaplan from "@/images/anasayfa_arkaplan.jpeg";
import { StatsGrid } from "./components/NumberCard/StatsGrid";
import { ServiceStripsSection } from "./components/ServiceStrips/ServiceStrips";

const NAVBAR_HEIGHT = 90;

export default function Home() {
  return (
    <>
      <main
        className="relative bg-no-repeat"
        style={{
          minHeight: "100vh",
          marginTop: -NAVBAR_HEIGHT,
          paddingTop: NAVBAR_HEIGHT,
        }}
      >
        {/* Bulanık arka plan fotoğraf katmanı */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${anasayfaArkaplan.src})`,
            filter: "blur(0.5px)",
          }}
        />

        {/* Karanlık overlay – yazı fotoğraf üzerinde net görünsün */}
        <div className="pointer-events-none absolute inset-0 bg-black/35" />

        <div className="relative z-10 flex h-full flex-col items-center justify-start pt-24 sm:pt-28 lg:pt-32 text-center text-white">
          <h1 className="hero-title-anim text-6xl font-extrabold tracking-wide sm:text-7xl lg:text-8xl">
            TEZEL ÇELİK
          </h1>
          <p className="hero-subtitle-anim mt-4 text-3xl font-semibold tracking-[0.25em] sm:mt-5 sm:text-4xl">
            KONSTRÜKSİYON
          </p>

          {/* Alttaki aksiyon butonları – yazılardan hemen sonra animasyonla gelsin */}
          <div className="hero-buttons-anim mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/about"
              className="rounded-full bg-[#FF5A3C] px-8 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-transform transition-shadow hover:-translate-y-0.5 hover:shadow-lg"
            >
              Detaylar
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/80 bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-colors transition-transform hover:-translate-y-0.5 hover:bg-white/10"
            >
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </main>

      {/* Fotonun hemen altında – slogan + istatistik bandı (açık tema) */}
      <section className="about-stats-section bg-gradient-to-b from-[#f7f9fc] to-[#f2f4f8] px-4 py-16 text-slate-900 sm:px-8 lg:px-24">
        <div className="mx-auto max-w-6xl">
          {/* Üst: slogan ve açıklama */}
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            GÜVEN İNŞA EDEN MÜHENDİSLİK
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Çeliği projelerinize değil, geleceğinize göre tasarlıyoruz.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Deneyim, hesap ve sahadaki disiplinin birleştiği noktada; işletmeler için uzun ömürlü
              ve güvenli çelik yapılar üretiyoruz.
            </p>
          </div>

          <StatsGrid />
        </div>
      </section>

      {/* Biz Kimiz? – 50/50 görsel + metin bloğu */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-8 lg:grid-cols-12 lg:gap-16">
          {/* Sol: görsel */}
          <div className="relative lg:col-span-7">
            <div className="absolute -left-4 -top-4 -z-10 h-32 w-32 rounded-3xl border-2 border-[#FF5A3C] opacity-70 sm:h-40 sm:w-40" />
            <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
              <Image
                src={anasayfaArkaplan}
                alt="Tezel Çelik üretim ve montaj alanı"
                className="h-72 w-full object-cover sm:h-96 lg:h-[420px]"
                priority={false}
              />
            </div>
          </div>

          {/* Sağ: metin alanı */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              BİZ KİMİZ?
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Üretimden montaja, tek çatı altında çelik çözümler.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
              <span className="font-bold text-[#FF5A3C]">1998 yılından bugüne</span>, Tezel Çelik
              olarak sadece yük taşıyan yapılar üretmiyoruz; fabrikanızın, deponuzun ve
              tesisinizin yıllarca güvenle ayakta kalacağı sistemi tasarlıyoruz. Statik projeden
              imalata, sahadaki montaja kadar her adımı kendi ekibimizle yönetiyor, iş güvenliği ve
              kalite standartlarından taviz vermeden ilerliyoruz.
            </p>

            <ul className="mt-5 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF5A3C]" />
                <span>Mühendislik ekipleriyle birlikte planlanan projeler.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF5A3C]" />
                <span>Kendi tesisimizde kontrollü çelik imalatı.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF5A3C]" />
                <span>Sahada disiplinli, iş güvenliği odaklı montaj.</span>
              </li>
            </ul>

            <div className="mt-7">
              <Link
                href="/about"
                className="inline-flex items-center rounded-full bg-[#FF5A3C] px-7 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-transform transition-shadow hover:-translate-y-0.5 hover:shadow-lg"
              >
                Hikayemizi ve sürecimizi keşfedin
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServiceStripsSection />
    </>
  );
}

