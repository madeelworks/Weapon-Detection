import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import React Router
import Header from "./components/Header/Header"; // Your header component
import Home from "./components/Home/Home"; // Your home page
import Services from "./components/services/services"; // Your services page
import Contact from "./components/Contact/contact"; // Your contact page
import About from "./components/About/About"; // Your about page
import Footer from "./components/Footer/Footer"; // Your footer component
import Login from "./components/Login/login"; // Your login page
import SignUp from "./components/SignUp/SignUp"; // Your sign-up page

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Ensure the container takes at least the full height of the screen */}
        <Header />
        
        <main className="flex-grow overflow-y-auto"> {/* This allows scrolling of content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>

        <Footer /> {/* Footer is now placed below the main content */}
      </div>
    </Router>
  );
};

export default App;
