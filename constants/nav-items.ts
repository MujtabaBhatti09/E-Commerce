import {
    Camera,
    Cpu,
    Headphones,
    Heart,
    LayoutGrid,
    Mail,
    Menu,
    Monitor,
    Phone,
    Printer,
    Search,
    ShoppingCart,
    Tv,
    User
} from "lucide-react"
import PkSvg from "@/public/icon-svg/pk.svg"

export const searchNav = [
    {
        image: "",
        name: "NP730QED-KB2US Galaxy Book2",
        price: "Rs.115,700.00"
    },
    {
        image: "",
        name: "ST-MPHSDM/USB-C Mobile Pro Hub SD",
        price: "Rs.20,300.00"
    },
    {
        image: "",
        name: "PULSE 3D™ ANC Wireless Headset",
        price: "Rs.49,200.00"
    },
    {
        image: "",
        name: "USB-C Headphone Jack Adapter",
        price: "Rs.8,700.00"
    },
    {
        image: "",
        name: "Osmo Action 3 Standard Combo",
        price: "Rs.8,700.00"
    }
]

export const navItems = [
    {
        title: "All Categories",
        icon: Menu,
        childItems: [
            {
                icon: Phone,
                title: "Mobile & tablets"
            },
            {
                icon: Camera,
                title: "Cameras"
            },
            {
                icon: Monitor,
                title: "Computer & Laptops"
            },
            {
                icon: Printer,
                title: "Printer & Ink"
            },
            {
                icon: Tv,
                title: "TV & Audio"
            },
            {
                icon: Cpu,
                title: "Software"
            },
            {
                icon: Headphones,
                title: "Headphone"
            },
        ]
    },
    {
        title: "Demo",
    },
    {
        title: "Shop",
    },
    {
        title: "Products",
    },
    {
        title: "Pages",
    },
    {
        title: "Lookbooks",
    },
    {
        title: "Buy Theme",
    }
]

// Mobile View Botton Bar Items
export const bottomItem = [
    {
        icon: LayoutGrid,
        name: "Shop"
    },
    {
        icon: Heart,
        name: "Wishlist"
    },
    {
        icon: ShoppingCart,
        name: "Cart"
    },
    {
        icon: User,
        name: "Account"
    },
    {
        icon: Search,
        name: "Search"
    },
]

export const SidebarMenu = [
    {
        type: "acc",
        image: null,
        title: "Homepage1",
        childItems: [
            {
                childItem: "Demo1",
                path: "/"
            },
            {
                childItem: "Demo2",
                path: "/"
            },
            {
                childItem: "Demo3",
                path: "/"
            },
        ]
    },
    {
        type: "acc",
        image: null,
        title: "Homepage2",
        childItems: [
            {
                childItem: "Demo1",
                path: "/"
            },
            {
                childItem: "Demo2",
                path: "/"
            },
            {
                childItem: "Demo3",
                path: "/"
            },
        ]
    },
    {
        type: "acc",
        image: null,
        title: "Shop",
        childItems: [
            {
                childItem: "Demo1",
                path: "/"
            },
            {
                childItem: "Demo2",
                path: "/"
            },
            {
                childItem: "Demo3",
                path: "/"
            },
        ]
    },
    {
        type: "acc",
        image: null,
        title: "Product",
        childItems: [
            {
                childItem: "Demo1",
                path: "/"
            },
            {
                childItem: "Demo2",
                path: "/"
            },
            {
                childItem: "Demo3",
                path: "/"
            },
        ]
    },
    {
        type: "acc",
        image: null,
        title: "Portfolio",
        childItems: [
            {
                childItem: "Demo1",
                path: "/"
            },
            {
                childItem: "Demo2",
                path: "/"
            },
            {
                childItem: "Demo3",
                path: "/"
            },
        ]
    },
    {
        type: "acc",
        image: null,
        title: "Lookbook",
        childItems: [
            {
                childItem: "Demo1",
                path: "/"
            },
            {
                childItem: "Demo2",
                path: "/"
            },
            {
                childItem: "Demo3",
                path: "/"
            },
        ]
    },
    {
        type: "acc",
        image: null,
        title: "Blog",
        childItems: [
            {
                childItem: "Demo1",
                path: "/"
            },
            {
                childItem: "Demo2",
                path: "/"
            },
            {
                childItem: "Demo3",
                path: "/"
            },
        ]
    },
    {
        type: "acc",
        image: null,
        title: "Buy Theme",
        childItems: [
            {
                childItem: "Demo1",
                path: "/"
            },
            {
                childItem: "Demo2",
                path: "/"
            },
            {
                childItem: "Demo3",
                path: "/"
            },
        ]
    },
    {
        type: "none",
        icon: Heart,
        title: "Buy Theme"
    },
    {
        type: "none",
        icon: Search,
        title: "Buy Theme"
    },
    {
        type: "none",
        icon: User,
        title: "Buy Theme"
    },
    {
        type: "none",
        title: "Need Help?",
        childItems: [
            {
                icon: Phone,
                item: "+92 3133589623"
            },
            {
                icon: Mail,
                item: "+92 3133589623"
            },
        ]
    },
    {
        type: "acc",
        image: null,
        title: "English",
        childItems: [
            {
                childItem: "Demo1",
                path: "/"
            },
            {
                childItem: "Demo2",
                path: "/"
            },
            {
                childItem: "Demo3",
                path: "/"
            },
        ]
    },
    {
        type: "acc",
        image: PkSvg,
        title: "PKR",
        childItems: [
            {
                childItem: "Demo1",
                path: "/"
            },
            {
                childItem: "Demo2",
                path: "/"
            },
            {
                childItem: "Demo3",
                path: "/"
            },
        ]
    },
]

export const SidebarCategories = [
    {
        icon: "",
        title: "Women's Clothing"
    },
    {
        icon: "",
        title: "Men's Clothing"
    },
    {
        icon: "",
        title: "Watches"
    },
    {
        icon: "",
        title: "Acessories"
    },
    {
        icon: "",
        title: "Electric"
    },
    {
        icon: "",
        title: "Shoes"
    },
    {
        icon: "",
        title: "Jewellery"
    },
    {
        icon: "",
        title: "Toys, Kids, & Baby"
    },
    {
        icon: "",
        title: "Decor"
    },
]