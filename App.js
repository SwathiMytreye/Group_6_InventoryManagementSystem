// Inside src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import EmployeeList from "./Components/EmployeeList"; // View Employees
import EmployeeDetails from "./Components/EmployeeDetails"; // View Employee Details
import EmployeeDelete from "./Components/EmployeeDelete"; // Delete Employee
import EmployeeAdd from "./Components/EmployeeAdd"; // Add Employee

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" component={EmployeeList} />
          <Route path="/employee/:id" component={EmployeeDetails} />
          <Route path="/delete/:id" component={EmployeeDelete} />
          <Route path="/add" component={EmployeeAdd} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
