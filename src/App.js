import React from "react";
import './App.css';

import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>Dictionary</header>
      <main>
        <Dictionary defaultKeyword="ocean"/>
      </main>
      <footer>
      <small>This project was coded by Brenann Francis and is{" "}
      <a href="https://github.com/brenann-lsf/react-dictionary-app" rel="noreferrer" target="_blank">
        open-sourced on GitHub
      </a>
      </small>
    </footer>
      </div>
    </div>
  );
}


