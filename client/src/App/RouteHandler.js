import React from "react";
import { Routes, Route } from "react-router-dom";
import { CreateFeedback } from "../Create";
import { Details } from "../Detail";
import { EditFeedback } from "../Edit";
import { Home } from "../Home";
import { Roadmap } from "../Roadmap";

const RouteHandler = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedbacks/:feedbackId" element={<Details />} />
        <Route path="/create-feedback" element={<CreateFeedback />} />
        <Route path="/edit-feedback" element={<EditFeedback />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </>
  );
};

export default RouteHandler;
