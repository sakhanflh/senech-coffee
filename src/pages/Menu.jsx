import { useEffect, useRef, useState } from "react";
import { MenuFilterBar } from "../components/Menu/MenuFilterBar";
import { MenuSection } from "../components/Menu/MenuSection";
import { categories, menuData } from "../data/MenuData";

export function Menu() {
    const [active, setActive] = useState("Promo & Combo");
    const sectionRefs = useRef({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((e) => e.isIntersecting);
                if (visible) {
                    setActive(visible.target.dataset.category);
                }
            },
            { threshold: 0.4 }
        );

        Object.values(sectionRefs.current).forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const handleClick = (cat) => {
        sectionRefs.current[cat]?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="w-full">
            <MenuFilterBar categories={categories} active={active} onSelect={handleClick} />

            <div className="space-y-12 p-4 overflow-x-hidden">
                {categories.map((cat) => (
                    <MenuSection
                        key={cat}
                        category={cat}
                        data={menuData[cat]}
                        sectionRef={(el) => (sectionRefs.current[cat] = el)}
                    />
                ))}
            </div>
        </div>
    );
}
