import Container from "@/components/Container";
import { MailOpen, Send } from "lucide-react";

export default function NewsLetter() {
    return (
        <section className="bg-blue py-10">
            <Container>
                <div className="
                    grid md:grid-cols-[1fr_auto_1fr] sm:grid-cols-2
                    grid-cols-1 md:gap-0 sm:gap-4 gap-8 justify-between items-center"
                >

                    <div className="flex gap-x-2 text-white items-center">
                        <Send size={40} />
                        <p className="font-medium text-2xl w-1/2">Sign Up to Newsletter</p>
                    </div>
                    <p className="font-medium text-white">Get our emails for info on new items, sales and more.</p>
                    <div className="relative md:justify-self-end w-3/4">
                        <input
                            type="text"
                            placeholder="Your email address"
                            className="text-sm bg-white
                            border border-blue rounded-lg
                            p-4 h-full w-full"
                        />
                        <MailOpen className="absolute right-5 top-4 text-blue" />
                    </div>
                </div>

            </Container>
        </section>
    )
}