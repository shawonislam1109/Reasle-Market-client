import Main from "../Layout/Main";
import MainHome from "../Pages/HomePage/MainHome/MainHome";
import Login from "../Pages/LogIn/Login";
import AppleLaptop from "../Pages/Products/AppleLaptop/AppleLaptop";
import DellLaptop from "../Pages/Products/DellLaptop/DellLaptop";
import HpLaptop from "../Pages/Products/HpLaptop/HpLaptop";
import MainSection from "../Pages/Products/MainSection/MainSection";
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
            },

        ]
    },
    {
        path: '/product',
        element: <MainSection></MainSection>,
        children: [
            {
                path: '/hp',
                element: <HpLaptop />
            },
            {
                path: '/dell',
                element: <DellLaptop />
            },
            {
                path: '/apple',
                element: <AppleLaptop />
            },
        ]
    }

])