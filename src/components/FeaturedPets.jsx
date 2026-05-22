import React from 'react';
import PetCard from './PetCard';
import Link from 'next/link';
import 'animate.css';
import { getPets } from '@/lib/data';


const FeaturedPets = async () => {
     const allPets = await getPets();
     const pets  = allPets.slice(0, 8);
    return (
        <section className='bg-gray-50 dark:bg-slate-900 py-8'>
            <div className='container mx-auto mb-6'>
                <h2 className='text-2xl font-bold mb-4'>Featured Pets</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate__animated animate__fadeInUp'>
                    {
                        pets.map(pet => <PetCard key={pet._id} pet={pet}  ></PetCard>)
                    }
                </div>

                <div>
                    <Link href="/all-pets" className='inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300'>View All Pets</Link>
                </div>
            </div>
            
        </section>
    );
};

export default FeaturedPets;