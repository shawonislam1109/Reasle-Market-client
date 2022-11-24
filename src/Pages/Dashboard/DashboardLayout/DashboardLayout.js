import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import DashboardNav from '../DashboardNav/DashboardNav';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar />
            <DashboardNav />
        </div>
    );
};

export default DashboardLayout;