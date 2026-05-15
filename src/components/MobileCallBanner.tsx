"use client";

import { PhoneCall } from 'lucide-react';

export default function MobileCallBanner() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3">
            <a
                href="tel:8046902465"
                className="flex items-center justify-center gap-3 w-full bg-[var(--color-accent-purple)] text-white py-3.5 rounded-xl shadow-lg"
            >
                <PhoneCall size={18} className="animate-pulse" />
                <span className="font-heading font-black uppercase tracking-widest text-sm">
                    Call Now to Save 10%
                </span>
            </a>
        </div>
    );
}
