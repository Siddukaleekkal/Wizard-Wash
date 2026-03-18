"use client";

import { motion } from 'framer-motion';
import { Star, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        name: "Jessica P.",
        location: "Oakwood Neighborhood",
        quote: "Absolute magic! My driveway hasn't looked this good since we bought the house. The Wizard Wash team was friendly and fast!"
    },
    {
        name: "Mark T.",
        location: "River Crest",
        quote: "They soft-washed our vinyl siding and it looks brand new. I thought we needed to repaint, but they saved us thousands. 10/10!"
    },
    {
        name: "Amanda R.",
        location: "Maple Grove",
        quote: "The green algae on our back patio is totally gone. The kids can finally play out there without slipping. Thank you Wizard Wash!!"
    }
];

export default function Testimonials() {
    return (
        <section id="results" className="py-24 bg-[var(--color-base-main)] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-16 items-center">

                    <div className="w-full md:w-1/3">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight text-[var(--color-text-main)]">
                            Words from our <br /><span className="title-gradient">Happy Villagers</span>
                        </h2>
                        <p className="text-[var(--color-text-muted)] font-body text-xl mb-8">
                            Don't just take our word for it. See what your neighbors are saying about our magical results!
                        </p>
                        <button className="btn-magic px-8 py-3 w-full sm:w-auto text-lg flex items-center justify-center gap-2">
                            See More Reviews <ChevronRight size={20} />
                        </button>
                    </div>

                    <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {testimonials.map((t, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, type: "spring" }}
                                className={`glassy-card p-8 bg-white border-2 border-sky-50 ${index === 2 ? 'md:col-span-2' : ''}`}
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                                    ))}
                                </div>
                                <p className="text-[var(--color-text-main)] font-body text-lg leading-relaxed mb-6 font-medium">"{t.quote}"</p>
                                <div>
                                    <h4 className="font-heading font-bold text-xl text-[var(--color-accent-purple)]">{t.name}</h4>
                                    <p className="text-sm font-body text-sky-600 font-bold">{t.location}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
