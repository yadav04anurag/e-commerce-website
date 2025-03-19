import React, { useState } from "react";
import { Mail, User, MessageSquare, Send } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    setFormData({
    name: "",
    email: "",
    subject: "",
    message: "",
    })
    alert("Thank you for contacting us! We'll respond shortly.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mb-6">
          We’re here to help! Fill out the form and we'll get back to you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Field */}
          <div className="relative">
            <User className="absolute left-4 top-3 h-5 w-5 text-gray-500" />
            <input
              type="text"
              value={formData.name}
              name="name"
              placeholder="Full Name"
              className="w-full pl-12 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <Mail className="absolute left-4 top-3 h-5 w-5 text-gray-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Your Email"
              className="w-full pl-12 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              onChange={handleChange}
              required
            />
          </div>

          {/* Subject Field */}
          <div className="relative">
            <MessageSquare className="absolute left-4 top-3 h-5 w-5 text-gray-500" />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              placeholder="Subject"
              className="w-full pl-12 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              onChange={handleChange}
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
          >
            <Send className="h-5 w-5" /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
