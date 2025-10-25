import { useParams } from "react-router-dom"
import { menuData } from "../data/MenuData"

export function MenuDetailPage() {
    const { slug } = useParams()

    const menu = Object.values(menuData)
        .flat()
        .find((item) => item.slug === slug)

    if (!menu) return <div className="p-6 text-center text-gray-500">Menu tidak ditemukan</div>;


    return (
        <div className="">
            <div className="w-full h-60 relative">
                <img src={menu.image} alt={menu.name} className="w-full h-full object-cover" />
                <div className="bg-black/50 absolute inset-0"></div>
                <div className="absolute top-0 p-5 flex justify-between w-full items-center">
                    <p>Kembali</p>
                    <p>Share</p>
                </div>
            </div>
            <div className="px-5">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{menu.name}</h1>
                <p className="text-green-800 font-semibold mb-4">Rp {menu.price.toLocaleString()}</p>
                <p className="text-gray-700 leading-relaxed">{menu.description}</p>
            </div>
        </div>
    )
}