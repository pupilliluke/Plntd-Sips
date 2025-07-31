import React, { useRef, useEffect } from "react";

const testimonials = [
  {
    text: "As a soccer player, I look forward to drinking PLNTD SIPS after every game to help my recovery. They have changed my life!",
    author: "Morgan P., Soccer Player at Mt Union University",
    color: "text-green-700",
      },
  {
    text: "My veins feel fresh!",
    author: "Mason P, Hockey Player at Lebanon Valley College",
    color: "text-pink-700",
  },
  {
    text: "Grace is doing something special here. The drinks taste amazing, and I feel great knowing they’re made with purpose and passion.",
    author: "Luke P, Goat",
    color: "text-blue-700",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (container) {
        scrollAmount += 1;
        container.scrollLeft += 1;

        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
          scrollAmount = 0;
          container.scrollLeft = 0;
        }
      }
    }, 20); // scroll speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-green-50 to-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-green-700 mb-4">What My Customers Say</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Real feedback from real juice lovers. These sips speak for themselves.
        </p>

        <div
          ref={scrollRef}
          className="flex gap-6 w-full overflow-x-hidden no-scrollbar"
          style={{ scrollBehavior: "smooth" }}
        >
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full max-w-sm bg-white rounded-xl shadow-lg p-6 relative hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              <div className="absolute top-4 left-4 text-green-400 text-3xl">“</div>
              <p className="text-gray-700 text-base leading-relaxed mb-4 mt-6 break-words">
                {t.text}
              </p>
              <p className={`font-semibold ${t.color} text-sm mt-4`}>— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        
      </div>
      </div>
   
  );
}
