import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../../Shared/Navbar/Navbar';
import DashboardNav from '../DashboardNav/DashboardNav';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar />
            <DashboardNav />
            <Outlet />
        </div>
    );
};

export default DashboardLayout;