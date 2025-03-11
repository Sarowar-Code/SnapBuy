import ProductCarousel from "@/components/product/ProductCarousel";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

export default function FlashSalesSection() {
    return (
        <section className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Today's Flash Sales
                    </h2>
                </div>
                <CountdownTimer hours={3} minutes={23} seconds={19} />
            </div>

            <ProductCarousel />

            <div className="flex justify-center mt-8">
                <Button
                    variant="outline"
                    className="rounded-md px-6 py-2 border-gray-300 hover:bg-gray-100"
                >
                    View All Products <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </section>
    );
}
