import React from "react";

const HomePage = () => {
  return (
    <div>
      <div
        className="min-h-screen w-full flex flex-col justify-center items-center gap-y-5 bg-cover bg-center bg-no-repeat px-4"
        style={{ backgroundImage: "url('/src/assets/background.jpg')" }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl text-center font-bold mb-5 mt-5 text-white">
          Learn from the best, be your best..
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 text-center mb-5 max-w-2xl">
          Give yourself an upgrade with our inspiring online courses <br /> and
          join a global community of learners
        </p>

        <button className="bg-yellow-400 rounded-full py-3 px-8 sm:px-10 text-black font-bold hover:bg-yellow-300 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomePage;
