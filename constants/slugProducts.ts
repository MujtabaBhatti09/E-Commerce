import BgMosquito from "@/public/assets/home/products/mosquito-killer.png"
import HoverBgMosquito from "@/public/assets/home/products/hover-mosquito-killer.png"
import BgEggWhisk from "@/public/assets/home/products/egg-whisk.png"
import HoverBgEggWhisk from "@/public/assets/home/products/hover-egg-whisk.png"
import BgLamp from "@/public/assets/home/products/lamp.png"
import HoverBgLamp from "@/public/assets/home/products/hover-lamp.png"
import BgLaptop from "@/public/assets/home/products/laptop.png"
import BgSSD from "@/public/assets/home/products/ssd.png"
import HoverBgSSD from "@/public/assets/home/products/hover-ssd.png"

export const productImages = [
    BgMosquito,
    BgEggWhisk,
    BgLamp,
    BgLaptop,
    BgSSD
]

const slugProducts: any = {
    "Show All": [],
    Monitor: [
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
    ],
    Laptop: [
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
    ],
    Camera: [
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
    ],
    Headphone: [
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
    ],
    Speaker: [
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
    ],
}

slugProducts["Show All"] = [
    ...slugProducts.Monitor,
    ...slugProducts.Laptop,
    ...slugProducts.Camera,
    ...slugProducts.Headphone,
    ...slugProducts.Speaker,
];

export default slugProducts