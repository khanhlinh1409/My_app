import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

interface LeftPanelProps {
  onCategoryChange: (category: string) => void;
  onSearch: (name: string) => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({
  onCategoryChange,
  onSearch,
}) => {
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [query, setQuery] = useState<string>("");

  const handleCategorySelect = (category: string) => {
    setSelectedStatus(category);
    onCategoryChange(category);
    setQuery(""); // Reset lại ô tìm kiếm khi chọn category
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSelectedStatus(""); // Reset selected status when searching;
    onCategoryChange("");
    handleSearch(query);
  };

  const handleSearch = (name: string) => {
    onSearch(name);
  };

  return (
    <div className="bg-light p-3" style={{ height: "100%", width: "100%" }}>
      <div className="d-flex flex-column text-start">
        <label className="form-label fw-bold fs-5">Marital Status</label>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          {selectedStatus !== "" ? selectedStatus : "Select Marital Status"}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {["Single", "Married", "Divorced", "Widowed"].map((status) => (
            <li key={status}>
              <button
                className="dropdown-item"
                onClick={() => handleCategorySelect(status)}>
                {status}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-3">
        <div className="d-flex flex-column align-items-start">
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search name"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ width: "150px" }}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
