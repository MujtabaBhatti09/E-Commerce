"use client"

import { usePathname } from "next/navigation";
import Footer from "../footer/footer";
import Navbar from "../header/navbar";
import PortalWrapper from "./smooth-scroll/Portal-Wrapper";
// import { routes } from "@/constants/routes";

interface Prop {
    children: React.ReactNode;
}

export default function CustomLayout({ children }: Prop) {
    // const path = usePathname()
    // const showFooter = routes.includes(path);
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