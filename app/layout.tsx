import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/flowers.css";
import "@/styles/App.css";
import { ReactNode } from "react";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400"],
});

export const metadata: Metadata = {
    title: "Flowers for girlfriend",
    description: "Flowers",
    keywords: ["flowers", "romantic gifts", "flowers for girlfriend", "special gifts", "bouquet", "love", "anniversary gift"],
    icons: {
        icon: '/photo.png',
    },
    authors: {
        name: 'Ridho',
        url: 'https://github.com/Riii28'
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={`${poppins.className} bg-[#121212] text-[#f5f5f5] antialiased`}>
                {children}
            </body>
        </html>
    );
}
