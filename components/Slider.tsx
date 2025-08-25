"use client"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Virtual } from 'swiper/modules';
import { useRef } from 'react';

interface Props {
    data: React.ReactNode;
    modules?: any[];
    sliderClass?: string;
    pagination?: boolean;
    breakLg?: number;
    breakMd?: number;
    breakSm?: number;
    breakXs?: number;
    spaceLg?: number;
    spaceMd?: number;
    spaceSm?: number;
    spaceXs?: number;
}

export default function Slider({
    data,
    modules,
    sliderClass,
    breakLg = 1,
    breakMd = 1,
    breakSm = 1,
    breakXs = 1,
    spaceLg,
    spaceMd,
    spaceSm,
    spaceXs,
}: Props) {
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);
    return (
        <div className="carousel h-full">
            <Swiper
                breakpoints={{
                    '@0.00': {
                        slidesPerView: breakXs,
                        spaceBetween: spaceXs,
                    },
                    '@0.75': {
                        slidesPerView: breakSm,
                        spaceBetween: spaceSm,
                    },
                    '@1.00': {
                        slidesPerView: breakMd,
                        spaceBetween: spaceMd,
                    },
                    '@1.50': {
                        slidesPerView: breakLg,
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
                modules={modules || [Navigation, Autoplay]}
                className="mySwiper"
            >
                {data}
            </Swiper>
        </div>
    )
}