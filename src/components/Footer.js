import React from 'react'
import { assets } from "../assets/frontend_assets/assets"
function Footer() {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
                   {/* Logo and Description */}
                   <div>
                    <img src={assets.logo} className="mb-5 w-32" alt="Company Logo" />
                    <p className="w-full md:w-2/3 text-gray-600">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                {/* Company Links */}
                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li className="hover:text-black cursor-pointer transition-colors">Home</li>
                        <li className="hover:text-black cursor-pointer transition-colors">About us</li>
                        <li className="hover:text-black cursor-pointer transition-colors">Delivery</li>
                        <li className="hover:text-black cursor-pointer transition-colors">Privacy Policy</li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li className="hover:text-black cursor-pointer transition-colors">+1-212-456-7890</li>
                        <li className="hover:text-black cursor-pointer transition-colors">contact@foev.com</li>
                    </ul>
                </div>
            </div>

            {/* Stylish Copyright Section */}
            <div className="mt-6 text-center border-t border-gray-300 pt-4">
                <p className="text-gray-600 text-sm font-medium">
                    &copy; {new Date().getFullYear()} <span className="text-black font-bold">Foev Inc.</span> | All Rights Reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer