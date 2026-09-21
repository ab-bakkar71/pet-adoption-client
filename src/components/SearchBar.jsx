"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { IoSearchOutline, IoCloseCircleOutline } from 'react-icons/io5';

const SearchBar = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const currentSearch = searchParams.get("search") || "";
    const currentSpecies = searchParams.get("species") || searchParams.get("filter") || "";

    const [search, setSearch] = useState(currentSearch);
    const [filter, setFilter] = useState(currentSpecies);

    const executeSearch = (searchTerm, speciesFilter) => {
        const params = new URLSearchParams();
        if (searchTerm && searchTerm.trim() !== "") {
            params.set("search", searchTerm.trim());
        }
        if (speciesFilter && speciesFilter !== "all" && speciesFilter !== "") {
            params.set("species", speciesFilter);
        }

        const queryString = params.toString();
        router.push(queryString ? `/all-pets?${queryString}` : '/all-pets');
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        executeSearch(search, filter);
    };

    const handleFilterChange = (e) => {
        const newFilter = e.target.value;
        setFilter(newFilter);
        executeSearch(search, newFilter);
    };

    const handleClear = () => {
        setSearch("");
        setFilter("");
        router.push('/all-pets');
    };

    const hasActiveFilters = Boolean(currentSearch || currentSpecies);

    return (
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 bg-white dark:bg-slate-800/80 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            {/* Search Input Form */}
            <form onSubmit={handleSearchSubmit} className="flex-1 flex items-center">
                <div className="flex items-center border pl-4 pr-1 gap-2 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 h-[48px] rounded-full overflow-hidden w-full max-w-xl shadow-inner focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500 transition-all">
                    <IoSearchOutline className="text-slate-400 text-xl shrink-0" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        placeholder="Search pets by name, breed, or location..."
                        className="w-full h-full bg-transparent outline-none text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 px-1"
                    />
                    {search && (
                        <button
                            type="button"
                            onClick={() => {
                                setSearch("");
                                executeSearch("", filter);
                            }}
                            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 mr-1 cursor-pointer transition-colors"
                            aria-label="Clear search"
                        >
                            <IoCloseCircleOutline className="text-lg" />
                        </button>
                    )}
                    <button
                        type="submit"
                        className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 px-6 h-[38px] rounded-full text-sm font-semibold text-white transition-colors duration-200 cursor-pointer shrink-0 shadow-sm"
                    >
                        Search
                    </button>
                </div>
            </form>

            {/* Filter Dropdown & Reset */}
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                    <label htmlFor="pet-filter" className="text-sm font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap">
                        Species:
                    </label>
                    <select
                        value={filter || ""}
                        onChange={handleFilterChange}
                        id="pet-filter"
                        className="h-[44px] min-w-[160px] px-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer transition-all"
                    >
                        <option value="">All Species</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="bird">Bird</option>
                        <option value="rabbit">Rabbit</option>
                    </select>
                </div>

                {hasActiveFilters && (
                    <button
                        onClick={handleClear}
                        className="h-[44px] px-3.5 text-xs font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/30 hover:bg-rose-100 dark:hover:bg-rose-900/40 rounded-xl border border-rose-200 dark:border-rose-900/50 transition-colors cursor-pointer whitespace-nowrap"
                    >
                        Reset
                    </button>
                )}
            </div>
        </div>
    );
};

export default SearchBar;