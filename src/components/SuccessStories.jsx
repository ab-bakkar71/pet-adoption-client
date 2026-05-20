import React from 'react';

const SuccessStories = () => {
 const Stories = [
  {
    ownerName: "The Miller Family",
    location: "Dhaka",
    quote: "After losing our senior dog, the silence in our home was heartbreaking. Everything changed when we adopted Max through this platform. He brought endless energy and joy back into our lives.",
    emoji: "🐕" 
  },
  {
    ownerName: "Sophia R.",
    location: "Chittagong",
    quote: "As a full-time remote software engineer, my days felt quite lonely. I found Bella—a gentle rescue cat. Now, she happily snoozes on my desk all day while I work. She is the perfect office buddy!",
    emoji: "🐈" 
  },
  {
    ownerName: "Liam K.",
    location: "Sylhet",
    quote: "I came looking to adopt one rabbit but found this bonded pair who couldn’t be separated. Taking them both home has doubled the happiness in my apartment. Watching them hop around together is pure joy.",
    emoji: "🐇" 
  },
  {
    ownerName: "The Rahman Family",
    location: "Khulna",
    quote: "Rocky was incredibly anxious and scared of strangers when we first met him at the shelter. With consistent love and patience, he completely transformed into a confident, loyal protector.",
    emoji: "🐾"
  }
];
    return (
        <section className='py-12 bg-gray-50 dark:bg-slate-900'>
           <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-extrabold text-center text-slate-800 dark:text-white mb-2'>Success Stories</h2>
            <p className='text-lg text-center text-slate-600 dark:text-slate-400 mb-12'>
                Real stories from our community of adopters who have found their perfect companions through our platform.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {
                    Stories.map((story, index) => (
                        <div key={index} className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md mb-6 hover:shadow-lg hover:scale-105 transition-all duration-300'>
                            <div className='flex items-center mb-4'>
                                <span className='text-4xl mr-4 bg-gray-200 dark:bg-slate-600 p-2 rounded-full'>{story.emoji}</span>
                                <div>
                                    <h3 className='text-xl font-bold text-slate-800 dark:text-white'>{story.ownerName}</h3>
                                    <p className='text-slate-600 dark:text-slate-400'>{story.location}</p>
                                </div>
                            </div>
                            <p className='text-slate-600 dark:text-slate-400 italic'>" {story.quote} "</p>
                        </div>
                    ))
                }
            </div>
            
           </div>
                    

        </section>
    );
};

export default SuccessStories;