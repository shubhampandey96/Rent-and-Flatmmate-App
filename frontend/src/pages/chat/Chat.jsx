import { useEffect, useState } from "react";
import socket from "../../socket/socket";
import {
  getConversation,
  sendMessageApi,
} from "../../services/chatService";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  // Replace with actual user id
  const receiverId = "USER_ID";

  useEffect(() => {
    socket.connect();

    socket.on(
      "receiveMessage",
      (newMessage) => {
        setMessages((prev) => [
          ...prev,
          newMessage,
        ]);
      }
    );

    fetchMessages();

    return () => {
      socket.disconnect();
    };
  }, []);

  const fetchMessages = async () => {
    try {
      const data =
        await getConversation(
          receiverId
        );

      setMessages(
        data.messages || []
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSend = async () => {
    if (!message.trim()) return;

    try {
      const msg = {
        receiverId,
        text: message,
      };

      await sendMessageApi(
        receiverId,
        message
      );

      socket.emit(
        "sendMessage",
        msg
      );

      setMessages((prev) => [
        ...prev,
        msg,
      ]);

      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-6">
        Chat
      </h1>

      <div
        className="
        border
        rounded-lg
        h-[500px]
        overflow-y-auto
        p-4
        "
      >
        {messages.map(
          (msg, index) => (
            <div
              key={index}
              className="
              bg-gray-100
              p-3
              rounded
              mb-3
              "
            >
              {msg.text}
            </div>
          )
        )}
      </div>

      <div className="flex mt-4 gap-3">

        <input
          type="text"
          value={message}
          onChange={(e) =>
            setMessage(
              e.target.value
            )
          }
          placeholder="Type message..."
          className="
          flex-1
          border
          p-3
          rounded
          "
        />

        <button
          onClick={handleSend}
          className="
          bg-blue-600
          text-white
          px-6
          rounded
          "
        >
          Send
        </button>

      </div>

    </div>
  );
}

export default Chat;