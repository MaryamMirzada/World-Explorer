import Image from "next/image";
import Bamyan from "../../../public/image/BotBamyan.jpg";
import TajMahal from "../../../public/image/Taj.Mahal.jpg";
import BorjEfal from "../../../public/image/BorjEfal.jpg";

export default function HistorycalPlaces() {
    const images = [
        {
            id: 1,
            img: Bamyan,
            title: "Bamyan Buddhas",
            desc: "Ancient cultural heritage located in Afghanistan."
        },
        {
            id: 2,
            img: TajMahal,
            title: "Taj Mahal",
            desc: "One of the world's most beautiful monuments in India."
        },
        {
            id: 3,
            img: BorjEfal,
            title: "Eiffel Tower",
            desc: "The iconic symbol of Paris and France."
        },
    ];

    return (
        <div className="bg-white text-black px-18 pb-10">
            <h1 className="text-4xl pt-10 font-extrabold text-[#dc233f] uppercase text-center">
                Discover the World’s Most Famous Places
            </h1>

            <p className="text-2xl text-center">
                Explore famous landmarks and historic places around the world.
            </p>

            <div className="flex gap-6 mt-8">
                {images.map((item) => (
                    <div
                        key={item.id}
                        className="relative overflow-hidden rounded-2xl group cursor-pointer transition-all duration-500 hover:rotate-2"
                    >
                        <Image
                            src={item.img}
                            alt={item.title}
                            className="h-[500px] w-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center p-6">
                            <h2 className="text-white text-3xl font-bold mb-3">
                                {item.title}
                            </h2>

                            <p className="text-gray-200">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}