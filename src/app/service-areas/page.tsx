import SubpageHero from "@/components/SubpageHero";
import Image from "next/image";
import Link from "next/link";

export default function ServiceAreasPage() {
  return (
    <main className="flex-grow bg-[#FFFFFF] text-[#424242]">
      <SubpageHero 
        subtitle="Where We Work"
        title="Service Areas"
        description="Proudly serving the Greater Richmond Metro and Central Virginia with enterprise-grade power washing services."
        showForm={true}
      />

      {/* Intro Section (Image Right) */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 lg:pr-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#7B2CBF] mb-6 leading-tight">
                Power Washing in Richmond & Central Virginia You Can Count On
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Seasonal humidity, tree pollen, mold, and fluctuating temperature swings subject properties throughout the Greater Richmond area to relentless environmental stress. Our power washing treatments address these conditions by safely removing harmful organic buildup and applying protective solutions.
              </p>
              <p className="text-gray-600 font-light leading-relaxed">
                We help Virginia homeowners and commercial property managers protect their investments, keeping your home, walkways, roof, or business looking pristine year-round.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden shadow-xl border-4 border-white">
                <Image src="/Gallery/DSC07618.JPG" alt="Wizard Wash Service Rig in Central Virginia" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-[#33155B] py-12 border-y-4 border-[#00B55D]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Schedule Today to Save 10%</h2>
          <Link href="/quote" className="bg-[#00B55D] hover:bg-[#009E50] text-white font-bold uppercase tracking-widest text-sm py-4 px-8 rounded transition-colors shadow-lg">
            GET A FREE QUOTE
          </Link>
        </div>
      </section>

      {/* Residential Services List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1 w-full lg:sticky lg:top-32 h-fit">
              <div className="relative w-full aspect-square md:aspect-[4/3] rounded-md overflow-hidden shadow-xl border-4 border-gray-50">
                <Image src="/roof pic.webp" alt="Residential Power Washing" fill className="object-cover object-center" />
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#7B2CBF] mb-6 leading-tight">
                Residential Power Washing in Central Virginia
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Our comprehensive services target the specific exterior challenges Virginia homeowners face across Richmond, Henrico, Chesterfield, Midlothian, Short Pump, and Hanover:
              </p>
              
              <ul className="space-y-6">
                <li className="text-gray-600 font-light text-sm leading-relaxed">
                  <strong className="font-bold text-[#7B2CBF]">House washing:</strong> We treat vinyl, brick, Hardie plank, and stucco with low-pressure soft washing and eco-friendly cleansers. Our process eliminates green algae and organic grime without damaging siding or seals.
                </li>
                <li className="text-gray-600 font-light text-sm leading-relaxed">
                  <strong className="font-bold text-[#7B2CBF]">Concrete washing and sealing:</strong> Our treatment process begins with deep surface cleaning, removing tire marks, oil stains, and organic residue before applying penetrating sealants to prevent winter freeze-thaw cracking.
                </li>
                <li className="text-gray-600 font-light text-sm leading-relaxed">
                  <strong className="font-bold text-[#7B2CBF]">Roof treatment:</strong> We use specialized soft wash chemical applications that safely kill Gloeocapsa Magma (black roof streaks) and lichen at the roots without disturbing protective asphalt granules.
                </li>
                <li className="text-gray-600 font-light text-sm leading-relaxed">
                  <strong className="font-bold text-[#7B2CBF]">Deck & Patio cleaning:</strong> We eliminate slick moss and mildew from wood, composite, and paver patios to restore original traction and appearance.
                </li>
                <li className="text-gray-600 font-light text-sm leading-relaxed">
                  <strong className="font-bold text-[#7B2CBF]">Gutter cleaning:</strong> Our technicians clear leaves, pine needles, and debris by hand and flush downspouts so rainwater routes safely away from your foundation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Section */}
      <section className="py-24 bg-[#F9FAFB] border-t border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00B55D] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Commercial Coverage</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#7B2CBF] mb-6 leading-tight">
              Commercial Power Washing in Greater Richmond
            </h2>
            <p className="text-gray-600 font-light leading-relaxed">
              We have served office complexes, national franchises, restaurants, storefronts, HOA communities, and industrial facilities across Central Virginia. Our flexible scheduling ensures zero disruption to your customers or tenants while keeping your commercial property looking sharp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-xl shadow-lg border-2 border-white aspect-[4/3]">
              <Image 
                src="/Gallery/DSC06537.jpeg" 
                alt="Commercial Building Facade Power Washing in Virginia" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[#00B55D] text-xs font-bold uppercase tracking-wider mb-1">Storefronts & Facades</span>
                <h3 className="text-lg font-heading font-bold">Commercial Building Exterior Cleaning</h3>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg border-2 border-white aspect-[4/3]">
              <Image 
                src="/Gallery/DSC06562.jpeg" 
                alt="Hospitality and Resort Poolside Deck Washing" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[#00B55D] text-xs font-bold uppercase tracking-wider mb-1">Hospitality & Grounds</span>
                <h3 className="text-lg font-heading font-bold">Resorts, Pools & Common Walkways</h3>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/commercial" className="inline-block bg-[#7B2CBF] hover:bg-[#6824A3] text-white font-bold uppercase tracking-widest text-xs py-4 px-8 rounded-none transition-colors">
              Explore All Commercial Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* Stats & Trust Badges Section */}
      <section className="py-12 md:py-16 bg-[#33155B] text-white">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <div className="flex flex-col md:flex-row justify-center md:gap-32 gap-10 mb-12">
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

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#7B2CBF] mb-10 text-center leading-tight">
            Why Choose Wizard Wash?
          </h2>
          <div className="space-y-6 text-gray-600 font-light text-sm leading-relaxed">
            <p>
              Fast scheduling makes service simple and convenient. Call our team directly at (804) 690-5789 to discuss your property, receive a fast estimate, and book your service date.
            </p>
            <p>
              Our custom hot water and soft wash rigs deliver superior results that consumer pressure washers cannot match. We continuously invest in professional-grade equipment that thoroughly removes contaminants while protecting delicate siding and roofing.
            </p>
            <p>
              Our professional technicians complete every project with expertise developed through extensive field experience. Each crew member understands surface metallurgy, pressure thresholds, and safe cleaning solutions.
            </p>
            <p>
              Our top ratings reflect years of consistent quality. Check out our 5-star Google reviews demonstrating customer satisfaction across the Richmond area.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
