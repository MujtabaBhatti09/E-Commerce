import { ChevronRight } from "lucide-react";

interface Props {
    className?: string
    text: string;
    variant?: "outline" | "fill" | "ghost";
    icon?: React.ReactNode;
    hover?: string;
}

export default function Button({ className,
    text,
    variant = "fill",
    hover,
    icon
}: Props) {
    return (
        <button className={`
            ${variant == "fill" ? `bg-blue`
                :
                variant == "outline" ? `border-blue`
                    :
                    variant == "ghost" ? `bg-transparent`
                        :
                        ""
            }
            ${hover && `hover:bg[${hover}]`}
            ${className}
            focus:outline-0
            text-white
            cursor-pointer
            p-4 rounded-lg
            flex gap-x-1 items-center
            `}
        >
            <p className="font-medium text-sm">
                {text}
            </p>
            {icon}
            {/* <ChevronRight className="text-white" size={20} /> */}
        </button>

    )
}