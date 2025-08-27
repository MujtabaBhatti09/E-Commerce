"use client"

import { useParams } from "next/navigation"
import ProductCategorySection from "./products-sections/category-section";
import Products from "./products-sections/products-section";
import { cleanParams } from "@/utils/cleanParams";

export default function ProductPage() {
    const { product } = useParams()
    const cleanParam = cleanParams(product)
    return (
        <div className="pt-40">
            <ProductCategorySection />
            <Products title={cleanParam} />
        </div>
    )
}