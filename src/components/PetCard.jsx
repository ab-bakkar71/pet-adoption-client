import { Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiSolidLocationPlus } from 'react-icons/bi';
import { TbCurrencyTaka } from 'react-icons/tb';
import 'animate.css';

const PetCard = ({ pet }) => {
  const { petName, age, breed, location, gender, imageUrl, adoptionFee, _id} = pet;
  return (
    <Card className='dark:bg-slate-800 rounded-md ' variant="secondary">
      <div className='relative w-full aspect-square'>
        <Image
          src={imageUrl}
          alt={petName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-md">

        </Image>
      </div>
      <Card.Header>
        <Card.Title className='text-2xl'>{petName}</Card.Title>
        <div className='flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-2'>
          <p>{breed}</p>
          <span className="text-xl font-bold leading-none text-gray-300 dark:text-gray-400 select-none">•</span>
          <p>{age} old</p>
          <span className="text-xl font-bold leading-none text-gray-300 dark:text-gray-400 select-none">•</span>
          <p>{gender}</p>
        </div>
      </Card.Header>
      <Card.Content>
        <div className='flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mt-2'>
          <BiSolidLocationPlus className='inline text-gray-500 dark:text-gray-400' size={18} />
          <span className='text-sm text-gray-500 dark:text-gray-400 ml-1'>{location}</span>
        </div>
        <div className='flex items-center text-lg font-semibold text-gray-800 dark:text-gray-200'>
          <TbCurrencyTaka />
          <span>{adoptionFee}</span> 
            <span className='text-sm text-gray-500 dark:text-gray-400 ml-1'>Adoption Fee</span> 
        </div>
      </Card.Content>

      <Card.Footer className='flex justify-between gap-2'>
        <Link href={`/pets/${_id}`} className='px-4 py-2 bg-transparent border border-gray-300 font-medium text-black dark:text-white rounded-md hover:bg-gray-300 hover:dark:bg-gray-600 hover:scale-105 transition'>View Details</Link>
        <Link href='#' className='px-4 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600  hover:scale-105 transition'>Adopt Me</Link>
      </Card.Footer>
    </Card>
  );
};

export default PetCard;