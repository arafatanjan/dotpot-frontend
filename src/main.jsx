// import React from "react";
// import { StrictMode } from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./Routes/Routes.jsx";
// import AuthProvider from "./AuthProvider/AuthProvider.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AuthProvider>
//     <RouterProvider router={router} />
//     </AuthProvider>
//   </React.StrictMode>
// );

import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
