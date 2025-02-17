import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="bg-white font-Poppins overflow-hidden z-0">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
