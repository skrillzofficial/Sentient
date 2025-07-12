import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CreditCard,
  WalletCards,
  TrendingUp,
  History,
  ArrowDownLeft,
  Plus,
  Minus,
  ArrowRight,
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

const Wallet = () => {
  const [activeTab, setActiveTab] = useState("transactions");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Data arrays moved outside return for better organization
  const walletCards = [
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

  const transactions = [
    {
      id: 1,
      type: "credit",
      icon: <Plus className="text-green-500" />,
      merchant: "Nexus Prime Victory",
      date: "2024-01-20 14:30",
      amount: "+$125.50",
      status: "Completed",
      statusColor: "text-green-500",
    },
    {
      id: 2,
      type: "debit",
      icon: <Minus className="text-red-500" />,
      merchant: "Shadow Weaver Battle Entry",
      date: "2024-01-18 09:15",
      amount: "-$89.99",
      status: "Completed",
      statusColor: "text-green-500",
    },
    {
      id: 3,
      type: "credit",
      icon: <ArrowDownLeft className="text-blue-500" />,
      merchant: "Credit Card Deposit",
      date: "2024-01-15 16:45",
      amount: "+$200.00",
      status: "Processing",
      statusColor: "text-yellow-500",
    },
    {
      id: 4,
      type: "credit",
      icon: <Plus className="text-green-500" />,
      merchant: "Iron Guardian Victory",
      date: "2024-01-10 11:20",
      amount: "+$5.25",
      status: "Completed",
      statusColor: "text-green-500",
    },
    {
      id: 5,
      type: "Debit",
      icon: <ArrowUpRight className="text-green-500" />,
      merchant: "Bank Transfer",
      date: "2024-01-10 11:20",
      amount: "-$5.25",
      status: "Pending",
      statusColor: "text-yellow-500",
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Header Section */}
      <div className="flex justify-between items-center px-5 py-5 bg-gray-900 sticky top-0 z-10">
        <div className="flex gap-5 items-center">
          <Link to="/" className="hover:bg-green-500 p-2 rounded-full">
            <ArrowLeft size={20} className="text-gray-400 hover:text-black" />
          </Link>
          <div className="flex flex-col">
            <h1 className="text-blue-400 text-2xl md:text-3xl font-medium">
              Wallet
            </h1>
            <p className="hidden md:block text-gray-500 text-sm">
              Manage your funds and transactions
            </p>
          </div>
        </div>
        <button className="flex gap-3 bg-blue-500 hover:bg-blue-600 items-center py-2 px-4 rounded-lg transition-colors">
          <CreditCard size={20} className="text-white" />
          <span className="text-sm hidden md:block font-medium">
            Connect Bank
          </span>
        </button>
      </div>

      {/* Main Content */}
      <div className="p-4 md:p-6">
        {/* Wallet Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {walletCards.map((card) => (
            <div
              key={card.id}
              className={`${card.bgColor} p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border ${card.borderColor}`}
            >
              <p className={`${card.textColor} text-sm font-medium`}>
                {card.title}
              </p>
              <div
                className={`${card.dataColor} flex justify-between items-center mt-2 mb-3`}
              >
                <span className="text-xl font-bold">{card.amount}</span>
                {card.icon}
              </div>
              <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
                <div className={`flex items-center gap-1 ${card.dataColor}`}>
                  {card.trend === "up" && <ArrowUpRight size={16} />}
                  {card.trend === "down" && <ArrowDown size={16} />}
                  <p className="text-sm font-medium">{card.change}</p>
                </div>
                <span className="text-gray-400 text-xs">{card.period}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="bg-gray-900 rounded-lg mb-8 overflow-hidden w-full md:w-[400px]">
          <div className="flex flex-col md:flex-row">
            {["transactions", "deposit", "withdraw"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-6 py-3 font-medium text-sm md:text-base transition-colors duration-200 ${
                  activeTab === tab
                    ? "bg-black text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "transactions" && (
          <div className="space-y-4">
            <h3 className="text-blue-400 font-medium text-xl mb-4">
              Recent Transactions
            </h3>
            <div className="space-y-3">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex justify-between items-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <div className="flex gap-4 items-center">
                    <div
                      className={`p-3 rounded-full ${
                        transaction.type === "credit"
                          ? "bg-green-900/30"
                          : "bg-red-900/30"
                      }`}
                    >
                      {transaction.icon}
                    </div>
                    <div>
                      <p className="font-medium">{transaction.merchant}</p>
                      <p className="text-gray-500 text-sm">
                        {transaction.date}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className={`font-semibold ${
                        transaction.type === "credit"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {transaction.amount}
                    </p>
                    <p className={`text-sm ${transaction.statusColor}`}>
                      {transaction.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 mt-4 ml-auto">
              View all transactions <ArrowRight size={16} />
            </button>
          </div>
        )}

        {activeTab === "deposit" && (
          <div className="bg-gray-900 rounded-lg p-6 flex flex-col md:flex-row gap-8">
            {/* Deposit Left Side - Form */}
            <div className="flex-1">
              <h2 className="text-green-400 text-2xl font-bold mb-6">
                Deposit Funds
              </h2>

              {/* Amount Input */}
              <div className="mb-4">
                <label
                  htmlFor="amount-input"
                  className="block text-base font-medium text-gray-300 mb-2"
                >
                  Amount (USD)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    $
                  </span>
                  <input
                    type="number"
                    name="amount"
                    id="amount-input"
                    className="border-2 focus:border-blue-500 block w-full pl-8 pr-4 py-3 text-sm border-blue-500 bg-gray-800 rounded-md text-white"
                    placeholder="0.00"
                    inputMode="decimal"
                    min="0.00"
                    step="1.00"
                  />
                </div>
              </div>

              {/* Quick Amount Buttons */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-3 my-6">
                {[100, 250, 500].map((amount) => (
                  <button
                    key={amount}
                    className="border border-green-500 bg-gray-800 hover:bg-green-500 hover:text-white px-20 py-2 rounded-lg transition-colors duration-200 text-gray-300"
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              {/* Deposit Button */}
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg w-full transition-colors duration-200 flex items-center justify-center gap-2">
                <Plus className="h-5 w-5" />
                Deposit Funds
              </button>
            </div>

            {/* Deposit Right Side - Payment Methods */}
            <div className="flex-1 border-t md:border-t-0 md:border-l border-gray-700 pt-6 md:pt-0 md:pl-6">
              <h2 className="text-green-400 text-2xl font-bold mb-6">
                Payment Methods
              </h2>

              <div className="space-y-4">
                {[
                  { id: "card", name: "Credit/Debit Card", icon: "💳" },
                  { id: "bank", name: "Bank Transfer", icon: "🏦" },
                  { id: "crypto", name: "Cryptocurrency", icon: "🪙" },
                ].map((method) => (
                  <div
                    key={method.id}
                    className="flex items-center gap-4 p-4 bg-gray-800 hover:border-green-500 border rounded-lg cursor-pointer hover:bg-gray-700 transition-colors duration-200"
                  >
                    <span className="text-lg">{method.icon}</span>
                    <span className="text-gray-300">{method.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "withdraw" && (
          <div className="flex flex-col md:flex-row gap-8">
            {/* Withdraw Form Section */}
            <div className="flex-1">
              <h2 className="text-yellow-500 text-2xl font-bold mb-6">
                Withdraw Funds
              </h2>

              {/* Amount Input */}
              <div className="mb-5">
                <label
                  htmlFor="withdraw-amount"
                  className="block text-base font-medium text-gray-300 mb-2"
                >
                  Amount (USD)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    $
                  </span>
                  <input
                    type="number"
                    id="withdraw-amount"
                    className="border-2 focus:border-blue-500 block w-full pl-8 pr-4 py-3 text-sm border-blue-500 bg-gray-800 rounded-md text-white"
                    placeholder="0.00"
                    inputMode="decimal"
                    min="0"
                    step="1"
                  />
                </div>
                <div className="flex gap-1 text-gray-300 my-2">
                  <p>Available:</p>
                  <span className="font-medium">$4,691.50</span>
                </div>

                {/* Quick Amount Buttons */}
                <div className="flex flex-col md:flex-row gap-3 my-4">
                  {[100, 250, 500].map((amount) => (
                    <button
                      key={amount}
                      className="border-2 border-yellow-500 bg-gray-800 hover:bg-yellow-500 hover:text-black px-4 py-2 rounded-lg transition-colors duration-200 text-yellow-500"
                      onClick={() => {
                        /* Set amount value */
                      }}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>

                {/* Withdraw Button */}
                <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-medium py-3 px-6 rounded-lg w-full transition-colors duration-200 flex items-center justify-center gap-2">
                  <Minus className="h-5 w-5" />
                  Withdraw Funds
                </button>
              </div>
            </div>

            {/* Withdrawal Methods Section */}
            <div className="flex-1 border-t md:border-t-0 md:border-l border-gray-700 pt-6 md:pt-0 md:pl-6">
              <h2 className="text-blue-500 text-2xl font-bold mb-6">
                Withdrawal Info
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 text-sm">Processing Time:</p>
                  <span>1-3 business days</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 text-sm">Minimum Amount:</p>
                  <span>$50.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 text-sm">Daily Limit:</p>
                  <span>$5,000.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 text-sm">Fee:</p>
                  <span className="text-green-500">Free</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wallet;
