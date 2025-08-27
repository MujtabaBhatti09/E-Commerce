"use client"

import Footer from "../footer/footer";
import Navbar from "../header/navbar";
import PortalWrapper from "./smooth-scroll/Portal-Wrapper";

interface Prop {
    children: React.ReactNode;
}

export default function CustomLayout({ children }: Prop) {
    return (
        <>
            <PortalWrapper>
                <Navbar />
            </PortalWrapper>
            {children}
            <Footer />
        </>
    )
}