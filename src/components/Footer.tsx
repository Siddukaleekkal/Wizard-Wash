import { Mail, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t-4 border-[var(--color-accent-purple)] text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
                {/* Main Row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <a href="/" className="shrink-0">
                        <img
                            src="/images/Updated Logo .png"
                            alt="Wizard Wash"
                            className="h-20 w-auto object-contain brightness-110"
                        />
                    </a>

                    {/* Links */}
                    <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[10px] font-heading font-bold uppercase tracking-widest text-slate-400">
                        <a href="/about" className="hover:text-white transition-colors">About</a>
                        <a href="/residential" className="hover:text-white transition-colors">Residential</a>
                        <a href="/commercial" className="hover:text-white transition-colors">Commercial</a>
                        <a href="/service-areas" className="hover:text-white transition-colors">Service Areas</a>
                        <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
                        <a href="/terms" className="hover:text-white transition-colors">Terms</a>
                    </nav>

                    {/* Contact + CTA */}
                    <div className="flex flex-col items-center md:items-end gap-4 shrink-0 w-full md:w-auto">
                        <div className="flex flex-col items-center md:items-end">
                            <a href="tel:8046902465" className="text-xl font-heading font-black tracking-tight text-white hover:text-[var(--color-accent-purple)] transition-colors">
                                804-690-2465
                            </a>
                            <a href="mailto:info@wizardwashva.com" className="flex items-center gap-2 text-[10px] font-heading font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
                                <Mail size={12} className="text-[var(--color-accent-purple)]" />
                                info@wizardwashva.com
                            </a>
                        </div>
                        

                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2">
                    <p className="text-slate-500 font-heading font-bold uppercase tracking-widest text-[9px]">
                        &copy; {new Date().getFullYear()} Wizard Wash LLC. All rights reserved.
                    </p>
                    <p className="text-slate-500 font-heading font-semibold uppercase tracking-[2px] text-[9px]">
                        Designed by <a href="https://viracis.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent-purple)] font-black hover:underline transition-all">Viracis</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
