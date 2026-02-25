import type { Metadata, Viewport } from 'next';
import { Barlow, Playfair_Display } from 'next/font/google';
import './globals.css';
import { VideoAutoplayLogic } from '@/components/VideoAutoplayLogic';
const barlow = Barlow({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-barlow', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export const metadata: Metadata = {
    metadataBase: new URL('https://wizardwashva.com'),
    title: {
        default: 'Wizard Wash | Professional Exterior Cleaning in Richmond, VA',
        template: '%s | Wizard Wash',
    },
    description: 'Professional exterior cleaning and strategic property maintenance in the Richmond, VA area, including residential and commercial power washing, soft washing, and roof cleaning.',
    keywords: ['power washing', 'exterior cleaning', 'pressure washing', 'roof cleaning', 'soft washing', 'Richmond VA power washing', 'commercial power washing', 'residential exterior cleaning'],
    authors: [{ name: 'Wizard Wash' }],
    creator: 'Wizard Wash',
    publisher: 'Wizard Wash',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://wizardwashva.com',
        siteName: 'Wizard Wash',
        title: 'Wizard Wash | Professional Exterior Cleaning',
        description: 'Professional exterior cleaning and strategic property maintenance in the Richmond, VA area.',
        images: [
            {
                url: '/images/Wizard Wash Logo _Transparent.png',
                width: 800,
                height: 600,
                alt: 'Wizard Wash Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Wizard Wash | Professional Exterior Cleaning',
        description: 'Professional exterior cleaning and strategic property maintenance in the Richmond, VA area.',
        images: ['/images/Wizard Wash Logo _Transparent.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/images/Wizard Wash Logo _Transparent.png',
        apple: '/images/Wizard Wash Logo _Transparent.png',
    },
    alternates: {
        canonical: '/',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${barlow.variable} ${playfair.variable} scroll-smooth overflow-x-hidden w-full`}>
            <body className="bg-[var(--color-base-main)] text-[var(--color-text-main)] font-body antialiased selection:bg-[var(--color-accent-purple)] selection:text-white overflow-x-hidden w-full relative">
                <VideoAutoplayLogic />
                {children}
            </body>
        </html>
    );
}
