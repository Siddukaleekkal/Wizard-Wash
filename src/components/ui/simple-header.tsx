'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { MenuToggle } from '@/components/ui/menu-toggle';

export function SimpleHeader() {
    const [open, setOpen] = React.useState(false);

    const links = [
        {
            label: 'About Us',
            href: '#about',
        },
        {
            label: 'Residential Power Washing Services',
            href: '#residential',
        },
        {
            label: 'Commercial Power Washing',
            href: '#commercial',
        },
        {
            label: 'Careers',
            href: '#careers',
        },
        {
            label: 'Pricing',
            href: '#pricing',
        },
    ];

    return (
        <header className="bg-white/95 supports-[backdrop-filter]:bg-white/80 sticky top-0 z-50 w-full border-b-[4px] border-[#9138df] backdrop-blur-lg shadow-sm">
            <nav className="flex h-24 lg:h-32 w-full items-center justify-between pr-6 pl-4 lg:pr-12 lg:pl-10 max-w-[1920px] mx-auto">
                {/* Left Side: Logo + Links */}
                <div className="flex items-center h-full gap-8 lg:gap-16">
                    <a href="/" className="flex items-center shrink-0 h-full py-4 transition-transform hover:scale-105 duration-300">
                        <img
                            src="/images/Wizard Wash Logo _Transparent.png"
                            alt="Wizard Wash Logo"
                            className="h-full w-auto object-contain drop-shadow-md scale-[1.1] md:scale-[1.24] origin-left"
                        />
                    </a>
                    <div className="hidden min-[1450px]:flex items-center gap-4">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                className={buttonVariants({
                                    variant: 'ghost',
                                    className: 'uppercase tracking-[1px] font-heading font-semibold text-black text-[15px] lg:text-[16px] px-4 whitespace-nowrap transition-all duration-300 hover:text-[#9138df] relative group'
                                })}
                                href={link.href}
                            >
                                {link.label}
                                <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#9138df] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Side: Phone + CTA + Mobile Toggle */}
                <div className="flex items-center gap-6 lg:gap-10">
                    <div className="hidden md:flex flex-col items-end gap-0.5 font-heading">
                        <span className="text-[10px] text-slate-400 uppercase tracking-[2px] font-bold">Connect with us</span>
                        <div className="flex items-center gap-2 text-[#1e1e3f]">
                            <Phone size={20} className="text-[#9138df] fill-[#9138df]/10" />
                            <span className="text-xl lg:text-2xl font-black tabular-nums">804-690-2465</span>
                        </div>
                    </div>

                    <div className="hidden sm:block">
                        <Button className="font-heading font-black uppercase tracking-widest px-8 py-7 text-lg bg-[#9138df] hover:bg-[#7a2ac1] shadow-[0_10px_20px_-10px_rgba(145,56,223,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(145,56,223,0.6)] hover:-translate-y-0.5 transition-all duration-300">
                            Request A Quote
                        </Button>
                    </div>

                    <Sheet open={open} onOpenChange={setOpen}>
                        <Button size="icon" variant="ghost" className="min-[1450px]:hidden hover:bg-slate-100 rounded-full h-12 w-12">
                            <MenuToggle
                                strokeWidth={2.5}
                                open={open}
                                onOpenChange={setOpen}
                                className="size-7 text-[#1e1e3f]"
                            />
                        </Button>
                        <SheetContent
                            className="bg-white/98 supports-[backdrop-filter]:bg-white/90 gap-0 backdrop-blur-xl border-r-slate-200"
                            showClose={false}
                            side="left"
                        >
                            <div className="p-6 flex justify-between items-center border-b border-slate-100 pb-8">
                                <img src="/images/Wizard Wash Logo _Transparent.png" alt="Wizard Wash Logo" className="h-12 w-auto object-contain" />
                                <MenuToggle
                                    strokeWidth={3}
                                    open={open}
                                    onOpenChange={setOpen}
                                    className="size-8 text-[#1e1e3f]"
                                />
                            </div>
                            <div className="grid gap-y-3 px-6 pt-10 pb-5 overflow-hidden [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                                {links.map((link) => (
                                    <a
                                        key={link.label}
                                        className={buttonVariants({
                                            variant: 'ghost',
                                            className: 'justify-start text-xl font-heading font-bold text-black py-8 border-b border-slate-50 rounded-none hover:bg-slate-50 hover:pl-6 transition-all duration-300',
                                        })}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                            <SheetFooter className="mt-auto border-t border-slate-100 bg-slate-50 p-8 flex-col gap-6">
                                <div className="flex flex-col items-center gap-1 font-heading">
                                    <span className="text-xs text-slate-400 uppercase tracking-widest">Available Now</span>
                                    <div className="flex items-center gap-3 text-[#1e1e3f] text-2xl font-black">
                                        <Phone size={24} className="text-[#9138df]" />
                                        <span>804-690-2465</span>
                                    </div>
                                </div>
                                <Button className="w-full text-xl font-heading font-black uppercase py-8 shadow-xl">
                                    Request A Quote
                                </Button>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}
