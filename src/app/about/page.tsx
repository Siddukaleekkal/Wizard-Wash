"use client";

import React, { useRef, useEffect } from 'react';
import { SimpleHeader } from '@/components/ui/simple-header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Shield, Users, Target, Award, ArrowRight } from 'lucide-react';
import BottomCTA from '@/components/BottomCTA';

export default function AboutPage() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.defaultMuted = true;
            videoRef.current.muted = true;
            videoRef.current.play().catch(console.error);
        }
    }, []);

    return (
        <main className="min-h-screen  flex flex-col bg-white">
            <SimpleHeader />

            <div className="relative">
            {/* Hero */}
            <section className="relative pt-32 pb-16 px-6 text-center border-b border-slate-100">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#9138df]/5 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2" />
                <div className="max-w-4xl mx-auto space-y-6 flex flex-col items-center">
                    <span className="text-[10px] font-heading font-black uppercase tracking-[4px] text-slate-400">Institutional / Expertise</span>
                    <h1 className="text-[#1e1e3f] text-4xl md:text-7xl font-heading font-black uppercase tracking-tighter leading-[0.95]">
                        The Standard of <br /> <span className="text-[#9138df]">Property Care.</span>
                    </h1>
                    <p className="text-slate-600 text-lg md:text-xl font-body leading-relaxed max-w-2xl mx-auto">
                        We are more than a cleaning service; we are a precision-focused restoration firm dedicated to preserving the structural integrity and market value of your most significant assets.
                    </p>
                </div>
            </section>

                {/* Scrolling Content Wrapper */}
                <div className="relative z-10 bg-white shadow-[0_-50px_100px_rgba(0,0,0,0.1)]">




                    {/* Our Story Section */}
                    <section className="py-32 px-6">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <div className="h-1 w-20 bg-[#9138df]" />
                                <h2 className="text-[#1e1e3f] text-3xl md:text-6xl font-heading font-black uppercase tracking-tight">Our Story</h2>
                                <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-body">
                                    <p>
                                        Wizard Wash wasn't born from a desire to just 'clean houses.' It was founded on the principle that property maintenance should be treated with the same precision as high end engineering.
                                    </p>
                                    <p>
                                        We saw an industry filled with 'splash and dash' operators who used aggressive pressure to compensate for a lack of expertise. We knew there was a better way a scientific approach that combined advanced chemistry with state of the art equipment.
                                    </p>
                                    <p>
                                        Today, Wizard Wash is Virginia's premier exterior restoration specialist, serving both luxury residential estates and massive commercial landmarks with a standard of excellence that delivers transformative results.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="absolute -inset-4 bg-[#9138df]/5 rounded-[2rem] -z-10 rotate-3" />
                                <div className="aspect-[9/16] sm:aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-black relative">
                                    <video
                                        ref={videoRef}
                                        src="/images/Mara%20Lago%20Video.mov"
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Stats Section */}
                    <section className="pb-32 px-6 bg-white">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                            {[
                                { val: "5k+", label: "Properties Transformed" },
                                { val: "100%", label: "Fully Insured" },
                                { val: "6+yr", label: "Industry Experience" },
                                { val: "5/5", label: "Client Satisfaction" }
                            ].map((stat, idx) => (
                                <div key={idx} className="text-center space-y-2">
                                    <p className="text-6xl md:text-8xl font-heading font-black text-[#9138df] tracking-tighter">{stat.val}</p>
                                    <p className="text-slate-400 font-heading font-bold uppercase tracking-[2px] text-xs md:text-sm">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <BottomCTA />
                </div>
            </div>

            <Footer />
        </main>
    );
}
