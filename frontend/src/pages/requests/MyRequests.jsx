import { useEffect, useState } from "react";
import { getMyRequests } from "../../services/interestService";

function MyRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const data = await getMyRequests();
      setRequests(data.requests || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        My Requests
      </h1>

      {requests.map((request) => (
        <div
          key={request._id}
          className="border p-4 rounded mb-4"
        >
          <h2 className="font-semibold">
            {request.listing?.title}
          </h2>

          <p>Status: {request.status}</p>
        </div>
      ))}
    </div>
  );
}

export default MyRequests;