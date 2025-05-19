import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

interface LeftPanelProps {
  onCategoryChange: (category: string) => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ onCategoryChange }) => {
  const [selectedStatus, setSelectedStatus] = useState<string>("");

  const handleCategorySelect = (category: string) => {
    setSelectedStatus(category); // Cập nhật trạng thái hiển thị dropdown
    onCategoryChange(category); // Truyền giá trị chọn vào callback
  };

  return (
    <div className="bg-light p-3" style={{ height: "100%" }}>
      <h4>Marital Status</h4>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          {selectedStatus || "Select Marital Status"}
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
    </div>
  );
};

export default LeftPanel;
