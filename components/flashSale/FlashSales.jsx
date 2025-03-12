"use client";
import CountdownTimer from "@/components/flashSale/CountdownTimer";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useState } from "react";
import PrimaryButton from "../common/PrimaryButton";
import ProductCard from "../product/ProductCard";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
const products = [
    {
        id: 1,
        name: "HAVIT HV-G92 Gamepad",
        originalPrice: 650,
        salePrice: 420,
        discount: 40,
        rating: 5,
        reviews: 88,
        image: "/placeholder.svg?height=200&width=200",
    },
    {
        id: 2,
        name: "AK-900 Wired Keyboard",
        originalPrice: 1160,
        salePrice: 850,
        discount: 35,
        rating: 4,
        reviews: 75,
        image: "/placeholder.svg?height=200&width=200",
    },
    {
        id: 3,
        name: "S-Series Comfort Chair",
        originalPrice: 400,
        salePrice: 375,
        discount: 25,
        rating: 5,
        reviews: 99,
        image: "/placeholder.svg?height=200&width=200",
    },
    {
        id: 4,
        name: "IPS LCD Gaming Monitor",
        originalPrice: 400,
        salePrice: 370,
        discount: 30,
        rating: 5,
        reviews: 99,
        image: "/placeholder.svg?height=200&width=200",
    },
    {
        id: 5,
        name: "S-Series Office Chair",
        originalPrice: 400,
        salePrice: 375,
        discount: 25,
        rating: 5,
        reviews: 99,
        image: "/placeholder.svg?height=200&width=200",
    },
];

export default function FlashSales() {
    const [api, setApi] = useState();
    const isMobile = useMediaQuery("(max-width: 640px)");
    const isTablet = useMediaQuery(
        "(min-width: 641px) and (max-width: 1023px)"
    );

    const getItemsToShow = () => {
        if (isMobile) return 1;
        if (isTablet) return 2;
        return 4;
    };

    return (
        <div className="w-full mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-10 bg-red-500 rounded-sm" />
                        <h2 className="text-red-500 font-medium">Today's</h2>
                    </div>
                    <h3 className="text-2xl font-semibold">Flash Sales</h3>
                </div>

                <div className="flex sm:flex-row items-start sm:items-center gap-4 sm:gap-8 w-full sm:w-auto">
                    <CountdownTimer />

                    <div className="flex gap-2 self-end sm:self-auto">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-gray-300 hover:bg-gray-100"
                            onClick={() => api?.scrollPrev()}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15 19L8 12L15 5"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="sr-only">Previous slide</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-gray-300 hover:bg-gray-100"
                            onClick={() => api?.scrollNext()}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 5L16 12L9 19"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="sr-only">Next slide</span>
                        </Button>
                    </div>
                </div>
            </div>
            <Carousel
                className="w-full"
                opts={{
                    align: "start",
                    loop: true,
                }}
                setApi={setApi}
            >
                <CarouselContent className="-ml-4">
                    {products.map((product) => (
                        <CarouselItem
                            key={product.id}
                            className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4"
                        >
                            <ProductCard />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <div className="mt-6 sm:mt-8 flex justify-center">
                <PrimaryButton text={"View All Products"} href={"3"} />
            </div>
        </div>
    );
}
