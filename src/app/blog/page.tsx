"use client";

import React from 'react';
import { SimpleHeader } from '@/components/ui/simple-header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import BottomCTA from '@/components/BottomCTA';

const BLOG_POSTS = [
    {
        id: 0,
        title: "5 Areas You're Forgetting to Clean Before Summer Guests Arrive",
        category: "Seasonal",
        date: "May 15, 2026",
        excerpt: "Summer entertaining season is here. Before you fire up the grill, make sure these five overlooked exterior areas don't leave a bad impression on your guests.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
        slug: "areas-to-clean-before-summer"
    },
    {
        id: 1,
        title: "How Often Should You Pressure Wash Your House in Virginia?",
        category: "Maintenance",
        date: "May 12, 2026",
        excerpt: "Learn how often Virginia homeowners should pressure wash their homes, what affects the timeline, and how to spot the signs it's time.",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200",
        slug: "how-often-pressure-wash-house-virginia"
    },
    {
        id: 2,
        title: "How to Make Your Home Look New Again",
        category: "Home Care",
        date: "May 10, 2026",
        excerpt: "Simple tips on keeping your house looking fresh and how to spot the early signs of dirt and grime before they become a problem.",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1200",
        slug: "make-your-home-look-new"
    },
    {
        id: 3,
        title: "A Business Owner's Guide to a Great First Impression",
        category: "Business",
        date: "May 07, 2026",
        excerpt: "Why the outside of your business matters more than you think, and how a quick refresh can bring more people through your doors.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
        slug: "business-first-impression"
    },

];

export default function BlogPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <SimpleHeader />

            {/* Viracis-style Hero */}
            <section className="pt-32 pb-16 px-6 border-b border-slate-100">
                <div className="max-w-[1400px] mx-auto space-y-6">
                    <div className="flex items-center gap-4">
                        <span className="text-[10px] font-heading font-black uppercase tracking-[4px] text-slate-400">Insights</span>
                        <div className="h-px w-12 bg-slate-200" />
                    </div>
                    <h1 className="text-[#1e1e3f] text-4xl md:text-7xl font-heading font-black uppercase tracking-tighter leading-[0.95] max-w-4xl">
                        Thoughts on the future of <br /> property restoration.
                    </h1>
                </div>
            </section>

            {/* Grid Layout matching the provided image */}
            <section className="py-24 px-6">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
                        {BLOG_POSTS.map((post, idx) => (
                            <motion.article 
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group cursor-pointer flex flex-col"
                            >
                                <a href={`/blog/${post.slug}`} className="flex flex-col h-full space-y-8">
                                    {/* Image Container - Matching the wide aspect ratio */}
                                    <div className="aspect-[16/9] overflow-hidden rounded-xl shadow-lg bg-slate-50">
                                        <img 
                                            src={post.image} 
                                            alt={post.title} 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>

                                    <div className="flex flex-col flex-grow space-y-6">
                                        {/* Metadata Row */}
                                        <div className="flex items-center gap-3">
                                            <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-md text-[9px] font-heading font-black uppercase tracking-widest text-[#1e1e3f]">
                                                {post.category}
                                            </span>
                                            <span className="text-slate-200 text-xs">•</span>
                                            <time className="text-slate-400 text-[10px] font-heading font-bold uppercase tracking-widest">
                                                {post.date}
                                            </time>
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-4">
                                            <h2 className="text-[#1e1e3f] text-2xl font-heading font-black uppercase tracking-tight leading-tight group-hover:text-[#9138df] transition-colors line-clamp-2">
                                                {post.title}
                                            </h2>
                                            <p className="text-slate-500 text-sm font-body leading-relaxed line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <BottomCTA />
            <Footer />
        </main>
    );
}
