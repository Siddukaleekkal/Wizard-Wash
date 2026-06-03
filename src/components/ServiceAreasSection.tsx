'use client';

import { MapPin } from 'lucide-react';

const LOCATIONS = [
    "Fairfax County",
    "Loudoun County",
    "Prince William County",
    "Arlington County",
    "Alexandria",
    "Stafford County",
    "Fauquier County",
    "Spotsylvania County"
];

export default function ServiceAreasSection() {
    return (
        <section className="py-24 bg-[#1c3e7b] relative overflow-hidden">
            {/* Soft gradient background effect */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#7ed943] via-transparent to-transparent"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    {/* Left text block */}
                    <div className="max-w-xl text-center lg:text-left">
                        <h2 className="text-[#7ed943] font-heading font-extrabold text-[15px] tracking-widest uppercase mb-4 drop-shadow-md">
                            Our Coverage
                        </h2>
                        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase tracking-tight mb-6">
                            Service Areas
                        </h1>
                        <p className="text-blue-100 font-body text-lg leading-relaxed mb-8">
                            We are proud to serve Northern Virginia and the surrounding communities with top-rated power washing and soft washing services.
                        </p>
                        <p className="text-white/70 font-body font-medium italic">
                            Don't see your county listed? Give us a call at <a href="tel:866.331.1410" className="text-[#7ed943] font-bold hover:underline not-italic ml-1">866.331.1410</a> to check our availability!
                        </p>
                    </div>

                    {/* Right Locations Grid */}
                    <div className="w-full lg:max-w-lg grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {LOCATIONS.map((location, i) => (
                            <div key={i} className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-5 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] shadow-sm">
                                <div className="bg-[#7ed943] p-2 rounded-md shrink-0">
                                    <MapPin className="text-[#1c3e7b]" size={20} strokeWidth={2.5} />
                                </div>
                                <span className="text-white font-heading font-bold tracking-wide text-[15px] uppercase">{location}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
