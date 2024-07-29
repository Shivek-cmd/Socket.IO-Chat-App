import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const port = 3000;
const app = express();

// Allow CORS from your frontend URL
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://socket-io-chat-app-blond.vercel.app/",
  ], // Replace with your frontend URL
  methods: ["GET", "POST"], // Adjust methods as needed
  allowedHeaders: ["Content-Type", "Authorization"], // Adjust headers as needed
};

app.use(cors(corsOptions));

// Create HTTP server and pass it to Socket.IO
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: [
      "http://localhost:5173",
      "https://socket-io-chat-app-blond.vercel.app/",
    ],
    methods: ["GET", "POST"], // Adjust methods as needed
  },
});

app.get("/", (req, res) => {
  res.send("hello world");
});

io.on("connection", (socket) => {
  console.log(`New connection: ${socket.id}`);

  socket.on("message", (message) => {
    io.emit("message", message);
  });

  // Add other event handlers if needed
});

httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
