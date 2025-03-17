"use client";

import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import Logo from "./Logo";

const categories = [
    { name: "New Arrivals", href: "#" },
    { name: "Women", href: "#" },
    { name: "Men", href: "#" },
    { name: "Accessories", href: "#" },
    { name: "Sale", href: "#" },
];

export default function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const cartItemCount = 3; // This would come from your cart state
    const wishlistItemCount = 2; // This would come from your wishlist state

    // Toggle authentication for demo purposes
    const toggleAuth = () => setIsAuthenticated(!isAuthenticated);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center px-4 md:px-6">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="mr-2 md:hidden"
                        >
                            <Menu className="h-5 w-5 text-text-primary" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        side="left"
                        className="w-[300px] sm:w-[400px]"
                    >
                        <SheetHeader>
                            <SheetTitle className="text-left">Menu</SheetTitle>
                        </SheetHeader>
                        <div className="mt-6 flex flex-col gap-4">
                            <div className="flex flex-col gap-2 border-b pb-4">
                                {!isAuthenticated ? (
                                    <>
                                        <Button
                                            className="w-full"
                                            onClick={toggleAuth}
                                        >
                                            Sign In
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="w-full"
                                        >
                                            Create Account
                                        </Button>
                                    </>
                                ) : (
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2 px-1">
                                            <div className="h-8 w-8 rounded-full bg-primary/10">
                                                <User className="h-8 w-8 p-2 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium">
                                                    John Doe
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    john.doe@example.com
                                                </p>
                                            </div>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            className="justify-start px-1 text-muted-foreground"
                                            onClick={toggleAuth}
                                        >
                                            Sign Out
                                        </Button>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center justify-between border-t border-b py-4">
                                <Link
                                    href="/wishlist"
                                    className="flex items-center gap-2 px-2 py-1"
                                >
                                    <Heart className="h-5 w-5 text-text-primary" />
                                    <span className="text-sm font-medium">
                                        Wishlist
                                    </span>
                                    {wishlistItemCount > 0 && (
                                        <Badge
                                            variant="secondary"
                                            className="ml-1"
                                        >
                                            {wishlistItemCount}
                                        </Badge>
                                    )}
                                </Link>
                                <Link
                                    href="/profile"
                                    className="flex items-center gap-2 px-2 py-1"
                                >
                                    <User className="h-5 w-5" />
                                    <span className="text-sm font-medium">
                                        Profile
                                    </span>
                                </Link>
                            </div>
                            <nav className="flex flex-col gap-1 border-t pt-4">
                                {categories.map((category) => (
                                    <Link
                                        key={category.name}
                                        href={category.href}
                                        className="rounded-md px-2 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                                    >
                                        {category.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </SheetContent>
                </Sheet>

                <Link href="/">
                    <Logo width={110} height={50} />
                </Link>

                <nav className="hidden md:flex md:flex-1 md:items-center md:mx-5">
                    <ul className="flex gap-6">
                        {categories.map((category) => (
                            <li key={category.name}>
                                <Link
                                    href={category.href}
                                    className="text-sm font-medium transition-colors hover:text-primary"
                                >
                                    {category.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex flex-1 items-center justify-end gap-1">
                    <div
                        className={cn(
                            "search-container relative",
                            isSearchOpen ? "flex" : "hidden md:flex"
                        )}
                    >
                        <div>
                            <Input
                                placeholder="Search products..."
                                className="w-full pl-8 md:w-[200px] md:flex hidden lg:w-[300px]"
                            />
                        </div>
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                    >
                        <Search className="h-5 w-5" />
                        <span className="sr-only">Search</span>
                    </Button>

                    {isAuthenticated ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="hidden md:flex"
                                >
                                    <User className="h-5 w-5 text-text-primary" />
                                    <span className="sr-only">Account</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>
                                    My Account
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Orders</DropdownMenuItem>
                                <DropdownMenuItem>Wishlist</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={toggleAuth}>
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div className="hidden items-center gap-2 md:flex">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={toggleAuth}
                            >
                                Sign In
                            </Button>
                            <Button size="sm">Sign Up</Button>
                        </div>
                    )}

                    <Button variant="ghost" size="icon" className="relative">
                        <Link href="/profile">
                            <User className="h-5 w-5 text-text-primary" />
                            <span className="sr-only">Profile</span>
                        </Link>
                    </Button>

                    <Button variant="ghost" size="icon" className="relative">
                        <Link href="/wishlist">
                            <Heart className="h-5 w-5 text-text-primary" />
                            <span className="sr-only">Wishlist</span>
                            {wishlistItemCount > 0 && (
                                <Badge
                                    variant="secondary"
                                    className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-1 text-xs"
                                >
                                    {wishlistItemCount}
                                </Badge>
                            )}
                        </Link>
                    </Button>

                    <Button variant="ghost" size="icon" className="relative">
                        <ShoppingCart className="h-5 w-5 text-text-primary" />
                        <span className="sr-only">Cart</span>
                        {cartItemCount > 0 && (
                            <Badge
                                variant="secondary"
                                className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-1 text-xs"
                            >
                                {cartItemCount}
                            </Badge>
                        )}
                    </Button>
                </div>
            </div>
        </header>
    );
}
