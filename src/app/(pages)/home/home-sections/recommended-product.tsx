import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";
import { ChevronRight, ShoppingCart } from "lucide-react";
import Galaxy from "@/public/assets/home/drone/Galaxy-Fold.png"
import PS5 from "@/public/assets/home/drone/PS-5.jpg"
import HandHeld from "@/public/assets/home/drone/Handheld.png"
import ImageCard from "@/components/ImageCard";
import { useEffect, useState } from "react";
import { getProducts } from "@/constants/getFakeProducts";
import { productImages } from "@/constants/slugProducts";
import Container from "@/components/Container";

export default function RecommendedProducts() {
    const [products, setProducts] = useState<any[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            const prods = await getProducts("5")
            setProducts(prods)
        }
        fetchProducts()
    }, [])

    return (
        <>
            <section className="py-[50px] space-y-20">
                {/* Section Recommended-Products */}
                <Container>
                    <div className="flex md:flex-row
                    flex-col gap-x-10 gap-y-6"
                    >
                        <div className="flex-[20%]">
                            <ImageCard
                                className="h-full w-full"
                                childClassName="!justify-start"
                                btnClassName="hover:!bg-transparent"
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
                                    className="text-blue !p-0 hover:bg-transparent"
                                    icon={<ChevronRight className="text-blue" size={20} />}
                                >
                                    View All
                                </Button>
                            </div>
                            <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
                                {products.map((prod, index) => (
                                    index < 4 &&
                                    <ProductCard
                                        {...prod}
                                        image={productImages[index]}
                                        key={index}
                                        icon={<ShoppingCart className="text-blue group-hover:!text-white" />}
                                        btnText="Add To Cart"
                                    />
                                ))}

                            </div>
                        </div>
                    </div>
                </Container>
                {/* Section PS5 */}
                <div className="2xl:container mx-auto container-fluid rounded-lg h-full">
                    <ImageCard
                        image={PS5}
                        title="PlayStation 5 Console"
                        className="md:h-auto sm:h-[40vh] h-[36]"
                        childClassName="md:!p-20 !p-6"
                        btnVariant="fill"
                        btnClassName="!p-4 !text-white hover:!bg-[var(--c-blue-dark)]"
                        iconClassName="!text-white"
                        textClassName="!text-4xl whitespace-break-spaces"
                        btnText="Shop Now"
                        subHeading="Experience an all-new generation of incredible games."
                    />
                </div>
                {/* Section Top-Products */}
                <Container>
                    <div className="flex md:flex-row
                    flex-col gap-x-10 gap-y-6"
                    >
                        <div className="flex-[80%] w-full space-y-4">
                            <div className="flex justify-between">
                                <h4 className="font-medium text-2xl">Top Products</h4>
                                <Button
                                    variant="ghost"
                                    className="text-blue !p-0 hover:bg-transparent"
                                    icon={<ChevronRight className="text-blue" size={20} />}
                                >
                                    View All
                                </Button>
                            </div>
                            <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
                                {products.map((prod, index) => (
                                    index < 4 &&
                                    <ProductCard
                                        {...prod}
                                        key={index}
                                        image={productImages[index]}
                                        icon={<ShoppingCart className="text-blue group-hover:!text-white" />}
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
                                btnClassName="hover:!bg-transparent"
                                textClassName="!w-10/12"
                                btnText="Shop Now"
                                title="Flex On All The Others"
                            />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}