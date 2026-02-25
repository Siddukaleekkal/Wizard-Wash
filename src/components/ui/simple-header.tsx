'use client';

import React, { useState } from 'react';
import { Phone, ChevronDown, ChevronRight, Star } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { MenuToggle } from '@/components/ui/menu-toggle';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

interface NavLink {
    label: string;
    href?: string;
    subLinks?: {
        label: string;
        href: string;
        nestedLinks?: {
            label: string;
            href: string;
        }[];
    }[];
}

export function SimpleHeader() {
    const [open, setOpen] = React.useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const links: NavLink[] = [
        {
            label: 'About',
            href: '/about',
        },
        {
            label: 'Residential',
            subLinks: [
                { label: 'House Wash', href: '/services/house-wash' },
                { label: 'Concrete Wash and Seal', href: '/services/concrete-wash-seal' },
                { label: 'Softwash Services', href: '/services/softwash-services' },
                { label: 'Annual Power Wash', href: '/services/annual-wash' },
                { label: 'Brick and Stone Power wash', href: '/services/brick-stone' },
                { label: 'Wood Power wash', href: '/services/wood-wash' },
                { label: 'Gutter Cleaning Services', href: '/services/gutter-cleaning' },
                { label: 'Sidewalk + Deck & Patio Wash', href: '/services/sidewalk-deck-patio' },
                {
                    label: 'Holiday Lights Installation',
                    href: '/services/christmas-lights',
                    nestedLinks: [
                        { label: 'Christmas Lights Installation', href: '/services/christmas-lights' },
                        { label: 'Diwali Lights Installation', href: '/services/diwali-lights' },
                        { label: 'Hanukkah Lights installation', href: '/services/hanukkah-lights' },
                    ]
                },
            ]
        },
        {
            label: 'Commercial',
            subLinks: [
                { label: 'Fleet Washing', href: '/services/fleet-washing' },
                { label: 'Offices', href: '/services/offices' },
                { label: 'Restaurants', href: '/services/restaurants' },
                { label: 'Storefronts', href: '/services/storefronts' },
                { label: 'Resorts', href: '/services/resorts' },
                { label: 'Stadium', href: '/services/stadium' },
                { label: 'Home Owners Association', href: '/services/hoa' },
                { label: 'Government and Municipal Buildings', href: '/services/government' },
            ]
        },
    ];

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white/95 supports-[backdrop-filter]:bg-white/80 sticky top-0 z-50 w-full border-b-[4px] border-[#9138df] backdrop-blur-lg shadow-sm"
        >
            <nav className="flex h-24 lg:h-32 w-full items-center justify-between px-4 lg:px-8 xl:px-12 max-w-[2000px] mx-auto">
                {/* Left Side: Logo + Links */}
                <div className="flex items-center h-full gap-8 lg:gap-16">
                    <a href="/" className="flex items-center shrink-0 h-full py-4 transition-transform hover:scale-105 duration-300">
                        <img
                            src="/images/Wizard Wash Logo _Transparent.png"
                            alt="Wizard Wash Logo"
                            className="h-full w-auto object-contain drop-shadow-md scale-[1.0] md:scale-[1.1] xl:scale-[1.24] origin-left"
                        />
                    </a>
                    <div className="hidden md:flex items-center gap-1 xl:gap-2">
                        {links.map((link) => (
                            <div
                                key={link.label}
                                className="relative group/nav h-full flex items-center"
                                onMouseEnter={() => setActiveDropdown(link.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                {link.href ? (
                                    <a
                                        className={buttonVariants({
                                            variant: 'ghost',
                                            className: `uppercase tracking-[1px] font-heading font-semibold text-black text-[12px] lg:text-[14px] px-2 lg:px-4 whitespace-nowrap transition-all duration-300 hover:text-[#9138df] flex items-center gap-0.5 lg:gap-1 h-12 ${activeDropdown === link.label ? 'text-[#9138df]' : ''}`
                                        })}
                                        href={link.href}
                                    >
                                        {link.label}
                                        {link.subLinks && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
                                    </a>
                                ) : (
                                    <div
                                        className={`uppercase tracking-[1px] font-heading font-semibold text-black text-[12px] lg:text-[14px] px-2 lg:px-4 whitespace-nowrap transition-all duration-300 hover:text-[#9138df] flex items-center gap-0.5 lg:gap-1 h-12 cursor-default ${activeDropdown === link.label ? 'text-[#9138df]' : ''}`}
                                    >
                                        {link.label}
                                        {link.subLinks && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
                                    </div>
                                )}

                                {/* Desktop Dropdown */}
                                {link.subLinks && (
                                    <AnimatePresence>
                                        {activeDropdown === link.label && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute top-full left-0 w-80 bg-white shadow-2xl rounded-2xl border border-slate-100 p-2 z-[60]"
                                            >
                                                {link.subLinks.map((sub) => (
                                                    <div key={sub.label} className="relative group/sub">
                                                        <a
                                                            href={sub.href}
                                                            className="flex items-center justify-between px-4 py-3 text-[13px] font-heading font-semibold uppercase tracking-wider text-[#1e1e3f] hover:bg-[#9138df]/5 hover:text-[#9138df] rounded-lg transition-all"
                                                        >
                                                            {sub.label}
                                                            {sub.nestedLinks && <ChevronRight size={14} />}
                                                        </a>

                                                        {/* Nested Holiday Lights Dropdown */}
                                                        {sub.nestedLinks && (
                                                            <div className="absolute left-full top-0 ml-1 w-72 bg-white shadow-2xl rounded-2xl border border-slate-100 p-2 hidden group-hover/sub:block z-[70]">
                                                                {sub.nestedLinks.map((nested) => (
                                                                    <a
                                                                        key={nested.label}
                                                                        href={nested.href}
                                                                        className="block px-4 py-3 text-[12px] font-heading font-semibold uppercase tracking-wider text-slate-600 hover:bg-[#9138df]/5 hover:text-[#9138df] rounded-lg transition-all"
                                                                    >
                                                                        {nested.label}
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Phone + CTA + Mobile Toggle */}
                <div className="flex items-center gap-1 xl:gap-8">
                    <div className="hidden xl:flex flex-col items-end gap-0.5 font-heading">
                        <span className="text-[9px] xl:text-[10px] text-slate-400 uppercase tracking-[2px] font-bold">Connect with us</span>
                        <a href="tel:8046902465" className="flex items-center gap-2 text-[#1e1e3f] hover:text-[#9138df] transition-colors cursor-pointer">
                            <Phone size={16} className="text-[#9138df] fill-[#9138df]/10 xl:w-[20px] xl:h-[20px]" />
                            <span className="text-lg xl:text-2xl font-black tabular-nums">804-690-2465</span>
                        </a>
                    </div>

                    <div className="hidden xl:block">
                        <a href="https://www.google.com/search?sca_esv=dbb6f4e1ffc1e896&sxsrf=ANbL-n7rRm4GNWyJNrUglvcmVBOYg2vBZg:1771949709046&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOahQjTJLDpqnqzO0lmYkDot0TaZn3ZHTvLZ5NH4RlZunwEeMaPa2c2X3b2aY3MMZYrnEoMbBX0AIO-UQMp2MOtybnQK7E3NId1aN45gntQ9qETrmKiSvgfCh_r8heUCsgEAaWLU%3D&q=Wizard+Wash+Soft+Washing+%26+Gutter+cleaning+Reviews&sa=X&ved=2ahUKEwimot6Hw_KSAxU6FmIAHSJgLLAQ0bkNegQIPxAF&biw=1899&bih=928&dpr=1" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="font-heading font-black uppercase tracking-widest px-4 xl:px-6 py-6 xl:py-7 text-[13px] xl:text-[15px] border-[#9138df] text-[#9138df] hover:bg-[#9138df] hover:text-white transition-all duration-300 rounded-xl group">
                                <Star className="w-5 h-5 mr-2 fill-current group-hover:scale-110 transition-transform" />
                                Review
                            </Button>
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <a href="/quote">
                            <Button className="font-heading font-black uppercase tracking-widest px-3 xl:px-8 py-5 xl:py-7 text-[12px] xl:text-lg bg-[#9138df] hover:bg-[#7a2ac1] shadow-[0_10px_20px_-10px_rgba(145,56,223,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(145,56,223,0.6)] hover:-translate-y-0.5 transition-all duration-300 rounded-xl">
                                <span className="xl:inline">Request A Quote</span>
                                <span className="xl:hidden">Quote</span>
                            </Button>
                        </a>
                    </div>

                    <Sheet open={open} onOpenChange={setOpen}>
                        <Button size="icon" variant="ghost" className="md:hidden hover:bg-slate-100 rounded-full h-12 w-12">
                            <MenuToggle
                                strokeWidth={2.5}
                                open={open}
                                onOpenChange={setOpen}
                                className="size-7 text-[#1e1e3f]"
                            />
                        </Button>
                        <SheetContent
                            className="bg-white gap-0 border-r-slate-100 overflow-y-auto"
                            showClose={false}
                            side="left"
                        >
                            <div className="p-6 flex justify-between items-center border-b border-slate-100 pb-8 sticky top-0 bg-white z-10">
                                <img src="/images/Wizard Wash Logo _Transparent.png" alt="Wizard Wash Logo" className="h-12 w-auto object-contain" />
                                <MenuToggle
                                    strokeWidth={3}
                                    open={open}
                                    onOpenChange={setOpen}
                                    className="size-8 text-[#1e1e3f]"
                                />
                            </div>
                            <div className="grid gap-y-2 px-6 pt-10 pb-5">
                                {links.map((link) => (
                                    <div key={link.label} className="border-b border-slate-50 last:border-0">
                                        <div className="flex items-center justify-between">
                                            {link.href ? (
                                                <a
                                                    className={buttonVariants({
                                                        variant: 'ghost',
                                                        className: 'justify-start text-xl font-heading text-black py-8 pr-2 pl-0 hover:bg-transparent hover:text-[#9138df] flex-1 font-medium',
                                                    })}
                                                    href={link.href}
                                                    onClick={() => !link.subLinks && setOpen(false)}
                                                >
                                                    {link.label}
                                                </a>
                                            ) : (
                                                <div
                                                    className="justify-start text-xl font-heading text-black py-8 pr-2 pl-0 flex-1 flex items-center cursor-default font-medium"
                                                    onClick={() => link.subLinks && setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                                                >
                                                    {link.label}
                                                </div>
                                            )}
                                            {link.subLinks && (
                                                <button
                                                    onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                                                    className="p-4 text-[#9138df]"
                                                >
                                                    <ChevronDown className={`transition-transform duration-300 ${mobileExpanded === link.label ? 'rotate-180' : ''}`} />
                                                </button>
                                            )}
                                        </div>

                                        {/* Mobile Submenu */}
                                        <AnimatePresence>
                                            {link.subLinks && mobileExpanded === link.label && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    className="overflow-hidden bg-white rounded-xl mb-4"
                                                >
                                                    {link.subLinks.map((sub) => (
                                                        <div key={sub.label}>
                                                            <a
                                                                href={sub.href}
                                                                className="block px-6 py-4 text-sm font-heading font-semibold uppercase tracking-widest text-[#1e1e3f] hover:text-[#9138df]"
                                                                onClick={() => !sub.nestedLinks && setOpen(false)}
                                                            >
                                                                {sub.label}
                                                            </a>
                                                            {sub.nestedLinks && (
                                                                <div className="pl-8 pb-4 space-y-3">
                                                                    {sub.nestedLinks.map((nested) => (
                                                                        <a
                                                                            key={nested.label}
                                                                            href={nested.href}
                                                                            className="block text-[12px] font-heading font-semibold uppercase tracking-wider text-slate-500 hover:text-[#9138df]"
                                                                            onClick={() => setOpen(false)}
                                                                        >
                                                                            {nested.label}
                                                                        </a>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                            <SheetFooter className="mt-8 border-t border-slate-100 bg-white p-8 flex-col gap-6">
                                <div className="flex flex-col items-center gap-1 font-heading">
                                    <span className="text-xs text-slate-400 uppercase tracking-widest">Available Now</span>
                                    <a href="tel:8046902465" className="flex items-center gap-3 text-[#1e1e3f] hover:text-[#9138df] transition-colors text-2xl font-black cursor-pointer group">
                                        <Phone size={24} className="text-[#9138df] group-hover:scale-110 transition-transform" />
                                        <span>804-690-2465</span>
                                    </a>
                                </div>
                                <div className="w-full space-y-3">
                                    <a href="/quote" className="block w-full">
                                        <Button className="w-full text-xl font-heading font-black uppercase py-8 shadow-xl rounded-xl bg-[#9138df] hover:bg-[#7a2ac1]">
                                            Request A Quote
                                        </Button>
                                    </a>
                                    <a href="https://www.google.com/search?sca_esv=dbb6f4e1ffc1e896&sxsrf=ANbL-n7rRm4GNWyJNrUglvcmVBOYg2vBZg:1771949709046&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOahQjTJLDpqnqzO0lmYkDot0TaZn3ZHTvLZ5NH4RlZunwEeMaPa2c2X3b2aY3MMZYrnEoMbBX0AIO-UQMp2MOtybnQK7E3NId1aN45gntQ9qETrmKiSvgfCh_r8heUCsgEAaWLU%3D&q=Wizard+Wash+Soft+Washing+%26+Gutter+cleaning+Reviews&sa=X&ved=2ahUKEwimot6Hw_KSAxU6FmIAHSJgLLAQ0bkNegQIPxAF&biw=1899&bih=928&dpr=1" className="block w-full" target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" className="w-full text-lg font-heading font-black uppercase py-7 border-[#9138df] text-[#9138df] hover:bg-[#9138df] hover:text-white transition-colors duration-300 rounded-xl group">
                                            <Star className="w-5 h-5 mr-2 fill-current" />
                                            Leave a Review
                                        </Button>
                                    </a>
                                </div>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </motion.header>
    );
}
