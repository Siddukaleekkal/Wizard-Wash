"use client";

import React from 'react';
import { SimpleHeader } from '@/components/ui/simple-header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Shield, Award, CheckCircle2, Target } from 'lucide-react';

import BottomCTA from '@/components/BottomCTA';

export default function DreamTeamPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <SimpleHeader />

            {/* Hero */}
            <section className="relative pt-32 pb-16 px-6 text-center">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#9138df]/5 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2" />
                <div className="max-w-4xl mx-auto space-y-6">
                    <h1 className="text-[#1e1e3f] text-4xl md:text-7xl font-heading font-black uppercase tracking-tighter leading-[0.95]">
                        Our Team
                    </h1>
                    <p className="text-slate-600 text-lg md:text-xl font-body leading-relaxed max-w-2xl mx-auto">
                        Our team of dedicated professionals combines industry expertise with a passion for excellence. We treat every property with the utmost care, ensuring magical results every time.
                    </p>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-16 px-6 bg-slate-50 border-y border-slate-200/60">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-16 gap-y-20">
                        {[
                            { name: "Omar Elshami", role: "CEO", img: "/images/Omar%20Elshami%20CEO.JPEG", desc: "Leading Wizard Wash's vision of blending ultimate convenience with elite-tier property care.", imgClass: "scale-110 object-top", email: "omar@wizardwashva.com" },
                            { name: "Christian Hancock", role: "COO", img: "/images/Christian%20Hancock.jpeg", desc: "Ensures flawless execution and operational excellence across our service areas.", imgClass: "scale-110 object-top", email: "christian@wizardwashva.com" },
                            { name: "Siddu Kaleekkal", role: "CTO", img: "/images/Siddu%20Kaleekkal%20CTO.jpg", desc: "Drives technological innovation and digital strategy at Wizard Wash.", imgClass: "scale-100 object-top", email: "siddu@wizardwashva.com" }
                        ].map((member: any, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group space-y-6 flex flex-col items-center text-center w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2.67rem)] max-w-[300px]"
                            >
                                <div className="w-56 h-56 rounded-2xl overflow-hidden shadow-xl border-[6px] border-white">
                                    <img src={member.img} alt={member.name} className={`w-full h-full object-cover ${member.imgClass || ''}`} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black font-heading uppercase tracking-tight text-[#1e1e3f]">{member.name}</h3>
                                    <p className="text-[var(--color-accent-purple)] font-bold tracking-widest text-xs uppercase mt-1 mb-3">{member.role}</p>
                                    {member.email && (
                                        <div className="mb-4">
                                            <a href={`mailto:${member.email}`} className="inline-flex items-center justify-center space-x-2 text-xs font-bold text-white bg-[var(--color-accent-purple)] hover:bg-[#1e1e3f] transition-all duration-300 px-4 py-2 rounded-full shadow-md hover:shadow-lg">
                                                <Mail className="w-3.5 h-3.5" />
                                                <span>Email {member.name.split(' ')[0]}</span>
                                            </a>
                                        </div>
                                    )}
                                    <p className="text-slate-500 text-sm font-body max-w-[280px] mx-auto">{member.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Careers CTA */}
            <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-[#1e1e3f] text-3xl md:text-5xl font-heading font-black uppercase tracking-tight">
                        Want to Join the Team?
                    </h2>
                    <p className="text-slate-600 text-lg font-body max-w-xl mx-auto">
                        We are always looking for talented, hardworking individuals to join the Wizard Wash family.
                    </p>
                    <a href="/about/careers" className="inline-flex items-center h-16 bg-[var(--color-accent-purple)] text-white font-heading font-black text-lg px-10 rounded-xl hover:bg-[var(--color-accent-purple-dark)] transition-all shadow-[0_20px_40px_-10px_rgba(145,56,223,0.4)] hover:-translate-y-1 uppercase tracking-widest">
                        Apply Now <ArrowRight className="ml-3" size={20} />
                    </a>
                </div>
            </section>

            {/* CTA Banner */}
            <BottomCTA />

            <Footer />
        </main>
    );
}

