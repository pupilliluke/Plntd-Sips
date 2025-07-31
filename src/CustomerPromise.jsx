import React from "react";

const CustomerPromise = ({ setShowPromise }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-lg relative">
        <button
          onClick={() => setShowPromise(false)}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
        >
          &times;
        </button>
        <h3 className="text-xl font-bold mb-4 text-green-700">Disclaimer</h3>
        <p className="text-sm text-gray-700 text-left whitespace-pre-wrap">
          By purchasing my juices, you acknowledge that you understand and agree to the following:

          I am not a licensed professional, and my advice should not be taken as medical or professional advice.

          You are responsible for consulting with a healthcare provider or certified nutritionist if you have specific dietary needs, allergies, or health concerns. I am not liable for any adverse reactions or health issues that may arise from consuming my juices.

          This is a small, unlicensed operation, similar to a lemonade stand, and is not subject to the same regulations as commercial food and beverage businesses. Thank you for supporting my passion for healthy living!
        </p>
      </div>
    </div>
  );
};

export default CustomerPromise;
