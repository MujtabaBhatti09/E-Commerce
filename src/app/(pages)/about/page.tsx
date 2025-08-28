import BannerImage from "@/public/assets/home/drone/Drone.jpg"
import GridSection from "./about-sections/grid-section";
import TeamSection from "./about-sections/team-section";
import Banner from "@/components/Banner";

export default function AboutUs() {
    return (
        <>
            <div className="lg:pt-40 pt-16">
                <Banner
                    bannerTitle="About Us"
                    bannerSubTitle="Follow your passion, and success will follow you"
                    bannerImage={BannerImage}
                />
            </div>
            <GridSection />
            <TeamSection />
        </>
    )
}