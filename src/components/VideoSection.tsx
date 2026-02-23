"use client";

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const SERVICES = [
    "House Soft Washing",
    "Concrete & Driveway",
    "Roof Cleaning",
    "Holiday Lighting",
    "Commercial Washing",
    "Fleet Maintenance"
];

export default function VideoSection() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden" id="commercial">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:items-stretch">

                    {/* Left Column: Commercial Portfolio & Text (Span 7) */}
                    <div className="lg:col-span-7 flex flex-col gap-10">
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <h2 className="text-[#9138df] font-heading font-extrabold text-[13px] uppercase tracking-[3px]">
                                    Portfolio & Solutions
                                </h2>
                                <h1 className="text-[#1e1e3f] text-3xl md:text-5xl font-heading font-black tracking-tight leading-[1.1] uppercase">
                                    Strategic Asset<br />Maintenance
                                </h1>
                            </div>

                            <div className="space-y-6 max-w-2xl">
                                <p className="text-slate-600 text-lg leading-relaxed font-body">
                                    At Wizard Wash, we specialize in high-performance exterior restoration and maintenance for assets ranging from <span className="text-[#1e1e3f] font-bold">luxury residential properties</span> to <span className="text-[#1e1e3f] font-bold">regional commercial portfolios</span>.
                                </p>

                                <p className="text-slate-500 text-[15px] leading-relaxed font-body">
                                    Whether it's a single high-value estate or a regional network of retail storefronts, we deliver professional-grade precision through our specialized service lines:
                                </p>

                                {/* Concise Services List */}
                                <div className="grid grid-cols-2 gap-y-3 gap-x-8 pt-2">
                                    {SERVICES.map((service) => (
                                        <div key={service} className="flex items-center gap-2 group">
                                            <CheckCircle2 className="text-[#9138df] w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                                            <span className="text-[12px] font-heading font-black uppercase tracking-wider text-[#1e1e3f]/80 group-hover:text-[#9138df] transition-colors">
                                                {service}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Mara Lago Showcase Tile */}
                        <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-white group">
                            <img
                                src="/images/Mara Lago.jpg"
                                alt="Commercial Showcase - Mara Lago"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Right Column: Cinematic Video Reel (Span 5) */}
                    <div className="lg:col-span-5 relative group">
                        <div className="relative w-full h-[600px] lg:h-full rounded-3xl overflow-hidden shadow-2xl border border-white group-hover:shadow-[#9138df]/20 transition-all duration-700">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            >
                                <source src="/images/Chick-Fil-A.MOV" type="video/quicktime" />
                                <source src="/images/Chick-Fil-A.MOV" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 border-[1px] border-white/20 rounded-3xl pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 transition-opacity duration-500" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
