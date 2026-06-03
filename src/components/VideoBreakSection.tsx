"use client";

import React, { useRef, useEffect } from 'react';

export default function VideoBreakSection() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.defaultMuted = true;
            videoRef.current.muted = true;
            videoRef.current.play().catch(console.error);
        }
    }, []);

    return (
        <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
            {/* Full-width Background Video */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/images/Chick-Fil-A.MOV" type="video/quicktime" />
                <source src="/images/Chick-Fil-A.MOV" type="video/mp4" />
            </video>

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />

            {/* Centered Text Overlay */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
                <span className="text-[10px] md:text-[12px] font-heading font-black uppercase tracking-[5px] text-white/50 mb-4">
                    See Us In Action
                </span>
                <h2 className="text-white text-3xl md:text-6xl font-heading font-black uppercase tracking-tight leading-[0.95] drop-shadow-2xl max-w-3xl">
                    Trusted by <br className="md:hidden" />National Brands
                </h2>
                <p className="mt-4 text-white/60 text-sm md:text-base font-body max-w-lg">
                    From local homes to iconic franchises, we deliver the same uncompromising standard of excellence.
                </p>
            </div>
        </section>
    );
}
