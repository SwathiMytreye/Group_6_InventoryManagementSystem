// Inside src/components/EmployeeList.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const EmployeeList = ({ viewEmployeeDetails }) => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios.get("/employee/all")
      .then((response) => {
        setEmployees(response.data); // Assuming the API response contains the list of employees
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Contact Number</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.employee_id}>
              <td>{employee.employee_id}</td>
              <td>{employee.first_name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.address}</td>
              <td>{employee.contact_number}</td>
              <td>{employee.position}</td>
              {/* Add other columns as needed */}
              <td>
                <button onClick={() => viewEmployeeDetails(employee.employee_id)}>
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
