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
            <section className="pt-38 space-y-10 pb-[50px]">
                <Slider data={SliderData} />
                <div className="flex justify-between">
                    {heroProducts.map((item, index) => (
                        <ImageCard
                            key={index}
                            className="mx-4"
                            title={item.title}
                            image={item.image}
                            btnText={item.btnText}
                        />
                    ))}
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
                absolute inset-0
                h-fit w-full my-auto
                space-y-8 px-4"
            >
                <h2 className="
                    text-[64px] max-w-6/12
                    font-medium leading-18">
                    {item.title}
                </h2>
                <p className="text-8c8c8c font-medium">
                    {item.subTitle}
                </p>
                <Button icon={<ChevronRight className="text-white" size={20} />} text={item.btnText} />
            </div>
        </div>
    </SwiperSlide>
))