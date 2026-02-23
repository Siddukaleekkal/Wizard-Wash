'use client';

import { InfiniteSlider } from '@/components/ui/infinite-slider';

const COMPANIES = [
    { name: "VIGIL", logo: "/images/vigil-transparent.png", className: "scale-125 md:scale-150" },
    { name: "Chick-fil-A", logo: "/images/Chick-fil-A-logo.png" },
    { name: "ACAC", logo: "/images/acac-transparent.png" },
    { name: "The Trump Organization", logo: "/images/The_Trump_Organization-Logo.wine.svg" },
    { name: "Narwhals", logo: "/images/NarWhalsLogo.webp" },
    { name: "Lakeside BBQ", logo: "/images/LakeSide BBQ.png" },
];

export default function CompanyCarouselSection() {
    return (
        <section className="bg-slate-50 py-16 border-y border-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <p className="text-center text-[#9138df] font-heading font-extrabold uppercase tracking-[4px] text-[12px] md:text-[13px] mb-12">
                    Trusted By
                </p>

                <InfiniteSlider gap={50} duration={30}>
                    {COMPANIES.map((company, index) => (
                        <div className="w-[180px] md:w-[240px] h-24 md:h-32 flex items-center justify-center transition-all duration-300 pointer-events-none" key={index}>
                            <img src={company.logo} alt={company.name} className={`max-w-full max-h-full object-contain ${company.className || ''}`} />
                        </div>
                    ))}
                </InfiniteSlider>
            </div>
        </section>
    );
}
