import {
    Camera,
    Cpu,
    Headphones,
    Heart,
    LayoutGrid,
    Menu,
    Monitor,
    Phone,
    Printer,
    Search,
    ShoppingCart,
    Tv,
    User
} from "lucide-react"

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