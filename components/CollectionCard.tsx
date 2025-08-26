import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface CardProps {
    image: StaticImport | string;
    alt: string;
    collection: string;
}

export default function CollectionCard({
    image = "",
    alt = "",
    collection
}: CardProps) {
    return (
        <div
            className="collection-card relative flex-1
            cursor-pointer overflow-hidden
            2xl:h-[68vh] md:h-[86vh] h-[64vh]"
        >
            <Image
                src={image}
                alt={alt}
                className={`
                    object-cover h-full w-full
                    transition-all duration-300 ease-linear
                    hover:scale-110`}
            />
            <div className="absolute
            bottom-4 right-0 left-0 mx-auto
            py-3 bg-white px-10 w-[38%]
            grid place-items-center group
            hover:bg-black transition-all duration-500
            shadow-[1px_1px_2px_0_rgba(0,0,0,0.2)]"
            >
                <p className="
                text-black font-semibold text-sm
                group-hover:text-white
                ">{collection}</p>
            </div>
        </div>
    )
}