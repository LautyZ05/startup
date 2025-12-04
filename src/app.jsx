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
  const [bgColor, setBgColor] = React.useState('rgb(240, 240, 240)');
  const [textColor, setTextColor] = React.useState("black");

  return (
    <BrowserRouter>
    <div className="body">
        <header>
            {checkState === CheckState.AllGood && <NavLink className="back" to="select"><button type="submit" className="btn btn-primary btn-sm btn-dark">Scores</button></NavLink> }
            {checkState === CheckState.AllGood && <NavLink className="back" to="play"><button type="submit" className="btn btn-primary btn-sm btn-dark">Play</button></NavLink> }
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
                  bgColor={bgColor}
                  textColor={textColor}
                  onChangeState={(userName, checkState) => {
                    setUserName(userName);
                    setCheckState(checkState)
                  }}
                  />} exact />
            <Route path='/select' element={<Select bgColor={bgColor} textColor={textColor} userName={userName}/>} />
            <Route path='/play' element={<Play bgColor={bgColor} textColor={textColor} userName={userName}/>} />
            <Route path='/aboutus' element={<AboutUs bgColor={bgColor} textColor={textColor}/>} />
            <Route path='/setting' element={<Setting bgColor={bgColor} textColor={textColor} onChangeColor={(bgColor, textColor) => {
              setBgColor(bgColor)
              setTextColor(textColor)
            }}/>} />
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
