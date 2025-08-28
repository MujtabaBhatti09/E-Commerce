import { ParamValue } from "next/dist/server/request/params";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface Props {
    bannerImage?: StaticImport | string;
    bannerTitle?: string | ParamValue;
    bannerSubTitle?: string | React.ReactNode;
    bannerParentClassName?: string;
    bannerImageClassName?: string;
    bannerTitleRelClassName?: string;
    bannerTitleClassName?: string;
    bannerSubTitleClassName?: string;
}

export default function Banner({
    bannerImage = "",
    bannerTitle,
    bannerSubTitle,
    bannerParentClassName,
    bannerImageClassName,
    bannerTitleRelClassName,
    bannerTitleClassName,
    bannerSubTitleClassName,
}: Props) {
    return (
        <div className={`
                ${bannerParentClassName}
                relative 2xl:h-[30vh] h-[24vh]`}
        >
            <Image
                src={bannerImage}
                alt="banner"
                className={`
                    ${bannerImageClassName}
                    object-cover w-full h-full`}
            />
            <div className={`absolute inset-0
                    flex flex-col items-center justify-center
                    h-full w-full bg-black/60 ${bannerTitleRelClassName}`}
            >
                <p className={`
                                ${bannerTitleClassName}
                                text-xl font-medium text-white`}>
                    {bannerTitle}
                </p>
                {typeof bannerSubTitle == "string" ?
                    <p className={`
                                ${bannerSubTitleClassName}
                                text-sm font-medium text-white`}>
                        {bannerSubTitle}
                    </p>
                    :
                    bannerSubTitle
                }
            </div>
        </div>
    )
}