import { CiHeart } from "react-icons/ci";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";


export function SenechCoffeeBranchCard() {
    return (
        <div className="bg-white rounded-2xl w-52  overflow-hidden">
            <div className="w-full h-32 relative">
                <img src="src/assets/senech-coffee.png" alt="Senech Coffee" className="w-full h-full object-cover" />
                <div className="bg-black/20 inset-0 absolute"></div>
                <div className="absolute top-0 p-3 flex items-center justify-between w-full">
                    <span className="flex items-center bg-black/50 rounded gap-1 px-2 py-0.5">
                        <FaStar className="text-yellow-500 text-sm" />
                        <p className="font-semibold text-sm text-yellow-500">4.4</p>
                        <p className="text-white text-xs">(522)</p>
                    </span>
                    <CiHeart className="text-white text-2xl hover:text-red-500"/>
                </div>
            </div>
            <div className="px-3 py-2 space-y-1">
                <p className="font-semibold text-sm">Senech Coffee Sawangan</p>
                <span className="flex items-center gap-1">
                    <FaMapLocationDot className="text-green-900" />
                    <p className="text-xs text-gray-400">Sawangan, Depok</p>
                </span>
            </div>

        </div>
    )
}