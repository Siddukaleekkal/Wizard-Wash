"use client";

import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative w-full z-50 bg-white text-[#1e1e3f] shadow-md border-b-4 border-[var(--color-accent-purple)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2 md:py-3 flex justify-between items-end md:items-stretch">
                {/* Logo Area */}
                <a href="/" className="flex items-center shrink-0">
                    <img src="/images/Wizard Wash Logo _Transparent.png" alt="Wizard Wash Logo" className="h-16 md:h-24 w-auto object-contain drop-shadow-md" />
                </a>

                {/* Desktop Right Side Content */}
                <div className="hidden md:flex flex-col justify-between items-end lg:ml-8 flex-grow py-1">
                    {/* Top Row: Call Now */}
                    <div className="flex flex-col items-end mb-1">
                        <span className="text-[10px] lg:text-xs font-heading tracking-widest text-[#1e1e3f]/70 uppercase font-bold mb-0.5">Call Now For Your Free Quote</span>
                        <div className="flex items-center gap-1.5 text-xl lg:text-2xl font-heading font-bold text-[#1e1e3f]">
                            <Phone size={18} className="text-[var(--color-accent-purple)] lg:w-[20px] lg:h-[20px]" />
                            <span>1-800-WIZARD</span>
                        </div>
                    </div>

                    <div className="flex space-x-4 lg:space-x-8 items-center font-heading font-medium text-[12px] lg:text-[14px] uppercase tracking-wider">
                        <a href="/residential" target="_blank" rel="noopener noreferrer" className="transition-colors text-[#1e1e3f] hover:text-[var(--color-accent-purple)] group">
                            <span className="hidden xl:inline">Residential Power Washing</span>
                            <span className="xl:hidden">Residential</span>
                        </a>
                        <a href="/commercial" target="_blank" rel="noopener noreferrer" className="transition-colors text-[#1e1e3f] hover:text-[var(--color-accent-purple)] group">
                            <span className="hidden xl:inline">Commercial Power Washing</span>
                            <span className="xl:hidden">Commercial</span>
                        </a>
                        <a href="/about" target="_blank" rel="noopener noreferrer" className="transition-colors text-[#1e1e3f] hover:text-[var(--color-accent-purple)]">About</a>
                        <a href="/quote" target="_blank" rel="noopener noreferrer" className="bg-[var(--color-accent-purple)] text-white px-4 lg:px-5 py-2 rounded hover:bg-[var(--color-accent-purple-dark)] transition-colors font-bold shadow-md whitespace-nowrap">
                            Request A Quote
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-[#1e1e3f] mb-4" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-white border-t border-slate-200 w-full p-6 flex flex-col space-y-4 shadow-xl"
                >
                    <div className="flex items-center gap-2 text-xl font-heading font-bold text-[#1e1e3f] mb-4 pb-4 border-b border-slate-200">
                        <Phone size={20} className="text-[var(--color-accent-purple)]" />
                        <span>1-800-WIZARD</span>
                    </div>
                    <a href="/residential" target="_blank" rel="noopener noreferrer" className="text-lg font-heading text-[#1e1e3f] font-medium">Residential</a>
                    <a href="/commercial" target="_blank" rel="noopener noreferrer" className="text-lg font-heading text-[#1e1e3f] font-medium">Commercial</a>
                    <a href="/about" target="_blank" rel="noopener noreferrer" className="text-lg font-heading text-[#1e1e3f] font-medium">About</a>
                    <a href="/quote" target="_blank" rel="noopener noreferrer" className="text-lg font-heading text-[var(--color-accent-purple)] font-bold">Request A Quote</a>
                </motion.div>
            )}
        </nav>
    );
}
