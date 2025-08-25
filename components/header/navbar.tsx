"use client "

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import { navItems } from "../../constants/nav-items";
import {
    BellIcon,
    ChevronDown,
    Heart,
    Search,
    ShoppingCart,
    User
} from "lucide-react";

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
                <div className="container-fluid
                    grid grid-cols-[1fr_auto_1fr] items-center
                    px-4 py-6 justify-between"
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
                <div className="container-fluid bg-blue px-4 flex justify-between items-center">
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
                                                shadow-lg divide-y divide-gray-400
                                            "
                                            >
                                                {val.childItems?.map((childitems, childIndex) => (
                                                    <li
                                                        key={childIndex}
                                                        className="cursor-pointer hover:bg-[#F5F5F5] hover:text-gray-500
                                                    flex items-center gap-x-1 px-4
                                                    text-sm font-medium text-black
                                                    py-2 transition-colors duration-200"
                                                    >
                                                        {childitems.icon && <childitems.icon className="text-gray-400" size={20} />}
                                                        <p>{childitems.title}</p>
                                                    </li>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                :
                                <li key={index} className="font-medium py-4 px-6 cursor-pointer">
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
            </nav>
        </>
    )
}