import Slider from "@/components/Slider";
import BannerImage from "@/public/assets/home/drone/Drone.jpg"
import ContactSction from "./contact-sections/contact-section";

export default function Contact() {
    return (
        <>
            <div className="pt-40">
                <Slider
                    type="banner"
                    bannerImage={BannerImage}
                    bannerTitle="Contact"
                />
            </div>
            <ContactSction />
        </>
    )
}