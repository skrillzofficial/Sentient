import React, { useState } from "react";
import { Brain, Wallet, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      {/* Navbar */}
      <div className="">
        <div className="flex justify-between items-center bg-black h-16 text-white px-4">
          {/* Logo Side */}
          <div className="flex gap-4 items-center">
            <Brain color="#1e40af" size={40} />
            <h1 className="text-blue-800 text-2xl hidden md:block">
              SENTIENT STRUGGLE
            </h1>
          </div>
          {/* Buttons on the right side */}
          <div className="hidden md:flex gap-4">
            <Link to="/wallet">
              <button className="text-blue-600 px-5 py-2 rounded-lg bg-black hover:bg-blue-500 hover:text-black hover:opacity-35 flex items-center gap-3">
                <Wallet color="#1e40af" size={20} /> Wallet
              </button>
            </Link>
            <Link to="/signIn">
              <button className="text-purple-500 px-5 py-2 rounded-lg bg-black hover:bg-purple-500 hover:text-black">
                Sign In
              </button>
            </Link>
          </div>
          {/* Hamburger menu button for mobile */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden px-4">
            {isOpen ? (
              <X size={34} color="#1e40af" />
            ) : (
              <Menu size={34} color="#1e40af" />
            )}
          </button>
        </div>
        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="md:hidden bg-black px-6 py-4 space-y-4">
            <div className="flex flex-col gap-4 justify-center items-start">
              <Link to="/wallet" onClick={() => setIsOpen(false)}>
                <button className="text-blue-600 px-5 py-2 rounded-lg bg-black hover:bg-blue-500 hover:text-black hover:opacity-35 flex items-center gap-2">
                  <Wallet color="#1e40af" size={20} /> Wallet
                </button>
              </Link>
              <Link to="/signIn" onClick={() => setIsOpen(false)}>
                <button className="text-purple-500 px-5 py-2 rounded-lg bg-black hover:bg-purple-500 hover:text-black">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
