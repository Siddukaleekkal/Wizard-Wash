import { Badge } from "@/components/ui/badge";

function Feature() {
    const services = [
        {
            title: "House Soft Washing",
            description: "Our low-pressure soft wash system safely removes mold, algae, and grime from your home's exterior without damaging siding or paint.",
        },
        {
            title: "Concrete & Driveway",
            description: "We use professional-grade surface cleaners to strip away YEARS of oil stains, tire marks, and dirt from your driveway and sidewalks.",
        },
        {
            title: "Roof Cleaning",
            description: "Safely eliminate those ugly black streaks (Gloeocapsa magma) on your roof using our manufacturer approved soft wash treatment.",
        },
        {
            title: "Holiday Lights Installation",
            description: "Professional, custom fit holiday lighting for your home. We handle the design, install, teardown, and storage so you can enjoy the season.",
        },
        {
            title: "Commercial Washing",
            description: "High pressure and soft wash solutions for storefronts, parking garages, and building exteriors to keep your business inviting.",
        },
        {
            title: "Fleet Washing",
            description: "Keep your company vehicles spotless on the road. We provide eco friendly mobile fleet washing for trucks and heavy equipment.",
        },
    ];

    return (
        <div className="w-full py-20 lg:py-32 bg-slate-50/50" id="services">
            <div className="container mx-auto px-6">
                <div className="flex flex-col gap-16">
                    <div className="flex gap-4 flex-col items-center text-center">
                        <div>
                            <Badge variant="outline" className="border-[#9138df] text-[#9138df] px-4 py-1 text-sm uppercase tracking-widest font-bold">Expert Care</Badge>
                        </div>
                        <div className="flex gap-4 flex-col max-w-3xl">
                            <h2 className="text-4xl md:text-6xl tracking-tighter font-heading font-black uppercase text-[#1e1e3f]">
                                Our Professional Services
                            </h2>
                            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-slate-500 font-body">
                                We provide the highest standard of exterior cleaning for residential and commercial customers. Every job is handled with precision and professional care.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                        {services.map((service, index) => (
                            <div key={index} className="flex flex-col gap-4 group cursor-pointer lg:p-4 lg:hover:bg-white lg:hover:shadow-2xl lg:hover:shadow-purple-500/5 lg:rounded-2xl transition-all duration-300">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-2xl font-heading font-black uppercase tracking-tight text-[#1e1e3f] group-hover:text-[#9138df] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 text-base leading-relaxed font-body">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Feature };
