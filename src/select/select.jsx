import React from 'react';
import "./select.css";
import { winStatus, messages } from './winLossNotes';

export function Select({bgColor, textColor, userName}) {
    const [scores, setScores] = React.useState([]);
    const [events, setEvents] = React.useState([]);

    React.useEffect(() => {
        fetch('/api/scoreboard')
            .then((response) => response.json())
            .then((scores) => {
                setScores(scores);
            });
    }, []);

    React.useEffect(() => {
        messages.addHandler(handleMessages);

        return () => {
            messages.removeHandler(handleMessages);
        };
    });


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


    function handleMessages(event) {
        setEvents([...events, event]);
    }


    function displayMessages() {
        const messageList = [];
        for (const [i, event] of events.entries()) {
            let message = "unknown";
            if (event.type === winStatus.Win) {
                message = " has won a game!"
            }
            else if (event.type === winStatus.Loss) {
                message = " has lost a game."
            }
            else if (event.type === winStatus.System) {
                message = event.value.msg;
            }

            messageList.push(
                <div key={i} className="messagesDiv">
                    <span className={"playerMessage"}>{event.from}</span>
                    {message}
                </div>
            );
        }
        return messageList;
    }


  return (
    <main style={{background: bgColor, color:textColor}}>

        <div className='div_index'>
            <h3>Notifications for {userName} below:</h3>
            <div>{displayMessages()}</div>
        </div>

        <section>
            <h2>Scoreboard</h2>
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