import api from "./api";

export const getConversation = async (
  userId
) => {
  const response = await api.get(
    `/chat/conversation/${userId}`
  );

  return response.data;
};

export const sendMessageApi = async (
  receiverId,
  text
) => {
  const response = await api.post(
    "/chat/send",
    {
      receiverId,
      text,
    }
  );

  return response.data;
};