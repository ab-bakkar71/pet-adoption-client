'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdPaw } from 'react-icons/io';
import NavLink from './NavLink';
import { Button, Switch } from '@heroui/react';
import ThemToggle from './ThemToggle';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className='border-b border-separator bg-background/70 backdrop-blur-lg'>
            <div className="sticky top-0 z-40 w-full container mx-auto">

                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-4">
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="sr-only">Menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                        <Link href="/" className="text-2xl font-bold flex items-center gap-1">
                            <IoMdPaw className='text-[#00bd56] -rotate-12' /> <span>Pet Adoption</span>
                        </Link>
                    </div>
                    <ul className="hidden items-center gap-4 md:flex">
                        <li>
                            <NavLink />
                        </li>
                    </ul>
                    <div className="hidden md:flex items-center gap-2">
                        <Button variant="outline" className="bg-gray-200 text-black hover:bg-gray-300" size="sm">Login</Button>
                        <Button variant="outline" className="bg-green-500 text-white hover:bg-green-600" size="sm" >Sign Up</Button>

                        <div>
                           <ThemToggle/>
                       
                        </div>
                    </div>
                    
                </header>
                {isMenuOpen && (
                    <div className="border-t border-separator md:hidden">
                        <ul className="flex flex-col gap-2 p-4">
                            <NavLink />
                        </ul>
                        <div className="my-2 px-4">
                            <Button variant="outline" className="bg-gray-200 text-black hover:bg-gray-300" size="sm">Login</Button>
                            <Button variant="outline" className="bg-green-500 text-white hover:bg-green-600" size="sm" >Sign Up</Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;