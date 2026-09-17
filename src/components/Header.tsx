"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Search, X, Menu, ChevronDown, ArrowRight } from "lucide-react";
import { searchIndex } from "@/data/searchIndex";

export default function Header() {
  const [showPromo, setShowPromo] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileResOpen, setIsMobileResOpen] = useState(false);
  const [isMobileComOpen, setIsMobileComOpen] = useState(false);
  
  // Search state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Handle escape key to close search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setSearchQuery("");
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const searchResults = searchQuery.trim() === "" 
    ? [] 
    : searchIndex.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 8); // limit to top 8 results

  const HighlightedText = ({ text, highlight }: { text: string, highlight: string }) => {
    if (!highlight.trim()) return <span>{text}</span>;
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, i) => 
          regex.test(part) ? <mark key={i} className="bg-yellow-200 text-[#7B2CBF] font-bold rounded-sm px-0.5">{part}</mark> : <span key={i}>{part}</span>
        )}
      </span>
    );
  };

  return (
    <>
      {/* Promotional Banner */}
      {showPromo && (
        <div className="relative w-full bg-[#33155B] text-white py-2 px-10 text-center flex flex-col items-center justify-center">
          <div className="font-black tracking-widest text-sm mb-0.5 text-[#00B55D]">SUMMER SPECIAL!</div>
          <div className="text-[13px] font-normal text-gray-200">
            This season, call the wizards in exterior cleaning! <span className="font-bold underline underline-offset-2 text-white">Call now to SAVE 10%</span> on all power washing services across Virginia!
          </div>
          <button 
            onClick={() => setShowPromo(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-1 transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={3} />
          </button>
        </div>
      )}

      {/* Top Utility Bar */}
      <div className="w-full bg-white border-b border-gray-100 hidden md:block">
        <div className="container mx-auto px-6 h-12 flex items-center justify-end gap-8 text-sm font-semibold text-gray-600">
          <Link href="/faq" className="hover:text-[#00B55D] transition-colors">FAQ</Link>
          <Link href="/quote" className="bg-[#00B55D] text-white px-5 py-1.5 rounded-none font-bold uppercase tracking-wide hover:bg-[#009E50] transition-colors shadow-sm">
            GET A QUOTE
          </Link>
          <Link href="mailto:omar@wizardwashva.com" className="flex items-center gap-2 hover:text-[#00B55D] transition-colors">
            <Mail className="w-4 h-4 text-[#00B55D]" /> Contact Us
          </Link>
          <a href="tel:804-690-5789" className="flex items-center gap-2 border border-[#00B55D] text-[#00B55D] px-5 py-1.5 rounded-none font-bold hover:bg-[#00B55D]/10 transition-colors">
            <Phone className="w-4 h-4" /> 804-690-5789
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="w-full bg-white sticky top-0 z-[100] shadow-sm">
        <div className="container mx-auto px-4 md:px-6 h-20 md:h-28 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo-final.png" 
              alt="Wizard Wash Logo" 
              width={140} 
              height={125} 
              className="object-contain max-h-16 md:max-h-24 w-auto" 
              style={{ width: "auto", height: "auto" }}
              priority 
            />
          </Link>
          
          {isSearchOpen ? (
            <div className="flex-1 h-14 bg-gray-50 border-b-2 border-transparent focus-within:border-[#7B2CBF] transition-colors flex items-center relative">
              <input 
                ref={searchInputRef}
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services, commercial, residential, or Virginia service areas..." 
                className="w-full h-full bg-transparent px-6 text-sm text-[#424242] focus:outline-none placeholder-gray-400 font-medium"
              />
              <button 
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery("");
                }}
                className="p-4 text-gray-400 hover:text-[#424242] transition-colors"
                aria-label="Close Search"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Live Search Results Dropdown */}
              {searchQuery.trim().length > 0 && (
                <div className="absolute top-full left-0 w-full bg-white shadow-[0_20px_50px_rgb(0,0,0,0.15)] border-t border-gray-100 max-h-[60vh] overflow-y-auto z-[200]">
                  {searchResults.length > 0 ? (
                    <div className="flex flex-col p-2">
                      <div className="px-4 py-3 text-[10px] font-black tracking-widest text-gray-400 uppercase">
                        Search Results ({searchResults.length})
                      </div>
                      {searchResults.map((result, i) => (
                        <Link 
                          key={i} 
                          href={result.url}
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery("");
                          }}
                          className="group flex flex-col md:flex-row md:items-center justify-between p-4 mx-2 my-1 rounded-sm hover:bg-[#F9FAFB] border border-transparent transition-all duration-200"
                        >
                          <div className="flex flex-col">
                            <span className="font-heading font-bold text-[#7B2CBF] text-[15px] group-hover:text-[#6B21A8] transition-colors mb-1">
                              <HighlightedText text={result.title} highlight={searchQuery} />
                            </span>
                            <span className="text-gray-500 text-[13px] font-light leading-relaxed">
                              <HighlightedText text={result.description} highlight={searchQuery} />
                            </span>
                          </div>
                          <div className="mt-3 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center text-[#00B55D] font-bold text-xs uppercase tracking-widest">
                            View <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="px-10 py-16 text-center flex flex-col items-center bg-[#F9FAFB]">
                      <Search className="w-10 h-10 text-gray-300 mb-4" />
                      <p className="text-gray-500 font-light text-lg">
                        No results found for &quot;<span className="font-bold text-[#7B2CBF]">{searchQuery}</span>&quot;
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-[12px] lg:text-[13px] font-black tracking-[0.1em] text-[#424242] uppercase h-full">
                <Link href="/about" className="hover:text-[#00B55D] transition-colors">About</Link>
                
                {/* Residential Dropdown */}
                <div className="relative group h-full flex items-center">
                  <button className="hover:text-[#00B55D] transition-colors flex items-center gap-1 cursor-default">
                    Residential Power Washing <ChevronDown className="w-4 h-4 text-[#00B55D] opacity-70 group-hover:opacity-100 group-hover:-rotate-180 transition-all duration-300" />
                  </button>
                  <div className="absolute top-28 left-0 hidden group-hover:flex flex-col bg-white border-t-4 border-[#7B2CBF] shadow-[0_10px_40px_rgb(0,0,0,0.1)] min-w-[320px] z-50 rounded-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link href="/residential/house-wash" className="px-8 py-4 text-[11px] text-[#424242] hover:text-[#7B2CBF] hover:bg-[#F9FAFB] uppercase tracking-[0.15em] font-black border-b border-gray-100 last:border-b-0 transition-colors block">House Wash</Link>
                    <Link href="/residential/concrete-wash-and-seal" className="px-8 py-4 text-[11px] text-[#424242] hover:text-[#7B2CBF] hover:bg-[#F9FAFB] uppercase tracking-[0.15em] font-black border-b border-gray-100 last:border-b-0 transition-colors block">Concrete Wash and Seal</Link>
                    <Link href="/residential/softwash-services" className="px-8 py-4 text-[11px] text-[#424242] hover:text-[#7B2CBF] hover:bg-[#F9FAFB] uppercase tracking-[0.15em] font-black border-b border-gray-100 last:border-b-0 transition-colors block">Softwash Services</Link>
                    <Link href="/residential/annual-power-wash" className="px-8 py-4 text-[11px] text-[#424242] hover:text-[#7B2CBF] hover:bg-[#F9FAFB] uppercase tracking-[0.15em] font-black border-b border-gray-100 last:border-b-0 transition-colors block">Annual Power Wash</Link>
                    <Link href="/residential/brick-and-stone-power-wash" className="px-8 py-4 text-[11px] text-[#424242] hover:text-[#7B2CBF] hover:bg-[#F9FAFB] uppercase tracking-[0.15em] font-black border-b border-gray-100 last:border-b-0 transition-colors block">Brick and Stone Power Wash</Link>
                    <Link href="/residential/wood-power-wash" className="px-8 py-4 text-[11px] text-[#424242] hover:text-[#7B2CBF] hover:bg-[#F9FAFB] uppercase tracking-[0.15em] font-black border-b border-gray-100 last:border-b-0 transition-colors block">Wood Power Wash</Link>
                    <Link href="/residential/gutter-cleaning-services" className="px-8 py-4 text-[11px] text-[#424242] hover:text-[#7B2CBF] hover:bg-[#F9FAFB] uppercase tracking-[0.15em] font-black border-b border-gray-100 last:border-b-0 transition-colors block">Gutter Cleaning Services</Link>
                    <Link href="/residential/sidewalk-deck-patio-wash" className="px-8 py-4 text-[11px] text-[#424242] hover:text-[#7B2CBF] hover:bg-[#F9FAFB] uppercase tracking-[0.15em] font-black border-b border-gray-100 last:border-b-0 transition-colors block">Sidewalk + Deck & Patio Wash</Link>
                    <Link href="/residential/asphalt-sealcoating" className="px-8 py-4 text-[11px] text-[#424242] hover:text-[#7B2CBF] hover:bg-[#F9FAFB] uppercase tracking-[0.15em] font-black border-b border-gray-100 last:border-b-0 transition-colors block">Asphalt Sealcoating</Link>
                    <Link href="/residential/holiday-lights-installation" className="px-8 py-4 text-[11px] text-[#424242] hover:text-[#7B2CBF] hover:bg-[#F9FAFB] uppercase tracking-[0.15em] font-black border-b border-gray-100 last:border-b-0 transition-colors block">Holiday Lights</Link>
                  </div>
                </div>

                {/* Commercial Dropdown */}
                <div className="relative group h-full flex items-center">
                  <button className="hover:text-[#00B55D] transition-colors flex items-center gap-1 cursor-default">
                    Commercial Power Washing <ChevronDown className="w-4 h-4 text-[#00B55D] opacity-70 group-hover:opacity-100 group-hover:-rotate-180 transition-all duration-300" />
                  </button>
                  <div className="absolute top-28 left-0 hidden group-hover:flex flex-col bg-white border-t-4 border-[#7B2CBF] shadow-[0_10px_40px_rgb(0,0,0,0.1)] min-w-[320px] z-50 rounded-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link href="/commercial/fleet-washing" className="px-8 py-4 text-[11px] text-[#424242] hover:text-[#7B2CBF] hover:bg-[#F9FAFB] uppercase tracking-[0.15em] font-black border-b border-gray-100 last:border-b-0 transition-colors block">Fleet Washing</Link>
                    <Link href="/commercial/office-buildings" className="px-8 py-4 text-[11px] text-[#424242] hover:text-[#7B2CBF] hover:bg-[#F9FAFB] uppercase tracking-[0.15em] font-black border-b border-gray-100 last:border-b-0 transition-colors block">Office Buildings</Link>
                    <Link href="/commercial/restaurants" className="px-8 py-4 text-[11px] text-[#424242] hover:text-[#7B2CBF] hover:bg-[#F9FAFB] uppercase tracking-[0.15em] font-black border-b border-gray-100 last:border-b-0 transition-colors block">Restaurants</Link>
                    <Link href="/commercial/storefronts" className="px-8 py-4 text-[11px] text-[#424242] hover:text-[#7B2CBF] hover:bg-[#F9FAFB] uppercase tracking-[0.15em] font-black border-b border-gray-100 last:border-b-0 transition-colors block">Storefronts</Link>
                    <Link href="/commercial/resorts-hotels" className="px-8 py-4 text-[11px] text-[#424242] hover:text-[#7B2CBF] hover:bg-[#F9FAFB] uppercase tracking-[0.15em] font-black border-b border-gray-100 last:border-b-0 transition-colors block">Resorts & Hotels</Link>
                    <Link href="/commercial/stadiums-event-venues" className="px-8 py-4 text-[11px] text-[#424242] hover:text-[#7B2CBF] hover:bg-[#F9FAFB] uppercase tracking-[0.15em] font-black border-b border-gray-100 last:border-b-0 transition-colors block">Stadiums & Event Venues</Link>
                    <Link href="/commercial/home-owners-associations" className="px-8 py-4 text-[11px] text-[#424242] hover:text-[#7B2CBF] hover:bg-[#F9FAFB] uppercase tracking-[0.15em] font-black border-b border-gray-100 last:border-b-0 transition-colors block">Home Owners Associations</Link>
                    <Link href="/commercial/government-municipal-buildings" className="px-8 py-4 text-[11px] text-[#424242] hover:text-[#7B2CBF] hover:bg-[#F9FAFB] uppercase tracking-[0.15em] font-black border-b border-gray-100 last:border-b-0 transition-colors block">Government Buildings</Link>
                  </div>
                </div>

                <Link href="/service-areas" className="hover:text-[#00B55D] transition-colors">Service Areas</Link>
                <Link href="/blog" className="hover:text-[#00B55D] transition-colors">Blog</Link>
              </nav>
              
              <div className="flex items-center gap-4">
                {/* Desktop Search Button */}
                <button 
                  className="hidden md:flex items-center justify-center p-4 border-l border-transparent hover:text-[#00B55D] transition-colors"
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Open Search"
                >
                  <Search className="w-5 h-5" />
                </button>
                
                {/* Mobile Search Button */}
                <button 
                  className="md:hidden p-2 text-[#424242] hover:text-[#00B55D] transition-colors"
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Open Search"
                >
                  <Search className="w-6 h-6" />
                </button>

                {/* Mobile Hamburger Menu Button */}
                <button 
                  className="md:hidden p-2 text-[#424242] hover:text-[#00B55D] transition-colors"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle Menu"
                >
                  {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
              </div>
            </>
          )}
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 max-h-[80vh] overflow-y-auto w-full bg-white border-t border-gray-100 flex flex-col py-6 px-6 gap-6 shadow-xl z-50">
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-[14px] font-black tracking-[0.1em] text-[#424242] uppercase hover:text-[#00B55D] transition-colors">About</Link>
            
            {/* Mobile Residential */}
            <div className="flex flex-col border-b border-gray-50 pb-2">
              <div className="flex items-center justify-between">
                <button onClick={() => setIsMobileResOpen(!isMobileResOpen)} className="text-[14px] text-left font-black tracking-[0.1em] text-[#424242] uppercase hover:text-[#00B55D] transition-colors flex-1">
                  Residential Power Washing
                </button>
                <button onClick={() => setIsMobileResOpen(!isMobileResOpen)} className="p-2 text-[#00B55D]">
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileResOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {isMobileResOpen && (
                <div className="flex flex-col gap-4 mt-4 pl-4 border-l-2 border-[#00B55D]/20">
                  <Link href="/residential/house-wash" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold text-gray-600 uppercase tracking-widest hover:text-[#7B2CBF]">House Wash</Link>
                  <Link href="/residential/concrete-wash-and-seal" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold text-gray-600 uppercase tracking-widest hover:text-[#7B2CBF]">Concrete Wash and Seal</Link>
                  <Link href="/residential/softwash-services" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold text-gray-600 uppercase tracking-widest hover:text-[#7B2CBF]">Softwash Services</Link>
                  <Link href="/residential/annual-power-wash" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold text-gray-600 uppercase tracking-widest hover:text-[#7B2CBF]">Annual Power Wash</Link>
                  <Link href="/residential/brick-and-stone-power-wash" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold text-gray-600 uppercase tracking-widest hover:text-[#7B2CBF]">Brick & Stone</Link>
                  <Link href="/residential/wood-power-wash" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold text-gray-600 uppercase tracking-widest hover:text-[#7B2CBF]">Wood Power Wash</Link>
                  <Link href="/residential/gutter-cleaning-services" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold text-gray-600 uppercase tracking-widest hover:text-[#7B2CBF]">Gutter Cleaning</Link>
                  <Link href="/residential/sidewalk-deck-patio-wash" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold text-gray-600 uppercase tracking-widest hover:text-[#7B2CBF]">Deck & Patio</Link>
                  <Link href="/residential/asphalt-sealcoating" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold text-gray-600 uppercase tracking-widest hover:text-[#7B2CBF]">Asphalt Sealcoating</Link>
                  <Link href="/residential/holiday-lights-installation" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold text-gray-600 uppercase tracking-widest hover:text-[#7B2CBF]">Holiday Lights</Link>
                </div>
              )}
            </div>

            {/* Mobile Commercial */}
            <div className="flex flex-col border-b border-gray-50 pb-2">
              <div className="flex items-center justify-between">
                <button onClick={() => setIsMobileComOpen(!isMobileComOpen)} className="text-[14px] text-left font-black tracking-[0.1em] text-[#424242] uppercase hover:text-[#00B55D] transition-colors flex-1">
                  Commercial Power Washing
                </button>
                <button onClick={() => setIsMobileComOpen(!isMobileComOpen)} className="p-2 text-[#00B55D]">
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileComOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {isMobileComOpen && (
                <div className="flex flex-col gap-4 mt-4 pl-4 border-l-2 border-[#00B55D]/20">
                  <Link href="/commercial/fleet-washing" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold text-gray-600 uppercase tracking-widest hover:text-[#7B2CBF]">Fleet Washing</Link>
                  <Link href="/commercial/office-buildings" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold text-gray-600 uppercase tracking-widest hover:text-[#7B2CBF]">Office Buildings</Link>
                  <Link href="/commercial/restaurants" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold text-gray-600 uppercase tracking-widest hover:text-[#7B2CBF]">Restaurants</Link>
                  <Link href="/commercial/storefronts" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold text-gray-600 uppercase tracking-widest hover:text-[#7B2CBF]">Storefronts</Link>
                  <Link href="/commercial/resorts-hotels" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold text-gray-600 uppercase tracking-widest hover:text-[#7B2CBF]">Resorts & Hotels</Link>
                  <Link href="/commercial/stadiums-event-venues" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold text-gray-600 uppercase tracking-widest hover:text-[#7B2CBF]">Stadiums & Venues</Link>
                  <Link href="/commercial/home-owners-associations" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold text-gray-600 uppercase tracking-widest hover:text-[#7B2CBF]">HOAs</Link>
                  <Link href="/commercial/government-municipal-buildings" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold text-gray-600 uppercase tracking-widest hover:text-[#7B2CBF]">Government Buildings</Link>
                </div>
              )}
            </div>

            <Link href="/service-areas" onClick={() => setIsMobileMenuOpen(false)} className="text-[14px] font-black tracking-[0.1em] text-[#424242] uppercase hover:text-[#00B55D] transition-colors">Service Areas</Link>
            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-[14px] font-black tracking-[0.1em] text-[#424242] uppercase hover:text-[#00B55D] transition-colors">Blog</Link>
            
            <div className="h-px w-full bg-gray-100 my-2"></div>
            
            <div className="flex flex-col gap-4">
              <Link href="/quote" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#00B55D] text-white text-center py-3 rounded-none font-bold uppercase tracking-[0.1em] hover:bg-[#009E50] transition-colors shadow-sm">
                Get A Quote
              </Link>
              <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)} className="text-[#7B2CBF] font-bold text-sm tracking-wide text-center py-2 hover:text-[#6B21A8]">
                Frequently Asked Questions
              </Link>
              <Link href="mailto:omar@wizardwashva.com" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 text-gray-700 font-bold text-sm py-2 hover:text-[#00B55D] transition-colors">
                <Mail className="w-4 h-4 text-[#00B55D]" /> Contact Us (omar@wizardwashva.com)
              </Link>
              <a href="tel:804-690-5789" className="flex items-center justify-center gap-2 text-[#424242] font-bold text-sm py-2 hover:text-[#00B55D]">
                <Phone className="w-4 h-4 text-[#00B55D]" /> 804-690-5789
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Emerald Green Banner with Local Virginia Slogan */}
      <div className="w-full bg-[#00B55D] text-white py-2.5 text-center text-sm font-semibold tracking-wide shadow-sm flex items-center justify-center px-4">
        Proudly Serving Greater Richmond & Central VA
      </div>
    </>
  );
}
