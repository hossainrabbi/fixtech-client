import React from 'react';
import Header from './Header';
import About from './About';
import Services from './Services';
import AllSupport from './AllSupport';
import Testimonials from './Testimonials';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <About />
            <AllSupport />
            <Testimonials />
        </div>
    );
};

export default Home;
