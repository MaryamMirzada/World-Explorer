export default function Footer() {
    return (
        <footer className="bg-black text-white mt-10 px-20 py-16">
            <div className="flex flex-col md:flex-row justify-between gap-12">
                <div>
                    <h3 className="text-xl font-semibold mb-5">
                        Quick Links
                    </h3>

                    <ul className="space-y-3 text-gray-300">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">Countries</li>
                        <li className="hover:text-white cursor-pointer">About</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>


                <div>
                    <h2 className="text-2xl font-bold mb-4">
                        Country Explorer
                    </h2>

                    <p className="max-w-md text-gray-300 leading-7">
                        Country Explorer is a simple tool to explore countries around
                        the world and learn key facts like location, population,
                        language, and culture in an easy and interactive way.
                    </p>

                    <div className="mt-6 flex">
                        <input
                            type="email"
                            placeholder="Newsletter"
                            className="w-80 h-14 px-4 rounded-l-lg text-white border border-gray-600 bg-transparent outline-none"
                        />
                        <button className="bg-[#dc233f] px-8 rounded-r-lg font-medium hover:bg-red-700 transition">
                            Submit
                        </button>
                    </div>
                </div>



            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
                © 2026 Country Explorer. All rights reserved.
            </div>
        </footer>
    );
}