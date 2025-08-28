import BannerImage from "@/public/assets/home/drone/Drone.jpg"
import ContactSction from "./contact-sections/contact-section";
import Banner from "@/components/Banner";

export default function Contact() {
    return (
        <>
            <div className="lg:pt-40 pt-16">
                <Banner
                    bannerImage={BannerImage}
                    bannerTitle="Contact"
                />
            </div>
            <ContactSction />
        </>
    )
}