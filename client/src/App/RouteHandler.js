import React from "react";
import { Routes, Route } from "react-router-dom";
import { CreateFeedback } from "../CreateFeedback";
import { Details } from "../Detail";
import { EditFeedback } from "../EditFeedback";
import { Home } from "../Home";

const RouteHandler = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedbacks/:feedbackId" element={<Details />} />
        <Route path="/create-feedback" element={<CreateFeedback />} />
        <Route path="/edit-feedback" element={<EditFeedback />} />
      </Routes>
    </>
  );
};

export default RouteHandler;
