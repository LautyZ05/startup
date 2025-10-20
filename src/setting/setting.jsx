import React from 'react';

export function Setting() {
  return (
    <main>
        <section className="section_play">
            <h2>Settings</h2>
            <p>Choose between black or white</p>
            <div>
              <button className="btn btn-primary btn-dark" >Original</button>
              <button className="btn btn-primary btn-dark" >Black</button>
              <button className="btn btn-primary btn-dark" >White</button>
            </div>
            <p>Color Settings here</p>
        </section>
        
    </main>
  );
}