import SubpageHero from "@/components/SubpageHero";
import ServiceFeature from "@/components/ServiceFeature";

export default function ResidentialPage() {
  return (
    <main className="flex-grow bg-[#FFFFFF] text-[#424242]">
      <SubpageHero
        subtitle="Our Capabilities"
        title="Residential Power Washing"
        description="Restore your home's pristine shine with our expert residential power washing and soft washing services."
        showForm={true}
      />

      <ServiceFeature
        imageSrc="/Gallery/DSC07618.JPG"
        imageAlt="Residential House Washing Service Rig"
        imagePosition="left"
        subtitle="01 // PREMIUM CARE"
        title="House Wash"
        description="Safely remove dirt, mold, algae, and environmental buildup from your home's exterior using our specialized soft-washing techniques."
        bullets={["Safe on Siding", "Mold & Mildew Removal", "Extends Paint Life", "Boosts Curb Appeal"]}
        linkText="LEARN MORE"
        linkHref="/residential/house-wash"
      />

      <ServiceFeature
        imageSrc="/bleacher pic.webp"
        imageAlt="Concrete Wash and Seal"
        imagePosition="right"
        subtitle="02 // PROTECTION"
        title="Concrete Wash and Seal"
        description="Revitalize your concrete surfaces and apply a premium sealant to protect against future stains, weather damage, and cracking."
        bullets={["Deep Stain Removal", "Premium Sealant Application", "Prevents Cracking", "Enhances Color"]}
        linkText="LEARN MORE"
        linkHref="/residential/concrete-wash-and-seal"
      />

      <ServiceFeature
        imageSrc="/Gallery/DSC06537.jpeg"
        imageAlt="Softwash Services"
        imagePosition="left"
        subtitle="03 // GENTLE CLEANING"
        title="Softwash Services"
        description="Our specialized soft washing uses low-pressure water and eco-friendly detergents to clean delicate surfaces without causing damage."
        bullets={["Low-Pressure System", "Eco-Friendly Solutions", "Safe for Roofs & Stucco", "Long-Lasting Clean"]}
        linkText="LEARN MORE"
        linkHref="/residential/softwash-services"
      />

      <ServiceFeature
        imageSrc="/Residential%20Power%20Washing/Our%20Full%20Home%20Services.avif"
        imageAlt="Annual Power Wash"
        imagePosition="right"
        subtitle="04 // MAINTENANCE"
        title="Annual Power Wash"
        description="Keep your property looking immaculate year-round with our comprehensive annual maintenance power washing packages."
        bullets={["Scheduled Maintenance", "Full Property Coverage", "Preventative Care", "Priority Scheduling"]}
        linkText="LEARN MORE"
        linkHref="/residential/annual-power-wash"
      />

      <ServiceFeature
        imageSrc="/pvc pic.webp"
        imageAlt="Brick and Stone Power Wash"
        imagePosition="left"
        subtitle="05 // MASONRY CARE"
        title="Brick and Stone Power Wash"
        description="Carefully restore the natural beauty of your brick, stone, and masonry by removing efflorescence, moss, and deep-set stains."
        bullets={["Efflorescence Removal", "Safe Mortar Cleaning", "Moss & Algae Treatment", "Restores Natural Color"]}
        linkText="LEARN MORE"
        linkHref="/residential/brick-and-stone-power-wash"
      />

      <ServiceFeature
        imageSrc="/Residential%20Power%20Washing/Fence%20Wash.avif"
        imageAlt="Wood Power Wash"
        imagePosition="right"
        subtitle="06 // TIMBER RESTORATION"
        title="Wood Power Wash"
        description="Rejuvenate your wooden fences, siding, and structures by gently washing away graying wood fibers and environmental pollutants."
        bullets={["Removes Graying", "Preps for Staining", "Gentle Wood Cleaning", "Fungus & Algae Removal"]}
        linkText="LEARN MORE"
        linkHref="/residential/wood-power-wash"
      />

      <ServiceFeature
        imageSrc="/Residential%20Power%20Washing/Remove%20algeae.avif"
        imageAlt="Gutter Cleaning Services"
        imagePosition="left"
        subtitle="07 // FUNCTIONALITY"
        title="Gutter Cleaning Services"
        description="Ensure your gutters flow freely with our thorough cleaning service, clearing out leaves, debris, and blockages to prevent water damage."
        bullets={["Debris Removal", "Downspout Clearing", "Prevents Water Damage", "Exterior Gutter Brightening"]}
        linkText="LEARN MORE"
        linkHref="/residential/gutter-cleaning-services"
      />

      <ServiceFeature
        imageSrc="/Gallery/DSC06562.jpeg"
        imageAlt="Sidewalk, Deck & Patio Wash"
        imagePosition="right"
        subtitle="08 // OUTDOOR LIVING"
        title="Sidewalk + Deck & Patio Wash"
        description="Transform your outdoor gathering spaces by power washing away grime, food stains, and weather buildup from decks, patios, and walkways."
        bullets={["Deck Rejuvenation", "Patio Deep Clean", "Slip-Hazard Removal", "Walkway Brightening"]}
        linkText="LEARN MORE"
        linkHref="/residential/sidewalk-deck-patio-wash"
      />

      <ServiceFeature
        imageSrc="/Gallery/DSC07627.JPG"
        imageAlt="Asphalt Sealcoating and Driveway Protection"
        imagePosition="left"
        subtitle="09 // DRIVEWAY CARE"
        title="Asphalt Sealcoating"
        description="Protect your asphalt driveway from oxidation, water penetration, and oil spills with our professional-grade sealcoating."
        bullets={["Fills Minor Cracks", "Prevents Oxidation", "Rich Black Finish", "Extends Asphalt Life"]}
        linkText="LEARN MORE"
        linkHref="/residential/asphalt-sealcoating"
      />

      <ServiceFeature
        imageSrc="/roof pic.webp"
        imageAlt="Holiday Lights Installation"
        imagePosition="right"
        subtitle="10 // SEASONAL"
        title="Holiday Lights Installation"
        description="Spread holiday cheer without the hassle. We provide professional, safe, and stunning holiday lighting installations for your home."
        bullets={["Custom Light Design", "Safe Installation", "Maintenance Included", "Post-Season Removal"]}
        linkText="LEARN MORE"
        linkHref="/residential/holiday-lights-installation"
      />
    </main>
  );
}
