import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-100 border-t mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">↑</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">
                sme<span className="text-red-500">cube</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              SME CUBE — আপনার ব্যবসার ডিজিটাল সমাধানে আমরা আছি ও থাকবো। সাশ্রয়ী এবং কার্যকর সমাধানে স্থানান্তরিত করুন।
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white rounded flex items-center justify-center hover:bg-red-500 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-white rounded flex items-center justify-center hover:bg-red-500 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-white rounded flex items-center justify-center hover:bg-red-500 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services List */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">সার্ভিস সমূহ</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/services" className="hover:text-red-500">ফেসবুক মার্কেটিং</Link></li>
              <li><Link to="/services" className="hover:text-red-500">ই-কমার্স সলুশন</Link></li>
              <li><Link to="/services" className="hover:text-red-500">ওয়েবসাইট ডেভেলপমেন্ট</Link></li>
              <li><Link to="/services" className="hover:text-red-500">ডোমেইন হোস্টিং</Link></li>
              <li><Link to="/services" className="hover:text-red-500">গ্রাফিক ডিজাইন</Link></li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">গুরুত্বপূর্ণ লিংক</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-red-500">কোম্পানি সম্পর্কে</Link></li>
              <li><Link to="/blog" className="hover:text-red-500">ব্লগ</Link></li>
              <li><Link to="/contact" className="hover:text-red-500">যোগাযোগ</Link></li>
              <li><a href="#" className="hover:text-red-500">প্রাইভেসি পলিসি</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">যোগাযোগ</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>📧 info@smecube.com</li>
              <li>📞 +৮৮০ ১৭XX-XXXXXX</li>
              <li>📍 ঢাকা, বাংলাদেশ</li>
              <li>🕒 সকাল ৯টা - বিকাল ৫টা</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-white py-4 border-t">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500">
          &copy;২০২৫ All Rights Reserved By SME CUBE LTD
        </div>
      </div>
    </footer>
  );
};

export default Footer;
