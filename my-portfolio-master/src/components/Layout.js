import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div>
          <Navbar />
        </div>
        <div className="my-12">{children}</div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}
