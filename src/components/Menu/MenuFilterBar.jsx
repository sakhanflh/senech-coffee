export function MenuFilterBar({ categories, active, onSelect }) {
    return (
        <div className="sticky top-0 z-50 bg-white border-b">
            <div className="overflow-x-auto no-scrollbar">
                <div className="flex gap-4 p-3 min-w-max">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => onSelect(cat)}
                            className={`whitespace-nowrap font-medium transition-colors ${active === cat ? "text-green-900" : "text-gray-500"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
