"use client"

import { useParams } from "next/navigation";
import { BreadCrumb } from "../../terms-conditions/page";
import Products from "../products/[product]//products-sections/products-section";

export default function SubCollectionPage() {
    const { subCollection } = useParams()

    return (
        <>
            <div className="lg:pt-40 pt-16">
                <Products
                    title={subCollection}
                    breadCrumb={<BreadCrumb pageName={String(subCollection)} />}
                />
            </div>
        </>
    )
}