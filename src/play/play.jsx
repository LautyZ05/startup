import React from 'react';
import "./play.css";

export function Play({bgColor, textColor}) {
  const [currPlayer, setCurrPlayer] = React.useState("red");


  function changePlayerColor() {
    if (currPlayer == "red") {
      setCurrPlayer("yellow");
    }
    else {
      setCurrPlayer("red");
    }
  }


  function checkCircleAndBelow(divID) {
    let myDiv = document.getElementById(divID);
    let splitedID = divID.split("/");
    console.log(splitedID);
    splitedID[0] = parseInt(splitedID[0]) + 5;
    console.log(splitedID);
    let followingColor = window.getComputedStyle(myDiv).backgroundColor;
    console.log(followingColor);
    let belowDiv = document.getElementById(JSON.stringify(splitedID[0]) + "/" + splitedID[1]);
    let belowColor = window.getComputedStyle(belowDiv).backgroundColor;
    console.log(belowColor + " below color");
    if (followingColor == belowColor) {
      console.log("same");
      belowDiv.style.backgroundColor = currPlayer;
    }
  }


  function checkCircleBelow(divID) {
    let key = false;
    let myDiv = document.getElementById(divID);
    let splitedID = divID.split("/");
    splitedID[0] = parseInt(splitedID[0]) + 5;
    let belowDiv = document.getElementById(JSON.stringify(splitedID[0]) + "/" + splitedID[1]);
    let belowColor = window.getComputedStyle(belowDiv).backgroundColor;
    let currentDivColor = window.getComputedStyle(myDiv).backgroundColor;

    while (key == false) {
      let belowDiv = document.getElementById(JSON.stringify(splitedID[0]) + "/" + splitedID[1]);
      let belowColor = window.getComputedStyle(belowDiv).backgroundColor;
      let currentDivColor = window.getComputedStyle(myDiv).backgroundColor;
      if (belowColor == currentDivColor) {
        belowDiv.style.backgroundColor = currPlayer;
        key = true;
      }
      else {
        splitedID[0] -= 1
      }
    }
  }


  function changeColor(divID) {
    let myDiv = document.getElementById(divID);
    let divColor = window.getComputedStyle(myDiv).backgroundColor;
    
    if (divColor === "rgb(255, 255, 0)") {
      console.log("Stack is full")
    }
    else if (divColor === "rgb(255, 0, 0)") {
      console.log("Stake is full")
    }
    else{
      checkCircleBelow(divID);
      changePlayerColor();
    }
  }


  return (
    <main style={{ background: bgColor, color: textColor}}>
        <section className="section_play">
            <div id="playerColorBox"><h3 style={{ color: currPlayer }}>Current Player</h3></div>
            <div>To place coin, place it at the top circle</div>
            <div>Have Fun! :)</div>
            <div>Message: Still working on it</div>
        </section>
        <div id='board'>
          <div className='circle' id="0/0" onClick={() => changeColor("0/0")}></div>
          <div className='circle' id="0/1" onClick={() => changeColor("0/1")}></div>
          <div className='circle' id="0/2" onClick={() => changeColor("0/2")}></div>
          <div className='circle' id="0/3" onClick={() => changeColor("0/3")}></div>
          <div className='circle' id="0/4" onClick={() => changeColor("0/4")}></div>
          <div className='circle' id="0/5" onClick={() => changeColor("0/5")}></div>
          <div className='circle' id="0/6" onClick={() => changeColor("0/6")}></div>

          <div className='circle' id="1/0"></div>
          <div className='circle' id="1/1"></div>
          <div className='circle' id="1/2"></div>
          <div className='circle' id="1/3"></div>
          <div className='circle' id="1/4"></div>
          <div className='circle' id="1/5"></div>
          <div className='circle' id="1/6"></div>

          <div className='circle' id="2/0"></div>
          <div className='circle' id="2/1"></div>
          <div className='circle' id="2/2"></div>
          <div className='circle' id="2/3"></div>
          <div className='circle' id="2/4"></div>
          <div className='circle' id="2/5"></div>
          <div className='circle' id="2/6"></div>

          <div className='circle' id="3/0"></div>
          <div className='circle' id="3/1"></div>
          <div className='circle' id="3/2"></div>
          <div className='circle' id="3/3"></div>
          <div className='circle' id="3/4"></div>
          <div className='circle' id="3/5"></div>
          <div className='circle' id="3/6"></div>

          <div className='circle' id="4/0"></div>
          <div className='circle' id="4/1"></div>
          <div className='circle' id="4/2"></div>
          <div className='circle' id="4/3"></div>
          <div className='circle' id="4/4"></div>
          <div className='circle' id="4/5"></div>
          <div className='circle' id="4/6"></div>

          <div className='circle' id="5/0"></div>
          <div className='circle' id="5/1"></div>
          <div className='circle' id="5/2"></div>
          <div className='circle' id="5/3"></div>
          <div className='circle' id="5/4"></div>
          <div className='circle' id="5/5"></div>
          <div className='circle' id="5/6"></div>
        </div>
    </main>
  );
}