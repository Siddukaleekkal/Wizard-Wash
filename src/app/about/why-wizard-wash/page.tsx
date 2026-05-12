"use client";

import React from 'react';
import { SimpleHeader } from '@/components/ui/simple-header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, MoveRight } from 'lucide-react';
import BottomCTA from '@/components/BottomCTA';

export default function WhyWizardWash() {
    return (
        <main className="min-h-screen flex flex-col bg-white selection:bg-[#9138df] selection:text-white">
            <SimpleHeader />

            {/* Hero */}
            <section className="relative pt-32 pb-16 px-6 text-center border-b border-slate-100">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#9138df]/5 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2" />
                <div className="max-w-4xl mx-auto space-y-6">
                    <span className="text-[10px] font-heading font-black uppercase tracking-[4px] text-slate-400">Philosophy / Standards</span>
                    <h1 className="text-[#1e1e3f] text-4xl md:text-7xl font-heading font-black uppercase tracking-tighter leading-[0.95]">
                        The New Standard of <br /> <span className="text-[var(--color-accent-purple)]">Excellence.</span>
                    </h1>
                    <p className="text-slate-600 text-lg md:text-xl font-body leading-relaxed max-w-2xl mx-auto">
                        We abandoned the traditional "pressure washing" model to build a scientific restoration firm dedicated to asset preservation and engineering-grade results.
                    </p>
                </div>
            </section>

            {/* Corporate Briefing Section */}
            <section className="py-32 px-6 md:px-12 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-4 space-y-6">
                            <h2 className="text-[10px] font-heading font-black uppercase tracking-[4px] text-[var(--color-accent-purple)]">The Core Differentiators</h2>
                            <p className="text-[#1e1e3f] text-3xl font-heading font-black uppercase tracking-tight leading-tight">
                                How we redefined an entire industry.
                            </p>
                        </div>
                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                            {[
                                { 
                                    title: "Chemical Intelligence", 
                                    text: "We replace brute force with molecular science. Our proprietary detergents neutralize biological growth at the root without damaging the substrate." 
                                },
                                { 
                                    title: "Substrate Protection", 
                                    text: "High pressure is the enemy of longevity. We utilize low-pressure delivery systems designed to preserve HardieBoard, vinyl, and delicate masonry." 
                                },
                                { 
                                    title: "Precision Protocols", 
                                    text: "Our technicians follow a 24-point inspection process for every square foot, ensuring a level of consistency that 'splash-and-dash' operators can't replicate." 
                                },
                                { 
                                    title: "Environmental Liability", 
                                    text: "We carry $2M+ in comprehensive liability and workers' comp, providing an enterprise-grade safety net for our high-value residential and commercial clients." 
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="space-y-4 border-t border-slate-100 pt-8 group">
                                    <h3 className="text-xl font-heading font-black uppercase text-[#1e1e3f] group-hover:text-[var(--color-accent-purple)] transition-colors">{item.title}</h3>
                                    <p className="text-slate-500 font-body leading-relaxed text-sm md:text-base">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Large Typography Statement */}
            <section className="py-24 px-6 bg-[#1e1e3f] overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,var(--color-accent-purple)_0%,transparent_50%)]" />
                </div>
                <div className="max-w-[1400px] mx-auto">
                    <motion.h2 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="text-white/10 text-[10vw] font-heading font-black uppercase leading-none whitespace-nowrap tracking-tighter"
                    >
                        Professional Precision. Professional Precision.
                    </motion.h2>
                    <div className="mt-12 max-w-3xl">
                        <p className="text-white text-3xl md:text-5xl font-heading font-black uppercase tracking-tight leading-tight">
                            We don't clean properties. We restore their <span className="text-[var(--color-accent-purple)] underline decoration-white/20 underline-offset-8">Market Value</span>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Case for Excellence */}
            <section className="py-32 px-6 md:px-12 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 md:items-center justify-between mb-24 border-b border-slate-100 pb-12">
                        <h2 className="text-[#1e1e3f] text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter">The Proof</h2>
                        <div className="flex items-center gap-12">
                            <div className="text-center">
                                <p className="text-[#9138df] text-4xl font-black font-heading">100+</p>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Google Reviews</p>
                            </div>
                            <div className="text-center">
                                <p className="text-[#9138df] text-4xl font-black font-heading">5.0</p>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Quality Rating</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {[
                            { val: "Reliability", desc: "Enterprise-grade scheduling and communication systems." },
                            { val: "Safety", desc: "Rigorous technician training and full OSHA compliance." },
                            { val: "Science", desc: "Data-backed results that outlast traditional methods." }
                        ].map((item, idx) => (
                            <div key={idx} className="space-y-4">
                                <div className="text-[10px] font-heading font-black uppercase tracking-[3px] text-slate-300">Metric 0{idx + 1}</div>
                                <h4 className="text-2xl font-heading font-black uppercase text-[#1e1e3f]">{item.val}</h4>
                                <p className="text-slate-500 font-body text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <BottomCTA />

            <Footer />
        </main>
    );
}
