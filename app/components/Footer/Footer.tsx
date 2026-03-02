"use client";

import "./Footer.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-container">
      <div className="footer-row">
        <div className="footer-left">
          <p className="footer-left-text">
            © {currentYear} Tezel Çelik Sistemleri. Tüm hakları saklıdır.
          </p>
        </div>

        <div className="footer-center">
          <div className="footer-contact-inline">
            <div className="footer-contact-address">
              <span>Yayalar Mah. Ankara Cd, Nezaket Sk. No:7</span>
              <span>Pendik / İstanbul</span>
            </div>
            <span className="footer-contact-divider" />
            <div className="footer-contact-info">
              <span>+90 552 317 55 77</span>
              <span>tezelcelik@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <button
            type="button"
            className="footer-back-to-top"
            onClick={handleBackToTop}
            aria-label="Sayfanın en üstüne dön"
          >
            <span className="footer-back-to-top-icon">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
