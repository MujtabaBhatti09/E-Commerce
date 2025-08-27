'use client'

import Button from "@/components/Button";
import ImageCard from "@/components/ImageCard";
import Slider from "@/components/Slider";
import { heroProducts, heroSliderData } from "@/constants";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

export default function HeroSection() {

    return (
        <>
            <section className="lg:pt-38 pt-16 pb-[50px]">
                <div className="space-y-10">
                    <Slider type="slider" data={SliderData} />
                    <div className="2xl:container container-fluid
                    2xl:px-0 px-4 mx-auto"
                    >
                        <div className="lg:flex hidden gap-x-4 justify-between">
                            {heroProducts.map((item, index) => (
                                <ImageCard
                                    key={index}
                                    className=""
                                    title={item.title}
                                    image={item.image}
                                    btnText={item.btnText}
                                />
                            ))}
                        </div>
                    </div>
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