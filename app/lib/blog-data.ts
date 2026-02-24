import celikKonstruksiyonImg from "@/images/blog_images/celik_konstruksiyon.png";
import insaatTaahhutImg from "@/images/blog_images/insaat_taahhut.png";
import fabrikaHangarImg from "@/images/blog_images/fabrika_hangar.jpeg";
import celikBetonImg from "@/images/blog_images/celik_beton.png";
import celikDepremDayaniklilikImg from "@/images/blog_images/celik_deprem_dayaniklilik.png";
import kumlamaNedirImg from "@/images/blog_images/kumlama_nedir.png";
import nervurDemirImg from "@/images/blog_images/nervur_demir.png";
import celikSuVermeImg from "@/images/blog_images/celik_su_verme.png";
import sismikIzaImg from "@/images/blog_images/sismik_ıza.png";

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
    slug: "celik-binalar-rehberi-depreme-dayanikli-ve-ekonomik-yapi-cozumleri",
    title: "Çelik Binalar Rehberi: Depreme Dayanıklı, Hızlı ve Ekonomik Yapı Çözümleri",
    excerpt:
      "Depreme dayanıklı, hızlı inşa edilen ve uzun ömürlü yapılar mı arıyorsunuz? Çelik binalar; hafif taşıyıcı sistemleri, geniş açıklıkları ve düşük bakım maliyetleriyle modern inşaat dünyasının en avantajlı çözümlerinden biridir. [...]",
    metaDescription:
      "Çelik binalar neden tercih edilmeli? Depreme dayanıklı çelik yapılarla hızlı, ekonomik ve uzun ömürlü projeler için kapsamlı rehber. Çelik bina maliyeti, avantajları ve uygulama alanları.",
    imageAlt:
      "Çelik Binalar - Depreme Dayanıklı Çelik Yapılar - Tezel Çelik",
    content: `Çelik binalar; deprem güvenliği, hızlı montaj süresi ve uzun ömürlü kullanım avantajlarıyla modern yapı projelerinin vazgeçilmez tercihleri arasındadır.`,
    contentHtml: `<p>Türkiye'nin deprem gerçeği ve hızla dönüşen yapı stoğu düşünüldüğünde, <strong>çelik binalar</strong> hem güvenlik hem de hız açısından öne çıkan en akılcı çözümlerden biridir. Geleneksel betonarme sistemlere kıyasla çok daha hafif, esnek ve kontrol edilebilir olan çelik yapılar; endüstriyel tesislerden konut projelerine kadar geniş bir yelpazede tercih edilmektedir. Tezel Çelik olarak, projelerinizi geleceğe güvenle taşıyacak çelik bina çözümlerini mühendislik disiplinimizle birleştiriyoruz.</p>

<h2>Çelik Bina Nedir?</h2>
<p><strong>Çelik bina</strong>; taşıyıcı sistemi tamamen veya büyük oranda çelik profillerden oluşan, deprem ve rüzgar gibi yatay yüklere karşı üstün performans gösteren modern bir yapı türüdür. Kolon, kiriş, makas ve çapraz elemanlar fabrika ortamında hazırlanır, şantiyede sadece montaj yapılır. Bu sayede hem imalat kalitesi artar hem de iş programı netleşir.</p>

<h2>Çelik Binaların Öne Çıkan Avantajları</h2>
<p>Bir yatırımcı veya işveren için doğru yapı sistemini seçmek; maliyet, hız ve güvenlik dengesini doğru kurmak anlamına gelir. Çelik binalar bu dengenin tam merkezinde yer alır:</p>

<h3>1. Üstün Deprem Güvenliği</h3>
<p>Çelik, doğası gereği <strong>sünek</strong> yani esneyebilen bir malzemedir. Deprem anında betonarme gibi kırılmak yerine enerjiyi bünyesinde sönümler ve tekrar eski formuna döner. Ayrıca çelik binalar betonarme eşdeğerlerine göre çok daha hafif olduğu için, yapıya etkiyen deprem yükleri önemli ölçüde azalır. Bu da çelik binaları deprem kuşağında yer alan bölgeler için en güvenli seçenek haline getirir.</p>

<h3>2. Hızlı İnşaat ve Erken Kullanım</h3>
<p>Çelik binalarda üretimin büyük kısmı fabrikada tamamlandığı için, sahada geçirilen süre minimuma iner. Beton dökümü ve priz süresi gibi beklemeler olmadığı için projeleriniz <strong>geleneksel yöntemlere göre %40–50 daha hızlı</strong> tamamlanabilir. Fabrika, depo veya ticari yapınızı ne kadar erken kullanmaya başlarsanız, yatırımınız o kadar hızlı geri döner.</p>

<h3>3. Geniş ve Kolonsuz İç Mekanlar</h3>
<p>Çelik sistemler sayesinde 30–50 metre ve üzeri açıklıkları, araya kolon koymadan geçmek mümkündür. Bu sayede üretim alanları, depolar veya showroomlar daha esnek yerleşim planlarına kavuşur; makine yerleşimi, raf dizaynı veya ofis bölümlendirmesi çok daha verimli yapılabilir.</p>

<h3>4. Hafif Temel ve Düşük Zemin Maliyeti</h3>
<p>Çelik binalar, betonarme yapılara kıyasla çok daha hafif olduğundan temel boyutları küçülür, zemin iyileştirme ihtiyacı çoğu projede azalır. Bu da <strong>toplam maliyette ciddi tasarruf</strong> anlamına gelir. Özellikle zemin koşullarının zayıf olduğu bölgelerde çelik bina, ekonomik bir çözüm sunar.</p>

<h3>5. Sürdürülebilirlik ve Geri Dönüşüm</h3>
<p>Çelik, <strong>%100 geri dönüştürülebilir</strong> bir malzemedir. Yapınız ömrünü tamamladığında, içindeki çelik elemanlar tekrar işlenerek yeni projelerde kullanılabilir. Bu da çelik binaları sadece güvenli değil, aynı zamanda çevre dostu bir çözüm haline getirir.</p>

<h2>Çelik Binalar Nerelerde Kullanılır?</h2>
<p>Tezel Çelik olarak, çok farklı sektörlerde çelik bina çözümleri üretiyoruz:</p>
<ul>
  <li><strong>Fabrika ve üretim tesisleri:</strong> Vinç yolları, ağır makine yükleri ve geniş açıklık gerektiren endüstriyel yapılar.</li>
  <li><strong>Depo ve lojistik merkezleri:</strong> Yüksek raf sistemleri ve geniş iç hacim ihtiyacı olan depolama alanları.</li>
  <li><strong>Showroom ve ticari yapılar:</strong> Prestijli cephe tasarımları ve fleksibl iç mekan çözümleri.</li>
  <li><strong>Çelik konut ve villa projeleri:</strong> Depreme dayanıklı, hafif ve modern yaşam alanları.</li>
</ul>

<h2>Çelik Bina Maliyeti Nasıl Hesaplanır?</h2>
<p>Çelik bina maliyetini değerlendirirken yalnızca ton fiyatına bakmak yanıltıcı olabilir. <strong>Toplam sahip olma maliyeti</strong> dikkate alınmalıdır:</p>
<ul>
  <li>Temel ve zemin iyileştirme giderleri</li>
  <li>Şantiye süresi boyunca oluşan sabit giderler</li>
  <li>Bakım, onarım ve olası güçlendirme maliyetleri</li>
  <li>Yapının erken kullanıma açılmasından doğan gelir avantajı</li>
</ul>
<p>Çelik binalar; kısa inşaat süresi, hafif temel ihtiyacı ve uzun ömürlü kullanım avantajı sayesinde, orta–uzun vadede çoğu zaman betonarmeye göre daha ekonomik bir çözüm sunar.</p>

<h2>Tezel Çelik ile Çelik Bina Tasarımı</h2>
<p>Projelerinize sadece taşıyıcı sistem değil, uçtan uca bir <strong>mühendislik hizmeti</strong> sunuyoruz. Keşif ve ihtiyaç analizinden statik projelendirmeye, imalat ve montaj süreçlerine kadar her adımı Tezel Çelik güvencesiyle yönetiyoruz. Bölgenizin deprem, rüzgar ve kar yüklerine uygun olarak hesaplanan çelik binalarınız için modern yazılımlarla statik analizler yapıyor; sahada ise deneyimli montaj ekiplerimizle uygulamayı gerçekleştiriyoruz.</p>

<h2>Sonuç: Geleceğe Çelik Gibi Yatırım</h2>
<p>Depreme dayanıklı, hızlı inşa edilen ve uzun ömürlü bir yapı arıyorsanız, çelik binalar en mantıklı tercihtir. Tezel Çelik olarak, fabrika, depo, ticari yapı veya konut projelerinizde çeliğin tüm avantajlarını maksimum verimle kullanabileceğiniz çözümler üretiyoruz. Projeniz için çelik bina alternatifi düşünüyorsanız, <strong>ücretsiz ön fizibilite ve keşif</strong> çalışması için <a href="/contact" style="color: #FF5A3C; font-weight: 600; text-decoration: none;">bizimle iletişime geçebilirsiniz.</a></p>`,
    date: "2026-02-24",
    image: celikDepremDayaniklilikImg.src,
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

<p><strong>Kumlama ve Boya:</strong> Çeliği korozyona karşı koruyan, ömrünü uzatan özel yüzey işlemlerini standart olarak uygularız. Projelerinize uygun yüzey hazırlığı ve boya sistemleri için ekibimizden teknik danışmanlık alabilirsiniz.</p>

<p><strong>Sertifikalı Kaynak İşçiliği:</strong> Tüm birleşim noktaları, uluslararası sertifikalı kaynak operatörlerimiz tarafından titizlikle işlenir.</p>

<h2>Sonuç</h2>
<p>Çelik konstrüksiyon, sadece bir yapı sistemi değil; güvenli, ekonomik ve estetik bir geleceğin inşasıdır. Endüstriyel yatırımlarınızda veya hayalinizdeki konut projesinde çeliğin gücünü tercih ederek, nesiller boyu ayakta kalacak yapılar oluşturabilirsiniz.</p>

<p><strong>Sizin de bir çelik yapı projeniz mi var? Ücretsiz keşif ve statik analiz için profesyonel ekibimizle <a href="/contact" style="color: #FF5A3C; text-decoration: none;">iletişime geçin.</a></strong></p>`,
    date: "2026-02-20",
    image: celikKonstruksiyonImg.src,
  },
  {
    slug: "genis-aciklikli-celik-catilar-verimlilik-ve-estetik",
    title:
      "Geniş Açıklı Çatılarda Çelik Çözümleri: Verimlilik ve Estetik Bir Arada",
    excerpt:
      "Endüstriyel tesislerden spor salonlarına, depolardan hangarlara kadar geniş açıklıklı alanlar için en güvenli ve ekonomik çözüm çelik çatılardır. Kolonsuz büyük açıklıklar, maksimum kullanım alanı ve modern mimari estetiği bir araya getirir.",
    metaDescription:
      "Geniş açıklıklı çelik çatılar ile fabrikanız, deponuz veya spor salonunuz için kolonsuz, güvenli ve ekonomik çözümler. Uzay kafes sistemler, çelik makaslar ve endüstriyel çatı çözümleri Tezel Çelik güvencesiyle.",
    imageAlt: "Tezel Çelik Geniş Açıklıklı Çatı Uygulaması",
    content: `Geniş açıklıklı çelik çatılar; kolonsuz büyük alanlar, yüksek deprem güvenliği ve modern mimari görünüm sunarak endüstriyel tesisler, depolar, spor salonları ve hangarlar için en ideal çözümlerden biridir.`,
    contentHtml: `<p>Endüstriyel tesislerden spor salonlarına, hangarlardan modern depo alanlarına kadar günümüz mimarisinin en büyük ihtiyaçlarından biri <strong>geniş açıklıklı alanlar</strong>dır. İçeride kolon desteği olmadan büyük alanları kapatabilmek, hem operasyonel özgürlük hem de görsel ferahlık sağlar. Bu noktada en güvenilir çözüm ortağı olarak <strong>çelik konstrüksiyon çatı sistemleri</strong> öne çıkar.</p>

<p>Peki, geniş açıklıklı çatılarda neden çelik tercih edilmelidir? Aşağıda bu sorunun teknik ve mimari açıdan yanıtlarını bulabilirsiniz.</p>

<h2>1. Neden Geniş Açıklıklı Çatılar?</h2>
<p>Geleneksel betonarme yapılarla çok geniş alanları kolonsuz geçmek, hem maliyetli hem de statik açıdan oldukça zordur. <strong>Geniş açıklıklı çelik çatı</strong> sistemleri ise hafifliği ve yüksek taşıma kapasitesi sayesinde 30, 60 ve hatta 100 metreyi aşan açıklıkların güvenle geçilmesine olanak tanır.</p>

<ul>
  <li><strong>Maksimum kullanım alanı:</strong> İç mekânda kolon olmaması; forklift trafiği, raf sistemleri, makine yerleşimi veya saha organizasyonu için hiçbir engel oluşturmaz.</li>
  <li><strong>Esneklik:</strong> Çelik konstrüksiyon, ihtiyaca göre modüler ve gelecekte büyütülebilir bir yapı sunar.</li>
</ul>

<h2>2. Kullanılan Başlıca Çelik Çatı Sistemleri</h2>
<p>Geniş açıklıkları güvenle geçmek için projenin türüne ve mimari beklentilere göre farklı çelik çatı sistemleri tercih edilir:</p>

<h3>Uzay kafes sistemler</h3>
<p>Üç boyutlu geometrik yapısıyla yükü her yöne eşit dağıtan <strong>uzay kafes sistemler</strong>, hem hafif hem de son derece dayanıklıdır. Estetik görünümleri sayesinde stadyum, terminal, AVM ve temsil yapılarında sıkça kullanılır.</p>

<h3>Çelik makas sistemleri (Truss systems)</h3>
<p>Daha klasik ve ekonomik bir çözüm arayan projelerde <strong>çelik makas sistemleri</strong> (truss) öne çıkar. Fabrika, depo ve sanayi yapılarında en yaygın kullanılan yöntemdir. Doğru statik hesaplarla tasarlandığında hem uzun açıklıklar hem de vinç yükleri güvenle taşınabilir.</p>

<h3>Tonoz ve kavisli çatılar</h3>
<p><strong>Tonoz çatılar</strong> ve kavisli çelik çatı sistemleri, geniş hacimli iç mekânlar ve yüksek tavan isteyen projeler için idealdir. Kar ve rüzgar yüküne karşı yüksek mukavemet sağlarken, yapıya güçlü bir mimari karakter kazandırır.</p>

<h2>3. Avantajları: Neden Çelik?</h2>
<p>Çelik, sadece bir taşıyıcı malzeme değil, aynı zamanda projeniz için uzun vadeli bir yatırımdır.</p>

<ul>
  <li><strong>Hızlı montaj:</strong> Çelik elemanlar fabrika ortamında milimetrik hassasiyetle hazırlanır, sahada sadece montaj yapılır. Bu sayede inşaat süresi kısalır, operasyonlarınızı daha erken başlatabilirsiniz.</li>
  <li><strong>Hafiflik ve deprem güvenliği:</strong> Çelik yapılar betonarmeye göre çok daha hafiftir. Daha düşük bina ağırlığı, deprem sırasında yapıya etkiyen dinamik yükleri azaltır ve deprem performansını artırır.</li>
  <li><strong>Geri dönüştürülebilirlik:</strong> Çelik, %100 geri dönüştürülebilir bir malzemedir. Ömrünü tamamlayan yapılardan çıkan çelik elemanlar yeniden değerlendirilerek çevre dostu bir döngü oluşturur.</li>
  <li><strong>Korozyon direnci:</strong> Modern yüzey hazırlama (kumlama) ve boya/galvaniz uygulamaları sayesinde çelik çatılar dış etkenlere karşı on yıllarca dayanabilir.</li>
  </ul>

<h2>4. Tezel Çelik ile Profesyonel Çözümler</h2>
<p>Geniş açıklıklı bir çatı projesi; sadece malzeme kalitesi değil, aynı zamanda hassas bir <strong>mühendislik hesabı</strong> gerektirir. Kar yükü, rüzgar hızı ve bölgenin sismik verileri dikkate alınmadan tasarlanan hiçbir sistem uzun ömürlü olamaz.</p>

<p>Tezel Çelik olarak, her projede;</p>
<ul>
  <li>Bölgenize özel kar, rüzgar ve deprem yükü analizleri yapıyoruz.</li>
  <li>Uzay kafes, çelik makas veya tonoz sistemler arasından projenize en uygun çözümü birlikte belirliyoruz.</li>
  <li>Statik projelendirme, fabrika imalatı ve saha montaj süreçlerini uçtan uca yönetiyoruz.</li>
</ul>

<p>Fabrika, depo, spor salonu veya hangar projeniz için <strong>geniş açıklıklı çelik çatı</strong> çözümlerini değerlendiriyorsanız, Tezel Çelik mühendislik ekibiyle <a href="/contact" style="color: #FF5A3C; font-weight: 600; text-decoration: none;">iletişime geçerek ücretsiz ön görüşme ve keşif talep edebilirsiniz.</a></p>`,
    date: "2026-02-24",
    image: fabrikaHangarImg.src,
  },
  {
    slug: "celik-arakat-ve-platform-sistemleri-ile-alan-yonetimi",
    title:
      "İşletmenizde Yer Açın: Çelik Arakat ve Platform Sistemleri ile Alanınızı İkiye Katlayın",
    excerpt:
      "Depo veya üretim tesisinizde tavan yüksekliğiniz var ama zemin alanınız yetersiz mi? Çelik arakat ve endüstriyel platform sistemleriyle mevcut binanızın hacmini dikeyde büyüterek, yeni bina yatırımına girmeden alanınızı verimli ve güvenli şekilde ikiye katlayabilirsiniz.",
    metaDescription:
      "Çelik arakat (asma kat) ve endüstriyel platform sistemleri ile fabrikanızda veya deponuzda alanı verimli kullanın. Taşınabilir çelik arakat çözümleri, makine platformları ve lojistik platformlar Tezel Çelik mühendisliğiyle.",
    imageAlt:
      "Tezel Çelik Çelik Arakat ve Endüstriyel Platform Uygulaması",
    content: `Çelik arakat ve endüstriyel platform sistemleri; tavan yüksekliği olan ancak zemin alanı yetersiz kalan işletmelerde, mevcut hacmi dikeyde büyütmenin en pratik ve ekonomik yoludur.`,
    contentHtml: `<p>Bir depo veya üretim tesisinde en büyük maliyet kalemlerinden biri, alanı verimli kullanamamaktır. Eğer tavan yüksekliğiniz varsa ancak zemin alanınız yetersiz geliyorsa, yeni bir bina kiralamak veya inşa etmek yerine mevcut hacminizi dikeyde büyütmek en mantıklı çözümdür. İşte tam bu noktada <strong>çelik arakat (asma kat)</strong> ve <strong>endüstriyel platform</strong> sistemleri devreye girer.</p>

<h2>Çelik Arakat (Asma Kat) Nedir?</h2>
<p>Çelik asma katlar, mevcut bir yapının tavan yüksekliğini kullanarak oluşturulan, ana taşıyıcı sistemi çelikten imal edilen ara katlardır. Betonarme yapılara kıyasla çok daha hafif olan bu sistemler, binanın statiğini bozmadan ekstra kullanım alanı yaratır.</p>

<p><strong>Neden çelik arakat tercih edilmeli?</strong></p>
<ul>
  <li><strong>Genellikle inşaat ruhsatı gerektirmez:</strong> Çoğu arakat sistemi taşınabilir (demonte) yapıda tasarlandığı için kalıcı betonarme eklentiler gibi ağır prosedürlere tabi değildir.</li>
  <li><strong>Hızlı kurulum:</strong> Tüm parçalar fabrikada önceden hazırlanır ve sahada sadece montaj yapılır. Böylece işletmenizin üretimi durmadan alan kazanabilirsiniz.</li>
  <li><strong>Esnek tasarım:</strong> İhtiyaca göre ofis, depo alanı veya showroom olarak düzenlenebilir; ileride sökülüp başka bir alana taşınabilir.</li>
</ul>

<h2>Endüstriyel Platformların Kullanım Alanları</h2>
<p>Çelik platformlar yalnızca kat çıkmak için değil, ağır makinelerin yerleşimi veya lojistik akışın yönetimi için de kritik rol oynar.</p>
<ul>
  <li><strong>Makine platformları:</strong> Ağır sanayi cihazlarının yerden yükseltilerek daha güvenli ve erişilebilir bir şekilde çalışmasını sağlar; bakım süreçlerini kolaylaştırır.</li>
  <li><strong>Yükleme ve lojistik platformları:</strong> Depo içi trafiği düzenlemek, yükleme-boşaltma operasyonlarını hızlandırmak ve sevkiyat süreçlerini optimize etmek için kullanılır.</li>
  <li><strong>Bakım ve yürüyüş yolları:</strong> Yüksekte bulunan tesisat veya makinelere güvenli erişim imkânı sunar; korkuluk ve kaymaz zeminlerle iş güvenliğini destekler.</li>
</ul>

<h2>Güvenlik ve Mukavemet: Tezel Çelik Farkı</h2>
<p>Arakat ve platform sistemlerinde en kritik nokta, yapılacak alanın <strong>statik hesaplarıdır</strong>. Kat üzerine binecek hareketli ve sabit yüklerin metrekare başına kaç kilogram olacağı titizlikle hesaplanmalıdır.</p>
<ul>
  <li><strong>Yüksek taşıma kapasitesi:</strong> Tezel Çelik olarak, ağır tonajlı yüklerden hassas ofis alanlarına kadar her ihtiyaca uygun profil seçimi ve kesit tasarımı yapıyoruz.</li>
  <li><strong>İSG uyumluluğu:</strong> Korkuluk sistemleri, kaymaz zemin seçenekleri ve ergonomik merdiven tasarımları ile İş Sağlığı ve Güvenliği standartlarını eksiksiz karşılıyoruz.</li>
  <li><strong>Korozyona karşı koruma:</strong> Galvaniz veya özel endüstriyel boya uygulamalarıyla platformlarınızı nem ve dış etkenlere karşı uzun yıllar koruyoruz.</li>
</ul>

<h2>Yatırımın Geri Dönüşü (ROI)</h2>
<p>Yeni bir arazi alıp bina inşa etmek yerine, çelik arakat ile mevcut alanınızı önemli ölçüde artırmak; kira, inşaat ve zaman maliyetlerinizi ciddi oranda düşürür. Bu, özellikle sanayi bölgelerinde metrekare maliyetlerinin yüksek olduğu durumlarda, işletmeler için en akıllıca yatırım kararlarından biridir.</p>

<p>Depo, fabrika veya lojistik tesisinizde alanı daha verimli kullanmak, üretimi aksatmadan ilave metrekare kazanmak istiyorsanız; Tezel Çelik'in <strong>çelik arakat ve endüstriyel platform çözümleri</strong> ile tanışın. Projeniz için ücretsiz keşif ve projelendirme desteği almak üzere <a href="/contact" style="color: #FF5A3C; font-weight: 600; text-decoration: none;">bizimle iletişime geçebilirsiniz.</a></p>`,
    date: "2026-02-24",
    image: insaatTaahhutImg.src,
  },
  {
    slug: "asansor-bolme-celikleri-ve-tasiyici-sistemler-guvenli-dikey-tasimacilik",
    title:
      "Asansör Bölme Çelikleri ve Taşıyıcı Sistemler: Güvenli Dikey Taşımacılık",
    excerpt:
      "Asansörler modern yapıların can damarıdır. Ancak sessiz, sarsıntısız ve güvenli bir dikey taşımacılık için asansör kuyusu içindeki çelik bölme ve taşıyıcı sistemlerin, ray konsollarından bölme kirişlerine kadar, kusursuz bir mühendislikle tasarlanıp uygulanması gerekir.",
    metaDescription:
      "Asansör bölme çelikleri ve taşıyıcı sistemler ile güvenli dikey taşımacılık. Asansör kuyu içi çelik karkas, ray taşıyıcı konsollar, çelik asansör kulesi imalatı ve EN 81-20/50 standartlarına uygun çözümler.",
    imageAlt:
      "Çelik Asansör Kulesi ve Asansör Kuyu İçi Çelik Taşıyıcı Sistem",
    content: `Asansörler, modern yapıların can damarıdır. Ancak bir asansörün sessiz, sarsıntısız ve güvenli çalışması için asansör kuyusu içerisindeki çelik bölme ve taşıyıcı sistemlerin kusursuz bir mühendislikle tasarlanmış olması gerekir.`,
    contentHtml: `<p>Asansörler, modern yapıların can damarıdır. Özellikle çok katlı konut, ofis ve AVM projelerinde, kullanıcı konforu kadar güvenlik de doğrudan asansör sisteminin kalitesiyle ilişkilidir. Ancak bir asansörün sessiz, sarsıntısız ve en önemlisi güvenli çalışması için; asansör kuyusu içerisindeki <strong>çelik bölme</strong> ve <strong>taşıyıcı sistemlerin</strong> kusursuz bir mühendislikle tasarlanmış olması gerekir. Tezel Çelik olarak, asansör ray taşıyıcılarından bölme kirişlerine ve tam çelik asansör kulelerine kadar tüm konstrüksiyon süreçlerinde yüksek hassasiyetle çözümler sunuyoruz.</p>

<h2>Asansör Bölme Çeliği Nedir, Neden Gereklidir?</h2>
<p>Özellikle birden fazla asansörün aynı kuyu (şaft) içerisinde çalıştığı projelerde, her bir asansörün çalışma alanını birbirinden ayırmak hayati önem taşır.</p>
<ul>
  <li><strong>Güvenlik separasyonu:</strong> Kuyu içinde bakım yapılırken diğer asansörün güvenli şekilde çalışmaya devam etmesine imkân tanır ve bakım personelini korur.</li>
  <li><strong>Ray taşıyıcı desteği:</strong> Asansör raylarının monte edileceği ana çelik karkası oluşturarak, rayların zamanla oynamasını ve hizadan kaçmasını engeller.</li>
  <li><strong>Yapısal rijitlik:</strong> Kuyu içerisindeki vibrasyonu absorbe ederek, binaya iletilen yükü dengeler ve yolcu konforunu artırır.</li>
</ul>

<h2>Asansör Taşıyıcı Konstrüksiyon Türleri</h2>
<p>Projenin mimari yapısına, taşıyıcı sistemine ve kullanım amacına göre iki ana yaklaşım öne çıkar:</p>

<h3>Kuyu içi çelik karkas (betonarme kuyular için)</h3>
<p>Betonarme bir asansör kuyusu mevcutsa, rayların sabitleneceği çelik kuşaklar ve bölme kirişleri kuyu içerisine ankrajlanır. Bu sistemde <strong>UPE</strong>, <strong>IPE</strong> veya kutu profiller kullanılarak yüksek dayanım ve rijitlik sağlanır. Böylece hem mevcut betonarme yapının yükü kontrollü şekilde çeliğe aktarılır hem de asansör montaj ekibi için güvenli bir çalışma altyapısı oluşturulur.</p>

<h3>Tam çelik asansör kulesi (panoramik ve dış cephe çözümleri)</h3>
<p>Eğer binada hazır bir betonarme kuyu yoksa veya dış cephede panoramik cam asansör planlanıyorsa, asansörün tüm yükünü taşıyan bağımsız bir <strong>çelik asansör kulesi</strong> inşa edilir. Bu sistemlerde hem mukavemet hem de estetik tasarım birlikte ele alınır; çelik taşıyıcılar cam cephelerle birleşerek yapının mimari değerini artırır.</p>

<h2>Mühendislikte Hassasiyet: Tolerans ve Montaj</h2>
<p>Asansör sistemlerinde hataya yer yoktur. Milimetrik sapmalar bile asansörün sarsıntılı çalışmasına, raylarda aşınmaya veya konfor kaybına neden olabilir.</p>
<ul>
  <li><strong>Lazerli ölçüm:</strong> Montaj sırasında ray eksenlerinin birbirine ve kuyunun geometrisine tam paralel olması için lazerli ölçüm cihazları kullanılır.</li>
  <li><strong>Vibrasyon sönümleme:</strong> Çelik bağlantı noktalarında kullanılan özel detaylar ile metalin metale sürtünme sesi ve titreşimi minimize edilir, yolcu kabininde sessiz bir sürüş sağlanır.</li>
  <li><strong>Korozyon koruması:</strong> Kuyu içerisindeki nemli ortama karşı tüm çelik aksamlar antipas boya veya galvaniz kaplama ile korunur; bu sayede sistem uzun yıllar güvenle hizmet verir.</li>
</ul>

<h2>Tezel Çelik ile Standartlara Uygun Asansör Çözümleri</h2>
<p>Asansör bölme çelikleri ve taşıyıcı sistemlerimiz, güncel asansör yönetmeliklerine (örneğin <strong>EN 81-20/50</strong>) tam uyumlu olarak projelendirilir ve üretilir. Proje aşamasından montaja kadar her adımda, asansör montaj ekibinin işini kolaylaştıracak ve son kullanıcının güvenliğini garanti altına alacak çözümler geliştiriyoruz.</p>

<p>Yeni inşaat projelerinizde ya da asansör revizyon çalışmalarınızda; kuyu içi çelik karkas, ray taşıyıcı konsolları veya dış cephe çelik asansör kuleleri için statik hesaplamalı, belgeli ve uzun ömürlü çelik çözümler sunuyoruz. <strong>Asansör revizyon projeleriniz veya yeni inşaatlarınız için statik hesaplamalı çelik çözümler</strong> arıyorsanız, <a href="/contact" style="color: #FF5A3C; font-weight: 600; text-decoration: none;">projenizi bize ileterek kısa sürede teklif ve mühendislik desteği alabilirsiniz.</a></p>`,
    date: "2026-02-24",
    image: celikKonstruksiyonImg.src,
  },
  {
    slug: "giris-sacagi-ve-kanopi-sistemleri-estetik-ve-koruma",
    title: "Giriş Saçağı ve Kanopi Sistemleri: Yapılarınıza Estetik ve Koruma Katın",
    excerpt:
      "Bir binanın ilk izlenimi girişinde başlar ve bu ilk temas çoğu zaman saniyeler içinde şekillenir. Giriş saçakları ve kanopi sistemleri, sadece yağmurdan veya güneşten korunmak için yapılan basit eklemeler değil; yapıların cephesine karakter, derinlik ve prestij kazandıran mimari dokunuşlardır. [...]",
    metaDescription:
      "Çelik kanopi ve giriş saçağı sistemleri ile binalarınıza estetik ve koruma katın. Cam kanopi, askılı saçak, kolon destekli kanopi ve modern çelik sundurma çözümleri Tezel Çelik mühendisliğiyle.",
    imageAlt:
      "Tezel Çelik Çelik Kanopi ve Giriş Saçağı Uygulaması",
    content: `Giriş saçakları ve kanopi sistemleri; binaların yağmur, güneş ve rüzgâra karşı korunmasını sağlarken, aynı zamanda yapının mimari kimliğini güçlendiren en önemli çelik çözümlerden biridir.`,
    contentHtml: `<p>Bir binanın ilk izlenimi girişinde başlar ve bu ilk temas çoğu zaman saniyeler içinde şekillenir. <strong>Giriş saçakları ve kanopi sistemleri</strong>, sadece yağmurdan veya güneşten korunmak için yapılan basit eklemeler değil; yapıların cephesine karakter, derinlik ve prestij kazandıran mimari dokunuşlardır. Çeliğin zarafeti ve dayanıklılığı ile birleşen modern kanopi çözümleri, otel girişlerinden kurumsal plaza ve AVM’lere, villa girişlerinden endüstriyel tesislere kadar pek çok yapıda hem fonksiyonel hem de estetik bir karşılama alanı oluşturur. Doğru tasarlanmış bir çelik kanopi, bina girişini günün her saatinde konforlu, güvenli ve dikkat çekici hale getirerek, markanızın algısını güçlendirir ve yapı bütünlüğünü tamamlayan önemli bir mimari unsur görevi görür.</p>

<h2>Giriş Saçağı (Canopy) Nedir?</h2>
<p>Giriş saçağı; bina girişlerinin üzerine yerleştirilen, kolon destekli veya askılı sistemlerle taşınan koruyucu örtülerdir. Genellikle otel girişlerinde, hastanelerde, iş merkezlerinde ve villa girişlerinde hem prestij hem de konfor sağlamak amacıyla tercih edilir. Doğru tasarlanmış bir çelik canopy, misafirlerinizi daha kapıdan içeri girmeden etkilemenizi sağlar.</p>

<h2>Çelik Kanopi ve Saçak Sistemlerinde Avantajlar</h2>
<p>Neden betonarme veya hafif malzemeler yerine <strong>çelik kanopi sistemleri</strong> tercih edilmelidir?</p>
<ul>
  <li><strong>Zarif tasarım:</strong> Çelik, yüksek taşıma kapasitesi sayesinde ince kesitlerle geniş alanları geçmeye olanak tanır. Bu da kaba görünmeyen, hafif ve estetik giriş saçağı tasarımları demektir.</li>
  <li><strong>Hızlı uygulama:</strong> Kanopi iskeleti fabrikada hazırlanır, sahada kısa sürede monte edilir. Böylece binanın günlük işleyişi minimum kesintiyle devam eder.</li>
  <li><strong>Farklı kaplama seçenekleri:</strong> Çelik gövde üzerine cam, polikarbon, kompozit panel veya tonoz çatı gibi pek çok farklı kaplama malzemesi uygulanabilir.</li>
  <li><strong>Uzun ömür ve dayanıklılık:</strong> Paslanmaz çelik veya endüstriyel boyalı sistemler, dış mekân koşullarına (kar yükü, rüzgâr, yağmur ve UV ışınları) karşı yıllarca direnç gösterir.</li>
</ul>

<h2>Kullanım Alanlarına Göre Kanopi Türleri</h2>
<p>Tezel Çelik olarak, farklı yapı tipleri ve ihtiyaçlar için özelleştirilmiş <strong>çelik kanopi sistemleri</strong> tasarlıyoruz:</p>
<ul>
  <li><strong>Askılı (gergi) saçaklar:</strong> Alttan kolon desteği olmadan, binanın cephesine çelik halat veya kollarla tutturulan modern ve minimalist sistemlerdir. Ofis ve rezidans girişlerinde sıkça tercih edilir.</li>
  <li><strong>Kolon destekli kanopiler:</strong> Özellikle akaryakıt istasyonları, fabrika sevkiyat alanları veya büyük otel girişleri için kullanılan, yüksek taşıma kapasiteli ve geniş açıklıklı yapılardır.</li>
  <li><strong>Dekoratif cam kanopiler:</strong> Cam ve çeliğin birlikteliğiyle şeffaflığı ve şıklığı ön plana çıkaran bu çözümler, kurumsal binalar ve modern ticari yapılar için idealdir.</li>
</ul>

<h2>Tezel Çelik ile Mühendislik ve Tasarım Uyumu</h2>
<p>Bir giriş saçağı sadece güzel görünmemeli, aynı zamanda güvenli olmalıdır. Bu nedenle her projede, bölgenin rüzgâr ve kar yükü verilerini dikkate alarak detaylı <strong>statik hesaplama</strong> yapıyoruz.</p>
<ul>
  <li><strong>Statik optimizasyon:</strong> Çelik profillerin kesitleri ve bağlantı detayları, taşıyacağı yüklere göre hesaplanır; gereksiz malzeme kullanımının önüne geçilir.</li>
  <li><strong>Su tahliye sistemleri:</strong> Tasarıma entegre edilen gizli dere ve oluk sistemleri ile yağmur suyunun bina girişine akması engellenir; kullanıcı konforu ve cephe temizliği korunur.</li>
  <li><strong>Montaj hassasiyeti:</strong> Mevcut yapıya zarar vermeden, cephe kaplamaları ve taşıyıcı sistemle uyum içinde profesyonel montaj yapıyoruz.</li>
</ul>

<h2>Geniş Açıklıklı Çelik Çatılarla Birlikte Kullanım</h2>
<p>Giriş saçakları ve kanopiler, özellikle <a href="/blog/genis-aciklikli-celik-catilar-verimlilik-ve-estetik">geniş açıklıklı çelik çatı</a> çözümleriyle birlikte düşünüldüğünde, hem işlevsel hem de mimari bütünlük sağlar. Fabrika, depo veya ticari binalarda ana çatı ile giriş kanopisinin aynı çelik konstrüksiyon mantığıyla tasarlanması, bakım ve işletme maliyetlerinde önemli avantajlar sunar.</p>

<h2>Sonuç: İlk İzlenimi Çelikle Güçlendirin</h2>
<p>Modern, güvenli ve estetik bir giriş tasarlamak istiyorsanız, çelik giriş saçağı ve kanopi sistemleri en doğru seçimdir. Tezel Çelik olarak; tasarım, statik projelendirme, imalat ve montaj süreçlerinin tamamını tek elden yöneterek, yapınıza değer katan çözümler sunuyoruz. Projenize özel <strong>çelik kanopi ve giriş saçağı</strong> alternatifi için <a href="/contact" style="color: #FF5A3C; font-weight: 600; text-decoration: none;">bizimle iletişime geçebilir, ücretsiz ön görüşme ve keşif talebinde bulunabilirsiniz.</a></p>`,
    date: "2026-02-24",
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

<p>Çelik binaların deprem performansı ve yatırım avantajları hakkında daha fazla bilgi için <a href="/blog/celik-binalar-rehberi-depreme-dayanikli-ve-ekonomik-yapi-cozumleri">Çelik Binalar Rehberi</a> yazımızı inceleyebilirsiniz.</p>

<h2>Sonuç</h2>
<p>Depremle yaşamayı öğrenmek, binalarımızı çeliğin sarsılmaz gücüyle inşa etmekten geçer. Tezel Çelik olarak, hayata geçirdiğimiz her fabrikada, her hangarda ve her konutta; mühendisliğin verdiği bu güveni müşterilerimize taahhüt ediyoruz. Çelik yapı, geleceğe atılan en sağlam imzadır.</p>`,
    date: "2026-02-17",
    image: celikDepremDayaniklilikImg.src,
  },
  {
    slug: "celik-yaya-gecis-kopru-projeleri-sehirleri-baglayan-estetik",
    title: "Şehirleri Bağlayan Estetik: Çelik Yaya Geçiş Köprüleri",
    excerpt:
      "Yoğun trafikli yollarda, demiryolu ve nehir gibi engeller üzerinde güvenli ve kesintisiz yaya ulaşımı sağlamak için çelik yaya geçiş köprüleri en ideal çözümdür. Dayanıklılık, hafiflik ve mimari estetik bu yapılarda bir araya gelir.",
    metaDescription:
      "Çelik yaya üst geçit ve yaya köprüsü projeleri ile şehir içi ulaşımı güvenli hale getirin. Çelik konstrüksiyon yaya köprüsü imalatı, üst geçit modelleri ve modern tasarım çözümleri Tezel Çelik güvencesiyle.",
    imageAlt: "Gece Aydınlatmalı Çelik Yaya Geçiş Köprüsü - Tezel Çelik Projesi",
    content: `Giderek hızlanan şehir hayatında, yaya güvenliğini sağlamak ve ulaşımı kesintisiz hale getirmek modern şehirciliğin en önemli önceliklerinden biridir. Yoğun trafik akışının olduğu yollarda veya nehir, demiryolu gibi doğal ve yapay engellerin üzerinden güvenli geçiş imkanı sunan çelik yaya köprüleri, dayanıklılığı ve mimari esnekliği ile en ideal çözümler arasındadır.`,
    contentHtml: `<p>Giderek hızlanan şehir hayatında, yaya güvenliğini sağlamak ve ulaşımı kesintisiz hale getirmek modern şehirciliğin en önemli önceliklerinden biridir. Yoğun trafik akışının olduğu yollarda veya nehir, demiryolu gibi doğal/yapay engellerin üzerinden güvenli geçiş imkânı sunan <strong>çelik yaya geçiş köprüleri</strong>, hem dayanıklılığı hem de mimari esnekliği ile en ideal çözümdür. Tezel Çelik olarak, sadece iki noktayı birbirine bağlamıyor; emniyetli, uzun ömürlü ve estetik yaya köprüleri inşa ediyoruz.</p>

<h2>Neden Çelik Yaya Köprüsü?</h2>
<p>Yaya köprülerinde <strong>çelik konstrüksiyon</strong> tercih edilmesinin pek çok kritik sebebi vardır:</p>
<ul>
  <li><strong>Geniş açıklık kabiliyeti:</strong> Çelik, yüksek mukavemeti sayesinde çok uzun mesafeleri minimum ara destekle geçebilir. Bu, altındaki trafik akışını bozmadan geniş yolların, demiryollarının veya vadilerin üzerine köprü inşa etmeyi sağlar.</li>
  <li><strong>Hızlı ve modüler montaj:</strong> Köprü bileşenleri fabrikada üretilir, şantiyede sadece montaj yapılır. Böylece yol kapatma süreleri minimuma iner, şehir trafiği aksamadan projeler tamamlanır.</li>
  <li><strong>Hafiflik:</strong> Betonarme köprülere göre çok daha hafif olan çelik yapılar, zemin iyileştirme maliyetlerini düşürür ve deprem yüklerine karşı daha avantajlıdır.</li>
</ul>

<h2>Tasarımda Fonksiyonellik ve Estetik</h2>
<p>Bir yaya köprüsü yalnızca bir geçiş yolu değil, aynı zamanda bulunduğu bölgenin simgesi olabilir.</p>
<ul>
  <li><strong>Engelsiz erişim:</strong> Tasarımlarımızda engelli, yaşlı ve bebek arabası kullanan vatandaşların konforu için asansör ve rampa sistemlerini standartlara uygun şekilde entegre ediyoruz.</li>
  <li><strong>Görsel çeşitlilik:</strong> Kafes sistem (truss), kemerli yapılar veya modern gergili (cable-stayed) sistemlerle çevrenin mimari dokusuna uyumlu, güçlü bir siluet oluşturan çözümler sunuyoruz.</li>
  <li><strong>Zemin seçenekleri:</strong> Kaymaz özellikli metal ızgaralar, epoksi kaplamalar veya ahşap detaylarla yürüyüş konforunu ve estetiği bir araya getiriyoruz.</li>
</ul>

<h2>Mühendislik ve Güvenlik Standartları</h2>
<p>Yaya köprüleri kendi ağırlıklarının yanı sıra rüzgâr yükü, kar yükü ve yoğun insan trafiğinin oluşturduğu dinamik yükleri de güvenle taşımak zorundadır.</p>
<ul>
  <li><strong>Vibrasyon analizi:</strong> Çelik köprülerde yayaların yürümesiyle oluşabilecek sallantıları kontrol altına almak için hassas statik ve dinamik analizler yapıyoruz.</li>
  <li><strong>Korozyon koruması:</strong> Dış mekâna açık olan bu yapıları sıcak daldırma galvaniz, epoksi boya veya özel koruyucu kaplamalarla paslanmaya karşı uzun ömürlü hale getiriyoruz.</li>
  <li><strong>Aydınlatma entegrasyonu:</strong> Gece güvenliğini sağlamak için estetik ve enerji verimli LED aydınlatma sistemlerini tasarıma dahil ediyoruz.</li>
</ul>

<h2>Tezel Çelik ile Güvenli Geçişler</h2>
<p>Projelendirmeden montaja kadar her aşamada uluslararası standartlara bağlı kalarak; belediyeler, organize sanayi bölgeleri ve özel projeler için anahtar teslim <strong>çelik yaya üst geçit</strong> çözümleri üretiyoruz. Üst geçitlerimizde kullanılan asansör ve taşıyıcı sistemler hakkında daha fazla bilgi için <a href="/blog/asansor-bolme-celikleri-ve-tasiyici-sistemler-guvenli-dikey-tasimacilik">Asansör Bölme Çelikleri</a> yazımıza da göz atabilirsiniz. Detaylı bilgi ve teklif için <a href="/contact" style="color: #FF5A3C; font-weight: 600; text-decoration: none;">bizimle iletişime geçebilirsiniz.</a></p>`,
    date: "2026-02-24",
    image: sismikIzaImg.src,
  },
  {
    slug: "celik-merdiven-sistemleri-dayaniklilik-guvenlik-ve-modern-tasarim",
    title:
      "Çelik Merdiven Sistemleri: Dayanıklılık, Güvenlik ve Modern Tasarımın Buluştuğu Nokta",
    excerpt:
      "Çelik merdivenler, geleneksel betonarme merdivenlerin kaba ve ağır görüntüsünün aksine; hafifliği, zarafeti ve yüksek dayanımı ile modern mimarinin vazgeçilmez bir parçası haline gelmiştir. Hem endüstriyel tesislerde hem de estetik öncelikli yaşam alanlarında ideal çözümler sunar.",
    metaDescription:
      "Çelik merdiven modelleri, endüstriyel merdiven imalatı, çelik yangın merdiveni ve modern döner merdiven tasarımları. Dayanıklı, güvenli ve estetik çelik merdiven sistemleri için Tezel Çelik çözümleri.",
    imageAlt:
      "Modern Çelik Merdiven - Ahşap Basamaklı Loft Tarzı Çelik Merdiven Tasarımı",
    content: `Bir yapının katları arasındaki bağlantıyı sağlayan merdivenler, artık sadece işlevsel birer geçiş elemanı değil, yapının mimari karakterini belirleyen önemli tasarım unsurlarıdır. Çelik merdivenler; hafiflik, zarafet ve sarsılmaz dayanıklılığı bir araya getirerek modern mimarinin vazgeçilmez unsurlarından biri haline gelmiştir.`,
    contentHtml: `<p>Bir yapının katları arasındaki bağlantıyı sağlayan merdivenler, artık sadece işlevsel bir araç değil, yapının mimari karakterini belirleyen önemli bir tasarım unsurudur. <strong>Çelik merdivenler</strong>, geleneksel betonarme merdivenlerin kaba ve ağır görüntüsünün aksine; hafifliği, zarafeti ve sarsılmaz dayanıklılığı ile modern mimarinin vazgeçilmezi haline gelmiştir. Tezel Çelik olarak, hem endüstriyel tesisler hem de estetik öncelikli yaşam alanları için yüksek standartlarda çelik merdiven çözümleri sunuyoruz.</p>

<h2>Neden Çelik Merdiven Tercih Edilmeli?</h2>
<p>Çelik, merdiven tasarımında mimarlara ve mühendislere benzersiz avantajlar sunar:</p>
<ul>
  <li><strong>Yerden tasarruf:</strong> Çelik, yüksek mukavemeti sayesinde çok daha ince ve zarif taşıyıcılarla inşa edilebilir. Bu da dar alanlarda daha ferah ve kullanışlı çözümler yaratmanızı sağlar.</li>
  <li><strong>Hızlı ve temiz kurulum:</strong> Yerinde kalıp ve beton dökme işlemi gerektirmez. Fabrikada hazırlanan parçalar, şantiyede kısa sürede monte edilir; etrafı kirletmez ve inşaat sürecini hızlandırır.</li>
  <li><strong>Esnek tasarım:</strong> Düz, döner (spiral), L tipi veya U tipi gibi pek çok farklı geometride üretilebilir. Çelik, hayal gücünüzdeki hemen her forma uyum sağlar.</li>
  <li><strong>Uzun ömür:</strong> Yanmaya, aşınmaya ve ağır yüklere karşı betonarmeden çok daha dirençlidir.</li>
</ul>

<h2>Kullanım Alanlarına Göre Çelik Merdiven Türleri</h2>
<p>Kullanım amacına göre merdiven tasarımlarımızı optimize ediyoruz:</p>

<h3>Endüstriyel tip çelik merdivenler</h3>
<p>Fabrikalar, depolar ve makine dairesi geçişleri için tasarlanan bu merdivenlerde öncelik maksimum güvenlik ve taşıma kapasitesidir. Genellikle kaymaz metal ızgara veya gözlü sac basamaklar kullanılır; korkuluk sistemleri ise iş güvenliği yönetmeliklerine tam uyumlu olarak tasarlanır.</p>

<h3>Mimari ve dekoratif çelik merdivenler</h3>
<p>Ofisler, showroomlar ve dubleks/loft daireler için estetiğin ön planda olduğu modellerdir. Çelik iskelet; cam, ahşap veya taş basamaklarla kombinlenerek mekanın havasını tamamen değiştirir. Siyah elektrostatik toz boyalı gövde ile doğal ahşap basamakların birlikteliği, son yılların en popüler tasarım trendlerindendir.</p>

<h3>Yangın merdivenleri ve güvenlik çıkışları</h3>
<p>Acil durumlarda hayati önem taşıyan bu merdivenler, ulusal ve uluslararası <strong>yangın yönetmeliklerine</strong> tam uyumlu, ısıya dayanıklı ve hızlı tahliye kapasiteli olacak şekilde projelendirilir. Geniş basamaklar, kaymaz yüzeyler ve doğru konumlandırılmış sahanlıklar ile panik anında dahi güvenli kullanım sağlar.</p>

<h2>Güvenlik ve Mühendislik Standartları</h2>
<p>Bir merdiven ne kadar şık olursa olsun, mühendislik hesabı doğru yapılmadığında risklidir. Tezel Çelik olarak şu kriterleri asla göz ardı etmiyoruz:</p>
<ul>
  <li><strong>Statik analiz:</strong> Merdivenin taşıyacağı maksimum yük miktarı hesaplanarak en uygun profil seçimi yapılır; titreşim ve esneme değerleri kontrol altına alınır.</li>
  <li><strong>Ergonomi:</strong> Basamak yüksekliği ve genişliği, yorulmadan ve güvenle çıkılabilecek en ideal ölçülerde, insan anatomisine uygun şekilde tasarlanır.</li>
  <li><strong>Korkuluk ve küpeşte entegrasyonu:</strong> Düşmeleri önleyen, çocuk güvenliğine uygun ve sağlam tutuş sağlayan korkuluk sistemleri ile merdiven tamamlanır.</li>
</ul>

<h2>Tezel Çelik ile Kişiselleştirilmiş Çözümler</h2>
<p>İster eviniz için minimal bir döner merdiven, ister fabrikanız için ağır hizmet tipi bir geçiş merdiveni olsun; projenize özel ölçü alıyor, 3D tasarım desteği sunuyor ve profesyonel montaj ekibimizle anahtar teslim çözümler üretiyoruz. Yapılarınıza değer katan, güvenli ve estetik <strong>çelik merdiven sistemleri</strong> için <a href="/contact" style="color: #FF5A3C; font-weight: 600; text-decoration: none;">bizimle iletişime geçebilir, projelerinize özel teklif talep edebilirsiniz.</a></p>`,
    date: "2026-02-24",
    image: celikKonstruksiyonImg.src,
  },
  {
    slug: "celik-korkuluk-ve-kupeste-sistemleri-guvenligin-en-sik-hali",
    title: "Çelik Korkuluk ve Küpeşte Sistemleri: Güvenliğin En Şık Hali",
    excerpt:
      "Merdiven, balkon, teras ve platformlarda kullanıcı güvenliğini sağlayan en kritik unsur korkuluk sistemleridir. Çelik korkuluklar, yüksek dayanıklılığı minimalist ve modern tasarımlarla birleştirerek hem endüstriyel alanlarda hem de mimari projelerde en çok tercih edilen güvenlik çözümüdür.",
    metaDescription:
      "Çelik korkuluk ve küpeşte sistemleri ile merdiven, balkon ve platformlarda güvenliği artırın. Paslanmaz çelik korkuluk modelleri, endüstriyel emniyet korkulukları ve camlı çelik korkuluk çözümleri Tezel Çelik'te.",
    imageAlt:
      "Camlı Çelik Korkuluk ve Paslanmaz Küpeşte Sistemi - Modern Merdiven Uygulaması",
    content: `Bir yapıda merdivenler, balkonlar, teraslar veya platformlar ne kadar sağlam olursa olsun, onları tamamlayan ve kullanıcı güvenliğini sağlayan asıl unsur korkuluk sistemleridir. Çelik korkuluklar, yüksek dayanıklılığı minimalist tasarımlarla birleştirerek hem endüstriyel alanlarda hem de modern mimaride en çok tercih edilen güvenlik çözümü haline gelmiştir.`,
    contentHtml: `<p>Bir yapıda merdivenler, balkonlar, teraslar veya platformlar ne kadar sağlam olursa olsun, onları tamamlayan ve kullanıcı güvenliğini sağlayan asıl unsur <strong>korkuluk sistemleri</strong>dir. <strong>Çelik korkuluk ve küpeşte sistemleri</strong>, yüksek dayanıklılığı minimalist ve modern tasarımlarla birleştirerek hem endüstriyel alanlarda hem de mimari projelerde en çok tercih edilen güvenlik çözümü haline gelmiştir. Tezel Çelik olarak, sadece birer engel değil; yapınızın mimarisini destekleyen, standartlara uygun ve uzun ömürlü korkuluk sistemleri üretiyoruz.</p>

<h2>Neden Çelik Korkuluk?</h2>
<p>Korkuluk sistemlerinde malzeme seçimi hayati önem taşır. Çeliğin sunduğu avantajlar diğer malzemelerle kıyaslanamaz:</p>
<ul>
  <li><strong>Maksimum rijitlik:</strong> Çelik korkuluklar, darbelere ve yüksek basınç yüklerine karşı esneme yapmaz, kırılmaz. Kalabalık alanlarda tam güvenlik sağlar.</li>
  <li><strong>Korozyon direnci:</strong> Paslanmaz çelik veya daldırma galvaniz seçenekleri sayesinde yağmur, nem ve dış etkenlere karşı yıllarca ilk günkü formunu korur.</li>
  <li><strong>Estetik çeşitlilik:</strong> İnce profiller, halatlı geçişler veya camlı kombinasyonlar ile mekanın ışığını kesmeden şık bir görünüm sunar.</li>
  <li><strong>Düşük bakım maliyeti:</strong> Boya ve bakım ihtiyacı beton veya ahşap korkuluklara göre çok daha düşüktür.</li>
</ul>

<h2>Kullanım Alanlarına Göre Korkuluk Modelleri</h2>
<p>Kullanım amacına ve mekanın ruhuna göre farklı çözümler geliştiriyoruz:</p>

<h3>Endüstriyel güvenlik korkulukları</h3>
<p>Fabrikalarda, depoların arakatlarında ve makine platformlarında kullanılan bu modeller, <strong>İş Sağlığı ve Güvenliği (İSG)</strong> standartlarına göre üretilir. Genellikle çift sıra emniyet şeridi ve alt kısımda malzeme düşmesini engelleyen <strong>tekmelik (toe board)</strong> detayına sahiptir.</p>

<h3>Mimari camlı ve halatlı korkuluklar</h3>
<p>Modern ofisler, oteller ve konut projeleri için tasarlanan bu modellerde şıklık ön plandadır. Paslanmaz çelik dikmelerin arası temperli cam veya çelik gergi halatları ile geçilerek ferah bir görünüm elde edilir; manzara kesilmeden maksimum güvenlik sağlanır.</p>

<h3>Yangın merdiveni ve kaçış yolu korkulukları</h3>
<p>Acil durum tahliye anında yüksek insan yükünü taşıyabilecek kapasitede, ısıya dayanıklı ve kesintisiz tutunma sağlayan küpeşte detaylı modellerdir. Yangın yönetmeliklerine uygun yükseklik ve dayanım kriterleriyle tasarlanır.</p>

<h2>Mühendislik ve Standartlar: Önce Güvenlik</h2>
<p>Tezel Çelik olarak üretimde şu teknik kriterleri standart kabul ediyoruz:</p>
<ul>
  <li><strong>Yükseklik standartları:</strong> Konutlarda, iş yerlerinde ve çocukların bulunduğu alanlarda yönetmeliklerin öngördüğü minimum korkuluk yüksekliği kurallarına tam uyum sağlıyoruz.</li>
  <li><strong>Kaynak kalitesi:</strong> Tüm birleşim noktalarında pürüzsüz ve yüksek mukavemetli kaynak işçiliği ile sarsıntısız ve uzun ömürlü bir yapı elde ediyoruz.</li>
  <li><strong>Ergonomik küpeşteler:</strong> El ile kavrama kolaylığı sağlayan, kullanıcıyı rahatsız etmeyen pürüzsüz yüzey bitişleri ile konforlu kullanım sunuyoruz.</li>
</ul>

<h2>Tezel Çelik ile Projeye Özel İmalat</h2>
<p>Her yapının ihtiyacı farklıdır. Yerinde ölçü alımıyla başlayan sürecimiz, projenize en uygun malzemenin (paslanmaz, boyalı karbon çeliği vb.) seçimi ve profesyonel ekibimiz tarafından gerçekleştirilen titiz montajla son bulur. Merdiven projelerimizi tamamlayan korkuluk seçenekleri hakkında daha fazla bilgi için <a href="/blog/celik-merdiven-sistemleri-dayaniklilik-guvenlik-ve-modern-tasarim">Çelik Merdiven Sistemleri</a> yazımıza da göz atabilirsiniz.</p>

<p>İster fabrika içi sarı boyalı bir güvenlik korkuluğu, ister modern ofis içi camlı korkuluk olsun; geniş ürün yelpazemizle projelerinize en uygun <strong>çelik korkuluk ve küpeşte</strong> çözümlerini sunuyoruz. Detaylı bilgi ve teklif için <a href="/contact" style="color: #FF5A3C; font-weight: 600; text-decoration: none;">bizimle iletişime geçebilirsiniz.</a></p>`,
    date: "2026-02-24",
    image: celikKonstruksiyonImg.src,
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
