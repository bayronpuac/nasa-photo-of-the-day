import React from "react";
import "./App.css";
import NASAList from "./Components/NASAList"

function App() {
  return (
    <div className="App">
      <nav className="navigation">
        <a href="Picture">Picture of the day</a>
      </nav>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label="Rocket">🚀</span>!
      </p>
      <NASAList />
    </div>
  );
}

export default App;
