import type { Metadata } from 'next';
import { Barlow, Playfair_Display } from 'next/font/google';
import './globals.css';

const barlow = Barlow({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-barlow', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

export const metadata: Metadata = {
    title: 'Wizard Wash',
    description: 'Professional exterior cleaning and strategic property maintenance.',
    icons: {
        icon: '/images/Wizard Wash Logo _Transparent.png',
        apple: '/images/Wizard Wash Logo _Transparent.png',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${barlow.variable} ${playfair.variable} scroll-smooth`}>
            <body className="bg-[var(--color-base-main)] text-[var(--color-text-main)] font-body antialiased selection:bg-[var(--color-accent-purple)] selection:text-white">
                {children}
            </body>
        </html>
    );
}
