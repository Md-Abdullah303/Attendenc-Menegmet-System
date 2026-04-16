import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../component/sheard/Navber/Navber';
import Footer from '../component/sheard/Footer/Footer';


const Layout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;