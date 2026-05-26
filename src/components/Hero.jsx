import { ArrowRight, Heart } from '@gravity-ui/icons';
import React from 'react';
import 'animate.css';
import Link from 'next/link';


const Hero = () => {
    return (
        <div className="relative min-h-[85vh] bg-linear-to-br from-amber-50 via-orange-50 to-emerald-50 dark:from-slate-930 dark:via-slate-900 dark:to-slate-930 flex items-center overflow-hidden transition-colors duration-300">
      
      <div className="absolute top-12 -left-20 w-72 h-72 bg-orange-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 text-center lg:text-left z-10 animate__fadeInLeft animate__animated animate__slower">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
              <Heart size={16} className="fill-orange-600 stroke-orange-600 animate-pulse" />
              Give Them a Forever Home
            </div>

           
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 dark:text-white leading-tight">
              Find Your Perfect <br />
              <span className="bg-linear-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                Furry Friend
              </span> Today
            </h1>

            
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Hundreds of helpless and sweet animals are waiting for your love. Instead of buying from a store, adopt an animal and bring unlimited joy and a loyal friend to your family.
            </p>

            
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="/dashboard/adopt" className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-orange-200 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer">
                Adopt Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
            </div>
          </div>

   
          <div className="relative flex justify-center items-center animate__fadeInRight animate__animated animate__slower">
        
            <div className="absolute inset-0 bg-linear-to-tr from-orange-400 to-amber-300 rounded-3xl transform rotate-3 scale-102 opacity-20" />
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-[500px] lg:max-w-full">
          
              <img 
                src="https://i.ibb.co.com/Vpjxh1g0/447890.jpg" 
                alt="Cute dogs waiting for adoption" 
                className="w-full h-[350px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-500"
              />
              
            
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center gap-3 border border-white/20">
                <div className="bg-emerald-500 w-3 h-3 rounded-full animate-ping" />
                <p className="text-xs sm:text-sm font-bold text-slate-800">
                  🐾 More than 50+ pets ready to meet you!
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    );
};

export default Hero;