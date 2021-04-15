import React from 'react';
import './Home.css';
import Header from './Header';
import About from './About';
import Services from './Services';
import AllSupport from './AllSupport';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <About />
            <AllSupport />
        </div>
    );
};

export default Home;
