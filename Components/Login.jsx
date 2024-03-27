// import React, { useState } from "react";
// import axios from "axios"; // Assuming you have axios installed

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleEmployeeLogin = async () => {
//     try {
//       // Make an API call to your backend for employee login
//       const response = await axios.post("/api/employee/login", {
//         username,
//         password,
//       });

//       // Handle successful login (e.g., store token, redirect)
//       console.log("Employee login successful:", response.data);
//     } catch (err) {
//       setError("Employee login failed. Please check your credentials.");
//     }
//   };

//   const handleCustomerLogin = async () => {
//     try {
//       // Make an API call to your backend for customer login
//       const response = await axios.post("/api/customer/login", {
//         username,
//         password,
//       });

//       // Handle successful login (e.g., store token, redirect)
//       console.log("Customer login successful:", response.data);
//     } catch (err) {
//       setError("Customer login failed. Please check your credentials.");
//     }
//   };

//   return (
//     <div className="LoginPage">
//       <h1>Login Page</h1>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <div className="buttons">
//         <button onClick={handleEmployeeLogin}>Login as Employee</button>
//         <button onClick={handleCustomerLogin}>Login as Customer</button>
//       </div>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// }

// export default Login;
