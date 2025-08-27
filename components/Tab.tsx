"use client"

import { useRef, useState } from "react";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { productImages } from "@/constants/slugProducts";

interface Props {
    title: string;
    categories?: any[];
    products?: any[];
}

export default function ProductTab({
    title,
    categories,
    products
}: Props) {
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);
    const [tabItem, setTabItem] = useState<string>("Show All")

    const handleTabItem = (tabValue: string) => {
        setTabItem(tabValue)
    }

    return (
        <div className="space-y-10">
            <div className="flex md:flex-row md:justify-between flex-col items-center">
                <h2 className="text-2xl font-medium">
                    {title}
                </h2>
                <div className="flex items-center gap-x-2">
                    <p
                        onClick={() => handleTabItem("Show All")}
                        className={`
                            p-1 text-sm cursor-pointer
                            hover:text-[var(--c-blue)]
                            font-medium capitalize
                            transition-colors duration-200 ease-in
                            ${tabItem == "Show All" ? "text-blue" : "text-gray-400"}
                            `}
                    >
                        Show All
                    </p>
                    {categories?.map((cat, index) => (
                        <p
                            onClick={() => handleTabItem(cat)}
                            key={index}
                            className={`
                            p-1 text-sm cursor-pointer
                            hover:text-[var(--c-blue)]
                            font-medium capitalize
                            transition-colors duration-200 ease-in
                            ${tabItem == cat ? "text-blue" : "text-gray-400"}
                            `}
                        >
                            {cat}
                        </p>
                    ))}
                </div>
            </div>
            <div className="carousel h-full w-full relative">
                <div ref={prevRef} className="text-black absolute left-0 top-1/2 z-50 cursor-pointer"><ChevronLeft size={40} /></div>
                <div ref={nextRef} className="text-black absolute right-0 top-1/2 z-50 cursor-pointer"><ChevronRight size={40} /></div>
                <Swiper
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        '@0.75': {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        '@1.00': {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        '@1.50': {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onInit={(swiper) => {
                        // Necessary because refs are null on first render
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        swiper.params.navigation.prevEl = prevRef.current;
                        // @ts-ignore
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {products?.map((prod: any, index: number) => {
                        if (tabItem === "Show All" || tabItem === prod.category) {
                            return (
                                <SwiperSlide className="" key={index}>
                                    <ProductCard
                                        {...prod}
                                        btnText="Add To Cart"
                                        image={prod.image}
                                        icon={<ShoppingCart className="text-blue group-hover:!text-white" />}
                                    />
                                </SwiperSlide>
                            );
                        }
                        return null;
                    })}
                </Swiper>
            </div>
        </div>
    )
}