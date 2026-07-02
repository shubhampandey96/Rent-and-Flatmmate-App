import { Link } from "react-router-dom";

function ListingCard({ listing }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <img
        src={listing.images?.[0]}
        alt=""
        className="w-full h-48 object-cover rounded"
      />

      <h2 className="text-xl font-bold mt-3">
        {listing.title}
      </h2>

      <p className="text-gray-500">
        {listing.location}
      </p>

      <p className="font-semibold mt-2">
        ₹{listing.rent}
      </p>

      <Link
        to={`/listings/${listing._id}`}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-3 inline-block"
      >
        View Details
      </Link>
    </div>
  );
}

export default ListingCard;