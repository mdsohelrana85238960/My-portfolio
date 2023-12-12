import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";

const router = createBrowserRouter([
  {
    path: "/",
    children:[
        {
            path:"/",
            element:<Home></Home>
        }
    ]
  },
]);

export default router;