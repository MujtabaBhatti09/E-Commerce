import { Minus, Plus } from "lucide-react";

interface IncrementComponentProps {
    quantity?: number;
    onChange?: (parameter: any) => void;
    disable?: boolean;
}

export default function IncrementQuantity({
    quantity,
    onChange,
    disable
}: IncrementComponentProps) {

    const handleIncrement = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (onChange && quantity) onChange(quantity + 1)
    }

    const handleDecrement = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (onChange && quantity) if (quantity > 0) onChange(quantity - 1)
    }

    return (
        <div className="bg-white border border-black
        flex justify-between p-2 rounded-full"
        >
            <button
                disabled={disable}
                onClick={handleDecrement}
                className=""
            >
                <Minus className="text-black" size={20} />
            </button>
            <p className="px-2 text-black">{quantity}</p>
            <button
                disabled={disable}
                onClick={handleIncrement}
                className=""
            >
                <Plus className="text-black" size={20} />
            </button>
        </div>
    )
}
