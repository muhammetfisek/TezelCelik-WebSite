import Image from "next/image";
import Link from "next/link";
import { FaFileAlt } from "react-icons/fa";
import arkaplanNav from "@/images/arkaplan_nav.png";
import { blogPosts } from "@/app/lib/blog-data";
import "./blog.css";

const NAVBAR_HEIGHT = 90;
const HERO_MIN_HEIGHT = 320;
const POSTS_PER_PAGE = 6;

interface BlogPageProps {
  searchParams?: Promise<{
    page?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const totalPosts = blogPosts.length;
  const totalPages = Math.max(
    1,
    Math.ceil(totalPosts / POSTS_PER_PAGE)
  );
  const rawPage = Number(params?.page);
  const currentPage = Math.min(
    totalPages,
    Math.max(1, Number.isNaN(rawPage) || !rawPage ? 1 : rawPage)
  );
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  return (
    <main className="blog-page-enter min-h-screen bg-white">
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
          className="blog-hero-bg absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${arkaplanNav.src})` }}
        />
        <div className="blog-hero-overlay pointer-events-none absolute inset-0 bg-black/40" />
        <div className="blog-hero-content relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold tracking-wide text-white sm:text-6xl">
            Blog
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">
            Güncel projelerimiz, sektör haberleri ve çelik konstrüksiyon
            alanındaki gelişmeler hakkında yazılarımızı keşfedin.
          </p>
        </div>
      </section>

      {/* Blog Kartları Grid - 3 Sütun */}
      <section className="container mx-auto px-4 py-16 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post) => (
            <article key={post.slug} className="blog-card">
              <Link href={`/blog/${post.slug}`} className="blog-card-link-wrap">
                <div className="blog-card-image-wrap">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="blog-card-body">
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <span className="blog-card-link">
                    <FaFileAlt className="w-4 h-4" />
                    Devamını oku
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="blog-pagination">
            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1;
              const isActive = page === currentPage;
              const href = page === 1 ? "/blog" : `/blog?page=${page}`;

              return (
                <Link
                  key={page}
                  href={href}
                  className={`blog-pagination-link${
                    isActive ? " blog-pagination-link-active" : ""
                  }`}
                >
                  {page}
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
