import React from "react";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";
import { LiaCertificateSolid } from "react-icons/lia";

const Statics = () => {
  return (
    <div className="px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-16 mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 w-full md:w-1/2">
          <div className="flex gap-x-5">
            <div className="text-4xl text-green-400">
              <LiaCertificateSolid />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                Certificate Distribution
              </h3>
              <p className="text-gray-600 text-sm sm:text-base max-w-md">
                We offer certificates to validate and recognize your
                achievement.
              </p>
            </div>
          </div>

          <div className="flex gap-x-5">
            <div className="text-4xl text-blue-400">
              <GiBrain />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                Knowledge
              </h3>
              <p className="text-gray-600 text-sm sm:text-base max-w-md">
                We deliver transformative knowledge that empowers and inspires.
              </p>
            </div>
          </div>

          <div className="flex gap-x-5">
            <div className="text-4xl text-red-400">
              <FaHandsHoldingChild />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                Hands-on Experience
              </h3>
              <p className="text-gray-600 text-sm sm:text-base max-w-md">
                We provide hands-on experience for real-world learning. You
                learn best by doing.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto"
            src="/src/assets/statics.png"
            alt="Statics Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Statics;
