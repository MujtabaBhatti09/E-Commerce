import { productPageCategories } from "@/constants";
import { ParamValue } from "next/dist/server/request/params";

interface Prop {
    param?: string | ParamValue;
}

export default function ProductCategorySection({ param }: Prop) {
    return (
        <div className="bg-white flex items-center justify-center">
            {productPageCategories.map((cat, index) => (
                <p
                    key={index}
                    className={`
                        ${param == cat ? "text-cyan-500" : "text-black"}
                        text-sm px-6 py-2.5 cursor-pointer hover:text-cyan-500
                        transition-colors duration-200`
                    }
                >
                    {cat}
                </p>
            ))}
        </div>
    )
}