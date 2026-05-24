import { getPetById } from "@/lib/data";
import { HeartPulse } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Image from "next/image";
import { BiSolidLocationPlus } from "react-icons/bi";
import { FaCalendarAlt, FaSyringe } from "react-icons/fa";
import { PiGenderTransgenderFill, PiPawPrintFill } from "react-icons/pi";
import { TbCurrencyTaka, TbDna2 } from "react-icons/tb";



const PetIdPage = async ({ params }) => {
    const { petId } = await params;
    const pet = await getPetById(petId);

    return (
        <section className="py-10 bg-gray-50 dark:bg-slate-900 ">
            <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 p-4 rounded-md">
                <div className='relative w-full '>
                    <Image
                        src={pet.imageUrl}
                        alt={pet.petName}
                        height={500}
                        width={750}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover mx-auto rounded-sm">

                    </Image>
                </div>

                <div className="flex justify-between items-center my-7">
                    {/* pet name and location */}
                    <div>
                        <h1 className="text-5xl font-bold ">{pet.petName}</h1>
                        <div className='flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mt-2'>
                            <BiSolidLocationPlus className='inline text-gray-500 dark:text-gray-400' size={18} />
                            <span className='text-sm text-gray-500 dark:text-gray-400 ml-1'>{pet.location}</span>
                        </div>
                    </div>
                    <div>
                        {/* adoptionFee*/}
                        <div className='flex items-center text-xl font-semibold text-gray-800 dark:text-gray-200'>
                            <TbCurrencyTaka />
                            <span>{pet.adoptionFee}</span>
                            <span className='text-sm text-gray-500 dark:text-gray-400 ml-1'>Adoption Fee</span>
                        </div>
                        <h1></h1>
                    </div>
                </div>

                <div className="flex flex-wrap justify-between items-center gap-4 p-4 rounded-xl border transition-all duration-300 bg-slate-50 border-slate-200 text-slate-700 dark:bg-slate-950 dark:border-slate-800/80 dark:text-slate-300">
                    {/* age */}
                    <div className='flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mt-2'>
                        <FaCalendarAlt className='inline text-gray-500 dark:text-gray-400' size={18} />
                        <span className='text-sm text-gray-500 dark:text-gray-400 ml-1 uppercase'>{pet.age}</span>
                    </div>
                    {/* gender */}
                    <div className='flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mt-2'>
                        <PiGenderTransgenderFill className='inline text-gray-500 dark:text-gray-400' size={18} />
                        <span className='text-sm text-gray-500 dark:text-gray-400 ml-1 uppercase'>{pet.gender}</span>
                    </div>

                    {/* breed */}
                    <div className='flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mt-2'>
                        <TbDna2 className='inline text-gray-500 dark:text-gray-400' size={18} />
                        <span className='text-sm text-gray-500 dark:text-gray-400 ml-1 uppercase'>{pet.breed}</span>
                    </div>

                    {/* species */}
                    <div className='flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mt-2'>
                        <PiPawPrintFill className='inline text-gray-500 dark:text-gray-400' size={18} />
                        <span className='text-sm text-gray-500 dark:text-gray-400 ml-1 uppercase'>{pet.species}</span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-4 my-7">
                    {/* Health Status Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/50">
                        <HeartPulse size={14} className="stroke-[2.5]" />
                        <span>Health: {pet.healthStatus || "Healthy"}</span>
                    </div>

                    {/* Vaccination Status Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50">
                        <FaSyringe size={14} className="stroke-[2.5]" />
                        <span>{pet.vaccinationStatus || "Fully Vaccinated"}</span>
                    </div>
                </div>
                {/* description */}
                <div>
                    <p>{pet.description}</p>
                </div>

                {/* cta */}
               <div className="w-full mt-7">
                 <Button className='w-full bg-[#00bd56]'>Adopt Me</Button>
               </div>
            </div>
        </section>
    );
};

export default PetIdPage;