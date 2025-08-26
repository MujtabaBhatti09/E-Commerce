interface InputProps {
    label: string;
    labelClassName?: string;
    className?: string;
    type: string;
    inputClassName?: string;
    placeholder?: string;
    onChange?: (text: any) => void;
    required?: boolean;
    disabled?: boolean;
    maxLength?: number;
    minLength?: number;
}

export default function InputField({
    label,
    labelClassName,
    className,
    type = "text",
    inputClassName,
    placeholder,
    onChange,
    required,
    disabled,
    maxLength,
    minLength
}: InputProps) {
    return (
        <>
            <div className={`${className} space-y-2`}>
                <div className="flex gap-x-2 items-center">
                    <label
                        className={`text-gray ${labelClassName}`}
                        htmlFor={label}>
                        {label}
                    </label>
                    {required && <p className={`text-gray ${labelClassName}`}>(required)</p>}
                </div>
                <input
                    type={type}
                    onChange={onChange}
                    required={required}
                    disabled={disabled}
                    maxLength={maxLength}
                    minLength={minLength}
                    placeholder={placeholder}
                    className={`${inputClassName ?
                        inputClassName
                        :
                        `text-gray text-sm px-3 py-1.5
                        border border-gray w-full
                        focus:outline-0`
                        }
                    `}
                />
            </div>
        </>
    )
}