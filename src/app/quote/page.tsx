"use client";

import React from 'react';
import { SimpleHeader } from '@/components/ui/simple-header';
import Footer from '@/components/Footer';
import { EstimateForm } from '@/components/EstimateForm';
import { motion } from 'framer-motion';
import { Calendar, ShieldCheck, Sparkles } from 'lucide-react';

export default function QuotePage() {
    return (
        <main className="min-h-screen bg-[var(--color-base-main)]  flex flex-col">
            <SimpleHeader />

            {/* Hero Section for Quote Page */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#9138df]/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[100px] -z-10 -translate-x-1/2" />

                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-[#9138df] font-heading font-extrabold text-sm uppercase tracking-[4px]">
                                Instant Estimates
                            </h2>
                            <h1 className="text-[#1e1e3f] text-5xl md:text-7xl font-heading font-black tracking-tighter leading-[1.1] uppercase">
                                Restore Your <br />
                                Property's Shine
                            </h1>
                        </div>

                        <p className="text-slate-600 text-xl font-body leading-relaxed max-w-xl">
                            Ready for a transformation? Fill out the form to receive a professional estimate for your residential or commercial cleaning project.
                        </p>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <EstimateForm />
                    </motion.div>

                </div>
            </section>

            <div className="mt-auto">
                <Footer />
            </div>
        </main>
    );
}
