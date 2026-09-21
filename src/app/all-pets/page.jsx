import React from 'react';
import PetCard from '@/components/PetCard';
import 'animate.css';
import { getPets } from '@/lib/data';
import SearchBar from '@/components/SearchBar';
import Link from 'next/link';
import { IoPawOutline } from 'react-icons/io5';

export const metadata = {
    title: 'All Pets - Pet Adoption',
    description: 'Discover a wide variety of adorable pets waiting for their forever homes. Browse through our collection of cats, dogs, rabbits, and more, all looking for loving families to adopt them. Find your new furry friend today!',
};

const AllPetsPage = async ({ searchParams }) => {
    const sParams = await searchParams;
    const search = sParams?.search || "";
    const species = sParams?.species || sParams?.filter || "";

    const queryParams = {};
    if (search) queryParams.search = search;
    if (species) queryParams.species = species;

    const pets = await getPets(queryParams);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                        All Available Pets
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm sm:text-base">
                        Browse through our lovely pets looking for a loving home and find your new best friend.
                    </p>
                </div>

                <div className="pb-8">
                    <SearchBar />
                </div>

                {pets.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate__animated animate__fadeInUp">
                        {pets.map((pet) => (
                            <PetCard key={pet._id} pet={pet} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 mb-4">
                            <IoPawOutline className="text-3xl" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                            No pets found
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 max-w-md text-sm mb-6">
                            We couldn&apos;t find any pets matching your current search or filter criteria. Try searching with different keywords or clear the filters.
                        </p>
                        <Link
                            href="/all-pets"
                            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-full transition-colors shadow-sm"
                        >
                            View All Pets
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllPetsPage;