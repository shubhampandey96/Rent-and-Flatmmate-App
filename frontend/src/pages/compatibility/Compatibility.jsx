import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCompatibility } from "../../services/compatibilityService";

function Compatibility() {
  const { listingId } = useParams();

  const [loading, setLoading] = useState(true);
  const [compatibility, setCompatibility] = useState(null);

  useEffect(() => {
    fetchCompatibility();
  }, []);

  const fetchCompatibility = async () => {
    try {
      const data = await getCompatibility(
        listingId
      );

      setCompatibility(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-10">
        Loading Compatibility...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        AI Compatibility Report
      </h1>

      <div className="bg-white rounded-xl shadow-lg p-6">

        <div className="mb-6">

          <h2 className="text-2xl font-semibold">
            Compatibility Score
          </h2>

          <p className="text-6xl font-bold text-green-600 mt-4">
            {compatibility?.score || 0}%
          </p>

        </div>

        <div className="mb-6">

          <h2 className="text-2xl font-semibold">
            AI Analysis
          </h2>

          <p className="mt-3 text-gray-700">
            {compatibility?.analysis ||
              "No analysis available"}
          </p>

        </div>

        <div>

          <h2 className="text-2xl font-semibold">
            Recommendation
          </h2>

          <p className="mt-3 text-gray-700">
            {compatibility?.recommendation ||
              "No recommendation available"}
          </p>

        </div>

      </div>

    </div>
  );
}

export default Compatibility;