import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div>
            <Navbar />
            <h1>{'<Hello World! />'}</h1> 
            <h1>This is me, Sergi<span> 😄</span></h1>
        </div>
    )
};

export default Home;
