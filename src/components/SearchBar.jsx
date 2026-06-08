"use client"
import { getPetsBySpecies } from '@/lib/data';
import { Label, ListBox, Select } from '@heroui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const SearchBar = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [search, setSearch] = useState();
    
    const handelSearch = () => {
        const params = new URLSearchParams(searchParams.toString())
        if (search) {
            params.set("search", search)
        } else {
            params.delete("search")
        }
        router.push(`/all-pets?${params.toString()}`)
    }





    return (
        <div className='flex justify-between items-center'>
            {/* search */}
            <div className="flex items-center border pl-4 gap-2 bg-white dark:bg-slate-900 border-gray-300 dark:border-slate-800 h-[48px] rounded-full overflow-hidden max-w-md w-full shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#6B7280">
                    <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
                </svg>
                <input value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search pets, breed or location..."
                    className="w-full h-full bg-transparent outline-none text-sm text-white placeholder-slate-400 dark:placeholder-slate-500 px-1" />
                <button onClick={handelSearch}
                    className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 w-28 h-[38px] rounded-full text-sm font-semibold text-white mr-[5px] transition-colors duration-200 cursor-pointer shrink-0">Search</button>
            </div>

            {/* Filter */}

            <Select className="w-[256px]"
                placeholder="Select one"
            >
                <Label>Filter Pet</Label>
                <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                    <ListBox>
                        <ListBox.Item id="dog" textValue="dog">
                            Dog
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="cat" textValue="cat">
                            Cat
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="bird" textValue="bird">
                            Bird
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="rabbit" textValue="rabbit">
                            Rabbit
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                    </ListBox>
                </Select.Popover>
            </Select>
        </div>
    );
};

export default SearchBar;