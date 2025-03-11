import { dbConnect } from "@/services/mongo";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Snapbuy - Your Smart Shopping Destination",
    description:
        "Discover and buy quality products at the best prices on Snapbuy. A seamless and secure shopping experience awaits you!",
};

export default async function RootLayout({ children }) {
    await dbConnect();
    return (
        <html lang="en">
            <body className={inter.className}>
                <main>{children}</main>
            </body>
        </html>
    );
}
