import React from 'react';

export function NotLoggedIn(props) {
  const [userName, setUserName] = React.useState(props.userName);
  
  function LoginUser() {
    localStorage.setItem('userName', userName);
    props.onlogin(userName);
  }

  function textChange(e) {
    setUserName(e.target.value);
  }


  return (
    <main>
        <div className="div_index">
            <input type='text' value={userName} onChange={textChange} placeholder='Username'/>
            <button className="btn btn-primary btn-dark" onClick={LoginUser}>Login</button>
        </div>
    </main>
  );
}