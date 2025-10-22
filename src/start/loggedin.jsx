import React from 'react';

export function LoggedIn({userName}) {
    function logout() {
        localStorage.removeItem("userName");
    }

  return (
    <main>
        <div className="div_index">
            <button className="btn btn-primary btn-dark" onClick={logout}>Log Out</button>
        </div>
    </main>
  );
}