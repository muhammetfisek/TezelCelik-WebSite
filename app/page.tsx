import "./homepage-animations.css";
import Link from "next/link";
import anasayfaArkaplan from "@/images/anasayfa_arkaplan.jpeg";

const NAVBAR_HEIGHT = 90;

export default function Home() {
  return (
    <main
      className="relative overflow-hidden bg-no-repeat"
      style={{
        minHeight: "100vh",
        height: "100vh",
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
  );
}

