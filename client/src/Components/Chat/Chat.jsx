import React, { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import ScrollToBottom from "react-scroll-to-bottom";

// const ENDPOINT = "https://socket-io-chat-app-evjp.onrender.com";
const ENDPOINT = "http://localhost:3000/";
const socket = io(ENDPOINT);
function Chat() {
  const [inputMessage, setInputMessage] = useState("");
  const [user, setUser] = useState(localStorage.getItem("user") || "");
  const [messages, setMessages] = useState([]);

  const sendMessages = () => {
    if (inputMessage.trim()) {
      socket.emit("message", { user, text: inputMessage });
      setInputMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default behavior of the Enter key (like form submission)
      sendMessages();
    }
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id);
    });

    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect(); // Cleanup on component unmount
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 p-8">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <div className="text-center text-white mb-4">
          <h1 className="text-2xl font-bold">Welcome, {user}</h1>
        </div>
        <ScrollToBottom className="bg-gray-700 h-80 p-4 mb-4 rounded-lg overflow-y-auto">
          <div className="flex flex-col">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex mb-2 ${
                  msg.user === user ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-3 rounded-lg ${
                    msg.user === user
                      ? "bg-cyan-600 text-white"
                      : "bg-gray-500 text-white"
                  }`}
                >
                  <strong>{msg.user === user ? "You" : msg.user}</strong>:{" "}
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </ScrollToBottom>
        <div className="flex mt-4">
          <input
            type="text"
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            value={inputMessage}
            placeholder="Type a message..."
            className="flex-1 p-3 bg-gray-600 text-white border border-gray-500 rounded-lg"
          />
          <button
            onClick={sendMessages}
            className="ml-2 bg-cyan-600 text-white p-3 rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
