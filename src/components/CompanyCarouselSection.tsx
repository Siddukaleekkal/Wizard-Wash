'use client';

import { InfiniteSlider } from '@/components/ui/infinite-slider';

const COMPANIES = [
    { name: "Chick-fil-A", logo: "/images/Chick-fil-A-logo.png", className: "h-[85px] md:h-[110px]" },
    { name: "ACAC", logo: "/images/acac-transparent.png", className: "h-[65px] md:h-[85px]" },
    { name: "Narwhals", logo: "/images/NarWhalsLogo.webp", className: "h-[80px] md:h-[110px]" },
    { name: "Gold's Gym", logo: "/images/Golds%20Gym%20Transparent.png", className: "h-[85px] md:h-[115px]" },
    { name: "Mar-a-Lago", logo: "/images/mara_lago_transparent.png", className: "h-[105px] md:h-[140px]" },
    { name: "Starbucks", logo: "/images/Starbucks%20Logo.png", className: "h-[75px] md:h-[100px]" },
];

export default function CompanyCarouselSection() {
    return (
        <section className="bg-slate-100 py-16 border-y border-slate-200 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <p className="text-center text-[#9138df] font-heading font-extrabold uppercase tracking-[4px] text-[12px] md:text-[13px] mb-12">
                    Trusted By
                </p>

                <InfiniteSlider gap={60} duration={30}>
                    {COMPANIES.map((company, index) => (
                        <div className="w-[200px] md:w-[280px] h-28 md:h-40 flex items-center justify-center transition-all duration-300 pointer-events-none flex-shrink-0" key={index}>
                            <img src={company.logo} alt={company.name} className={`max-w-[85%] object-contain ${company.className || ''}`} />
                        </div>
                    ))}
                </InfiniteSlider>
            </div>
        </section>
    );
}
