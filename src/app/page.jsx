import React from 'react';

const packages = [
  {
    image: '/muktinath.png',
    title: 'Muktinath Religious Tour',
    type: 'Nepal Tour',
    reviews: 0,
    rating: 0,
    duration: '6 days',
  },
  {
    image: '/everest.jpg',
    title: 'Everest Base Camp Trekking',
    type: 'Nepal Tour, Trekking in Nepal',
    reviews: 4,
    rating: 4.3,
    duration: '7 days',
  },
  {
    image: '/annapurna.jpg',
    title: 'Annapurna Base Camp Trek',
    type: 'Nepal Tour, Trekking in Nepal',
    reviews: 0,
    rating: 0,
    duration: '6 days',
  },
  {
    image: '/dubai.webp',
    title: 'Dubai Tour 3N/4D',
    type: 'International Tour',
    reviews: 0,
    rating: 0,
    duration: '4 days',
  },
  {
    image: '/bali.jpg',
    title: 'Indonesia Bali Tour Package',
    type: 'International Tour',
    reviews: 0,
    rating: 0,
    duration: '4 days',
  },
  {
    image: '/thailand.jpg',
    title: 'Thailand Tour (4N/5D) [2N Pattaya + 2N Bangkok]',
    type: 'International Tour',
    reviews: 0,
    rating: 0,
    duration: '5 days',
  },
];

const tourPackages = [
  {
    img: "/kathmandu.jpg",
    alt: "Sirubari Tour",
    title: "Kathmandu–Pokhara–Sirubari (7N/8D)",
    description: "Nepal Home Stay, Nepal Tour, Tours In Nepal",
    duration: "8 days",
  },
  {
    img: "/lumbini.jpg",
    alt: "Lumbini Tour",
    title: "Lumbini Educational Tour (2N/3D)",
    description: "Educational, Spiritual & Nepal Tour",
    duration: "3 days",
  },
  {
    img: "/KathmanduExcursion.webp",
    alt: "Kathmandu Excursion",
    title: "Kathmandu Excursion 3N/4D",
    description: "Nepal Tour, Tours In Nepal",
    duration: "4 days",
  },
  {
    img: "/SouthAfrica.png",
    alt: "South Africa Tour",
    title: "South Africa Tour",
    description: "International Tour",
    duration: "6 days",
  },
  {
    img: "/australia.png",
    alt: "Australia Tour",
    title: "10 Days Australia Tour",
    description: "International Tour",
    duration: "6 days",
  },
  {
    img: "/india.png",
    alt: "India Tour",
    title: "9 Days India Tour Packages",
    description: "International Tour",
    duration: "6 days",
  },
];


const destinations = [
  {
    title: "Asia Tours Package",
    count: 35,
    image: "Asia.webp",
    description: [
      "Indonesia Bali Tour (5N/6D)",
      "Phuket (2N) / Pattaya (2N) / Bangkok (2N)",
    ],
  },
  {
    title: "Dubai, Oman & M.E",
    count: 6,
    image: "Oman.webp",
    description: [
      "Dubai City Tour / Desert Safari",
      "Abu Dhabi Mosque / Musandam Cruise",
    ],
  },
  {
    title: "Europe Tours Package",
    count: 11,
    image: "Europe.webp",
    description: [
      "Paris / Rome / Amsterdam",
      "Swiss Alps / Prague / Vienna",
    ],
  },
  {
    title: "America & Canada",
    count: 2,
    image: "Europe.webp",
    description: [
      "Paris / Rome / Amsterdam",
      "Swiss Alps / Prague / Vienna"],
  },
  {
    title: "Australia Tours Package",
    count: 1,
    image: "Europe.webp",
    description: [
      "Paris / Rome / Amsterdam",
      "Swiss Alps / Prague / Vienna"],
  },
  {
    title: "Nepal",
    count: 64,
    image: "Europe.webp",
    description: [
      "Paris / Rome / Amsterdam",
      "Swiss Alps / Prague / Vienna"],
  },
];
// const airlinespatner=[
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
//   {
//     name: "Salam Air",
//     logo: "/Airlines/Salam-Airlines.png"
//   },
// ]

function Page() {
  return (
    <>
      <section
        className="h-100 bg-contain bg-center flex justify-center items-center relative"
        style={{ backgroundImage: "url('/Artboard.jpg')" }}
      >
        <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200">
          Book Your Flight Now
        </button>
      </section>

      {/* Best Selling Packages */}

      <section className="py-12 px-6 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Best Selling Packages</h2>
          <p className="text-gray-500 mt-2">Enjoy the exclusive package tours with us.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {packages.slice(0, 6).map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded shadow hover:shadow-md transition overflow-hidden"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-md text-black mb-1">{pkg.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{pkg.type}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <span className="bg-red-600 text-white text-xs px-2 py-[2px] rounded-full font-semibold">
                      {pkg.rating ?? 0}
                    </span>
                    <span>{pkg.reviews} review(s)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src="/clock.svg" alt="Clock" className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* More destination */}
      <section className="bg-white py-10 px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar */}
          <div className="md:w-1/3">
            <h2 className="text-4xl text-black font-extrabold mb-6">More Destinations</h2>
            <ul className="space-y-4 text-lg font-semibold">
              {destinations.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span className='text-black'>{item.title}</span>
                  <span className="text-gray-500">({item.count})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Destination Cards */}
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-md transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full text-black object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4 rounded-t-xl translate-y-full group-hover:translate-y-0 transition-all duration-500 shadow-md">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-red-600">{item.title}</h3>
                    <p className="font-medium text-gray-800">{item.count} Tours</p>
                  </div>
                  <div className="text-sm text-gray-600 mt-2 space-y-1">
                    {item.description.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                    <p className="text-gray-800 font-medium underline">More</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Highlighted Packages */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Highlighted Packages</h2>
          <p className="text-gray-500 mt-2">Travel packages loved by many.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {packages
            .filter(pkg => pkg.type.includes("International Tour"))
            .slice(0, 3)
            .map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded shadow hover:shadow-md transition overflow-hidden"
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-md text-black mb-1">{pkg.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{pkg.type}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <span>0 review(s)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src="/clock.svg" alt="Clock" className="w-4 h-4" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>


      {/* more packages */}
      <section className="py-12 px-6 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">More Packages</h2>
          <p className="text-gray-500 mt-2">Explore more exciting destinations around the world.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">

          {/* Nepal Tour */}
          <img src="/NepalTour.jpeg" alt="" />

          {/* Map tour cards with .slice() */}
          {tourPackages.slice(0, 6).map((pkg, idx) => (
            <div key={idx} className="bg-white rounded shadow overflow-hidden">
              <img src={pkg.img} alt={pkg.alt} className="w-full h-44 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-md text-black mb-1">{pkg.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{pkg.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>0 review(s)</span>
                  <div className="flex items-center gap-1">
                    <img src="/clock.svg" alt="Clock" className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* international tour */}
          <img src="/InternationalTour.jpeg" alt="" />
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">What our clients are saying about us</h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg text-black font-semibold text-center mb-4">Adventurous Trek to EBC</h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center mb-6">
              After a successful trek through the Everest Base Camp – Top of the World, I now know how nature has blessed Nepal with its Extreme Natural beauty’. We have had an excellent adventure in the EBC … all made possible through your professional team arrangements. Thank you for all your help IME Travels, much appreciated.
            </p>
            <div className="flex flex-col items-center">
              <img
                src="/about-testi-1.jpg"
                alt="Johana Franklin"
                className="w-14 h-14 rounded-full object-cover mb-2"
              />
              <p className="font-semibold text-black">Johana Franklin</p>
              <p className="text-sm text-gray-500">USA</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-center text-black mb-4">Adventurous Trek to EBC</h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center mb-6">
              On behalf of my team, I would like to thank IME Travels for creating really huge adding value trip to Nepal. You really opened new universe for us. Nepal is magnificent country with nice people with beautiful landscapes. And I think it is one of the places, that should be visited in one’s life. Professionalism and Quality service is what we loved most.
            </p>
            <div className="flex flex-col items-center">
              <img
                src="/about-testi-2.jpg"
                alt="Mark Lindo"
                className="w-14 h-14 rounded-full object-cover mb-2"
              />
              <p className="font-semibold text-black">Mark Lindo</p>
              <p className="text-sm text-gray-500">Spain</p>
            </div>
          </div>
        </div>
      </section>


      {/* Best Travel Agency in Nepal */}
      <section className="py-12 px-6 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Best Travel Agency in Nepal</h2>
          <p className="text-gray-500 mt-2">Why IME Travels</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <img src="/experience-icon.png" alt="Experience and Expertise" className="w-12 h-12" />
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Experience and Expertise</h3>
            <p className="text-gray-500 text-sm">IME Travels has extensive knowledge and skills in travel planning.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <img src="/destinations-icon.png" alt="Variety of Destinations" className="w-12 h-12" />
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Variety of Destinations</h3>
            <p className="text-gray-500 text-sm">We offer a wide selection of places to visit, catering to diverse interests.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <img src="/convenience-icon.png" alt="Convenience" className="w-12 h-12" />
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Convenience</h3>
            <p className="text-gray-500 text-sm">Traveling with IME Travels means they handle all arrangements, ensuring a hassle-free experience.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <img src="/safety-icon.png" alt="Safety and Security" className="w-12 h-12" />
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Safety and Security</h3>
            <p className="text-gray-500 text-sm">They prioritize your well-being with reliable accommodations and transport options.</p>
          </div>
        </div>
      </section>

      {/* Travel Blog */}
      <section className="py-12 px-6 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Travel Blog</h2>
          <p className="text-gray-500 mt-2">Checkout latest news and articles from our blog</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Blog Post 1 */}
          <div className="bg-white rounded shadow hover:shadow-md transition overflow-hidden">
            <img
              src="/blog1.webp"
              alt="Things to Keep in Mind While Travelling During the Pandemic"
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <img src="/image.svg" alt="Category Icon" className="w-4 h-4" />
                <span className="text-red-600 text-sm">
                  Adventure, Cultural, Photos
                </span>
              </div>
              <h3 className="font-semibold text-md text-black mb-2">
                Things to Keep in Mind While Travelling During the Pandemic
              </h3>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <img src="/calender.svg" alt="Calendar Icon" className="w-4 h-4" />
                  <span>December 9, 2020</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src="/user.svg" alt="User Icon" className="w-4 h-4" />
                  <span>By IME Travels</span>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white rounded shadow hover:shadow-md transition overflow-hidden">
            <img
              src="/blog2.webp"
              alt="Lumbini: The Best Tourism Destination"
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <img src="/image.svg" alt="Category Icon" className="w-4 h-4" />
                <span className="text-red-600 text-sm">
                  Cultural, Adventure
                </span>
              </div>
              <h3 className="font-semibold text-md text-black mb-2">
                Lumbini: The Best Tourism Destination
              </h3>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <img src="/calender.svg" alt="Calendar Icon" className="w-4 h-4" />
                  <span>February 7, 2021</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src="/user.svg" alt="User Icon" className="w-4 h-4" />
                  <span>By IME Travels</span>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white rounded shadow hover:shadow-md transition overflow-hidden">
            <img
              src="/blog3.webp"
              alt="10 Best Destinations to Travel in Nepal"
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <img src="/image.svg" alt="Category Icon" className="w-4 h-4" />
                <span className="text-red-600 text-sm">
                  Adventure, Cultural, Destinations
                </span>
              </div>
              <h3 className="font-semibold text-md text-black mb-2">
                10 Best Destinations to Travel in Nepal
              </h3>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <img src="/calender.svg" alt="Calendar Icon" className="w-4 h-4" />
                  <span>January 11, 2021</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src="/user.svg" alt="User Icon" className="w-4 h-4" />
                  <span>By IME Travels</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Airlines Partners */}
      <section className="py-12 px-6 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Airlines Partners</h2>
        </div>
        <div className="flex justify-center items-center max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* KLM Royal Dutch Airlines */}
            <div className="flex flex-col items-center">
              <img
                src="/Airlines/Silk-Airlines.png"
                alt="KLM Royal Dutch Airlines"
                className="h-16 object-contain"
              />
              <p className="text-sm text-black mt-2">KLM Royal Dutch Airlines</p>
            </div>

            {/* Saurya Airlines */}
            <div className="flex flex-col items-center">
              <img
                src="/Airlines/Silk-Airlines.png"
                alt="Saurya Airlines"
                className="h-16 object-contain"
              />
              <p className="text-sm text-black mt-2">Saurya Airlines</p>
            </div>

            {/* Shree Airlines */}
            <div className="flex flex-col items-center">
              <img
                src="/Airlines/Silk-Airlines.png"
                alt="Shree Airlines"
                className="h-16 object-contain"
              />
              <p className="text-sm text-black mt-2">Shree Airlines</p>
            </div>

            {/* Sichuan Airlines */}
            <div className="flex flex-col items-center">
              <img
                src="/Airlines/Silk-Airlines.png"
                alt="Sichuan Airlines"
                className="h-16 object-contain"
              />
              <p className="text-sm text-black mt-2">Sichuan Airlines</p>
            </div>

            {/* SilkAir */}
            <div className="flex flex-col items-center">
              <img
                src="/Airlines/Silk-Airlines.png"
                alt="SilkAir"
                className="h-16 object-contain"
              />
              <p className="text-sm text-black mt-2">SilkAir</p>
            </div>
          </div>
        </div>
       
      </section>
    </>
  );
}

export default Page;
