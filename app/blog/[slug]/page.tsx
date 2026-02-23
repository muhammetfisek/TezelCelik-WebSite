import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FaArrowLeft } from "react-icons/fa";
import { getBlogPost, blogPosts } from "@/app/lib/blog-data";
import "../blog.css";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Yazı Bulunamadı" };
  return {
    title: `${post.title} | Tezel Çelik Blog`,
    description:
      post.metaDescription ||
      post.excerpt.replace(/\[\.\.\.\]|\.\.\./g, "").slice(0, 160),
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const imageAlt = post.imageAlt || post.title;

  return (
    <main className="blog-page-enter min-h-screen bg-white">
      {/* Hero: Blog etiketi ve başlık */}
      <section className="relative bg-gray-100 py-12 sm:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#FF5A3C] transition-colors mb-6 text-sm font-medium"
          >
            <FaArrowLeft className="w-4 h-4" />
            Blog
          </Link>
          <p className="text-lg font-semibold text-[#FF5A3C] tracking-wide uppercase mb-2">
            Blog
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Ana içerik: Sol yazı, sağ görsel */}
      <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Sol: Yazılar */}
          <div className="order-2 lg:order-1">
            <div
              className="blog-detail-content"
              dangerouslySetInnerHTML={{
                __html:
                post.contentHtml ||
                post.content
                  .split(/\n\n+/)
                  .map((p) => `<p>${p}</p>`)
                  .join(""),
              }}
            />
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[#FF5A3C] font-semibold hover:gap-3 transition-all"
              >
                <FaArrowLeft className="w-4 h-4" />
                Tüm yazılara dön
              </Link>
            </div>
          </div>

          {/* Sağ: Görsel - sticky desktop'ta */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-24">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={post.image}
                alt={imageAlt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
