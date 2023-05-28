import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Homepage from '../screens/Homepage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Homepage />
    ),
  },
]);

export default router;