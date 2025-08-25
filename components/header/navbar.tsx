"use client "

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import { bottomItem, navItems } from "../../constants/nav-items";
import Menu from "@/public/icon-svg/menu.svg"
import {
    BellIcon,
    ChevronDown,
    Heart,
    Search,
    ShoppingCart,
    User
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [dd, setDD] = useState<string>("")
    const [renderNav, setRenderNav] = useState<boolean>(false)

    // useEffect(() => {
    //     const scrollFun = () => {
    //         const scrollValue = window.scrollY


    //     }

    //     window.addEventListener("scroll", scrollFun)

    //     return () => window.removeEventListener("scroll", scrollFun)
    // })

    return (
        <>
            <nav className={`h-fit z-10 bg-white
                    fixed inset-0
                    `}
            >
                {/* Mobile View Navbar */}
                <div className="2xl:container mx-auto container-fluid
                    lg:hidden grid grid-cols-[1fr_auto_1fr] items-center
                    px-4 py-2 justify-between"
                >
                    <Image className="" src={Menu} alt={"Menu"} />
                    <div>
                        <h2 className="text-5xl font-bold tracking-tight">kalles</h2>
                    </div>

                    <div className="flex items-center w-fit justify-self-end gap-x-4 relative">
                        <Search className="
                            cursor-pointer
                            hover:text-blue-800 hover:scale-105
                            transition-all duration-200"/>
                        <User
                            className="
                            cursor-pointer
                            hover:text-blue-800 hover:scale-105
                            transition-all duration-200"
                        />
                        <Heart
                            className="
                            cursor-pointer
                            hover:text-blue-800 hover:scale-105
                            transition-all duration-200"
                        />
                        <ShoppingCart
                            className="
                            cursor-pointer
                            hover:text-blue-800 hover:scale-105
                            transition-all duration-200"
                        />
                    </div>
                </div>

                {/* Hidden After Large Breakpoint Top Nav Container */}
                <div className="2xl:container mx-auto container-fluid
                    lg:grid grid-cols-[1fr_auto_1fr] items-center
                    px-4 py-6 justify-between hidden"
                >
                    <div>
                        <h2 className="text-5xl font-bold tracking-tight">kalles</h2>
                    </div>
                    <div className="relative flex items-center
                    border rounded-lg border-gray-300
                    px-4 gap-x-2 w-full bg-fafafa"
                    >
                        <div className="flex items-center gap-x-1 cursor-default">
                            <p className="font-medium text-sm">All Categories</p>
                            <ChevronDown className="text-gray-400" size={15} />
                        </div>
                        <span className="font-thin text-gray-400">|</span>
                        <input
                            className="py-3 focus:outline-none w-96 text-sm"
                            type="text"
                            placeholder="Search for products"
                        />
                        <div className="absolute right-0 top-0
                            cursor-pointer h-11 w-10 rounded-lg
                            grid place-items-center
                            "
                        >
                            <Search size={20} />
                        </div>
                    </div>
                    <div className="flex items-center w-fit justify-self-end gap-x-4 relative">
                        <User
                            className="
                            cursor-pointer
                            hover:text-blue-800 hover:scale-105
                            transition-all duration-200"
                        />
                        <Heart
                            className="
                            cursor-pointer
                            hover:text-blue-800 hover:scale-105
                            transition-all duration-200"
                        />
                        <ShoppingCart
                            className="
                            cursor-pointer
                            hover:text-blue-800 hover:scale-105
                            transition-all duration-200"
                        />
                    </div>
                </div>

                {/* Hidden After Large Breakpoint Blue NavItems Container */}
                <div className="lg:block hidden bg-blue px-4">
                    <div className="2xl:container mx-auto container-fluid
                    flex justify-between items-center"
                    >
                        <ul className="flex items-center text-white text-sm relative">
                            {navItems.map((val, index) => (
                                val.title === "All Categories" ?
                                    <div key={index}>
                                        <li
                                            onMouseEnter={() => setDD(val.title)}
                                            onMouseLeave={() => setDD("")}
                                            className="font-medium
                                        flex items-center p-4
                                        cursor-pointer
                                        bg-blue-dark w-60">
                                            {val.icon && <val.icon />}
                                            <p>{val.title}</p>
                                        </li>
                                        <AnimatePresence>
                                            {dd === val.title && (
                                                <motion.div
                                                    onMouseEnter={() => setDD(val.title)}
                                                    onMouseLeave={() => setDD("")}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 20 }}
                                                    transition={{ duration: 0.2, ease: "linear" }}
                                                    className="
                                                absolute top-full bg-white h-auto w-60
                                                shadow-lg divide-y divide-gray-400"
                                                >
                                                    {val.childItems?.map((childItems, childIndex) => (
                                                        <Link
                                                            href={`${childItems.title}`}
                                                            className="
                                                            cursor-pointer hover:bg-[#F5F5F5] hover:text-gray-500
                                                            px-4 text-sm font-medium text-black
                                                            py-2 transition-colors duration-200
                                                            flex items-center gap-x-1"
                                                        >
                                                            <li
                                                                key={childIndex}
                                                                className="flex items-center gap-x-1"
                                                            >
                                                                {childItems.icon &&
                                                                    <childItems.icon
                                                                        size={20}
                                                                        className="text-gray-400"
                                                                    />
                                                                }
                                                                <p>{childItems.title}</p>
                                                            </li>
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    :
                                    <li key={index} className="font-medium py-4 px-4 cursor-pointer">
                                        <p>{val.title}</p>
                                    </li>

                            ))}
                        </ul>
                        <div className="flex items-center text-xs gap-x-1">
                            <div className="flex gap-x-1 items-center text-white">
                                <BellIcon size={15} />
                                <p>Hotline:</p>
                            </div>
                            <p className="text-yellow">(+92 323312344)</p>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Mobile Bottom Bar */}
            <div className="fixed w-full h-fit inset-0
            px-4 py-2 bg-white
            mt-auto z-10 shadow-[0_-2px_10px_0_rgba(0,0,0,0.1)]
            grid grid-cols-5 lg:hidden"
            >
                {bottomItem.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-y-1"
                    >
                        <item.icon size={20} />
                        <p className="text-xs font-semibold">{item.name}</p>
                    </div>
                ))}
            </div>
        </>
    )
}