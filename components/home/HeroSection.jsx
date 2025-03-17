import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="w-full rounded-2xl  bg-muted">
            <div className="container p-10">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl text-text-primary font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Summer Collection 2025
                            </h1>
                            <p className="max-w-[600px] text-text-secondary text-muted-foreground md:text-xl">
                                Discover our latest arrivals with bold colors
                                and breathable fabrics, perfect for the summer
                                season.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link href="/products">
                                <Button size="lg" className="px-8 rounded-sm">
                                    Shop Now
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="/collections/summer">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="px-8 rounded-sm"
                                >
                                    View Collection
                                </Button>
                            </Link>
                        </div>
                        <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1">
                                <span className="font-medium">✓</span>
                                <span className="text-muted-foreground">
                                    Free Shipping
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center">
                        <div className="absolute -top-8 -left-8 h-[300px] w-[300px] rounded-full bg-primary/20 blur-3xl" />
                        <div className="relative rounded-xl overflow-hidden border shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1601295452898-78a8dd904ab3?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                width={600}
                                height={600}
                                alt="Featured summer collection product"
                                className="aspect-square object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
