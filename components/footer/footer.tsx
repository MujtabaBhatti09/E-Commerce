import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-20 2xl:px-0 px-4">
            <div className="2xl:container mx-auto container-fluid grid grid-cols-12">
                {/* Logo and Contact Info */}
                <div className="col-span-4 space-y-4">
                    <h1 className="text-5xl font-bold text-gray-900">kalles</h1>
                    <p className="text-gray-700 mb-4 text-sm">
                        All Rights Reserved © 2023 <a href="#" className="text-blue-600">Kalles</a><br />
                        Developed by <a href="#" className="text-red-600">The4</a>
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
                <div className="grid grid-cols-4 col-span-8">
                    <div className="">
                        <h3 className="text-xl font-semibold mb-6 text-gray-900">Categories</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Camera</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Headphone</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Laptop</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Monitor</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Speaker</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Smart watch</a></li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div className="">
                        <h3 className="text-xl font-semibold mb-6 text-gray-900">Information</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About us</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Terms & Conditions</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Returns & Exchanges</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Shipping & Delivery</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Useful Links */}
                    <div className="">
                        <h3 className="text-xl font-semibold mb-6 text-gray-900">Useful links</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Latest News</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">My Account</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Size Guide</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">FAQs 1</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">FAQs 2</a></li>
                        </ul>
                    </div>

                    {/* Follow */}
                    <div className="">
                        <h3 className="text-xl font-semibold mb-6 text-gray-900">Follow</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Facebook</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Twitter</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Instagram</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Pinterest</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}