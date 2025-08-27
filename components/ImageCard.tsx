import { ChevronRight } from "lucide-react";
import Button from "./Button";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
    className?: string;
    title?: string;
    btnText?: string;
    image?: StaticImport | string;
    alt?: string;
    textClassName?: string;
    btnVariant?: "ghost" | "outline" | "fill";
    btnClassName?: string;
    iconClassName?: string;
    subHeading?: string;
    subHeadingClassName?: string;
    childClassName?: string;
}

export default function ImageCard({
    className,
    childClassName,
    btnClassName,
    iconClassName = "text-black",
    subHeadingClassName,
    title,
    subHeading,
    btnText = "",
    image = "",
    alt = "Product-Image",
    btnVariant = "ghost",
    textClassName
}: Props) {
    return (
        <div className={`${className}
            relative overflow-hidden
            rounded-lg`
        }
        >
            <Image className="object-cover h-full w-full" src={image} alt={alt} />
            <div className={`absolute inset-0 ${childClassName}
                    h-full w-full space-y-10 py-6 px-4
                    2xl:container mx-auto container-fluid
                    flex flex-col justify-center`}
            >
                <h2 className={`w-6/12 text-xl font-medium ${textClassName}`}>{title}</h2>
                {subHeading && <p className={`text-gray text-sm ${subHeadingClassName}`}>{subHeading}</p>}
                <Button
                    className={`!p-0 !text-black w-fit hover:!bg-transparent ${btnClassName}`}
                    variant={btnVariant}
                    icon={<ChevronRight className={`${iconClassName}`} size={20} />}
                >
                    {btnText}
                </Button>
            </div>
        </div>
    )
}