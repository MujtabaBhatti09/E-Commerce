import Button from "@/components/Button";
import ImageCard from "@/components/ImageCard";
import { ChevronRight } from "lucide-react";
import Drone from "@/public/assets/home/drone/Drone.jpg"

export default function DroneSection() {
    return (
        <section className="py-[50px]">
            <ImageCard
                btnVariant="fill"
                iconClassName="text-white"
                btnClassName="!p-4 !text-white"
                className="h-screen"
                title="Hasselblad Camera, Create to Inspire"
                image={Drone}
                textClassName="!text-4xl leading-12 !w-1/3 whitespace-break-spaces"
                btnText="Discover More"
            />
        </section>
    )
}