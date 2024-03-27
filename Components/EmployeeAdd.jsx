// Inside src/components/EmployeeAdd.jsx
import React, { useState } from "react";

const EmployeeAdd = ({ addEmployee }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [designation, setDesignation] = useState("");

  const handleSubmit = () => {
    // Validate input fields
    // Call addEmployee function with the new employee data
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* Other input fields for age and designation */}
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default EmployeeAdd;
