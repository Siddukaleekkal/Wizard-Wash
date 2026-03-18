import { SimpleHeader } from '@/components/ui/simple-header';
import Hero from '@/components/sections/Hero';
import CompanyCarouselSection from '@/components/sections/CompanyCarouselSection';
import VideoSection from '@/components/sections/VideoSection';
import ServiceMapSection from '@/components/sections/ServiceMapSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
    return (
        <main className="min-h-screen bg-[var(--color-base-main)] ">
            <SimpleHeader />
            <Hero />

            <CompanyCarouselSection />
            <VideoSection />
            <TestimonialsSection />
            <ServiceMapSection />

            <Footer />
        </main>
    );
}
