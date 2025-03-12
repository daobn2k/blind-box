/* eslint-disable react-refresh/only-export-components */
import AuthGlobalLayout from "@/layout/AuthGlobalLayout";
import UnityGame from "@/pages/UnityGame/UnityGame";
import { createBrowserRouter } from "react-router-dom";
import { ROUTE_PATH } from "./route-path";
export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.HOME,
    element: <AuthGlobalLayout />,
    children: [
      {
        path: ROUTE_PATH.HOME,
        element: (
          <>
            <UnityGame />
          </>
        ),
      },
    ],
  },
]);
