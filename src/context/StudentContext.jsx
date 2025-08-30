import React, { createContext, useState, useEffect } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(() => {
    const stored = localStorage.getItem("students");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  const deleteStudent = (index) => {
    setStudents((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};
