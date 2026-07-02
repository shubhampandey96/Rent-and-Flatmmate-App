import api from "./api";

export const sendInterest = async (listingId) => {
  const response = await api.post(
    `/interests/send/${listingId}`
  );

  return response.data;
};

export const getMyRequests = async () => {
  const response = await api.get(
    "/interests/my-requests"
  );

  return response.data;
};

export const getReceivedRequests = async () => {
  const response = await api.get(
    "/interests/received"
  );

  return response.data;
};

export const acceptRequest = async (id) => {
  const response = await api.patch(
    `/interests/accept/${id}`
  );

  return response.data;
};

export const rejectRequest = async (id) => {
  const response = await api.patch(
    `/interests/reject/${id}`
  );

  return response.data;
};