'use client'

import { useRef } from 'react';
import Image from "next/image";
import Button from "@/components/Button";
import ImageCard from "@/components/ImageCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronRight } from 'lucide-react';
import { heroProducts, heroSliderData } from "@/constants";
import Container from '@/components/Container';

export default function HeroSection() {
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <section className="lg:pt-38 pt-16 pb-[50px]">
                <div className="space-y-10">
                    <div className="carousel h-full w-full relative">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
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
                            modules={[Navigation, Autoplay]}
                            className="mySwiper"
                        >
                            {SliderData}
                        </Swiper>
                    </div>
                    <Container>
                        <div className="lg:flex hidden gap-x-4 justify-between">
                            {heroProducts.map((item, index) => (
                                <ImageCard
                                    key={index}
                                    btnClassName="hover:!bg-transparent"
                                    title={item.title}
                                    image={item.image}
                                    btnText={item.btnText}
                                />
                            ))}
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

const SliderData = heroSliderData.map((item, index) => (
    <SwiperSlide key={index}>
        <div className={`
            relative
            flex items-center
            h-screen w-full
            `}
        >
            <Image
                src={item.image}
                alt={`Slider-Image-${index}`}
                className="object-cover h-full w-full"
            />
            <div className="
                2xl:container mx-auto container-fluid
                absolute inset-0
                h-fit w-full my-auto
                space-y-8 px-4"
            >
                <h2 className="
                    [word-spacing:1px]
                    text-[64px] max-w-6/12
                    font-medium leading-18">
                    {item.title}
                </h2>
                <p className="text-8c8c8c font-medium">
                    {item.subTitle}
                </p>
                <Button
                    size="lg"
                    className="hover:!bg-[--c-blue-dark]"
                    icon={<ChevronRight className="text-white" size={20} />}
                >
                    {item.btnText}
                </Button>
            </div>
        </div>
    </SwiperSlide>
))