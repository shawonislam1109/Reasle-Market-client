import Main from "../Layout/Main";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout/DashboardLayout";
import MyOder from "../Pages/Dashboard/MyOder/MyOder";
import Payment from "../Pages/Dashboard/Payment/Payment";
import MainHome from "../Pages/HomePage/MainHome/MainHome";
import Login from "../Pages/LogIn/Login";
import AddToCart from "../Pages/Products/AddtoCart/AddToCart.js";
import AppleLaptop from "../Pages/Products/AppleLaptop/AppleLaptop";
import DellLaptop from "../Pages/Products/DellLaptop/DellLaptop";
import HpLaptop from "../Pages/Products/HpLaptop/HpLaptop";
import MainSection from "../Pages/Products/MainSection/MainSection";
import SignUP from "../Pages/SignUp/SignUP";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        element: <PrivateRoute><MainSection></MainSection></PrivateRoute>,
        children: [
            {
                path: '/product',
                element: <HpLaptop />,
            },
            {
                path: '/product/dell',
                element: <DellLaptop />
            },
            {
                path: '/product/apple',
                element: <AppleLaptop />
            },
            {
                path: '/product/allProduct/:id',
                element: <AddToCart />,
                loader: ({ params }) => fetch(`http://localhost:5000/allProducts/${params.id}`)
            }
        ]
    },

    {
        path: '/product/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: '/product/dashboard',
                element: <MyOder />
            }
            ,
            {
                path: '/product/dashboard/addProduct',
                element: <AddProduct />
            }
            ,
            {
                path: '/product/dashboard/allUser',
                element: <AllUser />
            }
            ,
            {
                path: '/product/dashboard/payment/:id',
                element: <Payment />,
                loader: ({ params }) => fetch(`http://localhost:5000/orderProducts/${params.id}`)
            }

        ]
    }

])