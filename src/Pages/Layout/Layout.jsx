import React from 'react';
import Footer from '../Footer/footer';
import Navbar from '../Navbar/Navbar';
import './_layout.scss';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <center>
                {children}
            </center>
            <Footer />
        </>
    );
};

export default Layout;