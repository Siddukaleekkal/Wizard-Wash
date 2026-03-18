'use client';

import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';

const REVIEWS = [
    {
        name: "Kim Nguyen",
        text: "Omar and Carlos were amazing. I was concerned with using harsh chemicals around my house... They suggested their own solutions and the results were more than expected with reasonable pricing. Highly recommended!",
        relativeTime: "a year ago"
    },
    {
        name: "Alex Peets",
        text: "Great company to work with. They were very professional and got my gutters and house spotless!",
        relativeTime: "1 day ago"
    },
    {
        name: "Zenas Edwards",
        text: "Folks at Wizard Wash were very responsive and did an awesome job!",
        relativeTime: "6 days ago"
    },
    {
        name: "Amy Melniczenko",
        text: "I am so pleased with the work of Omar and his team! They did a fantastic job and I’m so happy with the results! Highly recommend!",
        relativeTime: "4 months ago"
    },
    {
        name: "Tyree Flowers",
        text: "Wizardwash is a 5 star service. They are a good and solid team.",
        relativeTime: "a month ago"
    },
    {
        name: "Kiko Khan",
        text: "Christian did a fantastic wash on my home with kind customer service!",
        relativeTime: "1 month ago"
    },
    {
        name: "Natalee Rinaca",
        text: "Wizard Wash did a fantastic job power washing our house. They were efficient and affordable!",
        relativeTime: "1 week ago"
    },
    {
        name: "S Mitchell",
        text: "Omar and his crew did an awesome job! They soft washed the roof and it now looks brand new also power washed gutters and more!",
        relativeTime: "6 months ago"
    },
    {
        name: "Dea C",
        text: "These guys went above and beyond, really exceeding my high standards. My house looks completely brand new. Omar has great communication.",
        relativeTime: "7 months ago"
    },
    {
        name: "Holden Thayer",
        text: "Christian Hancock did a really great job and cleaned my house extremely well. It was a fair price and good value for my money.",
        relativeTime: "a year ago"
    },
    {
        name: "Murat Kucukkazdal",
        text: "Wizard Wash did an amazing job on my home’s exterior! Super professional, great attention to detail, and very efficient. Definitely five stars!",
        relativeTime: "a year ago"
    },
    {
        name: "Leslie C",
        text: "They were at our house within hours on their day off! They did a fantastic job power washing our porch, sidewalk, and drive. Highly recommended!",
        relativeTime: "a year ago"
    },
    {
        name: "Paul Pinigis",
        text: "I am extremely satisfied with the end results. I didn’t expect everything to come as clean as it did. Absolutely worth the money.",
        relativeTime: "a year ago"
    },
    {
        name: "Sheeba Venugopal",
        text: "Very polite gentlemen, they were punctual and communicated well. Their work was clean and neat. A pleasure to work with them.",
        relativeTime: "a year ago"
    },
    {
        name: "Luis Garcia",
        text: "Excellent Pressure Washing Service! I recently hired Wizard Wash to pressure wash my home, and I couldn’t be happier with the results.",
        relativeTime: "a year ago"
    },
    {
        name: "Rehab Elbekhoumy",
        text: "I hired Wizard Wash to clean out my gutters and wash my windows. Very diligent and hard workers. House has never looked better.",
        relativeTime: "a year ago"
    }
];

export default function TestimonialsSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'center',
            skipSnaps: false,
            containScroll: false
        },
        [Autoplay({ delay: 4000, stopOnInteraction: false })]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="relative py-16 bg-slate-950 overflow-hidden" id="reviews">
            <div className="relative z-10 max-w-[1400px] mx-auto">

                {/* Simplified Header */}
                <div className="text-center mb-12 px-6">
                    <h2 className="text-[#9138df] font-heading font-black text-[12px] uppercase tracking-[3px] mb-2">
                        Success Stories
                    </h2>
                    <h1 className="text-white text-xl md:text-3xl font-heading font-black tracking-tight leading-tight">
                        Client Feedback
                    </h1>
                </div>

                <div className="relative">
                    {/* Carousel Viewport */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {REVIEWS.map((review, index) => {
                                const isActive = index === selectedIndex;
                                return (
                                    <div
                                        className="flex-none w-[85%] md:w-[45%] lg:w-[30%] px-3 transition-opacity duration-500 ease-in-out"
                                        key={index}
                                        style={{
                                            opacity: isActive ? 1 : 0.4,
                                        }}
                                    >
                                        <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col h-full min-h-[220px]">
                                            {/* Stars - Muted Gold */}
                                            <div className="flex text-[#c5a059] gap-0.5 mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} fill="currentColor" strokeWidth={0} size={14} />
                                                ))}
                                            </div>

                                            {/* Testimonial Text */}
                                            <p className="text-slate-100 font-medium text-base md:text-[17px] leading-relaxed mb-6">
                                                "{review.text}"
                                            </p>

                                            {/* Attribution */}
                                            <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                                                <div className="flex flex-col">
                                                    <span className="text-white font-heading font-black uppercase text-[12px] tracking-wider">{review.name}</span>
                                                    <span className="text-slate-500 font-heading font-bold text-[9px] uppercase tracking-widest">{review.relativeTime}</span>
                                                </div>

                                                <div className="w-4 h-4 text-white opacity-20">
                                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Compact Navigation Buttons */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={scrollPrev}
                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
