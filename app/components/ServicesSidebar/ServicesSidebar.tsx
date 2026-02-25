import Link from "next/link";

type ServiceItem = {
  label: string;
  href: string;
};

const SERVICE_ITEMS: ServiceItem[] = [
  { label: "Çelik Binalar", href: "/services/steel-buildings" },
  { label: "Geniş Açıklıklı Çatılar", href: "/services/wide-span-roofs" },
  { label: "Arakat ve Platform", href: "/services/mezzanine-platforms" },
  { label: "Giriş Saçağı ve Kanopiler", href: "/services/entrance-canopies" },
  {
    label: "Asansör Bölme Çelikleri ve Taşıyıcıları",
    href: "/services/elevator-structures",
  },
  { label: "Yaya Geçiş Köprüleri", href: "/services/pedestrian-bridges" },
  { label: "Çelik Merdiven", href: "/services/steel-stairs" },
  { label: "Korkuluk", href: "/services/railings" },
];

interface ServicesSidebarProps {
  /** Örn: "/services/steel-buildings" */
  currentHref: string;
}

export function ServicesSidebar({ currentHref }: ServicesSidebarProps) {
  return (
    <aside className="mt-10 w-full lg:mt-0 lg:max-w-xs lg:ml-auto lg:translate-x-28">
      <div className="sticky top-[120px] rounded-2xl border border-gray-200/80 bg-white shadow-md shadow-black/5 overflow-hidden">
        {/* Başlık */}
        <div className="bg-[#FF5A3C] px-5 py-4">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-white">
           Diğer Faaliyet Alanlarımız
          </p>
        </div>

        {/* Liste */}
        <ul className="divide-y divide-gray-200/80">
          {SERVICE_ITEMS.map((item) => {
            const isActive = item.href === currentHref;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative flex items-center justify-between px-5 py-3 text-sm font-semibold uppercase tracking-wide transition-colors ${
                    isActive
                      ? "text-[#FF5A3C]"
                      : "text-gray-800 hover:text-[#FF5A3C] hover:bg-gray-50"
                  }`}
                >
                  {isActive && (
                    <span
                      className="absolute left-0 top-1/2 h-7 w-1.5 -translate-y-1/2 rounded-full bg-[#FF5A3C]"
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative flex-1">{item.label}</span>
                  <span
                    className="relative ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 text-[11px] text-gray-400"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

