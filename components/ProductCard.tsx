import Image from "next/image";
import Button from "./Button";
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface CardProps {
    image: StaticImport | string;
    hoverImage?: StaticImport | string;
    alt?: string;
    discount: string | null;
    brand: string;
    title: string;
    oldPrice: string | null;
    price: string;
    btnText: string;
    icon: React.ReactNode;
    path?: string;
}

export default function ProductCard({
    image = "",
    hoverImage = "",
    alt = "",
    discount,
    brand,
    title,
    oldPrice,
    price,
    btnText,
    icon,
    path
}: CardProps) {
    const [hover, setHover] = useState<boolean>(false)

    return (
        <div className="card group border rounded-lg
        border-[#ddddddb3] hover:border-[#2453d3]
        flex-1 transition-all duration-200
        ">
            <div className="overflow-hidden w-full rounded-t-lg">
                <div
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    className={`image relative h-[44vh]`}>
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
                                <Image
                                    alt={alt}
                                    src={hoverImage}
                                    className="object-cover h-full w-full"
                                />
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
                                    className="object-cover h-full w-full"
                                />
                            </motion.div>
                        }
                        {discount !== null &&
                            <div className="bg-orange py-1 px-1.5 w-fit rounded
                        absolute top-4 left-4">
                                <p className="text-white text-xs">{discount}</p>
                            </div>
                        }
                    </AnimatePresence>
                </div>
            </div>
            <div className="card-body p-4 gap-y-6 flex flex-col flex-grow justify-between">
                <div className="space-y-2">
                    <p className="text-gray-400 text-xs">{brand}</p>
                    <h5 className="text-xl font-medium w-10/12">{title}</h5>
                    {oldPrice ?
                        <div className="flex gap-x-2 items-center">
                            {<p className="text-xs text-gray-300 line-through">RS.{oldPrice}</p>}
                            <p className="text-xs text-red">RS.{price}</p>
                        </div>
                        :
                        <p className="text-xs text-black">RS.{price}</p>
                    }
                </div>
                <div className="btn">
                    <Button
                        icon={icon}
                        hover="var(--c-blue)"
                        className="text-blue !px-4
                        justify-between border border-gray-400 hover:border-[#ddddd] w-full"
                        text={btnText}
                        variant="outline"
                    />
                </div>
            </div>
        </div>
    )
}