import React from 'react';
import "./aboutus.css";

export function AboutUs({bgColor, textColor}) {
  const [quote, setQuote] = React.useState("Uno momento por favor!");
  const [author, setAuthor] = React.useState("If the quote hasn't loaded, ummm, author is unkown I guess");


  React.useEffect(() => {
    fetch('https://quote.cs260.click')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setAuthor(data.author);
      })
      .catch();
  }, []);


  return (
    <main style={{ background: bgColor, color: textColor}}>
        <section className="section_play">
            <h2>About</h2>
            <div className="about_div">
              <div>Connect the Dots is a simple website created by Lautaro Zarate for his CS260 class over at BYU.</div>
              <div>The premise of the website is a simple and easy way to play the popular game "Connect 4" online.</div>
            </div>
            <img id="c4_pic" alt="Image of a connect 4 game" src="connect_4_pic.jpeg" />

            <div className="about_div">
              <div>Here's a random quote that you'll hopefully like!</div>
              <div>Quote: {quote}</div>
              <div>Author: {author}</div>
            </div>
        </section>
        
    </main>
  );
}