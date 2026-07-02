import { Server } from "socket.io";

let io;

const initializeSocket = (server) => {

    io = new Server(server, {

        cors:{
            origin:"*",
            methods:["GET","POST"]
        }

    });

    const onlineUsers = new Map();

    io.on("connection",(socket)=>{

        console.log(
            "User Connected:",
            socket.id
        );

        socket.on(
            "join",
            (userId)=>{

                onlineUsers.set(
                    userId,
                    socket.id
                );

            }
        );

        socket.on(
            "sendMessage",
            (data)=>{

                const receiverSocketId =
                onlineUsers.get(
                    data.receiver
                );

                if(receiverSocketId){

                    io.to(
                        receiverSocketId
                    ).emit(
                        "receiveMessage",
                        data
                    );

                }

            }
        );

        socket.on(
            "disconnect",
            ()=>{

                console.log(
                    "User Disconnected"
                );

            }
        );

    });

};

export {
    initializeSocket,
    io
};