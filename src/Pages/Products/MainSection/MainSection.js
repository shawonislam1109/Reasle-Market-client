import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import useTitle from '../../Hook/useTitle';
import ProductSection from '../ProductSection/ProductSection';

const MainSection = () => {
    useTitle('Products')
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