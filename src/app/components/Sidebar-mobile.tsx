'use client'

import { SidebarItems } from "@/app/Type";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { SidebarButtonsSheet as SidebarButtons } from "./Sidebar-button";
import { usePathname } from "next/navigation";


interface SidebarMobileProps {

    sidebarItems: SidebarItems;
}

export function SidebarMobile(props: SidebarMobileProps) {

    const pathname = usePathname ();

    return(
        <Sheet>
            <SheetTrigger asChild>
                <Button className="flex justify-self-end -mt-14 text-pink-600 " size='lg' variant='ghost'>

                    <Menu className="menu-icon lg:hidden md:block sm:block md:mr-10" size={40} />

                </Button>
            </SheetTrigger>

            <SheetContent hideClose>
                <SheetHeader className="flex flex-row justify-between space-y-0">

                    <SheetClose asChild>

                    <Button className="h-7 w-7 p-0 text-pink-600" variant=
                    'ghost'>
                        <X size={20}/>
                    </Button>

                    </SheetClose>

                </SheetHeader>

                <div>
                    <div className="flex flex-col gap-4 mt-7 w-full font-serif">
                    {props.sidebarItems.links.map((link,idx) => (
                        <Link key={idx} href={link.href}>

                            <SidebarButtons 

                            variant={pathname === link.href ? "Secondary" : 'ghost'}
                            
                            icon={link.icon}>{link.label}</SidebarButtons>
                        
                        </Link>
                    ))}
                    </div>
                </div>
            </SheetContent>
        </Sheet>

    )
}