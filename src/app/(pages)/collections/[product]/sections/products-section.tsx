import BgDrone from "@/public/assets/home/drone/Drone.jpg"
import { ParamValue } from "next/dist/server/request/params";
import { Filter, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Slider from "@/components/Slider";
import { getCategories, getProducts } from "@/constants/getFakeProducts";

interface Props {
    title?: string | ParamValue;
}

export default function Products({
    title = "Title"
}: Props) {
    const containers = [2, 3, 4, 5, 6];
    const [columns, setColumns] = useState<string>("1")
    const [products, setProducts] = useState<any[]>([])
    const [productCategories, setProductCategories] = useState<any[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            const prods = await getProducts("5")
            const cats = await getCategories()
            setProducts(prods)
            setProductCategories(cats)
        }
        fetchProducts()
    }, [])

    const handleColumns = (column: number) => {
        console.log(column)
        setColumns(String(column))
    }

    return (
        <>
            <section className="space-y-10">
                {/* Banner */}
                <Slider
                    type="banner"
                    bannerImage={BgDrone}
                />
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
                            {...prod}
                            key={index}
                            alt={`Product-Image-${index}`}
                            btnText="Add To Cart"
                            icon={<ShoppingCart className="text-blue" />}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}