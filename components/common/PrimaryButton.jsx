import Link from "next/link";
import { Button } from "../ui/button";

const PrimaryButton = ({ href, text }) => {
    return (
        <Button className="bg-red-500 hover:bg-red-600 text-white text-sm sm:text-base">
            <Link href={href}> View All Products</Link>
        </Button>
    );
};

export default PrimaryButton;
