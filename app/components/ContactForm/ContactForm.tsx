"use client";

import { useState } from "react";
import "@/app/contact/contact.css";

type SubmitStatus = "idle" | "success";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Telefon validasyon fonksiyonu (Türkiye formatı)
  const validatePhone = (phone: string): boolean => {
    // Türkiye telefon formatları: +90XXXXXXXXXX, 0XXXXXXXXX, XXXXXXXXXX
    const phoneRegex = /^(\+90|0)?[5][0-9]{9}$/;
    const cleanedPhone = phone.replace(/\s|-|\(|\)/g, "");
    return phoneRegex.test(cleanedPhone);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Gerçek zamanlı validasyon
    if (name === "phone" && value && !validatePhone(value)) {
      setErrors((prev) => ({
        ...prev,
        phone:
          "Geçerli bir telefon numarası giriniz (örn: 0537 334 87 10)",
      }));
    } else if (name === "phone") {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.phone;
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form validasyonu
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Ad alanı zorunludur";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Soyad alanı zorunludur";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefon alanı zorunludur";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone =
        "Geçerli bir telefon numarası giriniz (örn: 0537 334 87 10)";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mesaj alanı zorunludur";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // E-posta içeriğini oluştur
    const subject = `İletişim Formu - ${formData.firstName} ${formData.lastName}`;
    const emailBody = `
Ad Soyad: ${formData.firstName} ${formData.lastName}
Telefon: ${formData.phone}

Mesaj:
${formData.message}
    `.trim();

    // mailto: linki oluştur
    const mailtoLink = `mailto:muhammetfisek121@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;

    // E-posta istemcisini aç
    window.location.href = mailtoLink;

    // Formu temizle
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      message: "",
    });

    // Başarı mesajı göster
    setSubmitStatus("success");
    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  return (
    <div className="contact-form-card bg-white rounded-2xl shadow-xl p-8 lg:p-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">İletişim</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Ad ve Soyad */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Adınızı girin"
              required
              className={`contact-input w-full px-4 py-3 rounded-lg border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-[#FF5A3C] focus:border-transparent`}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Soyadınızı girin"
              required
              className={`contact-input w-full px-4 py-3 rounded-lg border ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-[#FF5A3C] focus:border-transparent`}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Telefon */}
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Telefon numaranızı girin (örn: 0537 334 87 10)"
            required
            className={`contact-input w-full px-4 py-3 rounded-lg border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-[#FF5A3C] focus:border-transparent`}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        {/* Mesaj */}
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Mesajınızı yazın"
            required
            rows={6}
            className={`contact-input w-full px-4 py-3 rounded-lg border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-[#FF5A3C] focus:border-transparent resize-y`}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        {/* Gönder Butonu */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="contact-submit-btn flex-1 bg-[#FF5A3C] text-white font-bold py-4 px-8 rounded-lg hover:bg-[#e04a2f] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <span>Mesajı Gönder</span>
            <span className="text-xl">→</span>
          </button>
        </div>

        {/* Başarı Mesajı */}
        {submitStatus === "success" && (
          <div className="contact-status-message p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-800">
            E-posta istemciniz açıldı. Lütfen e-postayı gönderin.
          </div>
        )}
      </form>
    </div>
  );
}

