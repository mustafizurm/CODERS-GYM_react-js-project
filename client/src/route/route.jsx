import {
    createBrowserRouter,
} from "react-router";
import App from "../App";
import Home from "../page/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            }
        ]
    },
]);

export default router;