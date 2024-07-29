// import express from "express";
// import { createServer } from "http";
// import { Server } from "socket.io";
// import cors from "cors";

// const port = 3000;
// const app = express();

// const corsOptions = {
//   origin: "http://localhost:5173", // Replace with your frontend URL
//   methods: ["GET", "POST"], // Adjust methods as needed
//   allowedHeaders: ["Content-Type", "Authorization"], // Adjust headers as needed
// };

// app.use(cors(corsOptions));

// const httpServer = createServer(app);
// const io = new Server(httpServer, {
//   cors: {
//     origin: "http://localhost:5173", // Replace with your frontend URL
//     methods: ["GET", "POST"], // Adjust methods as needed
//   },
// });

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// io.on("connection", (socket) => {
//   console.log(`New connection: ${socket.id}`);

//   socket.on("hello", (data) => {
//     console.log("Received data:", data);
//     socket.emit("hello", "Hello from server!"); // Optional: Respond to client
//   });

//   socket.on("message", (message) => {
//     io.emit("message", message); // Broadcast message to all connected clients
//   });

//   // Handle disconnection
//   socket.on("disconnect", () => {
//     console.log(`User disconnected: ${socket.id}`);
//   });
// });

// httpServer.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
