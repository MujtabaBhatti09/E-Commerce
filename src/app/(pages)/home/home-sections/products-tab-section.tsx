import ProductTab from "@/components/Tab";
import { getCategories, getProducts } from "@/constants/getFakeProducts";
import { useEffect, useState } from "react";

export default function ProductsTabSection() {
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

    return (
        <section className="py-[50px]">
            <div className="2xl:container mx-auto container-fluid
            2xl:px-0 px-4"
            >
                <ProductTab
                    title="Featured Products"
                    products={products}
                    categories={productCategories}
                />
            </div>
        </section>
    )
}