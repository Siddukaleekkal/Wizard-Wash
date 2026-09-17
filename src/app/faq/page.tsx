"use client";

import { useState } from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Keep first one open by default, or null

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the difference between power washing and soft washing?",
      answer: "Power washing uses high-pressure water to blast away dirt and grime, which is great for durable surfaces like concrete and stone. Soft washing uses a low-pressure delivery system combined with specialized, eco-friendly cleaning solutions to safely remove mildew, bacteria, and algae without damaging delicate surfaces like siding, roofs, and painted wood."
    },
    {
      question: "Will power washing damage my siding or roof?",
      answer: "Not when done correctly! We strictly use 'soft washing' techniques for siding, roofs, and delicate exterior surfaces. This ensures that your home is cleaned thoroughly without the risk of water intrusion, chipped paint, or structural damage."
    },
    {
      question: "How often should I have my house washed?",
      answer: "We generally recommend having your house washed once a year to prevent the buildup of mold, algae, and grime. However, homes heavily shaded by trees or located near dirt roads may benefit from semi-annual cleanings to maintain their pristine appearance."
    },
    {
      question: "Are your cleaning chemicals safe for my plants and pets?",
      answer: "Yes. The safety of your family, pets, and landscaping is our top priority. We use eco-friendly, biodegradable cleaning solutions. As an extra precaution, we pre-wet all surrounding vegetation before and after the wash to ensure absolute safety."
    },
    {
      question: "Do I need to be home when you wash my property?",
      answer: "No, you do not need to be home. As long as we have access to a working exterior water spigot, all windows and doors are fully closed, and pets are kept indoors, we can complete the job and securely email you the invoice once we're finished."
    },
    {
      question: "Can you remove oil stains from my driveway?",
      answer: "We use professional-grade degreasers and hot-water power washing to significantly lighten and remove oil stains. While fresh spills can often be completely eradicated, older, deeply set oil stains may leave a faint shadow, but we guarantee a vast improvement."
    },
    {
      question: "Why should I hire a professional instead of doing it myself?",
      answer: "DIY power washing often leads to property damage (like etched concrete, stripped paint, or ruined screens) and leaves streaks due to consumer-grade equipment. We bring commercial-grade equipment, specialized knowledge of chemical ratios, and full insurance to guarantee a perfect, damage-free result."
    },
    {
      question: "How do you calculate the cost of a power washing job?",
      answer: "Pricing is based on several factors, including the square footage of the area to be cleaned, the level of dirt and organic growth buildup, and the specific services requested. We offer free, no-obligation quotes so you know exactly what to expect before we begin."
    }
  ];

  return (
    <main className="flex-grow bg-[#F9FAFB] text-[#424242] py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-[#00B55D] text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">
            KNOWLEDGE BASE
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-light text-[#424242] mb-6 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 font-light leading-relaxed max-w-2xl mx-auto text-sm md:text-[15px]">
            Everything you need to know about our power washing, soft washing, and property maintenance services.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border-b border-gray-100 last:border-0 transition-colors ${isOpen ? 'bg-gray-50' : 'bg-white hover:bg-gray-50/50'}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between px-6 py-6 md:px-10 text-left focus:outline-none"
                >
                  <span className="font-medium text-[14px] md:text-[15px] text-[#424242] pr-8">
                    {faq.question}
                  </span>
                  <svg 
                    className={`w-4 h-4 text-gray-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 md:px-10 text-gray-500 font-light text-[14px] md:text-[15px] leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
