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

const slugProductss: any = {
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

slugProductss["Show All"] = [
    ...slugProductss.Monitor,
    ...slugProductss.Laptop,
    ...slugProductss.Camera,
    ...slugProductss.Headphone,
    ...slugProductss.Speaker,
];

export default slugProductss

export const data = {
    electronics: [
        { id: 1, name: "Smartphone X Pro", price: 999, brand: "TechCorp", slugPath: "smartphone-x-pro" },
        { id: 2, name: "Laptop Air 15", price: 1299, brand: "CompuTech", slugPath: "laptop-air-15" },
        { id: 3, name: "Wireless Earbuds Z", price: 199, brand: "SoundMax", slugPath: "wireless-earbuds-z" },
        { id: 4, name: "4K Smart TV 55", price: 799, brand: "ViewPro", slugPath: "4k-smart-tv-55" },
        { id: 5, name: "Gaming Console OneX", price: 499, brand: "GameStar", slugPath: "gaming-console-onex" },
        { id: 6, name: "Bluetooth Speaker Mini", price: 59, brand: "BeatBox", slugPath: "bluetooth-speaker-mini" },
        { id: 7, name: "Smartwatch Fit 2", price: 299, brand: "WearTech", slugPath: "smartwatch-fit-2" },
        { id: 8, name: "Digital Camera S300", price: 650, brand: "PhotoSnap", slugPath: "digital-camera-s300" },
        { id: 9, name: "Drone Explorer X", price: 899, brand: "SkyHigh", slugPath: "drone-explorer-x" },
        { id: 10, name: "VR Headset Ultra", price: 349, brand: "ImmersiTech", slugPath: "vr-headset-ultra" }
    ],

    clothing: [
        { id: 1, name: "Men's Casual Shirt", price: 39, brand: "ClothHouse", sizes: ["S", "M", "L", "XL", "2XL"], slugPath: "mens-casual-shirt" },
        { id: 2, name: "Women's Summer Dress", price: 59, brand: "Fashionista", sizes: ["S", "M", "L", "XL", "2XL"], slugPath: "womens-summer-dress" },
        { id: 3, name: "Unisex Hoodie Classic", price: 49, brand: "UrbanWear", sizes: ["S", "M", "L", "XL", "2XL"], slugPath: "unisex-hoodie-classic" },
        { id: 4, name: "Men's Jeans Slim Fit", price: 69, brand: "DenimPro", sizes: ["S", "M", "L", "XL", "2XL"], slugPath: "mens-jeans-slim-fit" },
        { id: 5, name: "Women's Jacket Winter", price: 120, brand: "CozyWear", sizes: ["S", "M", "L", "XL", "2XL"], slugPath: "womens-jacket-winter" },
        { id: 6, name: "Men's Polo T-Shirt", price: 29, brand: "StyleHub", sizes: ["S", "M", "L", "XL", "2XL"], slugPath: "mens-polo-t-shirt" },
        { id: 7, name: "Women's Leggings Sport", price: 35, brand: "FitFlex", sizes: ["S", "M", "L", "XL", "2XL"], slugPath: "womens-leggings-sport" },
        { id: 8, name: "Unisex Sweatpants", price: 45, brand: "ComfortWear", sizes: ["S", "M", "L", "XL", "2XL"], slugPath: "unisex-sweatpants" },
        { id: 9, name: "Men's Leather Jacket", price: 199, brand: "RiderGear", sizes: ["S", "M", "L", "XL", "2XL"], slugPath: "mens-leather-jacket" },
        { id: 10, name: "Women's Blouse Chic", price: 55, brand: "TrendyFit", sizes: ["S", "M", "L", "XL", "2XL"], slugPath: "womens-blouse-chic" }
    ],

    furniture: [
        { id: 1, name: "Modern Sofa Set", price: 1200, brand: "HomeLux", slugPath: "modern-sofa-set" },
        { id: 2, name: "Dining Table 6-Seater", price: 850, brand: "FurniStyle", slugPath: "dining-table-6-seater" },
        { id: 3, name: "Office Chair Ergonomic", price: 199, brand: "ErgoFlex", slugPath: "office-chair-ergonomic" },
        { id: 4, name: "Wooden Bed Frame Queen", price: 700, brand: "SleepWell", slugPath: "wooden-bed-frame-queen" },
        { id: 5, name: "Coffee Table Glass Top", price: 250, brand: "Decora", slugPath: "coffee-table-glass-top" },
        { id: 6, name: "Bookshelf Classic Oak", price: 330, brand: "WoodCraft", slugPath: "bookshelf-classic-oak" },
        { id: 7, name: "Wardrobe 3-Door", price: 600, brand: "ClosetPro", slugPath: "wardrobe-3-door" },
        { id: 8, name: "Recliner Chair Comfort", price: 450, brand: "Relaxo", slugPath: "recliner-chair-comfort" },
        { id: 9, name: "Study Desk Compact", price: 199, brand: "EduFurni", slugPath: "study-desk-compact" },
        { id: 10, name: "TV Stand Minimalist", price: 180, brand: "SpaceFit", slugPath: "tv-stand-minimalist" }
    ],

    books: [
        { id: 1, name: "The Lost Kingdom", author: "A. Writer", price: 15, slugPath: "the-lost-kingdom" },
        { id: 2, name: "Science for Everyone", author: "B. Smart", price: 25, slugPath: "science-for-everyone" },
        { id: 3, name: "Cooking Made Easy", author: "C. Chef", price: 20, slugPath: "cooking-made-easy" },
        { id: 4, name: "History of Civilizations", author: "D. Historian", price: 30, slugPath: "history-of-civilizations" },
        { id: 5, name: "Learn JavaScript", author: "E. Coder", price: 40, slugPath: "learn-javascript" },
        { id: 6, name: "Mystery of the Ocean", author: "F. Explorer", price: 18, slugPath: "mystery-of-the-ocean" },
        { id: 7, name: "Mindfulness Daily", author: "G. Guru", price: 22, slugPath: "mindfulness-daily" },
        { id: 8, name: "Business Growth Hacks", author: "H. Entrepreneur", price: 35, slugPath: "business-growth-hacks" },
        { id: 9, name: "Children's Fairy Tales", author: "I. Storyteller", price: 12, slugPath: "childrens-fairy-tales" },
        { id: 10, name: "Space Exploration 2100", author: "J. Astronaut", price: 28, slugPath: "space-exploration-2100" }
    ],

    toys: [
        { id: 1, name: "RC Car Thunder", price: 60, brand: "ToyFun", slugPath: "rc-car-thunder" },
        { id: 2, name: "Lego Building Set 500", price: 80, brand: "BlockMaster", slugPath: "lego-building-set-500" },
        { id: 3, name: "Doll House Deluxe", price: 100, brand: "PlayHouse", slugPath: "doll-house-deluxe" },
        { id: 4, name: "Action Figure HeroX", price: 25, brand: "HeroToys", slugPath: "action-figure-herox" },
        { id: 5, name: "Puzzle World Map", price: 20, brand: "EduToys", slugPath: "puzzle-world-map" },
        { id: 6, name: "Stuffed Bear Large", price: 35, brand: "CuddleToys", slugPath: "stuffed-bear-large" },
        { id: 7, name: "Toy Train Classic", price: 55, brand: "RailPlay", slugPath: "toy-train-classic" },
        { id: 8, name: "Board Game Strategy", price: 45, brand: "GameNight", slugPath: "board-game-strategy" },
        { id: 9, name: "Water Gun SuperSoak", price: 30, brand: "FunSplash", slugPath: "water-gun-supersoak" },
        { id: 10, name: "Kite Rainbow", price: 15, brand: "SkyPlay", slugPath: "kite-rainbow" }
    ],

    beauty: [
        { id: 1, name: "Lipstick Matte Red", price: 18, brand: "Glamour", slugPath: "lipstick-matte-red" },
        { id: 2, name: "Foundation Smooth Beige", price: 25, brand: "GlowUp", slugPath: "foundation-smooth-beige" },
        { id: 3, name: "Mascara Volume Plus", price: 20, brand: "LashPro", slugPath: "mascara-volume-plus" },
        { id: 4, name: "Perfume Rose Essence", price: 55, brand: "AromaLux", slugPath: "perfume-rose-essence" },
        { id: 5, name: "Face Cream Hydrating", price: 30, brand: "SkinCareX", slugPath: "face-cream-hydrating" },
        { id: 6, name: "Nail Polish Glossy Pink", price: 12, brand: "NailArt", slugPath: "nail-polish-glossy-pink" },
        { id: 7, name: "Shampoo Herbal Fresh", price: 22, brand: "HairCare", slugPath: "shampoo-herbal-fresh" },
        { id: 8, name: "Conditioner Silk Touch", price: 24, brand: "SmoothLocks", slugPath: "conditioner-silk-touch" },
        { id: 9, name: "Body Lotion Aloe Vera", price: 19, brand: "CarePlus", slugPath: "body-lotion-aloe-vera" },
        { id: 10, name: "Sunscreen SPF 50", price: 28, brand: "SunSafe", slugPath: "sunscreen-spf-50" }
    ]
};

export const slugProducts: any = {};

Object.values(data).flat().forEach((product: any) => {
    console.log(product)
    slugProducts[product.slugPath] = product;
});