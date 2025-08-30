import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/Home/HomePage";
import Platforms from "./components/Home/Platforms";
import Records from "./components/Home/Records";
import Statics from "./components/Home/Statics";
import Navbar from "./components/Navbar/Navbar";
import Forms from "./Pages/Forms";
import { StudentProvider } from "./context/StudentContext"; 

function App() {

   
  return (
    
    <div className="bg-black min-h-screen text-white">
      <Navbar />
<StudentProvider>
  
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <Platforms />
              <Statics />
              <Records />
              <Footer />
            </>
          }
        />

        <Route path="/forms" element={<Forms  />} />
      </Routes>
</StudentProvider>
    </div>
  );
}

export default App;
