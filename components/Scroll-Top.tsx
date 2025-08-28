"use client"

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTop() {
    const [visible, setVisible] = useState<boolean>(false);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 400) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    return (
        <>
            <div
                onClick={handleScrollToTop}
                className={`
                    cursor-pointer fixed right-10 group bg-[#ddddd5]
                    p-0.5 rounded flex items-center justify-center bottom-14
                    ${visible ? "translate-x-0 opacity-100" : "opacity-0 translate-x-3/4"}
                    transition-all duration-500 z-50`}
            >
                <div className="
                rounded-xs bg-white p-3
                relative
                ">
                    <ChevronUp
                        size={20}
                        strokeWidth={1.3}
                        className="
                        group-hover:text-white !text-black
                        h-fill w-full
                        group-hover:translate-y-full group-hover:absolute
                        transition-colors duration-500"
                    />
                    <ChevronUp
                        size={20}
                        strokeWidth={1.3}
                        className="
                        group-hover:text-white !text-black hidden
                        group-hover:translate-y-full group-hover:absolute
                        transition-colors duration-500"
                    />
                </div>
            </div>
        </>
    )
}