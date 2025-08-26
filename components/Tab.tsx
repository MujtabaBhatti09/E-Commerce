"use client"

import { useState } from "react";
import ProductCard from "./ProductCard";
import { ShoppingCart } from "lucide-react";
import { SwiperSlide } from "swiper/react";
import Slider from "./Slider";
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
            <div className="flex">
            <Slider
                type="slider"
                slidesLg={4}
                slidesMd={4}
                showCarouselBtn
                data={<SliderComponent products={products} tabItem={tabItem} />}
            />
            </div>
        </div>
    )
}
interface SliderProps {
    products: any;
    tabItem?: string;
}

const SliderComponent = ({ products, tabItem }: SliderProps) => (
    products?.map((prod: any, index: number) => {
        if (tabItem === "Show All" || tabItem === prod.category) {
            return (
                <SwiperSlide className="w-50" key={index}>
                    <ProductCard
                        {...prod}
                        btnText="Add To Cart"
                        image={productImages[index]}
                        icon={<ShoppingCart className="text-blue" />}
                    />
                </SwiperSlide>
            );
        }
        return null;
    })
)