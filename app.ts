import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectToMongoDB } from "./config/db";
import { Server, ServerOptions } from "socket.io";

import authRouter from "./routes/auth";
import errorHandler from "./middleware/error";

const app: Express = express();
dotenv.config();
connectToMongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRouter);

app.get("/", (req: Request, res: Response) => {
  res.json("Api Running");
});

app.use(errorHandler);

const server = app.listen(process.env.PORT||3000, () => {
  console.log("Server running!");
});

const io = new Server(server, {
  path: '/socket.io',
  pingTimeout: 60000,
} as ServerOptions);

io.of("/socket.io").on("connection", async (socket) => {
  console.log("Connected to socket.io");
  
  socket.on("join chat", async () => {
    
    const delay=100;

    const messages = [
      'Hello',
      'Hello How are you?',
      'Hello How are you?',
      'Hello How are you?',
    ];

    for (let i = 0; i < messages.length; i++) {
      setTimeout(() => {
        socket.emit('message', messages[i]);
      }, delay * (i + 1));
    }
  });
});

