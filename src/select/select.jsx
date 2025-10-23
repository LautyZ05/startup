import React from 'react';

export function Select({bgColor, textColor}) {
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

        <section>
            <h2>Leaderboards</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>%</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>enter</th>
                        <th>enter</th>
                        <th>enter</th>
                        <th>enter</th>
                    </tr>
                </tbody>
            </table>
        </section>
    </main>
  );
}