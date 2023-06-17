import React from 'react';
import Header from '../shared/Header';
import Hero from './Hero';
import Coffee from './Coffee/Coffee';

const Home = () => {
    return (
        <div>
            <Header></Header> 
            <Hero></Hero> 
            <Coffee></Coffee>
        </div>
    );
};

export default Home;