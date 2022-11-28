import Main from "../Layout/Main";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout/DashboardLayout";
import MyOder from "../Pages/Dashboard/MyOder/MyOder";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MainHome from "../Pages/HomePage/MainHome/MainHome";
import Login from "../Pages/LogIn/Login";
import AddToCart from "../Pages/Products/AddtoCart/AddToCart.js";
import AppleLaptop from "../Pages/Products/AppleLaptop/AppleLaptop";
import Blog from "../Pages/Products/Blog/Blog";
import DellLaptop from "../Pages/Products/DellLaptop/DellLaptop";
import HpLaptop from "../Pages/Products/HpLaptop/HpLaptop";
import MainSection from "../Pages/Products/MainSection/MainSection";
import MyAddProduct from "../Pages/Products/MyAddProduct/MyAddProduct";
import SignUP from "../Pages/SignUp/SignUP";
import AdminRoute from "../PrivateRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,
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
            {
                path: '/blog',
                element: <Blog />
            }

        ]
    },
    {
        path: '/product',
        errorElement: <ErrorPage />,
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
        errorElement: <ErrorPage />,
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
                element: <AdminRoute><AllUser /></AdminRoute>
            }
            ,
            {
                path: '/product/dashboard/payment/:id',
                element: <Payment />,
                loader: ({ params }) => fetch(`http://localhost:5000/orderProducts/${params.id}`)
            }
            ,
            {
                path: '/product/dashboard/payment/myAddProduct',
                element: <MyAddProduct />
            }

        ]
    }

])