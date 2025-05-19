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

  const handleCategoryChange = (category: string) => {
    setCategory(category);
  };
  return (
    <div className="layout-container">
      <Header /> {/* Header */}
      <div className="main-content">
        <div className="col-md-3 col-12">
          <LeftPanel onCategoryChange={handleCategoryChange} />{" "}
          {/* Left Panel */}
        </div>
        <div className="main-section">
          <CustomerList category={category} />
        </div>
      </div>
      <Footer /> {/* Footer */}
    </div>
  );
}
export default App;
