import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = () => {
    const pathName = usePathname()
    return (
        <div>
            <Link href="/" className={`py-2 px-4 rounded-sm mx-2 font-semibold ${pathName === "/" ? "text-[#198c19] underline" : "hover:text-[#198c19] hover:underline transition duration-300"}`}> Home
            </Link>
            <Link href="/all-pets" className={`py-2 px-4 rounded-sm mr-2 font-semibold ${pathName === "/all-pets" ? "text-[#198c19] underline" : "hover:text-[#198c19] hover:underline transition duration-300"}`}> All Pets
            </Link>
            
        </div>
    );
};

export default NavLink;