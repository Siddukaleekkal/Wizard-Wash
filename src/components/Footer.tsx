import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="mt-auto">
      {/* Global CTA Banner */}
      <div className="w-full bg-[#33155B] text-white py-10 flex flex-col items-center justify-center text-center px-6 border-t-4 border-[#00B55D]">
        <h3 className="text-xl md:text-2xl font-heading font-light mb-2 tracking-wide">
          How Can We Help You?
        </h3>
        <p className="text-gray-200 font-light max-w-2xl mx-auto mb-5 text-[13px] leading-relaxed">
          Find out how we can restore your property's exterior with our wizard-touch cleaning systems focused on delivering pristine results across Virginia.
        </p>
        <Link 
          href="/quote"
          className="inline-block bg-[#00B55D] hover:bg-[#009E50] text-white px-7 py-3 rounded-none font-bold uppercase tracking-[0.15em] text-[12px] transition-colors shadow-lg"
        >
          LET'S GET IN TOUCH
        </Link>
      </div>

      <footer className="w-full bg-white border-t border-gray-200 py-3">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-0">
        
        <div className="flex items-center">
          <Link href="/">
            <Image 
              src="/logo-final.png" 
              alt="Wizard Wash Logo" 
              width={70} 
              height={62} 
              className="object-contain h-12 w-auto" 
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
        </div>

        {/* Middle: Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[12px] font-medium text-gray-500">
          <Link href="/privacy-policy" className="hover:text-[#7B2CBF] transition-colors">Privacy Policy</Link>
          <span className="text-gray-300">|</span>
          <Link href="/terms-of-service" className="hover:text-[#7B2CBF] transition-colors">Terms of Service</Link>
          <span className="text-gray-300">|</span>
          <Link href="/faq" className="hover:text-[#7B2CBF] transition-colors">FAQ</Link>
          <span className="text-gray-300">|</span>
          <span>© {new Date().getFullYear()} Wizard Wash LLC</span>
        </div>

        {/* Right: Credit */}
        <div className="text-[12px] font-medium text-gray-500 text-center lg:text-right">
          Designed and Maintained by <a href="https://viracis.com" target="_blank" rel="noopener noreferrer" className="text-[#00B55D] font-bold hover:text-[#009E50] transition-colors">Viracis</a>
        </div>
      </div>
    </footer>
    </div>
  );
}
