import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

// SEO
export const metadata = {
    metadataBase: new URL("https://follichat.vercel.app/"),
    title: {
        default: "Folli Chat",
    },
    themeColor: "#000000",
    display: "standalone",
    applicationName: "FolliChat",
    referrer: "no-referrer",
    keywords: ["Next.js", "React", "JavaScript", "FolliChat", "Vercel"],
    authors: [{ name: "CriticalRange" }],
    creator: "CriticalRange",
    publisher: "Vercel",
    description: "A whatsapp clone made by CriticalRange",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${montserrat.className} min-h-screen bg-black-100 no-scrollbar`}
            >
                {children}
            </body>
        </html>
    );
}
