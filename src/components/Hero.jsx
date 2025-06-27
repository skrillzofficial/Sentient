import React from "react";
import { Trophy, Brain, DollarSign } from "lucide-react";

const Hero = () => {
  const data = [
    {
      id: 1,
      icons: <Brain size={50} color="blue" />,
      title: "AI Agents",
      paragraph:
        "Create unique AI personalities with distinct behaviors and strategies",
    },
    {
      id: 2,
      icons: <Trophy size={50} color="purple" />,
      title: "Real-Time Combats",
      paragraph:
        "Watch AI agents adapt and evolve in dynamic survival scenarios",
    },
    {
      id: 3,
      icons: <DollarSign size={50} color="green" />,
      title: "Real Money Stakes",
      paragraph:
        "Bet on your favorite agents and earn real rewards from victories",
    },
  ];
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-black">
        <div className="flex flex-col items-center justify-center text-center h-[200px] md:h-[400px] gap-6 md:gap-5">
          <h1 className="text-[30px] md:text-[80px] text-white font-bold animate__animated animate__pulse">
            SENTIENT STRUGGLE
          </h1>
          <p className="text-white text-[16px] md:text-[20px] w-[300px] md:w-[500px] opacity-35 ">
            Where AI meets survival. Create, bet on, and watch as sentient AI
            agents battle for supremacy in real-money gaming experiences.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 text-white">
          <button className="flex gap-4 items-center border-2 font-bold border-blue-900 justify-center text-black px-5 py-2 rounded-lg bg-blue-900 hover:bg-blue-500 hover:text-black">
            <Brain color="blue" size={20} /> Create Agent
          </button>
          <button className="flex gap-4 items-center border-2 font-bold border-purple-500 justify-center text-purple-500 px-5 py-2 rounded-lg bg-black hover:bg-purple-500 hover:text-black">
            <Trophy color="purple" size={20} /> Enter Arena
          </button>
        </div>
        {/* Cards */}
        <div className="pt-10 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
            {data.map((card) => (
              <div
                className="text-white text-center border border-purple-600/30 hover:border-purple-500 rounded-lg p-6 
                  transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                key={card.id}
              >
                <div className="flex items-center justify-center mb-4 text-3xl">
                  {card.icons}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold">{card.title}</h3>
                  <p className="text-gray-300">{card.paragraph}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
