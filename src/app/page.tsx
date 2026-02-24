import { SimpleHeader } from '@/components/ui/simple-header';
import Hero from '@/components/Hero';
import CompanyCarouselSection from '@/components/CompanyCarouselSection';
import VideoSection from '@/components/VideoSection';
import ServiceMapSection from '@/components/ServiceMapSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

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
