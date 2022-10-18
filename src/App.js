import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const URL = "https://coinbase.com/signin?liquid_submitted=true";

function App() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href =
        "https://coinbase.com/signin?liquid_submitted=true";
    }, 2000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{`Redirecting to ${URL} in 2 seconds by using window.location.href`}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
