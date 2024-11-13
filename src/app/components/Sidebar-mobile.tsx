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
                <Button className=" flex justify-end  lg:hidden xl:hidden md:visible sm:visible text-pink-500 fixed z-20 sm:mt-5 md:mt-5 sm:ml-96 md:ml-96" size='lg' variant='link'>
                    <Menu className="menu-icon sm:ml-44 md:ml-72 none lg:hidden xl:hidden md:block sm:block" size={100} />

                </Button>
            </SheetTrigger>

            <SheetContent hideClose>
                <SheetHeader className="flex flex-row justify-between ml-4 space-y-0">

                    <SheetClose asChild>

                    <Button className="h-7 w-7 p-0 text-pink-600 bg-white" variant=
                'ghost'>
                        <X size={80}/>
                    </Button>

                    </SheetClose>

                </SheetHeader>

                <div>
                    <div className="flex flex-col gap-7 mt-14 w-full text-pink-500">
                    {props.sidebarItems.links.map((link,idx) => (
                        <Link key={idx} href={link.href}>

                            <SidebarButtons 

                            variant={pathname === link.href ? 'Secondary' : 'ghost'}
                            
                            icon={link.icon}>{link.label}</SidebarButtons>
                        
                        </Link>
                    ))}
                    </div>
                </div>
            </SheetContent>
        </Sheet>

    )
}