import { Mail, MapPin, Phone } from "lucide-react";
import Container from "../Container";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-20">
            <Container>
                <div className="grid grid-cols-12 md:gap-0 gap-10">
                    {/* Logo and Contact Info */}
                    <div className="md:col-span-4 col-span-12 space-y-4">
                        <h1 className="text-5xl font-bold text-gray-900">kalles</h1>
                        <p className="text-gray-700 mb-4 text-sm">
                            All Rights Reserved © 2023 <a href="#" className="text-sm text-blue-600">Kalles</a><br />
                            Developed by <Link href="#" className="text-sm text-red-600">The4</Link>
                        </p>
                        <div className="space-y-4 text-gray-600">
                            <div className="flex items-center gap-x-2">
                                <MapPin size={20} />
                                <span className="text-sm">184 Main Rd E, St Albans, Australia</span>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <Mail size={20} />
                                <span className="text-sm">contact@company.com</span>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <Phone size={20} />
                                <span className="text-sm">+001 2233 456</span>
                            </div>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:col-span-8 col-span-12 lg:gap-0 gap-y-4">
                        <div className="">
                            <h3 className="text-xl font-semibold mb-6 text-gray-900">Categories</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Camera</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Headphone</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Laptop</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Monitor</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Speaker</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Smart watch</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Information */}
                        <div className="">
                            <h3 className="text-xl font-semibold mb-6 text-gray-900">Information</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About us</Link>
                                </li>
                                <li>
                                    <Link href="/terms-conditions" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Terms & Conditions</Link>
                                </li>
                                <li>
                                    <Link href="/returns-exchange" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Returns & Exchanges</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Shipping & Delivery</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Useful Links */}
                        <div className="">
                            <h3 className="text-xl font-semibold mb-6 text-gray-900">Useful links</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Latest News</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">My Account</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Size Guide</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">FAQs 1</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">FAQs 2</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Follow */}
                        <div className="">
                            <h3 className="text-xl font-semibold mb-6 text-gray-900">Follow</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Facebook</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Twitter</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Instagram</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pinterest</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}