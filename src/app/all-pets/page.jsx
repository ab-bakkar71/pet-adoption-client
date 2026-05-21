import React from 'react';
import { getPets } from '../lib/data';
import PetCard from '@/components/PetCard';

const AllPetsPage = async () => {
    const pets = await getPets();
    
    return (
        <div>
            <h1 className='container mx-auto text-3xl font-bold my-6'>All Pets</h1>
          <div className='bg-gray-50 dark:bg-slate-900 py-8'>
            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {
                pets.map(pet => <PetCard key= {pet._id} pet={pet} />)
            }
          </div>
          </div>
        </div>
    );
};

export default AllPetsPage;