import Image from "next/image";
import BgDrone from "@/public/assets/home/drone/Drone.jpg"
import { ParamValue } from "next/dist/server/request/params";
import { Filter, ShoppingCart } from "lucide-react";
import { productCategories, products } from "@/constants";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";

interface Props {
    title?: string | ParamValue;
}

export default function Products({
    title = "Title"
}: Props) {
    const containers = [2, 3, 4, 5, 6];
    const [columns, setColumns] = useState<string>("1")

    const handleColumns = (column: number) => {
        console.log(column)
        setColumns(String(column))
    }

    return (
        <>
            <section className="space-y-10">
                {/* Banner */}
                <div className="relative 2xl:h-[30vh] h-[24vh]">
                    <Image
                        src={BgDrone}
                        alt="banner"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0
                    flex items-center justify-center
                    h-full w-full bg-black/60"
                    >
                        <p className={`text-xl font-medium text-white`}>{title}</p>
                    </div>
                </div>
                {/* Filter Products */}
                <div className="
                    2xl:container mx-auto container-fluid
                    2xl:px-0 px-4
                    grid grid-cols-[1fr_auto_1fr]"
                >
                    <div className="flex items-center gap-x-1 text-gray-400">
                        <Filter
                            size={15}
                        />
                        <p className="text-sm">Filter</p>
                    </div>
                    <div className="flex items-center justify-center gap-x-2">
                        <div
                            onClick={() => handleColumns(1)}
                            className={`
                        flex flex-col items-center
                        gap-y-0.5 border border-gray-400 h-8 w-9 p-0.5 cursor-pointer
                        `}
                        >
                            {Array.from({ length: 3 }).map((_, index) => (
                                <div key={index} className="w-full h-full bg-gray"></div>
                            ))}
                        </div>
                        {containers.map((barCount, containerIndex) => (
                            <div
                                onClick={() => handleColumns(barCount)}
                                key={containerIndex}
                                className="flex gap-x-1 border border-gray-400
                                h-8 p-0.5 cursor-pointer hover:border-gray-600
                                transition-colors"
                            >
                                {Array.from({ length: barCount }).map((_, barIndex) => (
                                    <div
                                        key={barIndex}
                                        className="h-full w-3 bg-gray"
                                    />
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="justify-self-end">
                        <select className="
                        border border-gray-400
                        rounded-full p-2
                        text-sm w-44
                        "
                        >
                            {productCategories.map((cat, index) => (
                                <option
                                    key={index}
                                    value={cat}
                                >
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                {/* Grid or Fles View of Products */}
                <div className={`
                2xl:container mx-auto container-fluid
                2xl:px-0 px-4 gap-4
                grid grid-cols-${columns}
                `}
                >
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
            </section>
        </>
    )
}