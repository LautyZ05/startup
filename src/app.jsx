import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';


import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Start } from './start/start';
import { Select } from './select/select';
import { Play } from './play/play';
import { AboutUs } from './about/aboutus';
import { Setting } from './setting/setting';


export default function App() {
  return (
    <BrowserRouter>
    <div className="body">
        <header>
            <NavLink id="back" href="index.html"><button type="submit" className="btn btn-primary btn-sm">Back</button></NavLink>
            <h1 id="centered_title">Connect the Dots</h1>
            <p> </p>
        </header>
        
        <Routes>
            <Route path='/' element={<Start />} exact />
            <Route path='/select' element={<Select />} />
            <Route path='/play' element={<Play />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/setting' element={<Setting />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>
            <div className="foot"><a href="aboutus.html">About</a></div>        
            <div className="foot"><a href="setting.html">Settings</a></div>
            <div className="foot"><a href="https://github.com/LautyZ05/startup?tab=readme-ov-file">GitHub Link</a></div>
        </footer>
    </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}