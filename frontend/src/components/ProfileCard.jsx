import useAuthStore from "../stores/authStore";

function ProfileCard() {
  const user =
    useAuthStore((state) => state.user);

  if (!user) return null;

  return (
    <div
      className="
      bg-white
      rounded-xl
      shadow
      p-5
      "
    >
      <h2 className="font-bold text-xl">
        Profile
      </h2>

      <p className="mt-3">
        Name: {user.name}
      </p>

      <p>
        Email: {user.email}
      </p>

      <p>
        Role: {user.role}
      </p>
    </div>
  );
}

export default ProfileCard;