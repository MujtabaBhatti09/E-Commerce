import Prod1 from "@/public/assets/home/hero-section/products/handheld-camera.jpg"
import Prod2 from "@/public/assets/home/hero-section/products/ipad.jpg"
import Prod3 from "@/public/assets/home/hero-section/products/apple-series.jpg"
import {
    Clock,
    Gamepad,
    GitBranch,
    Headphones,
    Home,
    Laptop2,
    Mail,
    Phone,
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

// Importing Client Logos
import Headphone from "@/public/assets/home/hero-section/Headphones.jpg"
import SmartWatch from "@/public/assets/home/hero-section/SmartWatch.jpg"
import WirelessCharger from "@/public/assets/home/hero-section/WirelessCharger.jpg"

export const heroSliderData = [
    {
        image: Headphone,
        title: "Be At One \n With Your Music",
        subTitle: "WH-1000XM4 Wireless Noise Cancelling",
        btnText: "Discover More",
        path: "/"
    },
    {
        image: SmartWatch,
        title: "Flexible Dual Curved Display",
        subTitle: "Qualcomm Snapdragon Wear 3100",
        btnText: "Discover More",
        path: "/"
    },
    {
        image: WirelessCharger,
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

// Products Tab :Categories
export const productPageCategories = [
    "Laptop",
    "Monitor",
    "Smartphones",
    "Smartwatch",
    "Speaker",
    "Electric",
    "Sale",
    "Headphone",
    "Cameras",
]

// export const products = [
//     // {
//     //     id: 1,
//     //     discount: "-10%",
//     //     category: "monitor",
//     //     brand: "Dell",
//     //     title: "Dell UltraSharp 27”",
//     //     oldPrice: "Rs.95,000.00",
//     //     price: "Rs.85,500.00",
//     //     image: "/assets/monitors/dell-ultrasharp.png",
//     //     hoverImage: "/assets/monitors/dell-ultrasharp-hover.png",
//     // },
//     // {
//     //     id: 2,
//     //     discount: "-7%",
//     //     category: "monitor",
//     //     brand: "Samsung",
//     //     title: "Samsung Odyssey G7 32” Curved",
//     //     oldPrice: "Rs.120,000.00",
//     //     price: "Rs.111,600.00",
//     //     image: "/assets/monitors/samsung-g7.png",
//     //     hoverImage: "/assets/monitors/samsung-g7-hover.png",
//     // },
//     // {
//     //     id: 3,
//     //     discount: "-5%",
//     //     category: "monitor",
//     //     brand: "LG",
//     //     title: "LG 4K UHD Monitor 27”",
//     //     oldPrice: "Rs.80,000.00",
//     //     price: "Rs.76,000.00",
//     //     image: "/assets/monitors/lg-4k.png",
//     //     hoverImage: "/assets/monitors/lg-4k-hover.png",
//     // },
//     // {
//     //     id: 4,
//     //     discount: "-12%",
//     //     category: "laptop",
//     //     brand: "Apple",
//     //     title: "MacBook Pro 14” M2",
//     //     oldPrice: "Rs.420,000.00",
//     //     price: "Rs.369,600.00",
//     //     image: "/assets/laptops/macbook-pro.png",
//     //     hoverImage: "/assets/laptops/macbook-pro-hover.png",
//     // },
//     // {
//     //     id: 5,
//     //     discount: "-15%",
//     //     category: "laptop",
//     //     brand: "HP",
//     //     title: "HP Spectre x360",
//     //     oldPrice: "Rs.250,000.00",
//     //     price: "Rs.212,500.00",
//     //     image: "/assets/laptops/hp-spectre.png",
//     //     hoverImage: "/assets/laptops/hp-spectre-hover.png",
//     // },
//     // {
//     //     id: 6,
//     //     discount: "-10%",
//     //     category: "laptop",
//     //     brand: "Lenovo",
//     //     title: "Lenovo ThinkPad X1 Carbon",
//     //     oldPrice: "Rs.280,000.00",
//     //     price: "Rs.252,000.00",
//     //     image: "/assets/laptops/thinkpad-x1.png",
//     //     hoverImage: "/assets/laptops/thinkpad-x1-hover.png",
//     // },
//     // {
//     //     id: 7,
//     //     discount: "-8%",
//     //     category: "camera",
//     //     brand: "Canon",
//     //     title: "Canon EOS 90D DSLR",
//     //     oldPrice: "Rs.280,000.00",
//     //     price: "Rs.257,600.00",
//     //     image: "/assets/cameras/canon-90d.png",
//     //     hoverImage: "/assets/cameras/canon-90d-hover.png",
//     // },
//     // {
//     //     id: 8,
//     //     discount: "-5%",
//     //     category: "camera",
//     //     brand: "Sony",
//     //     title: "Sony Alpha a7 III Mirrorless",
//     //     oldPrice: "Rs.350,000.00",
//     //     price: "Rs.332,500.00",
//     //     image: "/assets/cameras/sony-a7.png",
//     //     hoverImage: "/assets/cameras/sony-a7-hover.png",
//     // },
//     // {
//     //     id: 9,
//     //     discount: "-10%",
//     //     category: "camera",
//     //     brand: "Nikon",
//     //     title: "Nikon Z6 II",
//     //     oldPrice: "Rs.320,000.00",
//     //     price: "Rs.288,000.00",
//     //     image: "/assets/cameras/nikon-z6.png",
//     //     hoverImage: "/assets/cameras/nikon-z6-hover.png",
//     // },
//     // {
//     //     id: 10,
//     //     discount: "-20%",
//     //     category: "headphone",
//     //     brand: "Sony",
//     //     title: "Sony WH-1000XM5",
//     //     oldPrice: "Rs.95,000.00",
//     //     price: "Rs.76,000.00",
//     //     image: "/assets/headphones/sony-xm5.png",
//     //     hoverImage: "/assets/headphones/sony-xm5-hover.png",
//     // },
//     // {
//     //     id: 11,
//     //     discount: "-12%",
//     //     category: "headphone",
//     //     brand: "Bose",
//     //     title: "Bose QC 45",
//     //     oldPrice: "Rs.89,000.00",
//     //     price: "Rs.78,320.00",
//     //     image: "/assets/headphones/bose-qc45.png",
//     //     hoverImage: "/assets/headphones/bose-qc45-hover.png",
//     // },
//     // {
//     //     id: 12,
//     //     discount: "-10%",
//     //     category: "headphone",
//     //     brand: "Apple",
//     //     title: "AirPods Max",
//     //     oldPrice: "Rs.120,000.00",
//     //     price: "Rs.108,000.00",
//     //     image: "/assets/headphones/airpods-max.png",
//     //     hoverImage: "/assets/headphones/airpods-max-hover.png",
//     // },
//     //  {
//     //     id: 13,
//     //     discount: "-15%",
//     //     category: "speaker",
//     //     brand: "JBL",
//     //     title: "JBL Flip 6",
//     //     oldPrice: "Rs.28,000.00",
//     //     price: "Rs.23,800.00",
//     //     image: "/assets/speakers/jbl-flip6.png",
//     //     hoverImage: "/assets/speakers/jbl-flip6-hover.png",
//     // },
//     // {
//     //     id: 14,
//     //     discount: "-10%",
//     //     category: "speaker",
//     //     brand: "Sony",
//     //     title: "Sony SRS-XB43",
//     //     oldPrice: "Rs.42,000.00",
//     //     price: "Rs.37,800.00",
//     //     image: "/assets/speakers/sony-xb43.png",
//     //     hoverImage: "/assets/speakers/sony-xb43-hover.png",
//     // },
//     // {
//     //     id: 15,
//     //     discount: "-8%",
//     //     category: "speaker",
//     //     brand: "Bose",
//     //     title: "Bose SoundLink Flex",
//     //     oldPrice: "Rs.55,000.00",
//     //     price: "Rs.50,600.00",
//     // },
//     {
//         id: 16,
//         discount: "-13%",
//         category: "house-essentials",
//         brand: "Kalles Shopify Niche Store",
//         title: "Mosquito Killer Lamp",
//         oldPrice: "Rs.8,700.00",
//         price: "Rs.7,600.00",
//         image: BgMosquito,
//         hoverImage: HoverBgMosquito
//     },
//     {
//         id: 17,
//         discount: null,
//         category: "house-essentials",
//         brand: "kalles-niche",
//         title: "Electric Egg Blender",
//         oldPrice: null,
//         price: "Rs.57,900.00",
//         image: BgEggWhisk,
//         hoverImage: HoverBgEggWhisk
//     },
//     {
//         id: 18,
//         discount: "-28%",
//         category: "house-essentials",
//         brand: "Detu",
//         title: "cymbal pendant",
//         oldPrice: "Rs.10,200.00",
//         price: "Rs.7,300.00",
//         image: BgLamp,
//         hoverImage: HoverBgLamp
//     },
//     {
//         id: 19,
//         discount: null,
//         category: "laptop",
//         brand: "Ysamsung",
//         title: "NP730QED-KB2US Galaxy Book2",
//         oldPrice: null,
//         price: "Rs.115,800.00",
//         image: BgLaptop,
//         hoverImage: HoverBgSSD
//     },
//     {
//         id: 20,
//         discount: null,
//         category: "computer/accessories",
//         brand: "Hi-Tech",
//         title: "ST-MPHSDM/USB-C Mobile Pro Hub SD",
//         oldPrice: null,
//         price: "Rs.20,300.00",
//         image: BgSSD,
//         hoverImage: HoverBgSSD
//     },
// ];

export const monitors = [
    {
        id: 1,
        discount: "-10%",
        category: "monitor",
        brand: "Dell",
        title: "Dell UltraSharp 27”",
        oldPrice: "Rs.95,000.00",
        price: "Rs.85,500.00",
        image: "/assets/monitors/dell-ultrasharp.png",
        hoverImage: "/assets/monitors/dell-ultrasharp-hover.png",
    },
    {
        id: 2,
        discount: "-7%",
        category: "monitor",
        brand: "Samsung",
        title: "Samsung Odyssey G7 32” Curved",
        oldPrice: "Rs.120,000.00",
        price: "Rs.111,600.00",
        image: "/assets/monitors/samsung-g7.png",
        hoverImage: "/assets/monitors/samsung-g7-hover.png",
    },
    {
        id: 3,
        discount: "-5%",
        category: "monitor",
        brand: "LG",
        title: "LG 4K UHD Monitor 27”",
        oldPrice: "Rs.80,000.00",
        price: "Rs.76,000.00",
        image: "/assets/monitors/lg-4k.png",
        hoverImage: "/assets/monitors/lg-4k-hover.png",
    },
]


export const laptops = [
    {
        id: 4,
        discount: "-12%",
        category: "laptop",
        brand: "Apple",
        title: "MacBook Pro 14” M2",
        oldPrice: "Rs.420,000.00",
        price: "Rs.369,600.00",
        image: "/assets/laptops/macbook-pro.png",
        hoverImage: "/assets/laptops/macbook-pro-hover.png",
    },
    {
        id: 5,
        discount: "-15%",
        category: "laptop",
        brand: "HP",
        title: "HP Spectre x360",
        oldPrice: "Rs.250,000.00",
        price: "Rs.212,500.00",
        image: "/assets/laptops/hp-spectre.png",
        hoverImage: "/assets/laptops/hp-spectre-hover.png",
    },
    {
        id: 6,
        discount: "-10%",
        category: "laptop",
        brand: "Lenovo",
        title: "Lenovo ThinkPad X1 Carbon",
        oldPrice: "Rs.280,000.00",
        price: "Rs.252,000.00",
        image: "/assets/laptops/thinkpad-x1.png",
        hoverImage: "/assets/laptops/thinkpad-x1-hover.png",
    },
]

export const camera = [
    {
        id: 7,
        discount: "-8%",
        category: "camera",
        brand: "Canon",
        title: "Canon EOS 90D DSLR",
        oldPrice: "Rs.280,000.00",
        price: "Rs.257,600.00",
        image: "/assets/cameras/canon-90d.png",
        hoverImage: "/assets/cameras/canon-90d-hover.png",
    },
    {
        id: 8,
        discount: "-5%",
        category: "camera",
        brand: "Sony",
        title: "Sony Alpha a7 III Mirrorless",
        oldPrice: "Rs.350,000.00",
        price: "Rs.332,500.00",
        image: "/assets/cameras/sony-a7.png",
        hoverImage: "/assets/cameras/sony-a7-hover.png",
    },
    {
        id: 9,
        discount: "-10%",
        category: "camera",
        brand: "Nikon",
        title: "Nikon Z6 II",
        oldPrice: "Rs.320,000.00",
        price: "Rs.288,000.00",
        image: "/assets/cameras/nikon-z6.png",
        hoverImage: "/assets/cameras/nikon-z6-hover.png",
    },
]

export const headphone = [
    {
        id: 10,
        discount: "-20%",
        category: "headphone",
        brand: "Sony",
        title: "Sony WH-1000XM5",
        oldPrice: "Rs.95,000.00",
        price: "Rs.76,000.00",
        image: "/assets/headphones/sony-xm5.png",
        hoverImage: "/assets/headphones/sony-xm5-hover.png",
    },
    {
        id: 11,
        discount: "-12%",
        category: "headphone",
        brand: "Bose",
        title: "Bose QC 45",
        oldPrice: "Rs.89,000.00",
        price: "Rs.78,320.00",
        image: "/assets/headphones/bose-qc45.png",
        hoverImage: "/assets/headphones/bose-qc45-hover.png",
    },
    {
        id: 12,
        discount: "-10%",
        category: "headphone",
        brand: "Apple",
        title: "AirPods Max",
        oldPrice: "Rs.120,000.00",
        price: "Rs.108,000.00",
        image: "/assets/headphones/airpods-max.png",
        hoverImage: "/assets/headphones/airpods-max-hover.png",
    },
]

export const speaker = [
    {
        id: 13,
        discount: "-15%",
        category: "speaker",
        brand: "JBL",
        title: "JBL Flip 6",
        oldPrice: "Rs.28,000.00",
        price: "Rs.23,800.00",
        image: "/assets/speakers/jbl-flip6.png",
        hoverImage: "/assets/speakers/jbl-flip6-hover.png",
    },
    {
        id: 14,
        discount: "-10%",
        category: "speaker",
        brand: "Sony",
        title: "Sony SRS-XB43",
        oldPrice: "Rs.42,000.00",
        price: "Rs.37,800.00",
        image: "/assets/speakers/sony-xb43.png",
        hoverImage: "/assets/speakers/sony-xb43-hover.png",
    },
    {
        id: 15,
        discount: "-8%",
        category: "speaker",
        brand: "Bose",
        title: "Bose SoundLink Flex",
        oldPrice: "Rs.55,000.00",
        price: "Rs.50,600.00",
        image: "/assets/speakers/bose-flex.png",
        hoverImage: "/assets/speakers/bose-flex-hover.png",
    },
]

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

// About-us Page Story
export const aboutUsPage = [
    {
        title: "OUR MISSION",
        content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam."
    },
    {
        title: "OUR STORIES",
        content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam."
    },
    {
        title: "OUR APPROACH",
        content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam."
    },
    {
        title: "OUR PHILOSOPHY",
        content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam."
    },
]

// Team Members Section
import P1 from "@/public/assets/team/p1.jpg"
import P2 from "@/public/assets/team/p2.jpg"
import P3 from "@/public/assets/team/p3.jpg"

export const teamMembers = [
    {
        image: P1,
        name: "Lisa John",
        designation: "Fashion Designer"
    },
    {
        image: P2,
        name: "Jane Doe",
        designation: "Director"
    },
    {
        image: P3,
        name: "Cartherin Forres",
        designation: "Marketing Director"
    }
]

// Input Contact Form Data
export const formContact = [
    {
        label: "Your Name",
        required: true,
        type: "text",
    },
    {
        label: "Your Email",
        required: true,
        type: "text",
    },
    {
        label: "Your Phone Number",
        required: true,
        type: "text",
    },
    {
        label: "Your Message",
        required: true,
        type: "textarea",
    },
]

// Contact Information
export const contactInfo = [
    {
        icon: Home,
        address: "184 Main Rd E, St Albans Victoria 3021, Australia"
    },
    {
        icon: Phone,
        address: " 1800-123-222 / 1900-1570-230"
    },
    {
        icon: Mail,
        address: "contact@company.com"
    },
    {
        icon: Clock,
        address: "Everyday 9:00-17:00"
    },
]

// Collection Page Data
import CP1 from "@/public/assets/collection-page/1.jpg"
import CP2 from "@/public/assets/collection-page/2.jpg"
import CP3 from "@/public/assets/collection-page/3.jpg"
import CP4 from "@/public/assets/collection-page/4.jpg"
import CP5 from "@/public/assets/collection-page/5.jpg"
import CP6 from "@/public/assets/collection-page/6.jpg"

export const collectionData = [
    {
        image: CP1,
        collection: "Women"
    },
    {
        image: CP2,
        collection: "Men"
    },
    {
        image: CP3,
        collection: "Accessories"
    },
    {
        image: CP4,
        collection: "Footwear"
    },
    {
        image: CP5,
        collection: "Tops"
    },
    {
        image: CP6,
        collection: "Sale"
    },
]