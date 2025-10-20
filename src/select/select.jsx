import React from 'react';

export function Select() {
  return (
    <main>
        <section className="player_s">
            <h2>Guest</h2>
            <div>
                <a className="options" href="play.html"><button className="btn btn-primary btn-dark">1 Player</button></a>
                <a className="options" href="play.html"><button className="btn btn-primary btn-dark">2 Players</button></a>
            </div>
        </section>

        <section className="player_s">
            <h2>Log In</h2>
            <div>
                <a className="options" href="play.html"><button className="btn btn-primary btn-dark">1 Player</button></a>
                <a className="options" href="play.html"><button className="btn btn-primary btn-dark">2 Players</button></a>
            </div>
        </section>

        <section>
            <h2>Leaderboards</h2>
            
            <table>
                <tr>
                    <th>Name</th>
                    <th>Wins</th>
                    <th>Losses</th>
                    <th>%</th>
                </tr>
                <tr>
                    <td>[Insert something here]</td>
                    <td>[Insert something here]</td>
                    <td>[Insert something here]</td>
                    <td>[Insert something here]</td>
                </tr>
                <tr>
                    <td>[Insert something here]</td>
                    <td>[Insert something here]</td>
                    <td>[Insert something here]</td>
                    <td>[Insert something here]</td>
                </tr>
            </table>
        </section>
    </main>
  );
}