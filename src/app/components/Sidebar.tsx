'use client'

import { Award, Contact, FolderCheck, Home, Smile,  } from "lucide-react";
import { SidebarItems } from "@/app/Type";
import { SidebarMobile } from "./Sidebar-mobile";


const sidebarItems: SidebarItems = {

        links: [
          
          { label: 'Home', href: '/', icon: Home },
          { label: 'About',icon: Smile, href: '#about' },
          { label: 'Projects',icon: FolderCheck, href: '#projects' },
          {label: 'Skills', icon: Award, href: '#skills'},
          { label: 'Contact', href: '#contact', icon: Contact },

        ],
}

export function Sidebar() {
  
    return <SidebarMobile sidebarItems={sidebarItems} />;

}
    
