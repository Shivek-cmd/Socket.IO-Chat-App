import React, { useState } from "react";
import { Link } from "react-router-dom";

function Join() {
  const [user, setUser] = useState("");

  const handleInputChange = (e) => {
    setUser(e.target.value);
  };

  const handleStartClick = () => {
    if (user.trim() !== "") {
      localStorage.setItem("user", user);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          C Chat
        </h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-3 mb-4 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={user}
          onChange={handleInputChange}
        />
        <Link
          to="/chat"
          className={`block w-full text-center py-2 rounded-lg ${
            user.trim() !== ""
              ? "bg-cyan-600 text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              : "bg-gray-600 text-gray-400 cursor-not-allowed"
          }`}
          onClick={handleStartClick}
        >
          <button disabled={user.trim() === ""} className="w-full h-full">
            Start
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Join;
