import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MenuCard } from "./MenuCard";

export function MenuSection({ category, data, sectionRef }) {
    return (
        <section
            data-category={category}
            ref={sectionRef}
            className="scroll-mt-24"
        >
            <h2 className="text-xl font-semibold mb-4 text-gray-800">{category}</h2>

            {category === "Promo & Combo" ? (
                <div className="overflow-hidden">
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={1.3}
                        breakpoints={{
                            640: { slidesPerView: 2.2 },
                            1024: { slidesPerView: 3.5 },
                        }}
                        modules={[Pagination]}
                        className="!overflow-visible"
                    >
                        {data.map((item, i) => (
                            <SwiperSlide key={i}>
                                <MenuCard {...item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {data.map((item, i) => (
                        <MenuCard key={i} {...item} />
                    ))}
                </div>
            )}
        </section>
    );
}
