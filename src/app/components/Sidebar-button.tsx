import { Button, ButtonProps } from "@mui/material";
import {LucideIcon} from 'lucide-react'; 
import { SheetClose } from "@/components/ui/sheet";
import { cn } from "../lib/utils";


interface SidebarButtonsProps extends ButtonProps {
    icon?: LucideIcon
}


export function SidebarButtons ({ icon: Icon, children, ...props }: SidebarButtonsProps) {

    return (

        <Button variant="text" className={cn ("gap-2")} {...props}>

            {Icon && <Icon size={30}/>}

            <span>{children}</span>

        </Button>
    );
}

export function SidebarButtonsSheet(props: SidebarButtonsProps){
    return(
        <SheetClose asChild>
            <SidebarButtons {...props} />
        </SheetClose>
    )
}