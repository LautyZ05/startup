import React from 'react';

export function Play({bgColor, textColor}) {
  return (
    <main style={{ background: bgColor, color: textColor}}>
        <section className="section_play">
            <h3>Score</h3>
            <p>Numbers will go here</p>
        </section>
        <section className="section_play">
            <p>Game goes here</p>
            <img alt="Temporary image of connect 4" src="temp_c4_image.svg" />
            <p>Temporary image of what I want the game to look like</p>
        </section>
        <section className="section_play">
            <p>controls go here</p>
        </section>
    </main>
  );
}