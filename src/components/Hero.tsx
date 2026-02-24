"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => ["Spotless", "Sparkling", "Perfect", "Restored", "Immaculate"],
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    return (
        <section className="relative w-full h-[70vh] min-h-[600px] lg:h-[80vh] overflow-hidden bg-black border-b-4 border-[#9138df]">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/images/Hero Video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Visual Design: Left to Right Gradient Overlay (60% black to 0%) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>

            <div className="relative z-20 max-w-[1920px] mx-auto px-6 lg:px-20 h-full flex flex-col justify-center text-left">
                <div className="max-w-4xl flex flex-col gap-2">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-tight uppercase tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                        <span className="block">The Standard in</span>
                        <span className="relative block h-[1.1em] text-[#9138df] overflow-hidden">
                            {titles.map((title, index) => (
                                <motion.span
                                    key={index}
                                    className="absolute left-0 top-0 bottom-0 flex items-center"
                                    initial={{ opacity: 0, y: "100%" }}
                                    transition={{ type: "spring", stiffness: 50, damping: 15 }}
                                    animate={
                                        titleNumber === index
                                            ? {
                                                y: 0,
                                                opacity: 1,
                                            }
                                            : {
                                                y: titleNumber > index ? "-100%" : "100%",
                                                opacity: 0,
                                            }
                                    }
                                >
                                    {title}
                                </motion.span>
                            ))}
                        </span>
                        <span className="block">Power Washing</span>
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-white font-body leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] font-medium max-w-2xl opacity-95">
                        Licensed, insured, and dedicated to spotless results for residential and commercial clients.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a href="/quote" className="inline-block bg-[#9138df] text-white font-heading font-black text-lg px-10 py-5 rounded hover:bg-[#7a2ac1] transition-all shadow-[0_10px_30px_-10px_rgba(145,56,223,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(145,56,223,0.6)] hover:-translate-y-1 uppercase tracking-widest border border-white/10">
                            Request A Quote
                        </a>
                        <a href="tel:8046902465" className="inline-block bg-white/10 backdrop-blur-md text-white font-heading font-black text-lg px-10 py-5 rounded hover:bg-white/20 transition-all border border-white/20 uppercase tracking-widest">
                            Call Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
