import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <h2>{'<Hello World! />'}</h2> 
            <h1 id="sergi-title">This is me, Sergi<span> 😄</span></h1>
            <img src="/images/profile.png" alt="profile" />
        </div>
    )
};

export default Home;
