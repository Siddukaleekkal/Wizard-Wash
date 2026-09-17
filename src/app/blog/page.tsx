import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";

export default function BlogIndex() {
  return (
    <main className="flex-grow bg-[#FFFFFF] text-[#424242] py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 border-b border-gray-100 pb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#00B55D] uppercase mb-4 block">
            RESOURCES
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-light text-[#424242] max-w-2xl leading-tight">
            Expert insights and guides to elevate your property's exterior.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col cursor-pointer">
              <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden bg-gray-100">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.1em] uppercase text-gray-400 mb-3">
                <span className="text-[#00B55D]">{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h2 className="text-xl font-heading font-bold text-[#7B2CBF] mb-3 group-hover:text-[#00B55D] transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
