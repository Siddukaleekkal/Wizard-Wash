"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ArrowRight } from 'lucide-react';

export default function FloridaModal() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show after 6 seconds (to not clash with the top banner)
        const timer = setTimeout(() => {
            const dismissed = localStorage.getItem('florida-modal-dismissed');
            if (!dismissed) {
                setIsVisible(true);
            }
        }, 6000);

        return () => clearTimeout(timer);
    }, []);

    const dismiss = () => {
        setIsVisible(false);
        localStorage.setItem('florida-modal-dismissed', 'true');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] flex flex-col md:flex-row min-h-[450px]"
                    >
                        {/* Close Button */}
                        <button 
                            onClick={dismiss}
                            className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors z-30 p-2"
                        >
                            <X size={24} />
                        </button>

                        {/* Left Side: Visual */}
                        <div className="relative w-full md:w-2/5 bg-[#1e1e3f] p-12 flex flex-col justify-between overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-accent-purple)_0%,transparent_70%)]" />
                            </div>
                            
                            <div className="relative z-10">
                                <div className="text-[10px] font-heading font-black uppercase tracking-[4px] text-white/40 mb-3">Expansion Report</div>
                                <div className="w-16 h-1.5 bg-[var(--color-accent-purple)]" />
                            </div>

                            <div className="relative z-10 space-y-3">
                                <div className="text-white/20 font-heading font-black text-7xl leading-none select-none">FL</div>
                                <h3 className="text-white text-2xl font-heading font-black uppercase tracking-widest leading-tight">
                                    Strategic <br /> Marketplace <br /> Entry
                                </h3>
                            </div>

                            <div className="relative z-10 pt-4">
                                <span className="text-[9px] font-heading font-bold uppercase tracking-[3px] text-white/30">Wizard Wash Corp.</span>
                            </div>
                        </div>

                        {/* Right Side: Content */}
                        <div className="flex-1 p-10 sm:p-14 md:p-16 flex flex-col justify-center space-y-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-slate-200" />
                                    <span className="text-[10px] font-heading font-black uppercase tracking-[3px] text-[var(--color-accent-purple)] font-bold">Featured News</span>
                                </div>
                                <h2 className="text-[#1e1e3f] text-4xl sm:text-5xl font-heading font-black uppercase tracking-tighter leading-[0.9] max-w-sm">
                                    Wizard Wash <span className="text-slate-300">Scales to</span> Florida
                                </h2>
                            </div>

                            <p className="text-slate-500 text-lg font-body leading-relaxed max-w-md">
                                Our commitment to professional excellence and technological innovation has led us to our most significant milestone yet: expansion into the Florida market.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a 
                                    href="https://richmondbizsense.com/2026/05/12/henrico-power-washing-business-opening-its-first-out-of-state-office/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 px-10 h-16 bg-[#1e1e3f] text-white font-heading font-black text-sm rounded-xl hover:bg-[var(--color-accent-purple)] transition-all uppercase tracking-[2px] shadow-2xl shadow-slate-900/30 group"
                                >
                                    Read Article <ExternalLink size={16} />
                                </a>
                                <button 
                                    onClick={dismiss}
                                    className="px-10 h-16 border border-slate-200 text-slate-500 font-heading font-black text-sm rounded-xl hover:bg-slate-50 transition-all uppercase tracking-[2px]"
                                >
                                    Dismiss
                                </button>
                            </div>

                            <div className="pt-6 flex items-center gap-6 text-slate-300">
                                <span className="text-[10px] font-heading font-bold uppercase tracking-[2px]">Market Release 2026</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                                <span className="text-[10px] font-heading font-bold uppercase tracking-[2px]">Richmond ➝ Tampa</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
