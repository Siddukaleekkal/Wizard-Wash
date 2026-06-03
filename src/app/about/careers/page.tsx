"use client";

import React from 'react';
import { SimpleHeader } from '@/components/ui/simple-header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import BottomCTA from '@/components/BottomCTA';

export default function CareersPage() {
    const openings = [
        {
            title: "Lead Field Technician",
            location: "Richmond, VA",
            dept: "Operations",
            desc: "Command-level responsibility for multi-site exterior restoration projects. Requires expertise in chemical ratios and client management."
        },
        {
            title: "Client Relations Manager",
            location: "Headquarters",
            dept: "Administration",
            desc: "Manage high-value portfolio accounts and coordinate logistics for our residential and commercial divisions."
        },
        {
            title: "Regional Operations Support",
            location: "Virginia Beach / Florida",
            dept: "Field Operations",
            desc: "Critical support role for our emerging regional markets. Focus on quality assurance and logistical efficiency."
        }
    ];

    return (
        <main className="min-h-screen flex flex-col bg-white selection:bg-[#1e1e3f] selection:text-white">
            <SimpleHeader />

            {/* Hero */}
            <section className="relative pt-32 pb-16 px-6 text-center border-b border-slate-100 bg-slate-50/50">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#9138df]/5 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2" />
                <div className="max-w-4xl mx-auto space-y-6">
                    <span className="text-[10px] font-heading font-black uppercase tracking-[4px] text-[var(--color-accent-purple)]">Talent / Culture</span>
                    <h1 className="text-[#1e1e3f] text-4xl md:text-7xl font-heading font-black uppercase tracking-tighter leading-[0.95]">
                        Join the Elite <br /> Restoration Force.
                    </h1>
                    <p className="text-slate-600 text-lg md:text-xl font-body leading-relaxed max-w-2xl mx-auto">
                        We are building the future of property maintenance. We seek disciplined, precision-focused individuals who value excellence over convenience.
                    </p>
                </div>
            </section>

            {/* The Value Proposition - Enterprise Grid */}
            <section className="py-32 px-6 md:px-12 border-b border-slate-100">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
                        <div className="space-y-6">
                            <h2 className="text-[#1e1e3f] text-4xl font-heading font-black uppercase tracking-tight">Core <br /> Organizational <br /> Values.</h2>
                            <p className="text-slate-500 font-body leading-relaxed">
                                Our culture is defined by rigorous operational discipline and a commitment to engineering-grade results across all regional markets.
                            </p>
                        </div>
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-16">
                            {[
                                { title: "Technical Proficiency", text: "We provide standardized training in advanced chemical restoration and state-of-the-art logistics management." },
                                { title: "Strategic Advancement", text: "Structured leadership trajectories as we scale our operations across the Mid-Atlantic and Southeastern markets." },
                                { title: "Equitable Compensation", text: "Performance-driven compensation models that reflect our status as a high-value industrial service provider." },
                                { title: "Operational Safety", text: "Comprehensive safety protocols and enterprise-grade risk management for all field and administrative personnel." }
                            ].map((item, idx) => (
                                <div key={idx} className="space-y-4 group">
                                    <div className="h-1 w-12 bg-slate-100 group-hover:w-full group-hover:bg-[#9138df] transition-all duration-700" />
                                    <h3 className="text-xl font-heading font-black uppercase text-[#1e1e3f]">{item.title}</h3>
                                    <p className="text-slate-500 font-body text-sm leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Opportunities Section - Clean Table-like Layout */}
            <section className="py-32 px-6 md:px-12 bg-[#1e1e3f]">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                        <div className="space-y-4">
                            <span className="text-[10px] font-heading font-black uppercase tracking-[4px] text-white/30">Available Roles</span>
                            <h2 className="text-white text-4xl md:text-6xl font-heading font-black uppercase tracking-tight">Current Openings</h2>
                        </div>
                        <p className="text-white/40 font-body text-sm max-w-xs md:text-right hidden md:block">
                            Select a role to begin the application process.
                        </p>
                    </div>

                    <div className="border-t border-white/10">
                        {openings.map((job, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="group border-b border-white/10 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 hover:bg-white/5 transition-colors px-4 cursor-pointer"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <span className="text-[9px] font-heading font-black uppercase tracking-[2px] px-3 py-1 bg-white/10 text-white rounded-full">{job.dept}</span>
                                        <span className="text-[9px] font-heading font-black uppercase tracking-[2px] text-white/40">{job.location}</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-heading font-black uppercase text-white group-hover:text-[var(--color-accent-purple)] transition-colors">{job.title}</h3>
                                    <p className="text-white/40 font-body text-sm max-w-xl">{job.desc}</p>
                                </div>
                                <a 
                                    href={`mailto:info@wizardwashva.com?subject=Application for ${job.title}`}
                                    className="h-14 px-8 border border-white/20 text-white font-heading font-black text-[10px] uppercase tracking-[2px] rounded-xl group-hover:bg-white group-hover:text-[#1e1e3f] transition-all flex items-center justify-center gap-3"
                                >
                                    Apply <MoveRight size={14} />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <BottomCTA />

            <Footer />
        </main>
    );
}
