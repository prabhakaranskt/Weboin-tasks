import { createRoot } from "react-dom/client";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <StudentProvider>
      <App />
    </StudentProvider>
   
  </BrowserRouter>
);
