import React from "react";
import NavBar from "./NavBar"
import Home from "./Home"
import About from "./About"
// import {useState} from "react"

function App() {
  
// const [state, setState] = useState(0)
// console.log(useState(0))

  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
