import api from "./api";

export const getDashboardStats = async () => {
  const response = await api.get(
    "/admin/dashboard"
  );

  return response.data;
};

export const getAllUsers = async () => {
  const response = await api.get(
    "/admin/users"
  );

  return response.data;
};

export const deleteUser = async (userId) => {
  const response = await api.delete(
    `/admin/users/${userId}`
  );

  return response.data;
};

export const getAllListings = async () => {
  const response = await api.get(
    "/admin/listings"
  );

  return response.data;
};

export const deleteListing = async (
  listingId
) => {
  const response = await api.delete(
    `/admin/listings/${listingId}`
  );

  return response.data;
};

export const getAnalytics = async () => {
  const response = await api.get(
    "/admin/analytics"
  );

  return response.data;
};