import React, { useState, useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const Forms = () => {
  const { students, addStudent, deleteStudent } = useContext(StudentContext);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    course: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);
    setFormData({
      name: "",
      role: "",
      email: "",
      phone: "",
      course: "",
      status: "",
    });
  };

  return (
    <div className="px-4">
      <p className="text-2xl md:text-4xl font-bold text-center mt-30 text-lime-400">
        Fill This Form
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10"
      >
       
        <div className="flex flex-col w-full sm:w-[45%] md:w-[40%]">
          <label className="mb-1 text-lg md:text-3xl font-bold text-lime-400">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="text-base md:text-lg w-full px-4 py-3 rounded-lg bg-white text-gray-700 border"
          />
        </div>

       
        <div className="flex flex-col w-full sm:w-[45%] md:w-[40%]">
          <label className="mb-1 text-lg md:text-3xl font-bold text-lime-400">
            Role:
          </label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Enter your role"
            className="text-base md:text-lg w-full px-4 py-3 rounded-lg bg-white text-gray-700 border"
          />
        </div>

        <div className="flex flex-col w-full sm:w-[45%] md:w-[40%]">
          <label className="mb-1 text-lg md:text-3xl font-bold text-lime-400">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="text-base md:text-lg w-full px-4 py-3 rounded-lg bg-white text-gray-700 border"
          />
        </div>

       
        <div className="flex flex-col w-full sm:w-[45%] md:w-[40%]">
          <label className="mb-1 text-lg md:text-3xl font-bold text-lime-400">
            Phone Number:
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="text-base md:text-lg w-full px-4 py-3 rounded-lg bg-white text-gray-700 border"
          />
        </div>

       
        <div className="flex flex-col w-full sm:w-[45%] md:w-[40%]">
          <label className="mb-1 text-lg md:text-3xl font-bold text-lime-400">
            Select Course:
          </label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="text-base md:text-lg bg-white w-full p-3 text-black rounded-lg border"
          >
            <option value="">Select a Course</option>
            <option value="React Basics">React Basics</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="JavaScript Fundamentals">
              JavaScript Fundamentals
            </option>
            <option value="Advanced CSS">Advanced CSS</option>
            <option value="Backend Development">Backend Development</option>
          </select>
        </div>

        
        <div className="flex  flex-col w-full sm:w-[45%] md:w-[40%]">
          <label className="mb-1 text-lg md:text-3xl font-bold text-lime-400">
            Select Status:
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="text-base md:text-lg bg-white w-full text-black p-3 rounded-lg border"
          >
            <option value="">Select Status</option>
            <option value="Placed">Placed</option>
            <option value="Unplaced">Unplaced</option>
          </select>
        </div>

        <div className="w-full flex justify-center mt-4">
          <button
            type="submit"
            className="px-6 py-3 border-2 border-white hover:bg-lime-300 cursor-pointer font-bold rounded-full"
          >
            Submit
          </button>
        </div>
      </form>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-black gap-6 w-full max-w-6xl mx-auto mt-12">
        {students.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-white p-5 rounded-lg shadow-md"
          >
            <div className="flex items-center gap-x-4">
              <div className="w-12 h-12 rounded-full bg-lime-500 text-white flex items-center justify-center text-xl font-bold">
                {item.name.charAt(0).toUpperCase()}
              </div>
              <h2 className="text-lg md:text-xl font-bold">{item.name}</h2>
            </div>

            <div className="mt-4">
              <p className="mb-2"><strong>Role:</strong> {item.role}</p>
              <p className="mb-2"><strong>Email:</strong> {item.email}</p>
              <p className="mb-2"><strong>Phone:</strong> {item.phone}</p>
              <p className="mb-2"><strong>Course:</strong> {item.course}</p>
              <p className="mb-2"><strong>Status:</strong> {item.status}</p>
            </div>

            <button
              onClick={() => deleteStudent(index)}
              className="mt-3 bg-red-500 text-white px-4 py-2 font-bold rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forms;
