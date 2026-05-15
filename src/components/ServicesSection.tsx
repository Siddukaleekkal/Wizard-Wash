"use client";

import React from 'react';
import { Badge } from "@/components/ui/badge";

export default function ServicesSection() {
    const services = [
        {
            title: "House Soft Washing",
            description: "Our low-pressure soft wash system safely removes mold, algae, and grime from your home's exterior without damaging siding or paint.",
            image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Concrete & Driveway",
            description: "We use professional-grade surface cleaners to strip away YEARS of oil stains, tire marks, and dirt from your driveway and sidewalks.",
            image: "https://images.unsplash.com/photo-1692133188474-8c5591e6a6a8?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Roof Cleaning",
            description: "Safely eliminate those ugly black streaks on your roof using our manufacturer-approved soft wash treatment.",
            image: "https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Holiday Lights Installation",
            description: "Professional, custom-fit holiday lighting for your home. We handle the design, install, teardown, and storage so you can enjoy the season.",
            image: "https://images.unsplash.com/photo-1576692155415-95f820a2c4c1?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Commercial Washing",
            description: "High-pressure and soft wash solutions for storefronts, parking garages, and building exteriors to keep your business inviting.",
            image: "https://images.unsplash.com/photo-1583009640887-eafd1a994d30?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Fleet Washing",
            description: "Keep your company vehicles spotless on the road. We provide eco friendly mobile fleet washing for trucks and heavy equipment.",
            image: "https://images.unsplash.com/photo-1591419478162-a4dd21b7ec0a?auto=format&fit=crop&w=800&q=80"
        },
    ];

    return (
        <section className="w-full py-16 lg:py-20 bg-white" id="services">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="flex flex-col gap-12">
                    <div className="flex gap-4 flex-col items-center text-center">
                        <div className="flex gap-4 flex-col max-w-3xl">
                            <h2 className="text-3xl md:text-5xl tracking-tighter font-heading font-black uppercase text-[var(--color-text-main)]">
                                Professional Services
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed tracking-tight text-slate-500 font-body">
                                High-standard exterior cleaning for residential and commercial customers.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="flex flex-col group rounded-2xl shadow-xl border border-slate-100 bg-white overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1">

                                <div className="flex flex-col gap-3 p-6">
                                    <h3 className="text-2xl font-heading font-black uppercase tracking-tight text-[var(--color-text-main)] group-hover:text-[var(--color-accent-purple)] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 text-[17px] leading-relaxed font-body">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
