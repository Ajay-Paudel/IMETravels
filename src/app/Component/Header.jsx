import React from 'react';

function Header() {
  return (
    <header>
    
      <div className="bg-red-600 text-white flex justify-between items-center px-4 py-2 text-sm">
        <div className="flex items-center gap-4">
           <img src="facebook.svg" alt="" />
           <img src="twitter.svg" alt="" />
           <img src="instagram.svg" alt="" />
           <img src="linkedin.svg" alt="" />
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
        <img src="phone.svg" alt="" />
            <span>+977-1-4529467 (Hunting Line)</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="mail.svg" alt="" />
            <span>sales@imetravels.com</span>
          </div>
        </div>
      </div>

      {/* Main Header Navigation */}
      <div className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
        <div className="text-red-600 font-bold text-3xl leading-tight text-center rounded">
          <span className="block leading-none">IME</span>
          <span className="text-sm tracking-widest">TRAVELS</span>
        </div>

        <nav className="flex gap-8 items-center text-black font-medium">
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
      </div>
    </header>
  );
}

export default Header;
