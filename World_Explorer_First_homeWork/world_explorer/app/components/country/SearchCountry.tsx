"use client"

import { useState } from "react"

export default function SearchCountry({search, setSearch}) {

    const continents = [
        "Asia",
        "Europe",
        "Africa",
        "North America",
        "South America",
        "Australia",
        "Antarctica"
    ]

    const colors = {
        Asia: "bg-red-100 text-red-700",
        Europe: "bg-blue-100 text-blue-700",
        Africa: "bg-green-100 text-green-700",
        "North America": "bg-yellow-100 text-yellow-700",
        "South America": "bg-purple-100 text-purple-700",
        Australia: "bg-pink-100 text-pink-700",
        Antarctica: "bg-gray-100 text-gray-700"
    }

    const filtered = continents.filter(c =>
        c.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="px-6 py-2 text-black h-20">

            <div className="flex items-center justify-between gap-6">

                {/* Left: Search */}
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search continents..."
                    className="
                        w-80
                        px-5 py-3
                        text-lg
                        border border-gray-300
                        rounded-xl
                        text-gray-700
                        placeholder-gray-400
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-500
                        shadow-sm
                    "
                />

                {/* Right: Continents */}
                <div className="flex gap-3 flex-nowrap overflow-x-auto">
                    {filtered.map((continent) => (
                        <div
                            key={continent}
                            className={`
                                flex-shrink-0
                                px-4 py-2
                                rounded-full
                                text-sm font-medium
                                whitespace-nowrap
                                shadow-sm
                                ${colors[continent]}
                            `}
                        >
                            {continent}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}