import Lenis from "lenis";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import React Router components
import "./App.css";
import Whatsapp from "./assets/whatsapp.png";
import Preloader from "./Components/preloader";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutUs"; // Example route
import ServicePage from "./Pages/ServicePage";
import Projects from "./Pages/Projects";
import ServiceDetail from "./Pages/ServiceDetai";
import Detail1 from "./Pages/Detail1";
import Detail2 from "./Pages/Detail2";
import Detail3 from "./Pages/Detail3";
import Detail4 from "./Pages/Detail4";
import Detail5 from "./Pages/Detail5";
import Detail6 from "./Pages/Detail6";
import Detail7 from "./Pages/Detail7";
import Detail8 from "./Pages/Detail8";
import Detail9 from "./Pages/Detail9";
import Detail10 from "./Pages/Detail10";
import Detail11 from "./Pages/Detail11";
import Detail12 from "./Pages/Detail12";
import Detail13 from "./Pages/Detail13";
import Detail14 from "./Pages/Detail14";
import Detail15 from "./Pages/Detail15";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isShaking, setIsShaking] = useState(false);

  const lenis = new Lenis(); // Initialize Lenis instance

  // Use requestAnimationFrame to continuously update the scroll
  useEffect(() => {
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf); // Continuously call RAF
    };

    requestAnimationFrame(raf); // Start the RAF loop

    return () => {
      // Clean up any ongoing animations when the component is unmounted
      lenis.destroy();
    };
  }, [lenis]);

  // Inline styles for shake animation
  const shakeAnimation = {
    animation: "shake 0.5s ease-in-out",
  };

  const buttonStyles = {
    position: "fixed",
    bottom: "1rem",
    right: "1rem",
    textAlign: "center",
    fontSize: "0.5rem",
    color: "black",
    padding: "0.5rem 1rem",
    zIndex: 10,
    transition: "all 0.3s ease-in-out",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="m-[-2rem] relative">
        {/* Preloader */}
        {showPreloader ? (
          <div className="m-[-2rem] overflow-x-hidden relative">
            <Preloader />
          </div>
        ) : (
          <>
            {/* Define Routes */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/About" element={<AboutPage />} />
              <Route path="/Services" element={<ServicePage />} />
              <Route path="/service-detail" element={<ServiceDetail />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/detail1" element={<Detail1 />} />
              <Route path="/detail2" element={<Detail2 />} />
              <Route path="/detail3" element={<Detail3 />} />
              <Route path="/detail4" element={<Detail4 />} />
              <Route path="/detail5" element={<Detail5 />} />
              <Route path="/detail6" element={<Detail6 />} />
              <Route path="/detail7" element={<Detail7 />} />
              <Route path="/detail8" element={<Detail8 />} />
              <Route path="/detail9" element={<Detail9 />} />
              <Route path="/detail10" element={<Detail10 />} />
              <Route path="/detail11" element={<Detail11 />} />
              <Route path="/detail12" element={<Detail12 />} />
              <Route path="/detail13" element={<Detail13 />} />
              <Route path="/detail14" element={<Detail14 />} />
              <Route path="/detail15" element={<Detail15 />} />
            </Routes>
          </>
        )}

        {/* Bottom-right WhatsApp button */}
        <button
          style={{
            ...buttonStyles,
            ...(isShaking ? shakeAnimation : {}),
          }}
          onClick={() => window.open("https://wa.me/+971567907012", "_blank")}
        >
          <img
            src={Whatsapp}
            alt="WhatsApp Icon"
            loading="lazy"
            className="w-10 h-10 2xl:w-14 2xl:h-14 hover:scale-125"
          />
        </button>

        {/* Inline styles for shake animation */}
        <style>{`
          @keyframes shake {
            0% { transform: translateX(0); }
            12.5% { transform: translateX(-5px); }
            25% { transform: translateX(5px); }
            35.5% { transform: translateX(-5px); }
            50% { transform: translateX(0); }
            65.5% { transform: translateY(-5px); }
            75% { transform: translateY(5px); }
            85.5% { transform: translateY(-5px); }
            100% { transform: translateY(0); }
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;
