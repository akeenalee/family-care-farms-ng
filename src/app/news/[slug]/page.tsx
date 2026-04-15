import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sanityClient } from "@/sanity/lib/client";
import { ArrowLeft, Calendar } from "lucide-react";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  body?: Array<{ _type: string; style?: string; children?: Array<{ text: string }> }>;
  publishedAt?: string;
  category?: string;
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    return await sanityClient.fetch(
      `*[_type == "post" && slug.current == $slug][0]`,
      { slug }
    );
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return { title: post?.title ?? "Post Not Found" };
}

function renderBody(body: Post["body"]) {
  if (!body) return null;
  return body.map((block, i) => {
    if (block._type !== "block") return null;
    const text = block.children?.map((c) => c.text).join("") ?? "";
    const style = block.style ?? "normal";
    if (style === "h2") return <h2 key={i} className="font-display text-2xl font-semibold text-forest-900 mt-10 mb-4">{text}</h2>;
    if (style === "h3") return <h3 key={i} className="font-display text-xl font-semibold text-forest-900 mt-8 mb-3">{text}</h3>;
    if (style === "blockquote") return <blockquote key={i} className="border-l-4 border-earth-400 pl-6 italic text-forest-700 my-6">{text}</blockquote>;
    return <p key={i} className="text-forest-800 leading-relaxed mb-5">{text}</p>;
  });
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="container-narrow">
        <Link href="/news" className="inline-flex items-center gap-2 text-forest-600 text-sm font-semibold mb-10 hover:text-forest-800 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to News
        </Link>

        <article>
          {post.category && (
            <span className="text-xs font-semibold text-earth-600 bg-earth-50 border border-earth-200 px-3 py-1 rounded-full">
              {post.category}
            </span>
          )}
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-forest-900 leading-tight mt-5 mb-5">
            {post.title}
          </h1>
          {post.publishedAt && (
            <div className="flex items-center gap-2 text-forest-400 text-sm mb-8 pb-8 border-b border-forest-100">
              <Calendar className="w-4 h-4" />
              {new Date(post.publishedAt).toLocaleDateString("en-NG", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
            </div>
          )}
          {post.excerpt && (
            <p className="text-lg text-forest-700 leading-relaxed mb-8 font-medium">{post.excerpt}</p>
          )}
          <div className="prose-content">
            {renderBody(post.body)}
          </div>
        </article>

        <div className="mt-16 pt-10 border-t border-forest-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link href="/news" className="inline-flex items-center gap-2 text-forest-600 text-sm font-semibold hover:text-forest-800 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All News
          </Link>
          <Link href="/apply/resident" className="btn-primary">
            Apply for Residency
          </Link>
        </div>
      </div>
    </div>
  );
}
