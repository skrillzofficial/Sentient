import React from "react";
import {
  Trophy,
  Brain,
  DollarSign,
  Shield,
  Sword,
  Eye,
  Settings,
} from "lucide-react";

const Agents = () => {
  return (
    <div className="min-h-screen bg-gray-900 ">
      <div className="flex flex-col items-center justify-center pt-10 md:pt-20 ">
        {/* Toggle Buttons Container */}
        <div className="w-full flex justify-center items-center">
          <div className="inline-flex rounded-lg shadow-md p-1" role="group">
            <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all hover:bg-blue-600/20 focus:bg-blue-600/30 focus:outline-none border border-blue-500/30 text-white hover:text-blue-300 focus:text-blue-300 w-full md:w-[200px]">
              {" "}
              <Brain size={16} className="text-blue-400" />
              <span>Agent</span>
            </button>

            <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all hover:bg-purple-600/20 focus:bg-purple-600/30 focus:outline-none border border-purple-500/30 text-white hover:text-purple-300 focus:text-purple-300 w-full md:w-[200px] mx-1">
              <Trophy size={16} className="text-purple-400" />
              <span>Arena</span>
            </button>

            <button
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all
                  hover:bg-green-600/20 focus:bg-green-600/30 focus:outline-none
                  border border-green-500/30 text-white hover:text-green-300 focus:text-green-300
                  w-full md:w-[200px]"
            >
              <DollarSign size={16} className="text-green-400" />
              <span>Finance</span>
            </button>
          </div>
        </div>
        {/* TEXT TOP */}
        <div className="pt-10 md:pt-10 flex flex-col gap-5 justify-center items-center text-center ">
          <h1 className="text-4xl  text-blue-900 font-bold">
            AI Agent Arsenal
          </h1>
          <p className="text-xl text-white opacity-50">
            Manage your sentient warriors and track their evolution
          </p>
        </div>
        {/* Agents */}
      </div>
      {/* 3 Agents container */}
      <div className="flex flex-col md:flex-col lg:flex-row gap-6 p-4 jusity-center items-center">
        {/* Agent 1 - Nexus Prime */}
        <div className="p-4 rounded-lg shadow-sm space-y-4 w-[300px] md:w-[600px] lg:[300px] text-white bg-gray-800">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-500">Nexus Prime</h1>
            <button className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              Active
            </button>
          </div>

          <div>
            <p className="text-gray-600">Aggressive Strategist</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="font-medium">Level 15</p>
              <p className="text-sm">2340/3000 XP</p>
            </div>
            <div className="w-full bg-purple-500 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "78%" }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <span className="flex items-center gap-1">
              <Shield size={16} />
              <p className="text-[9px] md:text-[12px]">Health: 95</p>
            </span>
            <span className="flex items-center gap-1">
              <Sword size={16} />
              <p className="text-[9px] md:text-[12px]">Attack: 87</p>
            </span>
            <span className="flex items-center gap-1">
              <Shield size={16} />
              <p className="text-[9px] md:text-[12px]">Defense: 72</p>
            </span>
            <span className="flex items-center gap-1">
              <Brain size={16} />
              <p className="text-[9px] md:text-[12px]">IQ: 91</p>
            </span>
          </div>

          <div className="flex justify-between py-2 border-t border-b border-gray-100">
            <div className="text-center">
              <p className="font-bold">23</p>
              <p className="text-xs text-gray-500">Wins</p>
            </div>
            <div className="text-center">
              <p className="font-bold">4</p>
              <p className="text-xs text-gray-500">Losses</p>
            </div>
            <div className="text-center">
              <p className="font-bold">$125.5</p>
              <p className="text-xs text-gray-500">Earned</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <button className="flex items-center gap-1 px-12 py-2 bg-black text-blue-500 rounded-md text-sm  hover:bg-blue-300 transition">
              <Eye size={16} /> Watch
            </button>
            <button className="flex items-center gap-1 px-12 py-2 bg-black text-purple-500 rounded-md text-sm  hover:bg-purple-300 transition">
              <Settings size={16} /> Manage
            </button>
          </div>
        </div>

        {/* Agent 2 - Quantum Shadow */}
        <div className="p-4 rounded-lg shadow-sm space-y-4  w-[300px] md:w-[600px] lg:[400px] text-white bg-gray-800">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-500">Quantum Shadow</h1>
            <button className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
              Training
            </button>
          </div>

          <div>
            <p className="text-gray-600">Stealth Operative</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="font-medium">Level 12</p>
              <p className="text-sm">1890/2400 XP</p>
            </div>
            <div className="w-full bg-purple-500 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <span className="flex items-center gap-1">
              <Shield size={16} />
              <p className="text-[9px] md:text-[12px]">Health: 82</p>
            </span>
            <span className="flex items-center gap-1">
              <Sword size={16} />
              <p className="text-[9px] md:text-[12px]">Attack: 93</p>
            </span>
            <span className="flex items-center gap-1">
              <Shield size={16} />
              <p className="text-[9px] md:text-[12px]">Defense: 65</p>
            </span>
            <span className="flex items-center gap-1">
              <Brain size={16} />
              <p className="text-[9px] md:text-[12px]">IQ: 88</p>
            </span>
          </div>

          <div className="flex justify-between py-2 border-t border-b border-gray-100">
            <div className="text-center">
              <p className="font-bold">15</p>
              <p className="text-xs text-gray-500">Wins</p>
            </div>
            <div className="text-center">
              <p className="font-bold">6</p>
              <p className="text-xs text-gray-500">Losses</p>
            </div>
            <div className="text-center">
              <p className="font-bold">$87.3</p>
              <p className="text-xs text-gray-500">Earned</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <button className="flex items-center gap-1 px-12 py-2 bg-black text-blue-500 rounded-md text-sm  hover:bg-blue-300 transition">
              <Eye size={16} /> Watch
            </button>
            <button className="flex items-center gap-1 px-12 py-2 bg-black text-purple-500 rounded-md text-sm  hover:bg-purple-300 transition">
              <Settings size={16} /> Manage
            </button>
          </div>
        </div>

        {/* Agent 3 - Iron Gaurdian */}
        <div className="p-4 rounded-lg shadow-sm space-y-4  w-[300px] md:w-[600px] lg:[400px]  text-white bg-gray-800">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-500">Iron Guardian</h1>
            <button className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
              Idle
            </button>
          </div>

          <div>
            <p className="text-gray-600">Heavy Assault</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="font-medium">Level 18</p>
              <p className="text-sm">3450/4500 XP</p>
            </div>
            <div className="w-full bg-purple-500 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <span className="flex items-center gap-1">
              <Shield size={16} />
              <p className="text-[9px] md:text-[12px]">Health: 120</p>
            </span>
            <span className="flex items-center gap-1">
              <Sword size={16} />
              <p className="text-[9px] md:text-[12px]">Attack: 78</p>
            </span>
            <span className="flex items-center gap-1">
              <Shield size={16} />
              <p className="text-[9px] md:text-[12px]">Defense: 95</p>
            </span>
            <span className="flex items-center gap-1">
              <Brain size={16} />
              <p className="text-[9px] md:text-[12px]">IQ: 75</p>
            </span>
          </div>

          <div className="flex justify-between py-2 border-t border-b border-gray-100">
            <div className="text-center">
              <p className="font-bold">34</p>
              <p className="text-xs text-gray-500">Wins</p>
            </div>
            <div className="text-center">
              <p className="font-bold">9</p>
              <p className="text-xs text-gray-500">Losses</p>
            </div>
            <div className="text-center">
              <p className="font-bold">$210.0</p>
              <p className="text-xs text-gray-500">Earned</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <button className="flex items-center gap-1 px-12 py-2 bg-black text-blue-600 rounded-md text-sm hover:bg-blue-300  transition">
              <Eye size={16} /> Watch
            </button>
            <button className="flex items-center gap-1 px-12 py-2 bg-black text-purple-500 rounded-md text-sm hover:bg-purple-300 transition">
              <Settings size={16} /> Manage
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-5">
          <button className="flex justify-center  items-center gap-2 py-2 px-10 rounded-lg text-black text-sm bg-purple-900 hover:bg-purple-500 font-bold"><Brain size={20} color="black"/> Create New Agent</button>
      </div>
    </div>
  );
};

export default Agents;
