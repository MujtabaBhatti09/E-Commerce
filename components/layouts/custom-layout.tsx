"use client"

import 'swiper/css';
import 'swiper/css/bundle';
import Footer from "../footer/footer";
import Navbar from "../header/navbar";
import PortalWrapper from "./smooth-scroll/Portal-Wrapper";
import ScrollToTop from '../Scroll-Top';
import { useState } from 'react';
import Sidebar from '../sidebars/Sidebar';

interface Prop {
    children: React.ReactNode;
}

export default function CustomLayout({ children }: Prop) {
    const [sidebar, setSidebar] = useState<boolean>(false)
    return (
        <>
            <PortalWrapper>
                <Navbar setSidebar={setSidebar} />
                {sidebar ?
                    <Sidebar setSidebar={setSidebar} type='mobile' />
                    : null
                }
            </PortalWrapper>
            {children}
            <PortalWrapper>
                <ScrollToTop />
            </PortalWrapper>
            <Footer />
        </>
    )
}