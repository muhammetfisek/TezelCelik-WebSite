/**
 * Proje kartı ve modal için kullanılan görseller.
 * projects-data.ts içinde mainImage ve galleryImages bu anahtarlarla verilir.
 */
import arkaplanNav from "@/images/arkaplan_nav.png";
import arkaplanFaaliyet from "@/images/arkaplan_faaliyet.png";
import celikKonstruksiyon from "@/images/blog_images/celik_konstruksiyon.png";
import fabrikaHangar from "@/images/blog_images/fabrika_hangar.jpeg";

export const projectImageMap: Record<string, string> = {
  nav: arkaplanNav.src,
  faaliyet: arkaplanFaaliyet.src,
  blog1: celikKonstruksiyon.src,
  blog2: fabrikaHangar.src,
};

export function getProjectImageSrc(key: string): string {
  return projectImageMap[key] ?? projectImageMap.faaliyet;
}
