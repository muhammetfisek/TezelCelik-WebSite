import "./homepage-animations.css";
import Link from "next/link";
import Image from "next/image";
import anasayfaArkaplan from "@/images/anasayfa_arkaplan.jpeg";
import { StatsGrid } from "./components/NumberCard/StatsGrid";
import { ServiceStripsSection } from "./components/ServiceStrips/ServiceStrips";
import { FaArrowRight } from "react-icons/fa";
import { projectsData } from "@/app/lib/projects-data";
import { getProjectImageSrc } from "@/app/lib/project-images";

const NAVBAR_HEIGHT = 90;

export default function Home() {
  const showcaseItems = projectsData.slice(0, 6).map((project) => ({
    project,
    imageSrc: getProjectImageSrc(project.mainImage),
  }));

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

      

      {/* Vitruvius Sözü – Teknik Üstünlük ve 3 temel şart */}
      <section className="bg-[#f6f8fc] py-18 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          {/* Başlık + alt başlık */}
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              Neden Biz?
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Çelik Sanatının Değişmeyen Üç İlkesi
            </h2>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 sm:text-[13px]">
              Vitruvius&apos;un 2000 yıllık prensibini modern çelikle buluşturuyoruz.
            </p>
          </div>

          {/* Alıntı bloğu */}
          <div className="mt-10 flex justify-center">
            <div className="relative max-w-4xl rounded-3xl bg-white/90 px-6 py-7 text-left shadow-[0_18px_40px_rgba(15,23,42,0.10)] ring-1 ring-slate-200/70 sm:px-10 sm:py-9">
              <div className="pointer-events-none absolute -top-6 left-6 hidden h-10 w-10 items-center justify-center rounded-2xl bg-[#FF5A3C] text-3xl font-serif text-white/95 sm:flex">
                “
              </div>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-base font-semibold leading-relaxed text-slate-900 sm:text-lg">
                  “İyi bir yapının her zaman üç temel şartı olmalıdır: Sağlamlık, İşlevsellik ve
                  Estetik.”
                </p>
                <p className="text-sm font-medium text-slate-500">
                  – Marcus Vitruvius Pollio
                </p>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                  Tezel Çelik&apos;te her projeyi; depreme dirençli bir<strong> sağlamlık</strong>,
                  iş süreçlerinizi hızlandıran<strong> işlevsellik</strong> ve uzun yıllar değerini
                  koruyan<strong> endüstriyel estetik</strong> üçlüsüyle kurguluyoruz.
                </p>
              </div>
            </div>
          </div>

          {/* Üçlü kartlar – Sağlamlık / İşlevsellik / Estetik */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="group rounded-3xl border border-slate-200 bg-white px-6 py-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.18)] sm:px-7 sm:py-7">
              <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                Sağlamlık
              </h3>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-[#FF5A3C] group-hover:w-14 group-hover:bg-[#ff6a4e] transition-all" />
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Deprem yönetmeliklerine uygun statik hesaplar ve yüksek mukavemetli çelik profillerle
                yapınızın uzun yıllar güvenle ayakta kalmasını sağlıyoruz.
              </p>
            </div>

            <div className="group rounded-3xl border border-slate-200 bg-white px-6 py-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.18)] sm:px-7 sm:py-7">
              <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                İşlevsellik
              </h3>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-[#FF5A3C] group-hover:w-14 group-hover:bg-[#ff6a4e] transition-all" />
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Vinç yolları, lojistik akış ve arakat çözümlerini projeye baştan entegre ederek,
                yapınızı operasyonlarınızı hızlandıran verimli bir sisteme dönüştürüyoruz.
              </p>
            </div>

            <div className="group rounded-3xl border border-slate-200 bg-white px-6 py-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.18)] sm:px-7 sm:py-7">
              <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                Estetik
              </h3>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-[#FF5A3C] group-hover:w-14 group-hover:bg-[#ff6a4e] transition-all" />
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Cephe oranları, taşıyıcı dizilimi ve detayları endüstriyel bir zarafetle
                tasarlayarak, tesisinizin şirket kimliğinizi yıllarca güçlü bir şekilde yansıtmasını
                hedefliyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Anasayfa Projeler Vitrini */}
      <section className="relative overflow-hidden bg-white">
        {/* Arka Plan Bölünmesi (sağ turuncu alan, üst-alt beyaz boşluklu) */}
        <div className="absolute inset-y-8 inset-x-0 z-0 flex sm:inset-y-10">
          <div className="w-1/2 bg-white" />
          <div className="w-1/2 bg-[#FFE1D6]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-8 sm:py-14">
          {/* Başlık */}
          <div className="mb-10 sm:mb-12 text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              İmzamızı Taşıyan Yapılar
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Projelerimiz
            </h2>
          </div>

          <div className="grid items-stretch gap-0 lg:grid-cols-12">
            {/* Sol: 6'lı proje fotoğrafları */}
            <div className="lg:col-span-8 lg:pr-10">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
                {showcaseItems.map(({ project, imageSrc }) => (
                  <div
                    key={project.id}
                    className="group relative aspect-square overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
                  >
                    <Image
                      src={imageSrc}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-left opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <p className="text-[10px] font-bold text-[#FF5A3C] uppercase">
                        {project.location}
                      </p>
                      <h4 className="text-sm font-bold text-white">{project.title}</h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tüm Projeler linki */}
              <div className="mt-8 sm:mt-10">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900"
                >
                  <span className="border-b border-transparent transition-all group-hover:border-[#FF5A3C]">
                    TÜM PROJELERİ GÖRÜNTÜLE
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white transition-all group-hover:bg-[#FF5A3C]">
                    <FaArrowRight className="text-xs" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Sağ: metin bloğu */}
            <aside className="mt-10 lg:col-span-4 lg:mt-0">
              <div className="h-full px-2 py-2 text-slate-900 sm:px-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Her projede ve imalatta
                </p>
                <h3 className="mt-3 text-3xl font-extrabold leading-snug text-slate-900 sm:text-4xl">
                  MÜHENDİSLİK ve GÜVEN
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-700">
                  odaklı çözümler üretiyoruz.
                </p>

                <p className="mt-6 text-sm leading-relaxed text-slate-700">
                  Bizim için her proje, sadece bir inşaat süreci değil; gökyüzüne yükselen bir güven
                  sembolüdür. Tezel Çelik olarak, standartların ötesine geçmeyi bir çalışma kültürü
                  haline getirdik. Projeler sayfamızda incelediğiniz her yapı; ileri teknolojiyle
                  harmanlanmış bir vizyonun, çeliğin sertliğiyle buluştuğu noktayı temsil ediyor.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-700">
                  Tasarımdan montaja her adımı geleceği inşa etme tutkusuyla yönetiyoruz. Çeliğin
                  gücüyle nesiller boyu sürecek sağlam yapılar üretiyor, sizi bu dönüşümün bir
                  parçası olmaya davet ediyoruz.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

