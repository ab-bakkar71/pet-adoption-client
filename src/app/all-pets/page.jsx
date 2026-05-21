import React from 'react';
import { getPets } from '../lib/data';
import PetCard from '@/components/PetCard';

const AllPetsPage = async () => {
    const pets = await getPets();
    
    return (
        <div className='container mx-auto px-4 py-8'>
            <h1 className='text-3xl font-bold mb-6'>All Pets</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {
                pets.map(pet => <PetCard key= {pet._id} pet={pet} />)
            }
          </div>
        </div>
    );
};

export default AllPetsPage;