import SubpageHero from "@/components/SubpageHero";
import ServiceFeature from "@/components/ServiceFeature";

export default function CommercialPage() {
  return (
    <main className="flex-grow bg-[#FFFFFF] text-[#424242]">
      <SubpageHero
        subtitle="Our Commercial Capabilities"
        title="Commercial Power Washing"
        description="We have the capacity and expertise for large scale commercial projects across Greater Richmond and Central Virginia. Clean properties attract customers and maintain high values."
        showForm={true}
      />

      <ServiceFeature
        imageSrc="/Gallery/DSC07627.JPG"
        imageAlt="Commercial Fleet Washing Equipment"
        imagePosition="left"
        subtitle="01 // TRANSPORTATION"
        title="Fleet Washing"
        description={[
          "Commercial vehicles operate as moving billboards for your brand. We remove corrosive road salts and grease to keep them looking pristine and protect the undercarriage from rust.",
          "Clean fleets communicate professionalism to every driver on the road. We can establish a regular washing schedule so you never have to think about dirty trucks again."
        ]}
        linkText="LEARN MORE"
        linkHref="/commercial/fleet-washing"
      />

      <ServiceFeature
        imageSrc="/Gallery/DSC06537.jpeg"
        imageAlt="Office Buildings and Corporate Exterior Cleaning"
        imagePosition="right"
        subtitle="02 // CORPORATE"
        title="Office Buildings"
        description={[
          "Employees and clients form their first impression before they even walk through your doors. We wash away unsightly stains from walkways and building exteriors to ensure a safe and professional environment.",
          "Slippery moss and mildew create hidden liabilities on concrete paths. Our hot water systems eradicate these hazards completely."
        ]}
        linkText="LEARN MORE"
        linkHref="/commercial/office-buildings"
      />

      <ServiceFeature
        imageSrc="/Commercial%20Power%20Washing/dumpster%20sanitization.avif"
        imageAlt="Restaurants & Food Service Power Washing"
        imagePosition="left"
        subtitle="03 // FOOD SERVICE"
        title="Restaurants"
        description={[
          "Sanitation is the foundation of the food service industry. We specialize in hot water treatments for dumpster pads and grease spills to ensure strict health code compliance.",
          "A bright patio area invites guests to dine outside and enjoy their meal. We clear away discarded food and sticky residues so your outdoor spaces remain inviting."
        ]}
        linkText="LEARN MORE"
        linkHref="/commercial/restaurants"
      />

      <ServiceFeature
        imageSrc="/Commercial%20Power%20Washing/building%20facade%20wash.avif"
        imageAlt="Retail Storefronts Cleaning"
        imagePosition="right"
        subtitle="04 // RETAIL"
        title="Storefronts"
        description={[
          "Your storefront dictates foot traffic and consumer confidence. We wash away pollution and discarded chewing gum to maintain a pristine shopping environment.",
          "Clean windows and bright awnings catch the eye of pedestrians walking past. Retail locations thrive when the building looks cared for and secure."
        ]}
        linkText="LEARN MORE"
        linkHref="/commercial/storefronts"
      />

      <ServiceFeature
        imageSrc="/Gallery/DSC06562.jpeg"
        imageAlt="Resorts & Hotels Poolside Deck Washing"
        imagePosition="left"
        subtitle="05 // HOSPITALITY"
        title="Resorts & Hotels"
        description={[
          "Guests travel to resorts expecting luxury and relaxation. We maintain impeccable grounds from the pool deck all the way up to multi story facades.",
          "Slippery pool areas present a massive risk to guest safety. We softly wash these delicate surfaces to remove algae and prevent accidents."
        ]}
        linkText="LEARN MORE"
        linkHref="/commercial/resorts-hotels"
      />

      <ServiceFeature
        imageSrc="/Commercial%20Power%20Washing/parking%20garage%20cleaning.avif"
        imageAlt="Stadiums & Event Venues Concourses"
        imagePosition="right"
        subtitle="06 // ENTERTAINMENT"
        title="Stadiums & Event Venues"
        description={[
          "High capacity venues demand heavy duty cleaning solutions. We power wash bleachers and concrete concourses to handle massive post event messes.",
          "Spilled drinks and discarded food quickly turn into sticky hazards. We clear these massive spaces rapidly so the venue is ready for the next game."
        ]}
        linkText="LEARN MORE"
        linkHref="/commercial/stadiums-event-venues"
      />

      <ServiceFeature
        imageSrc="/Gallery/DSC07618.JPG"
        imageAlt="Home Owners Associations Neighborhood Care"
        imagePosition="left"
        subtitle="07 // COMMUNITIES"
        title="Home Owners Associations"
        description={[
          "Beautiful communities keep property values high and residents happy. We partner with HOA boards to clean common areas and neighborhood entrance signs.",
          "Dirty sidewalks drag down the aesthetic of the entire street. We restore these paths to maintain a uniform standard of excellence."
        ]}
        linkText="LEARN MORE"
        linkHref="/commercial/home-owners-associations"
      />

      <ServiceFeature
        imageSrc="/Commercial%20Power%20Washing/graffiti.avif"
        imageAlt="Government & Municipal Buildings Cleaning"
        imagePosition="right"
        subtitle="08 // PUBLIC SECTOR"
        title="Government & Municipal Buildings"
        description={[
          "Public buildings stand as symbols of civic pride and order. We provide reliable and secure exterior cleaning for courthouses and libraries.",
          "Graffiti and pollution accumulate quickly in public squares. We remove these blemishes to restore the dignity of public spaces."
        ]}
        linkText="LEARN MORE"
        linkHref="/commercial/government-municipal-buildings"
      />
    </main>
  );
}
