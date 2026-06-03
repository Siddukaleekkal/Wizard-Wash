'use client';

import { InfiniteSlider } from '@/components/ui/infinite-slider';

const COMPANIES = [
    { name: "Chick-fil-A", logo: "/images/Chick-fil-A-logo.png" },
    { name: "ACAC", logo: "/images/acac-transparent.png" },
    { name: "Panera Bread", logo: "/images/New%20Panera%20Bread%20Transparent.png" },
    { name: "Gold's Gym", logo: "/images/New%20Golds%20Gym%20Logo.png" },
    { name: "Starbucks", logo: "/images/Starbucks%20Logo.png" },
];

export default function CompanyCarouselSection() {
    return (
        <section className="bg-slate-50 py-8 border-y border-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-slate-400 font-heading font-black uppercase tracking-[3px] text-[10px] mb-6">
                    Professional Partners
                </p>

                <InfiniteSlider gap={32} duration={40}>
                    {COMPANIES.map((company, index) => (
                        <div className="w-[100px] md:w-[200px] h-12 flex items-center justify-center transition-all duration-500" key={index}>
                            <img 
                                src={company.logo} 
                                alt={company.name} 
                                className="max-h-[32px] md:max-h-[44px] w-auto max-w-[80%] object-contain" 
                            />
                        </div>
                    ))}
                </InfiniteSlider>
            </div>
        </section>
    );
}
