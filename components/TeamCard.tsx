import { Dribbble, Facebook, Instagram } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface CardProps {
    image: StaticImport | string;
    alt?: string;
    name: string;
    designation: string;
}

export default function TeamCard({
    image = "",
    alt = "",
    name,
    designation
}: CardProps) {
    return (
        <div className="team-card space-y-4
        h-full flex-1 group relative"
        >
            <div className="image h-[76vh] w-full">
                <Image
                    src={image}
                    alt={alt}
                    className="object-cover h-full w-full"
                />
            </div>
            <div className="flex flex-col items-center gap-y-2">
                <p className="text-lg font-medium">{name}</p>
                <p className="text-gray">{designation}</p>
            </div>
            {/* Overlay */}
            <div className="absolute inset-0
            h-full w-full bg-[#f5f5f5]/80
            p-4 group-hover:opacity-100 opacity-0
            transition-all duration-200 ease-linear
            flex flex-col items-center justify-end"
            >
                <div className="flex justify-center items-center gap-x-4 w-fit">
                    {[Facebook, Instagram, Dribbble].map((Icon, index) => (
                        <Icon key={index} className="text-gray" size={25} />
                    ))}
                </div>
            </div>
        </div>
    )
}