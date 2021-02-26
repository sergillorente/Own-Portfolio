import React from 'react';

import './App.scss';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
    return (
        <div>
            <Home />
            <AboutMe />
            <Projects />
            <Contact />
        </div>
    )
};

export default App;
