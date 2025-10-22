import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';


import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Start } from './start/start';
import { Select } from './select/select';
import { Play } from './play/play';
import { AboutUs } from './about/aboutus';
import { Setting } from './setting/setting';
import { CheckState } from './start/checkState';


export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem("userName") || "");
  const currentState = userName ? CheckState.AllGood : CheckState.NotGood;
  const [checkState, setCheckState] = React.useState(currentState);

  return (
    <BrowserRouter>
    <div className="body">
        <header>
            {userName && <NavLink className="back" to="select"><button type="submit" className="btn btn-primary btn-sm btn-dark">Select</button></NavLink> }
            {userName && <NavLink className="back" to="play"><button type="submit" className="btn btn-primary btn-sm btn-dark">Play</button></NavLink> }
            <h1 id="centered_title"><NavLink className="titlecolor" to="">Connect the Dots</NavLink></h1>
            <NavLink className="front" to="aboutus"><button type="submit" className="btn btn-primary btn-sm btn-dark">About</button></NavLink>
            <NavLink className="front" to="setting"><button type="submit" className="btn btn-primary btn-sm btn-dark">Settings</button></NavLink>
        </header>
        
        <Routes>
            <Route 
              path='/' 
              element={
                <Start 
                  userName={userName}
                  checkState={checkState}
                  onChangeState={(userName, checkState) => {
                    setUserName(userName);
                    setCheckState(checkState)
                    set
                  }}
                  />} exact />
            <Route path='/select' element={<Select />} />
            <Route path='/play' element={<Play />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/setting' element={<Setting />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>
            <div className="foot">Website Created By: Lautaro Zarate</div>
            <a className="foot" href="https://github.com/LautyZ05/startup"><button type="submit" className="btn btn-primary btn-sm btn-dark">GitHub</button></a>
        </footer>
    </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}
