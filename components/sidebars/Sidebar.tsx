import MobileSidebar from "./mobile/mobileSidebar"

interface SidebarProps {
    type: "mobile" | "productPage" | "willDecide";
    setSidebar: (args: any) => void;
}

export default function Sidebar({
    type = "mobile",
    setSidebar,
}: SidebarProps) {
    return (
        type === "mobile" ?
            <MobileSidebar setSidebar={setSidebar} />
            :
            type === "productPage" ?
                <div className="">
                </div>
                :
                type === "willDecide" ?
                    <div className="">
                    </div>
                    :
                    "Select Type"


    )
}