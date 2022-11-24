import Main from "../Layout/Main";
import MainHome from "../Pages/HomePage/MainHome/MainHome";
import Login from "../Pages/LogIn/Login";
import SignUP from "../Pages/SignUp/SignUP";

const { createBrowserRouter } = require("react-router-dom");

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <MainHome />
            },
            {
                path: '/login',
                element: <Login />
            }
            ,
            {
                path: '/signup',
                element: <SignUP />
            }
        ]
    }
])