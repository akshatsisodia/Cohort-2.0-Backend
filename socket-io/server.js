import {createServer } from "http";
import { Server } from "socket.io";
import app from "./src/app.js";


const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection",(socket)=>{
    console.log("user is connected");
});

io.listen(3000);

