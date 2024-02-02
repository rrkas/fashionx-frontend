import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import FormPage from "./pages/FormPage";
import RootLayout from "./layouts/RootLayout";
import { urls } from "./urls";
import ResultPage from "./pages/ResultPage";
import HomePage from "./pages/HomePage";
import { imageInputType } from "./utils/constants";
import WardrobeFormPage from "./pages/WardrobeFormPage";
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <Fragment>
          <ToastContainer />
          <Outlet />
        </Fragment>
      ),
      children: [
        {
          element: <RootLayout />,
          children: [
            {
              path: urls.home,
              element: <HomePage />,
            },
            {
              path: urls.form(":type"),
              element: <FormPage />,
            },
            {
              path: urls.form(imageInputType.WARDROBE),
              element: <WardrobeFormPage />,
            },
            {
              path: urls.result,
              element: <ResultPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
