import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../Pages/Hook/useAdmin';


const AdminRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user.email)
    const location = useLocation();

    if (isAdminLoading) {
        return <div className='text-center mt-10'><button className="btn loading">loading</button></div>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate >
};

export default AdminRoute;