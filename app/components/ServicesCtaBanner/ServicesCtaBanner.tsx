"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import "./ServicesCtaBanner.css";

const CONTACT_FORM_HREF = "/contact#contact-form";

export function ServicesCtaBanner() {
  return (
    <section className="services-cta-banner" aria-label="İletişime geçin">
      <div className="services-cta-banner__inner">
        <div className="services-cta-banner__text">
          <p className="services-cta-banner__eyebrow">Projeniz için tek adres</p>
          <h2 className="services-cta-banner__title">
            Projenizi birlikte hayata geçirelim
          </h2>
          <p className="services-cta-banner__desc">
            Teklif veya detaylı bilgi için iletişim formunu doldurun; ekibimiz size dönsün.
          </p>
        </div>
        <div className="services-cta-banner__action">
          <Link href={CONTACT_FORM_HREF} className="services-cta-banner__btn">
            Ücretsiz Teklif Alın
            <FaArrowRight className="services-cta-banner__btn-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
}
