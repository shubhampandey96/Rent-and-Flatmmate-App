import { useEffect, useState } from "react";
import {
  getReceivedRequests,
  acceptRequest,
  rejectRequest,
} from "../../services/interestService";

function ReceivedRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const data = await getReceivedRequests();
      setRequests(data.requests || []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAccept = async (id) => {
    await acceptRequest(id);
    fetchRequests();
  };

  const handleReject = async (id) => {
    await rejectRequest(id);
    fetchRequests();
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Received Requests
      </h1>

      {requests.map((request) => (
        <div
          key={request._id}
          className="border p-4 rounded mb-4"
        >
          <h2 className="font-semibold">
            {request.sender?.name}
          </h2>

          <p>{request.sender?.email}</p>

          <div className="flex gap-3 mt-3">
            <button
              onClick={() =>
                handleAccept(request._id)
              }
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Accept
            </button>

            <button
              onClick={() =>
                handleReject(request._id)
              }
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReceivedRequests;