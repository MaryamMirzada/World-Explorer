import { notFound } from "next/navigation";
import { fetchCountries } from "../../lib/api";

async function getCountry(id: string) {
  const data = await fetchCountries();

  const country = data.find((c: any) => c.cca3 === id);

  return country || null;
}

export default async function CountryPage({
  params,
}: {
  params: { id: string };
}) {
  const country = await getCountry(params.id);

  if (!country) return notFound();

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Flag */}
        <img
          src={country.flags?.png}
          alt={country.name?.common}
          className="w-full h-72 object-cover"
        />

        <div className="p-6 space-y-5">

          {/* Name */}
          <div>
            <h1 className="text-3xl font-bold">
              {country.name?.common}
            </h1>

            <p className="text-gray-500">
              {country.name?.official}
            </p>
          </div>

          {/* Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">

            <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Sub Region:</strong> {country.subregion || "N/A"}</p>
            <p><strong>Population:</strong> {country.population?.toLocaleString()}</p>

            <p>
              <strong>Languages:</strong>{" "}
              {country.languages
                ? Object.values(country.languages).join(", ")
                : "N/A"}
            </p>

            <p>
              <strong>Currencies:</strong>{" "}
              {country.currencies
                ? Object.values(country.currencies)
                  .map((c: any) => c.name)
                  .join(", ")
                : "N/A"}
            </p>

          </div>

          {/* Map */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Location
            </h2>

            <iframe
              src={country.maps?.googleMaps}
              className="w-full h-80 rounded-lg border"
            />
          </div>

          {/* Back Button */}
          <div className="pt-4">
            <a href="/country">
              <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                ← Back
              </button>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}