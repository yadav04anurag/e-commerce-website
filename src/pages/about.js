import React from 'react'
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { assets } from '../assets/frontend_assets/assets';
const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-gray-900">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover our story, mission, and values.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <img
          src={assets.team}
          alt="Our Team"
          className="rounded-lg shadow-lg"
        />

        {/* Text Content */}
        <div>
          <h2 className="text-2xl font-semibold">Who We Are</h2>
          <p className="mt-3 text-gray-700">
            We are a team of passionate individuals dedicated to providing the
            best service and experience to our customers. Our mission is to
            innovate and deliver high-quality products that make a difference.
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-2 text-gray-700">
              <CheckCircleIcon className="w-6 h-6 text-blue-500" /> Innovation & Excellence
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <CheckCircleIcon className="w-6 h-6 text-blue-500" /> Customer Satisfaction
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <CheckCircleIcon className="w-6 h-6 text-blue-500" /> Transparency & Trust
            </li>
          </ul>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold">Meet Our Team</h2>
        <p className="mt-3 text-gray-600">Passionate individuals behind our success.</p>
        <div className="grid md:grid-cols-3 gap-10 mt-8">
          {/** Sample team members */}
          {["SUV", "ABC", "XYZ"].map((name, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg">
              <img
                src={`${assets.dummy}`}
                alt={name}
                className="w-20 h-20 mx-auto rounded-full border-4 border-blue-500"
              />
              <h3 className="mt-4 text-lg font-medium">{name}</h3>
              <p className="text-gray-500">Team Member</p>
            </div>
          ))}
        </div>
      </div>
    </div>


  )
}

export default About