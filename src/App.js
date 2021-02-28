import React from 'react';

import './App.scss';
import Cursor from './components/Cursor';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
    return (
        <div>
            <Cursor />
            <div>
                <Home />
                <AboutMe />
                <Projects />
                <Contact />
            </div>
        </div>
    )
};

export default App;
