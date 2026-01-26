import React, { use, useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashBoard from "./components/DashBoard/EmployeeDashBoard";
import AdminDashBoard from "./components/DashBoard/AdminDashBoard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);
  // useEffect(() => {
  // if (authData) {
  //  const LoggedInUser = localStorage.getItem("LoggedInUser");
  //  if (LoggedInUser) {
  //   setUser(LoggedInUser.role);
  //   }
  // }
  //}, [authData]);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("LoggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email == e.email && password == e.password,
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "LoggedInUser",
          JSON.stringify({ role: "employee" }),
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashBoard />
      ) : (
        <EmployeeDashBoard data={loggedInUserData} />
      )}
    </>
  );
};

export default App;
