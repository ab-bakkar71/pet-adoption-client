"use client"


import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiLogOut, BiUser } from 'react-icons/bi';
import { FaPlusCircle } from 'react-icons/fa';
import { IoListCircle } from 'react-icons/io5';
import { LuArrowUpRight, LuLayoutDashboard, LuListTodo, LuMail, LuMapPin } from 'react-icons/lu';
import { MdArrowOutward } from 'react-icons/md';

const dashboardPage = () => {

  // get user
  const userinfo = authClient.useSession();
  const user = userinfo?.data?.user;
  console.log(user);


// for logout
  const handelLogOut = async () => {
          await authClient.signOut();
  
      }



  const recentListings = [
    { id: 1, name: "Luna", species: "Cat", breed: "Persian", fee: 1500, status: "Available" },
    { id: 2, name: "Buddy", species: "Dog", breed: "Golden Retriever", fee: 0, status: "Adopted" },
    { id: 3, name: "Sky", species: "Bird", breed: "Budgerigar", fee: 200, status: "Available" },
  ];

  return (
    <>
      <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 border-b border-slate-200/60 dark:border-slate-800/60 pb-6">
          {/* welcome message */}
            <div>
              <h1 className="text-3xl font-black tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
                Welcome Back, {user?.name?.split(' ')[0]}! 👋
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Manage your listed pets, track adoption requests, and check updates.
              </p>
            </div>

            <Link href='/dashboard/adopt' className="inline-flex items-center justify-center gap-2 px-5 h-11 text-sm font-semibold rounded-xl text-white bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] transition-all shadow-md shadow-emerald-500/10 cursor-pointer">

              <span>List a New Pet</span>
            </Link>
          </div>

          {/* user details */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="p-6 rounded-2xl border bg-white border-slate-200 shadow-sm dark:bg-slate-900/40 dark:border-slate-800/80">
                <div className="flex flex-col items-center text-center">

                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-500 p-0.5 shadow-md">
                    <Image src={user?.image}
                      alt={user?.name || "User Avatar"}
                      width={40}
                      height={40}
                      className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center font-black text-2xl text-cyan-600 dark:text-cyan-400">
                    </Image>
                  </div>

                  <h3 className="mt-4 font-bold text-lg text-slate-900 dark:text-white">{user?.name}</h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 mt-1">
                    {user?.role || 'Premium User'}
                  </span>
                  <div className="w-full space-y-3 mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/60 text-left text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-3 truncate">
                      <LuMail className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="truncate">{user?.email}</span>
                    </div>
                  </div>
                  {/* Link */}
                  <div className='w-full space-y-3 mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/60 text-left text-sm text-slate-600 dark:text-slate-400'>
                    <Link href="/dashboard" className=" py-2 text-sm flex items-center gap-3 transition-colors dark:text-slate-400 dark:hover:text-green-500 dark:hover:underline">
                      <LuLayoutDashboard className="w-4 h-4" /> Dashboard <MdArrowOutward />

                    </Link>
                    <Link href="/dashboard/adopt" className=" py-2 text-sm flex items-center gap-3 transition-colors dark:text-slate-400 dark:hover:text-green-500 dark:hover:underline">
                      <FaPlusCircle className="w-4 h-4" /> Adopt Now <MdArrowOutward />
                    </Link>
                    <Link href="/dashboard/my-listings" className=" py-2 text-sm flex items-center gap-3 transition-colors dark:text-slate-400 dark:hover:text-green-500 dark:hover:underline">
                      <IoListCircle className="w-4 h-4" /> My Listings <MdArrowOutward />
                    </Link>
                    <Link href="/dashboard/my-request" className="py-2 text-sm flex items-center gap-3 transition-colors dark:text-slate-400 dark:hover:text-green-500 dark:hover:underline">
                      <LuListTodo className="w-4 h-4" /> My Requests <MdArrowOutward />
                    </Link>
                    <Link href="/dashboard/settings" className=" py-2 text-sm flex items-center gap-3 transition-colors dark:text-slate-400 dark:hover:text-green-500 dark:hover:underline ">
                      <BiUser className="w-4 h-4" /> Settings <MdArrowOutward />
                    </Link>
                    <button onClick={handelLogOut} className=" py-2 text-sm text-red-500 flex items-center gap-3 transition-colors text-left hover:underline cursor-pointer">
                      <BiLogOut className="w-4 h-4" /> Log Out
                    </button>
                  </div>
                </div>
              </div>
            </div>


            <div className="lg:col-span-3 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              </div>
              <div className="rounded-2xl border bg-white border-slate-200 shadow-sm dark:bg-slate-900/40 dark:border-slate-800/80 overflow-hidden">
                <div className="p-5 border-b border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">My Pet Listings</h3>
                    <p className="text-xs text-slate-400 mt-0.5">A list of pets you have put up for adoption.</p>
                  </div>
                  <button className="text-xs font-semibold text-cyan-500 hover:text-cyan-600 flex items-center gap-1 transition-colors">
                    View All <LuArrowUpRight className="w-3 h-3" />
                  </button>
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
                      {recentListings.map((pet) => (
                        <tr key={pet.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                          <td className="p-4 font-bold text-slate-900 dark:text-slate-200">{pet.name}</td>
                          <td className="p-4 text-slate-500 dark:text-slate-400">
                            <span className="font-medium text-slate-700 dark:text-slate-300">{pet.species}</span>
                            <span className="block text-xs">{pet.breed}</span>
                          </td>
                          <td className="p-4 font-semibold">
                            {pet.fee === 0 ? (
                              <span className="text-emerald-500 dark:text-emerald-400 text-xs font-bold uppercase tracking-wide bg-emerald-500/10 px-2 py-0.5 rounded-md">Free</span>
                            ) : (
                              <span className="text-slate-700 dark:text-slate-300">৳ {pet.fee}</span>
                            )}
                          </td>
                          <td className="p-4">
                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${pet.status === "Available"
                              ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
                              : "bg-slate-500/10 text-slate-500"
                              }`}>
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
          </div>

        </div>
      </div>
    </>
  );
};

export default dashboardPage;