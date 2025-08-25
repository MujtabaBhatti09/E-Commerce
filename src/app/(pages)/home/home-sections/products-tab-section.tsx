import ProductTab from "@/components/Tab";
import { productCategories, products } from "@/constants";

export default function ProductsTabSection() {
    return (
        <section className="py-[50px] px-4">
            <div className="container-fluid">
                <ProductTab
                    title="Featured Products"
                    products={products}
                    categories={productCategories}
                />
            </div>
        </section>
    )
}