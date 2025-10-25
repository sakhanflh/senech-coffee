import { useNavigate } from "react-router-dom";

export function MenuCard({ name, price, image, slug }) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/menu/${slug}`)
    }
    
    return (
        <div 
        className="p-3"
        onClick={handleClick}
        >
            <div className="h-28 bg-gray-100 rounded-lg mb-2 overflow-hidden">
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-lg"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                )}
            </div>
            <p className="font-semibold text-gray-800 line-clamp-1">{name}</p>
            <p className="text-sm text-gray-500">Rp {price.toLocaleString()}</p>
        </div>
    );
}
