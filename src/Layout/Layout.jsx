import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navber from '../component/sheard/Navber/Navber';
import Footer from '../component/sheard/Footer/Footer';
import { HashLoader } from 'react-spinners';


const Layout = () => {
    const navigation = useNavigation();
    // console.log(navigation.state);
    return (
        <div>
            <Navber></Navber>
            {
                navigation.state === 'loading' ? 
                <div className="flex justify-center py-[40vh]">
                    <HashLoader color='#9C27B0' size={100} />
                </div> : 
                <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Layout;