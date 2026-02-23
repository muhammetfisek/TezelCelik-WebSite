import { FaCheckCircle, FaCogs, FaHardHat } from "react-icons/fa";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import arkaplanNav from "@/images/arkaplan_nav.png";
import celikKonstruksiyonImg from "@/images/blog_images/celik_konstruksiyon.png";
import fabrikaHangarImg from "@/images/blog_images/fabrika_hangar.jpeg";
import celikBetonImg from "@/images/blog_images/celik_beton.png";
import { getBlogPost } from "@/app/lib/blog-data";
import { getServicePageData } from "@/app/lib/service-page-data";
import "../../about/about.css";
import "./steel-construction.css";

const NAVBAR_HEIGHT = 90;
const HERO_MIN_HEIGHT = 360;
const SERVICE_ID = "steel-construction" as const;

const ORNEK_PROJELER = [
  { title: "Fabrika & Hangar", image: fabrikaHangarImg },
  { title: "Endüstriyel Çelik Yapı", image: celikKonstruksiyonImg },
  { title: "Çelik Konstrüksiyon Uygulama", image: celikBetonImg },
];

export async function generateMetadata(): Promise<Metadata> {
  const data = getServicePageData(SERVICE_ID);
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      type: "website",
      locale: "tr_TR",
    },
  };
}

export default function SteelConstructionPage() {
  const data = getServicePageData(SERVICE_ID);
  const relatedPosts = data.relatedBlogSlugs
    .map((slug) => getBlogPost(slug))
    .filter((p): p is NonNullable<typeof p> => p != null);

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
          <p className="about-eyebrow text-white/90">Tezel Çelik Sistemleri</p>
          <h1 className="text-5xl font-extrabold tracking-wide text-white sm:text-6xl">
            {data.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
            {data.heroDescription}
          </p>
        </div>
      </section>

      {/* Foto solda, yazı sağda; foto büyük */}
      <section className="py-14 sm:py-18">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="steel-intro-grid">
            <div className="steel-intro-image-wrap">
              <Image
                src={celikKonstruksiyonImg}
                alt="Çelik konstrüksiyon - endüstriyel yapı ve montaj"
                width={800}
                height={600}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF3ED] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#FF5A3C]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A3C]" />
                <span>ÇELİK KONSTRÜKSİYON</span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Çelik konstrüksiyon çözümleri
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-700">
                {data.introParagraph}
              </p>
              <div className="mt-7 steel-feature-grid">
                <div className="steel-feature-card">
                  <div className="steel-feature-header">
                    <span className="steel-feature-title">Mühendislik &amp; Proje</span>
                  </div>
                  <p className="steel-feature-desc">
                    Statik hesap, detay çizim ve vinç yolları dahil endüstriyel projeler için net ve kontrollü bir proje kurgusu sunuyoruz.
                  </p>
                </div>
                <div className="steel-feature-card">
                  <div className="steel-feature-header">
                    <span className="steel-feature-title">İmalat &amp; Montaj</span>
                  </div>
                  <p className="steel-feature-desc">
                    Fabrikada kesim, kaynak, kumlama ve boya; sahada güvenli montaj ve planlanan tarihte eksiksiz teslim ile projeyi tamamlıyoruz.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="about-badge">Fabrika &amp; Hangar</span>
                <span className="about-badge">Depo</span>
                <span className="about-badge">Çelik Çatı</span>
                <span className="about-badge">Platform &amp; Tribün</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projelerimiz - fotoğraflarla örnekler */}
      <section className="bg-gray-50 py-14 sm:py-18">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="about-eyebrow text-gray-600">Referanslar</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Projelerimiz
          </h2>
          <div className="about-title-underline mt-4 h-1 w-20 bg-[#FF5A3C]" />
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-700">
            Çelik konstrüksiyon alanında gerçekleştirdiğimiz projelerden örnekler. Tüm projeleri incelemek için{" "}
            <Link
              href="/projects"
              className="font-semibold text-[#FF5A3C] hover:underline"
            >
              tıklayınız.
            </Link>
          </p>
          <div className="steel-projects-gallery mt-10">
            {ORNEK_PROJELER.map((proje) => (
              <Link
                key={proje.title}
                href="/projects"
                className="steel-project-card"
              >
                <div className="steel-project-image">
                  <Image
                    src={proje.image}
                    alt={proje.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="steel-project-body">
                  <h3 className="steel-project-title">{proje.title}</h3>
                  <span className="steel-project-link-text">
                    Projeleri inceleyin →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF5A3C] px-8 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all hover:bg-[#e04a2f] hover:shadow-lg"
            >
              Tüm projeler
            </Link>
          </div>
        </div>
      </section>

      {/* Nasıl çalışıyoruz - Hakkımızda’dan farklı tasarım */}
      <section className="py-14 sm:py-18">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Nasıl çalışıyoruz?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
            {data.shortTitle} hizmetinde keşiften teslimata kadar izlediğimiz adımlar.
          </p>
          <ol className="steel-how-list mt-24">
            {data.howWeWorkSteps.map((step, idx) => (
              <li key={step.title} className="steel-how-item">
                <span className="steel-how-num">{idx + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* İlgili blog yazıları */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-14 sm:py-18">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              İlgili yazılarımız
            </h2>
            <div className="about-title-underline mt-4 h-1 w-20 bg-[#FF5A3C]" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="service-related-blog-card group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.imageAlt ?? post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-[#FF5A3C]">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#FF5A3C]">
                      Yazıyı oku →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF5A3C] px-8 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all hover:bg-[#e04a2f] hover:shadow-lg"
              >
                Tüm blog yazıları için tıklayınız.
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* İletişim CTA */}
      <section className="about-cta py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="about-cta-card mx-auto max-w-4xl rounded-3xl px-6 py-12 text-center shadow-xl ring-1 ring-black/5 sm:px-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Bu hizmet için teklif alın
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              {data.shortTitle} projenizi birlikte değerlendirelim; keşif ve teklif için hemen iletişime geçin.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#FF5A3C] px-9 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                İletişime Geç
              </Link>
              <Link
                href="/blog"
                className="rounded-full border border-gray-900/15 bg-white/60 px-9 py-3 text-sm font-bold uppercase tracking-wide text-gray-900 shadow-md backdrop-blur hover:bg-white"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
