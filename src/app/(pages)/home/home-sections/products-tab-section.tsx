import ProductTab from "@/components/Tab";
import { productCategories, products } from "@/constants";

export default function ProductsTabSection() {
    return (
        <section className="py-[50px] 2xl:px-0 px-4">
            <div className="2xl:container mx-auto container-fluid">
                <ProductTab
                    title="Featured Products"
                    products={products}
                    categories={productCategories}
                />
            </div>
        </section>
    )
}