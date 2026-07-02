import { useEffect, useState } from "react";
import ListingCard from "../../components/listings/ListingCard";
import SearchBar from "../../components/listings/SearchBar";

import {
  getListings,
  searchListings,
} from "../../services/listingService";

function Listings() {
  const [listings, setListings] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const data =
        await getListings();

      setListings(
        data.listings || []
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (
    keyword
  ) => {
    try {
      setLoading(true);

      const data =
        await searchListings(
          keyword
        );

      setListings(
        data.listings || []
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-10">
        Loading Listings...
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">
        Available Listings
      </h1>

      <SearchBar
        onSearch={handleSearch}
      />

      {listings.length === 0 ? (
        <div>
          No Listings Found
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {listings.map(
            (listing) => (
              <ListingCard
                key={listing._id}
                listing={listing}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Listings;