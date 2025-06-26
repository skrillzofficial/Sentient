import React from "react";
import { Brain, Wallet } from "lucide-react";

const Header = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="flex justify-between items-center bg-black h-25 text-white px-4">
        {/* Logo Sidw */}
        <div className="flex gap-4 items-center">
          <Brain color="blue" size={40} />
          <h1 className="text-blue-800 text-2xl hidden md:block">SENTIENT STRUGGLE</h1>
        </div>
        {/* Buttons on the right side */}
        <div className="flex gap-4">
          <button className="text-blue-600 px-5 py-2 rounded-lg bg-black hover:bg-blue-500 hover:text-black hover:opacity-35 flex items-center gap-3">
            {" "}
            <Wallet color="blue" size={20} /> Wallet
          </button>
          <button className="text-purple-500 px-5 py-2 rounded-lg bg-black hover:bg-purple-500 hover:text-black">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
