import depremKabiniImg from "@/images/blog_images/deprem_kabini.png";
import celikKonstruksiyonImg from "@/images/blog_images/celik_konstruksiyon.png";
import insaatTaahhutImg from "@/images/blog_images/insaat_taahhut.png";
import fabrikaHangarImg from "@/images/blog_images/fabrika_hangar.jpeg";
import celikBetonImg from "@/images/blog_images/celik_beton.png";
import celikDepremDayaniklilikImg from "@/images/blog_images/celik_deprem_dayaniklilik.png";
import kumlamaNedirImg from "@/images/blog_images/kumlama_nedir.png";
import nervurDemirImg from "@/images/blog_images/nervur_demir.png";
import celikSuVermeImg from "@/images/blog_images/celik_su_verme.png";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  contentHtml?: string; 
  date: string;
  image: string;
  imageAlt?: string;
  metaDescription?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "deprem-kabini-rehberi-enkaz-altinda-hayatta-kalmanin-bilimsel-yolu",
    title: "Deprem Kabini Rehberi: Enkaz Altında Hayatta Kalmanın Bilimsel Yolu",
    excerpt:
      "Deprem anında pasif beklemek yerine, yaşam alanınızın içine çelikten bir güvenlik çekirdeği yerleştirmek mümkün. Deprem Kabini (Deprem Kafesi), enkaz altında hayatta kalma ihtimalinizi bilimsel olarak artıran bir mühendislik çözümüdür. [...]",
    metaDescription:
      "Deprem kabini kaç ton yük taşır? Çelik deprem kafesi satın alırken nelere dikkat edilmeli? Tezel Çelik'in statik analiz raporları ve sertifikalı malzemelerle ürettiği deprem kabinleri hakkında kapsamlı rehber.",
    imageAlt:
      "Deprem Kabini - Deprem Kafesi - Enkaz Altında Hayatta Kalma Kabini - Tezel Çelik",
    content: `Deprem anında pasif bir bekleyiş yerine, yaşam alanınızın içinde çelikten bir güvenlik çekirdeği oluşturmak mümkündür. Deprem Kabini (veya Deprem Kafesi), enkaz altında hayatta kalma ihtimalini bilimsel olarak artıran bir mühendislik çözümüdür.`,
    contentHtml: `<p>Türkiye'nin sismik hareketliliği ve mevcut yapı stoğunun durumu düşünüldüğünde, deprem anında pasif bir bekleyiş yerine <strong>aktif bir korunma stratejisi</strong> geliştirmek hayati önem taşır. Yapısal güçlendirme projeleri zaman ve maliyet açısından her zaman mümkün olmayabilir. İşte bu noktada <strong>Deprem Kabini</strong> (veya Deprem Kafesi) sistemleri, yaşam alanınızın içinde adeta "aşılması imkânsız bir kale" oluşturur. Tezel Çelik olarak, yüksek mühendislik standartlarıyla ürettiğimiz çelik kabinlerin çalışma prensiplerini ve neden bir zorunluluk haline geldiğini detaylıca inceliyoruz.</p>

<h2>Deprem Kabini (Deprem Kafesi) Nedir?</h2>
<p>Deprem kabini, klasik mobilya veya dekoratif ürünlerden çok farklı olarak, tamamen <strong>hayat kurtarmaya odaklı</strong> bir mühendislik ürünüdür. Amaç, binanın kısmen veya tamamen çökmesi durumunda, içinde bulunan kişilere <strong>yıkıntıya rağmen korunabilecekleri rijit bir hacim</strong> sunmaktır.</p>

<h2>Deprem Kabini Tam Olarak Ne Yapar?</h2>
<p>Bir deprem kabini, sadece üstten gelen yükü taşımakla kalmaz; aynı zamanda yanal basınçlara (duvarların devrilmesi, moloz yığılması) ve dinamik darbelere karşı bir "yaşam çekirdeği" oluşturur. Betonarme bir yapıda kolonlar iflas ettiğinde tavan plakaları üst üste biner (<em>pancake collapse</em>). Deprem kabini, bu plakalar arasında ezilmeyen, çelikten bir kutu görevi görerek, enkaz altında kalan kişilere müdahale edilene kadar güvenli ve nefes alınabilir bir alan sağlar.</p>

<h2>Teknik Üstünlük: Neden Çelik?</h2>
<p>Betona kıyasla çelik, <strong>sünek</strong> (esneyebilen) bir malzemedir. Bu süneklik, deprem gibi sarsıntılı yükler altında malzemenin kırılmadan enerji yutmasını ve dağıtmasını sağlar.</p>
<p><strong>Statik Yük Kapasitesi:</strong> Profesyonel şekilde tasarlanmış bir deprem kabini, tasarım ve profil kesitlerine bağlı olarak yaklaşık <strong>40 tondan 100 tona kadar</strong> dikey yükü taşıyabilecek şekilde hesaplanır.</p>
<p><strong>Dinamik Darbe Direnci:</strong> Deprem sırasında tavan blokları ve ağır elemanlar sadece yavaşça aşağı inmez; büyük bir hızla kabine çarpar. Çelik kafes yapı, bu ani darbeleri dağıtarak içeriye iletilmesini minimuma indirir.</p>
<p><strong>Korozyon ve Uzun Ömür:</strong> Kumlama ve elektrostatik toz boya gibi yüzey işlemleriyle korunan çelik kabinler, evinizin içinde on yıllarca ilk günkü sağlamlığını korur.</p>

<h2>Bir Deprem Kabininde Bulunması Gereken Hayati Detaylar</h2>
<p>Tezel Çelik mühendisliğinde, bir kabinin sadece "sağlam" olması yeterli değildir. Gerçek bir yaşam alanı aşağıdaki donanımlara sahip olmalıdır:</p>
<p><strong>Zemin Ankrajı:</strong> Kabinin, sarsıntı sırasında odanın içinde kontrolsüz şekilde kaymaması için kimyasal dübellerle döşemeye sabitlenmesi gerekir.</p>
<p><strong>İç Yumuşak Kaplama:</strong> Sarsıntı sırasında kişinin çelik duvarlara çarpıp yaralanmaması için iç yüzeyler darbe emici malzemelerle kaplanmalıdır.</p>
<p><strong>Havalandırma Menfezleri:</strong> Olası bir enkaz altında kalma durumunda hava sirkülasyonunu sağlayacak, molozla tıkanmayacak şekilde konumlandırılmış menfezler yaşamsaldır.</p>
<p><strong>Sinyal ve İletişim:</strong> Kabin dışına ses veya ışık sinyali gönderebilen, kurtarma ekiplerinin yer tespiti yapmasını kolaylaştıran sistemler için ayrılmış bölmeler olmalıdır.</p>
<p><strong>Erişilebilirlik:</strong> Kapı mekanizması, dışarıdan moloz baskısı olsa dahi içeriden kolayca açılabilecek veya kurtarma ekiplerinin müdahalesine uygun bir tasarıma sahip olmalıdır.</p>

<h2>Yerleşim Stratejisi: Kabini Nereye Koymalıyız?</h2>
<p>Senior bir tavsiye olarak; <strong>kabinin konumu en az sağlamlığı kadar önemlidir.</strong></p>
<p><strong>Yatak Odaları:</strong> Depremlerin önemli bir kısmı gece gerçekleştiği için, kabinin yatağın hemen yanında ya da yatağı içine alacak şekilde konumlandırılması en verimli çözümdür.</p>
<p><strong>Çıkış Yollarına Yakınlık:</strong> Binanın dış cephesine, balkon ya da pencere yakınına yerleştirilen kabinler, kurtarma ekiplerinin size çok daha hızlı ulaşmasını sağlar.</p>
<p><strong>Kolonlardan Uzak Konumlandırma:</strong> Kabini odanın tam ortasına veya kolonlardan uzağa yerleştirmek, kolon patlaması durumunda doğrudan darbe alma riskini azaltır.</p>

<h2>Güven Faktörü: Neden Tezel Çelik?</h2>
<p>Deprem kabini, bir mobilya değil, <strong>bir güvenlik yatırımı</strong>dır. Tasarımdan üretime kadar her aşamasında mühendislik hesapları yapılmamış, sertifikasız ürünler, deprem anında hayal kırıklığı yaratabilir.</p>
<p><strong>Tüm tasarımlarımız statik analiz raporlarına ve malzeme sertifikalarına dayanmaktadır.</strong> Bu sayede, sadece çeliğin taşıma kapasitesine değil, kullanılan her bir profilin ve bağlantı elemanının uluslararası standartlara uygunluğuna güvenebilirsiniz.</p>

<h2>Sonuç: Çelikten Bir Hayat Sigortası</h2>
<p>Deprem kabini, betonarme yapıların sınırlarının zorlandığı noktalarda devreye giren, çeliğin sarsılmaz gücüne dayanan bir çözüm sunar. Tezel Çelik olarak biz, sadece çelik konstrüksiyon üretmiyoruz; her bir kaynağımızda ve her bir plakamızda <strong>insan hayatını koruma sorumluluğunu</strong> taşıyoruz.</p>
<p>Deprem Kabini (Deprem Kafesi) sistemleri hakkında daha detaylı bilgi almak ve yaşam alanınıza en uygun çözümü tasarlamak için bizimle iletişime geçebilirsiniz.</p>`,
    date: "2026-02-18",
    image: depremKabiniImg.src,
  },
  {
    slug: "celik-konstruksiyon-rehberi-dayaniklilik-hiz-ve-estetigin-bulustugu-nokta",
    title: "Çelik Konstrüksiyon Rehberi: Dayanıklılık, Hız ve Estetiğin Buluştuğu Nokta",
    excerpt:
      "İnşaat dünyası büyük bir dönüşüm içinde. Artık hız, güvenlik, sürdürülebilirlik ve esneklik projelerin ana kriterleri haline geldi. Bu kriterlerin hepsini tek bir potada eriten sistem ise Çelik Konstrüksiyon yapı teknolojisidir. [...]",
    metaDescription:
      "Çelik konstrüksiyon yapıların avantajları nelerdir? Neden çelik prefabrik yapılar tercih edilmeli? Deprem dayanımı ve maliyet analizi hakkında uzman rehberi.",
    imageAlt:
      "Çelik Konstrüksiyon - Modern Yapılar - Endüstriyel Tesisler - Tezel Çelik",
    content: `İnşaat dünyası büyük bir dönüşüm içinde. Artık hız, güvenlik, sürdürülebilirlik ve esneklik projelerin ana kriterleri haline geldi. Bu kriterlerin hepsini tek bir potada eriten sistem ise Çelik Konstrüksiyon yapı teknolojisidir.`,
    contentHtml: `<p>İnşaat dünyası büyük bir dönüşüm içinde. Artık hız, güvenlik, sürdürülebilirlik ve esneklik projelerin ana kriterleri haline geldi. Bu kriterlerin hepsini tek bir potada eriten sistem ise <strong>Çelik Konstrüksiyon</strong> yapı teknolojisidir. Tezel Çelik olarak, endüstriyel tesislerden modern yaşam alanlarına kadar geniş bir yelpazede sunduğumuz bu mühendislik harikasının detaylarını, neden yükselen bir trend olduğunu ve teknik üstünlüklerini inceliyoruz.</p>

<h2>Çelik Konstrüksiyon Nedir?</h2>
<p><strong>Çelik konstrüksiyon</strong>; yapının tüm taşıyıcı sisteminin çelik profillerden oluştuğu bir inşaat tekniğidir. Betonarmeye göre çok daha hafif olmasına rağmen, taşıma kapasitesi çok daha yüksektir. Fabrika binaları, hangarlar, spor salonları ve deprem dayanımlı konutlar bu sistemin en yaygın kullanım alanlarıdır.</p>

<h2>Neden Çelik Konstrüksiyon Tercih Edilmelidir?</h2>
<p>Bir projenin başarısı, kullanılan malzemenin performansıyla doğru orantılıdır. Çelik, geleneksel yöntemlere göre şu kritik avantajları sunar:</p>

<h3>1. Olağanüstü Deprem Güvenliği</h3>
<p>Çelik, <strong>"sünek"</strong> (esnebilen) bir malzemedir. Betonarme yapılar sarsıntı anında kırılma eğilimi gösterirken, çelik konstrüksiyon yapılar sarsıntı enerjisini sönümler. Hafif olduğu için binaya binen deprem yükü azalır; bu da çeliği deprem kuşağındaki bölgeler için en güvenli seçenek yapar.</p>

<h3>2. Mimari Esneklik ve Geniş Açıklıklar</h3>
<p>Betonarmede büyük salonlar veya fabrika alanları yapmak için araya onlarca kolon dikmeniz gerekir. Çelik konstrüksiyonda ise çok daha az kolonla, çok daha geniş alanları (30-50 metre ve üzeri) tek seferde geçebilirsiniz. Bu, endüstriyel depolarda ve modern ofis tasarımlarında büyük bir kullanım alanı özgürlüğü sağlar.</p>

<h3>3. İnanılmaz Yapım Hızı</h3>
<p>Çelik yapılar, fabrikada milimetrik hassasiyetle önceden hazırlanır. Şantiyede sadece montaj (cıvatalı birleşim) işlemi yapılır. Bu sayede betonun kurumasını bekleme derdi olmadan, projeler geleneksel yöntemlere göre <strong>%50 daha hızlı</strong> tamamlanır. Zaman, paradır; çelik ise zaman kazandırır.</p>

<h3>4. Sürdürülebilirlik ve Geri Dönüşüm</h3>
<p>Çelik, <strong>%100 geri dönüştürülebilir</strong> bir malzemedir. Bir yapı ömrünü tamamladığında, çeliği eritip tekrar kullanabilirsiniz. Bu, Tezel Çelik olarak vizyonumuz olan "doğa dostu mühendislik" anlayışıyla tam uyumludur.</p>

<h2>Çelik Konstrüksiyon Türleri</h2>
<p><strong>Ağır Çelik Konstrüksiyon:</strong> Büyük endüstriyel tesisler, gökdelenler ve köprüler gibi yüksek yük taşıyan yapılar.</p>

<p><strong>Hafif Çelik Konstrüksiyon:</strong> Villa tipi konutlar, prefabrik yapılar ve küçük depolar için ideal olan hızlı çözümler.</p>

<h2>Tezel Çelik Mühendisliği: Kalite Ayrıntıda Gizlidir</h2>
<p>Bir çelik yapının sağlamlığı sadece kullanılan profile değil, o profillerin nasıl birleştirildiğine bağlıdır. Biz, projelerimizde şu standartlardan asla ödün vermiyoruz:</p>

<p><strong>Hassas Statik Hesaplama:</strong> Her projenin rüzgar, kar ve deprem yükleri modern yazılımlarla hesaplanır.</p>

<p><strong>Kumlama ve Boya:</strong> Çeliği korozyona karşı koruyan, ömrünü uzatan özel yüzey işlemlerini standart olarak uygularız. Daha detaylı bilgi için <a href="/blog/kumlama-nedir-celik-sektorunde-neden-kullanilir">Kumlama Nedir?</a> yazımızı inceleyebilirsiniz.</p>

<p><strong>Sertifikalı Kaynak İşçiliği:</strong> Tüm birleşim noktaları, uluslararası sertifikalı kaynak operatörlerimiz tarafından titizlikle işlenir.</p>

<h2>Sonuç</h2>
<p>Çelik konstrüksiyon, sadece bir yapı sistemi değil; güvenli, ekonomik ve estetik bir geleceğin inşasıdır. Endüstriyel yatırımlarınızda veya hayalinizdeki konut projesinde çeliğin gücünü tercih ederek, nesiller boyu ayakta kalacak yapılar oluşturabilirsiniz.</p>

<p><strong>Sizin de bir çelik yapı projeniz mi var? Ücretsiz keşif ve statik analiz için profesyonel ekibimizle iletişime geçin.</strong></p>`,
    date: "2026-02-20",
    image: celikKonstruksiyonImg.src,
  },
  {
    slug: "insaat-taahhut-nedir-anahtar-teslim-projelerde-profesyonel-yaklasim",
    title: "İnşaat Taahhüt Nedir? Anahtar Teslim Projelerde Profesyonel Yaklaşım",
    excerpt:
      "Büyük bir inşaat projesine başlamak, sadece malzeme tedarik etmekten çok daha fazlasıdır. Bütçe planlamasından yasal izinlere, mühendislik hesaplarından saha operasyonlarına kadar uzanan bu devasa süreci tek başınıza yönetmek hem zaman kaybına hem de maliyet artışlarına neden olabilir. [...]",
    metaDescription:
      "Anahtar teslim inşaat taahhüt süreci nasıl işler? Proje planlama, bütçelendirme ve denetim aşamalarında Tezel Çelik güvencesi.",
    imageAlt:
      "İnşaat Taahhüt - Anahtar Teslim Projeler - Şantiye Yönetimi - Tezel Çelik",
    content: `Büyük bir inşaat projesine başlamak, sadece malzeme tedarik etmekten çok daha fazlasıdır. Bütçe planlamasından yasal izinlere, mühendislik hesaplarından saha operasyonlarına kadar uzanan bu devasa süreci tek başınıza yönetmek hem zaman kaybına hem de maliyet artışlarına neden olabilir.`,
    contentHtml: `<p>Büyük bir inşaat projesine başlamak, sadece malzeme tedarik etmekten çok daha fazlasıdır. Bütçe planlamasından yasal izinlere, mühendislik hesaplarından saha operasyonlarına kadar uzanan bu devasa süreci tek başınıza yönetmek hem zaman kaybına hem de maliyet artışlarına neden olabilir. İşte bu noktada devreye giren <strong>İnşaat Taahhüt</strong> hizmeti, işverenin tüm yükünü omuzlarından alarak projenin profesyonel standartlarda tamamlanmasını sağlar. Tezel Çelik olarak, hayallerinizi somut ve güvenli yapılara dönüştürürken "anahtar teslim" bir disiplinle hareket ediyoruz.</p>

<h2>İnşaat Taahhüt Hizmeti Neleri Kapsar?</h2>
<p><strong>İnşaat taahhüt</strong>, bir yapının fikir aşamasından anahtar teslimine kadar olan tüm sürecin, belirlenen bütçe ve süre dahilinde yönetilmesidir. Tezel Çelik bünyesinde bu süreç şu temel aşamalardan oluşur:</p>

<p><strong>Planlama ve Projelendirme:</strong> İhtiyaca yönelik mimari tasarımın ve statik hesapların yapılması.</p>

<p><strong>Bütçe Yönetimi:</strong> Malzeme, işçilik ve lojistik giderlerinin şeffaf bir şekilde kalem kalem hesaplanması.</p>

<p><strong>Resmi İzinler ve Ruhsatlandırma:</strong> Belediyeler ve ilgili kamu kurumlarıyla olan bürokratik süreçlerin takibi.</p>

<p><strong>Saha Operasyonları ve İnşaat:</strong> Şantiye kurulumundan montaja kadar tüm fiili yapım süreci.</p>

<p><strong>Denetim ve Teslim:</strong> Yapılan işin uluslararası standartlara uygunluğunun denetlenmesi ve projenin eksiksiz teslimi.</p>

<h2>Anahtar Teslim Modelin Avantajları</h2>
<p>Neden projenizi parçalı yönetmek yerine bir taahhüt firmasına emanet etmelisiniz?</p>

<p><strong>Tek Muhatap Güveni:</strong> Mühendis, mimar ve taşeronlarla ayrı ayrı uğraşmak yerine, tüm süreç için karşınızda tek bir profesyonel muhatap olur.</p>

<p><strong>Zaman ve Maliyet Kontrolü:</strong> İşin başında belirlenen takvime ve bütçeye sadık kalınır. Öngörülemeyen "sürpriz" harcamaların önüne geçilir.</p>

<p><strong>Hata Payının Minimize Edilmesi:</strong> Üretim ve montaj ekiplerinin aynı çatı altında olması (Tezel Çelik fabrikası gibi), iletişim hatalarını ve uygulama yanlışlarını sıfıra indirir.</p>

<h2>Çelik Konstrüksiyon ile Entegre Taahhüt</h2>
<p>Tezel Çelik olarak bizi diğer taahhüt firmalarından ayıran en büyük fark; çelik imalatını kendi fabrikamızda yapmamızdır. Bu sayede:</p>

<p>Hammadde kalitesini bizzat kontrol ediyoruz.</p>

<p>Fabrikada hazırlanan modüler parçaları sahada hızla birleştirerek projeyi <strong>%50 daha hızlı</strong> teslim ediyoruz.</p>

<p>Endüstriyel tesislerdeki teknik gereksinimleri (vinç yolları, tesisat geçişleri vb.) taahhüt aşamasında eksiksiz çözüyoruz.</p>

<p>Çelik konstrüksiyon yapıların avantajları hakkında daha detaylı bilgi için <a href="/blog/celik-konstruksiyon-rehberi-dayaniklilik-hiz-ve-estetigin-bulustugu-nokta">Çelik Konstrüksiyon Rehberi</a> yazımızı inceleyebilirsiniz.</p>

<h2>Sonuç</h2>
<p>İnşaat taahhüt hizmeti, bir kağıt üzerindeki çizginin güvenli bir yapıya dönüşme yolculuğudur. Bu yolculukta doğru partnerle çalışmak, hem yatırımınızı korur hem de yapınızın ömrünü uzatır. Tezel Çelik olarak, taahhüdümüz altındaki her projede "sıfır hata" ve "maksimum güvenlik" prensibiyle çalışıyoruz.</p>`,
    date: "2026-02-15",
    image: insaatTaahhutImg.src,
  },
  {
    slug: "fabrika-ve-hangar-yapimi-endustriyel-tesislerde-celik-gucu",
    title: "Fabrika ve Hangar Yapımı: Endüstriyel Tesislerde Çelik Gücü",
    excerpt:
      "Endüstriyel yatırımların başarısı, üretim ve depolama süreçlerinin gerçekleşeceği tesisin kalitesine bağlıdır. Modern sanayide hız, geniş açıklıklar ve yüksek dayanım gereksinimi, Çelik Konstrüksiyon Fabrika ve Hangar yapılarını bir standart haline getirmiştir. [...]",
    metaDescription:
      "Çelik fabrika ve hangar yapımının avantajları nelerdir? Geniş açıklıklı sanayi yapıları ve endüstriyel depo çözümlerinde Tezel Çelik uzmanlığı.",
    imageAlt:
      "Fabrika ve Hangar Yapımı - Endüstriyel Tesisler - Çelik Konstrüksiyon - Tezel Çelik",
    content: `Endüstriyel yatırımların başarısı, üretim ve depolama süreçlerinin gerçekleşeceği tesisin kalitesine bağlıdır. Modern sanayide hız, geniş açıklıklar ve yüksek dayanım gereksinimi, Çelik Konstrüksiyon Fabrika ve Hangar yapılarını bir standart haline getirmiştir.`,
    contentHtml: `<p>Endüstriyel yatırımların başarısı, üretim ve depolama süreçlerinin gerçekleşeceği tesisin kalitesine bağlıdır. Modern sanayide hız, geniş açıklıklar ve yüksek dayanım gereksinimi, <strong>Çelik Konstrüksiyon Fabrika ve Hangar</strong> yapılarını bir standart haline getirmiştir. Tezel Çelik olarak, projelendirme aşamasından montaja kadar, sanayicinin ihtiyacı olan fonksiyonel ve güvenli tesisleri ileri mühendislik çözümleriyle inşa ediyoruz.</p>

<h2>Neden Çelik Fabrika ve Hangar?</h2>
<p>Geleneksel betonarme yapılara kıyasla çelik sistemler, endüstriyel tesisler için vazgeçilmez avantajlar sunar:</p>

<p><strong>Geniş ve Kolonsuz Alanlar:</strong> Fabrika içinde makine yerleşimi ve lojistik hareketlilik için geniş açıklıklar hayati önem taşır. Çelik konstrüksiyon sayesinde, araya kolon koymadan <strong>30-50 metre ve üzeri açıklıklar</strong> geçilebilir. Bu, maksimum kullanım alanı ve operasyonel esneklik sağlar.</p>

<p><strong>Statik Güvenlik ve Vinç Yükleri:</strong> Ağır sanayi tesislerinde tavan vinçleri ve hareketli yükler statik yapıyı zorlar. Çelik yapılar, bu dinamik yükleri karşılamak için en güvenilir ve hesaplanabilir sistemlerdir.</p>

<p><strong>Hızlı Geri Dönüş (ROI):</strong> Yatırımın bir an önce üretime geçmesi gerekir. Çelik fabrikalar betonarmeye göre çok daha kısa sürede tamamlanır, bu da yatırımın geri dönüş süresini kısaltır.</p>

<p><strong>Genişletilebilirlik:</strong> İşleriniz büyüdüğünde çelik yapıya ekleme yapmak, mevcut yapıyı büyütmek veya modifiye etmek betonarmeye göre çok daha kolay ve az maliyetlidir.</p>

<h2>Fabrika Yapım Sürecinde Tezel Çelik Standartları</h2>
<p>Bir sanayi tesisi inşa edilirken sadece "dikmek" yetmez, mühendislik detayları fark yaratır:</p>

<p><strong>Zemin ve Statik Analizi:</strong> Tesisin yapılacağı bölgenin zemin özelliklerine ve kar/rüzgar yüklerine göre hassas mühendislik hesapları yapılır.</p>

<p><strong>İzolasyon ve Çatı Çözümleri:</strong> Enerji verimliliği için sandviç panel veya özel kaplama sistemleri ile ısı ve ses yalıtımı optimize edilir.</p>

<p><strong>Korozyon Koruması:</strong> Endüstriyel ortamlardaki nem ve kimyasallara karşı, tüm çelik elemanlar yüksek standartlarda kumlama ve boyama işleminden geçirilir.</p>

<p><strong>Aydınlatma ve Havalandırma:</strong> Tesis içi çalışma konforu için doğal aydınlatma (polikarbon paneller) ve mekanik havalandırma sistemleri projeye entegre edilir.</p>

<h2>Hangar Yapılarında Özel Çözümler</h2>
<p>Uçak hangarlarından lojistik depolara kadar, büyük hacimli yapılar için özel makas sistemleri tasarlıyoruz. Bu yapılar, hem hafif hem de rüzgar gibi dış etkenlere karşı son derece dirençli şekilde kurgulanır.</p>

<p>Çelik konstrüksiyon yapıların teknik detayları ve avantajları hakkında daha fazla bilgi için <a href="/blog/celik-konstruksiyon-rehberi-dayaniklilik-hiz-ve-estetigin-bulustugu-nokta">Çelik Konstrüksiyon Rehberi</a> yazımızı inceleyebilirsiniz.</p>

<h2>Sonuç</h2>
<p>Doğru tasarlanmış bir fabrika binası, sadece bir kabuk değil, üretimin verimliliğini artıran bir araçtır. Tezel Çelik olarak, sanayicilerimizin yatırım hedeflerini anlıyor ve onlara on yıllar boyu sorunsuz hizmet verecek, depreme dayanıklı ve modern tesisler taahhüt ediyoruz.</p>`,
    date: "2026-02-16",
    image: fabrikaHangarImg.src,
  },
  {
    slug: "celik-vs-betonarme-maliyet-ve-hiz-karsilastirmasi",
    title: "Çelik vs. Betonarme: Maliyet ve Hız Karşılaştırması",
    excerpt:
      "Bir yatırım kararı verirken en çok sorulan soru şudur: \"Neden çelik konstrüksiyonu seçmeliyim?\" Geleneksel betonarme yapılar yıllardır alışagelmiş bir yöntem olsa da, modern inşaat dünyasında çelik; hız, maliyet kontrolü ve performans açısından betonarmeyi geride bırakıyor. [...]",
    metaDescription:
      "İnşaat projeniz için hangisi daha kârlı? Çelik konstrüksiyon ve betonarme yapıların maliyet, hız ve dayanıklılık açısından detaylı karşılaştırması.",
    imageAlt:
      "Çelik vs Betonarme Karşılaştırması - Maliyet Analizi - Tezel Çelik",
    content: `Bir yatırım kararı verirken en çok sorulan soru şudur: "Neden çelik konstrüksiyonu seçmeliyim?" Geleneksel betonarme yapılar yıllardır alışagelmiş bir yöntem olsa da, modern inşaat dünyasında çelik; hız, maliyet kontrolü ve performans açısından betonarmeyi geride bırakıyor.`,
    contentHtml: `<p>Bir yatırım kararı verirken en çok sorulan soru şudur: <strong>"Neden çelik konstrüksiyonu seçmeliyim?"</strong> Geleneksel betonarme yapılar yıllardır alışagelmiş bir yöntem olsa da, modern inşaat dünyasında çelik; hız, maliyet kontrolü ve performans açısından betonarmeyi geride bırakıyor. Tezel Çelik olarak, yatırımcılarımıza projelerinde rehberlik edecek o büyük karşılaştırmayı yaptık.</p>

<h2>1. Yapım Hızı: Zaman Paradır</h2>
<p>İnşaat sektöründe zamanın nakit olduğunu biliyoruz.</p>

<p><strong>Betonarme:</strong> Kalıp çakılması, demir döşenmesi ve en önemlisi betonun kuruması (priz alması) için gereken bekleme süreleri projeyi aylarca uzatır. Hava şartları (aşırı soğuk veya yağış) beton dökümünü durdurabilir.</p>

<p><strong>Çelik:</strong> Parçalar Tezel Çelik fabrikasında milimetrik hassasiyetle hazırlanır. Şantiyeye gelen malzemeler bir yapboz gibi hızla monte edilir. Betonarme ile 1 yılda bitecek bir tesis, çelikle <strong>4-6 ay içinde teslim edilebilir</strong>. Fabrikanızın 6 ay erken üretime geçmesi, yatırımın geri dönüşünü inanılmaz hızlandırır.</p>

<h2>2. Maliyet Analizi: Gizli Giderlere Dikkat</h2>
<p>Sadece malzeme fiyatına bakmak yanıltıcı olabilir. Projenin toplam maliyetine (<strong>Total Cost of Ownership</strong>) odaklanmalısınız.</p>

<p><strong>Hafiflikten Gelen Tasarruf:</strong> Çelik yapılar betonarmeye göre çok daha hafiftir. Bu durum, temel inşaatında daha az kazı ve daha az beton kullanılmasını sağlar. Zemin iyileştirme maliyetleriniz ciddi oranda düşer.</p>

<p><strong>İşçilik ve Şantiye Giderleri:</strong> İnşaat süresi kısaldığı için şantiye giderleri (bekçi, yemek, enerji, kira vb.) yarı yarıya azalır.</p>

<p><strong>Sıfır Atık:</strong> Çelik, fabrikada kesilip geldiği için şantiyede malzeme israfı olmaz. Betonarmede ise kalıp ve demir firesi maliyeti artırır.</p>

<h2>3. Esneklik ve Dönüşüm</h2>
<p><strong>Betonarme:</strong> Bir kolonun yerini değiştirmek veya yapıyı genişletmek neredeyse imkansızdır; yıkım ve yeniden yapım gerektirir.</p>

<p><strong>Çelik:</strong> İşleriniz büyüdüğünde çelik yapıyı genişletmek veya kat eklemek çok daha kolaydır. Hatta gerektiğinde yapı sökülüp başka bir yere taşınabilir. Bu, çeliği <strong>"taşınabilir bir varlık"</strong> haline getirir.</p>

<h2>4. Bakım ve Geri Dönüşüm Değeri</h2>
<p><strong>Betonarme:</strong> Bir bina ömrünü tamamladığında yıkılması bir maliyettir ve ortaya çıkan moloz bir yüktür.</p>

<p><strong>Çelik:</strong> Yapı ömrünü tamamlasa bile içindeki çelik <strong>%100 geri dönüştürülebilir</strong>. Yıkım anında çıkan çelik, yüksek bir hurda değerine sahiptir. Yani binanız yıkılırken bile size para kazandırır.</p>

<h2>Karşılaştırma Tablosu</h2>
<table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0;">
<thead>
<tr style="background-color: #f3f4f6;">
<th style="padding: 0.75rem; text-align: left; border: 1px solid #d1d5db;"><strong>Özellik</strong></th>
<th style="padding: 0.75rem; text-align: left; border: 1px solid #d1d5db;"><strong>Çelik Konstrüksiyon</strong></th>
<th style="padding: 0.75rem; text-align: left; border: 1px solid #d1d5db;"><strong>Betonarme</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 0.75rem; border: 1px solid #d1d5db;"><strong>İnşaat Süresi</strong></td>
<td style="padding: 0.75rem; border: 1px solid #d1d5db;">Çok Hızlı (%50 tasarruf)</td>
<td style="padding: 0.75rem; border: 1px solid #d1d5db;">Yavaş (Bekleme süreleri var)</td>
</tr>
<tr style="background-color: #f9fafb;">
<td style="padding: 0.75rem; border: 1px solid #d1d5db;"><strong>Deprem Güvenliği</strong></td>
<td style="padding: 0.75rem; border: 1px solid #d1d5db;">Çok Yüksek (Sünek yapı)</td>
<td style="padding: 0.75rem; border: 1px solid #d1d5db;">Orta (Rijit yapı)</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #d1d5db;"><strong>Geniş Açıklık</strong></td>
<td style="padding: 0.75rem; border: 1px solid #d1d5db;">Uygun (Kolonsuz 50m+)</td>
<td style="padding: 0.75rem; border: 1px solid #d1d5db;">Zor (Çok sayıda kolon gerekir)</td>
</tr>
<tr style="background-color: #f9fafb;">
<td style="padding: 0.75rem; border: 1px solid #d1d5db;"><strong>Geri Dönüşüm</strong></td>
<td style="padding: 0.75rem; border: 1px solid #d1d5db;">%100 Geri Dönüştürülebilir</td>
<td style="padding: 0.75rem; border: 1px solid #d1d5db;">Yok (Moloz yükü)</td>
</tr>
</tbody>
</table>

<h2>Sonuç</h2>
<p>Eğer hız, deprem güvenliği ve uzun vadeli kâr arıyorsanız, çelik konstrüksiyon tartışmasız galiptir. Tezel Çelik olarak, yatırım bütçenizi en verimli şekilde kullanmanız için size özel statik ve maliyet analizleri sunuyoruz.</p>`,
    date: "2026-02-18",
    image: celikBetonImg.src,
  },
  {
    slug: "celik-yapilarda-deprem-dayanikliligi-neden-en-guvenli-secenek",
    title: "Çelik Yapılarda Deprem Dayanıklılığı: Neden En Güvenli Seçenek?",
    excerpt:
      "Türkiye gibi aktif fay hatlarının üzerinde bulunan bir ülkede, yapı güvenliği bir tercih değil, yaşamsal bir zorunluluktur. Son yıllarda yaşanan depremler bizlere bir kez daha gösterdi ki; yapıların sadece \"ayakta kalması\" yetmez, sarsıntı enerjisini absorbe edebilecek esnekliğe sahip olması gerekir. [...]",
    metaDescription:
      "Çelik yapılar depreme neden daha dayanıklıdır? Esneklik, hafiflik ve mühendislik avantajlarıyla çelik konstrüksiyonun deprem güvenliği.",
    imageAlt:
      "Çelik Yapılarda Deprem Dayanıklılığı - Çelik Konstrüksiyon Deprem Güvenliği - Tezel Çelik",
    content: `Türkiye gibi aktif fay hatlarının üzerinde bulunan bir ülkede, yapı güvenliği bir tercih değil, yaşamsal bir zorunluluktur. Son yıllarda yaşanan depremler bizlere bir kez daha gösterdi ki; yapıların sadece "ayakta kalması" yetmez, sarsıntı enerjisini absorbe edebilecek esnekliğe sahip olması gerekir.`,
    contentHtml: `<p>Türkiye gibi aktif fay hatlarının üzerinde bulunan bir ülkede, yapı güvenliği bir tercih değil, yaşamsal bir zorunluluktur. Son yıllarda yaşanan depremler bizlere bir kez daha gösterdi ki; yapıların sadece "ayakta kalması" yetmez, sarsıntı enerjisini absorbe edebilecek esnekliğe sahip olması gerekir. Tezel Çelik olarak, modern mühendisliğin zirvesi kabul edilen çelik yapı sistemlerinin deprem anındaki davranışını ve neden en güvenli sığınak olduğunu inceliyoruz.</p>

<h2>Çelik Neden Depreme Karşı Daha Güçlüdür?</h2>
<p>Çelik yapıların betonarmeye karşı üstünlüğü, malzemenin fiziksel özelliklerinden ve sistemin çalışma prensibinden kaynaklanır:</p>

<h3>1. Süneklik (Esneklik) Kabiliyeti</h3>
<p>Betonarme yapılar rijit (sert) yapılardır. Büyük bir sarsıntı anında bu sertlik, yapının çatlamasına ve kırılmasına yol açabilir. Çelik ise doğası gereği <strong>"sünek"</strong> bir malzemedir. Deprem yükleri altında belirli bir oranda esneyerek sarsıntı enerjisini yutar ve kırılmadan tekrar eski formuna döner. Bu özellik, binanın ani çökmesini engelleyen en büyük sigortadır.</p>

<h3>2. Hafiflik Avantajı</h3>
<p>Depremin bir bina üzerindeki yıkıcı etkisi, binanın toplam ağırlığı ile doğru orantılıdır. Çelik konstrüksiyon yapılar, benzer kapasitedeki bir betonarme binaya göre yaklaşık <strong>%50 ile %60 daha hafiftir</strong>. Bina ne kadar hafifse, yer kabuğunun sarsıntısından o kadar az etkilenir. Daha az kütle, daha az eylemsizlik kuvveti demektir.</p>

<h3>3. Fabrikasyon Kalitesi ve Standartlar</h3>
<p>Betonarme binalarda kalite; şantiyedeki hava durumuna, betonun dökülme hızına ve işçiliğe bağlı olarak değişebilir. Ancak çelik yapılar, Tezel Çelik fabrikasında milimetrik hassasiyetle, kontrollü ortamda üretilir. Kaynaklar ve bağlantı noktaları laboratuvar titizliğinde denetlenir. Bu da yapının her noktasında <strong>"homojen"</strong> bir güvenlik sağlar.</p>

<h2>Statik Hesaplamalarda "Sıfır Hata" Prensibi</h2>
<p>Bir çelik yapının deprem dayanımı, sadece malzemenin gücüyle değil, mühendislik hesaplarıyla belirlenir:</p>

<p><strong>Dinamik Analiz:</strong> Yapılarımız, bölgenin deprem risk haritasına göre simülasyonlarla test edilir.</p>

<p><strong>Bağlantı Detayları (Aderans):</strong> Kolon ve kiriş birleşim noktaları, sarsıntı anında enerjiyi dağıtacak şekilde yüksek dayanımlı cıvata veya özel kaynak sistemleriyle kurgulanır.</p>

<h2>Enkaz Riskini Ortadan Kaldıran Sistem</h2>
<p>Betonarme binaların çökmesi durumunda ortaya çıkan devasa beton bloklar, yaşam üçgeni ihtimalini azaltır. Çelik yapılar ise çökme anında (en kötü senaryoda bile) parçalanıp dağılmak yerine bir bütün halinde kalma eğilimi gösterir. Bu da arama kurtarma süreçlerini kolaylaştırır ve hayatta kalma şansını maksimize eder.</p>

<p>Bireysel güvenlik çözümlerimiz için <a href="/blog/deprem-kabini-rehberi-enkaz-altinda-hayatta-kalmanin-bilimsel-yolu">Deprem Kabini Rehberi</a> yazımızı inceleyebilirsiniz.</p>

<h2>Sonuç</h2>
<p>Depremle yaşamayı öğrenmek, binalarımızı çeliğin sarsılmaz gücüyle inşa etmekten geçer. Tezel Çelik olarak, hayata geçirdiğimiz her fabrikada, her hangarda ve her konutta; mühendisliğin verdiği bu güveni müşterilerimize taahhüt ediyoruz. Çelik yapı, geleceğe atılan en sağlam imzadır.</p>`,
    date: "2026-02-17",
    image: celikDepremDayaniklilikImg.src,
  },
  {
    slug: "kumlama-nedir-celik-sektorunde-neden-kullanilir",
    title: "Kumlama Nedir ve Çelik Sektöründe Neden Kullanılır?",
    excerpt:
      "Çelik sektöründe ürün kalitesi yalnızca kullanılan ham maddenin özellikleriyle değil, üretim sürecinde uygulanan yüzey hazırlama işlemleriyle de doğrudan ilişkilidir. Özellikle sanayi uygulamalarında çeliğin kaplama, boyama veya [...]",
    metaDescription:
      "Çelik yapıların ömrünü uzatan kumlama işlemi nedir? Kumlama standartları ve çelik sektöründeki önemi hakkında detaylı bilgi.",
    imageAlt: "Tezel Çelik Kumlama Uygulaması - Çelik Konstrüksiyon Kumlama İşlemi",
    content: `Çelik sektöründe ürün kalitesi yalnızca kullanılan ham maddenin özellikleriyle değil, üretim sürecinde uygulanan yüzey hazırlama işlemleriyle de doğrudan ilişkilidir.`,
    contentHtml: `<p>Çelik, modern mimarinin ve endüstriyel devrimin en temel yapı taşıdır. Ancak en güçlü çelik konstrüksiyon projeleri bile, doğru yüzey hazırlığı yapılmadığında zamanın ve doğanın yıpratıcı etkilerine yenik düşebilir. İşte bu noktada devreye giren <strong>kumlama</strong> işlemi, çeliğin ömrünü on yıllarca uzatan, estetik ve güvenliği bir araya getiren en kritik süreçtir.</p>

<h2>Kumlama (Sandblasting) Nedir?</h2>
<p>Teknik tanımıyla kumlama; metal yüzeylerin zamanla maruz kaldığı <strong>korozyon</strong>, pas, hadde pulları (mill scale), yağ ve eski boya kalıntılarından mekanik yolla temizlenmesi işlemidir. Bu işlem, yüksek basınçlı hava yardımıyla çeşitli aşındırıcı granüllerin (çelik grit, cam küreciği, kuvars kumu vb.) metal yüzeyine yüksek hızla çarptırılması prensibine dayanır.</p>

<h2>Çelik Sektöründe Neden Kumlama Yapılmalıdır?</h2>
<p>Kumlama, sadece bir "temizlik" aşaması değil, bir mühendislik zorunluluğudur. İşte nedenleri:</p>

<h3>1. Korozyonla Mücadele ve Uzun Ömür</h3>
<p>Çelik, doğası gereği oksijen ve nemle temas ettiğinde kimyasal bir reaksiyona girerek oksitlenir (paslanır). Kumlama, metalin gözeneklerine kadar işlemiş olan bu pası söküp atar. Temizlenmiş bir metal yüzeyi, doğru kaplama ile birleştiğinde çürüme riskini sıfıra indirir.</p>

<h3>2. Boya ve Kaplama İçin İdeal Zemin (Anchoring Profile)</h3>
<p>Pürüzsüz görünen bir çelik yüzeyine boya yaparsanız, o boya bir süre sonra pul pul dökülür. Kumlama, metal yüzeyinde "pürüzlülük profili" (anchor profile) oluşturur. Mikroskobik düzeydeki bu pürüzler, boyanın metale mekanik olarak kilitlenmesini sağlar. Bu sayede <strong>boya ömrü</strong> 2-3 kat artar.</p>

<h3>3. Yapısal Hataların Tespiti</h3>
<p>Kumlama, çeliğin üzerindeki tüm örttüğü tabakaları kaldırarak "çıplak metali" ortaya çıkarır. Bu işlem sırasında kaynaklardaki gözenekler, döküm hataları veya gizli çatlaklar görünür hale gelir. Projenin güvenliği için kumlama, doğal bir kalite kontrol sürecidir.</p>

<h2>Dünya Standartlarında Kumlama Dereceleri (ISO 8501-1)</h2>
<p>Bir Senior Developer projede nasıl standartlara bağlı kalıyorsa, kumlama operatörü de SA standartlarına uymalıdır. Tezel Çelik olarak projelerimizde şu standartları gözetiyoruz:</p>

<p><strong>SA 1 (Hafif Kumlama)</strong>: Sadece gevşek pas ve yabancı maddeler temizlenir.</p>

<p><strong>SA 2 (Ticari Kumlama)</strong>: Yüzeyin büyük çoğunluğu temizlenir, ancak hafif gölgelenmeler kalabilir.</p>

<p><strong>SA 2.5 (Çok İyi Temizlik)</strong>: Sektörün altın standartıdır. Metal yüzeyi neredeyse tamamen temizlenir, sadece çok hafif lekeler kalabilir. Profesyonel boya uygulamaları için bu derece şarttır.</p>

<p><strong>SA 3 (Beyaz Metal)</strong>: Metalin tamamen orijinal rengine (beyaz/gri) döndüğü, en üst düzey kumlama seviyesidir. Genellikle nükleer santraller veya aşırı korozif ortamlar için tercih edilir.</p>

<h2>Kumlama Sonrası Kritik Adım: Hemen Boyama!</h2>
<p>Kumlama yapılan çelik, en savunmasız halindedir. Havdaki nemle saniyeler içinde tekrar oksitlenmeye başlayabilir. Bu yüzden senior bir işleyişte, kumlama biter bitmez (genellikle ilk 4 saat içinde) "astar" (primer) boyası uygulanmalıdır.</p>

<h2>Sonuç</h2>
<p>Tezel Çelik olarak, hayata geçirdiğimiz her çelik konstrüksiyon projesinde kumlama aşamasını bir kalite imzası olarak görüyoruz. Doğru kumlama, projenizin sadece bugün değil, 50 yıl sonra da dimdik ayakta kalmasını sağlar.</p>`,
    date: "2026-02-12",
    image: kumlamaNedirImg.src,
  },
  {
    slug: "nervurlu-demir-ve-yapi-guvenligi-neden-hayati-onem-tasir",
    title: "Nervürlü Demir ve Yapı Güvenliği: Neden Hayati Önem Taşır?",
    excerpt:
      "İnşaat sektöründe bir yapının sarsılmaz gücü, temelinde ve taşıyıcı sisteminde kullanılan malzemenin kalitesine bağlıdır. Özellikle betonarme ve çelik konstrüksiyonun bir arada kullanıldığı projelerde, betonun içindeki demirin performansı güvenliğin anahtarıdır. [...]",
    metaDescription:
      "Nervürlü demir nedir ve yapı güvenliğinde neden kullanılır? Deprem dayanımı ve beton-demir kenetlenmesi hakkında profesyonel rehber.",
    imageAlt:
      "Nervürlü Demir ve Yapı Güvenliği - İnşaat Demiri - Tezel Çelik",
    content: `İnşaat sektöründe bir yapının sarsılmaz gücü, temelinde ve taşıyıcı sisteminde kullanılan malzemenin kalitesine bağlıdır. Özellikle betonarme ve çelik konstrüksiyonun bir arada kullanıldığı projelerde, betonun içindeki demirin performansı güvenliğin anahtarıdır.`,
    contentHtml: `<p>İnşaat sektöründe bir yapının sarsılmaz gücü, temelinde ve taşıyıcı sisteminde kullanılan malzemenin kalitesine bağlıdır. Özellikle betonarme ve <a href="/blog/celik-konstruksiyon-rehberi-dayaniklilik-hiz-ve-estetigin-bulustugu-nokta">çelik konstrüksiyon</a>un bir arada kullanıldığı projelerde, betonun içindeki demirin performansı güvenliğin anahtarıdır. Tezel Çelik olarak, inşaat taahhüt projelerimizde kullandığımız nervürlü demir standartlarının, bir binanın ömrünü ve deprem anındaki davranışını nasıl değiştirdiğini inceliyoruz.</p>

<h2>Nervürlü Demir Nedir?</h2>
<p>Geleneksel düz yüzeyli demirlerin aksine, gövdesi üzerinde dişler (çıkıntılar) bulunan inşaat demirine <strong>nervürlü demir</strong> denir. Bu dişli yapı, beton ile demir arasında bir "kenetlenme" (<strong>aderans</strong>) oluşturur. Deprem kuşağında yer alan ülkemizde, düz demir kullanımı riskli kabul edilirken, nervürlü demir kullanımı bir zorunluluktur.</p>

<h2>Yapı Güvenliğinde Nervürlü Demirin Rolü</h2>
<p><strong>Maksimum Kenetlenme (Aderans):</strong> Nervürlü yapı, betonun demiri çok daha sıkı kavramasını sağlar. Bu sayede sarsıntı anında demirin betonun içinden sıyrılma ihtimali ortadan kalkar.</p>

<p><strong>Yüksek Çekme Dayanımı:</strong> Nervürlü demirler, düz demirlere göre çok daha yüksek çekme gerilmelerine dayanabilir. Bu, binanın esneme kapasitesini artırarak ani kırılmaların önüne geçer.</p>

<p><strong>Deprem Performansı:</strong> Modern yönetmeliklere uygun olan <strong>B420C</strong> gibi yüksek süneklik sınıfındaki nervürlü demirler, deprem dalgalarının enerjisini sönümlemek üzere tasarlanmıştır.</p>

<h2>Tezel Çelik Standartları ve Kalite Kontrol</h2>
<p>Fabrikamızda ve taahhüt projelerimizde kullanılan her bir demir çubuğu, sadece birer metal parçası değil, projenin güvenlik sigortasıdır:</p>

<p><strong>Sertifikalı Malzeme:</strong> Sadece TSE ve uluslararası standartlara (ISO) uygun, akma ve çekme testlerinden başarıyla geçmiş nervürlü demirler kullanılır.</p>

<p><strong>Korozyon Koruması:</strong> Şantiye sahasında demirlerin paslanmasını önlemek için depolama ve uygulama süreçleri titizlikle yönetilir.</p>

<p><strong>Doğru Uygulama:</strong> Statik projedeki demir sıklığı ve büküm detayları, uzman mühendislerimizin denetiminde milimetrik hassasiyetle uygulanır.</p>

<h2>Sonuç</h2>
<p>Nervürlü demir, yapının görünmeyen ancak en kritik kahramanıdır. Tezel Çelik olarak, hayata geçirdiğimiz her projede en üst sınıf malzemeleri kullanarak, nesiller boyu güvenle yaşanacak yapılar inşa ediyoruz. Kaliteli malzeme ve doğru mühendislik, geleceği sarsılmaz kılar.</p>`,
    date: "2026-02-19",
    image: nervurDemirImg.src,
  },
  {
    slug: "celige-su-verme-nedir-isil-islemle-maksimum-dayaniklilik",
    title: "Çeliğe Su Verme Nedir? Isıl İşlemle Maksimum Dayanıklılık",
    excerpt:
      "Çelik konstrüksiyon projelerinde ve ağır sanayi imalatlarında malzemenin sadece \"çelik\" olması yetmez; o çeliğin projenin gerektirdiği sertlik ve esneklik dengesine sahip olması gerekir. Metalürjinin en eski ama en etkili tekniklerinden biri olan \"Çeliğe Su Verme\" (Quenching), malzemenin moleküler yapısını değiştirerek ona olağanüstü bir mukavemet kazandırır. [...]",
    metaDescription:
      "Çeliğe su verme (ısıl işlem) süreci nedir? Sertlik ve esneklik dengesi nasıl sağlanır? Tezel Çelik'in üretim standartları hakkında teknik rehber.",
    imageAlt:
      "Çeliğe Su Verme İşlemi - Isıl İşlem - Çelik Sertleştirme - Tezel Çelik",
    content: `Çelik konstrüksiyon projelerinde ve ağır sanayi imalatlarında malzemenin sadece "çelik" olması yetmez; o çeliğin projenin gerektirdiği sertlik ve esneklik dengesine sahip olması gerekir.`,
    contentHtml: `<p>Çelik konstrüksiyon projelerinde ve ağır sanayi imalatlarında malzemenin sadece "çelik" olması yetmez; o çeliğin projenin gerektirdiği sertlik ve esneklik dengesine sahip olması gerekir. Metalürjinin en eski ama en etkili tekniklerinden biri olan <strong>"Çeliğe Su Verme"</strong> (Quenching), malzemenin moleküler yapısını değiştirerek ona olağanüstü bir mukavemet kazandırır. Tezel Çelik olarak, üretim süreçlerimizde malzemenin karakterini belirleyen bu kritik ısıl işlem aşamalarını titizlikle yönetiyoruz.</p>

<h2>Çeliğe Su Verme İşlemi Nasıl Çalışır?</h2>
<p>Teknik olarak çeliğe su verme; metalin belirli bir kritik sıcaklığa (genellikle <strong>800°C - 950°C</strong> arası) kadar ısıtıldıktan sonra, su, yağ veya hava gibi bir ortamda aniden soğutulmasıdır. Bu şok etkisi, çeliğin içindeki atomların yerleşme şeklini değiştirerek <strong>"Martenzit"</strong> adı verilen çok sert ve dayanıklı bir kristal yapı oluşturur.</p>

<h2>Neden Isıl İşlem Yapılır?</h2>
<p><strong>Aşınma Direnci:</strong> Su verilmiş çelik, sürtünme ve darbelere karşı çok daha dirençli hale gelir. Bu durum, özellikle hareketli parçalar ve ağır yük taşıyan bağlantı elemanları için kritiktir.</p>

<p><strong>Yüksek Sertlik (Hardness):</strong> Malzemenin yüzey sertliği artırılarak, dış etkenlere karşı deforme olması engellenir.</p>

<p><strong>Yorulma Dayanımı:</strong> Sürekli yük altında çalışan çelik elemanların "metal yorgunluğu" yaşamasını geciktirerek yapının toplam ömrünü uzatır.</p>

<h2>Kritik Aşama: Menevişleme (Tempering)</h2>
<p>Senior bir mühendislik yaklaşımında çeliğe sadece su vermek yetmez. Su verilen çelik çok sertleşir ama aynı zamanda cam gibi kırılgan hale gelir. Bu kırılganlığı gidermek ve metale ihtiyaç duyduğu tokluğu (esnekliği) geri kazandırmak için <strong>"Menevişleme"</strong> işlemi uygulanır. Metal düşük ısılarda tekrar ısıtılarak iç gerilimleri alınır. Tezel Çelik projelerinde, deprem anında kırılmayan ama yük altında eğilmeyen o mükemmel denge bu süreçlerle kurulur.</p>

<h2>Tezel Çelik Üretim Standartları</h2>
<p>Bizim için her bir profil ve bağlantı elemanı bir mühendislik projesidir. Isıl işlem süreçlerimizde:</p>

<p><strong>Hassas Isı Kontrolü:</strong> Metalin her noktasının eşit ısınması sağlanır.</p>

<p><strong>Kullanım Alanına Göre Özelleştirme:</strong> Projenin ihtiyacına göre (sertlik mi yoksa esneklik mi ön planda?) su verme parametreleri ayarlanır.</p>

<p><strong>Kalite Kontrol:</strong> İşlem sonrası sertlik testleri (Rockwell, Brinell vb.) yapılarak standartlara uygunluk teyit edilir.</p>

<p><em>Tezel Çelik olarak tüm üretim süreçlerimizde uluslararası standartlara (ASTM, EN, ISO) uygun ısıl işlem metodları kullanmaktayız.</em></p>

<h2>Sonuç</h2>
<p>Çeliğe su verme, ham metale bir "ruh" kazandırma işlemidir. Tezel Çelik olarak, bu teknik derinliğimizle inşa ettiğimiz yapıların sadece bugünün değil, geleceğin ağır şartlarına da göğüs germesini sağlıyoruz. Malzemenin dilinden anlıyor, geleceği çelikle güçlendiriyoruz.</p>`,
    date: "2026-02-20",
    image: celikSuVermeImg.src,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatBlogDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
