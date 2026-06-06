import React from 'react';
import PetCard from '@/components/PetCard';
import 'animate.css';
import { getPets } from '@/lib/data';

export const metadata = {
  title: 'All Pets - For Pet Adoption',
  description: 'Discover a wide variety of adorable pets waiting for their forever homes. Browse through our collection of cats, dogs, rabbits, and more, all looking for loving families to adopt them. Find your new furry friend today and give them the loving home they deserve!',
}

const AllPetsPage = async () => {
    const pets = await getPets();
    
    return (
        <div>
            <h1 className='container mx-auto text-3xl font-bold my-6'>All Pets</h1>
          <div className='bg-gray-50 dark:bg-slate-900 py-8'>
            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate__animated animate__fadeInUp'>
            {
                pets.map(pet => <PetCard key= {pet._id} pet={pet} />)
            }
          </div>
          </div>
        </div>
    );
};

export default AllPetsPage;