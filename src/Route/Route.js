import Main from "../Layout/Main";

const { createBrowserRouter } = require("react-router-dom");

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

        ]
    }
])