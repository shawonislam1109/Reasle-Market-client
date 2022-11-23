import Main from "../Layout/Main";
import MainHome from "../Pages/HomePage/MainHome/MainHome";

const { createBrowserRouter } = require("react-router-dom");

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <MainHome />
            }
        ]
    }
])