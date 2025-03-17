import BestSellingProducts from "@/components/home/BestSellingProducts";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
    return (
        <section className=" flex flex-col gap-10 container">
            <HeroSection />
            {/* <FlashSales /> */}
            <BestSellingProducts />
        </section>
    );
}
