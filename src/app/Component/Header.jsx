
"use client"
import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Contact & Social */}
      <div className="bg-red-600 text-white flex flex-col md:flex-row justify-between items-center px-4 py-2 text-sm gap-2">
        <div className="flex items-center gap-4">
          <img src="facebook.svg" alt="Facebook" />
          <img src="twitter.svg" alt="Twitter" />
          <img src="instagram.svg" alt="Instagram" />
          <img src="linkedin.svg" alt="LinkedIn" />
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="phone.svg" alt="Phone" />
            <span>+977-1-4529467 (Hunting Line)</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="mail.svg" alt="Mail" />
            <span>sales@imetravels.com</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center px-4 py-4 bg-white shadow-sm relative">
        <div className="text-red-600 font-bold text-3xl leading-tight">
          <img src="/imelogo.webp" alt="IME Logo" className="h-10" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 items-center text-black font-medium">
          <a href="#">Trekking in Nepal</a>
          <a href="#">Nepal Tour</a>
          <a href="#">International Tour</a>
          <div className="flex items-center gap-1">
            <img src="about-us.svg" alt="About Us" className="w-4 h-4" />
            <a href="#">About Us</a>
          </div>
          <button className="flex items-center border border-red-500 text-red-500 px-4 py-2 rounded-full gap-2 hover:bg-red-50">
            <img src="staff-login.svg" alt="Staff Login" className="w-4 h-4" />
            Staff Login
          </button>
          <button className="flex items-center bg-red-500 text-white px-5 py-2 rounded-full gap-2 hover:bg-red-600">
            <img src="agent-login.svg" alt="Agent Login" className="w-4 h-4" />
            Agent Login
          </button>
          <img src="search.svg" alt="Search" className="w-5 h-5 cursor-pointer" />
        </nav>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <img
              src={menuOpen ? "/Close.svg" : "/Menu.svg"}
              alt="Menu"
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 p-4 flex flex-col gap-4 lg:hidden">
            <a className='text-black' href="#">Trekking in Nepal</a>
            <a className='text-black' href="#">Nepal Tour</a>
            <a className='text-black' href="#">International Tour</a>
            <a className='text-black' href="#">About Us</a>
            <div className="flex flex-col gap-2">
              <button className="flex items-center border border-red-500 text-red-500 px-4 py-2 rounded-full gap-2 hover:bg-red-50">
                <img src="staff-login.svg" alt="Staff Login" className="w-4 h-4" />
                Staff Login
              </button>
              <button className="flex items-center bg-red-500 text-white px-5 py-2 rounded-full gap-2 hover:bg-red-600">
                <img src="agent-login.svg" alt="Agent Login" className="w-4 h-4" />
                Agent Login
              </button>
              <div className="flex items-center justify-end">
                <img src="search.svg" alt="Search" className="w-5 h-5 cursor-pointer" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
