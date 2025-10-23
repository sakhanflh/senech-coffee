import { CiHeart } from "react-icons/ci";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { CoffeeData } from "../../data/CoffeeData";


export function CoffeeSectionCard() {
    return (
        <div className="flex flex-wrap justify-between space-y-3 mt-3">
            {CoffeeData.map((c, i) => (
                <div key={i.id} className="w-[48%]">
                    <div className="w-full h-32 relative rounded-lg overflow-hidden">
                        <img src={c.image} alt="Senech Coffee" className="w-full h-full object-cover" />
                        <div className="bg-black/20 inset-0 absolute"></div>
                        <div className="absolute top-0 p-3 flex items-center justify-between w-full">
                            <span className="flex items-center bg-black/50 rounded gap-1 px-2 py-0.5">
                                <FaStar className="text-yellow-500 text-sm" />
                                <p className="font-semibold text-sm text-yellow-500">{c.rating}</p>
                            </span>
                            <CiHeart className="text-white text-2xl hover:text-red-500" />
                        </div>
                    </div>
                    <div className="px-3 py-2 space-y-1">
                        <p className="font-semibold text-sm">{c.name}</p>
                        <span className="flex items-center gap-1">
                            <p className="text-xs text-gray-400">
                                Rp. {c.price.toLocaleString("id-ID")}
                            </p>
                        </span>
                    </div>
                </div>
            ))}

        </div>
    )
}