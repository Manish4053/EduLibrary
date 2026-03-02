import React from "react";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white-200 text-base-content pt-14 pb-6 mt-16 relative">

    
      <hr  className="opacity-20 mb-4"/>

      <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-3 gap-12">

        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            BookStore
          </h2>
          <p className="text-sm opacity-70 leading-6">
            Your one-stop destination for amazing books and learning resources.
            Explore, read, and grow with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {["Home", "Courses", "About", "Contact"].map((item) => (
              <li
                key={item}
                className="relative w-fit cursor-pointer opacity-80 hover:text-purple-500 transition duration-300 group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Follow Us
          </h3>

          <div className="flex gap-6 text-xl">
            {[FaTwitter, FaYoutube, FaFacebook].map((Icon, index) => (
              <div
                key={index}
                className="p-3 rounded-full bg-base-300 hover:bg-purple-500 hover:text-white transition duration-300 transform hover:scale-110 cursor-pointer"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-base-300 mt-12 pt-4 text-center text-sm opacity-70">
        © {new Date().getFullYear()} BookStore. All Rights Reserved.
      </div>
    </footer>
  );
}