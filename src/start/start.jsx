import React from 'react';

export function Start({setUser}) {
  const [text, setText] = React.useState(' ');
  function LoginUser() {
    localStorage.setItem('userName', text);
    setUser(text);
  }

  function textChange(e) {
    setText(e.target.value);
  }


  return (
    <main>
        <div className="div_index">
            <h1 className="h1_index">Welcome Player!</h1>
            <input type='text' onChange={textChange} />
            <button className="btn btn-primary btn-dark" onClick={LoginUser}>Login</button>
            <div className="startdiv">
            <div>Warning: None of the buttons in the main area work.</div>
            <div>They will send you to error page 404.</div>
            <div>Use navigation buttons in header to go through the pages :)</div>
            </div>
        </div>
    </main>
  );
}