import { clients } from "@/constants";
import Image from "next/image";

export default function Clients() {
    return (
        <div className="2xl:container mx-auto container-fluid flex items-center gap-x-6 px-4 py-[50px]">
            {clients.map((client, index) => (
                <Image key={index} className="object-cover h-full w-full" src={client} alt={`Client${index}`} />
            ))}
        </div>
    )
}