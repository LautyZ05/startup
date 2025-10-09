import React from 'react';

export function Start() {
  return (
    <main>
        <div className="div_index">
            <h1 className="h1_index">Welcome Player!</h1>
            <a href="select.html"><button type="submit" className="btn btn-lg btn-primary">Click to Enter</button></a>
            <div className="startdiv">
            <div>Warning: None of the buttons in the main area work.</div>
            <div>They will send you to error page 404.</div>
            <div>Use navigation buttons in header to go through the pages :)</div>
            </div>
        </div>
    </main>
  );
}