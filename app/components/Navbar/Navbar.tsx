"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useLayoutEffect } from "react";

import "./NavbarAnimations.css";
import logoImg from "@/images/logo.png";
import { ContactForm } from "@/app/components/ContactForm/ContactForm";

// -----------------------------------------------------------------------------
// Sabitler
// -----------------------------------------------------------------------------
/** Navbar yüksekliği (px) */
const NAVBAR_HEIGHT = 90;
/** Menü linkleri arası boşluk (px) */
const GAP_NAV_LINKS = 32;

/** Alt menülü (dropdown) – ana sayfa yok, tıklanınca ilk alt sayfaya gider */
const SERVICES_HREF = "/services/steel-buildings";
const SERVICES_SUBITEMS = [
  { label: "Çelik Binalar", href: "/services/steel-buildings" },
  { label: "Geniş Açıklıklı Çatılar", href: "/services/wide-span-roofs" },
  { label: "Arakat ve Platform", href: "/services/mezzanine-platforms" },
  { label: "Giriş Saçağı ve Kanopiler", href: "/services/entrance-canopies" },
  {
    label: "Asansör Çelikleri ve Taşıyıcıları",
    href: "/services/elevator-structures",
  },
  { label: "Yaya Geçiş Köprüleri", href: "/services/pedestrian-bridges" },
  { label: "Çelik Merdiven", href: "/services/steel-stairs" },
  { label: "Korkuluk", href: "/services/railings" },
] as const;

/** Üst menüde görünen sayfa linkleri (label + href) veya dropdown (label + children) */
const NAV_ITEMS: Array<
  | { label: string; href: string }
  | { label: string; href: string; children: readonly { label: string; href: string }[] }
> = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımızda", href: "/about" },
  { label: "Faaliyet Alanlarımız", href: SERVICES_HREF, children: SERVICES_SUBITEMS },
  { label: "Projeler", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  // Drawer açık/kapalı, logo hata, masaüstü/mobil mod, teklif formu modalı, Hizmetlerim dropdown, mobil Hizmetlerimiz accordion
  const [logoError, setLogoError] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // DOM referansları: container, logo, gizli ölçüm nav'ı
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const measureRef = useRef<HTMLElement>(null);

  // -------------------------------------------------------------------------
  // Ölçüm: Logo + menü sığıyor mu? Sığmıyorsa mobil (hamburger) moduna geç.
  // -------------------------------------------------------------------------
  const checkFit = () => {
    if (!containerRef.current || !logoRef.current || !measureRef.current) return;

    const logoRight = logoRef.current.getBoundingClientRect().right;
    const containerRight = containerRef.current.getBoundingClientRect().right;
    const navWidth = measureRef.current.getBoundingClientRect().width;

    // Logo sağı + menü genişliği + tolerans, container sağını geçerse hamburger aç
    const isOverlapping = (logoRight + navWidth + 100) > containerRight;
    setIsMobile(isOverlapping);
  };

  // Sayfa yüklendiğinde, resize'da ve gecikmeyle tekrar ölç (font/logo yüklemesi için)
  useLayoutEffect(() => {
    checkFit();
    const ro = new ResizeObserver(() => window.requestAnimationFrame(checkFit));
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", checkFit);
    const timer = setTimeout(checkFit, 300);
    const timer2 = setTimeout(checkFit, 1000);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", checkFit);
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

return (
    <>
      {/* ----------------------------------------------------------------------- */}
      {/* Navbar: sticky, tam genişlik, arka plan ve yükseklik sabitleri kullanır  */}
      {/* ----------------------------------------------------------------------- */}
      <header
      className="sticky top-0 z-50 flex w-full flex-col border-b border-white/10"
      style={{
        background: "rgba(54, 52, 52, 0.75)",
        minHeight: NAVBAR_HEIGHT,
      }}
    >
      <div
        ref={containerRef}
        className="relative flex min-h-[72px] items-center justify-between px-5"
        style={{ width: "100%" }}
      >
        {/* Logo: anasayfaya gider, resim yüklenmezse "TEZEL ÇELİK" yazısı gösterilir */}
        <Link
          ref={logoRef}
          href="/"
          className="flex h-full shrink-0 items-center justify-center ml-[50px]"
        >
          {!logoError ? (
            <Image
              src={logoImg}
              alt="Tezel Çelik"
              width={270}
              height={90}
              className="h-auto w-auto max-h-[90px] object-contain"
              priority
              onLoad={checkFit} // Logo yüklendiği an tekrar ölç
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="text-lg font-bold text-white px-4">
              TEZEL <span style={{ color: "#FF5A3C" }}>ÇELİK</span>
            </span>
          )}
        </Link>

        {/* Masaüstü menü: Sayfa linkleri, Teklif Al butonu, dil bayrakları. Sadece isMobile false iken görünür. */}
        {!isMobile && (
          <nav className="flex items-center mr-20" style={{ gap: GAP_NAV_LINKS }}>
            {NAV_ITEMS.map((item) => {
              const hasChildren = "children" in item && item.children?.length;
              const isActive =
                hasChildren
                  ? (pathname ?? "").startsWith("/services/")
                  : item.href === "/"
                    ? (pathname ?? "") === "/"
                    : (pathname ?? "").startsWith(item.href);

              if (hasChildren) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setServicesOpen((prev) => !prev);
                      }}
                      className={`relative flex cursor-pointer items-center gap-1 border-0 bg-transparent p-0 text-sm font-bold uppercase tracking-wide transition-colors hover:text-[#FF5A3C] ${
                        isActive ? "text-[#FF5A3C]" : "text-white"
                      }`}
                      style={isActive ? { color: "#FF5A3C" } : undefined}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <span
                        className="inline-block transition-transform"
                        style={{
                          transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                          fontSize: "0.6em",
                          marginLeft: 2,
                        }}
                      >
                        ▼
                      </span>
                    </button>
                    {isActive && (
                      <span
                        className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                        style={{ background: "#FF5A3C" }}
                      />
                    )}
                    {/* Açılır menü: tek satır yazı, navbar ile uyumlu, profesyonel görünüm */}
                    {servicesOpen && (
                      <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-1">
                        {/* Görünmez köprü: fare bu alandan geçerken dropdown açık kalsın */}
                        <div className="absolute inset-x-0 top-0 h-2 -translate-y-full" aria-hidden />
                        {/* Yukarı bakan üçgen – navbar vurgu rengi (#FF5A3C) */}
                        <div
                          className="absolute left-1/2 top-0 h-0 w-0 -translate-x-1/2 border-[6px] border-transparent border-b-[#FF5A3C]"
                          style={{ top: -1 }}
                          aria-hidden
                        />
                        <div className="min-w-[220px] rounded-md border border-gray-200/80 bg-white py-1.5 shadow-xl shadow-black/10 ring-1 ring-black/5">
                          {item.children!.map((sub) => {
                            const isCurrentPage = (pathname ?? "").startsWith(sub.href);
                            return (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={(e) => {
                                  if (isCurrentPage) {
                                    e.preventDefault();
                                    if (typeof window !== "undefined") {
                                      window.location.href = sub.href;
                                    }
                                  }
                                }}
                                className="block whitespace-nowrap px-4 py-2 text-[13px] font-semibold uppercase tracking-wide text-gray-800 transition-colors first:rounded-t-[6px] last:rounded-b-[6px] hover:bg-[#FF5A3C]/8 hover:text-[#FF5A3C]"
                              >
                                {sub.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-bold uppercase tracking-wide transition-colors hover:text-[#FF5A3C] ${
                    isActive ? "text-[#FF5A3C]" : "text-white"
                  }`}
                  onClick={
                    isActive
                      ? (e) => {
                          e.preventDefault();
                          if (typeof window !== "undefined") {
                            window.location.href = item.href;
                          }
                        }
                      : undefined
                  }
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                      style={{ background: "#FF5A3C" }}
                    />
                  )}
                </Link>
              );
            })}

            <div className="ml-4 flex items-center gap-2 pl-3 shrink-0">
              <button
                type="button"
                className="navbar-flag-tr text-3xl transition-transform"
              >
                <span>🇹🇷</span>
              </button>
              <button type="button" className="text-3xl transition-transform">
                🇬🇧
              </button>
            </div>
          </nav>
        )}

{/* Hamburger (üç çizgi) butonu: Tıklanınca mobil drawer açılır. Sadece isMobile true iken görünür. */}
        {isMobile && (
<button
type="button"
className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-[5px] text-white"
onClick={() => setMobileOpen(!mobileOpen)}
>
<span className="block h-0.5 w-7 bg-white" />
<span className="block h-0.5 w-7 bg-white" />
<span className="block h-0.5 w-7 bg-white" />
</button>
)}

{/* Gizli ölçüm nav: Ekranda görünmez (sol -9999px), sadece menü genişliğini ölçmek için kullanılır (checkFit). */}
        <nav
          ref={measureRef}
          aria-hidden="true"
          className="invisible absolute left-[-9999px] flex items-center whitespace-nowrap"
          style={{ gap: GAP_NAV_LINKS }}
        >
{NAV_ITEMS.map((item) => (
<span key={item.href} className="text-sm font-semibold uppercase">{item.label}</span>
))}
<div className="ml-4 flex items-center gap-2 pl-3">
<span className="text-3xl">🇹🇷</span><span className="text-3xl">🇬🇧</span>
</div>
</nav>
</div>

{/* Mobil drawer: Hamburger tıklanınca sağdan açılan panel; sayfa linkleri + Teklif Al. Dışarı tıklayınca kapanır. */}
        {mobileOpen && (
          <>
            <div
              className="fixed inset-0 z-[60] bg-black/50"
              onClick={() => setMobileOpen(false)}
            />
            {/* Mobil menü: tüm kutular eşit yükseklik (min-h-[52px]), alt menü de kutu + çizgi */}
            <div className="fixed inset-y-0 right-0 z-[70] flex w-64 flex-col bg-[#363434]">
              {/* En üst: Geri – diğer kutularla aynı yükseklik */}
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[52px] w-full items-center gap-3 border-b border-[#FF5A3C]/20 bg-[#2a2828] px-6 text-left text-white transition-colors hover:bg-[#333]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white/10 text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </span>
                <span className="font-bold uppercase tracking-wide">Geri</span>
              </button>

              <div className="flex flex-1 flex-col overflow-y-auto p-6">
                <div className="flex flex-col divide-y divide-[#FF5A3C]/20 text-white uppercase font-bold text-sm">
                  {NAV_ITEMS.map((item) => {
                    const hasChildren = "children" in item && item.children?.length;
                    const isActive = hasChildren
                      ? item.children!.some((c) => (pathname ?? "").startsWith(c.href))
                      : item.href === "/"
                        ? (pathname ?? "") === "/"
                        : (pathname ?? "").startsWith(item.href);

                    if (hasChildren) {
                      return (
                        <div key={item.label} className="flex flex-col">
                          {/* Ana satır: Hizmetlerimiz – diğer kutularla aynı yükseklik */}
                          <button
                            type="button"
                            onClick={() => setMobileServicesOpen((prev) => !prev)}
                            className={`flex min-h-[52px] w-full items-center justify-between gap-2 px-0 py-0 text-left transition-colors ${
                              isActive ? "text-[#FF5A3C]" : "text-white"
                            } ${mobileServicesOpen ? "bg-white/10" : ""}`}
                          >
                            <span className="font-bold uppercase">{item.label}</span>
                            <span
                              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#FF5A3C] text-white transition-transform"
                              style={{
                                transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                              }}
                              aria-hidden
                            >
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9" />
                              </svg>
                            </span>
                          </button>
                          {/* Alt öğeler: her biri aynı kutu, aralarında hafif turuncu çizgi */}
                          {mobileServicesOpen && (
                            <div className="flex flex-col divide-y divide-[#FF5A3C]/20">
                              {item.children!.map((sub) => {
                                const isCurrentPage = (pathname ?? "").startsWith(sub.href);
                                return (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    onClick={(e) => {
                                      setMobileOpen(false);
                                      if (isCurrentPage) {
                                        e.preventDefault();
                                        if (typeof window !== "undefined") {
                                          window.location.href = sub.href;
                                        }
                                      }
                                    }}
                                    className="flex min-h-[52px] items-center whitespace-nowrap pl-4 text-xs font-semibold text-white/90 transition-colors hover:bg-white/5 hover:text-[#FF5A3C]"
                                    style={{ color: isCurrentPage ? "#FF5A3C" : undefined }}
                                  >
                                    {sub.label}
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={(e) => {
                          setMobileOpen(false);
                          if (isActive) {
                            e.preventDefault();
                            if (typeof window !== "undefined") {
                              window.location.href = item.href;
                            }
                          }
                        }}
                        className="flex min-h-[52px] items-center transition-colors hover:text-[#FF5A3C]"
                        style={{ color: isActive ? "#FF5A3C" : undefined }}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-6 flex justify-center gap-3">
                  <button
                    type="button"
                    className="navbar-flag-tr text-3xl transition-transform"
                  >
                    <span>🇹🇷</span>
                  </button>
                  <button
                    type="button"
                    className="text-3xl transition-transform"
                  >
                    🇬🇧
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </header>

      {/* Teklif Al Modalı - Dışına tıklanınca kapanır */}
      {quoteOpen && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 px-4"
          onClick={() => setQuoteOpen(false)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Kapat"
              className="absolute -top-10 right-0 text-white text-2xl font-bold"
              onClick={() => setQuoteOpen(false)}
            >
              ×
            </button>
            <ContactForm />
          </div>
        </div>
      )}
    </>
  );
}
