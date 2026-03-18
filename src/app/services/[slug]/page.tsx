"use client";

import React from 'react';
import { notFound } from 'next/navigation';
import { SimpleHeader } from '@/components/ui/simple-header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Zap, Shield, Star } from 'lucide-react';

// Service data mapping
const SERVICES_DATA = {
    // Residential
    "house-wash": {
        title: "House Soft Washing",
        category: "Residential",
        description: "Our specialized low pressure soft wash system is the industry standard for safe, effective home exterior cleaning. Unlike traditional high pressure washing which can damage siding and force water behind your walls, our soft wash method uses science backed detergents to neutralize mold, algae, and environmental pollutants at the root. We specialize in delicate surfaces like vinyl, stucco, and HardieBoard, ensuring a deep clean that lasts 3x longer than pressure alone while preserving your home's structural integrity and curb appeal.",
        features: ["Safe for all siding types", "Eco friendly detergents", "Long lasting results", "Enhanced curb appeal"]
    },
    "concrete-wash-seal": {
        title: "Concrete Wash and Seal",
        category: "Residential",
        description: "Concrete is a porous material that acts like a sponge for oil, salt, and moisture. Our deep core cleaning process uses high heat professional surface cleaners to lift deep seated stains that standard consumer washers simply can't reach. Following the wash, we apply a premium, breathable silane siloxane sealer. This invisible barrier penetrates the surface to protect against freeze thaw damage, salt pitting, and oil penetration, significantly extending the lifespan of your driveway, patio, or pool deck while maintaining a natural, non slip finish.",
        features: ["Rust & Oil removal", "Premium water repellent seal", "Prevents surface cracking", "Non slip finish"]
    },
    "softwash-services": {
        title: "Softwash Services",
        category: "Residential",
        description: "For the most delicate or intricate parts of your property, Wizard Wash provides specialized softwashing. This technique is specifically designed for surfaces that require sanitization rather than force. We target biological growth like Gloeocapsa Magma (the black streaks on your roof) and various types of moss or lichen. Our process doesn't just wash the surface; it eliminates the spores to prevent rapid regrowth, all while using a water pressure no stronger than a standard garden hose, protecting your landscape and pets.",
        features: ["Zero pressure damage", "Targeted biological removal", "Delicate surface specialization", "Eco safe solutions"]
    },
    "annual-wash": {
        title: "Annual Power Wash",
        category: "Residential",
        description: "Exterior maintenance is not a one time event; it's an investment in your property's value. Our Annual Power Wash program is designed for the proactive homeowner who understands that consistency is key. By staying ahead of organic growth and environmental fallout, we prevent the permanent staining and material degradation that occurs when surfaces are left unmanaged for years. Our members enjoy priority seasonal scheduling, discounted locked in rates, and the peace of mind that their home is always prepared for guests and the changing Virginia weather year round.",
        features: ["Scheduled maintenance", "Preventative care", "Priority booking", "Discounted fixed rates"]
    },
    "brick-stone": {
        title: "Brick and Stone Power wash",
        category: "Residential",
        description: "Masonry requires a sophisticated touch to avoid damaging the mortar joints and the face of the brick or stone. We utilize specialty PH balanced cleaning agents designed to lift carbon build up and efflorescence (salt deposits) from stone and brick without causing erosion. Whether you have natural fieldstone or classic red brick, our experts adjust their methods to match the age and condition of your masonry, restoring the rich color and clean lines that make your architectural features stand out as originally intended.",
        features: ["PH balanced masonry cleaners", "Moss and lichen removal", "Efflorescence treatment", "Deep pore cleaning"]
    },
    "wood-wash": {
        title: "Wood Power wash",
        category: "Residential",
        description: "Wood is a live material that requires careful restoration rather than aggressive cleaning. Our wood cleaning process involves two critical steps: a gentle organic growth removal followed by a specialized neutralizing brightener. This balances the wood's PH level, opening up the grain and bringing back the original golden glow of the timber. This process is essential before any staining or painting project, ensuring your new finish adheres perfectly and lasts for years, rather than peeling within the first season.",
        features: ["Fiber safe cleaning", "Organic growth removal", "Pre staining preparation", "Restored natural grain"]
    },
    "gutter-cleaning": {
        title: "Gutter Cleaning Services",
        category: "Residential",
        description: "Clogged gutters are the primary cause of foundation damage, basement leaks, and expensive roof rot. Our service goes beyond just 'scooping leaves.' We provide a full drainage analysis, ensuring every downspout is cleared and flowing properly. We also specialize in 'Gutter Brightening'—a chemical process that removes the dark oxidation streaks (tiger stripes) from the exterior of your gutters, making them look brand new and restoring the sharp architectural lines of your home's roofline and fascia.",
        features: ["Internal debris removal", "Downspout flush", "External whitening", "Clog prevention"]
    },
    "sidewalk-deck-patio": {
        title: "Sidewalk + Deck & Patio Wash",
        category: "Residential",
        description: "Your outdoor living spaces are the heart of your home during the warmer months. We provide a deep, restorative clean for all walkable surfaces, including wood decks, composite decking, stone patios, and concrete sidewalks. Our process removes deeply embedded dirt, seasonal moss, and slippery algae that can make surfaces dangerous. We use surface specific techniques—gentle softwashing for wood and high performance surface cleaners for concrete—to ensure a uniform, streak free finish that revitalizes your entire outdoor entertaining area.",
        features: ["Surface specific cleaning", "Algae & slips prevention", "Uniform streak free finish", "Restored outdoor beauty"]
    },
    "christmas-lights": {
        title: "Christmas Lights Installation",
        category: "Holiday",
        description: "Wizard Wash takes the 'work' out of the holidays with our truly turnkey, commercial grade lighting experience. We don't use store bought strands; every roofline is custom mapped and the lights are custom cut for a perfect, professional fit with zero dangling wires or messy extension cords. Our service includes the design, installation, proactive maintenance throughout the season, post season removal, and secure storage in our climate controlled facility. Experience the magic of a professionally lit home without ever stepping on a ladder.",
        features: ["Custom cut C9 LED lights", "Timer automated control", "Service & Maintenance", "January removal and storage"]
    },
    "diwali-lights": {
        title: "Diwali Lights Installation",
        category: "Holiday",
        description: "Brighten your home for the Festival of Lights with a professional touch. We understand the significance of Diwali and provide vibrant, symmetrical lighting designs that celebrate the victory of light over darkness. Our commercial grade LED systems offer brilliant colors and sharp clarity that store bought lights can't match. We handle the entire elevation and design process, ensuring your home is the brightest in the neighborhood while you focus on the festivities and traditions with your family and friends.",
        features: ["Vibrant color arrays", "Symmetry and balance design", "Professional installation", "Safe festive lighting"]
    },
    "hanukkah-lights": {
        title: "Hanukkah Lights Installation",
        category: "Holiday",
        description: "Celebrate the eight nights of Hanukkah with a sophisticated blue and white light display. We specialize in elegant architectural outlining that highlights your home's features with crisp, cool toned LED lighting. Our professional team handles the installation with care, providing a joyous and luminous setting for your Hanukkah celebrations. We use durable, outdoor rated components designed to withstand the cold winter elements, ensuring your festive display remains bright and beautiful throughout the entire holiday season.",
        features: ["Blue and white LED themes", "Architectural outlining", "Durable outdoor grade", "Hassle free setup"]
    },
    // Commercial
    "fleet-washing": {
        title: "Fleet Washing",
        category: "Commercial",
        description: "Your fleet is a mobile billboard and often the first impression your customers have of your brand. Wizard Wash provides on site, scheduled fleet maintenance for logistics companies, delivery services, and service providers. We use specialized two step brushless chemical systems that neutralize road film and brighten aluminum without manual scrubbing, keeping your vehicles looking pristine. Our team is fully compliant with EPA water recovery standards, protecting your liability while keeping your fleet the cleanest on the road.",
        features: ["Mobile on site service", "Water recovery compliant", "Monthly plans", "Degreasing & detailing"]
    },
    "offices": {
        title: "Office Building Maintenance",
        category: "Commercial",
        description: "A clean office exterior communicates professionalism and success to your clients. We provide comprehensive facade maintenance for corporate buildings, from single story suites to multi floor complexes. Our services include low pressure exterior wall cleaning, window brightening, and parking garage maintenance. We work around your business hours to ensure zero disruption to your staff and clients, providing a clean, sanitized environment that protects your commercial real estate investment and employee morale.",
        features: ["Multi story capability", "After hours scheduling", "Professional sanitation", "Long term asset protection"]
    },
    "restaurants": {
        title: "Restaurant & Drive Thru Cleaning",
        category: "Commercial",
        description: "High traffic food service environments require heavy duty sanitation to meet health standards and customer expectations. We specialize in high temperature steam cleaning to melt away grease build up from dumpster pads, drive thru lanes, and outdoor seating areas. Our specialized enzymes eliminate the organic odors that can turn customers away. By maintaining a spotless exterior, you communicate a standard of cleanliness that starts the moment a guest pulls into your lot, ensuring their first impression is flawless.",
        features: ["High temp grease removal", "Gum stripping", "Odor control treatment", "Dumpster pad sanitation"]
    },
    "storefronts": {
        title: "Retail & Storefront Washing",
        category: "Commercial",
        description: "In the retail world, curb appeal is directly linked to foot traffic. We provide sharp, consistent cleaning for boutique storefronts and large retail plazas. Our team specializes in removing the buildup of urban pollution, gum, and bird droppings that can detract from your brand's image. We also provide awning cleaning and window frame polishing to ensure your entire facade looks inviting. With flexible before hours scheduling, we ensure your walk ways are clean, dry, and safe before your first customer arrives.",
        features: ["Awnings & Signage cleaning", "Sidewalk deep cleaning", "Glass & Trim brightening", "Schedule before hours"]
    },
    "resorts": {
        title: "Resort & Luxury Asset Care",
        category: "Commercial",
        description: "Wizard Wash understands that resorts and luxury destinations operate on guest experience and absolute perfection. We provide a white glove exterior cleaning service that is quiet, non disruptive, and exceptionally thorough. We focus on the high touch areas: pool decks, outdoor lounges, and beach side facades where salt air can cause rapid corrosion. Our team uses specialized eco friendly detergents that are safe for guests and the local environment, ensuring your destination remains a pristine paradise for every traveler.",
        features: ["Pool deck sanitation", "Guest first scheduling", "Premium preservation", "Cinematic scale projects"]
    },
    "stadium": {
        title: "Stadium & Large Venue Cleaning",
        category: "Commercial",
        description: "Handling the cleaning logistics of massive infrastructure requires a specialized partner with the right scale of equipment. Wizard Wash has the capacity and manpower to handle stadiums, arenas, and large outdoor venues. From high pressure concourse cleaning to mass bleacher sanitation, we work with venue managers to ensure the facility is event ready on tight timelines. We understand the unique challenges of mass human traffic areas and provide the industrial scale of service needed to maintain these community landmarks.",
        features: ["Large scale logistics", "Mass concourse cleaning", "Parking garage maintenance", "Event ready turnover"]
    },
    "hoa": {
        title: "Home Owners Association (HOA)",
        category: "Commercial",
        description: "We partner with HOA boards and property managers to maintain a uniform look of excellence throughout your entire community. By coordinating community wide wash events, we provide significant cost savings to residents while ensuring every home meets the association's aesthetic standards. We also handle common area assets: clubhouses, gated entries, and community fences. Our automated resident scheduling portal and professional billing make it easy for managers to deliver tangible value to their entire neighborhood.",
        features: ["Community wide discounts", "Consistent aesthetics", "Common area maintenance", "Resident scheduling portals"]
    },
    "government": {
        title: "Government & Municipal Buildings",
        category: "Commercial",
        description: "Maintaining public infrastructure requires a partner who is fully vetted, insured, and exceptionally reliable. Wizard Wash provides professional exterior maintenance for local government offices, schools, and civic structures. We understand the specific procurement process and offer flexible invoicing for municipal accounts. From restoring the facade of a historical courthouse to pressure washing public schools before the new year, we provide the professional standard that public assets deserve, preserving tax funded investments.",
        features: ["Fully insured & vetted", "Municipal contract ready", "Civic asset preservation", "Safe public space care"]
    }
};

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = React.use(params);
    const service = SERVICES_DATA[resolvedParams.slug as keyof typeof SERVICES_DATA];

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white  flex flex-col">
            <SimpleHeader />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#9138df]/5 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2" />

                <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8 flex flex-col items-center"
                    >
                        <h1 className="text-[#1e1e3f] text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter leading-[0.95] uppercase">
                            {service.title}
                        </h1>
                        <p className="text-slate-600 text-lg md:text-xl font-body leading-relaxed max-w-3xl">
                            {service.description}
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4 justify-center">
                            <a href="/quote" className="inline-flex items-center h-16 bg-[#9138df] text-white font-heading font-black text-lg px-10 rounded-xl hover:bg-[#7a2ac1] transition-all shadow-[0_20px_40px_-10px_rgba(145,56,223,0.4)] hover:-translate-y-1 uppercase tracking-widest">
                                Book This Service <ArrowRight className="ml-3" size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Service Standards Merged */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-slate-100 w-full"
                    >
                        {service.features.map((feature, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center gap-4">
                                <div className="p-4 bg-purple-50 rounded-full">
                                    <CheckCircle2 size={24} className="text-[#9138df]" />
                                </div>
                                <h3 className="font-heading font-bold text-slate-700 uppercase tracking-wider text-sm md:text-base leading-snug">
                                    {feature}
                                </h3>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Action Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-[1400px] mx-auto bg-[#1e1e3f] rounded-[2rem] p-12 lg:p-24 relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)]">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-[#9138df]/10 skew-x-12 translate-x-1/2" />
                    <div className="relative z-10 flex flex-col items-center text-center gap-12">
                        <div className="space-y-6 max-w-4xl">
                            <h2 className="text-white text-4xl md:text-7xl font-heading font-black uppercase tracking-tight leading-[0.95]">
                                Ready to restore your property&apos;s value?
                            </h2>
                            <p className="text-white/60 text-lg md:text-xl font-heading font-bold uppercase tracking-[4px]">
                                Professional Grade • Fully Insured • Reliable Service
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                            <a href="/quote" className="inline-flex items-center justify-center h-20 bg-[#9138df] text-white font-heading font-black text-xl px-12 rounded-xl hover:bg-[#7a2ac1] transition-all shadow-xl uppercase tracking-widest group">
                                Get A Quote <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="tel:8046902465" className="inline-flex items-center justify-center h-20 bg-transparent text-white border-2 border-white/20 font-heading font-black text-xl px-12 rounded-xl hover:bg-white hover:text-[#1e1e3f] transition-all uppercase tracking-widest">
                                Call Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
