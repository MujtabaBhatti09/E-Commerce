import Container from "@/components/Container";
import { returnExchange } from "@/constants/termsAndReturn";

export default function ReturnSection() {
    return (
        <section className="py-[50px]">
            <Container>
                <div className="space-y-4 px-8">
                    {returnExchange.map((retEx, retIndex) => (
                        <div
                            key={retIndex}
                            className="space-y-4"
                        >
                            <p className={`
                            ${retEx.title == "RETURNS & EXCHANGES POLICY" ?
                                    "text-xl"
                                    :
                                    "text-lg"
                                } font-semibold`}
                            >
                                {retIndex + 1}. {retEx.title}
                            </p>
                            <div className="space-y-1">
                                {retEx?.content ?
                                    retEx.content
                                    :
                                    retEx.list.map((list, liIndex) => (
                                        <p
                                            key={liIndex}
                                            className="text-sm"
                                        >
                                            {retIndex + 1}.{liIndex + 1} {list}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}