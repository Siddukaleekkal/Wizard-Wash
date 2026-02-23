"use client";

import { motion } from 'framer-motion';
import { Droplet, Home, Car, TreePine } from 'lucide-react';

const services = [
    {
        icon: <Home size={40} className="text-white" />,
        title: "House Soft Washing",
        description: "Our low-pressure magic potion safely removes green algae and grime without damaging your siding.",
        color: "from-blue-400 to-sky-500"
    },
    {
        icon: <Car size={40} className="text-white" />,
        title: "Driveway & Concrete",
        description: "We blast away years of dirt, oil, and tire marks, making your driveway look freshly poured.",
        color: "from-purple-400 to-violet-500"
    },
    {
        icon: <TreePine size={40} className="text-white" />,
        title: "Deck & Fence Revival",
        description: "Restore the natural beauty of your wood or composite surfaces with our gentle cleaning spells.",
        color: "from-green-400 to-emerald-500"
    },
    {
        icon: <Droplet size={40} className="text-white" />,
        title: "Roof Wash",
        description: "Eliminate those ugly black streaks and moss, extending the life of your magical roof.",
        color: "from-orange-400 to-amber-500"
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 relative bg-white">
            <div className="absolute top-0 w-full h-12 bg-gradient-to-b from-[var(--color-base-main)] to-transparent" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-[var(--color-text-main)]">Our <span className="title-gradient">Magical Services</span></h2>
                    <p className="text-[var(--color-text-muted)] font-body text-xl">We have a spell for every type of surface, ensuring a brilliantly clean finish every time.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                            className="glassy-card p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg rotate-3 group-hover:rotate-6 transition-transform`}>
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-heading font-bold mb-3 text-[var(--color-text-main)]">{service.title}</h3>
                            <p className="text-[var(--color-text-muted)] font-body text-lg">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
