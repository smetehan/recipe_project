import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRouter = () => {
  const user = false;
  console.log(sessionStorage.getItem("user"));

  return <div>{user ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;
