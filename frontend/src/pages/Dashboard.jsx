import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="p-10">
        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        <div className="mb-8">
          <ProfileCard />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Link
            to="/profile"
            className="bg-purple-600 text-white p-6 rounded-xl text-center"
          >
            My Profile
          </Link>

          <Link
            to="/listings"
            className="bg-blue-600 text-white p-6 rounded-xl text-center"
          >
            Browse Listings
          </Link>

          <Link
            to="/create-listing"
            className="bg-green-600 text-white p-6 rounded-xl text-center"
          >
            Create Listing
          </Link>

          <Link
            to="/my-requests"
            className="bg-orange-600 text-white p-6 rounded-xl text-center"
          >
            My Requests
          </Link>

          <Link
            to="/received-requests"
            className="bg-red-600 text-white p-6 rounded-xl text-center"
          >
            Received Requests
          </Link>

          <Link
            to="/notifications"
            className="bg-yellow-500 text-white p-6 rounded-xl text-center"
          >
            Notifications
          </Link>
        </div>
      </div>
    </>
  );
}

export default Dashboard;