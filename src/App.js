import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./layouts/RootLayout";
import ImageUploadPage from "./pages/ImageUploadPage";
import ImageCapturePage from "./pages/ImageCapturePage";
import { urls } from "./urls";
import ResultPage from "./pages/ResultPage";

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
          path: urls.upload_image,
          element: <ImageUploadPage />,
        },
        {
          path: urls.say_cheese,
          element: <ImageCapturePage />,
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
