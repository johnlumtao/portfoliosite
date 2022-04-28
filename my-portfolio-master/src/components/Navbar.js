import { Link } from "gatsby";
import React from "react";

export default function Navbar() {
  return (
    <nav className="h-14 bg-slate-100">
      <div className="flex flex-row items-center h-full max-w-screen-md mx-auto">
        <Link to="/" className="no-underline hover:underline">Home</Link>
      </div>
    </nav>
  );
}
