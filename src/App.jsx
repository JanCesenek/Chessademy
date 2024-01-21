import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/rootLayout";
import Home from "./pages/home";
import Pieces from "./pages/pieces";
import GameStages from "./pages/gameStages";
import Leaderboard from "./pages/leaderboard";
import Contact from "./pages/contact";
import ErrorElement from "./components/errorElement";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorElement />,
      children: [
        { index: true, element: <Home /> },
        { path: "pieces", element: <Pieces /> },
        { path: "gameStages", element: <GameStages /> },
        { path: "leaderboard", element: <Leaderboard /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
