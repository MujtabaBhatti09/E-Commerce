import Button from "@/components/Button";
import Container from "@/components/Container";
import InputField from "@/components/InputField";
import { contactInfo, formContact } from "@/constants";

export default function ContactSction() {
    return (
        <section className="space-y-16">
            <div className="space-y-6 w-full h-[82vh]">
                <iframe
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=24.893258214389242,67.06595166196621&z=17&output=embed`}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="h-full w-full"
                />
            </div>
            <Container>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                    <div className="space-y-6 p-4">
                        <h5 className="text-2xl text-black font-semibold uppercase">
                            Drop Us A Line
                        </h5>
                        <div className="space-y-4">
                            {formContact.map((form, index) => (
                                form.type == "text" ?
                                    <InputField
                                        labelClassName="text-sm"
                                        {...form}
                                    />
                                    :
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-x-2">
                                            <label
                                                htmlFor={form.label}
                                                className="text-gray text-sm"
                                            >
                                                {form.label}
                                            </label>
                                            {form.required && <p className="text-gray text-sm">(required)</p>}
                                        </div>
                                        <textarea
                                            rows={10}
                                            className="focus:outline-0 border border-gray w-full"
                                        />
                                    </div>
                            ))}
                            <Button
                                text="Send"
                                variant="outline"
                                className="!w-full !rounded-full !text-black
                                border-2 !border-black justify-center !py-2
                                hover:bg-[var(--c-cyan)] hover:!border-cyan-500
                                hover:!text-white"
                            />
                        </div>
                    </div>
                    <div className="space-y-6 p-4">
                        <h5 className="text-2xl text-black font-semibold uppercase">
                            Contact Information
                        </h5>
                        <p className="text-gray text-sm
                            whitespace-break-spaces"
                        >
                            We love to hear from you on our customer service, merchandise, website or any topics you want to share with us. Your comments and suggestions will be appreciated. Please complete the form below.
                        </p>
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className="flex items-center
                                gap-x-2
                                text-gray text-sm"
                            >
                                <info.icon size={16} />
                                <p>{info.address}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}