import Prod1 from "@/public/assets/home/hero-section/products/handheld-camera.jpg"
import Prod2 from "@/public/assets/home/hero-section/products/ipad.jpg"
import Prod3 from "@/public/assets/home/hero-section/products/apple-series.jpg"
import {
    Gamepad,
    GitBranch,
    Headphones,
    Laptop2,
    Refrigerator,
    Smartphone,
    Speaker,
    Tv,
    WashingMachine,
    Webcam
} from "lucide-react"

// Importing Client Logos
import C1 from "@/public/assets/clients/Meta.png"
import C2 from "@/public/assets/clients/Tencent.png"
import C3 from "@/public/assets/clients/Amd.png"
import C4 from "@/public/assets/clients/Zoom.png"
import C5 from "@/public/assets/clients/OpenAI.png"

export const heroSliderData = [
    {
        image: "bg-headphones",
        title: "Be At One \n With Your Music",
        subTitle: "WH-1000XM4 Wireless Noise Cancelling",
        btnText: "Discover More",
        path: "/"
    },
    {
        image: "bg-smartwatch",
        title: "Flexible Dual Curved Display",
        subTitle: "Qualcomm Snapdragon Wear 3100",
        btnText: "Discover More",
        path: "/"
    },
    {
        image: "bg-wirelesscharger",
        title: "A Place For All Your Devices",
        subTitle: "Trio Wireless Charger With Magnetic Pad",
        btnText: "Discover More",
        path: "/"
    },
]

export const heroProducts = [
    {
        image: Prod1,
        title: "Osmo Pocket Series",
        btnText: "Show More",
        path: "/"
    },
    {
        image: Prod2,
        title: "Optimized For The 2-in-1 Laptop",
        btnText: "Show More",
        path: "/"
    },
    {
        image: Prod3,
        title: "Smart Band Pro Version",
        btnText: "Show More",
        path: "/"
    },
]

// Products Tab :Categories
export const productCategories = [
    "Show All",
    "Monitor",
    "Laptop",
    "Camera",
    "Headphone",
    "Speaker",
]

// Products Tab :Products
export const products = [
    {
        id: 1,
        discount: "-13%",
        category: "house-essentials",
        brand: "Kalles Shopify Niche Store",
        title: "Mosquito Killer Lamp",
        oldPrice: "Rs.8,700.00",
        price: "Rs.7,600.00",
        image: "bg-mosquito-killer"
    },
    {
        id: 2,
        discount: null,
        category: "house-essentials",
        brand: "kalles-niche",
        title: "Electric Egg Blender",
        oldPrice: null,
        price: "Rs.57,900.00",
        image: "bg-electronic-egg-whisk"
    },
    {
        id: 3,
        discount: "-28%",
        category: "house-essentials",
        brand: "Detu",
        title: "cymbal pendant",
        oldPrice: "Rs.10,200.00",
        price: "Rs.7,300.00",
        image: "bg-lamp"
    },
    {
        id: 4,
        discount: null,
        category: "laptop",
        brand: "Ysamsung",
        title: "NP730QED-KB2US Galaxy Book2",
        oldPrice: null,
        price: "Rs.115,800.00",
        image: "bg-laptop"
    },
    {
        id: 5,
        discount: null,
        category: "computer/accessories",
        brand: "Hi-Tech",
        title: "ST-MPHSDM/USB-C Mobile Pro Hub SD",
        oldPrice: null,
        price: "Rs.20,300.00",
        image: "bg-ssd"
    }
];

// Featured Categories
export const featuredCategories = [
    {
        icon: Smartphone,
        title: "Smartphone"
    },
    {
        icon: Webcam,
        title: "Cameras"
    },
    {
        icon: Tv,
        title: "Television"
    },
    {
        icon: Gamepad,
        title: "Gaming"
    },
    {
        icon: Speaker,
        title: "Speaker"
    },
    {
        icon: Laptop2,
        title: "Notebook"
    },
    {
        icon: Headphones,
        title: "Headphone"
    },
    {
        icon: WashingMachine,
        title: "Washer"
    },
    {
        icon: Refrigerator,
        title: "Refrigerator"
    },
    {
        icon: GitBranch,
        title: "Accessories"
    },
]

// Clients

export const clients = [
    C1, C2, C3, C4, C5
]