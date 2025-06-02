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
  category: string;
  name: string;
}

const CustomerList: React.FC<Props> = ({ category, name }) => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let url = "https://backend-iafz.onrender.com";
      if (category !== "" || name) {
        url = url + "/customer/search?";
        console.log(category + " Name: " + name);
      }

      const params = new URLSearchParams();

      if (name) {
        params.append("firstName", name);
        params.append("lastName", name);
      }
      if (["Single", "Married", "Divorced", "Widowed"].includes(category)) {
        params.append("maritalStatus", category);
      }

      try {
        const response = await fetch(url + params.toString());
        const data = await response.json();
        setCustomers(data.results || []);
        setCount(data.count || 0);
      } catch (error) {
        console.error("API error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category, name]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>👥 Customer list (Total: {count})</h1>
      {loading ? (
        <p>⏳ Loading...</p>
      ) : (
        <table className="table table-striped">
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
