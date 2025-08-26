import { aboutUsPage } from "@/constants";
import { libre } from "@/src/app/layout";

export default function GridSection() {
    return (
        <>
            <section className="py-[50px]">
                <div className="2xl:container mx-auto container-fluid 2xl:px-0 px-4 space-y-10 ">
                    <div className="grid grid-cols-2 gap-4">
                        {aboutUsPage.map((about, index) => (
                            <div
                                key={index}
                                className="space-y-4 py-4"
                            >
                                <h5 className="text-black text-xl font-medium">
                                    {about.title}
                                </h5>
                                <p className="text-gray-400 text-sm
                                whitespace-break-spaces"
                                >
                                    {about.content}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-[rgba(135,135,135,0.1)] py-8 px-14">
                        <em className={`${libre.className} whitespace-break-spaces text-gray text-sm`}>
                            I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Quis nostrum exercitationem ullam.
                        </em>
                    </div>
                </div>
            </section>
        </>
    )
}