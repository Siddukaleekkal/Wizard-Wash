"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ArrowRight } from 'lucide-react';

export default function FloridaPopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show after a short delay EVERY time the page/site is entered
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    const dismiss = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="relative bg-white text-[#1e1e3f] overflow-hidden border-b border-slate-100"
                >
                    {/* Subtle Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_20%_50%,var(--color-accent-purple)_0%,transparent_50%)]" />
                    
                    <div className="max-w-[1920px] mx-auto px-4 sm:px-8 py-3 sm:py-3.5 relative flex items-center justify-center min-h-[56px]">
                        {/* Content */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-1 text-center px-8 sm:px-12">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] sm:text-xs font-heading font-black uppercase tracking-[2px] text-[var(--color-accent-purple)] whitespace-nowrap">
                                    Growth Announcement
                                </span>
                            </div>
                            
                            <p className="text-sm sm:text-base font-heading font-bold uppercase tracking-tight flex items-center gap-2">
                                Wizard Wash is expanding to <span className="text-[var(--color-accent-purple)] font-black underline decoration-[var(--color-accent-purple)]/30 decoration-2 underline-offset-4">Florida</span>
                            </p>

                            <a 
                                href="https://richmondbizsense.com/2026/05/12/henrico-power-washing-business-opening-its-first-out-of-state-office/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-1.5 text-xs font-heading font-black uppercase tracking-[2px] text-[#1e1e3f] hover:text-[var(--color-accent-purple)] transition-colors py-1"
                            >
                                Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        {/* Actions */}
                        <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 flex items-center shrink-0">
                            <button 
                                onClick={dismiss}
                                className="p-2 text-slate-300 hover:text-[var(--color-accent-purple)] transition-colors"
                                aria-label="Close Announcement"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
