import type { Metadata } from "next";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaDirections,
} from "react-icons/fa";
import { ContactForm } from "@/app/components/ContactForm/ContactForm";
import arkaplanNav from "@/images/arkaplan_nav.png";
import "./contact.css";

const NAVBAR_HEIGHT = 90;
const HERO_MIN_HEIGHT = 320;

export const metadata: Metadata = {
  title: "İletişim | Tezel Çelik Sistemleri İstanbul Pendik",
  description:
    "Tezel Çelik Sistemleri ile çelik konstrüksiyon, çelik bina, çatı ve platform projeleriniz için iletişime geçin. Yayalar Mah. Ankara Cd, Nezaket Sk. No:7, 34870 Pendik/İstanbul adresimiz ve telefonlarımız üzerinden Türkiye geneli projelendirme ve montaj desteği sağlıyoruz.",
};

export default function ContactPage() {
  return (
    <main className="contact-page-enter min-h-screen bg-gray-50">
      {/* Hero Bölümü */}
      <section
        className="relative flex flex-col items-center justify-center overflow-hidden bg-cover bg-center px-4 text-center"
        style={{
          minHeight: HERO_MIN_HEIGHT,
          marginTop: -NAVBAR_HEIGHT,
          paddingTop: NAVBAR_HEIGHT,
        }}
      >
        <div
          className="contact-hero-bg absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${arkaplanNav.src})`,
          }}
        />
        <div className="contact-hero-overlay pointer-events-none absolute inset-0 bg-black/40" />
        <div className="contact-hero-content relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold tracking-wide text-white sm:text-6xl">
            İletişim
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">
            Projeleriniz için bizimle iletişime geçin. Uzman ekibimiz size en
            kısa sürede dönüş yapacaktır.
          </p>
        </div>
      </section>

      {/* Ana İçerik Bölümü */}
      <section id="contact-form" className="container mx-auto px-4 py-16 lg:px-8 scroll-mt-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 relative">
          {/* Ayırıcı Çizgi - Sadece masaüstünde görünür */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent transform -translate-x-1/2"></div>
          {/* Sol Taraf - İletişim Formu */}
          <ContactForm />

          {/* Sağ Taraf - İletişim Bilgileri */}
          <div className="space-y-8">
            {/* İletişim Bilgilerimiz Başlığı */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                İLETİŞİM BİLGİLERİMİZ
              </h2>
              <div className="contact-title-underline h-1 w-20 bg-[#FF5A3C]"></div>
            </div>

            {/* İletişim Bilgileri */}
            <div className="space-y-6">
              {/* Merkez Adres */}
              <div className="contact-info-item flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <FaMapMarkerAlt className="contact-info-icon text-2xl text-[#FF5A3C]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Merkez Adres</h3>
                  <p className="text-gray-700 leading-relaxed">
                Yayalar Mah. Ankara Cd, Nezaket Sk. No:7, 34870 Pendik/İstanbul
                  </p>
                </div>
              </div>


              {/* Telefon */}
              <div className="contact-info-item flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <FaPhoneAlt className="contact-info-icon contact-phone-icon text-2xl text-[#FF5A3C]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Telefon</h3>
                  <div className="space-y-1">
                    <p className="text-gray-700">
                      +90 216 592 84 09
                    </p>
                    <p className="text-gray-700">
                      +90 552 317 55 77
                    </p>
                  </div>
                </div>
              </div>

              {/* E-Posta */}
              <div className="contact-info-item flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <FaEnvelope className="contact-info-icon contact-email-icon text-2xl text-[#FF5A3C]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">E-Posta</h3>
                  <p className="text-gray-700">
                    tezelcelik@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Sosyal Medya */}
            <div className="pt-6 border-t border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                SOSYAL MEDYA
              </h2>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/tezelcelik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-btn flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-[#E4405F] to-[#C13584] text-white shadow-lg"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/company/tezel-celik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-btn flex items-center justify-center w-14 h-14 rounded-lg bg-[#0077B5] text-white shadow-lg"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Harita Bölümü - Tam Genişlik */}
        <div className="mt-23">
          <div className="contact-map-container rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=40.900322,29.269642&output=embed&hl=tr&zoom=16&markers=color:red%7Clabel:T%7C40.900322,29.269642"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Tezel Çelik Konum"
            ></iframe>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=40.900322,29.269642"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-directions-btn flex items-center justify-center gap-2 w-full bg-[#FF5A3C] text-white font-bold py-4 px-6 hover:bg-[#e04a2f] transition-all"
            >
              <FaDirections className="text-xl" />
              <span>YOL TARİFİ ALIN</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
