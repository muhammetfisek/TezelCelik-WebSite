import { redirect } from "next/navigation";

/** /services doğrudan açılırsa ilk hizmet sayfasına yönlendir (ana sayfa yok). */
export default function ServicesIndexPage() {
  redirect("/services/steel-buildings");
}
