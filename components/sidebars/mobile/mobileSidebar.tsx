import { useState } from "react";
import Button from "@/components/Button";
import { motion, AnimatePresence } from "framer-motion";
import { SidebarCategories, SidebarMenu } from "@/constants/nav-items";
import Accordion from "@/components/Accordion";

interface MobileSidebarProps {
    setSidebar: (args: any) => void;
}

export default function MobileSidebar({
    setSidebar
}: MobileSidebarProps) {
    const [type, setType] = useState<string>("Menu")
    return (
        <div
            onClick={() => setSidebar(false)}
            className="fixed inset-0 z-50
        h-full w-full bg-black/50"
        >
            <AnimatePresence mode="sync">
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 100 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "linear" }}
                    className={`
                        fixed right-0 top-0 overflow-y-auto
                        md:w-1/3 w-10/12 bg-white z-50 h-full`}
                >
                    <div className="flex">
                        <div className="flex-1">
                            <Button
                                hoverColor="!bg-transparent"
                                variant="ghost"
                                size="lg"
                                className={`${type == "Menu" ? "!bg-[rgba(140,140,140,0.2)]" : "!bg-[#f5f5f5]"}
                            w-full border-0 !rounded-none !text-xs uppercase !py-5
                            `}
                                onClick={() => setType("Menu")}
                            >
                                Menu
                            </Button>
                            <div className={`w-full h-0.5 ${type === "Menu" ? "bg-blue" : "bg-gray"}`} />
                        </div>
                        <div className="flex-1">
                            <Button
                                hoverColor="!bg-transparent"
                                variant="ghost"
                                size="lg"
                                className={`${type == "Categories" ? "!bg-[rgba(140,140,140,0.2)]" : "!bg-[#f5f5f5]"}
                            w-full border-0 !rounded-none !text-xs uppercase !py-5
                            `}
                                onClick={() => setType("Categories")}
                            >
                                Categories
                            </Button>
                            <div className={`w-full h-0.5 ${type === "Categories" ? "bg-blue" : "bg-gray"}`} />
                        </div>
                    </div>
                    {
                        type === "Menu" ?
                            <MenuType />
                            :
                            type === "Categories" ?
                                <CategoryType />
                                : null
                    }
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

const MenuType = () => (
    <div className="grid place-content-center h-full text-center">
        <p className="text-xl font-medium text-red-500">
            Under Developemnt
            <br />
            <span className="text-blue text-base">
                Check Categories
            </span>
        </p>
    </div>
    // SidebarMenu.map((menu, index) => (
    //     menu.type === "acc" ?
    //         <Accordion key={index} data={[menu]} />
    //         :
    //         menu.type === "none" ?
    //             <div
    //                 key={index}
    //                 className="flex items-center gap-x-1"
    //             >
    //                 <span>
    //                     {menu.icon && <menu.icon />}
    //                     <p className="text-sm text-black">{menu.title}</p>
    //                 </span>
    //             </div>
    //             : menu.type === "none" && menu.childItems ?
    //                 <div
    //                     key={index}
    //                     className="space-y-4"
    //                 >
    //                     <p className="text-sm text-black">{menu.title}</p>
    //                     <div className="space-y-2">
    //                         {menu.childItems.map((child: any, index: number) => (
    //                             <div className="flex items-center gap-x-1">
    //                                 {child.icon && <child.icon size={18} />}
    //                                 <p
    //                                     key={index}
    //                                     className="text-xs text-black"
    //                                 >
    //                                     {child?.item}
    //                                 </p>
    //                             </div>
    //                         ))}
    //                     </div>

    //                 </div>
    //                 : null
    // ))
)

const CategoryType = () => (
    <div>
        {SidebarCategories.map((category, index) => (
            <div
                key={index}
                className="flex items-center py-2.5 px-4 border border-b border-gray"
            >
                <p className="text-sm text-black">{category.title}</p>
            </div>
        ))}
    </div>
)