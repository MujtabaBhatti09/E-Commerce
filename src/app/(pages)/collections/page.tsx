import Slider from "@/components/Slider";
import BannerImage from "@/public/assets/home/drone/Drone.jpg"
import CollectionSection from "./collection-sections/collection-section";

export default function Collection() {
    return (
        <>
            <div className="pt-40">
                <Slider
                    type="banner"
                    bannerImage={BannerImage}
                    bannerTitle="Collection"
                />
            </div>
            <CollectionSection />
        </>
    )
}