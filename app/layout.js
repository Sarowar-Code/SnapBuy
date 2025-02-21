import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Snapbuy - Your Smart Shopping Destination",
    description:
        "Discover and buy quality products at the best prices on Snapbuy. A seamless and secure shopping experience awaits you!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
