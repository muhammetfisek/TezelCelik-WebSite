import Image from "next/image";
import Link from "next/link";
import { getServicePageData, type ServiceId } from "@/app/lib/service-page-data";
import { getBlogPost } from "@/app/lib/blog-data";

const MAX_RELATED_POSTS = 2;

export function RelatedBlogsSection({ serviceId }: { serviceId: ServiceId }) {
  const data = getServicePageData(serviceId);
  const relatedPosts = data.relatedBlogSlugs
    .map((slug) => getBlogPost(slug))
    .filter((post): post is NonNullable<ReturnType<typeof getBlogPost>> => Boolean(post))
    .slice(0, MAX_RELATED_POSTS);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-16 sm:mt-18" aria-labelledby="related-posts-heading">
      <h2
        id="related-posts-heading"
        className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900"
      >
        İlgili yazılarımız
      </h2>
      <div className="about-title-underline mt-3 h-1 w-20 bg-[#FF5A3C]" />
      <div className="mt-8 grid gap-6 sm:gap-8 md:grid-cols-2">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.1)] hover:border-gray-200"
          >
            <div className="relative aspect-[3/2] w-full overflow-hidden bg-gray-100">
              <Image
                src={post.image}
                alt={post.imageAlt ?? post.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-[#FF5A3C]">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-3">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF5A3C] transition-transform group-hover:gap-2.5">
                Yazıyı oku
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link
          href="/blog"
          className="inline-flex items-center justify-center rounded-xl bg-[#FF5A3C] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-colors hover:bg-[#E5482E] focus:outline-none focus:ring-2 focus:ring-[#FF5A3C] focus:ring-offset-2"
        >
          Tüm blog yazıları için tıklayınız.
        </Link>
      </div>
    </section>
  );
}
