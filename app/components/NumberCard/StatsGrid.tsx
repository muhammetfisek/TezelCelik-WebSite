'use client';

import "./StatsGrid.css";

import { useEffect, useRef, useState } from "react";
import { FaHardHat, FaProjectDiagram, FaSmileBeam, FaClock } from "react-icons/fa";

type StatItem = {
  label: string;
  subLabel: string;
  value: number;
  suffix?: string;
};

function useCountUp(target: number, start: boolean, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frame: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => {
      if (frame) cancelAnimationFrame(frame);
    };
  }, [target, start, duration]);

  return value;
}

const stats: StatItem[] = [
  {
    label: "Yıllık Tecrübe",
    subLabel: "Sahada ve üretimde aktif deneyim",
    value: 10,
    suffix: "+",
  },
  {
    label: "Tamamlanan Proje",
    subLabel: "Farklı ölçek ve ihtiyaçlara göre",
    value: 198,
    suffix: "+",
  },
  {
    label: "Müşteri Memnuniyeti",
    subLabel: "Geri bildirim ve tekrar iş oranı",
    value: 100,
    suffix: "%",
  },
  {
    label: "Teknik Destek",
    subLabel: "İhtiyaç anında yanınızdayız",
    value: 7,
    suffix: "/24",
  },
];

export function StatsGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActivated(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
    >
      {stats.map((item, index) => {
        const current = useCountUp(item.value, activated);

        return (
          <article
            key={item.label}
            className="about-stat-card rounded-3xl bg-white p-7 text-center shadow-sm ring-1 ring-black/5"
          >
            <div className="about-stat-icon-wrapper mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl">
              {index === 0 && <FaHardHat className="text-[#FF5A3C]" />}
              {index === 1 && <FaProjectDiagram className="text-[#FF5A3C]" />}
              {index === 2 && <FaSmileBeam className="text-[#FF5A3C]" />}
              {index === 3 && <FaClock className="text-[#FF5A3C]" />}
            </div>
            <p className="about-stat-value">
              {current}
              {item.suffix && <span className="about-stat-suffix">{item.suffix}</span>}
            </p>
            <p className="about-stat-label">{item.label}</p>
            <p className="about-stat-sub">{item.subLabel}</p>
          </article>
        );
      })}
    </div>
  );
}

