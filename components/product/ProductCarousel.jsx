"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import ProductCard from "./ProductCard";

const products = [
    {
        id: 1,
        name: "BLEU DE CHANEL",
        image: "/placeholder.svg?height=200&width=200",
        originalPrice: 160,
        discountedPrice: 96,
        discount: 40,
        rating: 4.8,
        reviews: 88,
        category: "Perfume",
        color: "blue",
    },
    {
        id: 2,
        name: "Rose Elegance Perfume",
        image: "/placeholder.svg?height=200&width=200",
        originalPrice: 140,
        discountedPrice: 105,
        discount: 25,
        rating: 4.7,
        reviews: 75,
        category: "Perfume",
        color: "pink",
    },
    {
        id: 3,
        name: "Midnight Mystery Cologne",
        image: "/placeholder.svg?height=200&width=200",
        originalPrice: 120,
        discountedPrice: 90,
        discount: 25,
        rating: 4.9,
        reviews: 99,
        category: "Cologne",
        color: "black",
    },
    {
        id: 4,
        name: "IPS LCD Gaming Monitor",
        image: "/placeholder.svg?height=200&width=200",
        originalPrice: 400,
        discountedPrice: 320,
        discount: 20,
        rating: 4.6,
        reviews: 65,
        category: "Electronics",
        color: "red",
    },
    {
        id: 5,
        name: "S-Series Comfort Chair",
        image: "/placeholder.svg?height=200&width=200",
        originalPrice: 200,
        discountedPrice: 150,
        discount: 25,
        rating: 4.5,
        reviews: 55,
        category: "Furniture",
        color: "gray",
    },
    {
        id: 6,
        name: "S-Series Comfort Chair",
        image: "/placeholder.svg?height=200&width=200",
        originalPrice: 200,
        discountedPrice: 150,
        discount: 25,
        rating: 4.5,
        reviews: 55,
        category: "Furniture",
        color: "gray",
    },
    {
        id: 7,
        name: "S-Series Comfort Chair",
        image: "/placeholder.svg?height=200&width=200",
        originalPrice: 200,
        discountedPrice: 150,
        discount: 25,
        rating: 4.5,
        reviews: 55,
        category: "Furniture",
        color: "gray",
    },
];

export default function ProductCarousel() {
    const carouselRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const scroll = (direction) => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } =
                carouselRef.current;
            const scrollAmount = 300;

            const newScrollLeft =
                direction === "left"
                    ? scrollLeft - scrollAmount
                    : scrollLeft + scrollAmount;

            carouselRef.current.scrollTo({
                left: newScrollLeft,
                behavior: "smooth",
            });

            // Update arrow visibility after scroll
            setTimeout(() => {
                if (carouselRef.current) {
                    setShowLeftArrow(carouselRef.current.scrollLeft > 0);
                    setShowRightArrow(
                        carouselRef.current.scrollLeft +
                            carouselRef.current.clientWidth <
                            carouselRef.current.scrollWidth - 10
                    );
                }
            }, 300);
        }
    };

    const handleScroll = () => {
        if (carouselRef.current) {
            setShowLeftArrow(carouselRef.current.scrollLeft > 0);
            setShowRightArrow(
                carouselRef.current.scrollLeft +
                    carouselRef.current.clientWidth <
                    carouselRef.current.scrollWidth - 10
            );
        }
    };

    return (
        <div className="relative">
            {showLeftArrow && (
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md border-gray-200 rounded-full h-10 w-10"
                    onClick={() => scroll("left")}
                >
                    <ChevronLeft className="h-5 w-5" />
                    <span className="sr-only">Scroll left</span>
                </Button>
            )}

            <div
                ref={carouselRef}
                className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar"
                onScroll={handleScroll}
            >
                {products.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        showAddToCart={index === 1}
                    />
                ))}
            </div>

            {showRightArrow && (
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md border-gray-200 rounded-full h-10 w-10"
                    onClick={() => scroll("right")}
                >
                    <ChevronRight className="h-5 w-5" />
                    <span className="sr-only">Scroll right</span>
                </Button>
            )}
        </div>
    );
}
