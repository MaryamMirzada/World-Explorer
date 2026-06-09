import { Globe, Users, Languages, Map } from "lucide-react";

export default function WorldStatistics() {
    const stats = [
        { id: 1, icon: Globe, number: "195+", title: "Countries" },
        { id: 2, icon: Users, number: "8B+", title: "Population" },
        { id: 3, icon: Languages, number: "7000+", title: "Languages" },
        { id: 4, icon: Map, number: "7", title: "Continents" },
    ];

    return (
        <section className="py-16 px-10 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-12">
                World Statistics
            </h2>

            <div className="flex justify-center gap-10 flex-wrap">
                {stats.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.id}
                            className="flex flex-col items-center bg-white px-8 py-6 rounded-xl shadow-sm hover:shadow-md transition"
                        >
                            <Icon className="text-[#dc233f] w-8 h-8 mb-3" />

                            <h3 className="text-2xl font-bold text-[#dc233f]">
                                {item.number}
                            </h3>

                            <p className="text-gray-600 mt-1">
                                {item.title}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}