import React from 'react'

function Footer() {
  return (
    <footer className="bg-white pt-10 pb-6 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h3 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Hunting Line: <span className="text-black">0977-1-4529467</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10 text-gray-700">
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Company Profile</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>Useful Information</li>
              <li>Gallery</li>
            </ul>
          </div>

          {/* Nepal Tour */}
          <div>
            <h4 className="font-semibold text-lg mb-3">Nepal Tour</h4>
            <ul className="space-y-2">
              <li>Nepal Home Stay</li>
              <li>Spiritual & Educational Tours in Nepal</li>
              <li>Tours In Nepal</li>
              <li>Trekking in Nepal</li>
              <li>Adventure Tour in Nepal</li>
            </ul>
          </div>

          {/* International Tour */}
          <div>
            <h4 className="font-semibold text-lg mb-3">International Tour</h4>
            <ul className="space-y-2">
              <li>Asia Tours Package</li>
              <li>Europe Tours Package</li>
              <li>Dubai, Oman & M.E</li>
              <li>Australia Tours Package</li>
              <li>America & Canada</li>
              <li>Africa</li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="font-semibold text-lg mb-3">Newsletter Signup</h4>
            <p className="mb-3 text-sm">
              Subscribe now and receive a 50% discount on your next tour booking
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your e-mail@domain.com"
                className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none"
              />
              <button className="bg-red-600 text-white py-2 rounded-full font-semibold hover:bg-red-700 transition">
                SIGN UP
              </button>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <img src="/logo.png" alt="IME Travels Logo" className="h-6" />
            <span className="font-bold text-red-600">IME TRAVELS</span>
          </div>

          <div className="flex gap-6 mb-4 md:mb-0">
            <span className="font-semibold">About</span>
            <span className="font-semibold">Contact Us</span>
            <span className="font-semibold">Useful Information</span>
          </div>

          <div className="text-center md:text-right">
            © Copyright. All Rights Reserved. Website brought into life by <span className="italic font-semibold">Makura Creations Pvt. Ltd</span>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-4 mt-6">
          <a href="#" className="text-blue-400 hover:text-blue-500">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-700">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-black hover:text-gray-800">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
