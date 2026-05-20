import React from 'react';

const PetCareTips = () => {

    const Tips = [
        {
            title: "Balanced Diet & Nutrition",
            description: "Always feed your pets high-quality food appropriate for their age, breed, and size. Ensure clean, fresh water is available 24/7, and strictly avoid toxic human foods like chocolate, onions, and grapes.",
            emoji: "🥣"
        },
        {
            title: "Regular Vet Check-ups",
            description: "Schedule routine veterinary visits at least once a year for health check-ups and strictly follow their vaccination calendar. Regular deworming and flea control are essential to keep them disease-free.",
            emoji: "🏥"
        },
        {
            title: "Daily Exercise & Playtime",
            description: "Dogs need daily walks and outdoor activities to burn energy, while cats love interactive toys and scratching posts. Mental stimulation through play keeps them happy and prevents destructive behavior.",
            emoji: "🎾"
        },
        {
            title: "Grooming & Hygiene",
            description: "Brush their fur regularly to reduce shedding and prevent matting. Bathe your dogs when needed, keep their nails trimmed smoothly, and don't forget to clean their ears and brush their teeth weekly.",
            emoji: "✂️"
        }
    ];

    return (
        <section className='py-12'>
            <div className='container mx-auto px-4'>
                <h2 className='text-3xl font-extrabold text-center text-slate-800 dark:text-white mb-2'>Pet Care Tips</h2>
                <p className='text-lg text-center text-slate-600 dark:text-slate-400 mb-12'>
                    Essential tips to ensure your adopted pet stays healthy, happy, and well-cared for in their new home.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {
                        Tips.map((tip, index) => (
                            <div key={index} className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md mb-6 hover:shadow-lg hover:scale-105 transition-all duration-300'>
                                <div className='flex items-center mb-4'>
                                    <span className='text-4xl mr-4'>{tip.emoji}</span>
                                    <h3 className='text-xl font-bold text-slate-800 dark:text-white'>{tip.title}</h3>
                                </div>
                                <p className='text-slate-600 dark:text-slate-400'>{tip.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
    );
};

export default PetCareTips;