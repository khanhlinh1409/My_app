import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
//import { useEffect, useState } from "react";
import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel";
import Footer from "./components/Footer";
import "./components/Layout.module.css";
import CustomerList from "./components/CustomerList";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS (bundle đã bao gồm Popper)

function App() {
  const [category, setCategory] = useState<string>("");
  const [name, setName] = useState<string>("");
  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    setName(""); // Reset tìm kiếm khi chọn danh mục mới
  };

  const handleSearch = (searchName: string) => {
    setName(searchName);
    // Không reset category để giữ bộ lọc nếu muốn filter kết hợp
  };
  return (
    <div className="layout-container">
      <Header />

      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-3 col-12 mb-3">
            <LeftPanel
              onCategoryChange={handleCategoryChange}
              onSearch={handleSearch}
            />
          </div>

          <div className="col-md-9 col-12">
            <CustomerList category={category} name={name} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default App;
