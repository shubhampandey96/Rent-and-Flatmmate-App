import api from "./api";

export const getProfile = async () => {
  const response = await api.get(
    "/profile/me"
  );

  return response.data;
};

export const createOrUpdateProfile = async (
  profileData
) => {
  const response = await api.post(
    "/profile/create",
    profileData
  );

  return response.data;
};