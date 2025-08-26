import Slider from "@/components/Slider";
import BannerImage from "@/public/assets/home/drone/Drone.jpg"
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import TermSection from "./terms-sections/terms-section";

export default function TermCondition() {
    return (
        <>
            <div className="pt-40">
                <Slider
                    type="banner"
                    bannerTitle="Terms & Conditions"
                    bannerImage={BannerImage}
                    bannerSubTitle={<BreadCrumb pageName="Terms & Conditions" />}
                    bannerTitleRelClassName="gap-y-2"
                />
            </div>
            <TermSection />
        </>
    )
}

export const BreadCrumb = ({ pageName }: { pageName: string; }) => (
    <div
        className="flex items-center gap-x-2
                text-white text-sm"
    >
        <Link href="/">Home</Link>
        <ChevronRight size={15} />
        <p>{pageName}</p>
    </div>
)