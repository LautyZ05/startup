import React from 'react';
import "./play.css";

export function Play({bgColor, textColor, userName}) {
  const [currPlayer, setCurrPlayer] = React.useState("red");
  const [scores, setScores] = React.useState([]);
  const [winner, setWinner] = React.useState("None");
  const [winColor, setWinColor] = React.useState("None");
  
  React.useEffect(() => {
      fetch('/api/scoreboard')
          .then((response) => response.json())
          .then((scores) => {
              setScores(scores);
          });
  }, []);


  function changePlayerColor() {
    if (currPlayer == "red") {
      setCurrPlayer("yellow");
    }
    else {
      setCurrPlayer("red");
    }
  }


  function checkCircleBelow(divID) {
    let key = false;
    let myDiv = document.getElementById(divID);
    let splitedID = divID.split("/");
    splitedID[0] = parseInt(splitedID[0]) + 5;

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


  async function settheScores(win_num, losses) {
        await fetch("/api/scores", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ name: userName, wins: win_num, loss: losses }),
        });
    }


  function declarWinner(color) {
    let curr_wins = 0;
    let curr_loss = 0;

    if (scores.length) {
      for (const [i, score] of scores.entries()) {
        let curr_name = score.name;
        if (curr_name == userName) {
          curr_wins = score.wins
          curr_loss = score.loss
        }
      }
    }

    if (color == "red") {
        setWinner("red")
        setWinColor("Red")
        settheScores(curr_wins+1, curr_loss);
    }
    if (color == "yellow") {
        setWinner("yellow")
        setWinColor("Yellow")
        settheScores(curr_wins, curr_loss+1);
    }
    document.getElementById("invis").style.display = 'flex';
  }

  function getColor(divID) {
        let myDiv = document.getElementById(divID);
        let divColor = window.getComputedStyle(myDiv).backgroundColor;
        return divColor;
  }


  function checkWin() {
        let currentColor = "rgb(255, 0, 0)"

        if (currPlayer == "yellow") {
            currentColor = "rgb(255, 255, 0)"
        }

        var max_row = 6
        var max_column = 7

        //Checks for horizontal win
        for (let row = 0; row < max_row; row++) {
            for (let column = 0; column < max_column-3; column++) {
                if (getColor(JSON.stringify(row) + "/" + JSON.stringify(column)) == currentColor && getColor(JSON.stringify(row) + "/" + JSON.stringify(column+1)) == currentColor && getColor(JSON.stringify(row) + "/" + JSON.stringify(column+2)) == currentColor && getColor(JSON.stringify(row) + "/" + JSON.stringify(column+3)) == currentColor) {
                    declarWinner(currPlayer);
                    return;
                }
            }
        }

        //Checks for vertical win
        for (let column = 0; column < max_column; column++) {
            for (let row = 0; row < max_row-3; row ++) {
                if (getColor(JSON.stringify(row) + "/" + JSON.stringify(column)) == currentColor && getColor(JSON.stringify(row+1) + "/" + JSON.stringify(column)) == currentColor && getColor(JSON.stringify(row+2) + "/" + JSON.stringify(column)) == currentColor && getColor(JSON.stringify(row+3) + "/" + JSON.stringify(column)) == currentColor) {
                    declarWinner(currPlayer);
                    return;
                }
            }
        }

        //Checks for diagonal win like \
        for (let row = 0; row < max_row-3; row++) {
            for (let column = 0; column < max_column-3; column++) {
                if (getColor(JSON.stringify(row) + "/" + JSON.stringify(column)) == currentColor && getColor(JSON.stringify(row+1) + "/" + JSON.stringify(column+1)) == currentColor && getColor(JSON.stringify(row+2) + "/" + JSON.stringify(column+2)) == currentColor && getColor(JSON.stringify(row+3) + "/" + JSON.stringify(column+3)) == currentColor) {
                    declarWinner(currPlayer);
                    return;
                }
            }
        }

        //Checks for diagonal win like /
        for (let row = 3; row < max_row; row++) {
            for (let column = 0; column < max_column-3; column++) {
                if (getColor(JSON.stringify(row) + "/" + JSON.stringify(column)) == currentColor && getColor(JSON.stringify(row-1) + "/" + JSON.stringify(column+1)) == currentColor && getColor(JSON.stringify(row-2) + "/" + JSON.stringify(column+2)) == currentColor && getColor(JSON.stringify(row-3) + "/" + JSON.stringify(column+3)) == currentColor) {
                    declarWinner(currPlayer);
                    return;
                }
            }
        }
  }


  function changeColor(divID) {
    if (winner != "None") {
      console.log("Winner is chosen");
      return;
    }

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
      checkWin();
    }
  }


  return (
    <main style={{ background: bgColor, color: textColor}}>
        <section className="section_play">
            <div id="playerColorBox"><h3 style={{ color: currPlayer }}>Current Player</h3></div>
            <div>To drop coin, click the circles at the top row</div>
            <div>Have Fun! :)</div>
            <div id="invis">{winColor} has Won!!!</div>
        </section>
        {/* DivID works by Row / Column */}
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