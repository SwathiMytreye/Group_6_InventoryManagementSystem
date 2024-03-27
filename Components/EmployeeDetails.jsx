// Inside src/components/EmployeeDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // React Router

const EmployeeDetails = () => {
  const { id } = useParams(); // Get the employee ID from the URL parameter
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    // Fetch employee details by ID from your backend API
    // Replace with your actual API endpoint
    fetch(`/api/employee/${id}`)
      .then((response) => response.json())
      .then((data) => setEmployee(data))
      .catch((error) => console.error("Error fetching employee details:", error));
  }, [id]);

  if (!employee) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Employee Details</h2>
      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Age: {employee.age}</p>
      <p>Designation: {employee.designation}</p>
      {/* Add other employee details */}
    </div>
  );
};

export default EmployeeDetails;
