import "./homepage-animations.css";
import Link from "next/link";
import Image from "next/image";
import anasayfaArkaplan from "@/images/anasayfa_arkaplan.jpeg";
import arkaplanNav from "@/images/arkaplan_faaliyet.png";
import steelBuildingsImg from "@/images/blog_images/celik_konstruksiyon.png";
import wideSpanImg from "@/images/blog_images/fabrika_hangar.jpeg";
import mezzanineImg from "@/images/blog_images/kumlama_nedir.png";
import entranceImg from "@/images/blog_images/insaat_taahhut.png";
import elevatorImg from "@/images/blog_images/deprem_kabini.png";
import bridgesImg from "@/images/blog_images/sismik_ıza.png";
import stairsImg from "@/images/blog_images/celik_deprem_dayaniklilik.png";
import railingsImg from "@/images/blog_images/celik_su_verme.png";
import { servicePageData, type ServiceId } from "@/app/lib/service-page-data";
import { StatsGrid } from "./components/NumberCard/StatsGrid";

const NAVBAR_HEIGHT = 90;

const serviceImageMap: Record<ServiceId, any> = {
  "steel-buildings": steelBuildingsImg,
  "wide-span-roofs": wideSpanImg,
  "mezzanine-platforms": mezzanineImg,
  "entrance-canopies": entranceImg,
  "elevator-structures": elevatorImg,
  "pedestrian-bridges": bridgesImg,
  "steel-stairs": stairsImg,
  railings: railingsImg,
};

export default function Home() {
  const serviceCards = Object.values(servicePageData);

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

      {/* Hizmet Şeritleri – hover ile genişleyen modern vitrin */}
      <section className="bg-gradient-to-b from-[#f3f5fa] to-[#e4e8f2] py-16 sm:py-20">
        {/* Başlık bloğu */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
              FAALİYET ALANLARIMIZ
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Sizin İçin Neler İnşa Ediyoruz?
            </h2>
            <div className="mt-3 mx-auto h-1 w-20 rounded-full bg-[#FF5A3C]" />
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Endüstriyel tesislerden özel mimari yapılara kadar, ihtiyacınıza özel statik mükemmeliyetle tasarlanmış anahtar teslim yapılar üretiyoruz.
            </p>
          </div>
        </div>

        {/* Tam genişlikte hizmet şeritleri */}
        <div className="mt-10 px-0 sm:px-0">
          <div className="overflow-hidden rounded-none bg-slate-950 shadow-[0_24px_60px_rgba(15,23,42,0.85)]">
            <div className="flex flex-col sm:flex-row sm:h-[340px] w-full">
              {serviceCards.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="group relative flex-1 cursor-pointer overflow-hidden border-b border-white/5 transition-all duration-500 ease-out sm:border-b-0 sm:border-r sm:last:border-r-0 sm:flex-[1_1_0] sm:hover:flex-[2.7_1_0]"
                >
                  <Image
                    src={serviceImageMap[service.id] ?? arkaplanNav}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 18vw, (min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/30" />

                  {/* Küçük başlık – kart dar görünümde */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5 transition-opacity duration-300 group-hover:opacity-0 sm:group-hover:opacity-0">
                    <h3 className="text-sm font-semibold text-white sm:text-base">
                      {service.shortTitle}
                    </h3>
                  </div>

                  {/* Genişlemiş detay – sadece hover'da */}
                  <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 sm:p-6 translate-y-3">
                    <div className="max-w-md">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-200/80">
                        {service.title}
                      </p>
                      <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                        {service.shortTitle}
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-slate-200 sm:text-sm">
                        {service.heroDescription}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="mt-5 inline-flex items-center rounded-full bg-white/95 px-4 py-2 text-xs font-semibold tracking-wide text-slate-900 shadow-sm transition-colors hover:bg-[#FF5A3C] hover:text-white sm:text-sm"
                    >
                      Detayları gör
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

