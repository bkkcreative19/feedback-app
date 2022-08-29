import React from "react";
import { Routes, Route } from "react-router-dom";
import { Details } from "../Detail";
import { Home } from "../Home";

const RouteHandler = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
};

export default RouteHandler;
