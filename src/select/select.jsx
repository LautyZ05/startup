import React from 'react';
import "./select.css";

export function Select({bgColor, textColor}) {
    const [scores, setScores] = React.useState([]);

    React.useEffect(() => {
        // This will be replaced with a 3rd party service call
        const scoresText = localStorage.getItem("scoreBoard")
        if (scoresText) {
            setScores(JSON.parse(scoresText));
        }
    }, []);

    const rows = [];
    if (scores.length) {
        for (const [i, score] of scores.entries()) {
            rows.push(
                <tr key={i}>
                    <td>{score.name}</td>
                    <td>{score.wins}</td>
                    <td>{score.loss}</td>
                    <td>{score.wins/score.loss}</td>
                </tr>
            );
        }
    }
    else {
        rows.push(
            <tr key="0">
                <td colSpan="4">Gotta play to see your score</td>
            </tr>
        );
    }

    //temp code below until I can get the main game working
    function settheScores() {
        localStorage.setItem('scoreBoard', JSON.stringify([{"name":"bob","wins":5,"loss":4}]));
  }

  return (
    <main style={{background: bgColor, color:textColor}}>
        <section className="player_s">
            <h2>Select Number</h2>
            <h2>of Players</h2>
            <div>
                <a className="options" href="play.html"><button className="btn btn-primary btn-dark">1 Player</button></a>
                <a className="options" href="play.html"><button className="btn btn-primary btn-dark">2 Players</button></a>
            </div>
        </section>

        <div className='div_index'>
            <div>press button below to test scoreboard as the main game isn't finished</div>
            <button className="btn btn-primary btn-dark" onClick={settheScores}>Set Score</button>
        </div>

        <section>
            <h2>Leaderboards</h2>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Wins</td>
                        <td>Losses</td>
                        <td>%</td>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </section>
    </main>
  );
}