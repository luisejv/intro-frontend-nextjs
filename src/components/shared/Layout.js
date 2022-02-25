import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="position-relative layout-wrapper">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
