import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// const {useState} = React

// React Hooks -> Gove Functional Components the Ability to Have and change their state

const colors = [
  "teal",
  "red",
  "pink",
  "blue",
  "magento",
  "yellow",
  "#bada55",
  "khaki",
];

function App() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function increment() {
    setCount(count + 1);
    // setCount("Hello, me gusta queso");
  }

  function decrement() {
    // count--f;
    if (count === 0) {
      setCount(0);
      return;
    }
    setCount(count - 1);
  }

  function toggleEyeSuffering() {
    setIsDarkMode(!isDarkMode);
  }

  function feelingLucky() {
    setCount(Math.floor(Math.random() * 100000000));
  }

  let appHeaderClass = `App-header`;

  if (isDarkMode) {
    appHeaderClass += ` darkMode`;
  }

  const isEyesSuffering = isDarkMode
    ? "aaaah, so chill, kind of need a wake me up"
    : "my eyes my eyes";

  // ternary expression
  // implied if else staement. if whats behind the question marks is truthy, do the immediately after the question mark, otherwise (else) do after the colon

  return (
    <div className="App">
      <header className={appHeaderClass}>
        <div
          style={{
            height: "30vh",
            width: "100vw",
            backgroundColor: colors[count % colors.length],
          }}
        ></div>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={decrement}>Decrement button</button>
        <div>This has been clicked {count} times</div>
        <button onClick={increment}>Increment count</button>
        <button onClick={feelingLucky}>I'm feeling lucky</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={toggleEyeSuffering}>{isEyesSuffering}</button>
      </header>
    </div>
  );
}

export default App;
