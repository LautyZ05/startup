import React from 'react';
import "./setting.css"

export function Setting(props) {
  const [bgColor, setBgColor] = React.useState(props.bgColor);
  const [textColor, setTextColor] = React.useState(props.textColor);

  function changeColors(color1, color2) {
    setBgColor(bgColor === color1 ? 'rgb(240, 240, 240)' : color1)
    setTextColor(textColor === color2 ? "black" : color2)
    props.onChangeColor(bgColor, textColor)
  }

  function setColors() {
    props.onChangeColor(bgColor, textColor)
  }

  return (
    <main id="mainSetting" style={{ background: bgColor, color: textColor}}>
        <div className="section_play">
            <h2>Settings</h2>
            <div>Choose between a selection of colors provided below</div>
            <div>When done, select the "Set Color" button to finish</div>
            <div className='bottonDiv'>Click the same button to return to original color</div>

            <div className='button_section'>
              <div className='buttonDiv'><button className="btn btn-primary btn-dark buttonColor" onClick={() => {
                changeColors("darkgrey", "black")
              }} >Grey</button></div>

              <div className='buttonDiv'><button className="btn btn-primary btn-dark buttonColor" onClick={() => {
                changeColors("black", "white")
              }}>Black</button></div>

              <div className='buttonDiv'><button className="btn btn-primary btn-dark buttonColor" onClick={() => {
                changeColors("white", "blakc")
              }}>White</button></div>

              <div className='buttonDiv'><button className="btn btn-primary btn-dark buttonColor" onClick={() => {
                changeColors("darkblue", "white")
              }}>Dark Blue</button></div>
            </div>

            <div className='button_section'>
              <div className='buttonDiv'><button className="btn btn-primary btn-dark buttonColor" onClick={() => {
                changeColors("darkred", "white")
              }}>Dark Red</button></div>

              <div className='buttonDiv'><button className="btn btn-primary btn-dark buttonColor" onClick={() => {
                changeColors("darkgreen", "white")
              }}>Green</button></div>

              <div className='buttonDiv'><button className="btn btn-primary btn-dark buttonColor" onClick={() => {
                changeColors("DarkOrchid", "white")
              }}>Purple</button></div>

              <div className='buttonDiv'><button className="btn btn-primary btn-dark buttonColor" onClick={() => {
                changeColors("lightpink", "black")
              }}>Pink</button></div>
            </div>
          <div className='setButton'><button className="btn btn-primary btn-dark buttonColor" onClick={() => {
                setColors()
              }}>Set Colors</button></div>
        </div>
        
    </main>
  );
}