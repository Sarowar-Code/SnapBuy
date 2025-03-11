"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart, Star } from "lucide-react";
import { useState } from "react";

export default function ProductCard({ product, showAddToCart = false }) {
    const [isFavorite, setIsFavorite] = useState(false);

    // Set background color based on product color
    const getBackgroundColor = () => {
        switch (product.color) {
            case "blue":
                return "bg-blue-100";
            case "pink":
                return "bg-pink-100";
            case "black":
                return "bg-gray-800";
            case "red":
                return "bg-red-100";
            case "gray":
            default:
                return "bg-gray-100";
        }
    };

    return (
        <div className="flex-shrink-0 w-[250px] bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="relative">
                <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    -{product.discount}%
                </div>
                <button
                    className={cn(
                        "absolute top-2 right-2 z-10 p-1.5 rounded-full",
                        isFavorite ? "bg-red-50" : "bg-gray-50"
                    )}
                    onClick={() => setIsFavorite(!isFavorite)}
                    aria-label={
                        isFavorite
                            ? "Remove from favorites"
                            : "Add to favorites"
                    }
                >
                    <Heart
                        className={cn(
                            "h-5 w-5",
                            isFavorite
                                ? "fill-red-500 text-red-500"
                                : "text-gray-400"
                        )}
                    />
                </button>
                <div
                    className={`h-[200px] w-full ${getBackgroundColor()} flex items-center justify-center`}
                >
                    <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="h-full w-full object-contain"
                    />
                </div>
            </div>

            <div className="p-4">
                <div className="text-sm text-gray-500 mb-1">
                    {product.category}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 truncate">
                    {product.name}
                </h3>

                <div className="flex items-center mb-2">
                    <div className="flex text-amber-400 mr-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={cn(
                                    "h-4 w-4",
                                    i < Math.floor(product.rating)
                                        ? "fill-amber-400"
                                        : "fill-gray-200"
                                )}
                            />
                        ))}
                    </div>
                    <span className="text-xs text-gray-500">
                        ({product.reviews})
                    </span>
                </div>

                <div className="flex items-center">
                    <span className="font-bold text-gray-900">
                        ${product.discountedPrice}
                    </span>
                    <span className="ml-2 text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                    </span>
                </div>

                {showAddToCart && (
                    <Button className="w-full mt-3 bg-red-500 hover:bg-red-600 text-white">
                        Add To Cart
                    </Button>
                )}
            </div>
        </div>
    );
}
