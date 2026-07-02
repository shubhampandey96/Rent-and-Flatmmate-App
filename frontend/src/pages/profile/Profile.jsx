import { useEffect, useState } from "react";
import {
  getProfile,
  createOrUpdateProfile,
} from "../../services/profileService";

function Profile() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    preferredLocation: "",
    minBudget: "",
    maxBudget: "",
    moveInDate: "",
    lifestyle: "",
    occupation: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const data = await getProfile();

      if (data.profile) {
        setFormData({
          preferredLocation:
            data.profile.preferredLocation || "",
          minBudget:
            data.profile.minBudget || "",
          maxBudget:
            data.profile.maxBudget || "",
          moveInDate: data.profile.moveInDate
            ? data.profile.moveInDate.split("T")[0]
            : "",
          lifestyle:
            data.profile.lifestyle || "",
          occupation:
            data.profile.occupation || "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createOrUpdateProfile(formData);

      alert("Profile Saved Successfully");

      fetchProfile();
    } catch (error) {
      console.log(error);

      alert("Failed To Save Profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold mb-6">
          My Profile
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Preferred Location */}
          <input
            type="text"
            name="preferredLocation"
            value={formData.preferredLocation}
            onChange={handleChange}
            placeholder="Preferred Location"
            className="border p-3 w-full rounded"
            required
          />

          {/* Minimum Budget */}
          <input
            type="number"
            name="minBudget"
            value={formData.minBudget}
            onChange={handleChange}
            placeholder="Minimum Budget"
            className="border p-3 w-full rounded"
            required
          />

          {/* Maximum Budget */}
          <input
            type="number"
            name="maxBudget"
            value={formData.maxBudget}
            onChange={handleChange}
            placeholder="Maximum Budget"
            className="border p-3 w-full rounded"
            required
          />

          {/* Move In Date */}
          <input
            type="date"
            name="moveInDate"
            value={formData.moveInDate}
            onChange={handleChange}
            className="border p-3 w-full rounded"
          />

          {/* Occupation */}
          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            placeholder="Occupation"
            className="border p-3 w-full rounded"
          />

          {/* Lifestyle */}
          <select
            name="lifestyle"
            value={formData.lifestyle}
            onChange={handleChange}
            className="border p-3 w-full rounded"
          >
            <option value="">
              Select Lifestyle
            </option>

            <option value="Quiet">
              Quiet
            </option>

            <option value="Social">
              Social
            </option>

            <option value="Flexible">
              Flexible
            </option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              text-white
              py-3
              rounded-lg
              font-semibold
              transition
            "
          >
            {loading
              ? "Saving..."
              : "Save Profile"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;