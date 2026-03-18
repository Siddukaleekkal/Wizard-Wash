"use client";

import React from 'react';
import { SimpleHeader } from '@/components/ui/simple-header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white  flex flex-col">
            <SimpleHeader />

            <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 bg-white border-b border-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <h1 className="text-[#1e1e3f] text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase">
                            Privacy Policy
                        </h1>
                        <p className="text-slate-500 font-heading font-bold uppercase tracking-[2px]">
                            Effective Date: February 23, 2026
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-lg lg:text-xl">
                    <div className="space-y-12 text-slate-600 leading-relaxed font-body [&_p]:font-body [&_li]:font-body">

                        <div className="space-y-6">
                            <h2 className="text-[#1e1e3f] text-3xl font-heading font-black uppercase tracking-tight border-l-4 border-[#9138df] pl-6">
                                1. Introduction
                            </h2>
                            <p>
                                At Wizard Wash ("we," "us," or "our"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-[#1e1e3f] text-3xl font-heading font-black uppercase tracking-tight border-l-4 border-[#9138df] pl-6">
                                2. Information We Collect
                            </h2>
                            <p>
                                When you interact with Wizard Wash, we may collect the following types of information:
                            </p>
                            <ul className="list-disc pl-8 space-y-4">
                                <li><strong>Contact Data:</strong> Name, email address, phone number, and physical service address.</li>
                                <li><strong>Service Details:</strong> Information about your property, specific cleaning needs, and preferred scheduling.</li>
                                <li><strong>Usage Data:</strong> Information about how you use our website, including IP addresses, browser type, and page interactions.</li>
                                <li><strong>Marketing Preferences:</strong> Your preferences in receiving marketing from us and your communication preferences.</li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-[#1e1e3f] text-3xl font-heading font-black uppercase tracking-tight border-l-4 border-[#9138df] pl-6">
                                3. How We Use Your Information
                            </h2>
                            <p>
                                We use your personal information for the following purposes:
                            </p>
                            <ul className="list-disc pl-8 space-y-4">
                                <li>To provide professional exterior cleaning and maintenance services.</li>
                                <li>To provide accurate service estimates and quotes.</li>
                                <li>To communicate with you regarding appointments, service updates, and follow ups.</li>
                                <li>To improve our website functionality and user experience.</li>
                                <li>To send promotional material or newsletters (if you have opted in).</li>
                                <li>To comply with legal and regulatory obligations.</li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-[#1e1e3f] text-3xl font-heading font-black uppercase tracking-tight border-l-4 border-[#9138df] pl-6">
                                4. Data Retention and Security
                            </h2>
                            <p>
                                We implement industry standard security measures to protect your personal data from unauthorized access, disclosure, or destruction. We only retain your information for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-[#1e1e3f] text-3xl font-heading font-black uppercase tracking-tight border-l-4 border-[#9138df] pl-6">
                                5. Sharing Your Information
                            </h2>
                            <p>
                                Wizard Wash does not sell, rent, or trade your personal information to third parties. We may share your data with trusted service providers (such as hosting partners or scheduling software) who assist us in operating our business and providing services to you, provided they agree to keep your information confidential.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-[#1e1e3f] text-3xl font-heading font-black uppercase tracking-tight border-l-4 border-[#9138df] pl-6">
                                6. Cookies and Tracking
                            </h2>
                            <p>
                                Our website uses cookies to enhance your browsing experience and analyze site traffic. You can choose to disable cookies through your browser settings, although this may affect the functionality of certain parts of our website.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-[#1e1e3f] text-3xl font-heading font-black uppercase tracking-tight border-l-4 border-[#9138df] pl-6">
                                7. Your Rights
                            </h2>
                            <p>
                                Depending on your location, you may have rights regarding your personal information, including the right to access, correct, or request the deletion of your data. To exercise these rights, please contact us at <span className="text-[#9138df] font-bold">wizardwashrva@gmail.com</span>.
                            </p>
                        </div>

                        <div className="space-y-6 pt-12 border-t border-slate-100">
                            <h2 className="text-[#1e1e3f] text-3xl font-heading font-black uppercase tracking-tight border-l-4 border-[#9138df] pl-6">
                                8. Contact Us
                            </h2>
                            <p>
                                If you have any questions or concerns about this Privacy Policy, please reach out to us:
                            </p>
                            <div className="bg-slate-50 p-8 rounded-2xl space-y-2 border border-slate-100">
                                <p className="font-heading font-bold text-[#1e1e3f]">Wizard Wash Power Washing</p>
                                <p>Richmond, Virginia</p>
                                <p className="text-[#9138df]">wizardwashrva@gmail.com</p>
                                <p>804-690-2465</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
