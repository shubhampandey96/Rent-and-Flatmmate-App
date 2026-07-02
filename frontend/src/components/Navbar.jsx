import { Link } from "react-router-dom";
import useAuthStore from "../stores/authStore";

function Navbar() {
  const logout =
    useAuthStore((state) => state.logout);

  return (
    <nav
      className="
      bg-white
      shadow
      px-6
      py-4
      flex
      justify-between
      "
    >
      <Link
        to="/dashboard"
        className="font-bold text-xl"
      >
        Rent and Flatmmate
      </Link>

      <button
        onClick={logout}
        className="
        bg-red-500
        text-white
        px-4
        py-2
        rounded
        "
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;