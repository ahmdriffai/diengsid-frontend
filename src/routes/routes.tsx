import BookingRoom from "@/pages/BookingRoom";
import BookProperty from "@/pages/BookProperty";
import DetailPropertyPage from "@/pages/DetailPropertyPage";
import Logout from "@/pages/Logout";
import PaymentPage from "@/pages/PaymentPage";
import WishlistPage from "@/pages/WishlistPage";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";

export default function AppRouter(): React.ReactNode {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/wishlists" element={<WishlistPage />} />
        <Route path="/login" element={<HomePage />} />
        <Route path="/properties/:id" element={<DetailPropertyPage />} />
        <Route path="/book/properties" element={<BookProperty />} />
        <Route path="/book/room" element={<BookingRoom />} />
        <Route path="/book/payment" element={<PaymentPage />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}
