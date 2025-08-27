import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { DollarSign, Heart, Shuffle, Star } from "lucide-react";
import IncrementQuantity from "./IncrementQuantity";
import Button from "./Button";
import Link from "next/link";
import ImageZoom from "./ZoomLens";

gsap.registerPlugin(ScrollTrigger);

interface ProductDetailsProps {
    images: StaticImport[] | string[] | any[];
    productTitle: string;
    price: string;
    reviews: any[]
    reviewCount: string;
    description: string;
    color: string;
    colors: string[] | any[];
    size: string;
    sizes: string[] | any[];
    quantity: number;
    handleChange: () => void;
}

export default function ProductScrollLock({
    images,
    productTitle,
    price,
    reviews,
    reviewCount,
    description,
    color,
    colors,
    size,
    sizes,
    quantity,
    handleChange
}: ProductDetailsProps) {
    useEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: ".product-section",
                start: "top top",
                end: "bottom bottom",
                pin: ".cart", // right-side cart pinned
                scrub: true,
            });

            gsap.to(".images", {
                yPercent: -100 * (document.querySelectorAll(".image").length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: ".product-section",
                    start: "top top",
                    end: "+=2000", // scroll length before unlock
                    scrub: true,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="product-section
                grid grid-cols-2 gap-2
                py-5 px-8 bg-white"
        >
            <div className="images space-y-6">
                {Array.isArray(images) && images.map((img, index) => (
                    <ImageZoom
                        src={img.images || img}
                        alt={`Product-Images-${index}`}
                        width={800} // Adjust based on your layout
                        height={600} // Adjust based on your layout
                        zoomLevel={2.5}
                        lensSize={120}
                        className="2xl:h-[75vh] h-[90vh] w-full"
                    />
                    // <Image
                    //     key={index}
                    //     src={img.images || img}
                    //     alt={`Product-Images-${index}`}
                    //     className="2xl:h-[75vh] h-[90vh] object-cover w-full"
                    // />
                ))}
            </div>
            <div className="cart h-screen bg-gray-900 text-white
            space-y-4"
            >
                <div className="flex justify-between">
                    <div className="space-y-2">
                        <p className="font-medium">{productTitle}</p>
                        <div className="flex items-center gap-x-1">
                            <DollarSign className="text-gray" size={20} />
                            <p className="font-medium text-[22px] leading-tight">{price}</p>
                        </div>
                    </div>
                    <div className="self-end h-fit flex items-center">
                        <div className="flex items-center">
                            {reviews.map((rev, index) => (
                                <div
                                    key={index}
                                    className=""
                                >
                                    {rev && <Star
                                        size={20}
                                        fill="current-color"
                                        className="text-yellow-500"
                                    />}
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray
                        hover:text-cyan-500">
                            ({reviewCount ?
                                reviewCount
                                :
                                reviews.length
                            }
                            review
                            )
                        </p>
                    </div>
                </div>
                <div className="description text-gray text-sm whitespace-break-spaces">
                    {description}
                </div>
                <div className="space-y-2">
                    <p className="text-sm font-semibold uppercase text-black">
                        Color: <span>{color}</span>
                    </p>
                    {colors.map((clr, index) => (
                        <div
                            key={index}
                            className={`
                            h-5 w-5 rounded-full
                            border-2 border-black
                            `}
                            style={{
                                backgroundColor: clr
                            }}
                        />
                    ))
                    }
                </div>
                <div className="space-y-2">
                    <p className="text-sm font-semibold uppercase text-black">
                        Size: <span>{size}</span>
                    </p>
                    {sizes.map((size, index) => (
                        <div
                            key={index}
                            className={`
                            p-2 rounded-full
                            border hover:border-black
                            border-gray
                            `}
                        >
                            <p className="text-sm uppercase">{size}</p>
                        </div>
                    ))
                    }
                </div>
                <div
                    className="flex items-center gap-x-2"
                >
                    <IncrementQuantity
                        quantity={quantity}
                        onChange={handleChange}
                    />
                    <Button
                        text="Add To Cart"
                        variant="fill"
                        className="uppercase text-white !bg-cyan-500"
                    />
                    <div className="p-2 border border-black
                    group hover:border-cyan-500"
                    >
                        <Heart
                            size={20}
                            className="group-hover:text-cyan-500"
                        />
                    </div>
                    <div className="p-2 border border-black
                    group hover:border-cyan-500"
                    >
                        <Shuffle
                            size={20}
                            className="group-hover:text-cyan-500"
                        />
                    </div>
                </div>
                <div className="info flex gap-x-2 items-center">
                    <Link href={"/terms-conditions"}
                        className="text-sm text-black
                        font-medium hover:text-cyan-500"
                    >
                        Size Guide
                    </Link>
                    <Link
                        href={"/returns-exchange"}
                        className="text-sm text-black
                        font-medium hover:text-cyan-500"
                    >
                        Delivery & Return
                    </Link>
                </div>
            </div>
        </div>
    );
}
