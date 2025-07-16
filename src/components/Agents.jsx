import React, { useState } from "react";
import {
  Trophy,
  Brain,
  DollarSign,
  Shield,
  Sword,
  Eye,
  Settings,
  Users,
  Clock,
  CreditCard,
  Play,
  WalletCards,
  TrendingUp,
  ArrowDownLeft,
  ArrowUpRight,
  Minus,
  ArrowDown,
  ArrowDownRight,
} from "lucide-react";

const Agents = () => {
  // Data arrays moved outside return for better organization
  const FinanceCards = [
    {
      id: 1,
      title: "Available Balance",
      amount: "$4,691.50",
      change: "+12.5%",
      period: "this week",
      trend: "up",
      icon: <WalletCards size={40} className="text-green-500" />,
      bgColor: "bg-green-200",
      textColor: "text-gray-900",
      dataColor: "text-green-500",
      borderColor: "border-green-900 border-2",
    },
    {
      id: 2,
      title: "Pending",
      amount: "$100",
      change: "+3.2%",
      period: "this month",
      trend: "up",
      icon: <History size={40} className="text-orange-500" />,
      bgColor: "bg-gray-900",
      textColor: "text-gray-300",
      dataColor: "text-orange-500",
      borderColor: "border-orange-500 border",
    },
    {
      id: 3,
      title: "Total Earnings",
      amount: "$2,340.75",
      change: "-8.1%",
      period: "since last month",
      trend: "down",
      icon: <TrendingUp size={40} className="text-purple-500" />,
      bgColor: "bg-gray-900",
      textColor: "text-gray-300",
      dataColor: "text-purple-500",
      borderColor: "border-purple-500 border",
    },
    {
      id: 4,
      title: "Total Deposits",
      amount: "$2,500",
      change: "15%",
      period: "target progress",
      trend: "neutral",
      icon: <ArrowDownLeft size={40} className="text-blue-500" />,
      bgColor: "bg-gray-900",
      textColor: "text-gray-300",
      dataColor: "text-blue-500",
      borderColor: "border-blue-500 border",
    },
  ];

  const [activeTab, setActiveTab] = useState("agent");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gray-900 ">
      <div className="flex flex-col w-11/12 container mx-auto pt-10 md:pt-20 ">
        {/* Toggle Buttons Container */}
        <div className=" flex flex-col md:flex-row justify-center items-center">
          <div className="inline-flex rounded-lg shadow-md p-1" role="group">
            <button
              onClick={() => handleTabChange("agent")}
              className={`flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all hover:bg-blue-600/20 border ${
                activeTab === "agent"
                  ? "bg-blue-600/30 border-blue-500/60 text-blue-300"
                  : "border-blue-500/30 text-white hover:text-blue-300"
              } w-full md:w-[200px]`}
            >
              <Brain size={16} className="text-blue-400" />
              <span>Agent</span>
            </button>

            <button
              onClick={() => handleTabChange("arena")}
              className={`flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all hover:bg-purple-600/20 border ${
                activeTab === "arena"
                  ? "bg-purple-600/30 border-purple-500/60 text-purple-300"
                  : "border-purple-500/30 text-white hover:text-purple-300"
              } w-full md:w-[200px] mx-1`}
            >
              <Trophy size={16} className="text-purple-400" />
              <span>Arena</span>
            </button>

            <button
              onClick={() => handleTabChange("finance")}
              className={`flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all hover:bg-green-600/20 border ${
                activeTab === "finance"
                  ? "bg-green-600/30 border-green-500/60 text-green-300"
                  : "border-green-500/30 text-white hover:text-green-300"
              } w-full md:w-[200px]`}
            >
              <DollarSign size={16} className="text-green-400" />
              <span>Finance</span>
            </button>
          </div>
        </div>
        {/* TEXT TOP */}
        <div className="pt-10 md:pt-10 flex flex-col gap-5 justify-center items-center text-center ">
          <h1 className="text-4xl text-blue-900 font-bold">
            {activeTab === "agent"
              ? "AI Agent Arsenal"
              : activeTab === "arena"
              ? "Combat Arenas"
              : "Financial Command Center"}
          </h1>
          <p className="text-xl text-white opacity-50">
            {activeTab === "agent"
              ? "Manage your sentient warriors and track their evolution"
              : activeTab === "arena"
              ? "Live battles and upcoming tournaments where AI agents fight for dominance"
              : "Track earnings, manage investments, and monitor your empire's growth"}
          </p>
        </div>

        {/* Content Area */}
        {activeTab === "agent" && (
          <>
            {/* 3 Agents container */}
            <div className="flex flex-col md:flex-col lg:flex-row gap-6 p-4 justify-center items-center">
              {/* Agent 1 - Nexus Prime */}
              <div className="p-4 rounded-lg shadow-sm space-y-4 w-[300px] md:w-[400px] lg:[400px] text-white bg-gray-800">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-bold text-blue-500">
                    Nexus Prime
                  </h1>
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
              <div className="p-4 rounded-lg shadow-sm space-y-4  w-[300px] md:w-[400px] lg:[400px] text-white bg-gray-800">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-bold text-blue-500">
                    Quantum Shadow
                  </h1>
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
              <div className="p-4 rounded-lg shadow-sm space-y-4  w-[300px] md:w-[380px] lg:[400px]  text-white bg-gray-800">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-bold text-blue-500">
                    Iron Guardian
                  </h1>
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
              <button className="flex justify-center items-center gap-2 py-2 px-10 rounded-lg text-black text-sm bg-purple-900 hover:bg-purple-500 font-bold">
                <Brain size={20} color="black" /> Create New Agent
              </button>
            </div>
          </>
        )}

        {activeTab === "arena" && (
          <div className="p-4 w-full">
            {/* Arena Tab Top*/}
            <div className="flex justify-between items-center px-4">
              <div className="flex gap-2 justify-start items-center">
                <span className="w-[15px] h-[15px] bg-green-400 rounded-full"></span>
                <p className="text-green-400 text-xl font-bold">Active Games</p>
              </div>
              <div className="flex gap-1 bg-green-400 rounded-full px-2">
                <span>4</span>
                <span>Live</span>
              </div>
            </div>

            {/* Arena Cards - 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 mt-5">
              {/* Card 1 - Cyber Arena Championship */}
              <div className="p-4 rounded-lg shadow-sm  hover:border-blue-500 border border-gray-900 space-y-4 w-full max-w-[600px] text-white bg-gray-800">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-bold">
                    Cyber Arena Championship
                  </h1>
                  <button className="px-3 py-1 bg-green-400 text-black rounded-full text-sm">
                    Live
                  </button>
                </div>
                <div>
                  <p className="text-purple-600">Tournament</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 justify-center items-center">
                      <Users size={20} />
                      <span className="text-sm">Participants</span>
                    </div>
                    <span className="text-sm">64/64</span>
                  </div>
                  <div className="w-full bg-purple-500 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Battle Progress</span>
                    <span className="text-sm">75%</span>
                  </div>
                  <div className="w-full bg-purple-500 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex items-center justify-center w-[50%] h-[100px] rounded-lg shadow-xl bg-gray-900/30">
                    <div className="flex flex-col justify-center items-center px-5">
                      <span className="text-green-400 text-xl">$</span>
                      <p className="text-gray-600">Prize Pool</p>
                      <p className="text-green-400 text-medium">$5000</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center w-[50%] h-[100px] rounded-lg shadow-xl bg-gray-900/30">
                    <div className="flex flex-col justify-center items-center p-5">
                      <span className="text-blue-400 text-xl">
                        <Trophy size={20} />
                      </span>
                      <p className="text-gray-600">Entry Fee</p>
                      <p className="text-blue-400 text-medium">$25</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center bg-gray-900/30 p-2 rounded-lg">
                  <div className="flex items-center text-sm gap-2">
                    <Clock size={15} className="text-yellow-300" />
                    <span>
                      Time Remaining:{" "}
                      <span className="text-yellow-300">2hr 34min</span>
                    </span>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <button className="flex items-center justify-center w-full gap-4 px-12 py-2 bg-green-500 rounded-md text-sm text-black transition">
                    <Eye size={16} /> Watch Live
                  </button>
                </div>
              </div>

              {/* Card 2 - Neural Network Brawl */}
              <div className="p-4 rounded-lg shadow-sm hover:border-blue-500 border border-gray-900 space-y-4 w-full max-w-[600px] text-white bg-gray-800">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-bold">Neural Network Brawl</h1>
                  <button className="px-3 py-1 bg-yellow-400 text-black rounded-full text-sm">
                    Live
                  </button>
                </div>
                <div>
                  <p className="text-yellow-400">Battle Royale</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 justify-center items-center">
                      <Users size={20} />
                      <span className="text-sm">Participants</span>
                    </div>
                    <span className="text-sm">28/32</span>
                  </div>
                  <div className="w-full bg-purple-500 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex items-center justify-center w-[50%] h-[100px] rounded-lg shadow-xl bg-gray-900/30">
                    <div className="flex flex-col justify-center items-center px-5">
                      <span className="text-green-400 text-xl">$</span>
                      <p className="text-gray-600">Prize Pool</p>
                      <p className="text-green-400 text-medium">$1200</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center w-[50%] h-[100px] rounded-lg shadow-xl bg-gray-900/30">
                    <div className="flex flex-col justify-center items-center p-5">
                      <span className="text-blue-400 text-xl">
                        <Trophy size={20} />
                      </span>
                      <p className="text-gray-600">Entry Fee</p>
                      <p className="text-blue-400 text-medium">$15</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center bg-gray-900/30 p-2 rounded-lg">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock size={15} className="text-yellow-300" />
                    <span>
                      Time Remaining:{" "}
                      <span className="text-yellow-300">5min 23sec</span>
                    </span>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <button className="flex items-center justify-center w-full gap-4 px-12 py-2 bg-yellow-500 rounded-md text-sm text-black transition">
                    <Play size={16} /> Watch Live
                  </button>
                </div>
              </div>

              {/* Card 3 - Quantum Showdown */}
              <div className="p-4 rounded-lg shadow-sm hover:border-blue-500 border border-gray-900 space-y-4 w-full max-w-[600px] text-white bg-gray-800">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-bold">AI Survival Challenge</h1>
                  <button className="px-3 py-1 bg-blue-400 text-black rounded-full text-sm">
                    Schdeduled
                  </button>
                </div>
                <div>
                  <p className="text-green-400">Survival</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 justify-center items-center">
                      <Users size={20} />
                      <span className="text-sm">Participants</span>
                    </div>
                    <span className="text-sm">2/2</span>
                  </div>
                  <div className="w-full bg-purple-500 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex items-center justify-center w-[50%] h-[100px] rounded-lg shadow-xl bg-gray-900/30">
                    <div className="flex flex-col justify-center items-center px-5">
                      <span className="text-green-400 text-xl">$</span>
                      <p className="text-gray-600">Prize Pool</p>
                      <p className="text-green-400 text-medium">$800</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center w-[50%] h-[100px] rounded-lg shadow-xl bg-gray-900/30">
                    <div className="flex flex-col justify-center items-center p-5">
                      <span className="text-blue-400 text-xl">
                        <Trophy size={20} />
                      </span>
                      <p className="text-gray-600">Entry Fee</p>
                      <p className="text-blue-400 text-medium">$10</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center bg-gray-900/30 p-2 rounded-lg">
                  <div className="flex items-center text-sm gap-2">
                    <Clock size={15} className="text-yellow-300" />
                    <span>
                      Time Remaining:{" "}
                      <span className="text-yellow-300">45min 12min</span>
                    </span>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <button className="flex items-center justify-center w-full gap-4 px-12 py-2 bg-black hover:bg-blue-400 rounded-md text-sm text-blue-500 border-blue-500 border hover:text-black transition">
                    <Trophy size={16} /> Register
                  </button>
                </div>
              </div>

              {/* Card 4 - Rookie Rumble */}
              <div className="p-4 rounded-lg hover:border-blue-500 border border-gray-900 shadow-sm space-y-4 w-full max-w-[600px] text-white bg-gray-800">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-bold">Quick Strike Duel</h1>
                  <button className="px-3 py-1 bg-green-400 text-black rounded-full text-sm">
                    Live
                  </button>
                </div>
                <div>
                  <p className="text-blue-400">Team Deathmatch</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 justify-center items-center">
                      <Users size={20} />
                      <span className="text-sm">Participants</span>
                    </div>
                    <span className="text-sm">20/20</span>
                  </div>
                  <div className="w-full bg-purple-500 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 justify-center items-center">
                      <span className="text-sm">Battle Progress</span>
                    </div>
                    <span className="text-sm">90%</span>
                  </div>
                  <div className="w-full bg-purple-500 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex items-center justify-center w-[50%] h-[100px] rounded-lg shadow-xl bg-gray-900/30">
                    <div className="flex flex-col justify-center items-center px-5">
                      <span className="text-green-400 text-xl">$</span>
                      <p className="text-gray-600">Prize Pool</p>
                      <p className="text-green-400 text-medium">$400</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center w-[50%] h-[100px] rounded-lg shadow-xl bg-gray-900/30">
                    <div className="flex flex-col justify-center items-center p-5">
                      <span className="text-blue-400 text-xl">
                        <Trophy size={20} />
                      </span>
                      <p className="text-gray-600">Entry Fee</p>
                      <p className="text-blue-400 text-medium">$8</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center bg-gray-900/30 p-2 rounded-lg">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock size={15} className="text-yellow-300" />
                    <span>
                      Time Remaining:{" "}
                      <span className="text-yellow-300">12min 45sec</span>
                    </span>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <button className="flex items-center justify-center w-full gap-4 px-12 py-2 bg-green-500 rounded-md text-sm text-black transition">
                    <Eye size={16} /> Watch Live
                  </button>
                </div>
              </div>
            </div>
            {/* Create Tournament Button */}
            <div className="flex justify-center items-center mt-5 mb-10">
              <div className="flex items-center justify-center text-black gap-5 bg-purple-500 px-5 py-2 rounded-lg font-semibold hover:bg-purple-400">
                <Trophy size={20} />
                <p>Create Tournament</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === "finance" && (
          <div className="p-4 w-full mt-5">
            {/* Top cards - Responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-7">
              {/* Card 1 */}
              <div className="bg-gray-900/30 border space-y-2 border-green-400 rounded-lg p-4 sm:p-6">
                <p className="text-gray-300">Total Balance</p>
                <div className="flex text-green-400 justify-between items-center">
                  <span className="text-lg sm:text-[20px] font-bold">
                    $4,691.50
                  </span>
                  <WalletCards className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <div className="flex items-center gap-1 text-green-400 text-sm sm:text-base">
                  <ArrowUpRight className="w-4 h-4" />
                  <div className="flex gap-2">
                    <p>
                      <span>+12.5% </span>from last week
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-900/30 border border-blue-400 space-y-2 rounded-lg p-4 sm:p-6">
                <p className="text-gray-300">Total Active Bets</p>
                <div className="flex text-blue-400 justify-between items-center">
                  <span className="text-lg sm:text-[20px] font-bold">
                    $1,249.00
                  </span>
                  <CreditCard className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <div className="flex gap-2 items-center text-blue-400 text-sm sm:text-base">
                  <ArrowUpRight className="w-4 h-4" />
                  <div className="flex gap-2">
                    <p>
                      <span>+8.2% </span>this season
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-900/30 border border-purple-400 space-y-2 rounded-lg p-4 sm:p-6">
                <p className="text-gray-300">Today's Profit</p>
                <div className="flex text-purple-400 justify-between items-center">
                  <span className="text-lg sm:text-[20px] font-bold">
                    $342.80
                  </span>
                  <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <div className="flex gap-2 items-center text-purple-400 text-sm sm:text-base">
                  <ArrowUpRight className="w-4 h-4" />
                  <div className="flex gap-2">
                    <p>
                      <span>+18.9% </span>vs yesterday
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-gray-900/30 border border-yellow-400 space-y-2 rounded-lg p-4 sm:p-6">
                <p className="text-gray-300">Agent ROI</p>
                <div className="flex text-yellow-400 justify-between items-center">
                  <span className="text-lg sm:text-[20px] font-bold">
                    $156.00
                  </span>
                  <DollarSign className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <div className="flex gap-2 items-center text-red-400 text-sm sm:text-base">
                  <ArrowDownRight className="w-4 h-4" />
                  <div className="flex gap-2">
                    <p>
                      <span>-2.1% </span>vs yesterday
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Agents;
