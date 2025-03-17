import Link from "next/link";
import { Button } from "../ui/button";

const PrimaryButton = ({ href, text }) => {
    return (
        <Button className="bg-primary hover:opacity-95 text-white text-sm sm:text-base font-regular rounded-sm">
            <Link href={href}>{text}</Link>
        </Button>
    );
};

export default PrimaryButton;
