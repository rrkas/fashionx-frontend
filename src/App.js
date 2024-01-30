import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FormPage from "./pages/FormPage";
import RootLayout from "./layouts/RootLayout";
import { urls } from "./urls";
import ResultPage from "./pages/ResultPage";
import HomePage from "./pages/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {
          path: urls.home,
          element: <HomePage />,
        },
        {
          path: urls.form,
          element: <FormPage />,
        },
        {
          path: urls.result,
          element: <ResultPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
