import { io } from "socket.io-client";

const socket = io(
  "https://rent-and-flatmmate-backend.onrender.com",
  {
    autoConnect: false,
  }
);

export default socket;