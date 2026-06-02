import Link from "next/link";

export default function Navbar (){
    return (
        <div className="flex justify-between mx-20 mt-10">
            <div>
                <h3 className="text-2xl font-bold text-[#dc233f]">
                    Explore Country
                </h3>
            </div>

            <div className="flex justify-between gap-[20px]">
                <nav className="flex gap-10 font-semibold">
                   <Link href='/'>Home</Link>
                    <Link href='/country'>Country</Link>
                    <Link href='/about'>About</Link>
                </nav>
            </div>
        </div>
    )
}