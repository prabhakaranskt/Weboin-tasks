import React from "react";

const Platforms = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center justify-center py-16 px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/bg-2.jpg')" }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-white text-center">
          Our Placement Partners
        </h2>

        <img
          src="/src/assets/company.jpg"
          className="w-full max-w-4xl mb-10 rounded-lg shadow-lg"
          alt="Company Logos"
        />

        <button className="bg-yellow-400 rounded-full py-3 px-6 sm:px-8 md:px-10 text-black font-bold hover:bg-yellow-300 transition">
          More Companies
        </button>
      </div>

      <div className="flex flex-col text-center items-center px-4 py-16">
        <p className="text-sm sm:text-base md:text-lg text-blue-400 font-bold mb-6">
          OPEN SOURCE THEME AND UI COMPONENTS
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-snug">
          Geaux Astro helps you craft beautiful websites efficiently
        </h2>
      </div>
    </div>
  );
};

export default Platforms;
