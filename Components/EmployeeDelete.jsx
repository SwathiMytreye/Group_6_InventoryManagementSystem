// Inside src/components/EmployeeDelete.jsx
import React from "react";
import axios from "axios"; // Assuming you have axios installed

const EmployeeDelete = ({ employeeId }) => {
  const deleteEmployee = async () => {
    try {
      // Make an API call to your Spring Boot backend to delete the employee
      await axios.delete(`/employee/${employeeId}`);
      console.log("Employee deleted successfully!");
      // Optionally, you can refresh the employee list or perform other actions
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <div>
      <p>Are you sure you want to delete this employee?</p>
      <button onClick={deleteEmployee}>Delete</button>
    </div>
  );
};

export default EmployeeDelete;
