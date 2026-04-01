import React from 'react';
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* justify-items-center এবং text-center যোগ করা হয়েছে ৩ কলামে সেন্টারের জন্য */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-16 justify-items-center text-center lg:text-left">
          
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold mb-6">DigiTools</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <div>
              <h3 className="font-bold mb-6 text-lg">Product</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer">Features</li>
                <li className="hover:text-white cursor-pointer">Pricing</li>
                <li className="hover:text-white cursor-pointer">Templates</li>
                <li className="hover:text-white cursor-pointer">Integrations</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <div>
              <h3 className="font-bold mb-6 text-lg">Company</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">Blog</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
                <li className="hover:text-white cursor-pointer">Press</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <div>
              <h3 className="font-bold mb-6 text-lg">Resources</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer">Documentation</li>
                <li className="hover:text-white cursor-pointer">Help Center</li>
                <li className="hover:text-white cursor-pointer">Community</li>
                <li className="hover:text-white cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h3 className="font-bold mb-6 text-lg">Social Links</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all">
                <FaXTwitter className="text-lg" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;