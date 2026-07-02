import dotenv from "dotenv";

dotenv.config();

import http from "http";

import app from "./app.js";

import connectDB from "./config/db.js";

import {
initializeSocket
}
from "./sockets/socket.js";

connectDB();

const PORT =
process.env.PORT || 8000;

const server =
http.createServer(app);

initializeSocket(server);

server.listen(
PORT,
()=>{

console.log(
`Server Running On Port ${PORT}`
);

}
);
