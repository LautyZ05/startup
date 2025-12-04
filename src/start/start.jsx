import React from 'react';

import { NotLoggedIn } from './notloggedin';
import { LoggedIn } from './loggedin';
import { CheckState } from './checkState';

export function Start({userName, checkState, onChangeState, bgColor, textColor}) {

  return (
    <main style={{ background: bgColor, color: textColor}}>
        <div className="div_index">
            <h1 className="h1_index">Welcome Player!</h1>
            {checkState === CheckState.NotGood && (
              <NotLoggedIn 
                userName={userName} 
                onlogin={(loginUserName) => {
                  onChangeState(loginUserName, CheckState.AllGood);
                }}
              />
            )}
            {checkState === CheckState.AllGood && (
              <LoggedIn userName={userName} onlogout={() => onChangeState(userName, CheckState.NotGood)}/>
            )}

            
        </div>
    </main>
  );
}