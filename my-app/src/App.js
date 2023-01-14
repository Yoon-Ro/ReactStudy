import React from "react";
import './App.css';
import { Navbar } from "./components";
import { Hero } from './containers';





function App() {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Navbar/>
      </div>
      <Hero/>
    </div>
  );
}

export default App;
