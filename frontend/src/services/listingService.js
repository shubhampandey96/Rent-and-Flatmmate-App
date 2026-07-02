import api from "./api";

export const getListings = async () => {
  const res = await api.get("/listings");
  return res.data;
};

export const searchListings = async (keyword) => {
  const response = await api.get(
    `/listings?search=${keyword}`
  );

  return response.data;
};

// ✅ Renamed from getListing → getListingById
export const getListingById = async (id) => {
  const res = await api.get(`/listings/${id}`);
  return res.data;
};

export const createListing = async (data) => {
  const res = await api.post(
    "/listings/create",
    data
  );
  return res.data;
};

export const updateListing = async (
  id,
  data
) => {
  const res = await api.put(
    `/listings/${id}`,
    data
  );
  return res.data;
};

export const deleteListing = async (id) => {
  const res = await api.delete(
    `/listings/${id}`
  );
  return res.data;
};