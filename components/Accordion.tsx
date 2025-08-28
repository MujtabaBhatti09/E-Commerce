import { Minus, Plus, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
    data: any[];
    className?: string;
    path?: string;
}

export default function Accordion({ data, className, path }: Props) {
    const [showMenu, setShowMenu] = useState(false);
    const [expandedSection, setExpandedSection] = useState("");
    const [accData, setAccData] = useState<any[]>([]);

    const toggleSection = (sectionTitle: string) => {
        setExpandedSection(prev => (prev === sectionTitle ? "" : sectionTitle));
    };

    useEffect(() => {
        if (!data) return;

        const formattedValues = data.map((item: any, i: number) => {
            const values = Object.values(item);
            return {
                key: `${i}`,
                image: values[1],
                title: values[2],
                content: Array(values[3]),
            };
        });
        setAccData(formattedValues);
    }, [data]);

    return (
        <div className={`space-y-2 ${className}`}>
            {accData.map((v) => (
                <div onClick={() => toggleSection(v.title)} key={v.key} className="cursor-pointer bg-white p-4 space-y-1 rounded-lg">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-x-1">
                            {v.image !== null && <Image
                                alt="PKR"
                                src={v.image}
                                className="object-cover h-5 w-5"
                            />}
                            <p
                                className="text-left text-sm font-medium w-[95%]"
                            >
                                {v.title}
                            </p>
                        </div>
                        <AnimatePresence>
                            {expandedSection === v.title ?
                                <motion.div
                                    initial={{ rotate: 45, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 100 }}
                                    exit={{ rotate: 45, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "linear" }}
                                >
                                    <Minus />
                                </motion.div>
                                :
                                <motion.div
                                    initial={{ rotate: 0, opacity: 100 }}
                                    animate={{ rotate: 45, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "linear" }}
                                >
                                    <Plus />
                                </motion.div>
                            }
                        </AnimatePresence>
                    </div>
                    <AnimatePresence mode="sync">
                        {expandedSection === v.title && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "fit-content", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2, ease: "linear" }}
                                className="cursor-pointer flex overflow-hidden px-4 divide-y"
                            >
                                {v.content.map((content: any, index: number) => (
                                    <Link
                                        key={index}
                                        href={content.path}
                                        className="text-xs text-gray"
                                    >
                                        {content.childItem}
                                    </Link>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))
            }
        </div >
    );
}
