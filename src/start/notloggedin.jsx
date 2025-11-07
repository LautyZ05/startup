import React from 'react';
import "./start.css";
import { ShowMessage } from './showMessage';

export function NotLoggedIn(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState("");
  const [displayError, setDisplayError] = React.useState(null);
  

  async function LoginUser() {
    console.log("Logging user in");
    loginOrCreateUser(`/api/auth/login`);
  }


  async function CreateUser() {
    console.log("Creating user");
    loginOrCreateUser(`/api/auth/create`);
  }

  
  async function loginOrCreateUser(endpoint) {
    const response = await fetch(endpoint, {
      method: "post",
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (response?.status === 200) {
      localStorage.setItem("userName", userName);
      props.onlogin(userName);
    }
    else {
      const body = await response.json();
      setDisplayError(`Error: ${body.msg}`);
    }
  }


  function textChangeUser(e) {
    setUserName(e.target.value);
  }


  function textChangePassword(e) {
    setPassword(e.target.value);
  }


  return (
    <main>
        <div className="div_index">
            <input type='text' value={userName} onChange={textChangeUser} placeholder='Username'/>
            <input type='text' value={password} onChange={textChangePassword} placeholder='Password'/>
            <div className='button_section'> 
              <div className='buttonDiv'><button className="btn btn-primary btn-dark" onClick={() => LoginUser()} disabled={!userName || !password}>Login</button></div>
              <div className='buttonDiv'><button className="btn btn-primary btn-dark" onClick={() => CreateUser()} disabled={!userName || !password}>Create User</button></div>
            </div>
        </div>
        <ShowMessage message={displayError} onHide={() => setDisplayError(null)} />
    </main>
  );
}