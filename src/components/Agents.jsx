import React from "react";
import { Trophy, Brain, DollarSign } from "lucide-react";

const Agents = () => {
  return (
    <div>
      <div className="bg-gray-900  flex flex-col items-center justify-center pt-10 md:pt-20 ">
        {/* Toggle Buttons Container */}
        <div className="w-full flex justify-center items-center">
          <div
            className="inline-flex rounded-lg shadow-md p-1"
            role="group">
            <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all hover:bg-blue-600/20 focus:bg-blue-600/30 focus:outline-none border border-blue-500/30 text-white hover:text-blue-300 focus:text-blue-300 w-full md:w-[200px]"> {" "}
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
          {/* TEXT TOP */}
          <div>
            <h1>AI Agent Arsenal</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
