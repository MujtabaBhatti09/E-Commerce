// import { ChevronRight } from "lucide-react";

// interface Props {
//     className?: string
//     text: string;
//     variant?: "outline" | "fill" | "ghost";
//     icon?: React.ReactNode;
//     hover?: string;
// }

// export default function Button({ className,
//     text,
//     variant = "fill",
//     hover,
//     icon
// }: Props) {
//     return (
//         <button className={`
//             ${variant == "fill" ? `bg-blue`
//                 :
//                 variant == "outline" ? `border-blue`
//                     :
//                     variant == "ghost" ? `bg-transparent`
//                         :
//                         ""
//             }
//             ${hover && `hover:bg-[${hover}]`}
//             ${className} border
//             focus:outline-0
//             text-white
//             cursor-pointer
//             p-4 rounded-lg
//             trasnition-all duration-200
//             flex gap-x-1 items-center
//             `}
//         >
//             <p className="font-medium text-sm">
//                 {text}
//             </p>
//             {icon}
//             {/* <ChevronRight className="text-white" size={20} /> */}
//         </button>

//     )
// }

import { ChevronRight, Loader2 } from "lucide-react";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Button text content
     */
    children?: React.ReactNode;
    
    /**
     * Button visual style variant
     */
    variant?: "fill" | "outline" | "ghost" | "destructive" | "secondary";
    
    /**
     * Button size
     */
    size?: "sm" | "md" | "lg" | "xl";
    
    /**
     * Icon to display (left side by default)
     */
    icon?: React.ReactNode;
    
    /**
     * Icon position
     */
    iconPosition?: "left" | "right";
    
    /**
     * Loading state
     */
    loading?: boolean;
    
    /**
     * Full width button
     */
    fullWidth?: boolean;
    
    /**
     * Custom hover color (use Tailwind classes)
     */
    hoverColor?: string;
    
    /**
     * Button shape
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    
    /**
     * Show default chevron right icon
     */
    showChevron?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    children,
    variant = "fill",
    size = "md",
    icon,
    iconPosition = "right",
    loading = false,
    fullWidth = false,
    hoverColor,
    rounded = "md",
    showChevron = false,
    className = "",
    disabled,
    ...props
}, ref) => {
    
    // Base styles
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    
    // Variant styles
    const variantStyles = {
        fill: "bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 focus:ring-blue-500",
        outline: "bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50 focus:ring-blue-500",
        ghost: "bg-transparent text-gray-700 border border-transparent hover:bg-gray-100 focus:ring-gray-500",
        destructive: "bg-red-600 text-white border border-red-600 hover:bg-red-700 focus:ring-red-500",
        secondary: "bg-gray-100 text-gray-900 border border-gray-300 hover:bg-gray-200 focus:ring-gray-500"
    };
    
    // Size styles
    const sizeStyles = {
        sm: "px-3 py-1.5 text-sm gap-1.5",
        md: "px-4 py-2 text-sm gap-2",
        lg: "px-6 py-3 text-base gap-2",
        xl: "px-8 py-4 text-lg gap-3"
    };
    
    // Rounded styles
    const roundedStyles = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
    };
    
    // Width styles
    const widthStyles = fullWidth ? "w-full" : "w-auto";
    
    // Custom hover color (if provided)
    const customHover = hoverColor ? `hover:${hoverColor}` : "";
    
    // Combine all styles
    const buttonClasses = [
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        roundedStyles[rounded],
        widthStyles,
        customHover,
        className
    ].filter(Boolean).join(" ");
    
    // Handle icon rendering
    const renderIcon = () => {
        if (loading) {
            return <Loader2 className="animate-spin" size={16} />;
        }
        
        if (showChevron) {
            return <ChevronRight size={16} />;
        }
        
        return icon;
    };
    
    // Determine if we should show icon on left or right
    const leftIcon = iconPosition === "left" ? renderIcon() : null;
    const rightIcon = iconPosition === "right" ? renderIcon() : showChevron ? <ChevronRight size={16} /> : null;
    
    return (
        <button
            ref={ref}
            className={buttonClasses}
            disabled={disabled || loading}
            {...props}
        >
            {leftIcon}
            {children && (
                <span className={loading ? "opacity-0" : ""}>
                    {children}
                </span>
            )}
            {rightIcon}
            
            {/* Loading text overlay */}
            {loading && (
                <span className="absolute">
                    <Loader2 className="animate-spin" size={16} />
                </span>
            )}
        </button>
    );
});

Button.displayName = "Button";

export default Button;