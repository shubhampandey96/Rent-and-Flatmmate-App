import { useState } from "react";

function SearchBar({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSearch(keyword);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 flex gap-3"
    >
      <input
        type="text"
        placeholder="Search by title or location..."
        value={keyword}
        onChange={(e) =>
          setKeyword(e.target.value)
        }
        className="
          flex-1
          border
          rounded-lg
          p-3
        "
      />

      <button
        type="submit"
        className="
          bg-blue-600
          text-white
          px-6
          rounded-lg
        "
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;