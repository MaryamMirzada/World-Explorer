export default function DetailSection() {
    return (
        <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <div className="text-center mb-12">
                  

                    <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                        World Explorer is a web application built with Next.js and React
                        that allows users to discover countries around the world through a
                        simple and interactive experience.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-6 md:grid-cols-3">
                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                        <h3 className="text-xl font-semibold mb-3">🏠 Home Page</h3>

                        <p className="text-slate-600">
                            The home page introduces the project and showcases beautiful
                            images of famous places and landmarks from around the world.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                        <h3 className="text-xl font-semibold mb-3">🌍 Countries Page</h3>

                        <p className="text-slate-600">
                            Browse countries from different regions of the world and use the
                            search feature to quickly find any country.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                        <h3 className="text-xl font-semibold mb-3">📍 Details Page</h3>

                        <p className="text-slate-600">
                            Click on any country to view detailed information such as
                            population, languages, capital city, region, and more.
                        </p>
                    </div>
                </div>

                {/* Technologies */}
                <div className="mt-12 bg-slate-50 border rounded-xl p-6 text-center">
                    <h3 className="text-2xl font-semibold mb-4">
                        Technologies Used
                    </h3>

                    <div className="flex flex-wrap justify-center gap-3">
                        <span className="px-4 py-2 bg-white border rounded-full">
                            Next.js
                        </span>

                        <span className="px-4 py-2 bg-white border rounded-full">
                            React
                        </span>

                        <span className="px-4 py-2 bg-white border rounded-full">
                            Tailwind CSS
                        </span>

                        <span className="px-4 py-2 bg-white border rounded-full">
                            REST Countries API
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}