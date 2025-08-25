import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/constants";
import { ChevronRight, ShoppingCart } from "lucide-react";
import Galaxy from "@/public/assets/home/drone/Galaxy-Fold.png"
import PS5 from "@/public/assets/home/drone/PS-5.jpg"
import HandHeld from "@/public/assets/home/drone/Handheld.png"
import ImageCard from "@/components/ImageCard";

export default function RecommendedProducts() {
    return (
        <>
            <section className="py-[50px] space-y-20 2xl:px-0 px-4">
                {/* Section Recommended-Products */}
                <div className="2xl:container mx-auto container-fluid flex gap-x-10">
                    <div className="flex-[20%]">
                        <ImageCard
                            className="h-full w-full"
                            childClassName="!justify-start"
                            image={Galaxy}
                            textClassName="!w-10/12"
                            btnText="Shop Now"
                            title="Flex On All The Others"
                        />
                    </div>
                    <div className="space-y-4 flex-[80%]">
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
                                    alt={`${index}`}
                                    hoverImage={prod.hoverImage}
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
                {/* Section PS5 */}
                <div className="2xl:container mx-auto container-fluid rounded-lg h-full">
                    <ImageCard
                        image={PS5}
                        title="PlayStation 5 Console"
                        childClassName="!p-20"
                        btnVariant="fill"
                        btnClassName="!p-4 !text-white"
                        iconClassName="!text-white"
                        textClassName="!text-4xl whitespace-break-spaces"
                        btnText="Shop Now"
                        subHeading="Experience an all-new generation of incredible games."
                    />
                </div>
                {/* Section Top-Products */}
                <div className="2xl:container mx-auto container-fluid flex gap-x-6 grid-cols-12">
                    <div className="flex-[80%] w-full space-y-4">
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
                                    alt={`${index}`}
                                    hoverImage={prod.hoverImage}
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
                    <div className="flex-[20%]">
                        <ImageCard
                            className="h-full w-full"
                            childClassName="!justify-start"
                            image={HandHeld}
                            textClassName="!w-10/12"
                            btnText="Shop Now"
                            title="Flex On All The Others"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}