import { useEffect, useState } from "react";
import {
  getAllUsers,
  deleteUser,
} from "../../services/adminService";

function Users() {
  const [users, setUsers] =
    useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data =
      await getAllUsers();

    setUsers(data.users || []);
  };

  const handleDelete = async (
    userId
  ) => {
    await deleteUser(userId);

    fetchUsers();
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Users
      </h1>

      {users.map((user) => (
        <div
          key={user._id}
          className="border p-4 rounded mb-3"
        >
          <h2>{user.name}</h2>

          <p>{user.email}</p>

          <button
            onClick={() =>
              handleDelete(
                user._id
              )
            }
            className="bg-red-600 text-white px-4 py-2 rounded mt-3"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Users;