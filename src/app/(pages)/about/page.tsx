import Slider from "@/components/Slider";
import BannerImage from "@/public/assets/home/drone/Drone.jpg"
import GridSection from "./about-sections/grid-section";
import TeamSection from "./about-sections/team-section";

export default function AboutUs() {
    return (
        <>
            <div className="pt-40">
                <Slider
                    type="banner"
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