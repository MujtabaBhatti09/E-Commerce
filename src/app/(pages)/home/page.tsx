"use client"

import Clients from "@/components/clients/Client";
import DroneSection from "./home-sections/drone-section";
import FeaturedCategories from "./home-sections/featured-categories";
import HeroSection from "./home-sections/hero-section";
import ProductsTabSection from "./home-sections/products-tab-section";
import RecommendedProducts from "./home-sections/recommended-product";
import NewsLetter from "./home-sections/newslette";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <ProductsTabSection />
            <FeaturedCategories />
            <DroneSection />
            <RecommendedProducts />
            <Clients />
            <NewsLetter />
        </>
    )
}