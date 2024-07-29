// import React, { useState, useEffect } from "react";
// import { io } from "socket.io-client";

// const ENDPOINT = "http://localhost:3000";

// function Chat() {
//   const [socket, setSocket] = useState(null);
//   const [user, setUser] = useState(localStorage.getItem("user") || "");
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState("");

//   useEffect(() => {
//     const socketInstance = io(ENDPOINT);

//     socketInstance.on("connect", () => {
//       console.log("Socket connected:", socketInstance.id);
//     });

//     socketInstance.on("message", (message) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//     });

//     socketInstance.on("hello", (data) => {
//       console.log(data);
//     });

//     setSocket(socketInstance);

//     return () => {
//       socketInstance.disconnect();
//     };
//   }, []);

//   const sendMessage = () => {
//     if (inputMessage.trim()) {
//       socket.emit("message", { user, text: inputMessage });
//       setInputMessage("");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-900 p-8">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
//         <div className="text-center text-white mb-4">
//           <h1 className="text-2xl font-bold">Welcome, {user}</h1>
//         </div>
//         <div className="bg-gray-700 h-80 p-4 mb-4 rounded-lg overflow-y-auto">
//           {messages.map((msg, index) => (
//             <div key={index} className="text-white mb-2">
//               <strong>{msg.user}:</strong> {msg.text}
//             </div>
//           ))}
//         </div>
//         <div className="flex">
//           <input
//             type="text"
//             value={inputMessage}
//             onChange={(e) => setInputMessage(e.target.value)}
//             placeholder="Type a message..."
//             className="flex-1 p-3 bg-gray-600 text-white border border-gray-500 rounded-lg"
//           />
//           <button
//             onClick={sendMessage}
//             className="ml-2 bg-cyan-600 text-white p-3 rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Chat;
