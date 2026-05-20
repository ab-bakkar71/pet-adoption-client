import React from 'react';

const Counter = () => {
    return (
        <section className="py-12 h-full ">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
                    <div className="text-center text-2xl font-bold text-slate-800 dark:text-white">
                        <h2>1000+</h2>
                        <p>Total Pets Adopted</p>
                    </div>

                    <div className="text-center text-2xl font-bold text-slate-800 dark:text-white">
                        <h2>500+</h2>
                        <p>Happy Families</p>
                    </div>
                    <div className="text-center text-2xl font-bold text-slate-800 dark:text-white">
                        <h2>200+</h2>
                        <p>Active Volunteers</p>
                    </div>
                    <div className="text-center text-2xl font-bold text-slate-800 dark:text-white">
                        <h2>50+</h2>
                        <p>Partner Shelters</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counter;