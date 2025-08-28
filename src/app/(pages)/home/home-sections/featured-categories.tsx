import Container from "@/components/Container";
import { featuredCategories } from "@/constants";

export default function FeaturedCategories() {
    return (
        <section className="py-[50px]">
            <Container>
                <div className="w-full border border-gray cursor-default
                grid lg:grid-cols-5 grid-cols-2 rounded-lg overflow-hidden"
                >
                    {featuredCategories.map((cat, index) => (
                        <div
                            key={index}
                            className={`
                            group
                            hover:bg-[var(--c-blue)]
                            transition-colors duration-300
                            border-r border-b
                            [&:nth-child(5n)]:border-r-0
                            [&:nth-last-child(-n+5)]:border-b-0
                            flex flex-col items-center
                            p-6 gap-y-2 border-gray`}
                        >
                            <cat.icon
                                size={50}
                                className="group-hover:text-white
                                transition-colors duration-300 ease-linear"
                            />
                            <p className="group-hover:text-white
                            transition-colors duration-300 ease-linear"
                            >
                                {cat.title}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section >
    )
}