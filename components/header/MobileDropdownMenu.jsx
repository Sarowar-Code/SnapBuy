import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileDropdownMenu = ({ navigation }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Menu color="#222222" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {navigation.map((item) => (
                    <DropdownMenuItem key={item.name}>
                        <Link href={item.href}>{item.name}</Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default MobileDropdownMenu;
