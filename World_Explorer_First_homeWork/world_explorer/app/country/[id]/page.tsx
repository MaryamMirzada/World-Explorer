import { notFound } from "next/navigation";
import { fetchCountries } from "../../lib/api";

async function getCountry(id: string) {
  const data = await fetchCountries();

  return data.find(
    (c: any) => c.cca3?.toLowerCase() === id?.toLowerCase()
  );
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const country = await getCountry(id);

  if (!country) return notFound();

  return (
    <div className="mt-6 rounded-tl-lg rounded-tr-lg min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex justify-center">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* HEADER */}
        <div className="bg-black text-white p-6 flex flex-col md:flex-row items-center gap-6">
          <img
            src={country.flags?.png}
            alt={country.flags?.alt || country.name?.common}
            className="w-40 h-28 object-cover rounded-lg shadow-md border"
          />

          <div>
            <h1 className="text-3xl font-bold">
              {country.name?.common}
            </h1>

            <p className="text-sm opacity-90">
              {country.name?.official}
            </p>

            <span className="inline-block mt-2 text-xs bg-white text-indigo-600 px-3 py-1 rounded-full font-semibold">
              {country.cca3}
            </span>
          </div>
        </div>

        {/* BODY */}
        <div className="p-6 grid md:grid-cols-2 gap-6">

          {/* BASIC INFO */}
          <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">
              Basic Information
            </h2>

            <Info label="Capital" value={country.capital?.[0]} />
            <Info label="Region" value={country.region} />
            <Info label="Population" value={country.population?.toLocaleString()} />
          </div>

          {/* LANGUAGES */}
          <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">
              Languages
            </h2>

            <Info
              label="Spoken Languages"
              value={
                country.languages
                  ? Object.values(country.languages).join(", ")
                  : "N/A"
              }
            />
          </div>
        </div>

        {/* MAP SECTION */}
        <div className="p-6">
          <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">
              Geographic Location
            </h2>

            <div className="mb-4 space-y-2">
              <Info label="Region" value={country.region} />
              <Info label="Capital" value={country.capital?.[0]} />
              <Info label="Population" value={country.population?.toLocaleString()} />
              <Info label="Official Name" value={country.name?.official} />
            </div>

            {/* GOOGLE MAP */}
            <iframe
              className="w-full h-80 rounded-lg border"
              loading="lazy"
              src={`https://www.google.com/maps?q=${country.name?.common}&output=embed`}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

/* Reusable Info Component */
function Info({
  label,
  value,
}: {
  label: string;
  value: any;
}) {
  return (
    <div className="flex justify-between border-b py-2 text-sm">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium text-gray-800 text-right">
        {value || "N/A"}
      </span>
    </div>
  );
}