'use client';

import { Menu } from '@/constants/menu';
import { usePathname } from 'next/navigation';


export function MenuCurrent () {
    const pathname = usePathname();
    const menuCurrent = Menu.find(f => f.link.includes(pathname))?.name
    
    return menuCurrent
}