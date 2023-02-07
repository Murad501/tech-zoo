import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import History from "../pages/History";
import Home from "../pages/Home";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/history',
                element: <History></History>
            }
        ]
    }
])

export default routes