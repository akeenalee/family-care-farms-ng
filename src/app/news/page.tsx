import type { Metadata } from "next";
import Link from "next/link";
import { sanityClient } from "@/sanity/lib/client";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = { title: "News & Updates" };

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt?: string;
  category?: string;
  featured?: boolean;
}

async function getPosts(): Promise<Post[]> {
  try {
    return await sanityClient.fetch(
      `*[_type == "post"] | order(publishedAt desc) { _id, title, slug, excerpt, publishedAt, category, featured }`
    );
  } catch {
    return [];
  }
}

export default async function NewsPage() {
  const posts = await getPosts();
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured || p._id !== featured?._id);

  return (
    <div className="min-h-screen bg-cream-50 pt-28 pb-20">
      <div className="container-wide">
        <div className="mb-12">
          <p className="section-label">News & Updates</p>
          <h1 className="section-title mb-4">Latest from the Farm</h1>
          <p className="section-body max-w-xl">
            Updates, stories, and insights from Family Care Farms Initiatives Nigeria and our international partners.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="bg-white border border-forest-100 rounded-sm p-16 text-center">
            <div className="text-5xl mb-6">🌱</div>
            <h2 className="font-display text-2xl font-semibold text-forest-900 mb-3">
              Stories are growing.
            </h2>
            <p className="text-forest-600 text-sm max-w-sm mx-auto">
              We&apos;re just getting started. Check back soon for news, farm updates, and community stories.
            </p>
          </div>
        ) : (
          <>
            {/* Featured post */}
            {featured && (
              <div className="mb-10">
                <Link
                  href={`/news/${featured.slug.current}`}
                  className="block bg-white border border-forest-100 rounded-sm p-10 hover:shadow-md transition-shadow duration-200 group"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    {featured.category && (
                      <span className="text-xs font-semibold text-earth-600 bg-earth-50 border border-earth-200 px-3 py-1 rounded-full">
                        {featured.category}
                      </span>
                    )}
                    <span className="text-xs font-bold text-forest-500 bg-forest-50 px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-forest-900 mb-4 group-hover:text-forest-700 transition-colors">
                    {featured.title}
                  </h2>
                  {featured.excerpt && (
                    <p className="text-forest-700 leading-relaxed mb-5 max-w-2xl">{featured.excerpt}</p>
                  )}
                  <div className="flex items-center justify-between">
                    {featured.publishedAt && (
                      <div className="flex items-center gap-2 text-forest-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        {new Date(featured.publishedAt).toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" })}
                      </div>
                    )}
                    <span className="text-forest-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </div>
            )}

            {/* Post grid */}
            {rest.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((post) => (
                  <Link
                    key={post._id}
                    href={`/news/${post.slug.current}`}
                    className="bg-white border border-forest-100 rounded-sm p-7 flex flex-col hover:shadow-md transition-shadow duration-200 group"
                  >
                    {post.category && (
                      <span className="text-xs font-semibold text-earth-600 bg-earth-50 border border-earth-200 px-3 py-1 rounded-full self-start mb-4">
                        {post.category}
                      </span>
                    )}
                    <h3 className="font-display text-lg font-semibold text-forest-900 mb-3 flex-1 group-hover:text-forest-700 transition-colors">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-forest-700 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    )}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-forest-50">
                      {post.publishedAt ? (
                        <div className="flex items-center gap-1.5 text-forest-400 text-xs">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(post.publishedAt).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" })}
                        </div>
                      ) : <span />}
                      <span className="text-forest-600 text-xs font-semibold flex items-center gap-1 group-hover:gap-1.5 transition-all">
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
