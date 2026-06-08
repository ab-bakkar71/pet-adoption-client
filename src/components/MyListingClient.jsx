"use client"
import { authClient } from "@/lib/auth-client";
import { myListing } from '@/lib/data';
import { TrashBin } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { useEffect, useState } from "react";
import EditPet from "./EditPet";
import Image from "next/image";
import { TbCurrencyTaka } from "react-icons/tb";
import Link from "next/link";
import AdoptionRequestClient from "./AdoptionRequestClient";
import { FaLeaf } from "react-icons/fa";
import { CircleLoader } from "react-spinners";
import DeletePet from "./DeletePet";


const myListingClient = ({deletePet}) => {

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
       <>
        {
            loading ? (<div className="flex flex-col items-center justify-center gap-2 min-h-screen">
                                <CircleLoader color="#00bd56" />
                            </div>):
            (<section className='min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                <div className="rounded-2xl border bg-white border-slate-200 shadow-sm dark:bg-slate-900/40 dark:border-slate-800/80 overflow-hidden">
                    <div className="p-5 border-b border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                        <div>
                            <h3 className="font-bold text-base text-slate-900 dark:text-white">My Pet Listings</h3>
                            <p className="text-xs text-slate-400 mt-0.5">A list of pets you have put up for adoption.</p>
                        </div>
                    </div>
                </div>

                <div className="my-5 p-5 rounded-2xl border border-slate-200 bg-white shadow-sm dark:bg-slate-900/40 dark:border-slate-800/80 overflow-hidden">

                {
                    myPets.length === 0 ? (<div className="h-[60vh] flex items-center justify-center">
                        <h2 className="text-4xl font-bold">You did not add any pets.</h2>


                    </div>):(<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {
                            myPets.map(pet => (
                                <div
                                    key={pet._id}
                                    className="p-4 bg-white dark:border dark:bg-slate-900/90 dark:border-slate-800/80 hover:-translate-y-1 transition duration-300 rounded-lg shadow-sm"
                                >
                                    {/* Image Container */}
                                    <div className='relative w-full aspect-square'>
                                        <Image
                                            src={pet.imageUrl}
                                            alt={pet.petName}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover rounded-md"
                                        />
                                    </div>

                                    {/* pet name and free */}
                                    <div className="text-gray-900 dark:text-white text-xl font-semibold px-1 mt-4 flex items-center justify-between">
                                        <span>{pet.petName}</span>
                                        <div className='flex items-center text-lg font-bold text-green-500 '>
                                            <TbCurrencyTaka className="text-xl" />
                                            <span>{pet.adoptionFee}</span>
                                        </div>
                                    </div>

                                    {/* Subtitle */}
                                    <p className="text-gray-500 dark:text-zinc-400 text-sm mt-1 px-1">
                                        {pet.breed} - {pet.age} old - {pet.gender}
                                    </p>

                                    {/* Button */}
                                    <div className="mt-6 grid grid-cols-2 gap-3 items-center">
                                        
                                        <div className="flex flex-col gap-2.5">
                                            <Link
                                                href={`/all-pets/${pet._id}`}
                                                className="w-full rounded-full py-2 bg-transparent border border-slate-300 dark:border-slate-700 font-semibold text-gray-900 dark:text-gray-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-sm text-center cursor-pointer block"
                                            >
                                                Details
                                            </Link>

                                            <AdoptionRequestClient pet={pet} />
                                        </div>

                                        
                                        <div className=" flex flex-col gap-2.5">
                                           
                                            <EditPet pet={pet} user={user} />

                                           <DeletePet pet={pet} deletePet={deletePet}/>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>)
                }

                    
                </div>
            </div>
        </section>)
        }
       </>
    );
};

export default myListingClient;