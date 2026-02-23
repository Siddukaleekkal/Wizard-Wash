"use client";

import React from 'react';
import { Badge } from "@/components/ui/badge";

export default function ServicesSection() {
    const services = [
        {
            title: "House Soft Washing",
            description: "Our low-pressure soft wash system safely removes mold, algae, and grime from your home's exterior without damaging siding or paint.",
            image: "/images/House SoftWash.webp",
        },
        {
            title: "Concrete & Driveway",
            description: "We use professional-grade surface cleaners to strip away YEARS of oil stains, tire marks, and dirt from your driveway and sidewalks.",
            image: "/images/Concrete Driveway.jpg",
        },
        {
            title: "Roof Cleaning",
            description: "Safely eliminate those ugly black streaks on your roof using our manufacturer-approved soft wash treatment.",
            image: "/images/roof cleaning.jpg",
        },
        {
            title: "Holiday Lights Installation",
            description: "Professional, custom-fit holiday lighting for your home. We handle the design, install, teardown, and storage so you can enjoy the season.",
            image: "/images/holiday lights.jpg",
        },
        {
            title: "Commercial Washing",
            description: "High-pressure and soft wash solutions for storefronts, parking garages, and building exteriors to keep your business inviting.",
            image: "/images/Christian Mara Lago.jpg",
        },
        {
            title: "Fleet Washing",
            description: "Keep your company vehicles spotless on the road. We provide eco-friendly mobile fleet washing for trucks and heavy equipment.",
            image: "/images/fleet washing.avif",
        },
    ];

    return (
        <section className="w-full py-16 lg:py-20 bg-white" id="services">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="flex flex-col gap-12">
                    <div className="flex gap-4 flex-col items-center text-center">
                        <div className="flex gap-4 flex-col max-w-3xl">
                            <h2 className="text-3xl md:text-5xl tracking-tighter font-heading font-black uppercase text-[#1e1e3f]">
                                Professional Services
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed tracking-tight text-slate-500 font-body">
                                High-standard exterior cleaning for residential and commercial customers.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="flex flex-col gap-4 group">
                                <div className="overflow-hidden rounded-2xl aspect-[4/3] shadow-xl border border-slate-100">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-2xl font-heading font-black uppercase tracking-tight text-[#1e1e3f] group-hover:text-[#9138df] transition-colors">
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
