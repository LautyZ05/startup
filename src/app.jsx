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
            <NavLink className="back" to="select"><button type="submit" className="btn btn-primary btn-sm">Select</button></NavLink>
            <NavLink className="back" to="play"><button type="submit" className="btn btn-primary btn-sm">Play</button></NavLink>
            <h1 id="centered_title"><NavLink className="titlecolor" to="">Connect the Dots</NavLink></h1>
            <NavLink className="front" to="aboutus"><button type="submit" className="btn btn-primary btn-sm">About Us</button></NavLink>
            <NavLink className="front" to="setting"><button type="submit" className="btn btn-primary btn-sm">Settings</button></NavLink>
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
            <div className="foot">Website Created By: Lautaro Zarate</div>
            <a className="foot" href="https://github.com/LautyZ05/startup"><button type="submit" className="btn btn-primary btn-sm">GitHub</button></a>
        </footer>
    </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}