import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastWrapper(props) {
  return <ToastContainer {...props} />;
}

export default ToastWrapper;
