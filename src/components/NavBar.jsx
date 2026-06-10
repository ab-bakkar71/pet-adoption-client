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
import { useRouter } from 'next/navigation';


const NavBar = () => {
    const router = useRouter();
    // get user
    const userinfo = authClient.useSession();
    const user = userinfo?.data?.user;


    // logout handler
    const handelLogOut = async () => {
        try {
            await authClient.signOut();
            router.push('/sign-in');
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };



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
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                        <Link href="/" className="text-2xl font-bold flex items-center gap-1">
                            <IoMdPaw className='text-[#00bd56] -rotate-12' /> <span>Pet Adoption</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <ul className="hidden items-center gap-4 md:flex">
                        <li>
                            <NavLink />
                        </li>
                    </ul>

                    <div className="flex items-center gap-2">
                        {/* 💻 Desktop View: Authentication */}
                        {!user && (
                            <div className='hidden md:flex items-center gap-2'>
                                <Link href='/signin'>
                                    <Button variant="outline" className="bg-gray-200 text-black hover:bg-gray-300" size="sm">Login</Button>
                                </Link>
                                <Link href='/signup'>
                                    <Button variant="outline" className="bg-green-500 text-white hover:bg-green-600" size="sm">Sign Up</Button>
                                </Link>
                            </div>
                        )}

                        {user && (
                            <div className='relative group hidden md:flex gap-2'>
                                <button className='flex items-center gap-3 p-1 rounded-full hover:bg-muted transition-colors border border-transparent hover:border-border cursor-pointer'>
                                    <Avatar size='md'>
                                        <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy='no-referrer' />
                                        <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                                    </Avatar>
                                </button>

                                {/* Desktop Dropdown */}
                                <div className="absolute right-0 top-12 w-56 bg-white border border-slate-200 rounded-2xl shadow-2xl hidden group-hover:flex flex-col py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 dark:bg-slate-950 dark:text-slate-200 dark:border-slate-800/60">
                                    <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800">
                                        <p className="font-bold text-sm">{user?.name}</p>
                                        <p className="text-xs truncate text-slate-500 dark:text-slate-400 mt-0.5">{user?.email}</p>
                                    </div>
                                    <Link href="/dashboard" className="px-4 py-2 text-sm hover:bg-muted flex items-center gap-3 transition-colors dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-900/60">
                                        <LuLayoutDashboard className="w-4 h-4" /> Dashboard
                                    </Link>
                                    <Link href="/dashboard/adopt" className="px-4 py-2 text-sm hover:bg-muted flex items-center gap-3 transition-colors dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-900/60">
                                        <FaPlusCircle className="w-4 h-4" /> Adopt Now
                                    </Link>
                                    <Link href="/dashboard/my-listings" className="px-4 py-2 text-sm hover:bg-muted flex items-center gap-3 transition-colors dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-900/60">
                                        <IoListCircle className="w-4 h-4" /> My Listings
                                    </Link>
                                    <Link href="/dashboard/my-request" className="px-4 py-2 text-sm hover:bg-muted flex items-center gap-3 transition-colors dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-900/60">
                                        <LuListTodo className="w-4 h-4" /> My Requests
                                    </Link>
                                    <Link href="/dashboard/settings" className="px-4 py-2 text-sm hover:bg-muted flex items-center gap-3 transition-colors dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-900/60">
                                        <BiUser className="w-4 h-4" /> Settings
                                    </Link>
                                    <button onClick={handelLogOut} className="px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-3 transition-colors text-left dark:hover:bg-slate-900/60 w-full">
                                        <BiLogOut className="w-4 h-4" /> Log Out
                                    </button>
                                </div>
                            </div>
                        )}

                        <div>
                            <ThemToggle />
                        </div>
                    </div>
                </header>

                {/* 📱 Mobile Menu Drawer/Section */}
                {isMenuOpen && (
                    <div className="border-t border-separator md:hidden bg-background">
                        <ul className="flex flex-col gap-2 p-4">
                            <NavLink />
                        </ul>

                        <div className="my-2 px-4 pb-4 border-t border-separator/50 pt-4">
                            {/* 🎯 Mobile Logged Out View */}
                            {!user && (
                                <div className='flex items-center gap-2 w-full'>
                                    <Link href='/signin' className='w-full' onClick={() => setIsMenuOpen(false)}>
                                        <Button variant="outline" className="w-full bg-gray-200 text-black hover:bg-gray-300" size="sm">Login</Button>
                                    </Link>
                                    <Link href='/signup' className='w-full' onClick={() => setIsMenuOpen(false)}>
                                        <Button variant="outline" className="w-full bg-green-500 text-white hover:bg-green-600" size="sm">Sign Up</Button>
                                    </Link>
                                </div>
                            )}

                            {/* 🎯 Mobile Logged In View (Fixed!) */}
                            {user && (
                                <div className='flex flex-col gap-3'>
                                    {/* User Header Info */}
                                    <div className='flex items-center gap-3 px-1 pb-2 border-b border-separator/30'>
                                        <Avatar size='sm'>
                                            <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy='no-referrer' />
                                            <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                                        </Avatar>
                                        <div className="truncate">
                                            <p className="font-bold text-sm truncate">{user?.name}</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{user?.email}</p>
                                        </div>
                                    </div>

                                    {/* Mobile Navigation Dropdown Links */}
                                    <div className="flex flex-col gap-1">
                                        <Link href="/dashboard" onClick={() => setIsMenuOpen(false)} className="px-2 py-2 text-sm hover:bg-muted flex items-center gap-3 rounded-lg transition-colors">
                                            <LuLayoutDashboard className="w-4 h-4 text-slate-500" /> Dashboard
                                        </Link>
                                        <Link href="/dashboard/adopt" onClick={() => setIsMenuOpen(false)} className="px-2 py-2 text-sm hover:bg-muted flex items-center gap-3 rounded-lg transition-colors">
                                            <FaPlusCircle className="w-4 h-4 text-slate-500" /> Adopt Now
                                        </Link>
                                        <Link href="/dashboard/my-listings" onClick={() => setIsMenuOpen(false)} className="px-2 py-2 text-sm hover:bg-muted flex items-center gap-3 rounded-lg transition-colors">
                                            <IoListCircle className="w-4 h-4 text-slate-500" /> My Listings
                                        </Link>
                                        <Link href="/dashboard/my-request" onClick={() => setIsMenuOpen(false)} className="px-2 py-2 text-sm hover:bg-muted flex items-center gap-3 rounded-lg transition-colors">
                                            <LuListTodo className="w-4 h-4 text-slate-500" /> My Requests
                                        </Link>
                                        <Link href="/dashboard/settings" onClick={() => setIsMenuOpen(false)} className="px-2 py-2 text-sm hover:bg-muted flex items-center gap-3 rounded-lg transition-colors">
                                            <BiUser className="w-4 h-4 text-slate-500" /> Settings
                                        </Link>
                                        <button onClick={() => { handelLogOut(); setIsMenuOpen(false); }} className="px-2 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 flex items-center gap-3 rounded-lg transition-colors text-left w-full mt-1">
                                            <BiLogOut className="w-4 h-4" /> Log Out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;