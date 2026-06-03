"use client"
import { authClient } from "@/lib/auth-client";
import { myListing } from '@/lib/data';
import { Globe, TrashBin } from "@gravity-ui/icons";
import { Avatar, Button } from "@heroui/react";
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import EditPet from "./EditPet";


const myListingClient = () => {

    const [myPets, setMyPets] = useState([]);

    // get user
    const userinfo = authClient.useSession();
    const user = userinfo?.data?.user;
    const email = user?.email;

    useEffect(() => {
        const fetchData = async () => {
            if (!email) return;

            const data = await myListing(email);
            setMyPets(data);
        };
        fetchData();

    }, [email])


    return (
        <section className='min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                <div className="rounded-2xl border bg-white border-slate-200 shadow-sm dark:bg-slate-900/40 dark:border-slate-800/80 overflow-hidden">
                    <div className="p-5 border-b border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                        <div>
                            <h3 className="font-bold text-base text-slate-900 dark:text-white">My Pet Listings</h3>
                            <p className="text-xs text-slate-400 mt-0.5">A list of pets you have put up for adoption.</p>
                        </div>
                    </div>


                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm border-collapse">
                            <thead>
                                <tr className="bg-slate-50/70 dark:bg-slate-900/20 text-slate-400 dark:text-slate-500 font-semibold border-b border-slate-100 dark:border-slate-800/60">
                                    <th className="p-4">Pet Image</th>
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

                                        <td className="p-4">
                                            <Avatar className="size-16">
                                                <Avatar.Image
                                                    alt={pet.petName}
                                                    src={pet.imageUrl}
                                                />
                                                <Avatar.Fallback>XL</Avatar.Fallback>
                                            </Avatar>
                                        </td>

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
                                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${pet.status === "Available"
                                                ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
                                                : "bg-slate-500/10 text-slate-500"
                                                }`}>
                                                {pet.status}
                                            </span>
                                        </td>
                                        <td className="flex justify-end items-center p-4 text-right space-x-2">
                                            <div>
                                                <EditPet user={user} pet={pet} />
                                            </div>
                                            <Button variant="danger">
                                                <TrashBin />
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default myListingClient;