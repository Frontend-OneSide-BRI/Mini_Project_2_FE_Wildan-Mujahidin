import "../styles/App.css";
import { Homepage } from "../pages/Homepage";
import { Gallery } from "../pages/Gallery";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/",
      element: <Homepage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
