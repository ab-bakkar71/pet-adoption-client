import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
       <div className="flex flex-col items-center justify-center min-h-[70vh] text-sm max-md:px-4 py-20duration-300">
      
      
      <h1 className="text-5xl md:text-6xl font-extrabold bg-linear-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent dark:from-white dark:via-slate-200 dark:to-slate-500">
        404 Not Found
      </h1>
      
      
      <div className="h-px w-80 rounded bg-linear-to-r from-slate-300 to-slate-100 dark:from-slate-700 dark:to-slate-900 my-5 md:my-7"></div>
      
      
      <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 max-w-lg text-center leading-relaxed">
        The page you are looking for does not exist or has been moved.
      </p>
      
      <Link 
        href="/" 
        className="group flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 px-8 py-3 rounded-full mt-10 font-semibold shadow-md active:scale-95 transition-all duration-300 cursor-pointer"
      >
        Back to Home
        <svg 
          className="group-hover:translate-x-0.5 transition-transform" 
          width="20" 
          height="20" 
          viewBox="0 0 22 22" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M4.583 11h12.833m0 0L11 4.584M17.416 11 11 17.417" 
            className="stroke-white dark:stroke-slate-900" // 👈 আইকনের কালার ও থিম এডজাস্টমেন্ট
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
    );
};

export default NotFound;