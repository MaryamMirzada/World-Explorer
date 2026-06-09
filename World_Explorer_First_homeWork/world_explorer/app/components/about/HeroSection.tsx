"use client";

export default function HeroSection() {
    return (
        <section className="py-20 mt-5 bg-slate-50">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <span className="text-red-600 font-medium">
                    About World Explorer
                </span>

                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
                    Explore the World with Ease
                </h1>

                <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
                    World Explorer helps you discover countries, learn about their
                    population, languages, and explore interesting facts from around
                    the globe.
                </p>
            </div>
        </section>
    );
}