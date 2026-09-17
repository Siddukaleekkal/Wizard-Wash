import SubpageHero from "@/components/SubpageHero";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const industries = {
  "fleet-washing": {
    title: "Fleet Washing",
    description: [
      "Commercial vehicles operate as moving billboards for your brand. We remove corrosive road salts and grease to keep them looking pristine and protect the undercarriage from rust.",
      "Clean fleets communicate professionalism to every driver on the road. We can establish a regular washing schedule so you never have to think about dirty trucks again."
    ],
    testimonial: { quote: "They handle our entire fleet of 20 trucks every weekend. It's totally hands-off for us and the vehicles always look immaculate on Monday morning.", author: "Greg Morrison — Operations Director, VA Freight Solutions" }
  },
  "office-buildings": {
    title: "Office Buildings",
    description: [
      "Employees and clients form their first impression before they even walk through your doors. We wash away unsightly stains from walkways and building exteriors to ensure a safe and professional environment.",
      "Slippery moss and mildew create hidden liabilities on concrete paths. Our hot water systems eradicate these hazards completely."
    ],
    testimonial: { quote: "Wizard Wash washes our corporate headquarters quarterly. The entryways are always pristine and they coordinate perfectly around our office hours.", author: "Karen Davenport — Facilities Manager, Innsbrook Corporate Center" }
  },
  "restaurants": {
    title: "Restaurants",
    description: [
      "Sanitation is the foundation of the food service industry. We specialize in hot water treatments for dumpster pads and grease spills to ensure strict health code compliance.",
      "A bright patio area invites guests to dine outside and enjoy their meal. We clear away discarded food and sticky residues so your outdoor spaces remain inviting."
    ],
    testimonial: { quote: "The hot water treatments on our dumpster pad removed years of grease. Our health inspector actually commented on how clean the rear alley was.", author: "Chef Thomas Rossi — Owner, Richmond Hospitality Group" }
  },
  "storefronts": {
    title: "Storefronts",
    description: [
      "Your storefront dictates foot traffic and consumer confidence. We wash away pollution and discarded chewing gum to maintain a pristine shopping environment.",
      "Clean windows and bright awnings catch the eye of pedestrians walking past. Retail locations thrive when the building looks cared for and secure."
    ],
    testimonial: { quote: "Removing the chewing gum and grime from the front sidewalk made an immediate difference in how inviting our retail space looks.", author: "Lisa Vance — General Manager, Carytown Retail" }
  },
  "resorts-hotels": {
    title: "Resorts & Hotels",
    description: [
      "Guests travel to resorts expecting luxury and relaxation. We maintain impeccable grounds from the pool deck all the way up to multi story facades.",
      "Slippery pool areas present a massive risk to guest safety. We softly wash these delicate surfaces to remove algae and prevent accidents."
    ],
    testimonial: { quote: "We rely on them to keep our pool deck and walkways spotless. Their team is discreet, efficient, and they never disturb our guests.", author: "Marcus Hayes — General Manager, Riverfront Hotel & Suites" }
  },
  "stadiums-event-venues": {
    title: "Stadiums & Event Venues",
    description: [
      "High capacity venues demand heavy duty cleaning solutions. We power wash bleachers and concrete concourses to handle massive post event messes.",
      "Spilled drinks and discarded food quickly turn into sticky hazards. We clear these massive spaces rapidly so the venue is ready for the next game."
    ],
    testimonial: { quote: "Cleaning up after a 5,000 person event is no small task. Wizard Wash's high-capacity rigs knock out the concourses in record time.", author: "Derek Sullivan — Director of Operations, Central VA Event Center" }
  },
  "home-owners-associations": {
    title: "Home Owners Associations",
    description: [
      "Beautiful communities keep property values high and residents happy. We partner with HOA boards to clean common areas and neighborhood entrance signs.",
      "Dirty sidewalks drag down the aesthetic of the entire street. We restore these paths to maintain a uniform standard of excellence."
    ],
    testimonial: { quote: "They have a unified plan that keeps all of our common sidewalks and neighborhood signs looking brand new without us ever having to call them.", author: "Patricia Lawson — HOA Board President, Wyndham Community" }
  },
  "government-municipal-buildings": {
    title: "Government & Municipal Buildings",
    description: [
      "Public buildings stand as symbols of civic pride and order. We provide reliable and secure exterior cleaning for courthouses and libraries.",
      "Graffiti and pollution accumulate quickly in public squares. We remove these blemishes to restore the dignity of public spaces."
    ],
    testimonial: { quote: "Their response time for surface restoration on our municipal property is exceptional. They are highly reliable contractors.", author: "Arthur Miller — Facilities Director, Central Virginia Municipal Services" }
  }
};

export function generateStaticParams() {
  return Object.keys(industries).map((industry) => ({
    industry,
  }));
}

export default async function CommercialIndustryPage({ params }: { params: Promise<{ industry: string }> | { industry: string } }) {
  const resolvedParams = await Promise.resolve(params);
  const industryData = industries[resolvedParams.industry as keyof typeof industries];

  if (!industryData) {
    notFound();
  }

  return (
    <main className="flex-grow bg-[#FFFFFF] text-[#424242]">
      
      {/* 1. Hero Section */}
      <SubpageHero
        subtitle="Commercial Service"
        title={industryData.title}
        description={`Professional exterior maintenance and power washing services for ${industryData.title.toLowerCase()} across Greater Richmond and Central Virginia.`}
        showForm={true}
      />

      {/* 2. Promotional Banner */}
      <section className="bg-[#33155B] w-full py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white text-center md:text-left">
            Schedule Today to Save 10% on Commercial Contracts
          </h2>
          <Link 
            href="/quote" 
            className="bg-[#00B55D] text-white font-black text-sm uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#009E50] transition-colors"
          >
            Get A Free Quote
          </Link>
        </div>
      </section>

      {/* 3. Text Section */}
      <section className="bg-[#F8F9FA] py-20 lg:py-32">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#7B2CBF] mb-8 leading-tight">
            Maintain A Pristine Image <br className="hidden md:block" /> For Your {industryData.title}
          </h2>
          <div className="text-gray-600 font-light leading-relaxed text-[15px] space-y-6 text-left md:text-center">
            {industryData.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <p>
              Maintaining a clean commercial exterior will help ensure your business projects professionalism and safety. Wizard Wash is a premium commercial service provider with the advanced equipment and trained personnel to handle large-scale properties safely and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Two Up Cards Section */}
      <section className="bg-white py-20 lg:py-32 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Card 1 */}
            <div className="bg-white shadow-[0_10px_40px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col h-full">
              <div className="relative w-full h-56 bg-gray-200">
                <Image 
                  src="/Gallery/DSC06537.jpeg" 
                  alt="Professional Commercial Cleaning" 
                  fill 
                  className="object-cover"
                />
                {/* Real Logo Insert */}
                <div className="absolute bottom-0 left-6 bg-white p-3 shadow-lg translate-y-1/2 flex items-center justify-center h-16 w-16">
                  <img src="/logo-final.png" alt="Wizard Wash" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="p-10 pt-16 flex-1 flex flex-col">
                <h3 className="text-xl font-heading font-bold text-[#7B2CBF] mb-4">A Pristine Professional Image</h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  First impressions matter in business. A professionally cleaned property signals to your clients, partners, and employees that you value excellence and attention to detail.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-[0_10px_40px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col h-full">
              <div className="relative w-full h-56 bg-gray-200">
                <Image 
                  src="/Gallery/DSC07627.JPG" 
                  alt="Full Commercial Services Rig" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-6 bg-white p-3 shadow-lg translate-y-1/2 flex items-center justify-center h-16 w-16">
                  <img src="/logo-final.png" alt="Wizard Wash" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="p-10 pt-16 flex-1 flex flex-col">
                <h3 className="text-xl font-heading font-bold text-[#7B2CBF] mb-4">Our Comprehensive Commercial Services</h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed mb-4">
                  We are equipped to handle specialized commercial needs, including:
                </p>
                <ul className="flex flex-col gap-2 text-sm text-[#424242]">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00B55D]"/> Dumpster Pad Sanitization</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00B55D]"/> Gum & Graffiti Removal</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00B55D]"/> High-Traffic Concrete Brightening</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00B55D]"/> Building Facade & Awning Washing</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00B55D]"/> Parking Lot & Garage Cleaning</li>
                </ul>
              </div>
            </div>

          </div>

          <div className="flex justify-center mt-16 mb-24">
            <Link 
              href="/quote" 
              className="bg-[#7B2CBF] text-white font-black text-sm uppercase tracking-[0.15em] px-10 py-4 shadow-lg hover:bg-[#6824A3] transition-colors"
            >
              Get A Free Quote
            </Link>
          </div>
          
        </div>
      </section>

      {/* 5. Testimonial Break */}
      <section className="bg-[#F8F9FA] relative pt-16 pb-24">
        {/* Overlapping card logic */}
        <div className="absolute top-0 left-0 w-full h-32 bg-white -translate-y-full"></div>
        <div className="container mx-auto px-6 max-w-4xl relative -mt-32">
          <div className="bg-white shadow-[0_20px_60px_rgb(0,0,0,0.1)] border border-gray-100 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
            {/* Diagonal design element */}
            <div className="hidden md:block absolute top-0 right-0 w-64 h-full bg-[#7B2CBF] skew-x-12 translate-x-16 opacity-10"></div>
            <div className="hidden md:block absolute top-0 right-0 w-48 h-full bg-[#7B2CBF] skew-x-12 translate-x-8"></div>
            
            <div className="flex-1 relative z-10 text-center md:text-left md:pr-48 lg:pr-56">
              <h3 className="text-2xl font-heading font-bold text-[#7B2CBF] mb-4">Hear From Our Corporate Clients</h3>
              <p className="text-gray-600 font-light text-[15px] italic leading-relaxed mb-4">
                "{industryData.testimonial.quote}"
              </p>
              <p className="text-[#424242] font-bold text-xs uppercase tracking-wider">
                - {industryData.testimonial.author}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Materials Section */}
      <section className="bg-[#33155B] py-24 text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8 leading-tight">
            Commercial Surfaces We Service
          </h2>
          <div className="text-white/90 font-light leading-relaxed text-[15px] space-y-6">
            <p>
              Every commercial property presents its own unique set of challenges, from heavy grease accumulation in restaurant loading zones to delicate historical facades in downtown areas. 
            </p>
            <p>
              You can trust our highly-trained technicians to apply the right amount of pressure and the appropriate cleaning agents to ensure your surfaces are thoroughly cleaned without being damaged.
            </p>
            <p>
              We guarantee outstanding results for all commercial construction materials, including:
            </p>
            <ul className="list-disc pl-6 space-y-4 marker:text-[#00B55D]">
              <li>
                <strong className="text-white font-bold">Concrete & Pavement:</strong> High-traffic walkways, parking garages, and drive-thrus are magnets for oil, gum, and dirt. We use specialized hot water equipment to lift deep-set stains out of porous concrete.
              </li>
              <li>
                <strong className="text-white font-bold">Stucco & Siding:</strong> Building exteriors collect dust, algae, and pollution over time. We utilize soft-washing techniques to safely dissolve grime without risking damage to the paint or material.
              </li>
              <li>
                <strong className="text-white font-bold">Brick & Masonry:</strong> We remove efflorescence, mold, and graffiti from brick facades and retaining walls, restoring the classic, professional look of masonry.
              </li>
              <li>
                <strong className="text-white font-bold">Awnings & Signage:</strong> Your brand signage is your most important asset. We delicately clean fabric and vinyl awnings to keep your colors bright and your business highly visible.
              </li>
            </ul>
            <p>
              Our complete commercial packages can be scheduled after hours or during low-traffic times to ensure minimal disruption to your daily operations.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Three Up Benefit Cards */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white shadow-lg border border-gray-100 flex flex-col h-full">
              <div className="relative w-full h-48 bg-gray-200">
                <Image 
                  src="/Commercial%20Power%20Washing/protecting%20your%20brand.avif" 
                  alt="Protecting Your Brand" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-lg font-heading font-bold text-[#7B2CBF] mb-4">Protecting Your Brand</h3>
                <ul className="list-disc pl-4 space-y-3 text-sm text-gray-600 font-light marker:text-[#00B55D]">
                  <li>
                    <strong className="text-[#424242] font-semibold">Elevate Customer Trust:</strong> A clean exterior immediately builds credibility with prospective clients and sets a high standard for your business operations.
                  </li>
                  <li>
                    <strong className="text-[#424242] font-semibold">Employee Morale:</strong> Providing a pristine working environment boosts employee pride and overall satisfaction.
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg border border-gray-100 flex flex-col h-full">
              <div className="relative w-full h-48 bg-gray-200">
                <Image 
                  src="/Commercial%20Power%20Washing/protect%20property%20value.avif" 
                  alt="Protect Property Value" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-lg font-heading font-bold text-[#7B2CBF] mb-4">Protect Property Value</h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed mb-4">
                  Routine maintenance prevents organic growth and pollution from permanently degrading your building materials, ultimately saving you thousands in repair and replacement costs.
                </p>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  Ask about our scheduled maintenance contracts to keep your property protected year-round!
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg border border-gray-100 flex flex-col h-full">
              <div className="relative w-full h-48 bg-gray-200">
                <Image 
                  src="/Commercial%20Power%20Washing/ensure%20safety%20and%20compliance.avif" 
                  alt="Ensure Safety" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-lg font-heading font-bold text-[#7B2CBF] mb-4">Ensure Safety & Compliance</h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed mb-4">
                  Grease, algae, and neglected walkways present significant slip-and-fall liabilities. Regular pressure washing removes these hazards entirely.
                </p>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  We use EPA-compliant, biodegradable detergents and strictly adhere to environmental runoff regulations, keeping your business fully compliant.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Bundle Services Today Section */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#7B2CBF] mb-4">
            Bundle Commercial Services & Save
          </h2>
          <p className="text-gray-600 font-light text-[15px] max-w-3xl mx-auto mb-16 leading-relaxed">
            Consolidate your exterior maintenance with Wizard Wash. We offer a full suite of commercial services tailored to your property. Bundle multiple services into a recurring contract and save 10%!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Building Washing */}
            <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-6 shadow-[0_5px_20px_rgb(0,0,0,0.05)]">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0">
                <Image src="/Commercial%20Power%20Washing/building%20facade%20wash.avif" alt="Building Wash" fill className="object-cover" />
              </div>
              <h3 className="text-[#7B2CBF] font-bold text-lg text-left">Building Facade Wash</h3>
            </div>
            {/* Dumpster */}
            <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-6 shadow-[0_5px_20px_rgb(0,0,0,0.05)]">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0">
                <Image src="/Commercial%20Power%20Washing/dumpster%20sanitization.avif" alt="Dumpster Pad Cleaning" fill className="object-cover" />
              </div>
              <h3 className="text-[#7B2CBF] font-bold text-lg text-left">Dumpster Pad Sanitization</h3>
            </div>
            {/* Parking */}
            <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-6 shadow-[0_5px_20px_rgb(0,0,0,0.05)]">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0">
                <Image src="/Commercial%20Power%20Washing/parking%20garage%20cleaning.avif" alt="Parking Garage" fill className="object-cover" />
              </div>
              <h3 className="text-[#7B2CBF] font-bold text-lg text-left">Parking Garage Cleaning</h3>
            </div>
            {/* Graffiti */}
            <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-6 shadow-[0_5px_20px_rgb(0,0,0,0.05)]">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0">
                <Image src="/Commercial%20Power%20Washing/graffiti.avif" alt="Graffiti Removal" fill className="object-cover" />
              </div>
              <h3 className="text-[#7B2CBF] font-bold text-lg text-left">Graffiti & Gum Removal</h3>
            </div>
          </div>

          <Link href="/quote" className="inline-block bg-[#00B55D] hover:bg-[#009E50] text-white font-bold uppercase tracking-widest text-sm py-4 px-10 rounded transition-colors shadow-lg">
            REQUEST COMMERCIAL QUOTE
          </Link>
        </div>
      </section>

      {/* 9. Stats & Trust Badges Section */}
      <section className="relative py-24 md:py-32 bg-[#33155B] text-white">
        <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <div className="flex flex-col md:flex-row justify-center md:gap-32 gap-10 mb-16">
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2 tracking-tight">10+</div>
              <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/90">Combined Years of Service</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2 tracking-tight">5,000+</div>
              <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/90">Satisfied Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2 tracking-tight">100%</div>
              <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/90">Satisfaction Guarantee</div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 md:px-12 w-full max-w-3xl flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
            {/* BBB Badge */}
            <div className="flex flex-col items-center justify-center flex-1">
              <img src="/BBB Accredited Business.png" alt="BBB Accredited Business A+" className="h-[70px] w-auto object-contain" />
            </div>

            {/* HomeAdvisor Badge */}
            <div className="flex flex-col items-center justify-center flex-1 md:border-l md:border-r border-gray-200 py-6 md:py-0 md:px-6 w-full md:w-auto border-t border-b md:border-t-0 md:border-b-0">
              <img src="/HomeAdvisor.png" alt="HomeAdvisor Approved" className="h-[70px] w-auto object-contain" />
            </div>

            {/* PWNA Badge */}
            <div className="flex flex-col items-center justify-center flex-1">
              <img src="/PWNA Logo.png" alt="PWNA Official Member" className="h-[70px] w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}
