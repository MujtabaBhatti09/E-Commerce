import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/constants";
import { ChevronRight, ShoppingCart } from "lucide-react";

export default function RecommendedProducts() {
    return (
        <>
            <section className="py-[50px] px-6 space-y-20">
                <div className="container-fluid flex gap-x-6 grid-cols-12">
                    <div className="bg-galaxy rounded-lg p-6 h-[80vh] space-y-6">
                        <h4 className="text-xl font-medium w-7/12   ">
                            Flex On All The Others
                        </h4>
                        <Button
                            variant="ghost"
                            text="Shop Now"
                            className="!text-black !p-0"
                            icon={<ChevronRight className="text-black" size={20} />}
                        />
                    </div>
                    <div className="col-span-11 w-full space-y-4">
                        <div className="flex justify-between">
                            <h4 className="font-medium text-2xl">Recommended For You</h4>
                            <Button
                                variant="ghost"
                                text="View All"
                                className="text-blue !p-0"
                                icon={<ChevronRight className="text-blue" size={20} />}
                            />
                        </div>
                        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
                            {products.map((prod, index) => (
                                index < 4 &&
                                <ProductCard
                                    key={index}
                                    image={prod.image}
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
                </div>
                <div className="bg-ps5 p-18 rounded-lg">
                    <div className="space-y-12">
                        <h4 className="text-4xl whitespace-break-spaces font-medium">
                            PlayStation 5 Console
                        </h4>
                        <p className="text-gray text-sm">Experience an all-new generation of incredible games.</p>
                        <Button
                            text="Shop Now"
                            icon={<ChevronRight size={20} />}
                        />
                    </div>
                </div>
                <div className="container-fluid flex gap-x-6 grid-cols-12">
                    <div className="col-span-11 w-full space-y-4">
                        <div className="flex justify-between">
                            <h4 className="font-medium text-2xl">Top Products</h4>
                            <Button
                                variant="ghost"
                                text="View All"
                                className="text-blue !p-0"
                                icon={<ChevronRight className="text-blue" size={20} />}
                            />
                        </div>
                        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
                            {products.map((prod, index) => (
                                index < 4 &&
                                <ProductCard
                                    key={index}
                                    image={prod.image}
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
                    <div className="bg-handheld rounded-lg p-6 h-[80vh] space-y-6">
                        <h4 className="text-xl font-medium w-7/12   ">
                            A Gimbal With Street Smarts
                        </h4>
                        <Button
                            variant="ghost"
                            text="Shop Now"
                            className="!text-black !p-0"
                            icon={<ChevronRight className="text-black" size={20} />}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}