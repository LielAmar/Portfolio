import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Liel Amar',
    description: "Liel Amar's Portfolio",
};

// Add rubik font
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="antialiased bg-background text-lightText font-rubik">
                {children}
            </body>
        </html>
    );
}
