"use client";

import Link from "next/link";
import CartIcon from "../icons/CartIcon";
import HeartIcon from "../icons/HeartIcon";
import ProfileIcon from "../icons/ProfileIcon";
import SearchIcon from "../icons/SearchIcon";
import { Button } from "../ui/button";
import Logo from "./Logo";
import MobileDropdownMenu from "./MobileDropdownMenu";

const Navbar = () => {
    const navigation = [
        { name: "Home", href: "/" },
        { name: "Product", href: "/product" },
        { name: "Sale", href: "/sales" },
        { name: "About us", href: "/about" },
        { name: "Contact us", href: "/contact" },
    ];

    return (
        <div className="bg-white">
            <header className="container absolute inset-x-0 top-0 z-50 w-full">
                <nav
                    className="flex items-center justify-between p-6 lg:px-8"
                    aria-label="Global"
                >
                    <div className="flex items-center gap-2 lg:flex-1">
                        <MobileDropdownMenu navigation={navigation} />
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Logo width={120} height={70} />
                        </Link>
                    </div>
                    <div className="text-text-primary flex items-center gap-3 lg:hidden">
                        <Link href="/">
                            <SearchIcon />
                        </Link>
                        <Link href="/">
                            {" "}
                            <HeartIcon />
                        </Link>
                        <Link href="/">
                            <CartIcon />
                        </Link>
                        <Link href="/">
                            {" "}
                            <ProfileIcon />
                        </Link>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm/6 font-semibold text-gray-900"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-4">
                        <SearchIcon />
                        <HeartIcon />
                        <CartIcon />
                        <ProfileIcon />
                        <Button>
                            <Link
                                href="/login"
                                className="text-sm/6 font-semibold text- "
                            >
                                Log in
                            </Link>
                        </Button>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
