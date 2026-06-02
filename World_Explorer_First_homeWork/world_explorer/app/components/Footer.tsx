export default function Footer() {
    return (
        <div className="bg-black mt-10 mx-18 pb-10">
            <div className="flex items-center">
                <p className="w-130">
                    Country Expolorer is a simple tool to explore countries around the world and learn key facts like
                    location, population, language, and culture in an easy and interactive way.
                </p>
            </div>
         
            <input type="email" placeholder="NewsLetter" className="w-94 h-14 border-1 mt-5 rounded-lg px-3"/>
            <input type="button" value='Submit' className="ml-1 bg-[#dc233f] h-14 border-1 rounded-lg px-10"/>
        </div>
    )

}