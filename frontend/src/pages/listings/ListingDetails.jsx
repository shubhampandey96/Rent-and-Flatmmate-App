import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getListingById } from "../../services/listingService";
import { sendInterest } from "../../services/interestService";

function ListingDetails() {
  const { id } = useParams();

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sendingInterest, setSendingInterest] = useState(false);

  useEffect(() => {
    fetchListing();
  }, [id]);

  const fetchListing = async () => {
    try {
      setLoading(true);

      const data = await getListingById(id);

      // Handle different API response structures
      setListing(data.listing || data.data || data);
    } catch (error) {
      console.error("Error fetching listing:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInterest = async () => {
    try {
      setSendingInterest(true);

      await sendInterest(id);

      alert("Interest Request Sent Successfully!");
    } catch (error) {
      console.error(error);

      alert(
        error?.response?.data?.message ||
          "Failed to send interest request"
      );
    } finally {
      setSendingInterest(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-2xl font-semibold">
          Loading Listing...
        </h2>
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-2xl font-semibold text-red-500">
          Listing Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">
        {listing.title}
      </h1>

      {/* Location */}
      <p className="text-gray-600 text-lg mb-6">
        📍 {listing.location}
      </p>

      {/* Images */}
      {listing.images && listing.images.length > 0 && (
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {listing.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Listing ${index + 1}`}
              className="w-full h-64 object-cover rounded-xl shadow-md"
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="md:col-span-2 bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Description
          </h2>

          <p className="text-gray-700 leading-relaxed">
            {listing.description}
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">
                Monthly Rent
              </h3>

              <p className="text-xl font-bold text-green-600">
                ₹ {listing.rent}
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">
                Occupancy
              </h3>

              <p className="text-xl font-bold">
                {listing.occupancy}
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">
                Gender Preference
              </h3>

              <p className="text-xl font-bold">
                {listing.genderPreference}
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">
                Status
              </h3>

              <p className="text-xl font-bold text-blue-600">
                {listing.status || "Available"}
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white shadow-lg rounded-xl p-6 h-fit">
          <h2 className="text-2xl font-semibold mb-4">
            Owner Details
          </h2>

          <div className="space-y-3">
            <p>
              <strong>Name:</strong>{" "}
              {listing.owner?.name || "Owner"}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {listing.owner?.email || "Not Available"}
            </p>
          </div>

          {/* Compatibility Section */}
          <div className="mt-8 border-t pt-6">
            <h2 className="text-xl font-semibold mb-3">
              AI Compatibility
            </h2>

            <div className="bg-green-100 text-green-700 p-4 rounded-lg">
              Compatibility Score:
              <span className="font-bold ml-2">
                85%
              </span>
            </div>
          </div>

          {/* Interest Button */}
          <button
            onClick={handleInterest}
            disabled={sendingInterest}
            className="
              w-full
              mt-6
              bg-blue-600
              hover:bg-blue-700
              text-white
              py-3
              rounded-lg
              font-semibold
              disabled:bg-gray-400
            "
          >
            {sendingInterest
              ? "Sending..."
              : "Send Interest Request"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListingDetails;