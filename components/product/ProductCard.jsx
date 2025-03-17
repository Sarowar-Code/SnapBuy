import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Heart } from "lucide-react";
import Image from "next/image";
import StarRating from "../home/StarRating";
const ProductCard = ({ product }) => {
    return (
        <Card className="relative">
            <div className="absolute top-3 left-3 z-10">
                <span className="bg-primary text-white text-xs sm:text-sm px-2 py-1 rounded">
                    -{345}%
                </span>
            </div>
            <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                <Button
                    variant="secondary"
                    size="icon"
                    className="h-7 opacity-70 w-7 sm:h-8 sm:w-8 rounded-full"
                >
                    <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <Button
                    variant="secondary"
                    size="icon"
                    className="h-7 opacity-70 w-7 sm:h-8 sm:w-8 rounded-full"
                >
                    <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
            </div>
            <CardContent className="p-3 sm:p-4 ">
                <div className="aspect-square relative mb-3 sm:mb-4">
                    <Image
                        src={product?.image}
                        alt={product?.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="space-y-1 sm:space-y-2">
                    <h4 className="font-medium text-sm sm:text-base line-clamp-1">
                        {product?.name}
                    </h4>
                    <div className="flex gap-2">
                        <span className="text-red-500 font-semibold">
                            ${product?.price}
                        </span>
                        <span className="text-muted-foreground line-through text-sm">
                            $210
                        </span>
                    </div>
                    <StarRating
                        rating={product?.rating}
                        reviews={product?.reviews}
                    />
                </div>
                <Button className="h-8 py-1 mt-2 w-full">Add To Cart</Button>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
