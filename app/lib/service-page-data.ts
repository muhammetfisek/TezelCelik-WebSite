/**
 * Hizmet sayfaları için ortak SEO ve içerik verisi.
 * Her hizmet: metadata, nasıl çalışıyoruz adımları, ilgili blog slug'ları, projeler CTA metni.
 */

export type ServiceId =
  | "steel-buildings"
  | "wide-span-roofs"
  | "mezzanine-platforms"
  | "entrance-canopies"
  | "elevator-structures"
  | "pedestrian-bridges"
  | "steel-stairs"
  | "railings";

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
  "steel-buildings": {
    id: "steel-buildings",
    title: "Çelik Binalar",
    shortTitle: "Çelik Binalar",
    metaTitle: "Çelik Binalar | Tezel Çelik",
    metaDescription:
      "Endüstriyel ve ticari yapılar için çelik bina tasarımı, imalatı ve montajı. Hızlı, güvenli ve uzun ömürlü çözümler.",
    heroDescription:
      "Uluslararası standartlarda, depreme dayanıklı ve anahtar teslim çelik bina çözümleri.",
    introParagraph:
      "Geniş açıklık ve yüksek taşıma kapasitesi gerektiren endüstriyel projelerde, statik hesaplardan anahtar teslim montaja kadar tüm süreci mühendislik disipliniyle yönetiyoruz. Çelik binalarımız, deprem yüklerini minimize eden hafif iskelet yapısıyla maksimum güvenlik sunarken; vinç yolları ve ağır yük raf sistemlerine tam uyumlu altyapısı sayesinde operasyonel verimliliğinizi en üst seviyeye taşır.",
    howWeWorkSteps: [
      {
        title: "Mühendislik & Proje",
        desc: "Statik hesap, detay çizim ve vinç yolları dahil endüstriyel projeler için deprem yönetmeliğine tam uyumlu, net ve kontrol edilebilir bir yapı kurgusu oluşturuyoruz.",
      },
      {
        title: "İmalat & Montaj",
        desc: "Sertifikalı malzemelerle fabrikada hassas üretim; sahada ise planlanan takvime uygun, cıvatalı birleşim avantajıyla hızlı ve güvenli bina kurulumu gerçekleştiriyoruz.",
      },
    ],
    relatedBlogSlugs: [
      "celik-binalar-rehberi-depreme-dayanikli-ve-ekonomik-yapi-cozumleri",
      "celik-yapilarda-deprem-dayanikliligi-neden-en-guvenli-secenek",
    ],
    projectsCtaTitle: "Çelik Bina Projelerimiz",
    projectsCtaDescription: "Endüstriyel tesis, depo ve ticari yapı projelerimizi inceleyin.",
    projectsHref: "/projects",
  },
  "wide-span-roofs": {
    id: "wide-span-roofs",
    title: "Geniş Açıklıklı Çatılar",
    shortTitle: "Geniş Açıklıklı Çatılar",
    metaTitle: "Geniş Açıklıklı Çatılar | Tezel Çelik",
    metaDescription:
      "Fabrika, depo, hangar ve spor alanları için geniş açıklıklı çelik çatı ve taşıyıcı sistem çözümleri.",
    heroDescription:
      "Geniş açıklık ve serbest iç hacim isteyen yapılar için çelik çatı ve makas sistemleri tasarlıyoruz.",
    introParagraph:
      "Fabrika, depo ve spor salonu gibi geniş alanlarda, iç mekanda kolon engeli olmaksızın maksimum hareket özgürlüğü sağlayan çelik çatı sistemleri tasarlıyoruz. Yüksek mühendislik hesaplarıyla hazırladığımız projelerimiz, en zorlu iklim koşullarında bile kar ve rüzgar yüklerine karşı üstün dayanım sunar.",
    howWeWorkSteps: [
      {
        title: "Statik Analiz & Tasarım",
        desc: "Geniş açıklıkların gerektirdiği kompleks yük hesaplamalarını ve rüzgar direnci analizlerini uluslararası yönetmeliklere uygun şekilde projelendiriyoruz.",
      },
      {
        title: "Hassas İmalat & Kurulum",
        desc: "Fabrika ortamında hazırlanan yüksek mukavemetli çelik makas sistemlerini, sahada iş güvenliği standartlarına uygun olarak hızlı ve hatasız bir şekilde monte ediyoruz.",
      },
    ],
    relatedBlogSlugs: [
      "genis-aciklikli-celik-catilar-verimlilik-ve-estetik",
      "celik-konstruksiyon-rehberi-dayaniklilik-hiz-ve-estetigin-bulustugu-nokta",
    ],
    projectsCtaTitle: "Geniş Açıklıklı Çatı Projelerimiz",
    projectsCtaDescription: "Fabrika, depo, spor salonu ve hangar çatı projelerimizi inceleyin.",
    projectsHref: "/projects",
  },
  "mezzanine-platforms": {
    id: "mezzanine-platforms",
    title: "Arakat ve Platform Sistemleri",
    shortTitle: "Arakat ve Platform",
    metaTitle: "Çelik Arakat ve Platform Sistemleri | Tezel Çelik",
    metaDescription:
      "Depo ve üretim alanlarında alan verimliliğini artıran çelik arakat ve endüstriyel platform çözümleri.",
    heroDescription:
      "Mevcut binaların içine çelik taşıyıcılarla ilave kat ve çalışma platformları kurarak alan verimliliğinizi artırıyoruz.",
    introParagraph:
      "Mevcut yapılarınızda dikey alanı kazanca dönüştüren, bina hacmini ikiye katlayan yüksek taşıma kapasiteli çelik arakat sistemleri inşa ediyoruz. İşletmenizin operasyonel süreçlerini aksatmadan, mevcut yapıya minimum yük bindirecek şekilde tasarladığımız platformlarla depolama ve çalışma alanlarınızı optimize ediyoruz",
    howWeWorkSteps: [
      {
        title: "Yük Analizi & Planlama",
        desc: "Arakatın üzerine binecek hareketli ve sabit yükleri (makine, raf, personel) hesaplayarak, mevcut binanın zemin ve kolon statiğine tam uyumlu projeler geliştiriyoruz.",
      },
      {
        title: "Hızlı ve Temiz Montaj",
        desc: "Fabrikada hazırlanan modüler ve cıvatalı parçalar sayesinde, şantiyede kaynak ve kirlilik yaratmadan, işleyişinizi durdurmadan kurulumu tamamlıyoruz.",
      },
    ],
    relatedBlogSlugs: [
      "celik-arakat-ve-platform-sistemleri-ile-alan-yonetimi",
      "celik-konstruksiyon-rehberi-dayaniklilik-hiz-ve-estetigin-bulustugu-nokta",
    ],
    projectsCtaTitle: "Arakat ve Platform Projelerimiz",
    projectsCtaDescription: "Depo, fabrika ve lojistik tesisler için gerçekleştirdiğimiz arakat ve platform uygulamalarını inceleyin.",
    projectsHref: "/projects",
  },
  "entrance-canopies": {
    id: "entrance-canopies",
    title: "Giriş Saçağı ve Kanopiler",
    shortTitle: "Giriş Saçağı ve Kanopi",
    metaTitle: "Giriş Saçağı ve Kanopi Sistemleri | Tezel Çelik",
    metaDescription:
      "Bina girişleri, yükleme alanları ve otoparklar için estetik ve dayanıklı çelik saçak ve kanopi sistemleri.",
    heroDescription:
      "Bina ve tesis girişlerinde koruma ve mimari vurgu sağlayan çelik saçak ve kanopi sistemleri üretiyoruz.",
    introParagraph:
      "Cepheyle uyumlu, hafif ve şeffaf görünümlü sistemlerden; tam kapalı ve endüstriyel kanopilere kadar geniş bir yelpazede çelik saçak çözümleri geliştiriyoruz. Cam, kompozit panel ve polikarbon gibi kaplamalarla hem estetik hem de uzun ömürlü giriş alanları tasarlıyoruz.",
    howWeWorkSteps: [
      {
        title: "Mimari Uyum & Tasarım",
        desc: "Mevcut bina cephesiyle bütünleşen, rüzgar ve kar yükü analizleri yapılmış, fonksiyonel ve estetik çelik formlar projelendiriyoruz.",
      },
      {
        title: "Detaycı İmalat & Montaj",
        desc: "Paslanmaz detaylar, cam veya kompozit kaplama seçenekleriyle fabrikada hazırlanan modüler sistemleri, bina giriş trafiğini aksatmadan titizlikle monte ediyoruz.",
      },
    ],
    relatedBlogSlugs: [
      "giris-sacagi-ve-kanopi-sistemleri-estetik-ve-koruma",
      "genis-aciklikli-celik-catilar-verimlilik-ve-estetik",
    ],
    projectsCtaTitle: "Giriş Saçağı ve Kanopi Projelerimiz",
    projectsCtaDescription: "Otel, ofis, AVM ve endüstriyel tesisler için gerçekleştirdiğimiz giriş saçağı ve kanopi projelerini inceleyin.",
    projectsHref: "/projects",
  },
  "elevator-structures": {
    id: "elevator-structures",
    title: "Asansör Bölme Çelikleri ve Taşıyıcıları",
    shortTitle: "Asansör Çelikleri",
    metaTitle: "Asansör Bölme Çelikleri ve Taşıyıcı Sistemler | Tezel Çelik",
    metaDescription:
      "Yeni ve mevcut binalar için asansör kuyusu çelik taşıyıcıları, bölme çelikleri ve bağlantı detayları ile güvenli dikey taşımacılık çözümleri.",
    heroDescription:
      "Yeni ve mevcut binalarda asansör kuyusu için çelik taşıyıcı sistemleri mühendislik hesaplarıyla tasarlayıp uyguluyoruz.",
    introParagraph:
      "Yeni inşa edilen veya mevcut binalarda, asansör ray ve kabin sistemleri için uluslararası emniyet standartlarına tam uyumlu çelik taşıyıcı kurgular inşa ediyoruz. Mühendislik hesaplarıyla optimize ettiğimiz sistemlerimiz, yüksek hızlarda bile sarsıntısız ve güvenli bir seyir deneyimi için gereken rijit yapıyı sunar.",
    howWeWorkSteps: [
      {
        title: "Hassas Statik Projelendirme",
        desc: "Asansör kuyusu ölçüleri ve asansör tipine (insan, yük, sedye) göre dinamik yük analizleri yapıyor, ray kılavuzları için milimetrik toleranslı statik projeler hazırlıyoruz.",
      },
      {
        title: "Sertifikalı ve Güvenli Montaj",
        desc: "Dar alanlarda çalışma güvenliğini ön planda tutarak, asansör firmalarının teknik şartnamelerine ve asansör yönetmeliklerine (EN 81-20/50) tam uyumlu, hassas montaj gerçekleştiriyoruz.",
      },
    ],
    relatedBlogSlugs: [
      "asansor-bolme-celikleri-ve-tasiyici-sistemler-guvenli-dikey-tasimacilik",
      "celik-yapilarda-deprem-dayanikliligi-neden-en-guvenli-secenek",
    ],
    projectsCtaTitle: "Asansör Çelik Konstrüksiyon Projelerimiz",
    projectsCtaDescription: "Asansör kuleleri, kuyu içi çelik karkas ve bölme çelikleri projelerimizi inceleyin.",
    projectsHref: "/projects",
  },
  "pedestrian-bridges": {
    id: "pedestrian-bridges",
    title: "Yaya Geçiş Köprüleri",
    shortTitle: "Yaya Köprüleri",
    metaTitle: "Çelik Yaya Geçiş Köprüleri | Tezel Çelik",
    metaDescription:
      "Sanayi tesisleri, kampüsler ve şehir içi alanlar için çelik yaya geçiş köprüleri tasarımı, imalatı ve montajı.",
    heroDescription:
      "Sanayi tesisleri ve kampüsler için güvenli ve konforlu çelik yaya köprüleri tasarlayıp uyguluyoruz.",
    introParagraph:
      "Şehir trafiğini rahatlatan, yaya güvenliğini en üst seviyeye çıkaran ve mimari dokuyla uyumlu çelik geçiş sistemleri inşa ediyoruz. Dinamik yük analizleri titizlikle yapılmış köprü projelerimizle, modern ulaşım ağlarına estetik, dayanıklı ve uzun ömürlü çözümler sunuyoruz.",
    howWeWorkSteps: [
      {
        title: "Güzergâh ve Fonksiyon Analizi",
        desc: "Köprü güzergâhı, geçilecek mesafe ve kullanım yoğunluğu belirlenir; açıklıklar ve iniş noktaları planlanır.",
      },
      {
        title: "Taşıyıcı Sistem Tasarımı",
        desc: "Kafes sistem, kemer veya gergili sistem gibi uygun taşıyıcı tip seçilir; statik analizler yapılır.",
      },
    ],
    relatedBlogSlugs: [
      "celik-yaya-gecis-kopru-projeleri-sehirleri-baglayan-estetik",
      "asansor-bolme-celikleri-ve-tasiyici-sistemler-guvenli-dikey-tasimacilik",
    ],
    projectsCtaTitle: "Yaya Geçiş Köprüsü Projelerimiz",
    projectsCtaDescription: "Sanayi tesisleri, kampüsler ve şehir içi alanlar için gerçekleştirdiğimiz çelik yaya köprüsü projelerini inceleyin.",
    projectsHref: "/projects",
  },
  "steel-stairs": {
    id: "steel-stairs",
    title: "Çelik Merdiven Sistemleri",
    shortTitle: "Çelik Merdiven",
    metaTitle: "Çelik Merdiven Sistemleri | Tezel Çelik",
    metaDescription:
      "Yangın kaçış, servis ve dekoratif amaçlı çelik merdiven tasarımı, imalatı ve montajı.",
    heroDescription:
      "Yangın kaçış ve mimari merdivenler için yönetmeliklere uygun çelik merdiven çözümleri sunuyoruz.",
    introParagraph:
      "Yaşam ve çalışma alanlarınıza modern bir kimlik kazandıran, estetik ile güvenliği birleştiren yüksek dayanımlı çelik merdivenler tasarlıyoruz. Mekanın ruhuna uygun formlarda, ergonomik standartlara tam uyumlu ve uzun ömürlü taşıyıcı çözümler sunuyoruz.",
    howWeWorkSteps: [
      {
        title: "İhtiyaç ve Yönetmelik Analizi",
        desc: "Merdivenin kullanım amacı, taşıyacağı yük ve yangın/kaçış yönetmelikleri doğrultusunda temel kriterler belirlenir.",
      },
      {
        title: "Geometri ve Statik Tasarım",
        desc: "Basamak ölçüleri, sahanlık yerleşimi ve taşıyıcı sistem profilleri ergonomi ve statik gereksinimlere göre tasarlanır.",
      },
    ],
    relatedBlogSlugs: [
      "celik-merdiven-sistemleri-dayaniklilik-guvenlik-ve-modern-tasarim",
      "celik-korkuluk-ve-kupeste-sistemleri-guvenligin-en-sik-hali",
    ],
    projectsCtaTitle: "Çelik Merdiven Projelerimiz",
    projectsCtaDescription: "Endüstriyel ve mimari çelik merdiven projelerimizi inceleyin.",
    projectsHref: "/projects",
  },
  railings: {
    id: "railings",
    title: "Korkuluk Sistemleri",
    shortTitle: "Korkuluk",
    metaTitle: "Çelik Korkuluk ve Küpeşte Sistemleri | Tezel Çelik",
    metaDescription:
      "Merdiven, balkon, teras ve yaya yolları için çelik korkuluk ve düşme koruma sistemleri.",
    heroDescription:
      "Merdiven, balkon ve platform kenarlarında güvenli dolaşım için çelik korkuluk sistemleri tasarlıyoruz.",
    introParagraph:
      "Merdivenler, balkon ve teras kenarları, platform ve köprü kenarları için yönetmeliklere uygun yükseklik ve doluluk oranlarında çelik korkuluk sistemleri üretiyoruz. Paslanmaz çelik, galvaniz ve camlı çözümlerle hem endüstriyel hem de mimari projelerde güvenlik ve estetiği bir araya getiriyoruz.",
    howWeWorkSteps: [
      {
        title: "Proje ve Standart Analizi",
        desc: "Kullanım alanı, yükseklikler ve ilgili yönetmelik şartları değerlendirilerek temel tasarım kriterleri belirlenir.",
      },
      {
        title: "Detay Tasarım ve Malzeme Seçimi",
        desc: "Dikme, küpeşte ve ara eleman detayları ile birlikte paslanmaz, boyalı çelik veya cam kombinasyonları seçilir.",
      },
    ],
    relatedBlogSlugs: [
      "celik-korkuluk-ve-kupeste-sistemleri-guvenligin-en-sik-hali",
      "celik-merdiven-sistemleri-dayaniklilik-guvenlik-ve-modern-tasarim",
    ],
    projectsCtaTitle: "Korkuluk Projelerimiz",
    projectsCtaDescription: "Endüstriyel ve mimari çelik korkuluk projelerimizi inceleyin.",
    projectsHref: "/projects",
  },
};

export function getServicePageData(id: ServiceId): ServicePageData {
  return servicePageData[id];
}
