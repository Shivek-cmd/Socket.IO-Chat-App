import React, { useState } from "react";
import socketIO from "socket.io-client";
import { Routes, Route } from "react-router-dom";
import Join from "./Components/Join/Join.jsx";
import Chat from "./Components/Chat/Chat.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Join />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
