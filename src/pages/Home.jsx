import { FaCirclePlus } from "react-icons/fa6";
import { BsCoin } from "react-icons/bs";
import { Carousell } from "../components/Carousell";
import { SenechCoffeeBranchCard } from "../components/Home/SenechCoffeeBranchCard";
import { CoffeeSectionCard } from "../components/Home/CoffeeSectionCard";

export function Home() {
    return (
        <main className="mt-5 px-[5%]">
            <div className="flex justify-between gap-2">
                <div className="w-2/3 justify-between flex items-center px-4 py-2 rounded-2xl bg-gray-100 border border-gray-200">
                    <span className="space-y-1">
                        <p>Your Balance</p>
                        <p className="font-semibold text-lg">Rp. 213.000</p>
                    </span>
                    <button className="text-4xl"><FaCirclePlus className="text-green-900" /></button>
                </div>
                <div className="1/3 items-center bg-green-900 text-white flex flex-col px-4 py-2 rounded-2xl">
                    <BsCoin className="text-yellow-600 text-2xl" />
                    <p>You Have</p>
                    <p className="text-yellow-600 font-semibold">536 Point</p>
                </div>
            </div>

            <div className="w-full mt-5">
                <Carousell />
            </div>

            <section className="mt-">
                <span className="flex items-center justify-between">
                    <p className="font-semibold text-lg">Senech Coffee Nearby</p>
                    <button className="text-green-900 hover:text-green-950 hover:underline transition-all duration-300">
                        See All
                    </button>
                </span>

                {/* Scrollable area */}
                <div className="mt-3 flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="snap-start shrink-0">
                            <SenechCoffeeBranchCard />
                        </div>
                    ))}
                </div>
            </section>
            <section className="mt-10">
                <span className="flex items-center justify-between">
                    <p className="font-semibold text-lg">Coffee For Today</p>
                    <button className="text-green-900 hover:text-green-950 hover:underline transition-all duration-300">
                        See All
                    </button>
                </span>
                <div>
                    <CoffeeSectionCard />
                </div>
            </section>
        </main>
    )
}