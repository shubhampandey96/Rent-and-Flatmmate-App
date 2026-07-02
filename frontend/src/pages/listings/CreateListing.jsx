import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import ImageUploader from "../../components/listings/ImageUploader";

function CreateListing() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [imageUrls, setImageUrls] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    rent: "",
    occupancy: "",
    genderPreference: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        ...formData,
        images: imageUrls,
      };

      const response = await api.post(
        "/listings/create",
        payload
      );

      console.log(response.data);

      alert("Listing Created Successfully");

      navigate("/listings");
    } catch (error) {
      console.error(error);

      alert(
        error?.response?.data?.message ||
          "Failed to create listing"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="bg-white shadow-lg rounded-xl p-6">

        <h1 className="text-3xl font-bold mb-6">
          Create New Listing
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Title */}
          <div>
            <label className="block mb-2 font-medium">
              Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title"
              required
              className="border rounded-lg p-3 w-full"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              rows="4"
              required
              className="border rounded-lg p-3 w-full"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-2 font-medium">
              Location
            </label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"
              required
              className="border rounded-lg p-3 w-full"
            />
          </div>

          {/* Rent */}
          <div>
            <label className="block mb-2 font-medium">
              Monthly Rent
            </label>

            <input
              type="number"
              name="rent"
              value={formData.rent}
              onChange={handleChange}
              placeholder="Enter rent amount"
              required
              className="border rounded-lg p-3 w-full"
            />
          </div>

          {/* Occupancy */}
          <div>
            <label className="block mb-2 font-medium">
              Occupancy
            </label>

            <input
              type="number"
              name="occupancy"
              value={formData.occupancy}
              onChange={handleChange}
              placeholder="Number of people"
              required
              className="border rounded-lg p-3 w-full"
            />
          </div>

          {/* Gender Preference */}
          <div>
            <label className="block mb-2 font-medium">
              Gender Preference
            </label>

            <select
              name="genderPreference"
              value={formData.genderPreference}
              onChange={handleChange}
              required
              className="border rounded-lg p-3 w-full"
            >
              <option value="">
                Select Gender Preference
              </option>

              <option value="Male">
                Male
              </option>

              <option value="Female">
                Female
              </option>

              <option value="Any">
                Any
              </option>
            </select>
          </div>

          {/* Image Upload */}
          <ImageUploader
            setImageUrls={setImageUrls}
          />

          {/* Preview Uploaded Images */}
          {imageUrls.length > 0 && (
            <div>
              <h3 className="font-semibold mb-3">
                Uploaded Images
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {imageUrls.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt="Listing"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          )}

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
            "
          >
            {loading
              ? "Creating Listing..."
              : "Create Listing"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateListing;