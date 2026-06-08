"use client"
import { authClient } from '@/lib/auth-client';
import { myListing } from '@/lib/data';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { LuArrowUpRight } from 'react-icons/lu';

const DashBoardListing = () => {
    const [myPets, setMyPets] = useState([]);

    const [loading, setLoading] = useState(true)

    // get user
    const userinfo = authClient.useSession();
    const user = userinfo?.data?.user;
    const email = user?.email;

    useEffect(() => {
        const fetchData = async () => {
            if (!email) return;
            setLoading(true)
            const data = await myListing(email);
            setMyPets(data);
            setLoading(false)
        };
        fetchData();

    }, [email])
    
    return (

        <div className="lg:col-span-3 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-center gap-4'>
                <div className='rounded-2xl border bg-white border-slate-200 shadow-sm dark:bg-slate-900/40 dark:border-slate-800/80 overflow-hidden p-5'>
                    <h3>Your Total pet</h3>
                    <p>{myPets.length}</p>
                </div>
                <div className='rounded-2xl border bg-white border-slate-200 shadow-sm dark:bg-slate-900/40 dark:border-slate-800/80 overflow-hidden p-5'>
                    <h3>Avabaile</h3>
                    <p>{myPets.filter(pet => pet.status?.toLowerCase() === 'available').length}</p>
                </div>
                <div className='rounded-2xl border bg-white border-slate-200 shadow-sm dark:bg-slate-900/40 dark:border-slate-800/80 overflow-hidden p-5'>
                    <h3>Adopted</h3>
                    <p>{myPets.filter(pet => pet.status?.toLowerCase() === 'adopted').length}</p>
                </div>
                
                <div className='rounded-2xl border bg-white border-slate-200 shadow-sm dark:bg-slate-900/40 dark:border-slate-800/80 overflow-hidden p-5'>
                    <h3>Pending</h3>
                    <p>{myPets.filter(pet => pet.status?.toLowerCase() === 'pending').length}</p>
                </div>
                <div className='rounded-2xl border bg-white border-slate-200 shadow-sm dark:bg-slate-900/40 dark:border-slate-800/80 overflow-hidden p-5'>
                    <h3>Cancel</h3>
                    <p>{myPets.filter(pet => pet.status?.toLowerCase() === 'cancel').length}</p>
                </div>

            </div>





            <div className="rounded-2xl border bg-white border-slate-200 shadow-sm dark:bg-slate-900/40 dark:border-slate-800/80 overflow-hidden">
                <div className="p-5 border-b border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                    <div>
                        <h3 className="font-bold text-base text-slate-900 dark:text-white">My Pet Listings</h3>
                        <p className="text-xs text-slate-400 mt-0.5">A list of pets you have put up for adoption.</p>
                    </div>
                    <Link href="/dashboard/my-listings" className="text-xs font-semibold text-cyan-500 hover:text-cyan-600 flex items-center gap-1 transition-colors">
                        View All <LuArrowUpRight className="w-3 h-3" />
                    </Link>
                </div>


                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse">
                        <thead>
                            <tr className="bg-slate-50/70 dark:bg-slate-900/20 text-slate-400 dark:text-slate-500 font-semibold border-b border-slate-100 dark:border-slate-800/60">
                                <th className="p-4">Pet Name</th>
                                <th className="p-4">Species / Breed</th>
                                <th className="p-4">Adoption Fee</th>
                                <th className="p-4">Status</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800/40">
                            {myPets.map((pet) => (
                                <tr key={pet._id} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                                    <td className="p-4 font-bold text-slate-900 dark:text-slate-200">{pet.petName}</td>
                                    <td className="p-4 text-slate-500 dark:text-slate-400">
                                        <span className="font-medium text-slate-700 dark:text-slate-300">{pet.species}</span>
                                        <span className="block text-xs">{pet.breed}</span>
                                    </td>
                                    <td className="p-4 font-semibold">
                                        {pet.fee === 0 ? (
                                            <span className="text-emerald-500 dark:text-emerald-400 text-xs font-bold uppercase tracking-wide bg-emerald-500/10 px-2 py-0.5 rounded-md">Free</span>
                                        ) : (
                                            <span className="text-slate-700 dark:text-slate-300">৳ {pet.adoptionFee}</span>
                                        )}
                                    </td>
                                    <td className="p-4">
                                        <span
                                            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${pet.status === "Available"
                                                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                                    : pet.status === "Adopted"
                                                        ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                                                        : pet.status === "Pending"
                                                            ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                                                            : pet.status === "Cancel"
                                                                ? "bg-rose-500/10 text-rose-600 dark:text-rose-400"
                                                                : "bg-slate-500/10 text-slate-500" // Default কালার যদি কোনোটিই না মেলে
                                                }`}
                                        >
                                            {pet.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <button className="text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 dark:border-slate-800 dark:hover:bg-slate-900 dark:text-slate-400 transition-colors cursor-pointer">
                                            Manage
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DashBoardListing;