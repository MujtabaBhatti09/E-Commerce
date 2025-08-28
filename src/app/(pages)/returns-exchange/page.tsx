import { BreadCrumb } from "../terms-conditions/page";
import ReturnSection from "./returns-sections/return-section";
import BannerImage from "@/public/assets/home/drone/Drone.jpg"
import Banner from "@/components/Banner";

export default function ReturnExchange() {
    return (
        <>
            <div className="lg:pt-40 pt-16">
                <Banner
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