import Button from "@/components/Button";
import { ChevronRight } from "lucide-react";

export default function DroneSection() {
    return (
        <section className="bg-drone h-screen px-6 py-[50px]">
            <div className="space-y-12">
                <div className="space-y-4">
                    <h4
                        className="text-4xl whitespace-break-spaces
                        font-medium w-1/3 leading-12"
                    >
                        Hasselblad Camera, Create to Inspire
                    </h4>
                    <p className="text-gray">Get a fell for what it is like to own Mavic 3 Classic in advance.</p>
                </div>
                <Button
                    text="Discover More"
                    icon={<ChevronRight size={20} />}
                />
            </div>
        </section>
    )
}