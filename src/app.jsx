import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className="body">
        <header>
            <a id="back" href="index.html"><button type="submit" class="btn btn-primary btn-sm">Back</button></a>
            <h1 id="centered_title">Connect the Dots</h1>
            <p> </p>
        </header>
        
        <main>main stuff go here</main>
        

        <footer>
            <div class="foot"><a href="aboutus.html">About</a></div>        
            <div class="foot"><a href="setting.html">Settings</a></div>
            <div class="foot"><a href="https://github.com/LautyZ05/startup?tab=readme-ov-file">GitHub Link</a></div>
        </footer>
    </div>
  );
}