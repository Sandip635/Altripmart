import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Explore from "./Explore";
import Blog from "./Blog";
import Contact from "./Contact";
import DownloadApp from "./DownloadApp";
import Layout from "./Layout";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },

        {
          path: "explore",
          element: <Explore />,
        },

        {
          path: "about",
          element: <About />,
        },

        {
          path: "blog",
          element: <Blog />,
        },

        {
          path: "contact",
          element: <Contact />,
        },

        {
          path: "download",
          element: <DownloadApp />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Routes;
