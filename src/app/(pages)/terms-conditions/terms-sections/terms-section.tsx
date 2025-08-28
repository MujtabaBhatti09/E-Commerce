import Container from "@/components/Container";
import { termsAndConditions } from "@/constants/termsAndReturn";

export default function TermSection() {
    return (
        <section className="py-[50px]">
            <Container>
                <div className="space-y-4 md:px-8">
                    {termsAndConditions.map((term, index) => (
                        <div
                            key={index}
                            className="space-y-2"
                        >
                            <p className="font-semibold text-lg">{term.title}</p>
                            {term.content}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}