import { MailOpen, Send } from "lucide-react";

export default function NewsLetter() {
    return (
        <section className="bg-blue px-4 flex justify-between py-10">
            <div className="flex gap-x-2 text-white items-center">
                <Send size={40} />
                <p className="font-medium text-2xl w-1/2">Sign Up to Newsletter</p>
            </div>
            <p className="font-medium text-white">Get our emails for info on new items, sales and more.</p>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Your email address"
                    className="text-sm bg-white border border-blue rounded-lg px-4 py-2 h-full w-[30vw]"
                />
                <MailOpen className="absolute right-5 top-5 text-blue" />
            </div>
        </section>
    )
}