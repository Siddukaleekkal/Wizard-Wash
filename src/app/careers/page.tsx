"use client";

import React, { useState } from 'react';
import { SimpleHeader } from '@/components/ui/simple-header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, UploadCloud, CheckCircle2 } from 'lucide-react';

export default function CareersPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would normally handle the form submission, e.g. sending to an API
        setIsSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-white  flex flex-col">
            <SimpleHeader />

            {/* Hero Section */}
            <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 bg-slate-50 border-b border-slate-100">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6 text-center"
                    >
                        <h1 className="text-[#1e1e3f] text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase">
                            Join Our Team
                        </h1>
                        <p className="text-slate-500 font-heading font-bold uppercase tracking-[2px] text-lg max-w-2xl mx-auto">
                            Build a rewarding career with Virginia's premier exterior restoration specialists. We are always looking for driven, detail oriented professionals.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-24 px-6 bg-white flex-1">
                <div className="max-w-2xl mx-auto">
                    {isSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-[#9138df]/5 border-2 border-[#9138df]/20 rounded-3xl p-12 text-center space-y-6"
                        >
                            <div className="mx-auto w-20 h-20 bg-[#9138df] rounded-full flex items-center justify-center text-white shadow-xl mb-8">
                                <CheckCircle2 size={40} />
                            </div>
                            <h2 className="text-[#1e1e3f] text-3xl font-heading font-black uppercase tracking-tight">Application Received!</h2>
                            <p className="text-slate-600 font-body text-lg">
                                Thank you for your interest in joining Wizard Wash. Our hiring team will review your application and be in touch soon!
                            </p>
                        </motion.div>
                    ) : (
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            onSubmit={handleSubmit}
                            className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-12 space-y-8"
                        >
                            <div className="space-y-2 pb-6 border-b border-slate-100">
                                <h2 className="text-[#1e1e3f] text-2xl font-heading font-black uppercase tracking-widest pl-4 border-l-4 border-[#9138df]">
                                    Application Form
                                </h2>
                                <p className="text-slate-500 font-body text-sm pl-5">Fill out the details below to apply.</p>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                {/* Name Input */}
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-heading font-bold uppercase tracking-widest text-[#1e1e3f]">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 font-body outline-none focus:border-[#9138df] focus:ring-2 focus:ring-[#9138df]/20 transition-all font-medium text-slate-700"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email & Phone Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-heading font-bold uppercase tracking-widest text-[#1e1e3f]">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 font-body outline-none focus:border-[#9138df] focus:ring-2 focus:ring-[#9138df]/20 transition-all font-medium text-slate-700"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-heading font-bold uppercase tracking-widest text-[#1e1e3f]">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            required
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 font-body outline-none focus:border-[#9138df] focus:ring-2 focus:ring-[#9138df]/20 transition-all font-medium text-slate-700"
                                            placeholder="(804) 555-0123"
                                        />
                                    </div>
                                </div>

                                {/* Resume Upload */}
                                <div className="space-y-2 pt-4">
                                    <label className="text-sm font-heading font-bold uppercase tracking-widest text-[#1e1e3f]">Upload Resume</label>
                                    <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-slate-300 border-dashed rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 hover:border-[#9138df]/50 transition-all group">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <UploadCloud className="w-10 h-10 mb-3 text-slate-400 group-hover:text-[#9138df] transition-colors" />
                                            <p className="mb-2 text-sm text-slate-500 font-body">
                                                <span className="font-bold text-[#9138df]">Click to upload</span> or drag and drop
                                            </p>
                                            <p className="text-xs text-slate-400 font-body uppercase tracking-wider font-semibold">PDF, DOCX, or DOC (MAX. 5MB)</p>
                                        </div>
                                        <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
                                    </label>
                                    {fileName && (
                                        <div className="text-sm font-body text-green-600 font-medium flex items-center gap-2 mt-2 bg-green-50 p-3 rounded-lg border border-green-100">
                                            <CheckCircle2 size={16} /> Selected: {fileName}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center h-16 bg-[#9138df] text-white font-heading font-black text-lg px-8 rounded-xl hover:bg-[#7a2ac1] transition-all shadow-[0_10px_20px_-10px_rgba(145,56,223,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(145,56,223,0.6)] hover:-translate-y-0.5 uppercase tracking-widest mt-8 group"
                            >
                                Submit Application <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                            </button>

                        </motion.form>
                    )}
                </div>
            </section>

            <Footer />
        </main >
    );
}
