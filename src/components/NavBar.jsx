'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdPaw } from 'react-icons/io';
import NavLink from './NavLink';
import { Avatar, Button } from '@heroui/react';
import ThemToggle from './ThemToggle';
import { authClient } from '@/lib/auth-client';
import { LuLayoutDashboard, LuListTodo } from 'react-icons/lu';
import { BiLogOut, BiUser } from 'react-icons/bi';
import { FaPlusCircle } from 'react-icons/fa';
import { IoListCircle } from 'react-icons/io5';

const NavBar = () => {
    // get user
    const userinfo = authClient.useSession();
    const user = userinfo?.data?.user;


    // logout handler
    const handelLogOut = async () => {
        await authClient.signOut();

    }



    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className='border-b border-separator bg-background/70 backdrop-blur-lg sticky top-0 z-40'>
            <div className="top-0 z-40 w-full container mx-auto ">

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
                        {
                            !user && <div className='hidden md:flex items-center gap-2'>
                                <Link href='/signin'>
                                    <Button variant="outline" className="bg-gray-200 text-black hover:bg-gray-300" size="sm">Login</Button>
                                </Link>
                                <Link href='/signup'>
                                    <Button variant="outline" className="bg-green-500 text-white hover:bg-green-600" size="sm" >Sign Up</Button>
                                </Link>
                            </div>
                        }

                        {
                            user && <div className='relative group hidden gap-2 md:flex'>
                                <button className='flex items-center gap-3 p-1 rounded-full hover:bg-muted transition-colors border border-transparent hover:border-border cursor-pointer'>
                                    <Avatar size='md'>
                                        <Avatar.Image
                                            alt={user?.name}
                                            src={user?.image}
                                            referrerPolicy='no-referrer' />
                                        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                                    </Avatar>
                                </button>

                                <div className="absolute right-0 top-12 w-56 bg-white border border-slate-200 rounded-2xl shadow-2xl hidden group-hover:flex flex-col py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="px-4 py-3 border-b border-slate-100">
                                        <p className="font-bold text-sm">{user?.name}</p>
                                        <p className="text-xs truncate text-slate-500">sakib@gmail.com</p>
                                    </div>
                                    <Link href="/dashboard" className="px-4 py-2 text-sm hover:bg-muted flex items-center gap-3 transition-colors">
                                        <LuLayoutDashboard className="w-4 h-4" /> Dashboard
                                    </Link>
                                    <Link href="/dashboard" className="px-4 py-2 text-sm hover:bg-muted flex items-center gap-3 transition-colors">
                                        <FaPlusCircle className="w-4 h-4" /> Adopt Now
                                    </Link>
                                    <Link href="/dashboard" className="px-4 py-2 text-sm hover:bg-muted flex items-center gap-3 transition-colors">
                                        <IoListCircle className="w-4 h-4" /> My Listings
                                    </Link>
                                    <Link href="/dashboard" className="px-4 py-2 text-sm hover:bg-muted flex items-center gap-3 transition-colors">
                                        <LuListTodo className="w-4 h-4" /> My Requests
                                    </Link>
                                    <Link href="/settings" className="px-4 py-2 text-sm hover:bg-muted flex items-center gap-3 transition-colors">
                                        <BiUser className="w-4 h-4" /> Settings
                                    </Link>
                                    <button onClick={handelLogOut} className="px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-3 transition-colors text-left">
                                        <BiLogOut className="w-4 h-4" /> Log Out
                                    </button>
                                </div>
                            </div>
                        }

                        <div>
                            <ThemToggle />

                        </div>
                    </div>

                </header>
                {
                    isMenuOpen && (
                        <div className="border-t border-separator md:hidden">
                            <ul className="flex flex-col gap-2 p-4">
                                <NavLink />
                            </ul>
                            <div className="my-2 px-4 space-x-2">
                                {
                                    user && <div className='hidden gap-2 md:flex'>
                                        <Avatar size='md'>
                                            <Avatar.Image
                                                alt={user?.name}
                                                src={user?.image}
                                                referrerPolicy='no-referrer' />
                                            <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                                        </Avatar>
                                        <Button onClick={handelLogOut} size='md' variant='danger'>Log Out</Button>
                                    </div>
                                }

                                {
                                    !user && <div className='hidden md:flex items-center gap-2'>
                                        <Link href='/signin'>
                                            <Button variant="outline" className="bg-gray-200 text-black hover:bg-gray-300" size="sm">Login</Button>
                                        </Link>
                                        <Link href='/signup'>
                                            <Button variant="outline" className="bg-green-500 text-white hover:bg-green-600" size="sm" >Sign Up</Button>
                                        </Link>
                                    </div>
                                }
                            </div>
                        </div>
                    )
                }
            </div >
        </nav >
    );
};

export default NavBar;