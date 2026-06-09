export const fetchCountries = async () => {
const API_URL =
    "https://restcountries.com/v3.1/all?fields=name,flags,population,languages,region,capital";

    const res = await fetch(API_URL)

    if (!res.ok) {
        throw new Error(`HTTP Error: ${res.status}`)
    }

    return await res.json()
}