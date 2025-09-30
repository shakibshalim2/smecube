import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white border-b sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-bold">↑</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">
              sme<span className="text-red-500">cube</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link
              to="/"
              className={`text-base font-medium transition-colors ${
                isActive('/') ? 'text-red-500' : 'text-gray-700 hover:text-red-500'
              }`}
            >
              হোম
            </Link>
            <Link
              to="/services"
              className={`text-base font-medium transition-colors ${
                isActive('/services') ? 'text-red-500' : 'text-gray-700 hover:text-red-500'
              }`}
            >
              সার্ভিস
            </Link>
            <Link
              to="/about"
              className={`text-base font-medium transition-colors ${
                isActive('/about') ? 'text-red-500' : 'text-gray-700 hover:text-red-500'
              }`}
            >
              প্রাতিষ্ঠানিক
            </Link>
            <Link
              to="/blog"
              className={`text-base font-medium transition-colors ${
                isActive('/blog') ? 'text-red-500' : 'text-gray-700 hover:text-red-500'
              }`}
            >
              ব্লগ
            </Link>
            <Link
              to="/contact"
              className={`text-base font-medium transition-colors ${
                isActive('/contact') ? 'text-red-500' : 'text-gray-700 hover:text-red-500'
              }`}
            >
              যোগাযোগ
            </Link>
          </nav>

          {/* Login Button */}
          <button className="hidden md:block bg-red-500 text-white px-4 py-2 text-base rounded-md hover:bg-red-600 transition">
            ক্লাইন্ট এরিয়া
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-red-500 font-medium">হোম</Link>
              <Link to="/services" className="text-gray-700 hover:text-red-500 font-medium">সার্ভিস</Link>
              <Link to="/about" className="text-gray-700 hover:text-red-500 font-medium">প্রাতিষ্ঠানিক</Link>
              <Link to="/blog" className="text-gray-700 hover:text-red-500 font-medium">ব্লগ</Link>
              <Link to="/contact" className="text-gray-700 hover:text-red-500 font-medium">যোগাযোগ</Link>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md">ক্লাইন্ট এরিয়া</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
