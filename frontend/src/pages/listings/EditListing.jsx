import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getListingById,
  updateListing,
} from "../../services/listingService";

function EditListing() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    rent: "",
    occupancy: "",
    genderPreference: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchListing();
  }, []);

  const fetchListing = async () => {
    try {
      const data = await getListingById(id);

      const listing =
        data.listing || data.data || data;

      setFormData({
        title: listing.title || "",
        description:
          listing.description || "",
        location:
          listing.location || "",
        rent: listing.rent || "",
        occupancy:
          listing.occupancy || "",
        genderPreference:
          listing.genderPreference || "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateListing(
        id,
        formData
      );

      alert(
        "Listing Updated Successfully"
      );

      navigate("/listings");
    } catch (error) {
      console.error(error);

      alert(
        "Failed to update listing"
      );
    }
  };

  if (loading) {
    return (
      <div className="p-10">
        Loading Listing...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">
        Edit Listing
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="number"
          name="rent"
          placeholder="Rent"
          value={formData.rent}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="occupancy"
          placeholder="Occupancy"
          value={formData.occupancy}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <select
          name="genderPreference"
          value={
            formData.genderPreference
          }
          onChange={handleChange}
          className="w-full border p-3 rounded"
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

        <button
          type="submit"
          className="
          bg-blue-600
          text-white
          px-6
          py-3
          rounded
          "
        >
          Update Listing
        </button>
      </form>
    </div>
  );
}

export default EditListing;