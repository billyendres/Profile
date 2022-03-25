import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="font-orbit tracking-widest">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
