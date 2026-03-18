'use client';

import { Scissors } from 'lucide-react';

export default function CouponSection() {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-100 px-6 lg:px-8">
            <div className="max-w-4xl mx-auto relative">
                <div className="text-center mb-12">
                    <h2 className="text-[#346299] font-heading font-extrabold text-[14px] lg:text-[15px] uppercase tracking-wide mb-2">
                        Special Promotions
                    </h2>
                    <h1 className="text-[#1c3e7b] text-3xl md:text-5xl font-heading font-black uppercase tracking-tight">
                        Limited Time Offer
                    </h1>
                </div>

                <div className="relative">
                    {/* Dashed background outline */}
                    <div className="absolute inset-0 border-4 border-dashed border-[#1c3e7b]/30 rounded-xl m-1"></div>

                    {/* Main Coupon Card */}
                    <div className="bg-white p-8 md:p-14 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                        {/* Scissors overlay */}
                        <div className="absolute -top-4 -right-4 text-[#1c3e7b] bg-slate-50 p-2 rounded-full rotate-45 hidden md:block">
                            <Scissors size={28} />
                        </div>

                        <div className="text-center md:text-left flex-1">
                            <h2 className="text-[#7ed943] text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter mb-4 drop-shadow-sm">
                                Save 10%
                            </h2>
                            <p className="text-slate-600 font-body text-lg md:text-xl font-medium leading-relaxed">
                                On any residential or commercial power washing service package.
                            </p>
                            <p className="text-slate-400 font-body text-xs md:text-sm mt-5 italic max-w-sm">
                                * Cannot be combined with other offers. Mention this coupon when booking. Valid for a limited time.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 w-full md:w-auto shrink-0 md:pl-10 md:border-l-2 md:border-dashed md:border-[#1c3e7b]/20">
                            <div className="bg-slate-50 text-[#1c3e7b] font-mono font-bold text-center py-4 px-8 rounded border-2 border-slate-200 tracking-[0.2em] text-xl shadow-inner uppercase">
                                WIZARD10
                            </div>
                            <a href="/quote" className="bg-[#1c3e7b] text-white font-heading font-extrabold text-center px-8 py-5 rounded hover:bg-[#264b8a] transition-all shadow-lg hover:shadow-xl uppercase tracking-widest hover:-translate-y-1 block w-full whitespace-nowrap">
                                Claim Discount
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
