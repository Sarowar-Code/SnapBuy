import FlashSalesSection from "@/components/flashSale/FlashSalesSection";
import Navbar from "@/components/header/Navbar";

export default function Home() {
    return (
        <main className="flex flex-col gap-10 min-h-screen bg-gray-50 py-12">
            <Navbar />
            <div className="container mx-auto px-4">
                <FlashSalesSection />
            </div>
        </main>
    );
}
