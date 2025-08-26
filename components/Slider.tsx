"use client"

import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface Props {
    type: "slider" | "banner";
    showCarouselBtn?: boolean;
    showCarouselPagination?: boolean;
    showCarouselClassName?: boolean;
    bannerImage?: StaticImport | string;
    bannerTitle?: string;
    bannerSubTitle?: string | React.ReactNode;
    bannerParentClassName?: string;
    bannerImageClassName?: string;
    bannerTitleRelClassName?: string;
    bannerTitleClassName?: string;
    bannerSubTitleClassName?: string;
    data?: React.ReactNode;
    modules?: any[];
    pagination?: boolean;
    slidesLg?: number;
    slidesMd?: number;
    slidesSm?: number;
    slidesXs?: number;
    spaceLg?: number;
    spaceMd?: number;
    spaceSm?: number;
    spaceXs?: number;
}

export default function Slider({
    type = "slider",
    showCarouselBtn = false,
    showCarouselPagination,
    showCarouselClassName,
    bannerImage = "",
    bannerTitle,
    bannerSubTitle,
    bannerParentClassName,
    bannerImageClassName,
    bannerTitleRelClassName,
    bannerTitleClassName,
    bannerSubTitleClassName,
    data,
    modules,
    slidesLg = 1,
    slidesMd = 1,
    slidesSm = 1,
    slidesXs = 1,
    spaceLg,
    spaceMd,
    spaceSm,
    spaceXs,
}: Props) {
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);

    return (
        <>
            {type == "slider" ?
                <div className="carousel h-full w-full relative">
                    {showCarouselBtn ?
                        <>
                            <div ref={prevRef} className="text-black absolute left-0 top-1/2 z-50 cursor-pointer"><ChevronLeft size={40} /></div>
                            <div ref={nextRef} className="text-black absolute right-0 top-1/2 z-50 cursor-pointer"><ChevronRight size={40} /></div>
                        </>
                        : null
                    }
                    <Swiper
                        breakpoints={{
                            '@0.00': {
                                slidesPerView: slidesXs,
                                spaceBetween: spaceXs,
                            },
                            '@0.75': {
                                slidesPerView: slidesSm,
                                spaceBetween: spaceSm,
                            },
                            '@1.00': {
                                slidesPerView: slidesMd,
                                spaceBetween: spaceMd,
                            },
                            '@1.50': {
                                slidesPerView: slidesLg,
                                spaceBetween: spaceLg,
                            },
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onInit={(swiper) => {
                            // Necessary because refs are null on first render
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            swiper.params.navigation.prevEl = prevRef.current;
                            // @ts-ignore
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        modules={modules || [Navigation, Autoplay]}
                        className="mySwiper flex"
                    >
                        {data}
                    </Swiper>
                </div>
                :
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
            }
        </>
    )
}