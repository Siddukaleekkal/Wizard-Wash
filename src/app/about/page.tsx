"use client";

import React, { useRef, useEffect } from 'react';
import { SimpleHeader } from '@/components/ui/simple-header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Shield, Users, Zap, Star, Target, Award, Sparkles, ArrowRight } from 'lucide-react';

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
                {/* Hero Section - Pinned Frame */}
                <section className="sticky top-0 h-[60vh] lg:h-[80vh] w-full flex items-center justify-center px-6 lg:px-12 z-0">
                    <div className="max-w-[1600px] w-full pt-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative h-[400px] lg:h-[700px] w-full rounded-[2.5rem] overflow-hidden shadow-[0_30px_100px_-20px_rgba(0,0,0,0.3)] bg-slate-50"
                        >
                            <img
                                src="/images/Hero Page.png"
                                alt="Wizard Wash"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/5" />
                        </motion.div>
                    </div>
                </section>

                {/* Scrolling Content Wrapper */}
                <div className="relative z-10 bg-white shadow-[0_-50px_100px_rgba(0,0,0,0.1)]">

                    {/* Meet The Team Section */}
                    <section className="py-24 px-6 bg-slate-50 border-b border-slate-200/60">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-20 space-y-6">
                                <h2 className="text-[#1e1e3f] text-3xl md:text-6xl font-heading font-black uppercase tracking-tight">Meet The Team</h2>
                                <p className="text-slate-600 text-lg max-w-2xl mx-auto font-body">
                                    Our team of dedicated professionals combines industry expertise with a passion for excellence. We treat every property with the utmost care, ensuring magical results every time.
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center gap-16 gap-y-20 mb-24">
                                {/* Team Members */}
                                {[
                                    { name: "Omar Elshami", role: "CEO", img: "/images/Omar%20Elshami%20CEO.JPEG", desc: "Leading Wizard Wash's vision of blending ultimate convenience with elite-tier property care." },
                                    { name: "Christian Hancock", role: "Operations Manager - FL", img: "/images/Christian%20Hancock%20Florida%20Operations%20Manager.jpeg", desc: "Ensures flawless execution and operational excellence across our Florida service areas." },
                                    { name: "Ellie Von Herbulis", role: "Sales Manager", img: "/images/Ellie%20Von%20Herbulis%20Sales%20Manager.PNG", desc: "Drives business growth and builds lasting relationships with our residential and commercial clients." },
                                    { name: "Carlos Rincon", role: "Team Lead - VA Beach", img: "/images/Carlos%20Rincon%20Team%20Lead%20Virginia%20Beach.PNG", desc: "Directs high-impact cleaning projects in Virginia Beach with extreme precision." },
                                    { name: "Jose Rivas", role: "Crew Member", img: "/images/Jose%20Rivas%20Crew%20Member.PNG", desc: "A meticulous technician who consistently delivers spotless, transformative results." },
                                    { name: "Alex Hancock", role: "Crew Member - VA Branch", img: "/images/Alex%20Hancock%20Crew%20Member%20Virginia%20Branch.PNG", desc: "Dedicated specialist ensuring top-quality washing standards for residential and commercial clients." }
                                ].map((member, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="group space-y-6 flex flex-col items-center text-center w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2.67rem)] max-w-[300px]"
                                    >
                                        <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl border-[6px] border-white group-hover:border-[#9138df] transition-all duration-500 ease-out">
                                            <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black font-heading uppercase tracking-tight text-[#1e1e3f]">{member.name}</h3>
                                            <p className="text-[#9138df] font-bold tracking-widest text-xs uppercase mt-1 mb-3">{member.role}</p>
                                            <p className="text-slate-500 text-sm font-body max-w-[280px] mx-auto">{member.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

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
                                        Today, Wizard Wash is Virginia's premier exterior restoration specialist, serving both luxury residential estates and massive commercial landmarks with a standard of excellence that feels like magic.
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

                    {/* CTA Section */}
                    <section className="pb-32 px-6">
                        <div className="max-w-[1400px] mx-auto bg-[#9138df] rounded-[3rem] p-12 lg:p-24 relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(145,56,223,0.4)] text-center text-white">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/20 to-transparent -z-10" />
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="space-y-12 relative z-10"
                            >
                                <h2 className="text-4xl md:text-8xl font-heading font-black uppercase tracking-tighter leading-none">
                                    Experience the<br />Magic Today
                                </h2>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <a href="/quote" className="inline-flex items-center justify-center h-20 bg-white text-[#9138df] font-heading font-black text-xl px-12 rounded-xl hover:bg-[#1e1e3f] hover:text-white transition-all shadow-2xl uppercase tracking-widest group">
                                        Get A Quote <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
