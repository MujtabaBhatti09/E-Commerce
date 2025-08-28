"use client"

import { useParams } from "next/navigation"
import ProductCategorySection from "./products-sections/category-section";
import Products from "./products-sections/products-section";
import { cleanParams } from "@/utils/cleanParams";

export default function ProductPage() {
    const { product } = useParams()
    const cleanParam = cleanParams(product)
    return (
        <div className="lg:pt-40 pt-16">
            <ProductCategorySection />
            <Products title={cleanParam} />
        </div>
    )
}