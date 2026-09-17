import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogs.find(p => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex-grow bg-[#FFFFFF] text-[#424242] py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Back Link */}
        <Link href="/blog" className="inline-flex items-center text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-[#7B2CBF] uppercase mb-12 transition-colors">
          <span className="mr-2">←</span> BACK TO RESOURCES
        </Link>

        {/* Header Section */}
        <div className="mb-10">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#00B55D] uppercase mb-4 block">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-[#424242] max-w-4xl leading-[1.1] mb-8">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-xs font-medium text-gray-400 pb-8 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="relative w-6 h-6 shrink-0">
                <Image src="/logo-final.png" alt="Wizard Wash" fill className="object-contain" />
              </div>
              <span className="text-[#424242]">Wizard Wash</span>
            </div>
            <span>|</span>
            <span>{post.date}</span>
            <span>|</span>
            <span>4 min read</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-[21/9] md:aspect-[2.5/1] rounded-2xl overflow-hidden mb-16 shadow-sm bg-gray-100">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover" 
          />
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-16 relative">
          
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            <article className="max-w-none">
              
              {post.content.map((section, idx) => (
                <div key={section.sectionId} className={idx === post.content.length - 1 ? "mb-0" : "mb-12"}>
                  <h2 id={section.sectionId} className={`text-2xl font-heading font-bold text-[#7B2CBF] mb-4 ${idx === 0 ? "mt-0" : ""}`}>
                    {section.title}
                  </h2>
                  {section.text.map((paragraph, pIdx) => (
                    <p key={pIdx} className={`text-gray-600 font-light leading-relaxed text-[15px] ${pIdx === section.text.length - 1 ? "" : "mb-6"}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}

            </article>
          </div>

          {/* Sidebar (Table of Contents) */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32 bg-gray-50/50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#424242] uppercase mb-6">
                IN THIS ARTICLE
              </h3>
              <ul className="flex flex-col gap-5">
                {post.sections.map((section, index) => (
                  <li key={section.id} className="flex items-start gap-4">
                    <span className="text-[11px] font-medium text-gray-400 mt-0.5">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <a href={`#${section.id}`} className="text-[13px] font-medium text-[#424242] leading-snug hover:text-[#00B55D] transition-colors">
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
