"use client";

import { ToastContainer } from "react-toastify";

// Mounted once in the root layout. Call `toast.success(...)` from any client component.
export default function ToastProvider() {
  return (
    <ToastContainer
      position="bottom-right"
      theme="dark"
      autoClose={5000}
      newestOnTop
      closeOnClick
      pauseOnHover
    />
  );
}
