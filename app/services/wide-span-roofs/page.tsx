import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import arkaplanNav from "@/images/arkaplan_faaliyet.png";
import "../../about/about.css";
import { ServicesSidebar } from "@/app/components/ServicesSidebar/ServicesSidebar";
import { getServicePageData, type ServiceId } from "@/app/lib/service-page-data";
import { getBlogPost } from "@/app/lib/blog-data";

const NAVBAR_HEIGHT = 90;
const HERO_MIN_HEIGHT = 330;

export const metadata: Metadata = {
  title: "Geniş Açıklıklı Çatılar | Tezel Çelik",
  description:
    "Fabrika, depo, hangar ve spor alanları için geniş açıklıklı çelik çatı ve taşıyıcı sistem çözümleri.",
  openGraph: {
    title: "Geniş Açıklıklı Çatılar | Tezel Çelik",
    description:
      "Fabrika, depo, hangar ve spor alanları için geniş açıklıklı çelik çatı ve taşıyıcı sistem çözümleri.",
    type: "website",
    locale: "tr_TR",
  },
};

function RelatedBlogsSection({ serviceId }: { serviceId: ServiceId }) {
  const data = getServicePageData(serviceId);
  const relatedPosts = data.relatedBlogSlugs
    .map((slug) => getBlogPost(slug))
    .filter((post): post is NonNullable<ReturnType<typeof getBlogPost>> => Boolean(post));

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-14">
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
        Bu alanla ilgili teknik rehberlerimizi inceleyin
      </h2>
      <div className="about-title-underline mt-3 h-1 w-20 bg-[#FF5A3C]" />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.imageAlt ?? post.title}
                fill
                sizes="(min-width: 1024px) 300px, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#FF5A3C]">
                {post.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function WideSpanRoofsPage() {
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
            Geniş Açıklıklı Çatılar
          </h1>
          <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-white/95 drop-shadow-md">
          Geniş alanlarda kolonsuz özgürlük; yüksek mühendislik ürünü dayanıklı çatı çözümleri.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,0.9fr)]">
            <div>
              {/* 1. Bölüm: Kısa ve Öz Tanıtım */}
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Kullanım alanları
              </h2>
              <div className="about-title-underline mt-4 h-1 w-20 bg-[#FF5A3C]" />
              <p className="mt-6 text-base leading-relaxed text-gray-700">
                Fabrika ve endüstriyel tesisler, lojistik depolar, spor salonları ve
                hangarlar gibi yapılarda; kar, rüzgâr ve deprem yükleri dikkate alınarak
                ekonomik ve güvenli çelik çatı çözümleri geliştiriyoruz. Geniş açıklıkları
                ara kolon gerektirmeden geçerek operasyonel alan kayıplarını azaltıyoruz.
              </p>

              {/* 2. Bölüm: Proje Vitrini */}
              <section className="mt-12">
                <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  Öne Çıkan Projeler
                </h3>
                <div className="about-title-underline mt-3 h-1 w-20 bg-[#FF5A3C]" />
                <p className="mt-4 text-base leading-relaxed text-gray-700">
                  Geniş açıklıklı çelik çatı projelerimizden seçtiğimiz birkaç örnek:
                </p>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {[
                    "Fabrika Üretim Hattı Çelik Çatısı",
                    "Lojistik Depo Geniş Açıklıklı Çatısı",
                    "Spor Salonu ve Çok Amaçlı Salon Çatısı",
                    "Hangar ve Araç Park Alanı Çelik Çatısı",
                  ].map((title) => (
                    <div
                      key={title}
                      className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm"
                    >
                      <div className="relative h-52 w-full overflow-hidden">
                        <Image
                          src={arkaplanNav.src}
                          alt={title}
                          fill
                          sizes="(min-width: 1024px) 320px, 100vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    href="/projects"
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#FF5A3C] px-8 py-3 text-sm font-semibold tracking-wide text-white shadow-md transition-colors hover:bg-[#f24a2a] sm:w-auto"
                  >
                    Tüm Projelerimizi Gör
                  </Link>
                </div>
              </section>

              {/* 3. Bölüm: Teknik Detay ve Neden Biz */}
              <section className="mt-14">
                <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  Teknik Avantajlar ve Neden Tezel Çelik?
                </h3>
                <div className="about-title-underline mt-3 h-1 w-20 bg-[#FF5A3C]" />
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-700">
                  Geniş açıklıklı çelik çatılarda; yapının hem hafif hem de depreme karşı
                  güvenli olmasını sağlayan mühendislik çözümleri geliştiriyoruz.
                </p>
                <ul className="mt-6 max-w-3xl list-disc space-y-3 pl-5 text-base leading-relaxed text-gray-700">
                  <li>
                    Milimetrik montaj hassasiyeti ile sızdırmaz ve düzgün çatı yüzeyleri
                  </li>
                  <li>
                    Kar, rüzgâr ve deprem yüklerine göre optimize edilmiş çelik makas ve
                    uzay kafes sistemleri
                  </li>
                  <li>
                    Hafif taşıyıcı sistem sayesinde daha ekonomik temel ve zemin
                    çözümleri
                  </li>
                  <li>Hızlı kurulum ile üretim ve depo operasyonlarında minimum kesinti</li>
                  <li>
                    Kumlama, boya veya galvaniz ile uzun ömürlü korozyon dayanımı ve düşük
                    bakım ihtiyacı
                  </li>
                </ul>
              </section>

              {/* 4. Bölüm: Bilgi Köşesi (Bloglar) */}
              <RelatedBlogsSection serviceId={"wide-span-roofs"} />
            </div>
            <ServicesSidebar currentHref="/services/wide-span-roofs" />
          </div>
        </div>
      </section>
    </main>
  );
}

