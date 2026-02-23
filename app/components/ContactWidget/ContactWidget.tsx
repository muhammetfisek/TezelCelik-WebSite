"use client";

import "./ContactWidget.css";

import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export function ContactWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="contact-widget-root">
      {/* Açıkken görünen dikey ikonlar */}
      <div
        className={`mb-3 flex flex-col items-center gap-2 ${
          open ? "contact-panel-enter-active" : "contact-panel-enter pointer-events-none"
        }`}
      >
        {/* WhatsApp */}
        <Link
          href="https://wa.me/905523175577"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:-translate-y-0.5"
        >
          <FaWhatsapp className="h-5 w-5" />
        </Link>

        {/* Telefon */}
        <a
          href="tel:+905523175577"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#10B981] text-white shadow-lg transition-transform hover:-translate-y-0.5"
        >
          <FaPhoneAlt className="h-5 w-5" />
        </a>

        {/* Konum / Instagram yerine adres değil, Instagram */}
        <Link
          href="https://www.instagram.com/tezelcelik"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E4405F] text-white shadow-lg transition-transform hover:-translate-y-0.5"
        >
          <FaInstagram className="h-5 w-5" />
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/company/tezel-celik"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-lg transition-transform hover:-translate-y-0.5"
        >
          <FaLinkedinIn className="h-5 w-5" />
        </Link>
      </div>

      {/* Ana buton: yanıp sönen kırmızımsı, aç/kapat */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`contact-main-button flex h-12 w-12 items-center justify-center rounded-full bg-[#FF5A3C] text-white shadow-xl transition-transform hover:scale-105 ${
          open ? "" : ""
        }`}
        aria-label={open ? "Kapat" : "Bize Ulaşın"}
      >
        {open ? (
          <span className="text-2xl font-bold leading-none">×</span>
        ) : (
          <span className="text-lg font-semibold leading-none">BİZ</span>
        )}
      </button>
    </div>
  );
}

