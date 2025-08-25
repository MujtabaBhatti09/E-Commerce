import { ChevronRight } from "lucide-react";
import Button from "./Button";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
    className?: string;
    title: string;
    btnText?: string;
    image?: StaticImport | string;
}

export default function ImageCard({
    className,
    title,
    btnText = "",
    image = ""
}: Props) {
    return (
        <div className={`${className}
            relative overflow-hidden
            rounded-lg`
        }
        >
            <Image className="object-cover h-full w-full" src={image} alt="Product-Image" />
            <div className="absolute inset-0
                    h-full w-full space-y-10 p-6
                    flex flex-col justify-center"
            >
                <h2 className="w-6/12 text-xl font-medium">{title}</h2>
                <Button
                    className="!p-0 !text-black"
                    variant="ghost"
                    text={btnText}
                    icon={<ChevronRight className="text-black" size={20} />}
                />
            </div>
        </div>
    )
}