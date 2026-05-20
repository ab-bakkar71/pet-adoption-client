import { Heart, ShieldCheck, Sparkles } from '@gravity-ui/icons';
import React from 'react';
import { LuShieldAlert } from 'react-icons/lu';

const WhyAdopt = () => {
    const reasons = [
    {
      icon: <Heart className="text-orange-500" size={28} />,
      title: "Save a Precious Life",
      description: "Thousands of innocent animals in shelters wait for a second chance. By adopting, you are directly giving a homeless pet the loving family they deserve."
    },
    {
      icon: <Sparkles className="text-amber-500" size={28} />,
      title: "Unconditional Love",
      description: "Pets offer a deep connection and loyalty without any conditions. Bringing a rescue pet into your home reduces loneliness and fills your life with pure joy."
    },
    {
      icon: <ShieldCheck className="text-emerald-500" size={28} />,
      title: "Healthy & Vaccinated",
      description: "Most of the pets available on our platform are fully checked by veterinarians and vaccinated, ensuring a safe and smooth transition into your home."
    },
    {
      icon: <LuShieldAlert className="text-indigo-500" size={28} />,
      title: "Fight Puppy Mills",
      description: "Choosing to adopt instead of buying from a commercial breeder helps shut down cruel puppy mills that prioritize profit over animal welfare."
    }
  ];
    return (
        
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-extrabold text-center text-slate-800 dark:text-white mb-2">Why Adopt?</h2>
                    <p className="text-lg text-center text-slate-600 dark:text-slate-400 mb-12">
                        Adopting a pet is a rewarding experience that benefits both you and the animal. <br /> Here are some compelling reasons to consider adoption:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {reasons.map((reason, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300">
                                <div className="mb-4 flex justify-center">
                                    {reason.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">{reason.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        
    );
};

export default WhyAdopt;