import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import ProductSection from '../ProductSection/ProductSection';

const MainSection = () => {
    return (
        <div>
            <Navbar />
            <ProductSection />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default MainSection;