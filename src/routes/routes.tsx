import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";

export default function AppRouter(): React.ReactNode {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
