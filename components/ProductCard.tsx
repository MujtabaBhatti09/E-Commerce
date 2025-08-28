import Image from "next/image";
import Button from "./Button";
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface CardProps {
    image: StaticImport | string;
    hoverImage?: StaticImport | string;
    alt?: string;
    discount: string | null | number;
    brand: string;
    title: string;
    price: string | number;
    btnText: string;
    icon: React.ReactNode;
    description?: string;
    color?: string;
    model?: string;
    path?: string;
}

export default function ProductCard({
    image = "",
    hoverImage = "",
    alt = "",
    discount,
    brand,
    title,
    price,
    btnText,
    icon,
    path,
    description,
    color,
    model
}: CardProps) {
    const [hover, setHover] = useState<boolean>(false)
    const parsePrice = Number(price)
    const parseDiscount = Number(discount) || 0
    const oldPrice = parsePrice * (1 - parseDiscount / 100)
    return (
        <div className="card group-first:group border rounded-lg
        border-[#ddddddb3] hover:border-[#2453d3]
        flex-1 transition-all duration-200 cursor-default
        ">
            <div className="overflow-hidden w-full rounded-t-lg cursor-pointer">
                <div
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    className={`image relative md:h-[44vh] sm:h-[40vh] h-[36vh]`}>
                    <AnimatePresence mode="sync">
                        {hover ?
                            <motion.div
                                key={"hover"}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.1, ease: "linear" }}
                                className="h-full"
                            >
                                {hoverImage ?
                                    <Image
                                        alt={alt}
                                        src={hoverImage}
                                        height={400}
                                        width={400}
                                        className="object-cover h-full w-full"
                                    />
                                    :
                                    <Image
                                        alt={alt}
                                        src={image}
                                        height={400}
                                        width={400}
                                        className="object-cover h-full w-full"
                                    />
                                }
                            </motion.div>
                            :
                            <motion.div
                                key={"normal"}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2, ease: "linear" }}
                                className="h-full"
                            >
                                <Image
                                    alt={alt}
                                    src={image}
                                    height={400}
                                    width={400}
                                    className="object-cover h-full w-full"
                                />
                            </motion.div>
                        }
                        {discount !== null &&
                            <div className="bg-orange py-1 px-1.5 w-fit rounded
                        absolute top-4 left-4">
                                <p className="text-white text-xs">-{discount}%</p>
                            </div>
                        }
                    </AnimatePresence>
                </div>
            </div>
            <div className="card-body p-4 gap-y-6 flex flex-col flex-grow justify-between">
                <div className="space-y-2">
                    <p className="text-gray-400 text-xs">{brand}</p>
                    <h5 className="
                    line-clamp-2
                    md:text-lg text-sm font-medium w-10/12">{title}</h5>
                    {discount ?
                        <div className="flex gap-x-2 items-center">
                            {oldPrice && <p className="text-xs text-gray-300 line-through">RS.{price}</p>}
                            <p className="text-xs text-red">RS.{oldPrice}</p>
                        </div>
                        :
                        <p className="text-xs text-black">RS.{price}</p>
                    }
                </div>
                <div className="btn">
                    <Button
                        icon={icon}
                        iconPosition="right"
                        className="text-blue !px-4 hover:!text-white hover:!bg-[var(--c-blue)]
                        !justify-between border border-gray-400 hover:border-[#ddddd] w-full group"
                        variant="outline"
                    >
                        {btnText}
                    </Button>
                </div>
            </div>
        </div>
    )
}