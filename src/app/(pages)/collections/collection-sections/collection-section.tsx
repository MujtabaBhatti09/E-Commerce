import CollectionCard from "@/components/CollectionCard";
import Container from "@/components/Container";
import { collectionData } from "@/constants";

export default function CollectionSection() {
    return (
        <>
            <section className="py-[50px]">
                <Container>
                    <div className="grid md:grid-cols-3 grid-cols-2 gap-8 px-4">
                        {collectionData.map((col, index) => (
                            <CollectionCard
                                {...col}
                                key={index}
                                alt={`Collection-${index}`}
                            />
                        ))}
                    </div>
                </Container>
            </section>
        </>
    )
}