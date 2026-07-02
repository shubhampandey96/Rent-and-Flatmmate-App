import { useEffect, useState } from "react";
import {
  getAllListings,
  deleteListing,
} from "../../services/adminService";

function Listings() {
  const [listings, setListings] =
    useState([]);

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    const data =
      await getAllListings();

    setListings(
      data.listings || []
    );
  };

  const handleDelete = async (
    listingId
  ) => {
    await deleteListing(
      listingId
    );

    fetchListings();
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Listings
      </h1>

      {listings.map(
        (listing) => (
          <div
            key={listing._id}
            className="border p-4 rounded mb-3"
          >
            <h2>
              {listing.title}
            </h2>

            <p>
              ₹ {listing.rent}
            </p>

            <button
              onClick={() =>
                handleDelete(
                  listing._id
                )
              }
              className="bg-red-600 text-white px-4 py-2 rounded mt-3"
            >
              Delete
            </button>
          </div>
        )
      )}
    </div>
  );
}

export default Listings;