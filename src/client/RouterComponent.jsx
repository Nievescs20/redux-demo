import React from "react";
import { Route, Routes } from "react-router";
import AllUsers from "./AllUsers";
import SingleUser from "./SingleUser";

function RouterComponent() {
  return (
    <Routes>
      <Route path="/users" element={<AllUsers />} />
      <Route path="/users/:id" element={<SingleUser />} />
    </Routes>
  );
}

export default RouterComponent;
