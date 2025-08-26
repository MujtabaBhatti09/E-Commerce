import Slider from "@/components/Slider";
import { BreadCrumb } from "../terms-conditions/page";
import ReturnSection from "./returns-sections/return-section";
import BannerImage from "@/public/assets/home/drone/Drone.jpg"

export default function ReturnExchange() {
    return (
        <>
            <div className="pt-40">
                <Slider
                    type="banner"
                    bannerTitle="Returns & Exchange"
                    bannerImage={BannerImage}
                    bannerSubTitle={<BreadCrumb pageName="Returns & Exchange" />}
                    bannerTitleRelClassName="gap-y-2"
                />
            </div>
            <ReturnSection />
        </>
    )
}