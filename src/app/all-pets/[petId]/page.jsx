import AdoptMeButton from "@/components/AdoptMeButton";
import { auth } from "@/lib/auth";
import { getPetById } from "@/lib/data";
import { Check, HeartPulse } from "@gravity-ui/icons";
import { Chip } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import { BiSolidLocationPlus } from "react-icons/bi";
import { FaCalendarAlt, FaSyringe } from "react-icons/fa";
import { PiGenderTransgenderFill, PiPawPrintFill } from "react-icons/pi";
import { TbCurrencyTaka, TbDna2 } from "react-icons/tb";

export const generateMetadata = async ({ params }) => {
    const { petId } = await params;
    const {token} = await auth.api.getToken({

        headers: await headers()
    });
    const pet = await getPetById(petId, token);

    return {
        title: `${pet.petName} - For Pet Adoption`,
        description: `Learn more about ${pet.petName}, a ${pet.breed} looking for a loving home.`
    };
}



const PetIdPage = async ({ params }) => {
    const { petId } = await params;


    const {token} = await auth.api.getToken({

        headers: await headers()
    });


    const pet = await getPetById(petId, token);

    return (
        <section className="py-10 bg-gray-50 dark:bg-slate-900 ">
            <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 p-4 rounded-md relative">
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
                        <div className="flex items-center gap-1 mt-1 pt-1 border-t border-slate-100 dark:border-slate-800/60">
                            <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                                Adopted By:
                            </p>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{pet.ownerName || "Abu Bakkar"}</span>
                        </div>
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
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors
                  bg-emerald-50 text-emerald-700 border border-emerald-200 
                  dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20">
                        <HeartPulse size={14} className="stroke-[2.5]" />
                        <span>Health: {pet.healthStatus || "Healthy"}</span>
                    </div>

                    {/* Vaccination Status Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors
                  bg-blue-50 text-blue-700 border border-blue-200 
                  dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20">
                        <FaSyringe size={14} />
                        <span>{pet.vaccinationStatus || "Fully Vaccinated"}</span>
                    </div>

                </div>
                {/* description */}
                <div>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{pet.description}</p>
                </div>

                {/* status */}
                <div className=' absolute top-5 right-5'>
                        {
                                  pet.status === "available" ? (
                                    <Chip color="success" size="xs" className='font-bold uppercase tracking-wide bg-green-500/50 text-white'>
                                      <Check width={12} />
                                      <Chip.Label>{pet.status}</Chip.Label>
                                    </Chip>
                                  ) : (<Chip size="xs" className='font-bold uppercase tracking-wide bg-gray-500/50 text-white'>
                                      <Check width={12} />
                                      <Chip.Label>{pet.status}</Chip.Label>
                                    </Chip>)
                                }
                      </div>

                {/* cta */}
                <div className="w-full mt-7">
                    <AdoptMeButton pet={pet} />
                </div>
            </div>
        </section>
    );
};

export default PetIdPage;