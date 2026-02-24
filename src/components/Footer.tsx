import { Instagram, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t-[6px] border-[#9138df] py-20 text-white relative overflow-hidden">
            {/* Background decorative glows to match header glassmorphism feel */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9138df]/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#9138df]/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-[1920px] mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

                {/* Brand Column */}
                <div className="flex flex-col items-start gap-8">
                    <a href="/" className="transition-transform hover:scale-105 duration-300 origin-left">
                        <img
                            src="/images/Wizard Wash Logo _Transparent.png"
                            alt="Wizard Wash"
                            className="h-32 md:h-40 w-auto object-contain drop-shadow-2xl brightness-110"
                        />
                    </a>
                    <p className="text-slate-400 font-body text-lg leading-relaxed max-w-sm">
                        Premier exterior maintenance and precision cleaning for high value residential and commercial properties.
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://www.instagram.com/wizardwashva/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#9138df] hover:border-[#9138df] transition-all duration-300 group">
                            <Instagram size={20} className="text-slate-300 group-hover:text-white" />
                        </a>
                    </div>
                </div>

                {/* Services Column */}
                <div>
                    <h4 className="font-heading font-black text-xl uppercase tracking-widest text-white mb-8 border-l-4 border-[#9138df] pl-4">
                        Our Services
                    </h4>
                    <ul className="space-y-4">
                        {[
                            { name: 'House Soft Washing', slug: 'house-wash' },
                            { name: 'Concrete & Driveway', slug: 'concrete-wash-seal' },
                            { name: 'Roof Cleaning', slug: 'softwash-services' },
                            { name: 'Holiday Lights', slug: 'christmas-lights' },
                            { name: 'Commercial Wash', slug: 'offices' },
                            { name: 'Fleet Washing', slug: 'fleet-washing' }
                        ].map((service) => (
                            <li key={service.slug}>
                                <a href={`/services/${service.slug}`} className="text-slate-400 font-heading font-semibold uppercase tracking-wider text-sm hover:text-[#9138df] transition-colors duration-300 flex items-center gap-2 group">
                                    {service.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Links Column */}
                <div>
                    <h4 className="font-heading font-black text-xl uppercase tracking-widest text-white mb-8 border-l-4 border-[#9138df] pl-4">
                        Quick Links
                    </h4>
                    <ul className="space-y-4">
                        <li>
                            <a href="/about" className="text-slate-400 font-heading font-semibold uppercase tracking-wider text-sm hover:text-[#9138df] transition-colors duration-300">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/privacy" className="text-slate-400 font-heading font-semibold uppercase tracking-wider text-sm hover:text-[#9138df] transition-colors duration-300">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/terms" className="text-slate-400 font-heading font-semibold uppercase tracking-wider text-sm hover:text-[#9138df] transition-colors duration-300">
                                Terms of Service
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div className="flex flex-col gap-8">
                    <div>
                        <h4 className="font-heading font-black text-xl uppercase tracking-widest text-white mb-8 border-l-4 border-[#9138df] pl-4">
                            Contact Us
                        </h4>
                        <div className="space-y-6">
                            <a href="tel:8046902465" className="flex items-center gap-4 text-white hover:text-[#9138df] transition-colors cursor-pointer group">
                                <div className="w-10 h-10 rounded-xl bg-[#9138df]/10 flex items-center justify-center text-[#9138df] group-hover:bg-[#9138df]/20 transition-colors">
                                    <Phone size={20} fill="currentColor" className="fill-[#9138df]/20" />
                                </div>
                                <span className="text-2xl font-black font-heading tracking-tight">804-690-2465</span>
                            </a>
                            <p className="text-slate-400 font-body text-[15px] leading-relaxed">
                                Available Mon - Sat: 8:00 AM - 6:00 PM<br />
                                <a href="mailto:wizardwashrva@gmail.com" className="text-[#9138df] hover:text-[#7a2ac1] transition-colors">wizardwashrva@gmail.com</a>
                            </p>
                        </div>
                    </div>

                    <a href="/quote" className="w-full">
                        <Button className="font-heading font-black uppercase tracking-widest py-8 text-lg bg-[#9138df] hover:bg-[#7a2ac1] shadow-[0_10px_20px_-10px_rgba(145,56,223,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(145,56,223,0.6)] hover:-translate-y-1 transition-all duration-300 w-full rounded-[6px]">
                            Get an Estimate
                        </Button>
                    </a>
                </div>
            </div>

            <div className="max-w-[1920px] mx-auto px-6 lg:px-16 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-500 font-heading font-bold uppercase tracking-widest text-[11px]">
                    &copy; {new Date().getFullYear()} Wizard Wash Power Washing. All rights reserved.
                </p>
                <div className="flex gap-8 text-slate-500 font-heading font-bold uppercase tracking-widest text-[11px]">
                    <a href="/terms" className="hover:text-white transition-colors">Terms</a>
                    <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
                    <a href="/" className="hover:text-white transition-colors">Sitemap</a>
                </div>
            </div>
        </footer>
    );
}
