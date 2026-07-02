import { useEffect, useState } from "react";
import { getDashboardStats } from "../../services/adminService";

function AdminDashboard() {
  const [stats, setStats] = useState({
    users: 0,
    listings: 0,
    requests: 0,
    matches: 0,
  });

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const data =
        await getDashboardStats();

      setStats({
        users: data.users || 0,
        listings:
          data.listings || 0,
        requests:
          data.requests || 0,
        matches:
          data.matches || 0,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-10">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-blue-500 text-white p-6 rounded-xl shadow">
          <h2 className="text-lg">
            Total Users
          </h2>

          <p className="text-3xl font-bold mt-2">
            {stats.users}
          </p>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-xl shadow">
          <h2 className="text-lg">
            Listings
          </h2>

          <p className="text-3xl font-bold mt-2">
            {stats.listings}
          </p>
        </div>

        <div className="bg-orange-500 text-white p-6 rounded-xl shadow">
          <h2 className="text-lg">
            Requests
          </h2>

          <p className="text-3xl font-bold mt-2">
            {stats.requests}
          </p>
        </div>

        <div className="bg-purple-500 text-white p-6 rounded-xl shadow">
          <h2 className="text-lg">
            Matches
          </h2>

          <p className="text-3xl font-bold mt-2">
            {stats.matches}
          </p>
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;