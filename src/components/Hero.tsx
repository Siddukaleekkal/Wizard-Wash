"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { PhoneCall, ChevronDown } from "lucide-react";

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.defaultMuted = true;
            videoRef.current.muted = true;
            videoRef.current.play().catch(console.error);
        }

        // Zoho form initialization for home hero
        try {
            const f = document.createElement("iframe");
            let ifrmSrc = 'https://forms.zohopublic.com/omarwizard1/form/GetAFreeQuoteForm/formperma/JKnd2lv_4XpoFIS21rxUojbH3SWFcFEE_oEvAG_7KJ4?zf_rszfm=1';

            f.src = ifrmSrc;
            f.style.border = "none";
            f.style.height = "100%";
            f.style.width = "100%";
            f.style.transition = "all 0.5s ease";
            f.setAttribute("aria-label", 'Get A Free Quote Form');

            const d = document.getElementById("zf_div_home_hero");
            if (d && !d.hasChildNodes()) {
                d.appendChild(f);
            }
        } catch (e) { }
    }, []);

    return (
        <section className="relative w-full min-h-[100svh] lg:h-[100svh] flex items-center overflow-hidden bg-[#1e1e3f]">
            {/* Background Video */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 lg:opacity-60"
            >
                <source src="/images/Hero Video.mp4" type="video/mp4" />
            </video>

            {/* Content Container */}
            <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-0 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* Left Side: Copy */}
                <div className="flex-1 text-center lg:text-left space-y-6 sm:space-y-8 pt-8 lg:pt-0">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-heading font-black tracking-tighter leading-[0.95] uppercase drop-shadow-2xl">
                            The Standard of <br />
                            <span className="text-white">Excellence in</span> <br />
                            <span className="text-[var(--color-accent-purple)]">Power Washing</span>
                        </h1>

                        <p className="mt-6 text-white/90 text-sm sm:text-base md:text-lg font-body leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Licensed, insured, and dedicated to delivering spotless, high-performance results for residential and commercial properties in Richmond and beyond.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4">
                            <a href="tel:8046902465" className="inline-flex items-center justify-center bg-white text-[#1e1e3f] font-heading font-black text-base sm:text-lg px-8 sm:px-10 py-4 rounded-lg hover:bg-[var(--color-accent-purple)] hover:text-white transition-all border border-white/10 uppercase tracking-widest gap-3 w-full sm:w-auto">
                                <PhoneCall size={20} />
                                804-690-2465
                            </a>
                        </div>

                        {/* Social Proof / Stats */}
                        <div className="mt-12 flex flex-wrap justify-center lg:justify-start items-center gap-8 border-t border-white/10 pt-8">
                            <div>
                                <p className="text-white text-2xl font-black font-heading">5,000+</p>
                                <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Properties Cleaned</p>
                            </div>
                            <div className="w-px h-8 bg-white/10 hidden sm:block" />
                            <div>
                                <p className="text-white text-2xl font-black font-heading">100%</p>
                                <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Fully Insured</p>
                            </div>
                            <div className="w-px h-8 bg-white/10 hidden sm:block" />
                            <div>
                                <p className="text-white text-2xl font-black font-heading">5/5</p>
                                <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Google Rated</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Compact Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-[450px] shrink-0"
                >
                    <div className="bg-white rounded-[2rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden p-6 sm:p-8 flex flex-col items-center">
                        <div className="text-center mb-6">
                            <h3 className="font-heading font-black text-[#1e1e3f] text-xl sm:text-2xl uppercase tracking-wider">Save 10% Today</h3>
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Get your free quote in minutes</p>
                        </div>

                        <div
                            id="zf_div_home_hero"
                            className="w-full h-[400px] sm:h-[450px] overflow-y-auto scrollbar-hide flex justify-center"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {/* Zoho Iframe Injected Here */}
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-1 text-white/30"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
                <ChevronDown size={32} strokeWidth={1} />
            </motion.div>
        </section>
    );
}
