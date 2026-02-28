/**
 * Projeler sayfası ve hizmet sayfaları için proje verisi.
 * Kategori id'leri ProjectFilterBar ile aynı tutulur.
 */

export type ProjectCategory =
  | "all"
  | "steel-buildings"
  | "wide-span-roofs"
  | "mezzanine-platforms"
  | "entrance-canopies"
  | "elevator-structures"
  | "pedestrian-bridges"
  | "steel-stairs"
  | "railings";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  /** Vitrin kartında gösterilen ana görsel */
  mainImage: string;
  /** Modal galeride gösterilen 3–4 fotoğraf (iskelet, detay, bitmiş hali) */
  galleryImages: string[];
  /** Örn: "İstanbul / Pendik" */
  location: string;
  /** Örn: "2024" */
  year: string;
  /** Örn: "450 Ton Çelik / 2.000 m²" */
  capacityOrSize: string;
  /** 2–3 cümlelik kısa açıklama */
  shortDescription: string;
}

/** Kategori id → vitrin etiketi (badge) */
export const CATEGORY_LABELS: Record<Exclude<ProjectCategory, "all">, string> = {
  "steel-buildings": "Çelik Binalar",
  "wide-span-roofs": "Çelik Çatı",
  "mezzanine-platforms": "Arakat & Platform",
  "entrance-canopies": "Kanopi & Saçak",
  "elevator-structures": "Asansör Çeliği",
  "pedestrian-bridges": "Yaya Köprüsü",
  "steel-stairs": "Merdiven",
  railings: "Korkuluk",
};

// Görsel anahtarları – project-images.ts içinde src'ye çözümlenir
const img = {
  nav: "nav",
  faaliyet: "faaliyet",
  blog1: "blog1",
  blog2: "blog2",
} as const;

export const projectsData: Project[] = [
  {
    id: "gebze-lojistik",
    title: "Gebze Lojistik Merkezi",
    category: "steel-buildings",
    mainImage: img.faaliyet,
    galleryImages: [img.faaliyet, img.nav, img.blog2, img.blog1],
    location: "Kocaeli / Gebze",
    year: "2024",
    capacityOrSize: "450 Ton Çelik / 2.000 m²",
    shortDescription:
      "Bu projede, yüksek kar yükü hesaba katılarak geniş açıklıklı makas sistemi uygulanmıştır. Montaj süreci zorlu hava koşullarına rağmen 20 iş gününde tamamlanmıştır.",
  },
  {
    id: "pendik-uretim-tesisi",
    title: "Pendik Üretim Tesisi",
    category: "steel-buildings",
    mainImage: img.nav,
    galleryImages: [img.nav, img.faaliyet, img.blog2],
    location: "İstanbul / Pendik",
    year: "2024",
    capacityOrSize: "320 Ton Çelik / 1.500 m²",
    shortDescription:
      "Endüstriyel vinç yolları ve ağır yük raf sistemine uyumlu çelik bina. Deprem yönetmeliğine tam uyumlu statik proje ile anahtar teslim montaj gerçekleştirildi.",
  },
  {
    id: "bursa-hangar-cati",
    title: "Bursa Fabrika Çatı Projesi",
    category: "wide-span-roofs",
    mainImage: img.blog2,
    galleryImages: [img.blog2, img.faaliyet, img.nav],
    location: "Bursa / Nilüfer",
    year: "2023",
    capacityOrSize: "180 m açıklık / 4.200 m² çatı",
    shortDescription:
      "Geniş açıklıklı çelik makas sistemi ile kolonsuz iç hacim sağlandı. Kar ve rüzgar yükleri uluslararası standartlara göre hesaplanarak uygulandı.",
  },
  {
    id: "izmir-depo-arakat",
    title: "İzmir Depo Arakat Sistemi",
    category: "mezzanine-platforms",
    mainImage: img.faaliyet,
    galleryImages: [img.faaliyet, img.nav, img.blog1],
    location: "İzmir / Çiğli",
    year: "2024",
    capacityOrSize: "800 m² arakat / 500 kg/m² yük",
    shortDescription:
      "Mevcut depo yapısına minimum müdahale ile çelik arakat ve platform sistemi. Cıvatalı birleşimlerle işletme faaliyeti aksatılmadan montaj tamamlandı.",
  },
  {
    id: "ankara-giris-sacagi",
    title: "Ankara Ofis Giriş Saçağı",
    category: "entrance-canopies",
    mainImage: img.nav,
    galleryImages: [img.nav, img.faaliyet],
    location: "Ankara / Çankaya",
    year: "2023",
    capacityOrSize: "120 m² kanopi / cam kaplama",
    shortDescription:
      "Cepheyle uyumlu çelik taşıyıcı ve cam kaplamalı giriş saçağı. Rüzgar ve kar yükü analizleri yapılarak estetik ve dayanıklı bir çözüm sunuldu.",
  },
  {
    id: "istanbul-asansor-celik",
    title: "İstanbul Residence Asansör Çelikleri",
    category: "elevator-structures",
    mainImage: img.blog1,
    galleryImages: [img.blog1, img.nav],
    location: "İstanbul / Kadıköy",
    year: "2024",
    capacityOrSize: "2 asansör kuyusu / EN 81-20 uyumlu",
    shortDescription:
      "Yeni inşa edilen rezidans için asansör kuyusu çelik taşıyıcıları ve bölme çelikleri. Emniyet standartlarına tam uyumlu montaj gerçekleştirildi.",
  },
  {
    id: "kocaeli-yaya-koprusu",
    title: "Kocaeli Sanayi Yaya Köprüsü",
    category: "pedestrian-bridges",
    mainImage: img.faaliyet,
    galleryImages: [img.faaliyet, img.nav, img.blog2],
    location: "Kocaeli / İzmit",
    year: "2023",
    capacityOrSize: "24 m açıklık / 3 m genişlik",
    shortDescription:
      "Sanayi tesisinde trafikten bağımsız yaya geçişi için çelik kafes sistem köprü. Dinamik yük analizleri ile güvenli ve estetik bir geçiş sağlandı.",
  },
  {
    id: "istanbul-merdiven",
    title: "İstanbul Ofis Yangın Kaçış Merdiveni",
    category: "steel-stairs",
    mainImage: img.nav,
    galleryImages: [img.nav, img.blog1],
    location: "İstanbul / Şişli",
    year: "2024",
    capacityOrSize: "4 kat / çelik korkuluklu",
    shortDescription:
      "Yangın kaçış yönetmeliğine uygun çelik merdiven ve korkuluk sistemi. Ergonomik basamak ölçüleri ve paslanmaz detaylarla tamamlandı.",
  },
  {
    id: "gebze-platform-korkuluk",
    title: "Gebze Platform Korkulukları",
    category: "railings",
    mainImage: img.blog1,
    galleryImages: [img.blog1, img.faaliyet],
    location: "Kocaeli / Gebze",
    year: "2023",
    capacityOrSize: "120 m küpeşte / paslanmaz + cam",
    shortDescription:
      "Üretim platformu ve ofis katı kenarlarında yönetmeliklere uygun çelik korkuluk ve camlı küpeşte uygulaması. Estetik ve güvenlik bir arada.",
  },
];

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  if (category === "all") return [...projectsData];
  return projectsData.filter((p) => p.category === category);
}

export function getProjectById(id: string): Project | undefined {
  return projectsData.find((p) => p.id === id);
}
