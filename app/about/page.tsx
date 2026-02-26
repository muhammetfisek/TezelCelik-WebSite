import Image from "next/image";
import {
  FaBullseye,
  FaCheckCircle,
  FaCogs,
  FaEye,
  FaHandshake,
  FaHardHat,
  FaLeaf,
} from "react-icons/fa";

import arkaplanNav from "@/images/arkaplan_nav.png";
import aboutImage from "@/images/anasayfa_arkaplan.jpeg";

import "./about.css";
import { StatsSection } from "./StatsSection";
import { ServicesCtaBanner } from "@/app/components/ServicesCtaBanner/ServicesCtaBanner";

const NAVBAR_HEIGHT = 90;
const HERO_MIN_HEIGHT = 360;

export default function AboutPage() {
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
          <p className="about-eyebrow text-white/90">
            Tezel Çelik Sistemleri
          </p>
          <h1 className="text-5xl font-extrabold tracking-wide text-white sm:text-6xl">
            Hakkımızda
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
            Çelik konstrüksiyon projelerinde mühendislik disiplini, kalite odaklı
            üretim ve güvenli uygulama anlayışıyla; projelendirme, imalat ve
            montaj süreçlerini tek çatı altında yönetiyoruz.
          </p>
        </div>
      </section>

      {/* Biz Kimiz */}
      <section className="py-14 sm:py-18">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="about-eyebrow text-gray-600">Biz Kimiz?</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Güvenilir çelik konstrüksiyon çözümleri
              </h2>
              <div className="about-title-underline mt-4 h-1 w-20 bg-[#FF5A3C]" />

              <p className="mt-6 text-base leading-relaxed text-gray-700">
                Tezel Çelik; endüstriyel tesislerden depo ve hangarlara, çelik
                çatı ve platformlardan özel imalatlara kadar geniş bir yelpazede
                hizmet verir. Önceliğimiz; doğru projelendirme, kaliteli üretim
                ve sahada güvenli uygulama ile uzun ömürlü yapılar ortaya
                koymaktır.
              </p>

              <ul className="mt-7 grid gap-3 text-gray-800">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="mt-0.5 shrink-0 text-[#FF5A3C]" />
                  <span>
                    <strong>Mühendislik</strong> odaklı projelendirme ve
                    imalat-planlama.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="mt-0.5 shrink-0 text-[#FF5A3C]" />
                  <span>
                    <strong>Kalite</strong> kontrol süreçleri ve izlenebilir
                    üretim.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="mt-0.5 shrink-0 text-[#FF5A3C]" />
                  <span>
                    <strong>İş güvenliği</strong> ve sahada disiplinli montaj
                    yönetimi.
                  </span>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="about-badge">Projelendirme</span>
                <span className="about-badge">İmalat</span>
                <span className="about-badge">Montaj</span>
                <span className="about-badge">Bakım & Revizyon</span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="about-image-card overflow-hidden rounded-3xl bg-gray-100 shadow-xl ring-1 ring-black/5">
                <Image
                  src={aboutImage}
                  alt="Tezel Çelik çalışma alanı"
                  className="h-[360px] w-full object-cover object-[65%_center] sm:h-[440px] lg:h-[460px]"
                  priority
                />
              </div>

              <div className="mt-6 flex justify-center">
                <div className="about-float-card w-full max-w-xl rounded-2xl bg-white p-5 shadow-lg ring-1 ring-black/5">
                  <p className="text-sm font-bold tracking-wide text-gray-900">
                    Güçlü prensipler, sağlam yapılar
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-3 text-xs font-semibold text-gray-700">
                    <div className="flex items-center gap-2">
                      <FaHardHat className="text-[#FF5A3C]" />
                      <span>İş Güvenliği</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaHandshake className="text-[#FF5A3C]" />
                      <span>Güven</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCogs className="text-[#FF5A3C]" />
                      <span>İşçilik</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misyon / Vizyon / Değerler */}
      <section className="bg-gray-50 py-14 sm:py-18">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="about-eyebrow text-gray-600">
              Yaklaşımımız
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Misyon, vizyon ve değerlerimiz
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              Her projede aynı çizgiyi koruruz: güvenli üretim, tutarlı kalite ve
              şeffaf iletişim.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="about-card rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5">
              <div className="flex items-center gap-3">
                <span className="about-icon">
                  <FaBullseye />
                </span>
                <h3 className="text-lg font-extrabold text-gray-900">
                  Misyonumuz
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                Mühendislik standartlarına uygun, güvenli ve uzun ömürlü çelik
                yapı çözümleri sunarak müşterilerimizin projelerine değer katmak.
              </p>
            </div>

            <div className="about-card rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5">
              <div className="flex items-center gap-3">
                <span className="about-icon">
                  <FaEye />
                </span>
                <h3 className="text-lg font-extrabold text-gray-900">
                  Vizyonumuz
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                Kaliteyi sürdürülebilir biçimde yükselten, çözüm odaklı ve güven
                veren yaklaşımıyla sektörde tercih edilen bir marka olmak.
              </p>
            </div>

            <div className="about-card rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5">
              <div className="flex items-center gap-3">
                <span className="about-icon">
                  <FaLeaf />
                </span>
                <h3 className="text-lg font-extrabold text-gray-900">
                  Değerlerimiz
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                Güven, iş güvenliği kültürü, şeffaflık, yüksek işçilik standardı
                ve çevreye duyarlı üretim.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="about-pill">
              <FaHandshake className="text-[#FF5A3C]" />
              <span>Şeffaf İletişim</span>
            </div>
            <div className="about-pill">
              <FaHardHat className="text-[#FF5A3C]" />
              <span>İş Güvenliği Önceliği</span>
            </div>
            <div className="about-pill">
              <FaCogs className="text-[#FF5A3C]" />
              <span>Kalite Odaklı Üretim</span>
            </div>
            <div className="about-pill">
              <FaCheckCircle className="text-[#FF5A3C]" />
              <span>Zamanında Teslim</span>
            </div>
            <div className="about-pill">
              <FaLeaf className="text-[#FF5A3C]" />
              <span>Sürdürülebilirlik</span>
            </div>
            <div className="about-pill">
              <FaBullseye className="text-[#FF5A3C]" />
              <span>Çözüm Odaklılık</span>
            </div>
          </div>
        </div>
      </section>

      {/* Süreç */}
      <section className="py-14 sm:py-18">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="about-eyebrow text-gray-600">Süreç</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Nasıl çalışıyoruz?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              Baştan sona kontrol: keşif, projelendirme, üretim ve montaj.
              İletişimi şeffaf, planı net tutarız.
            </p>
          </div>

          <ol className="mt-10 grid gap-6 lg:grid-cols-4">
            {[
              {
                title: "Keşif & İhtiyaç Analizi",
                desc: "Saha/iş kapsamı netleşir, hedefler ve kısıtlar belirlenir.",
              },
              {
                title: "Projelendirme",
                desc: "Statik-mimari uyum ve imalat detaylarıyla proje hazırlanır.",
              },
              {
                title: "İmalat",
                desc: "Planlı üretim, kalite kontrol ve sevkiyat hazırlığı yapılır.",
              },
              {
                title: "Montaj & Teslim",
                desc: "Güvenli montaj, son kontroller ve teslim süreci tamamlanır.",
              },
            ].map((step, idx) => (
              <li
                key={step.title}
                className="about-step rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <div className="flex items-center gap-3">
                  <span className="about-step-number">{idx + 1}</span>
                  <h3 className="text-base font-extrabold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-700">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Rakamlarla Tezel Çelik */}
      <StatsSection />

      <ServicesCtaBanner />
    </main>
  );
}
