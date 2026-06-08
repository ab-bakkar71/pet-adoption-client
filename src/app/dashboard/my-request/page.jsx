
import MyAdoptionClient from '@/components/MyAdoptionClient';
import { adoptionCancel } from '@/lib/action';
import React from 'react';

const myRequestPage = async () => {

    return (
        <section className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <MyAdoptionClient adoptionCancelAction= {adoptionCancel}/>
            </div>
        </section>
    );
};

export default myRequestPage;