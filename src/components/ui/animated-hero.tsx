"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => ["spotless", "sparkling", "transformed", "restored", "immaculate"],
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    return (
        <div className="w-full">
            <div className="container mx-auto">
                <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
                    <div>
                        <Button variant="secondary" size="sm" className="gap-2 bg-[#9138df]/10 text-[#9138df] hover:bg-[#9138df]/20 border-none px-4 py-1 h-auto">
                            Check out our latest work <MoveRight className="w-4 h-4" />
                        </Button>
                    </div>
                    <div className="flex gap-4 flex-col">
                        <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-heading font-black uppercase text-[#1e1e3f]">
                            <span className="block">Your home will look</span>
                            <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1 text-[#9138df] min-h-[1.2em]">
                                &nbsp;
                                {titles.map((title, index) => (
                                    <motion.span
                                        key={index}
                                        className="absolute"
                                        initial={{ opacity: 0, y: "100%" }}
                                        transition={{ type: "spring", stiffness: 50 }}
                                        animate={
                                            titleNumber === index
                                                ? {
                                                    y: 0,
                                                    opacity: 1,
                                                }
                                                : {
                                                    y: titleNumber > index ? "-150%" : "150%",
                                                    opacity: 0,
                                                }
                                        }
                                    >
                                        {title}
                                    </motion.span>
                                ))}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed tracking-tight text-slate-500 max-w-2xl text-center font-body">
                            Licensed, insured, and dedicated to providing spotless results for residential and commercial clients. The standard in quality power washing.
                        </p>
                    </div>
                    <div className="flex flex-row gap-4">
                        <Button size="lg" className="gap-4 font-heading font-black uppercase tracking-widest" variant="outline">
                            Call Us <PhoneCall className="w-4 h-4" />
                        </Button>
                        <Button size="lg" className="gap-4 font-heading font-black uppercase tracking-widest bg-[#9138df] hover:bg-[#7a2ac1]">
                            Request Quote <MoveRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Hero };
