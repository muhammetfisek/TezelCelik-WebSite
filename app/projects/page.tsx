import type { Metadata } from "next";

import arkaplanNav from "@/images/arkaplan_nav.png";

import "@/app/about/about.css";

const NAVBAR_HEIGHT = 90;
const HERO_MIN_HEIGHT = 360;

export const metadata: Metadata = {
  title: "Projeler | Tezel Çelik Sistemleri",
  description:
    "Tezel Çelik Sistemleri olarak gerçekleştirdiğimiz çelik konstrüksiyon, çatı, platform ve özel imalat projelerimizi keşfedin.",
};

export default function ProjectsPage() {
  return (
    <main className="about-page-enter min-h-screen bg-white">
      {/* Hero */}
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
        
          <h1 className="text-5xl font-extrabold tracking-wide text-white sm:text-6xl">
            Projeler
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
            Türkiye genelinde gerçekleştirdiğimiz çelik konstrüksiyon, çatı,
            platform ve özel imalat projelerimizi keşfedin.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-gray-600">Gerçekleştirdiğimiz projeler.</p>
        </div>
      </section>
    </main>
  );
}
  