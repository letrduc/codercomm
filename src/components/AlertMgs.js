import React from "react";
import { ToastClassName, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function AlertMgs() {
  return (
    <ToastContainer
      position="top-right"
      hideProgressBar={false}
      newestOnTop={false}
      pauseOnHover
    />
  );
}

export default AlertMgs;
