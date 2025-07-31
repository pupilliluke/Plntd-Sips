  import React from 'react';
  import './output.css';
  import { useState } from "react";
  import Testimonials from './Testimonials';
import CustomerPromise from './CustomerPromise';


  function App() {

      const [showPromise, setShowPromise] = useState(false); // ✅ ADD THIS LINE

    return (
      <div className="font-sans">
        {/* Header Section with Background Image */}
  <div
    className="h-[60vh] py-12 bg-cover bg-center flex flex-col items-center justify-center text-white px-4 text-center relative"
    style={{ backgroundImage: "url('/image.png')" }}
  >

      
        </div>

        {/* Product Info Section */}
        <div className="bg-pink-100 py-12 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
         <div className="relative rounded-xl shadow h-full w-full overflow-hidden">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/floral.png')" }}
  />

  {/* Semi-transparent overlay */}
  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

  {/* Content */}
  <div className="relative z-10 p-10 flex flex-col justify-center items-center text-center h-full w-full">
    <h2 className="text-4xl font-extrabold text-green-700 tracking-wide mb-4">PLNTD SIPS</h2>
    <p className="text-xl font-medium text-gray-800 mb-2 flex items-center gap-2">
      📱 <span>281-891-0644</span>
    </p>
    <p className="text-xl font-medium text-gray-800 flex items-center gap-2">
      📷 <span>@PLNTD.SIPS</span>
    </p>

    <a
      href="https://www.instagram.com/plntd.sips"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-green-600 hover:bg-green-700 rounded-full shadow transition duration-300"
    >
      Follow on IG
    </a>
  </div>
</div>



  <div className="p-6 rounded-xl bg-green-50 shadow">
    <h2 className="text-2xl font-bold text-center text-green-800 mb-6">Menu & Health Benefits</h2>

 <div className="grid grid-cols-1 gap-6">
  {/* Orange Goodness */}
  <div className="bg-orange-100 rounded-xl p-4 shadow-md flex flex-col h-full">
    <div className="flex justify-center mb-3">
      <svg className="w-16 h-16 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
      </svg>
    </div>
    <h3 className="text-orange-700 text-lg font-bold mb-1 text-center">ORANGE GOODNESS</h3>
    <p className="text-sm text-center">Pineapple, Mango, Orange, Ginger, and Coconut water.</p>

    {/* Separator */}
    <div className="my-2 h-px bg-orange-300 w-2/3 mx-auto"></div>

    <p className="text-sm text-center mt-auto"><span className="font-semibold">Benefits:</span> Boost immunity, hydration, digestion, and energy.</p>
  </div>

  {/* Green & Clean */}
  <div className="bg-green-100 rounded-xl p-4 shadow-md flex flex-col h-full">
    <div className="flex justify-center mb-3">
      <svg className="w-16 h-16 text-green-600" fill="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="8" />
      </svg>
    </div>
    <h3 className="text-green-700 text-lg font-bold mb-1 text-center">GREEN & CLEAN</h3>
    <p className="text-sm text-center">Pear, Apple, Spinach, Celery, and Ginger.</p>

    <div className="my-2 h-px bg-green-300 w-2/3 mx-auto"></div>

    <p className="text-sm text-center mt-auto"><span className="font-semibold">Benefits:</span> Detox, anti-inflammatory, hydration.</p>
  </div>

  {/* Play Dat Beet */}
  <div className="bg-pink-100 rounded-xl p-4 shadow-md flex flex-col h-full">
    <div className="flex justify-center mb-3">
      <svg className="w-16 h-16 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
        <polygon points="12,2 22,22 2,22" />
      </svg>
    </div>
    <h3 className="text-pink-600 text-lg font-bold mb-1 text-center">PLAY DAT BEET</h3>
    <p className="text-sm text-center">Beet, Orange, Carrot, Apple.</p>

    <div className="my-2 h-px bg-pink-300 w-2/3 mx-auto"></div>

    <p className="text-sm text-center mt-auto"><span className="font-semibold">Benefits:</span> Heart health, skin health, antioxidants.</p>
  </div>

  {/* Cotton Candy Dream */}
  <div className="bg-blue-100 rounded-xl p-4 shadow-md flex flex-col h-full">
    <div className="flex justify-center mb-3">
      <svg className="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 3a2 2 0 110 4 2 2 0 010-4zm0 6a5 5 0 00-5 5h2a3 3 0 016 0h2a5 5 0 00-5-5z" />
      </svg>
    </div>
    <h3 className="text-blue-500 text-lg font-bold mb-1 text-center">COTTON CANDY DREAM</h3>
    <p className="text-sm text-center">Cotton candy grapes.</p>

    <div className="my-2 h-px bg-blue-300 w-2/3 mx-auto"></div>

    <p className="text-sm text-center mt-auto"><span className="font-semibold">Benefits:</span> Vitamin C, hydration, quick energy.</p>
  </div>
</div>

  </div>



            {/* Column 3: About Me */}
            <div className="bg-white p-6 rounded-xl shadow text-left">
              <img src="/grace.jpg" alt="Grace Howard" className="rounded-xl mb-4" />
              <h2 className="text-xl font-bold text-green-600 mb-2">About Me</h2>
              <p className="text-sm leading-relaxed text-gray-700">
                <span className="text-pink-600 font-semibold text-base">Hey neighbors!</span> I'm Grace Howard, a student athlete at Coastal Carolina University studying Exercise & Sports Science. Passionate about nutrition and wellness, I discovered the power of juicing while recovering from a car accident in December 2023. Healthy habits can taste good too — enjoy cold-pressed juices from PLNTD. SIPS!
              </p>
            </div>
          </div>
        </div>

      <div className="bg-green-50 px-6" style={{ height: '420px' }}>
  <script src="https://snapwidget.com/js/snapwidget.js"></script>
  <iframe
    src="https://snapwidget.com/embed/1104219"
    className="snapwidget-widget"
    allowtransparency="true"
    frameBorder="0"
    scrolling="no"
    style={{
      border: 'none',
      overflow: 'hidden',
      width: '100%',
      height: '100%',
    }}
    title="Posts from Instagram"
  ></iframe>
  
</div>


<div>
  <Testimonials />
</div>

        {/* My Promise Section with Button to Trigger Modal */}
      <div className="bg-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">My Promise to You</h2>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          At PLNTD SIPS, we’re committed to delivering fresh, all-natural juice blends made with love, integrity, and high-quality ingredients. Whether you’re looking for a daily boost or a weekend refresh, we promise a sip you can trust.
        </p>

        <button
          onClick={() => setShowPromise(true)}
          className="mt-4 inline-block bg-green-600 text-white py-2 px-6 rounded-full text-lg font-medium hover:bg-green-700 transition"
        >
          View Disclaimer
        </button>
      </div>

      {/* Conditionally Render Modal Component */}
      {showPromise && (
        <CustomerPromise setShowPromise={setShowPromise} />
      )}

      <footer className="bg-green-100 text-center text-sm text-gray-700 py-6 mt-12 border-t border-green-200">
  <div className="max-w-6xl mx-auto px-4">
    <p className="mb-1">
      &copy; {new Date().getFullYear()} <span className="font-semibold text-green-700">PLNTD SIPS</span>. All rights reserved.
    </p>
    <p>
      Designed by Luke Pupilli
    </p>
  </div>
</footer>

    </div>
    

    );
  }

  export default App;