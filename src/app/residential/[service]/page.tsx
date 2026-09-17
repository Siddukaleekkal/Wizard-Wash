import SubpageHero from "@/components/SubpageHero";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const services = {
  "concrete-wash-and-seal": {
    title: "Concrete Wash and Seal",
    description: "Revitalize your concrete surfaces and apply a premium sealant to protect against future stains, weather damage, and cracking.",
    bullets: ["Deep Stain Removal", "Premium Sealant Application", "Prevents Cracking", "Enhances Color"],
    testimonial: { quote: "My driveway was completely black from years of weathering, and now it looks freshly poured. Incredible work and great communication.", author: "David & Laura Sterling — Midlothian, VA" }
  },
  "softwash-services": {
    title: "Softwash Services",
    description: "Our specialized soft washing uses low-pressure water and eco-friendly detergents to clean delicate surfaces without causing damage.",
    bullets: ["Low-Pressure System", "Eco-Friendly Solutions", "Safe for Roofs & Stucco", "Long-Lasting Clean"],
    testimonial: { quote: "They cleaned our stucco exterior without using high pressure. It removed all the algae and didn't chip a single piece of paint.", author: "Maria Gonzalez — Short Pump, VA" }
  },
  "annual-power-wash": {
    title: "Annual Power Wash",
    description: "Keep your property looking immaculate year-round with our comprehensive annual maintenance power washing packages.",
    bullets: ["Scheduled Maintenance", "Full Property Coverage", "Preventative Care", "Priority Scheduling"],
    testimonial: { quote: "Signing up for the annual program was the best decision for our home. They show up on schedule and keep everything looking spotless.", author: "Robert Eldridge — Chesterfield, VA" }
  },
  "brick-and-stone-power-wash": {
    title: "Brick and Stone Power Wash",
    description: "Carefully restore the natural beauty of your brick, stone, and masonry by removing efflorescence, moss, and deep-set stains.",
    bullets: ["Efflorescence Removal", "Safe Mortar Cleaning", "Moss & Algae Treatment", "Restores Natural Color"],
    testimonial: { quote: "The natural stone around our patio was covered in mildew. The team at Wizard Wash restored its original color perfectly.", author: "Samantha Thornton — The Fan, Richmond, VA" }
  },
  "wood-power-wash": {
    title: "Wood Power Wash",
    description: "Rejuvenate your wooden fences, siding, and structures by gently washing away graying wood fibers and environmental pollutants.",
    bullets: ["Removes Graying", "Preps for Staining", "Gentle Wood Cleaning", "Fungus & Algae Removal"],
    testimonial: { quote: "I thought I needed a new cedar fence, but their wood washing service completely restored it. Saved us thousands of dollars!", author: "Kevin Washington — Glen Allen, VA" }
  },
  "gutter-cleaning-services": {
    title: "Gutter Cleaning Services",
    description: "Ensure your gutters flow freely with our thorough cleaning service, clearing out leaves, debris, and blockages to prevent water damage.",
    bullets: ["Debris Removal", "Downspout Clearing", "Prevents Water Damage", "Exterior Gutter Brightening"],
    testimonial: { quote: "They didn't just empty the gutters, they washed the outsides so they look brand new. Very professional crew.", author: "Linda Crawford — Tuckahoe, VA" }
  },
  "sidewalk-deck-patio-wash": {
    title: "Sidewalk + Deck & Patio Wash",
    description: "Transform your outdoor gathering spaces by power washing away grime, food stains, and weather buildup from decks, patios, and walkways.",
    bullets: ["Deck Rejuvenation", "Patio Deep Clean", "Slip-Hazard Removal", "Walkway Brightening"],
    testimonial: { quote: "Our backyard patio was slippery with algae. After one visit from Wizard Wash, it's completely safe and looks ready for our summer gatherings.", author: "James Ferguson — Bon Air, VA" }
  },
  "asphalt-sealcoating": {
    title: "Asphalt Sealcoating",
    description: "Protect your asphalt driveway from oxidation, water penetration, and oil spills with our professional-grade sealcoating.",
    bullets: ["Fills Minor Cracks", "Prevents Oxidation", "Rich Black Finish", "Extends Asphalt Life"],
    testimonial: { quote: "The sealcoating gave our driveway a rich black finish and filled all the minor cracks. Fast and efficient service.", author: "Michael Harris — Mechanicsville, VA" }
  },
  "holiday-lights-installation": {
    title: "Holiday Lights Installation",
    description: "Spread holiday cheer without the hassle. We provide professional, safe, and stunning holiday lighting installations for your home.",
    bullets: ["Custom Light Design", "Safe Installation", "Maintenance Included", "Post-Season Removal"],
    testimonial: { quote: "Taking the stress out of holiday lights was amazing. The house looked beautiful and they handled the takedown seamlessly.", author: "Emily Richardson — Manakin-Sabot, VA" }
  }
};

export function generateStaticParams() {
  return Object.keys(services).map((service) => ({
    service,
  }));
}

export default async function ResidentialServicePage({ params }: { params: Promise<{ service: string }> | { service: string } }) {
  const resolvedParams = await Promise.resolve(params);
  const serviceData = services[resolvedParams.service as keyof typeof services];

  if (!serviceData) {
    notFound();
  }

  return (
    <main className="flex-grow bg-[#FFFFFF] text-[#424242]">
      
      {/* 1. Hero Section */}
      <SubpageHero
        subtitle="Residential Service"
        title={serviceData.title}
        description={serviceData.description}
        showForm={true}
      />

      {/* 2. Promotional Banner */}
      <section className="bg-[#33155B] w-full py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white text-center md:text-left">
            Schedule Today to Save 10%
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
            Keep Your Home Looking Perfect <br className="hidden md:block" /> With Our {serviceData.title} Service
          </h2>
          <div className="text-gray-600 font-light leading-relaxed text-[15px] space-y-6 text-left md:text-center">
            <p>
              With constant exposure to the elements, your home's exterior gets dirty and may experience a buildup of damaging organisms like algae and mold. Routine maintenance is an ideal way to protect your investment. Wizard Wash delivers exceptional results for cleaning wood, brick, stone, concrete and other popular construction materials.
            </p>
            <p>
              Our {serviceData.title.toLowerCase()} easily and effectively maintains your home's exterior. Our process blends biodegradable cleansers and safe pressure to remove contaminants. Call us today to help protect your biggest investment!
            </p>
            <p>
              Taking care of your home's exterior appearance and hygiene will help ensure it gives you and your family many years of reliable shelter. Wizard Wash is a premium service provider. Our best-in-class equipment in the hands of our friendly team members is sure to impress and leave your home looking its best.
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
                  src="/Gallery/DSC07618.JPG" 
                  alt="Wizard Wash Service Rig at Clean Home" 
                  fill 
                  className="object-cover"
                />
                {/* Real Logo Insert */}
                <div className="absolute bottom-0 left-6 bg-white p-3 shadow-lg translate-y-1/2 flex items-center justify-center h-16 w-16">
                  <img src="/logo-final.png" alt="Wizard Wash" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="p-10 pt-16 flex-1 flex flex-col">
                <h3 className="text-xl font-heading font-bold text-[#7B2CBF] mb-4">Come Home To A Perfect Clean</h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  There's nothing quite like the feeling of pulling up to a freshly washed house. With Wizard Wash, it's never been easier to give your home the attention it deserves.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-[0_10px_40px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col h-full">
              <div className="relative w-full h-56 bg-gray-200">
                <Image 
                  src="/Residential%20Power%20Washing/Our%20Full%20Home%20Services.avif" 
                  alt="Full Home Exterior" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-6 bg-white p-3 shadow-lg translate-y-1/2 flex items-center justify-center h-16 w-16">
                  <img src="/logo-final.png" alt="Wizard Wash" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="p-10 pt-16 flex-1 flex flex-col">
                <h3 className="text-xl font-heading font-bold text-[#7B2CBF] mb-4">Our Full Home Exterior Services</h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed mb-4">
                  In addition to our {serviceData.title.toLowerCase()}, we've spent hours training and perfecting:
                </p>
                <ul className="flex flex-col gap-2 text-sm text-[#424242]">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00B55D]"/> House washing</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00B55D]"/> Concrete washing and sealing</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00B55D]"/> Roof treatment</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00B55D]"/> Deck and patio washing</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00B55D]"/> Fence washing</li>
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
              <h3 className="text-2xl font-heading font-bold text-[#7B2CBF] mb-4">Hear From Satisfied Customers</h3>
              <p className="text-gray-600 font-light text-[15px] italic leading-relaxed mb-4">
                "{serviceData.testimonial.quote}"
              </p>
              <p className="text-[#424242] font-bold text-xs uppercase tracking-wider">
                - {serviceData.testimonial.author}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Materials Section */}
      <section className="bg-[#33155B] py-24 text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8 leading-tight">
            Home Exterior Materials We Service
          </h2>
          <div className="text-white/90 font-light leading-relaxed text-[15px] space-y-6">
            <p>
              Here at Wizard Wash, we fully understand that your home is unique. A home's exterior is an extension of the owner's personal style preferences, and the choice of specific materials impacts how well the house performs in terms of energy efficiency and sturdiness.
            </p>
            <p>
              Regardless of your home's construction material, you want it to look fabulous and well-maintained. You can trust the team at Wizard Wash to help. We have served homeowners like you with various expert cleaning services to keep homes looking their best.
            </p>
            <p>
              We guarantee to deliver the best results possible for your property using our safe and effective processes for the cleaning of:
            </p>
            <ul className="list-disc pl-6 space-y-4 marker:text-[#00B55D]">
              <li>
                <strong className="text-white font-bold">Brick homes:</strong> Brick and brick-faced homes collect dirt over time, particularly in the mortar joints. This buildup retains moisture, allowing mold and mildew growth. Wizard Wash's brick home power washing services remove the dirt from those tough crevices and leave your home looking great.
              </li>
              <li>
                <strong className="text-white font-bold">Concrete homes:</strong> Concrete's porous nature is susceptible to grime and bacteria buildup. Fortunately, our team has the needed skills to clean concrete homes using advanced equipment and best practices.
              </li>
              <li>
                <strong className="text-white font-bold">Stone homes:</strong> Natural stone is prone to stubborn stains and moss growth that lower your home's curb appeal. Our power washing for stone homes reaches into the cracks to remove any mold, grime and dirt and restore your beautiful stone exterior.
              </li>
              <li>
                <strong className="text-white font-bold">Wood homes:</strong> Wood is a natural moisture absorber, creating a thriving environment for mold and mildew. Plus, its texture attracts airborne particles like dirt and pollen. Wood home power washing services remove this unsightly accumulation and help support the structure's integrity.
              </li>
            </ul>
            <p>
              We offer a complete package that covers your home's full exterior, plus concrete washing and sealing services to keep these outside surfaces looking their best. Whether you have a cozy stone bungalow or a stately wood home, our five-star power washing capabilities and excellent customer service will keep you coming back.
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
                  src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop" 
                  alt="Benefits of Power Washing" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-lg font-heading font-bold text-[#7B2CBF] mb-4">Benefits of Routine Maintenance</h3>
                <ul className="list-disc pl-4 space-y-3 text-sm text-gray-600 font-light marker:text-[#00B55D]">
                  <li>
                    <strong className="text-[#424242] font-semibold">Appearing much newer:</strong> A freshly maintained home looks closer to new than it did. This appearance raises your property's curb appeal and value, which is especially helpful if you're planning to sell.
                  </li>
                  <li>
                    <strong className="text-[#424242] font-semibold">Attracting potential buyers:</strong> A well-maintained home tells prospective buyers that you value your ownership and that they're making a solid investment.
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg border border-gray-100 flex flex-col h-full">
              <div className="relative w-full h-48 bg-gray-200">
                <Image 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Largest Investment" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-lg font-heading font-bold text-[#7B2CBF] mb-4">Take Care of Your Largest Investment</h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed mb-4">
                  We service thousands of homes like yours each year. Our technicians go through over 150 hours of training before handling jobs, giving them the knowledge and hands-on experience to deliver the best possible results. It takes only minutes to call us and schedule your service.
                </p>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  If you love our services as much as we think you will, consider enrolling in our annual membership program!
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg border border-gray-100 flex flex-col h-full">
              <div className="relative w-full h-48 bg-gray-200">
                <Image 
                  src="/Residential%20Power%20Washing/Remove%20algeae.avif" 
                  alt="Remove Harmful Build-up" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-lg font-heading font-bold text-[#7B2CBF] mb-4">Remove Harmful Build-up</h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed mb-4">
                  The more time contaminants remain on your home's exterior, the higher the potential for them to cause harm. Routine exterior cleaning helps safeguard against permanent damage.
                </p>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  Wizard Wash's biodegradable cleansers remove harmful microorganisms like mildew and mold. Our specialized algaecide for your exterior surfaces and roof targets growth at the root to prevent it from recurring.
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
            Bundle Services Today & Save 10%
          </h2>
          <p className="text-gray-600 font-light text-[15px] max-w-3xl mx-auto mb-16 leading-relaxed">
            In addition to our {serviceData.title.toLowerCase()}, we offer a full suite of pressure washing services to keep the entirety of your home's exterior clean. Bundle services today and get an extra 10% off your power wash!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* House */}
            <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-6 shadow-[0_5px_20px_rgb(0,0,0,0.05)]">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0">
                <Image src="/Gallery/DSC07618.JPG" alt="House Wash" fill className="object-cover" />
              </div>
              <h3 className="text-[#7B2CBF] font-bold text-lg text-left">House Washing</h3>
            </div>
            {/* Roof */}
            <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-6 shadow-[0_5px_20px_rgb(0,0,0,0.05)]">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0">
                <Image src="/Residential%20Power%20Washing/Roof%20Wash.avif" alt="Roof Wash" fill className="object-cover" />
              </div>
              <h3 className="text-[#7B2CBF] font-bold text-lg text-left">Roof Wash</h3>
            </div>
            {/* Deck */}
            <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-6 shadow-[0_5px_20px_rgb(0,0,0,0.05)]">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0">
                <Image src="/Gallery/DSC06562.jpeg" alt="Deck Wash" fill className="object-cover" />
              </div>
              <h3 className="text-[#7B2CBF] font-bold text-lg text-left">Deck/Patio Wash</h3>
            </div>
            {/* Fence */}
            <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-6 shadow-[0_5px_20px_rgb(0,0,0,0.05)]">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0">
                <Image src="/Residential%20Power%20Washing/Fence%20Wash.avif" alt="Fence Wash" fill className="object-cover" />
              </div>
              <h3 className="text-[#7B2CBF] font-bold text-lg text-left">Fence Wash</h3>
            </div>
          </div>

          <Link href="/quote" className="inline-block bg-[#00B55D] hover:bg-[#009E50] text-white font-bold uppercase tracking-widest text-sm py-4 px-10 rounded transition-colors shadow-lg">
            SCHEDULE NOW
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
