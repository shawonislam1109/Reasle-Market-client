import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../../Shared/Navbar/Navbar';
import useTitle from '../../Hook/useTitle';
import DashboardNav from '../DashboardNav/DashboardNav';

const DashboardLayout = () => {
    useTitle('Dashboard')
    return (
        <div>
            <Navbar />
            <DashboardNav />
            <Outlet />
        </div>
    );
};

export default DashboardLayout;