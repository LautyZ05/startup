import React from 'react';

import { NotLoggedIn } from './notloggedin';
import { LoggedIn } from './loggedin';
import { CheckState } from './checkState';

export function Start({userName, checkState, onChangeState}) {

  return (
    <main>
        <div className="div_index">
            <h1 className="h1_index">Welcome Player!</h1>
            {checkState === CheckState.NotGood && <NotLoggedIn userName={userName} onlogin={() => onChangeState(setUser, CheckState.AllGood)}/>}
            {checkState === CheckState.AllGood  && <LoggedIn userName={userName} onlogout={() => onChangeState(setUser, CheckState.NotGood)}/>}

            <div className="startdiv">
              <div>Warning: None of the buttons in the main area work.</div>
              <div>They will send you to error page 404.</div>
              <div>Use navigation buttons in header to go through the pages :)</div>
            </div>
        </div>
    </main>
  );
}