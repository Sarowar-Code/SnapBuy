"use client";
import CountdownTimer from "@/components/home/CountdownTimer";
import { getAllProduct } from "@/database/queries";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useState } from "react";
import PrimaryButton from "../common/PrimaryButton";
import ProductCard from "../product/ProductCard";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export default async function FlashSales() {
    const allProducts = await getAllProduct();
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
        <div className="w-full mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-10 bg-primary rounded-sm" />
                        <h2 className="text-primary font-medium">Today's</h2>
                    </div>
                    <h3 className="text-3xl text-text-primary font-semibold">
                        Flash Sales
                    </h3>
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
                    {allProducts.map((product) => (
                        <CarouselItem
                            key={product?.name}
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
