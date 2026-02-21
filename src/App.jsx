import React, { useContext, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashBoard from "./components/DashBoard/EmployeeDashBoard";
import AdminDashBoard from "./components/DashBoard/AdminDashBoard";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const [user, setUser] = useState(() => {
    const loggedInUser = localStorage.getItem("LoggedInUser");
    if (!loggedInUser) return null;
    try {
      const parsed = JSON.parse(loggedInUser);
      return parsed.role || null;
    } catch {
      return null;
    }
  });
  const [loggedInEmployeeId, setLoggedInEmployeeId] = useState(() => {
    const loggedInUser = localStorage.getItem("LoggedInUser");
    if (!loggedInUser) return null;
    try {
      const parsed = JSON.parse(loggedInUser);
      if (parsed.employeeId) return parsed.employeeId;
      if (parsed.data && parsed.data.id) return parsed.data.id;
      return null;
    } catch {
      return null;
    }
  });
  const [userData] = useContext(AuthContext);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("LoggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInEmployeeId(employee.id);
        localStorage.setItem(
          "LoggedInUser",
          JSON.stringify({ role: "employee", employeeId: employee.id })
        );
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  const currentEmployee =
    userData && loggedInEmployeeId
      ? userData.find((employee) => employee.id === loggedInEmployeeId)
      : null;

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashBoard changeUser={setUser} />
      ) : user == "employee" && currentEmployee ? (
        <EmployeeDashBoard changeUser={setUser} data={currentEmployee} />
      ) : (
        ""
      )}
    </>
  );
};

export default App;
