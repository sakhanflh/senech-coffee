import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";

export function Carousell() {
    const items = [
        { color: "bg-yellow-500", title: "Buy 2 Get 1 Free, for Mizara Iced Coffee" },
        { color: "bg-red-500", title: "Free Cookie for Every Latte Purchase" },
        { color: "bg-blue-500", title: "Discount 20% for Espresso Shot" },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    useEffect(() => {
        // ✅ Force swiper re-init setelah mount
        const timer = setTimeout(() => {
            if (swiperRef.current) {
                swiperRef.current.slideToLoop(1, 0); // langsung ke slide tengah (indeks 1)
            }
        }, 100); // kasih delay kecil biar clone-nya sudah siap

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full">
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={10}
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                className="!px-10 custom-swiper"
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {items.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className={`w-[80%] rounded-xl p-4 flex flex-col justify-between shadow-lg transition-all duration-300 ${activeIndex === index
                                ? "scale-100 z-20 translate-y-0"
                                : "scale-90 opacity-80 translate-y-2"
                            } ${item.color}`}
                    >
                        <p className="text-sm font-semibold text-white">#PromoToday</p>
                        <p className="text-lg font-bold text-white mt-2">{item.title}</p>
                        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg">
                            Buy Coffee
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
