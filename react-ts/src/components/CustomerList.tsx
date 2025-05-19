import React, { useEffect, useState } from "react";

interface Customer {
  ID: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNo: string;
  maritalStatus: string;
  noOfChildren: string;
}

interface Props {
  category: string; // Marital status được chọn
}
const CustomerList: React.FC<Props> = ({ category }) => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetch("https://backend-iafz.onrender.com")
    if (!category) return;
    setLoading(true);
    fetch(
      "https://backend-iafz.onrender.com/customer/search?maritalStatus=" +
        category
    )
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data.results);
        setCount(data.count);
      })
      .catch((err) => console.error("API error:", err))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>👥 Customer list (Total: {count})</h1>

      {loading ? (
        <p>⏳ Loading...</p>
      ) : (
        <table
          border={1}
          cellPadding={8}
          cellSpacing={0}
          style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ backgroundColor: "#eee" }}>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Phone No.</th>
              <th>Marital Status</th>
              <th>No. of Children</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.ID}>
                <td>{c.ID}</td>
                <td>{c.firstName}</td>
                <td>{c.lastName}</td>
                <td>{c.address}</td>
                <td>{c.phoneNo}</td>
                <td>{c.maritalStatus}</td>
                <td>{c.noOfChildren}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default CustomerList;
