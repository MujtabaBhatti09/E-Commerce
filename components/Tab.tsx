"use client"

import { useState } from "react";
import ProductCard from "./ProductCard";
import { ShoppingCart } from "lucide-react";

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

    const [tabItem, setTabItem] = useState<string>("")

    const handleTabItem = (tabValue: string) => {
        setTabItem(tabValue)
        console.log(tabValue)
    }

    // if (categories?.includes(tabItem)) {
    return (
        <div className="space-y-10">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-medium">
                    {title}
                </h2>
                <div className="flex items-center gap-x-2">
                    {categories?.map((cat, index) => (
                        <p
                            onClick={() => handleTabItem(cat)}
                            key={index}
                            className={`
                            p-1 text-sm cursor-pointer
                            hover:text-[var(--c-blue)]
                            font-medium
                            transition-colors duration-200 ease-in
                            ${categories?.includes(tabItem) ? "text-blue" : "text-gray-400"}
                            `}
                        >
                            {cat}
                        </p>
                    ))}
                </div>
            </div>
            <div className="flex h-full gap-x-4">
                {products?.map((prod, index) => (
                    <ProductCard
                        key={index}
                        image={prod.image}
                        hoverImage={prod.hoverImage}
                        alt={`${index}`}
                        title={prod.title}
                        brand={prod.brand}
                        oldPrice={prod.oldPrice}
                        price={prod.price}
                        discount={prod.discount}
                        icon={<ShoppingCart className="text-blue" />}
                        btnText="Add To Cart"
                    />
                ))}
            </div>
        </div>
    )
    // }
}