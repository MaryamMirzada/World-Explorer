import World from '../../../public/image/translation-service.jpg'

export default function HeroSection() {
    return (
        <div
            className="relative  mt-5 h-[500px] bg-cover bg-center rounded-xl overflow-hidden"
            style={{
                backgroundImage: `url(${World.src})`
            }}
        >
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="relative z-10 text-white p-10 pt-20 pl-20">
                <header>
                    <div className="border-2 border-white bg-white/10 w-fit uppercase px-6 py-2 rounded-full">
                        <h3>
                            Show countries with all details
                        </h3>
                    </div>

                    <h1 className="text-5xl font-extrabold mt-10 uppercase">
                        Country
                        <span className="text-[#dc233f]"> Explorer</span>
                    </h1>

                    <p className="max-w-2xl mt-4 text-xl">
                        A simple tool to explore countries around the world and learn key facts like location, population, language, and culture.
                    </p>
                </header>

                <button className="mt-8 bg-[#dc233f] px-14 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
                    Countries
                </button>
            </div>
        </div>
    )
}