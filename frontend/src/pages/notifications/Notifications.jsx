import { useEffect, useState } from "react";
import {
  getNotifications,
  markAsRead,
} from "../../services/notificationService";

function Notifications() {
  const [notifications, setNotifications] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const data =
        await getNotifications();

      setNotifications(
        data.notifications || []
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRead = async (id) => {
    try {
      await markAsRead(id);

      setNotifications((prev) =>
        prev.map((notification) =>
          notification._id === id
            ? {
                ...notification,
                isRead: true,
              }
            : notification
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div className="p-10">
        Loading Notifications...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Notifications
      </h1>

      {notifications.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow">
          No Notifications Found
        </div>
      ) : (
        notifications.map(
          (notification) => (
            <div
              key={notification._id}
              className={`
                mb-4
                p-5
                rounded-xl
                shadow
                ${
                  notification.isRead
                    ? "bg-gray-100"
                    : "bg-blue-50"
                }
              `}
            >
              <h3 className="font-semibold text-lg">
                {notification.title}
              </h3>

              <p className="text-gray-700 mt-2">
                {notification.message}
              </p>

              <div className="mt-4 flex justify-between items-center">

                <span className="text-sm text-gray-500">
                  {new Date(
                    notification.createdAt
                  ).toLocaleString()}
                </span>

                {!notification.isRead && (
                  <button
                    onClick={() =>
                      handleRead(
                        notification._id
                      )
                    }
                    className="
                    bg-green-600
                    text-white
                    px-4
                    py-2
                    rounded
                    "
                  >
                    Mark Read
                  </button>
                )}

              </div>
            </div>
          )
        )
      )}

    </div>
  );
}

export default Notifications;