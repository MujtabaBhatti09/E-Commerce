"use client"

import { usePathname } from "next/navigation";
import Footer from "../footer/footer";
import Navbar from "../header/navbar";
import PortalWrapper from "./smooth-scroll/Portal-Wrapper";
import { useEffect, useState } from "react";
// import { routes } from "@/constants/routes";

interface Prop {
    children: React.ReactNode;
}

export default function CustomLayout({ children }: Prop) {
    // const path = usePathname()
    // const showFooter = routes.includes(path);
    // const [navPosition, setNavPosition] = useState<boolean>(false)

    // useEffect(() => {
    //     const scrollFun = () => {
    //         if (window.scrollY > 300) {
    //             setNavPosition(true)
    //         } else {
    //             setNavPosition(false)
    //         }
    //     }
    //     window.addEventListener("scroll", scrollFun)
    //     scrollFun()
    //     return () => window.removeEventListener("scroll", scrollFun)
    // })

    return (
        <>
            <PortalWrapper>
                <Navbar />
            </PortalWrapper>
            {children}
            <Footer />
            {/* {
                showFooter &&
            } */}
        </>
    )
}