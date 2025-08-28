import BannerImage from "@/public/assets/home/drone/Drone.jpg"
import CollectionSection from "./collection-sections/collection-section";
import Banner from "@/components/Banner";

export default function Collection() {
    return (
        <>
            <div className="lg:pt-40 pt-16">
                <Banner
                    bannerImage={BannerImage}
                    bannerTitle="Collection"
                />
            </div>
            <CollectionSection />
        </>
    )
}