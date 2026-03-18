'use client';

import React from 'react';
import { MapPin } from 'lucide-react';

const STATES = [
    { name: "Delaware", type: "Service District" },
    { name: "Maryland", type: "Service District" },
    { name: "Washington D.C.", type: "Metropolitan Division" },
    { name: "Virginia", type: "Operational Headquarters", isHub: true },
    { name: "North Carolina", type: "Service District" },
    { name: "South Carolina", type: "Service District" },
    { name: "Georgia", type: "Service District" },
    { name: "Florida", type: "Service District" },
];

export default function ServiceMapSection() {
    return (
        <section className="py-20 bg-white relative overflow-hidden" id="coverage">
            {/* Soft background decorative blur */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#9138df]/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">

                    {/* Left: Content & Regional Reach */}
                    <div className="md:col-span-6 space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-[#9138df] font-heading font-extrabold text-[13px] uppercase tracking-[4px]">
                                Regional Reach
                            </h2>
                            <h1 className="text-[#1e1e3f] text-3xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] uppercase">
                                Mid-Atlantic &<br />Southeast Coverage
                            </h1>
                            <p className="text-slate-600 text-lg md:text-xl font-body leading-relaxed max-w-xl">
                                Strategically based out of <span className="text-[#1e1e3f] font-bold">Richmond, Virginia</span>, Wizard Wash operates as a regional force in exterior asset maintenance.
                            </p>
                        </div>

                        {/* Interactive-style State List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {STATES.map((state) => (
                                <div
                                    key={state.name}
                                    className={`group relative p-6 rounded-2xl border transition-all duration-300 ${state.isHub
                                        ? 'bg-[#9138df]/5 border-[#9138df]/20 shadow-[0_15px_40px_-15px_rgba(145,56,223,0.15)]'
                                        : 'bg-slate-50 border-slate-100 hover:border-[#9138df]/20 hover:bg-white hover:shadow-xl'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <h3 className={`font-heading font-black uppercase text-sm tracking-widest ${state.isHub ? 'text-[#1e1e3f]' : 'text-slate-700'}`}>
                                                {state.name}
                                            </h3>
                                            <p className="text-[#9138df]/70 font-heading font-bold text-[9px] uppercase tracking-[1px]">
                                                {state.type}
                                            </p>
                                        </div>
                                        {state.isHub && (
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-[#9138df]/20 rounded-full blur-md animate-pulse" />
                                                <MapPin className="text-[#9138df] relative z-10" size={20} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>

                    {/* Right: The "Stunning" Stylized Map */}
                    <div className="md:col-span-6 relative">
                        <div className="aspect-square relative flex items-center justify-center">

                            {/* Central Hub Pulsing Glow */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-96 h-96 bg-[#9138df]/10 rounded-full blur-[100px] animate-pulse" />
                            </div>

                            {/* Stylized SVG Map Overlay */}
                            <svg viewBox="0 0 400 600" className="w-full h-full relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                                {/* Decorative connectivity lines */}
                                <g className="opacity-30">
                                    <path d="M200,200 L180,50" stroke="#9138df" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                                    <path d="M200,200 L250,120" stroke="#9138df" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                                    <path d="M200,200 L300,350" stroke="#9138df" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                                    <path d="M200,200 L120,480" stroke="#9138df" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                                    <path d="M200,200 L200,550" stroke="#9138df" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                                </g>

                                {/* Richmond HQ Marker */}
                                <circle cx="200" cy="200" r="8" fill="#9138df" />
                                <circle cx="200" cy="200" r="16" stroke="#9138df" strokeWidth="2" fill="none" className="animate-ping" style={{ animationDuration: '3s' }} />
                                <circle cx="200" cy="200" r="30" stroke="#9138df" strokeWidth="1" strokeDasharray="2 2" fill="none" className="animate-spin-slow" />

                                <text x="215" y="205" className="fill-[#1e1e3f] font-heading font-black uppercase text-[12px] tracking-widest">Richmond, VA</text>


                                {/* State Nodes */}
                                <g className="fill-[#1e1e3f]/80 font-heading font-black uppercase text-[10px] tracking-widest">
                                    <circle cx="180" cy="50" r="4" fill="#9138df" />
                                    <text x="135" y="45" textAnchor="end">Delaware</text>

                                    <circle cx="250" cy="120" r="4" fill="#9138df" />
                                    <text x="260" y="125">Maryland</text>

                                    <circle cx="210" cy="150" r="3" fill="#9138df" />
                                    <text x="220" y="155" className="text-[8px]">D.C.</text>

                                    <circle cx="300" cy="350" r="4" fill="#9138df" />
                                    <text x="310" y="355">N. Carolina</text>

                                    <circle cx="280" cy="420" r="4" fill="#9138df" />
                                    <text x="185" y="425" textAnchor="end">S. Carolina</text>

                                    <circle cx="120" cy="480" r="4" fill="#9138df" />
                                    <text x="110" y="485" textAnchor="end">Georgia</text>

                                    <circle cx="200" cy="550" r="4" fill="#9138df" />
                                    <text x="210" y="555">Florida</text>
                                </g>

                                {/* Stylized Coastline (Abstract representation) */}
                                <path
                                    d="M160,20 C200,80 280,150 200,250 C120,350 250,450 180,580"
                                    stroke="url(#mapGradient)"
                                    strokeWidth="4"
                                    fill="none"
                                    className="opacity-20"
                                />

                                <defs>
                                    <linearGradient id="mapGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#9138df" />
                                        <stop offset="50%" stopColor="#1e1e3f" />
                                        <stop offset="100%" stopColor="#9138df" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Stats/Badge */}
                            <div className="absolute bottom-10 right-0 bg-white/90 backdrop-blur-xl border border-slate-100 p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-20">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[#1e1e3f] font-heading font-black text-2xl tracking-tighter">8 STATES</span>
                                    <span className="text-[#9138df] font-heading font-bold text-[10px] uppercase tracking-widest">Continuous Support</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                .animate-spin-slow {
                    animation: spin 10s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
}
