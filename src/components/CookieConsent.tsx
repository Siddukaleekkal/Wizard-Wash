"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show after 2 seconds
        const timer = setTimeout(() => {
            const consent = localStorage.getItem('cookie-consent');
            if (!consent) {
                setIsVisible(true);
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const acceptCookies = () => {
        setIsVisible(false);
        localStorage.setItem('cookie-consent', 'accepted');
    };

    const declineCookies = () => {
        setIsVisible(false);
        localStorage.setItem('cookie-consent', 'declined');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed bottom-0 left-0 w-full z-[150] bg-white border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] px-6 py-4 md:py-3"
                >
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">

                        {/* Text Content */}
                        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                            <p className="text-slate-500 text-xs md:text-sm font-body leading-tight max-w-3xl">
                                We use cookies to enhance your experience, analyze site traffic, and serve targeted advertisements.
                                By using our site, you consent to our use of cookies. <a href="/privacy" className="text-[var(--color-accent-purple)] font-bold hover:underline ml-1">Privacy Policy</a>
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-3 w-full md:w-auto">
                            <button
                                onClick={declineCookies}
                                className="flex-1 md:flex-none px-6 h-10 bg-slate-50 text-slate-400 font-heading font-black text-[10px] uppercase tracking-[2px] rounded-lg hover:bg-slate-100 transition-all"
                            >
                                Decline
                            </button>
                            <button
                                onClick={acceptCookies}
                                className="flex-1 md:flex-none px-10 h-10 bg-[#1e1e3f] text-white font-heading font-black text-[10px] uppercase tracking-[2px] rounded-lg hover:bg-[var(--color-accent-purple)] transition-all shadow-lg shadow-[#1e1e3f]/10"
                            >
                                Accept All
                            </button>
                        </div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
