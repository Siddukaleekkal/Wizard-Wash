import { SimpleHeader } from '@/components/ui/simple-header';
import Hero from '@/components/Hero';
import CompanyCarouselSection from '@/components/CompanyCarouselSection';
import VideoSection from '@/components/VideoSection';
import ServiceMapSection from '@/components/ServiceMapSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import VideoBreakSection from '@/components/VideoBreakSection';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
    return (
        <main className="min-h-screen bg-[var(--color-base-main)] ">
            <SimpleHeader />
            <Hero />
            <CompanyCarouselSection />
            <ServicesSection />
            <VideoSection />
            <TestimonialsSection />
            <ServiceMapSection />

            <Footer />
        </main>
    );
}
