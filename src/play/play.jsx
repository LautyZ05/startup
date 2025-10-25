import React from 'react';
import "./play.css";

export function Play({bgColor, textColor}) {
  return (
    <main style={{ background: bgColor, color: textColor}}>
        <section className="section_play">
            <h3>Score</h3>
            <div>Numbers will go here</div>
            <div>Still under construction</div>
        </section>
        <div id='board'>
          <div className='circle' id="0/0"></div>
          <div className='circle' id="0/1"></div>
          <div className='circle' id="0/2"></div>
          <div className='circle' id="0/3"></div>
          <div className='circle' id="0/4"></div>
          <div className='circle' id="0/5"></div>
          <div className='circle' id="0/6"></div>

          <div className='circle' id="1/0"></div>
          <div className='circle' id="1/1"></div>
          <div className='circle' id="1/2"></div>
          <div className='circle' id="1/3"></div>
          <div className='circle' id="1/4"></div>
          <div className='circle' id="1/5"></div>
          <div className='circle' id="1/6"></div>

          <div className='circle' id="2/0"></div>
          <div className='circle' id="2/1"></div>
          <div className='circle' id="2/2"></div>
          <div className='circle' id="2/3"></div>
          <div className='circle' id="2/4"></div>
          <div className='circle' id="2/5"></div>
          <div className='circle' id="2/6"></div>

          <div className='circle' id="3/0"></div>
          <div className='circle' id="3/1"></div>
          <div className='circle' id="3/2"></div>
          <div className='circle' id="3/3"></div>
          <div className='circle' id="3/4"></div>
          <div className='circle' id="3/5"></div>
          <div className='circle' id="3/6"></div>

          <div className='circle' id="4/0"></div>
          <div className='circle' id="4/1"></div>
          <div className='circle' id="4/2"></div>
          <div className='circle' id="4/3"></div>
          <div className='circle' id="4/4"></div>
          <div className='circle' id="4/5"></div>
          <div className='circle' id="4/6"></div>

          <div className='circle' id="5/0"></div>
          <div className='circle' id="5/1"></div>
          <div className='circle' id="5/2"></div>
          <div className='circle' id="5/3"></div>
          <div className='circle' id="5/4"></div>
          <div className='circle' id="5/5"></div>
          <div className='circle' id="5/6"></div>
        </div>
    </main>
  );
}