import React from 'react';

export function NotLoggedIn({userName}) {
  const [text, setText] = React.useState(' ');
  
  function LoginUser() {
    localStorage.setItem('userName', text);
    userName(text);
  }

  function textChange(e) {
    setText(e.target.value);
  }


  return (
    <main>
        <div className="div_index">
            <input type='text' onChange={textChange} placeholder='Username'/>
            <button className="btn btn-primary btn-dark" onClick={LoginUser}>Login</button>
        </div>
    </main>
  );
}