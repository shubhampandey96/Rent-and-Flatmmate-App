import { useState } from "react";
import api from "../../services/api";

function ImageUploader({ setImageUrls }) {
  const [loading, setLoading] = useState(false);

  const uploadImages = async (e) => {
    const files = e.target.files;

    if (!files || files.length === 0) {
      alert("Please select at least one image");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }

      console.log("Uploading images...");

      const response = await api.post(
        "/listings/upload-images",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Upload Success:", response.data);

      // Backend returns:
      // { success: true, images: [...] }
      setImageUrls(response.data.images);

      alert("Images Uploaded Successfully");
    } catch (error) {
      console.error("UPLOAD ERROR:", error);

      console.log(
        "SERVER RESPONSE:",
        error.response?.data
      );

      alert(
        error.response?.data?.message ||
          "Image Upload Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block font-medium">
        Upload Images
      </label>

      <input
        type="file"
        multiple
        accept="image/*"
        onChange={uploadImages}
        className="w-full border rounded-lg p-2"
      />

      {loading && (
        <p className="text-blue-600">
          Uploading Images...
        </p>
      )}
    </div>
  );
}

export default ImageUploader;