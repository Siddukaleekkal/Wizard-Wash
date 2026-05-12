"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function BottomCTA() {
    return (
        <section className="border-t border-slate-100 bg-white">
            <div className="max-w-5xl mx-auto px-6 py-12 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                    <h2 className="text-[#1e1e3f] text-xl sm:text-2xl md:text-3xl font-heading font-black uppercase tracking-tight">
                        READY TO GET STARTED?
                    </h2>
                    <p className="text-slate-400 text-sm sm:text-base font-body mt-1">
                        Professional grade · Fully insured · Free estimates
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <a href="/quote" className="inline-flex items-center justify-center h-12 sm:h-14 bg-[var(--color-accent-purple)] text-white font-heading font-black text-sm sm:text-base px-8 rounded-lg hover:bg-[var(--color-accent-purple-dark)] transition-all hover:-translate-y-0.5 uppercase tracking-widest">
                        Get A Quote <ArrowRight className="ml-2" size={16} />
                    </a>
                    <a href="tel:8046902465" className="inline-flex items-center justify-center h-12 sm:h-14 bg-white text-[#1e1e3f] border border-slate-200 font-heading font-black text-sm sm:text-base px-8 rounded-lg hover:border-[var(--color-accent-purple)] hover:text-[var(--color-accent-purple)] transition-all uppercase tracking-widest">
                        Call 804-690-2465
                    </a>
                </div>
            </div>
        </section>
    );
}
