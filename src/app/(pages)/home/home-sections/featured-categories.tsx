import { featuredCategories } from "@/constants";

export default function FeaturedCategories() {
    return (
        <section className="2xl:px-0 px-4 py-[50px]">
            <div className="2xl:container mx-auto container-fluid">
                <div className="w-full border border-gray
                grid lg:grid-cols-5 grid-cols-2 rounded-lg overflow-hidden"
                >
                    {featuredCategories.map((cat, index) => (
                        <div
                            key={index}
                            className={`
                            group
                            
                            hover:bg-[var(--c-blue)]
                            ${index > 4 ? "border-r" : "border-r border-b"}
                            flex flex-col items-center
                            p-6 gap-y-2 border-gray`}
                        >
                            <cat.icon
                                size={50}
                                className="group-hover:text-white"
                            />
                            <p className="group-hover:text-white
                            transition-colors duration-500 ease-linear"
                            >
                                {cat.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}