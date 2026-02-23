/**
 * Hizmet sayfaları için ortak SEO ve içerik verisi.
 * Her hizmet: metadata, nasıl çalışıyoruz adımları, ilgili blog slug'ları, projeler CTA metni.
 */

export type ServiceId = "earthquake-cabins" | "steel-construction" | "construction-contract";

export interface ServiceStep {
  title: string;
  desc: string;
}

export interface ServicePageData {
  id: ServiceId;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  /** "Neler yapıyoruz / Nelere hizmet veriyoruz" ana paragraf */
  introParagraph: string;
  /** Nasıl çalışıyoruz adımları */
  howWeWorkSteps: ServiceStep[];
  /** İlgili blog yazıları slug listesi */
  relatedBlogSlugs: string[];
  /** Projelerimiz CTA başlığı */
  projectsCtaTitle: string;
  /** Projelerimiz CTA kısa açıklama */
  projectsCtaDescription: string;
  /** Projeler sayfası link (ileride kategori filtresi eklenebilir) */
  projectsHref: string;
}

export const servicePageData: Record<ServiceId, ServicePageData> = {
  "earthquake-cabins": {
    id: "earthquake-cabins",
    title: "Deprem Kabinleri",
    shortTitle: "Deprem Kabinleri",
    metaTitle: "Deprem Kabini Hizmeti | Çelik Deprem Kafesi Üretim ve Montaj | Tezel Çelik",
    metaDescription:
      "Deprem kabini ve deprem kafesi projelendirme, imalat ve montaj. Okul, hastane, fabrika ve kamu binaları için standartlara uygun çelik acil durum kabinleri. Tezel Çelik Sistemleri.",
    heroDescription:
      "Deprem ve acil durumlarda güvenli barınma ve çalışma alanı sunan deprem kabinleri; dayanıklı çelik konstrüksiyon ve standartlara uygun tasarım ile üretilmektedir.",
    introParagraph:
      "Deprem kabinleri; okul, hastane, fabrika ve kamu binalarında acil durum toplanma ve yönetim alanı olarak kullanılmak üzere tasarlanır. Çelik taşıyıcı sistem, yangına dayanıklı kaplama ve gerekli donanımlarla güvenli alanlar oluşturuyoruz. Tezel Çelik olarak statik analiz raporları ve sertifikalı malzemelerle her kabini yaşam güvenliği standartlarına göre projelendiriyoruz.",
    howWeWorkSteps: [
      {
        title: "İhtiyaç ve Yerleşim Analizi",
        desc: "Bina planı ve kullanım amacına göre kabin sayısı, boyutları ve konumları belirlenir; deprem yönetmeliği gereksinimleri kontrol edilir.",
      },
      {
        title: "Statik Projelendirme",
        desc: "Yük kapasitesi, ankraj ve kaplama detayları mühendislik yazılımlarıyla hesaplanır; proje onayı alınır.",
      },
      {
        title: "İmalat ve Kalite Kontrol",
        desc: "Atölyede çelik konstrüksiyon imalatı, kumlama-boya ve iç donanım montajı tamamlanır; sertifikalı malzeme kullanılır.",
      },
      {
        title: "Saha Montajı ve Devreye Alma",
        desc: "Döşemeye ankraj, kabin montajı ve gerekli elektrik/iletişim bağlantıları yapılır; teslim ve kullanım eğitimi verilir.",
      },
    ],
    relatedBlogSlugs: [
      "deprem-kabini-rehberi-enkaz-altinda-hayatta-kalmanin-bilimsel-yolu",
      "celik-yapilarda-deprem-dayanikliligi-neden-en-guvenli-secenek",
    ],
    projectsCtaTitle: "Deprem Kabini ve Güvenlik Projelerimiz",
    projectsCtaDescription: "Okul, hastane ve kamu binaları için gerçekleştirdiğimiz deprem kabini projelerini inceleyin.",
    projectsHref: "/projects",
  },
  "steel-construction": {
    id: "steel-construction",
    title: "Çelik Konstrüksiyon",
    shortTitle: "Çelik Konstrüksiyon",
    metaTitle: "Çelik Konstrüksiyon | Fabrika, Hangar, Depo İmalat ve Montaj | Tezel Çelik",
    metaDescription:
      "Endüstriyel çelik konstrüksiyon: fabrika, hangar, depo, çelik çatı ve platform projelendirme, imalat ve montaj. Deprem dayanımlı, hızlı teslimat. Tezel Çelik Sistemleri.",
    heroDescription:
      "Endüstriyel tesisler, depo ve hangarlar, çelik çatı ve platformlar için projelendirme, imalat ve montaj hizmetleri. Mühendislik disiplini ve kalite odaklı üretim ile uzun ömürlü yapılar.",
    introParagraph:
      "Çelik konstrüksiyon; hızlı inşaat süresi, dayanıklılık ve esnek tasarım imkânları ile endüstriyel ve ticari yapıların vazgeçilmez tercihidir. Tezel Çelik olarak projelendirmeden sahada montaja kadar tüm süreçleri yönetiyoruz. Geniş açıklıklar, vinç yolları ve özel teknik gereksinimler için statik hesaplar ve detaylı uygulama projeleri sunuyoruz.",
    howWeWorkSteps: [
      {
        title: "Keşif ve Proje Kapsamı",
        desc: "Saha ziyareti, ihtiyaç analizi ve rüzgar/kar/deprem yükleri için bölge verileri toplanır; ön boyutlandırma yapılır.",
      },
      {
        title: "Statik ve Uygulama Projeleri",
        desc: "Taşıyıcı sistem, birleşim detayları ve imalat çizimleri hazırlanır; gerekirse mimari ile koordinasyon sağlanır.",
      },
      {
        title: "Fabrika İmalatı",
        desc: "Kesim, kaynak, kumlama ve boya işlemleri kalite kontrol altında yapılır; sevkiyat planı oluşturulur.",
      },
      {
        title: "Montaj ve Teslim",
        desc: "Sahada montaj, cıvata/kaynak birleşimleri ve son kontroller tamamlanır; devreye alma dokümanları teslim edilir.",
      },
    ],
    relatedBlogSlugs: [
      "celik-konstruksiyon-rehberi-dayaniklilik-hiz-ve-estetigin-bulustugu-nokta",
      "fabrika-ve-hangar-yapimi-endustriyel-tesislerde-celik-gucu",
      "celik-vs-betonarme-maliyet-ve-hiz-karsilastirmasi",
    ],
    projectsCtaTitle: "Çelik Konstrüksiyon Projelerimiz",
    projectsCtaDescription: "Fabrika, hangar, depo ve endüstriyel tesis projelerimizi inceleyin.",
    projectsHref: "/projects",
  },
  "construction-contract": {
    id: "construction-contract",
    title: "İnşaat Taahhüt",
    shortTitle: "İnşaat Taahhüt",
    metaTitle: "İnşaat Taahhüt | Anahtar Teslim Çelik Yapı Projeleri | Tezel Çelik",
    metaDescription:
      "Çelik konstrüksiyon ve inşaat taahhüt: ana yüklenici veya alt yüklenici olarak proje yönetimi, şantiye organizasyonu ve zamanında teslimat. Tezel Çelik.",
    heroDescription:
      "Çelik konstrüksiyon ve inşaat işlerinde ana yüklenici veya alt yüklenici olarak taahhüt hizmeti. Proje yönetimi, şantiye organizasyonu ve zamanında teslimat.",
    introParagraph:
      "Çelik yapıların projelendirilmesi, imalatı ve montajını tek elden veya mevcut inşaat projelerine entegre taahhüt ediyoruz. Keşif, planlama, tedarik ve sahada uygulama süreçlerini yönetiyoruz. Anahtar teslim modelle tek muhatap güveni, bütçe ve süre kontrolü sunuyoruz.",
    howWeWorkSteps: [
      {
        title: "Keşif ve Teklif",
        desc: "Proje incelemesi, maliyet analizi ve sözleşme koşulları netleştirilir; iş programı taslağı çıkarılır.",
      },
      {
        title: "Planlama ve Ruhsat",
        desc: "Projelendirme, tedarik planı ve gerekli resmi izinlerin takibi yapılır; şantiye organizasyonu kurulur.",
      },
      {
        title: "İmalat ve Şantiye Yönetimi",
        desc: "Fabrika üretimi ile paralel sahada hazırlık ve montaj başlar; iş güvenliği ve kalite denetimi sürer.",
      },
      {
        title: "Teslimat ve Devir",
        desc: "Son kontroller, denetim ve dokümantasyon tamamlanır; anahtar teslim veya kısmi teslim yapılır.",
      },
    ],
    relatedBlogSlugs: [
      "insaat-taahhut-nedir-anahtar-teslim-projelerde-profesyonel-yaklasim",
      "celik-konstruksiyon-rehberi-dayaniklilik-hiz-ve-estetigin-bulustugu-nokta",
      "nervurlu-demir-ve-yapi-guvenligi-neden-hayati-onem-tasir",
    ],
    projectsCtaTitle: "İnşaat Taahhüt Projelerimiz",
    projectsCtaDescription: "Anahtar teslim ve taahhüt kapsamında tamamladığımız projelere göz atın.",
    projectsHref: "/projects",
  },
};

export function getServicePageData(id: ServiceId): ServicePageData {
  return servicePageData[id];
}
