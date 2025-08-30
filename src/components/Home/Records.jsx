import React from "react";
import { useContext } from "react";
import { StudentContext } from "../../context/StudentContext";
const Records = () => {
  const { students } = useContext(StudentContext);

    const placedCount = students.filter((s) => s.status === "placed").length;
  const unplacedCount = students.filter((s) => s.status === "unplaced").length;
  const totalCount = students.length;
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start max-w-7xl mx-auto px-6 py-12 gap-10">
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
          Empower your future with cutting-edge skills. <br />
          Embrace innovation, master technology, & shape the digital world.{" "}
          <br />
          Your journey to success starts here.
        </h2>
      </div>

      <div className="w-full md:w-1/2">
        <p className="text-lg sm:text-xl mb-8">
          Join our course with a proven track record of success, where learning
          isn't just about gaining skills; it's about growing them. Join us,
          learn with confidence, and watch your skills soar.
        </p>

        <div className="flex flex-col sm:flex-row justify-between gap-6">
          <div className="flex-1 text-center">
            <p className="bg-lime-400 border px-4 py-1 font-semibold text-black rounded-full mb-3 inline-block">
              Total Students
            </p>
            <h3 className="text-4xl sm:text-5xl font-bold">{totalCount}</h3>
          </div>

          <div className="flex-1 text-center">
            <p className="bg-lime-400 border px-4 py-1 font-semibold text-black rounded-full mb-3 inline-block">
              Placed Students
            </p>
            <h3 className="text-4xl sm:text-5xl font-bold">{placedCount}</h3>
          </div>

          <div className="flex-1 text-center">
            <p className="bg-lime-400 border px-4 py-1 font-semibold text-black rounded-full mb-3 inline-block">
              Unplaced Students
            </p>
            <h3 className="text-4xl sm:text-5xl font-bold">{unplacedCount}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;
