import Container from "@/components/Container";
import TeamCard from "@/components/TeamCard";
import { teamMembers } from "@/constants";

export default function TeamSection() {
    return (
        <>
            <section className="py-[50px]">
                <Container>
                    <div className="flex justify-center gap-x-8 flex-wrap">
                        {teamMembers.map((team, index) => (
                            <TeamCard
                                {...team}
                                key={index}
                                alt={`Team-${index}`}
                            />
                        ))}
                    </div>
                </Container>
            </section>
        </>
    )
}