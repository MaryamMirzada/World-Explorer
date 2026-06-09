"use client"


import { useEffect, useState } from "react";
import CountriesList from "../components/country/CountriesList";
import CountryHeroPage from "../components/country/CountryHeroPage";
import { fetchCountries } from "../lib/api";
import SearchCountry from "../components/country/SearchCountry"
import Link from "next/link"
export default function Page() {
       const [search, setSearch] = useState("")
        const [countries, setCountries] = useState<any[]>([])
        const [loading, setLoading] = useState(true)
    
        useEffect(() => {
            const loadCountries = async () => {
                try {
                    const data = await fetchCountries()
                    setCountries(data)
                } catch (error) {
                    console.log(error)
                } finally {
                    setLoading(false)
                }
            }
    
            loadCountries()
        }, [])
    

    const filteredCountries = countries.filter((country) => {
        const name = country?.name?.common
        return name && name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div>

            <CountryHeroPage />
            <div className="p-4">

                {/* Search */}
                <SearchCountry search={search} setSearch={setSearch} />

                {/* Loading */}
                {loading && (
                    <p className="text-gray-500 mt-4">
                        Loading countries...
                    </p>
                )}

                {/* Countries */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">

                    {filteredCountries.map((country, index) => (
                        <Link
                            key={index}
                            href={`/country/${country.cca3}`}
                        >
                            <div className="border rounded-xl bg-white shadow-sm hover:shadow-md transition p-4 flex flex-col items-center text-center">

                                {/* Country Name - TOP */}
                                <h1 className="font-bold text-xl mb-3">
                                    {country?.name?.common}
                                </h1>

                                {/* Flag - CENTER */}
                                <img
                                    src={country?.flags?.png}
                                    className="w-24 h-16 object-cover rounded shadow"
                                />

                                {/* INFO - BOTTOM */}
                                <div className="mt-4 text-sm text-gray-600 space-y-1">

                                    <p>
                                        <span className="font-medium">Capital:</span>{" "}
                                        {country?.capital?.[0] || "N/A"}
                                    </p>

                                    <p>
                                        <span className="font-medium">Population:</span>{" "}
                                        {country?.population?.toLocaleString()}
                                    </p>

                                    <p>
                                        <span className="font-medium">Region:</span>{" "}
                                        {country?.region || "N/A"}
                                    </p>

                                </div>
                            </div>
                        </Link>
                    ))}

                </div>

            </div>
        </div>
   
    )
}