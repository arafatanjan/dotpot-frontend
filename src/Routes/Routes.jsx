import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import ProductCategory from "../pages/ProductCategory";
import BookingForm from "../pages/BookingForm";
import PaymentSuccess from "../pages/PaymentSuccess";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: () => fetch("/services.json"),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
        loader: async ({ params }) => {
          const response = await fetch("/services.json"); // Fetch the entire file
          const data = await response.json(); // Parse the JSON file
          return data.find((product) => product.title == params.id); // Find the product with matching id
        },
      },

      {
        path: "/category",
        element: <ProductCategory />,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/booking",
        element: <BookingForm />,
      },

      {
        path: "/payment/success/:tranId",
        element: <PaymentSuccess />,
      },
      {
        path: "/payment/fail/:tranId",
        //   element: <PaymentFail/>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      //     {
      //       path: "/register",
      //     //   element: <Registration />,
      //     },
    ],
  },
  {},
]);
