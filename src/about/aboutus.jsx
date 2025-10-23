import React from 'react';


export function AboutUs({bgColor, textColor}) {
  return (
    <main style={{ background: bgColor, color: textColor}}>
        <section className="section_play">
            <h2>About</h2>
            <div className="aboutdiv">
              <div>Connect the Dots is a simple website created by Lautaro Zarate for his CS260 class over at BYU.</div>
              <div>The premise of the website is a simple and easy way to play the popular game "Connect 4" online.</div>
            </div>
            <img id="c4_pic" alt="Image of a connect 4 game" src="connect_4_pic.jpeg" />
        </section>
        
    </main>
  );
}