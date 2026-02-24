"use client";

import React from 'react';
import { SimpleHeader } from '@/components/ui/simple-header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white overflow-x-hidden flex flex-col">
            <SimpleHeader />

            <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 bg-white border-b border-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <h1 className="text-[#1e1e3f] text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase">
                            Terms of Service
                        </h1>
                        <p className="text-slate-500 font-heading font-bold uppercase tracking-[2px]">
                            Last Updated: February 23, 2026
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-lg lg:text-xl text-slate-600 leading-relaxed font-body [&_p]:font-body [&_li]:font-body">

                        <div className="space-y-6">
                            <h2 className="text-[#1e1e3f] text-3xl font-heading font-black uppercase tracking-tight border-l-4 border-[#9138df] pl-6">
                                1. Acceptance of Terms
                            </h2>
                            <p>
                                By accessing our website or engaging with our services, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, please do not use our services.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-[#1e1e3f] text-3xl font-heading font-black uppercase tracking-tight border-l-4 border-[#9138df] pl-6">
                                2. Services Provided
                            </h2>
                            <p>
                                Wizard Wash provides professional exterior cleaning services, including but not limited to, pressure washing, soft washing, gutter cleaning, and holiday light installation. We reserve the right to modify or discontinue any part of our services at any time.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-[#1e1e3f] text-3xl font-heading font-black uppercase tracking-tight border-l-4 border-[#9138df] pl-6">
                                3. Estimates and Booking
                            </h2>
                            <p>
                                Estimates provided are based on the information provided by the customer and a preliminary assessment of the property. Prices are subject to change if the scope of work changes or significant unforeseen issues are discovered during the service.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-[#1e1e3f] text-3xl font-heading font-black uppercase tracking-tight border-l-4 border-[#9138df] pl-6">
                                4. Liability and Property Access
                            </h2>
                            <p>
                                Customers must ensure safe access to the property and that all necessary utilities (such as water) are available. While Wizard Wash uses professional-grade equipment and techniques designed for surface safety, we are not liable for pre-existing damage or issues arising from property structural defects.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-[#1e1e3f] text-3xl font-heading font-black uppercase tracking-tight border-l-4 border-[#9138df] pl-6">
                                5. Termination
                            </h2>
                            <p>
                                We reserve the right to refuse service to anyone for any reason at any time. We may also terminate or suspend your access to our website without prior notice for conduct that we believe violates these Terms or is harmful to our business or other users.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
