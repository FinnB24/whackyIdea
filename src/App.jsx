import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
    return (
        <main className='bg-slate-300/20'>
            <HashRouter>
                <Navbar />
                <Routes>
                    <Route path="/personal-website" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* Redirect unknown routes to Home */}
                    <Route path="*" element={<Home />} />
                </Routes>
            </HashRouter>
        </main>
    );
}

export default App;
