import React from 'react';

export function LoggedIn(props) {
    function logout() {
        localStorage.removeItem("userName");
        props.onlogout();
    }

  return (
    <main>
        <div className="div_index">
            <button className="btn btn-primary btn-dark" onClick={logout}>Log Out</button>
        </div>
    </main>
  );
}