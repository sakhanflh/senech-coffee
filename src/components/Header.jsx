import { IoIosNotificationsOutline } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export function Header() {
    const logo = "public/img/senechcoffee-logo-removebg-preview.png"
    return (
        <header className=" w-full py-2 px-[5%] text-black flex items-center justify-between">
            <div className="w-16">
                <img src={logo} alt="Logo" />
            </div>
            <div className="justify-center flex flex-col items-center">
                <p className="text-xs">Hai, Selamat Sore</p>
                <div className="flex items-center gap-0.5 text-sm font-semibold">
                    <span><FaLocationDot /></span>
                    <p>Senech Coffee Depok</p>
                </div>
            </div>
            <span className="p-2 rounded-full shadow relative">
                <IoIosNotificationsOutline className="text-2xl" />
                <div className="w-[5px] h-[5px] bg-red-500 rounded-full absolute top-[11px] left-4"></div>
            </span>
        </header>
    )
}